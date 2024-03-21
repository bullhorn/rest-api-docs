# savedSearch

## <span class="tag">GET</span> /savedSearch

``` shell
curl https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/savedSearch

or:

curl https://rest{swimlane#}.bullhorn.com/rest-services/e999/savedSearch?entity=Candidate&entityId=20

# Example Response
{
  "data" : {
    "id" : 3,
    "name" : "nnn_candidate",
    "description" : "my description",
    "indexType" : "CANDIDATE",
    "data" : "data",
    "query" : "name:lv_",
    "ownerId" : 1314,
    "dateAdded" : "2013-01-31",
    "favorite" : false
  }, {
    "id" : 2,
    "name" : "nnn_job",
    "description" : "my description",
    "indexType" : "JOBORDER",
    "data" : "data",
    "query" : "name:lv_",
    "ownerId" : 1314,
    "dateAdded" : "2013-01-31",
    "favorite" : false
  } ],
  "start" : 0,
  "count" : 2
}
```
The savedSearch operation with no {savedSearchId} path parameter and no query parameters returns all saved searches in the user’s corporation to which the user has entitlements. Use the entity and entityId parameters to return the saved searches associated with a specific entity.
<aside class="warning">The saved search feature is not related to the saved query feature currently in the Bullhorn CRM application.</aside>

### HTTP Request
`{corpToken}/savedSearch`

Param | Required | Description
type | no | Returns only saved searches of the specified index type.
entity & entitId | no | Returns only saved searches associated with the specified entity. Both parameters must be present. For information about associating a savedSearch with a specific entity, see PUT /savedSearchAssociation.
start | no | From the set of matched results, returns item numbers start through (start + count).
count | no | Limit on the number of items to return. If the set of matched results is larger than count, caps the returned results at size count.
orderBy | no | Value can be id or name. Precede field name with a minus sign (-) or plus sign (+) to sort results in descending or ascending order based on that field; default value is "-id".
showTotalMatched | no | Default value is false. Displays count of matching records.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.
<aside class="warning">Returns a 404 error if saved search does not exist or caller has no access to saved search (not owner and not granted entitlements via the /savedSearchGrant operation).</aside>

## <span class="tag">GET</span> /mySavedSearch

``` shell
curl https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/mySavedSearch

or:

curl https://rest{swimlane#}.bullhorn.com/rest-services/e999/mySavedSearch?entity=Candidate&entityId=20

# Example Response
{
  "data" : {
    "id" : 2,
    "name" : "nnn_job",
    "description" : "my description",
    "indexType" : "JOBORDER",
    "data" : "data",
    "query" : "name:lv_",
    "ownerId" : 1314,
    "dateAdded" : "2013-01-31",
    "favorite" : false
  } ],
  "start" : 0,
  "count" : 3
}
```
The mySavedSearch operation returns all saved searches that the user owns.
<aside class="warning">The saved search feature is not related to the saved query feature currently in the Bullhorn CRM application.</aside>

### HTTP Request
`{corpToken}/mySavedSearch`

Param | Required | Description
type | no | Returns only saved searches of the specified index type.
entity & entitId | no | Returns only saved searches associated with the specified entity. Both parameters must be present. For information about associating a savedSearch with a specific entity, see PUT /savedSearchAssociation.
start | no | From the set of matched results, returns item numbers start through (start + count).
count | no | Limit on the number of items to return. If the set of matched results is larger than count, caps the returned results at size count.
orderBy | no | Value can be id or name. Precede field name with a minus sign (-) or plus sign (+) to sort results in descending or ascending order based on that field; default value is "-id".
showTotalMatched | no | Default value is false. Displays count of matching records.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.
<aside class="warning">Returns a 404 error if saved search does not exist or caller has no access to saved search (not owner and not granted entitlements via the /savedSearchGrant operation).</aside>

## <span class="tag">GET</span> /savedSearch/{savedSearchId}

``` shell
curl https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/esavedSearch/4

# Example Response
{
  "data" : {
    "id"          : savedSearchId,
    "name"        : "general_ search",
    "description" : "my acme query",
    "indexType"   : "JOBORDER",
    "data"        : "data",
    "query"       : "name:acme”
    "ownerId"     : 1222,
    "dateAdded"   : "2013-01-31",
    "favorite"    : true
  }
}

```
Gets a saved Lucene search for any entity type for which the search operation is supported.
<aside class="warning">The saved search feature is not related to the saved query feature currently in the Bullhorn CRM application.</aside>

### HTTP Request
`{corpToken}/savedSearch/{savedSearchId}`

Param | Required | Description
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.
<aside class="warning">Returns a 404 error if saved search does not exist or caller has no access to saved search (not owner and not granted entitlements via the /savedSearchGrant operation).</aside>

## <span class="tag">PUT</span> /savedSearch

``` shell
curl -X PUT \
     -H "Content-Type: application/json" \
     -d '{"name"        : "my_note_search", \
        "description" : "my description", \
        "indexType"   : "NOTE", \
        "data"        : "data", \
        "query"       : "name:pinacle" \
        } \
       ' \
     https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/savedSearch

# Example Response
{
    "changedEntityType": "SavedSearch",
    "changedEntityId": 4,
    "changeType": "INSERT",
    "data": {
        
    }
}
```
Creates a saved Lucene search for a Lucene-indexed entity type. The name, indexType, data, and query fields are required in the request body. The user who creates a saved search always gets entitlements for all operations on that saved search; for more information about entitlements, see PUT /savedSearchGrant.
<aside class="warning">The saved search feature is not related to the saved query feature currently in the Bullhorn CRM application.</aside>

### HTTP Request

`{corpToken}/savedSearch/{savedSearchId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">POST</span> /savedSearch/{savedSearchId}

``` shell
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"name"        : "my_note_search", \
        "description" : "my description", \
        "indexType"   : "NOTE", \
        "data"        : "data", \
        "query"       : "name:pinacle" \
        } \
       ' \
     https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/savedSearch/4

# Example Response
{
    "changedEntityType": "SavedSearch",
    "changedEntityId": 4,
    "changeType": "UPDATE",
    "data": {
        
    }
}
```
Updates a saved Lucene search for Lucene-indexed entity types. The following fields are optional in the request body: name, description, indexType, data, and query.
<aside class="warning">The saved search feature is not related to the saved query feature currently in the Bullhorn CRM application.</aside>

### HTTP Request

`{corpToken}/savedSearch/{savedSearchId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 error if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.</aside>


## <span class="tag">DELETE</span> /savedSearch/{savedSearchId}

``` shell
curl -X DELETE \
https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/esavedSearch/4

# Example Response
TBD
{
    "changedEntityType": "SavedSearch",
    "changedEntityId": 4,
    "changeType": "DELETE",
    "data": {
        
    }
}
```
Deletes a saved Lucene search for any entity type for which the search operation is supported.
<aside class="warning">The saved search feature is not related to the saved query feature currently in the Bullhorn CRM application.</aside>

### HTTP Request
`{corpToken}/savedSearch/{savedSearchId}`

Param | Required | Description
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.
<aside class="warning">Returns a 404 error if saved search does not exist or caller has no access to saved search (not owner and not granted entitlements via the /savedSearchGrant operation).</aside>


## <span class="tag">PUT</span> /savedSearchAssociation

``` shell
curl -X PUT \
     https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/savedSearchAssociation/4/JobOrder/1495    
```
Creates an association between a saved search and a specified entity id.
<aside class="warning">The saved search feature is not related to the saved query feature currently in the Bullhorn CRM application.</aside>

### HTTP Request

`{corpToken}/savedSearchAssociation/{savedSearchId}/{entityName}/{entityId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">DELETE</span> /savedSearchAssociation

``` shell
curl -X DELETE \
     https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/savedSearchAssociation/4/JobOrder/1495    
```
Deletes an association between a saved search and a specified entity id.
<aside class="warning">The saved search feature is not related to the saved query feature currently in the Bullhorn CRM application.</aside>

### HTTP Request

`{corpToken}/savedSearchAssociation/{savedSearchId}/{entityName}/{entityId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">GET</span> /savedSearchGrants

``` shell
curl https://rest{swimlane#}.bullhorn.com/rest-services/e999/savedSearchGrants/4

# Example Response
[
  { "type"="CORP", "targetId"=null},
  { "type"="DEPT", "targetId"=12},  
  { "type"="USER", "targetId"=1333}
]

```
Returns entitlements for a saved search.
<aside class="warning">The saved search feature is not related to the saved query feature currently in the Bullhorn CRM application.</aside>

### HTTP Request
`{corpToken}/savedSearchGrants`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 200 code if the saved search is not found. Returns an HTTP 403 error if the saved search exists but the user is not the owner. Returns an HTTP 200 code if the saved search exists and the user is owner (even for missing association).</aside>

## <span class="tag">DELETE</span> /savedSearchGrant

``` shell
curl https://rest{swimlane#}.bullhorn.com/rest-services/e999/savedSearchGrant/4/CORP
```
Deletes entitlements for a saved search.
<aside class="warning">The saved search feature is not related to the saved query feature currently in the Bullhorn CRM application.</aside>

### HTTP Request
```
{corpToken}/savedSearchGrant/{savedSearchId}/CORP 
{corpToken}/savedSearchGrant/{savedSearchId}/DEPT/{departmentId} 
{corpToken}/savedSearchGrant/{savedSearchId}/USER/{corporateUserId} 
```
Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 200 code if the saved search is not found. Returns an HTTP 403 error if the saved search exists but the user is not the owner. Returns an HTTP 200 code if the saved search exists and the user is owner (even for missing association).</aside>



FAVORITES

## <span class="tag">PUT</span> /savedSearchFavorite

``` shell
curl -X PUT \
     https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/savedSearchFavorite/4
```
Adds a saved search to saved search favorites.
<aside class="warning">The saved search feature is not related to the saved query feature currently in the Bullhorn CRM application.</aside>

### HTTP Request

`{corpToken}/savedSearchFavorite/{savedSearchId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">DELETE</span> /savedSearchAssociation

``` shell
curl -X DELETE \
     https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/savedSearchAssociation/4/JobOrder/1495    
```
Deletes an association between a saved search and a specified entity id.
<aside class="warning">The saved search feature is not related to the saved query feature currently in the Bullhorn CRM application.</aside>

### HTTP Request

`{corpToken}/savedSearchAssociation/{savedSearchId}/{entityName}/{entityId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 error is saved search is missing or user has no access to it.</aside>


## <span class="tag">PUT</span> /savedSearchFavorite

``` shell
curl -X PUT \
     https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/savedSearchFavorite/4
```
Adds a saved search to saved search favorites.
<aside class="warning">The saved search feature is not related to the saved query feature currently in the Bullhorn CRM application.</aside>

### HTTP Request

`{corpToken}/savedSearchFavorite/{savedSearchId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">DELETE</span> /savedSearchFavorite

``` shell
curl -X DELETE \
     https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/savedSearchFavorite/4
```
Removes a saved search from saved search favorites.
<aside class="warning">The saved search feature is not related to the saved query feature currently in the Bullhorn CRM application.</aside>

### HTTP Request

`{corpToken}/savedSearchFavorite/{savedSearchId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

