
# Find

## <span class="tag">GET</span> /find

``` javascript
// [GET] https://rest.bullhorn.com/e999/find?query=smith&countPerEntity=3
// returns...
{
    "data": [{
      "id" : 5059165,
      "firstName" : "Alanzo",
      "lastName" : "Smith"
    }]
}
```

FastFind is a specialized type of search that attempts to detect the kind of information contained in the search query. It then searches against entity fields that contain that type of information. Since FastFind attempts to detect the intent of a search query, it requires no special query language or syntax. Queries consist of only the words or numbers for which a user wants to search.

(FastFind) Searches the following entity types given a string containing search terms:

*   ClientContact
*   JobOrder
*   Candidate
*   ClientCorporation
*   Lead (if leadsAndOpportunitiesEnabled = true)
*   Opportunity (if leadsAndOpportunitiesEnabled = true)

The results are returned in a flat list, with results from each entity type grouped together.

### HTTP Request

`[corporation-token]/find?query=[query-text]&countPerEntity=[entity-max-results]`

Params | Required | Description
------ | -------- | -----
query | yes | Text of search query.
countPerEntity | no | Maximum number of results to return for each entity type
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data. For more information, see
showEditable | no | (true/false) Whether to show the editable field in responses. The editable field indicates whether an entity is editable. Default value is false.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or a special HTTP header. See for details on how to provide it.

<aside class="warning">Returns an HTTP 404 if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.</aside>

### Field Type Detection

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

[joe_smith@something-else.com](mailto:joe_smith@something-else.com) or [jon33@foo.bar](mailto:jon33@foo.bar)

**U.S. phone number**

Three digits followed by any of [-.* or space, optionally followed by three more digits followed by [-.* or space, optionally followed by four digits.

For example, 23- or 123-456 or 123-456-7890

**International phone number**

Either of the following two patterns will match:

*   + followed by any combination of 0-9, -, *, (, ), . or space, followed by *

For example: +1-234-56*

*   Exactly 10 digits, separated by any combination of +, -, *, (, ), . or space  

For example: 1-234-567-8901

**Entity ID**

Only numeric characters For example: `1234567`

**Person or company name**

One or more contiguous words that contain any combination of a-z, A-Z, 0-9, separated by any number of spaces. For multi-word queries, FastFind uses the first word to search the first name of Candidates and ClientContacts, and the remaining words to search the last name. FastFind searches JobOrders using the attached ClientContact names with the same rules.

### Wildcards

You can use the * character as a wildcard inside or at the end of any word in a query.  Using a wildcard changes the fields that are searched for some entity types.  See the field type mappings table for details.
