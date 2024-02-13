# Query

## <span class="tag">POST</span> /query
``` shell
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{ "ids": [7681,2625,1464,6548,6978,3654], "showTotalMatched": true, "start": 0, "count": 3}' \
      https://rest.bullhornstaffing.com/rest-services/e999/association/Candidate/primarySkills

# Example Response
{
    "total": 24,
    "data": [
        [
            7451268,
            10115
        ],
        [
            7451268,
            19739
        ],
        [
            7451268,
            241506
        ]
    ]
}
```

Retrieves a list of to-many associations for a given entity.

<aside class="notice">NOTE: At least one of the required parameters(fields and layout) or both must be specified.</aside>

### HTTP Request

`{corpToken}/query/{entity}?fields={fields}&orderBy={fields}&count={count}&start={start}`

Parameter | Required | Description
------ | -------- | -----
fields | yes* | Comma-separated list of field names. Use fields or layout, but not both.
layout | yes* | Name of a configured layout. Use fields or layout, but not both.
showReadOnly | no | (true/false) Whether to show read-only fields. Only applies when the layout parameter is used.
count | no | Limit on the number of records to return. If the set of matched results is larger than count, cap the returned results at size count. Max allowed count 10k. Only required in the body of the call.
start | no | From the set of matched results, return record numbers start through (start + count). Only required in the body of the call.
orderBy | no | Name of property on which to base the order of returned entities.
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data.
showEditable | no | (true/false) Whether to show the _editable field in responses. The _editable field indicates whether an entity is editable. Default value is false.
showtotalcount| no | (true/false) When set to true, only the total count of records matching the where body is returned. In this scenario, only the where body is required and all other parameters are ignored.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.</aside>
