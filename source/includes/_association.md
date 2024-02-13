# Query

## <span class="tag">POST</span> /association
``` shell
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{ "ids": [7681,2625,1464], "showTotalMatched": true, "start": 0, "count": 3}' \
      https://rest.bullhornstaffing.com/rest-services/e999/association/Candidate/primarySkills

# Example Response
{
    "total": 24,
    "data": [
        [
            7681,
            10115
        ],
        [
            2625,
            19739
        ],
        [
            1464,
            241506
        ]
    ]
}
```

Retrieves a list of associated entity ids for a given entity. The association field can be a to-many or to-one association.

### HTTP Request

`{corpToken}/association/{entity}/{association field}`

Parameter | Required | Description
------ | -------- | -----
ids | yes | List of entity ids. Must be set in the body of the request rather than in a URL query parameter.
count | no | Limit on the number of records to return. If the set of matched results is larger than count, cap the returned results at size count. The Max allowed count is 10000.  
start | no | From the set of matched results, return record numbers start through (start + count). 
showTotalMatched | no | (true/false) When set to true, the total count of matching items is returned.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

