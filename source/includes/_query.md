# Query

## <span class="tag">GET</span> /query

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/query/ClientContact?fields=firstName,lastName&where=lastName='smith'&count=3

# Example Response
{
    "data": [{
        "id" : 5059165,
        "firstName" : "Alanzo",
        "lastName" : "Smith"
    }]
}
```

Retrieves a list of entities. To avoid hitting URL length limits, always use the POST version of the query call rather than this GET version for `where` values that exceed 7500 characters in length. The query is performed against the database. The `where` parameter accepts Java Persistance Query Language (JPQL) syntax, which is similar SQL syntax.  Accessing data via that database is only performant when you query very specific data. Otherwise, it is preferable to use the [Search](#search) call when it is available for the entity type for which you want to search.

<aside class="notice">NOTE: At least one of the required parameters(fields and layout) or both must be specified.</aside>

### HTTP Request

`{corpToken}/query/{entity}?where={query-text}&fields={fields}&orderBy={fields}&count={count}&start={start}`

Parameter | Required | Description
------ | -------- | -----
where | yes | SQL-style filter clause
fields | yes* | Comma-separated list of field names. Use fields or layout, but not both.
layout | yes* | Name of a configured layout. Use fields or layout, but not both.
showReadOnly | no | (true/false) Whether to show read-only fields. Only applies when the layout parameter is used.
count | no | Limit on the number of records to return. If the set of matched results is larger than count, cap the returned results at size count.
start | no | From the set of matched results, return record numbers start through (start + count)
orderBy | no | Name of property on which to base the order of returned entities.
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data.
showEditable | no | (true/false) Whether to show the _editable field in responses. The _editable field indicates whether an entity is editable. Default value is false.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.</aside>

## <span class="tag">POST</span> /query
``` shell
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"where": "id IN (10125, 10126, 10127, 10128, 10129, 10130, 10131, 10132, 10133, 10134, 10135, 10136, 10137, 10138, 17376, 26865, 67604, 67605, 80203, 80204, 80205, 80206, 80207, 80208, 80209, 80210, 80211, 80212, 80213, 80214)"}' \
      https://rest.bullhornstaffing.com/rest-services/e999/query/ClientContact?fields=id,firstName,lastname&count=3

# Example Response
{
    "data": [{
        "id" : 10125,
        "firstName" : "Alanzo",
        "lastName" : "Smith"
    }]
}
```

Retrieves a list of entities. To avoid hitting URL length limits, always use this version of the query call rather than the GET version for `where` values that exceed 7500 characters in length. The query is performed against the database. The `where` field in the request body accepts Java Persistance Query Language (JPQL) syntax, which is similar SQL syntax.  Accessing data via that database is only performant when you query very specific data. Otherwise, it is preferable to use the [Search](#search) call when it is available for the entity type for which you want to search.

<aside class="notice">NOTE: At least one of the required parameters(fields and layout) or both must be specified.</aside>

### HTTP Request

`{corpToken}/query/{entity}?fields={fields}&orderBy={fields}&count={count}&start={start}`

Parameter | Required | Description
------ | -------- | -----
fields | yes* | Comma-separated list of field names. Use fields or layout, but not both.
layout | yes* | Name of a configured layout. Use fields or layout, but not both.
showReadOnly | no | (true/false) Whether to show read-only fields. Only applies when the layout parameter is used.
count | no | Limit on the number of records to return. If the set of matched results is larger than count, cap the returned results at size count.
start | no | From the set of matched results, return record numbers start through (start + count)
orderBy | no | Name of property on which to base the order of returned entities.
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data.
showEditable | no | (true/false) Whether to show the _editable field in responses. The _editable field indicates whether an entity is editable. Default value is false.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.</aside>

## Query where parameter
You can use the following syntax in the where query parameter:

### Simple comparisons
property = value
property <> value
property < value
property <= value
property > value
property >= value

### May use compound property names (not for to-many properties)
owner.lastName = 'Smith'
owner.corporation.name = 'Acme'

### IS [NOT] NULL
property IS NULL
property IS NOT NULL

### IS [NOT] EMPTY (only for to-many properties)
categories IS EMPTY
categories IS NOT EMPTY

### [NOT] IN
property IN (value, value)
property NOT IN (value, value)

### [NOT] MEMBER OF (only for to-many properties)
id-value MEMBER OF categories
id-value NOT MEMBER OF categories

### Logical Expressions: NOT, AND, OR
predicate AND predicate
predicate OR predicate
NOT predicate

### Grouping by parentheses
predicate AND ( predicate OR predicate )
(( predicate OR predicate ) AND NOT ( predicate OR predicate )) OR predicate
 
### Boolean values
true | false
Examples
enabled = true
willingToRelocate = false

### Datetime values 
- UNIX long millis. For example, dateAdded > 1324579022

- ISO 8601 Date Time String. For example, dateAdded > '1997-07-16T19:20:30.45+01:00'

- Date Time String without Time Zone (default is America/New_York). In the format 'yyyy-MM-dd hh:mm:ss.SSS'

- Date Time String with Time Zone 'yyyy-MM-dd hh:mm:ss.SSS TZ' where TZ may be specified as:
 - Full TZ name, such as 'Asia/Tokyo'
 - An offset [-]hh:mm. For example, 3:00 or -5:00