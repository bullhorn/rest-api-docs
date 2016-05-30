# Lookup

## <span class="tag">GET</span> /lookup

``` shell
curl https://rest.bullhorn.com/e999/lookup?filter=smith&entity=Candidate,ClientContact&start=0,10&count=10

# Example Response
{
    "data": [{
      "_score": 1.70002,
      "id" : 5059165,
      "firstName" : "Alanzo",
      "lastName" : "Smith"
    }]
}

curl https://rest.bullhorn.com/e999/lookup/Candidate/12345

# Example Response
{
    "data": [{
      "id" : 5059165,
      "firstName" : "Alanzo",
      "lastName" : "Smith"
    }]
}
```

Searches using FastFind for FastFind-able entities, else uses custom Lucene or Hibernate queries. Returns a standardized set of data per EntityType.

Uses search implementations for:

*   Candidate
*   ClientContact
*   JobOrder
*   Lead
*   Opportunity
*   Placement

Uses Hibernate queries for:

*   Skill
*   Corporate User
*   Distribution List

A call to search returns an _id, _entityType, and _label specific to each entity.

A details call returns a subset of the entity's data. Each entity has a different set of data returned. This is the equivalent of a call which has had its fields parameter specified.

### HTTP Requests

#### Lookup

`../lookup?filter=[terms]&entity=[comma,separated,entity,names]&count=[num]&start=one,number,per,entity`

#### Lookup Details

`../lookup/{entity}/{id}`

Params | Required | Description
------ | -------- | -----
filter | no | The search terms, such as the name or title.
entity | no | A comma-separated list of entity names to search on using the given filter.
count | no | The total number of results to return.
start | no | A comma-separated list of start values for pagination of given entities. This list's size should be the same as the length of the entity parameter. Defaults to 0.
privateLabelID | no | The private label ID to use.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or a special HTTP header. See for details on how to provide it.

<aside class="warning">Returns an HTTP 404 if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.</aside>
