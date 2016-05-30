# Search

## <span class="tag">GET</span> /search

``` shell
curl https://rest.bullhorn.com/e999/search/Candidate?query=lastName:Smith&fields=id,firstName,lastname&count=3

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

The Search call retrieves a list of entities. The search call is performed against a optimized index, therefore the query parameter should reflect Lucene Query Syntax. For information about the Lucene query syntax, see: [Lucene Tutorial](http://www.lucenetutorial.com/lucene-query-syntax.html)

<aside class="notice">If you provide no request parameters, a list of available search fields are provided.</aside>

Note that the response contains a _score field. This is the Lucene score. Also, if the database record for an entity id is missing, the response contains an _error field for that record.

<aside class="notice">If parameter "fields" or "layout" is not present, the search will return the list of found entity ids in the returned "data".</aside>

``` shell
curl https://rest.bullhorn.com/e999/search/Candidate?query=isDeleted:0

# Example Response
{
    "data": [101,102,103,104,...,999]
}
```

### HTTP Request

`[corpToken]/search/[entity]?query=[lucene]&fields=[fields]&orderBy=[fields]&count=[count]&start=[start]`

Params | Required | Description
------ | -------- | -----
query | yes | Lucene-Style filter clause see for syntax
fields | yes* | Comma-separated list of field names. Use fields or layout, but not both.
layout | yes* | Name of a configured layout. Use fields or layout, but not both.
showReadOnly | no | (true/false) Whether to show read-only fields. Only applies when the layout parameter is used.
count | no | Limit on the number of records to return. If the set of matched results is larger than count, cap the returned results at size count.
start | no | From the set of matched results, return record numbers start through (start + count)
sort | no | Field to sort result on. Default sort order is ascending. Precede with minus sign to perform descending sort. 
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data. For more information, see
showEditable | no | (true/false) Whether to show the _editable field in responses. The _editable field indicates whether an entity is editable. Default value is false.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or a special HTTP header. See for details on how to provide it.

<aside class="warning">Returns an HTTP 404 if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.</aside>
