# Query

## <span class="tag">GET</span> /query

The `Query` call retrieves a list of entitys. The query is performed against the database, therefore the `where` parameter should reflect SQL syntax.  Access the data via that database is only performant when query very specific data, otherwised it is preferred that you use the [Search](/#search) call.

<aside class="notice">NOTE: At least one of the required parameters(fields and layout) or both must be specified.</aside>

``` javascript
// [GET] https://rest.bullhorn.com/e999/query/Candidate?fields=firstName,lastName&where=lastName='smith'&count=3
{
    "data": [{
        "id" : 5059165,
        "firstName" : "Alanzo",
        "lastName" : "Smith"
    }]
}
```

### HTTP Request

`[corpToken]/query/[entity]?where=[query-text]&fields=[fields]&orderBy=[fields]&count=[count]&start=[start]`

Params | Required | Description
------ | -------- | -----
where | yes | SQL-style filter clause see for syntax
fields | yes* | Comma-separated list of field names. Use fields or layout, but not both.
layout | yes* | Name of a configured layout. Use fields or layout, but not both.
showReadOnly | no | (true/false) Whether to show read-only fields. Only applies when the layout parameter is used.
count | no | Limit on the number of records to return. If the set of matched results is larger than count, cap the returned results at size count.
start | no | From the set of matched results, return record numbers start through (start + count)
orderBy | no | Name of property on which to base the order of returned entities.
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data. For more information, see
showEditable | no | (true/false) Whether to show the _editable field in responses. The _editable field indicates whether an entity is editable. Default value is false.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or a special HTTP header. See for details on how to provide it.

<aside class="warning">Returns an HTTP 404 if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.</aside>
