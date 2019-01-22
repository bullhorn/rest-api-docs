# Search

## <span class="tag">GET</span> /search

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/search/Candidate?query=lastName:Smith&fields=id,firstName,lastname&count=3

# Example Response
{
    "data": [{
      "_score": 1.70002,
      "id" : 5059165,
      "firstName" : "Alanzo",
      "lastName" : "Smith"
    }]
}
```

Retrieves a list of entities. For long query values, always use the POST version of the search operation rather than this GET version.
The search call is performed against a Lucene index. For information about the Lucene query syntax, see: [Lucene Tutorial](http://www.lucenetutorial.com/lucene-query-syntax.html)

<aside class="notice">If you provide no request parameters on the GET form of the call, a list of available search fields is provided.</aside>

Note that the response contains a _score field. This is the Lucene score. Also, if the database record for an entity id is missing, the response contains an _error field for that record.

<aside class="notice">If parameter "fields" or "layout" is not present, the search will return the list of found entity ids in the returned "data".</aside>

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/search/Candidate?query=isDeleted:0

# Example Response
{
    "data": [101,102,103,104,...,999]
}
```

### HTTP Request

`{corpToken}/search/{entity}?query={lucene}&fields={fields}&sort={fields}&count={count}&start={start}`

Parameter | Required | Description
------ | -------- | -----
query | yes | Lucene-style filter clause.
fields | yes* | Comma-separated list of field names. Use fields or layout, but not both.
layout | yes* | Name of a configured layout. Use fields or layout, but not both.
showReadOnly | no | (true/false) Whether to show read-only fields. Only applies when the layout parameter is used.
count | no | Limit on the number of records to return. If the set of matched results is larger than count, cap the returned results at size count.
start | no | From the set of matched results, return record numbers start through (start + count)
sort | no | Field to sort result on. Default sort order is ascending. Precede with minus sign to perform descending sort. 
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data. For more information, see
showEditable | no | (true/false) Whether to show the _editable field in responses. The _editable field indicates whether an entity is editable. Default value is false.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.</aside>

## <span class="tag">POST</span> /search

``` shell
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"query": "id:10125 10126 10127 10128 10129 10130 10131 10132 10133 10134 10135 10136 10137 10138 17376 26865 67604 67605 80203 80204 80205 80206 80207 80208 80209 80210 80211 80212 80213 80214"}' \
      https://rest.bullhornstaffing.com/rest-services/e999/search/Candidate?fields=id,firstName,lastname&count=3

# Example Response
{
    "data": [{
      "_score": 1.70002,
      "id" : 10125,
      "firstName" : "Alanzo",
      "lastName" : "Smith"
    }]
}
```

Retrieves a list of entities. For long `query` values, always use this version of the search operation rather than the GET version. Place the `query` in JSON format in the request body. For example:
```
{"query": "id:10125 10126 10127 10128 10129 10130 10131 10132 10133 10134 10135 10136 10137 10138 17376 26865 67604 67605 80203 80204 80205 80206 80207 80208 80209 80210 80211 80212 80213 80214"}
```

The search call is performed against a Lucene index. For information about the Lucene query syntax, see: [Lucene Tutorial](http://www.lucenetutorial.com/lucene-query-syntax.html)

Note that the response contains a _score field. This is the Lucene score. Also, if the database record for an entity id is missing, the response contains an _error field for that record.

### HTTP Request

`{corpToken}/search/{entity}?fields={fields}&sort={fields}&count={count}&start={start}`

Parameter | Required | Description
------ | -------- | -----
fields | yes* | Comma-separated list of field names. Use fields or layout, but not both.
layout | yes* | Name of a configured layout. Use fields or layout, but not both.
showReadOnly | no | (true/false) Whether to show read-only fields. Only applies when the layout parameter is used.
count | no | Limit on the number of records to return. If the set of matched results is larger than count, cap the returned results at size count.
start | no | From the set of matched results, return record numbers start through (start + count)
sort | no | Field to sort result on. Default sort order is ascending. Precede with minus sign to perform descending sort. 
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data. For more information, see
showEditable | no | (true/false) Whether to show the _editable field in responses. The _editable field indicates whether an entity is editable. Default value is false.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.</aside>
