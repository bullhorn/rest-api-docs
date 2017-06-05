
# Find

## <span class="tag">GET</span> /find

``` shell
curl https://rest.bullhornstaffing.com/e999/find?query=smith&countPerEntity=3

# Example Response
{
    "data": [{
      "id" : 5059165,
      "firstName" : "Alanzo",
      "lastName" : "Smith"
    }]
}
```

FastFind is anized type of search that attempts to detect the kind of information contained in the search query. It then searches against entity fields that contain that type of information. Since FastFind attempts to detect the intent of a search query, it requires no special query language or syntax. Queries consist of only the words or numbers for which a user wants to search.

(FastFind) Searches the following entity types given a string containing search terms:

*   ClientContact
*   JobOrder
*   Candidate
*   ClientCorporation
*   Lead (if leadsAndOpportunitiesEnabled = true)
*   Opportunity (if leadsAndOpportunitiesEnabled = true)

The results are returned in a flat list, with results from each entity type grouped together.

### HTTP Request

`{corpToken}/find?query={query-text}&countPerEntity={entity-max-results}`

Parameter | Required | Description
------ | -------- | -----
query | yes | Text of search query.
countPerEntity | no | Maximum number of results to return for each entity type
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data. For more information, see
showEditable | no | (true/false) Whether to show the editable field in responses. The editable field indicates whether an entity is editable. Default value is false.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.</aside>

### Field type detection

FastFind classifies a search query as one of the following types depending of the structure of the text in the query:

*   entity ID
*   US or International phone number
*   person or company name
*   email address

FastFind performs classification by checking the query against the following patterns, in the order listed:

### Query patterns

**Email address**

Any combination of a-z,A-Z,0-9,!,#,$,%, &, ', *, +, -, /, =, ?, ^, _ or ` but not ., followed by @, followed by any combination of a-z, A-Z, 0-9, _, -, +, ., *

For example:

joe_smith@something-else.com or jon33@foo.bar

**U.S. phone number**

Three digits followed by any of [-.* or space, optionally followed by three more digits followed by [-.* or space, optionally followed by four digits.

For example:

23- or 123-456 or 123-456-7890

**International phone number**

Either of the following two patterns will match:

+ followed by any combination of 0-9, -, *, (, ), . or space, followed by *

For example: +1-234-56*

* Exactly 10 digits, separated by any combination of +, -, *, (, ), . or space  

For example:

1-234-567-8901

**Entity ID**

Only numeric characters For example: `1234567`

**Person or company name**

One or more contiguous words that contain any combination of a-z, A-Z, 0-9, separated by any number of spaces. For multi-word queries, FastFind uses the first word to search the first name of Candidates and ClientContacts, and the remaining words to search the last name. FastFind searches JobOrders using the attached ClientContact names with the same rules.

### Wildcards

You can use the * character as a wildcard inside or at the end of any word in a query.  Using a wildcard changes the fields that are searched for some entity types.  See the field type mappings table for details.

### Query logic
The following table plots the fields that are searched for a given query classification and entity type: 

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
</head>
<body>
<table>
<tr class="header">
<th><strong>Detected type</strong></th>
<th><strong>Candidate</strong></th>
<th><strong>Contact</strong></th>
<th><strong>Corporation</strong></th>
<th><strong>JobOrder</strong></th>
<th><strong>Lead</strong></th>
<th><strong>Opportunity</strong></th>
</tr>
</thead>
<tr class="odd">
<td><strong>email</strong></td>
<td>email1<br />
email2<br />
email3</td>
<td>email1<br />
email2<br />
email3</td>
<td> </td>
<td>clientContact.email1<br />
clientContact.email2<br />
clientContact.email2</td>
<td><p>email1</p>
<p>email2</p>
<p>email3</p></td>
<td> </td>
</tr>
<tr class="even">
<td><strong>phone</strong></td>
<td>phone<br />
phone2<br />
phone3<br />
mobile</td>
<td>phone<br />
phone2<br />
phone3<br />
mobile</td>
<td>phone<br />
billingPhone</td>
<td>clientContact.phone<br />
clientContact.phone2<br />
clientContact.phone3<br />
clientContact.mobile</td>
<td><p> phone</p>
<p>phone2</p>
<p>phone3</p>
<p>mobile</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>ID</strong></td>
<td>id</td>
<td>id</td>
<td>id</td>
<td>id</td>
<td>id</td>
<td>id</td>
</tr>
<tr class="even">
<td><strong>multi-word<br />
name</strong></td>
<td>firstName (first word)<br />
lastName (remaining words)</td>
<td>firstName (first word)<br />
lastName (remaining words)</td>
<td>name</td>
<td>title (all words)<br />
clientContact.firstName (first word)<br />
clientContact.lastName (remaining words)<br />
clientCorporation.name (all words)</td>
<td><p>firstName (first word)</p>
<p>middleName(second word, if 3 words)</p>
<p>lastName(second word, 3rd word if 3 words)</p></td>
<td><p>title (all words)</p>
<p>clientContact.firstName (first word)</p>
<p>clientContact.lastName (remaining words)</p>
<p>clientCoporation.name (all words)</p></td>
</tr>
<tr class="odd">
<td><strong>single-word<br />
name</strong></td>
<td>lastName</td>
<td>lastName</td>
<td>name</td>
<td>title<br />
clientContact.lastName<br />
clientCorporation.name</td>
<td>lastName</td>
<td><p>title</p>
<p>clientContact.lastName</p>
<p>clientCorporation.name</p></td>
</tr>
<tr class="even">
<td><strong>single-word<br />
name with wildcard</strong></td>
<td>firstName</td>
<td>firstName</td>
<td>name</td>
<td>title<br />
clientContact.firstName<br />
clientCorporation.name</td>
<td>firstName</td>
<td><p>title</p>
<p>clientContact.firstName</p>
<p>clientCorporation.name</p></td>
</tr>
</table>
</body>
</html>

