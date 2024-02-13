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

Retrieves a list of to-many associations for a given entity.


### HTTP Request

`{corpToken}/association/{entity}/{field}`

Parameter | Required | Description
------ | -------- | -----
ids | yes | List of entity ids. These cannot be set in the URL and are only required in the body of the POST call.
count | no | Limit on the number of records to return. If the set of matched results is larger than count, cap the returned results at size count. Max allowed count 10k. This is only required in the body of the POST call.
start | no | From the set of matched results, return record numbers start through (start + count). This is only required in the body of the POST call.
showTotalMatched (optional)| no | (true/false) When set to true, only the total count of records matching the where body is returned. In this scenario, only the where body is required and all other parameters are ignored.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

