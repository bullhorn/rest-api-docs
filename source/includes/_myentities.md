#My Entities
##<span class="tag">GET</span> /my{Entity}s
``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/myClientContacts?fields=firstName,lastName,address&start=0&count=5

# Example Response
{
   "data":    [
            {
         "lastName": "Burns",
         "address":          {
            "address1": "2 Olive Lane",
            "address2": "",
            "city": "Ridgefield",
            "state": "CT",
            "zip": "06877",
            "countryID": 1
         }
      },
            {
         "lastName": "Rackley",
         "address":          {
            "address1": "00 Jeffrey Way, Suite 400 |",
            "address2": "",
            "city": "Round Rock",
            "state": "TX",
            "zip": "78665",
            "countryID": 1
         }
      },
            {
         "lastName": "Smith",
         "address":          {
            "address1": "700 Jeffrey Way, Suite 400",
            "address2": "",
            "city": "Round Rock",
            "state": "TX",
            "zip": "78664",
            "countryID": 1
         }
      },
            {
         "lastName": "Lemon",
         "address":          {
            "address1": "700 Jeffrey Way, Suite 400",
            "address2": "",
            "city": "Round Rock",
            "state": "TX",
            "zip": "78665",
            "countryID": 1
         }
      }
   ],
   "count": 4,
   "start": 0
}


```
Returns the entities for which the current user is the owner, for the following entity types: Candidate, ClientContact, ClientCorporation, JobOrder, Placement, and Note. For Candidate and Note requests, an _score field is included in each item returned; this is the Lucene search score.

### HTTP Request

`{corpToken}/my{Entity}s/?fields={fieldList}`

Parameter | Required | Description
------ | -------- | -----
fields | yes | Comma-separated list of field names. fields or layout is required.
layout | yes | Name of a configured layout. fields or layout is required.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.
departmentIds | no | Comma-separated list of department ids. When not specified, the call returns entities from all of the user's departments.
count | no | Limit on the number of entities to return. If the set of matched results is larger than the count value, the returned results is capped at the count value. The default count is 20. The maximum count is 500; if you specify a count greater than 500, a message at the end of the response indicates you have specified too many items. The response also includes the actual number of items returned and the start value of the request. This is useful when you want to make calls to page additional sets of data. 
start | no | From the set of matched results, returns item numbers start through (start + count).
sort | no | Field to sort result on. Precede with minus sign to perform ascending search. Applies to Candidate and Note entities only. 
query | no | Lucene query string. Applies to Candidate and Note entities only.
where | no | JPQL query string. Does not apply to Candidate or Note entities.
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data. 
showEditable | no | (true/false) Default value is false. Whether to show the _editable field in responses. The _editable field indicates whether an entity is editable. Setting showEditable to true results in slower performance; use this setting sparingly and only when needed. 


