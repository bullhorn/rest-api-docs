# allCorpNotes
##<span class="tag">GET</span> /allCorpNotes
``` shell
curl https://rest{{swimlane#}.bullhornstaffing.com/rest-services/e999/allCorpNotes?clientCorpId=4&fields=start=0&count=5

# Example Response
{
   "total": 9,
   "start": 3,
   "count": 4,
   "data":    [
            {
         "_score": 0.3471885,
         "id": 515,
         "action": "Outbound Call"
      },
            {
         "_score": 0.3091938,
         "id": 25,
         "action": "Outbound Call"
      },
            {
         "_score": 0.3091938,
         "id": 48,
         "action": "Outbound Call"
      },
...
   ]
}

```
Returns all Notes in the specified ClientCorporation. Specify the fields to be included in the response in the fields request parameter.  

### HTTP Request

`{corpToken}/allCorpNotes/?fields={fieldList}`

Parameter | Required | Description
------ | -------- | -----
fields | yes | Comma-separated list of field names. fields or layout is required.
layout | yes | Name of a configured layout. fields or layout is required.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.
clientCorpId | yes | id of a ClientCorporation entity. 

