# Mass Update

## <span class="tag">GET</span> /massUpdate

``` shell
curl https://rest.bullhornstaffing.com/e999/massUpdate

# Example Response
[
"Candidate",
"ClientContact",
"ClientCorporation",
"JobOrder",
"JobSubmission",
"Lead",
"NPSUserInfo",
"Opportunity",
"Placement",
"Task",
"Tearsheet"
]
```
Returns the list of entity types that support mass update.

### HTTP Request

`{corpToken}/massUpdate/{entityType}`

Param | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">GET</span> /massUpdate/{entityType}

``` shell
curl https://rest.bullhornstaffing.com/e999/massUpdate/entity

# Example Response
[ {
  "propertyName" : "assignedUsers",
  "entitlementRequired" : "Mass Update Job Assignment"
}, {
  "propertyName" : "isDeleted",
  "entitlementRequired" : "Mass Delete Job"
}, {
  "propertyName" : "isOpen",
  "entitlementRequired" : "Mass Open/Close Job"
}, {
  "propertyName" : "owner",
  "entitlementRequired" : "Mass Update Job Owner"
}, {
  "propertyName" : "status",
  "entitlementRequired" : "Mass Update Job Status"
} ]

```
 Returns the list of entity properties for which mass update is supported on the specified entity type. Also returns the entitlement required for updating each property.

### HTTP Request

`{corpToken}/massUpdate/{entityType}`

Param | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">POST</span> /massUpdate/{entityType}

``` shell
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"ids": [789,790], "status": "active"}' \
     https://rest.bullhornstaffing.com/e999/massUpdate/JobOrder

# Example Response
{
    "count": 2
}
```
Performs a massUpdate on all entities of the specified type for which the entity id is included in the request body.
The request body uses the following syntax:

```
{
  "ids" : [id, id, id],
  "{property}" : value,
  "toOneProperty" : id,
  "{toManyProperty}" : [ id, id, id],
  "{toManyProperty}" : {
                       "add" : [id, id, id],
                       "remove" : [id, id, id]
                     }
}
```
* "ids" is a list of entity ids to mass update. (mandatory, 10000 limit)
* For to-one properties, supply the associated entity id as value. For example, "owner" : 123
* For to-many properties:
  - Use the first form to replace the entire association. For example:
"assignedUsers": [123, 456]
  - Use the second form to add or remove associations. For example:
"assignedUsers": { "add" : [123], "remove" : [456] }
  - You must specify "add" or "remove" or both.

The response contains the count of updated entities:
```
{
  "count" : n
}
```