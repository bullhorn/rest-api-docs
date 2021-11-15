# Entity

## <span class="tag">GET</span> /entity

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/entity/Candidate/5059165?fields=firstName,lastName,address

# Example Response
{
  "id" : 5059165,
  "firstName" : "Alanzo",
  "lastName" : "Smith",
  "address" : {
    "address1" : "",
    "address2" : "",
    "city" : "Sacramento",
    "state" : "ca",
    "zip" : "",
    "countryID" : 1
  }
}
```

 [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/80f333ee09c6763dad68#?env%5BDefault%5D=W3sia2V5Ijoic2VydmVyIiwidmFsdWUiOiJyb2hpdC1iYWNrZW5kIiwidHlwZSI6InRleHQiLCJuYW1lIjoic2VydmVyIiwiZW5hYmxlZCI6dHJ1ZSwiaG92ZXJlZCI6ZmFsc2V9LHsia2V5IjoidG9rZW4iLCJ0eXBlIjoidGV4dCIsInZhbHVlIjoiODQwMWRhZmMtN2U5OS00M2E1LTgyYzEtMTdkYWY2YWRlZTNjIiwiZW5hYmxlZCI6dHJ1ZSwiaG92ZXJlZCI6ZmFsc2V9LHsia2V5IjoicmVzdHVybCIsInR5cGUiOiJ0ZXh0IiwidmFsdWUiOiJyb2hpdC1iYWNrZW5kOjgxODEvcmVzdC1zZXJ2aWNlcy8xaHMvIiwiZW5hYmxlZCI6dHJ1ZSwiaG92ZXJlZCI6ZmFsc2V9LHsia2V5IjoiQ0FORElEQVRFX0lEIiwidHlwZSI6InRleHQiLCJ2YWx1ZSI6IjU0NjgyMzgiLCJlbmFibGVkIjp0cnVlLCJob3ZlcmVkIjpmYWxzZX1d)

Gets one or more entities or to-many associations.

Individual entity records are manifested as resources, where the entity type and id form the last two parts of the resource path.

Specify the fields to be included in the response using the `fields` request parameters. The `id` field is always returned, regardless of the fields requested. See for more detail on specifying fields.

NOTE: At least one of the required parameters(fields and layout) or both must be specified.

### HTTP Request

`{corpToken}/entity/{entityType}/{entityId}?fields={fieldList}`

Param | Required | Description
------ | -------- | -----
fields | yes | Comma-separated list of field names. fields or layout is required.
layout | yes | Name of a configured layout. fields or layout is required.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data. For more information, see [Meta](#meta).
showEditable | no | (true/false) Default value is false. Whether to show the _editable field in responses. The _editable field indicates whether an entity is editable. Setting showEditable to true results in slower performance; use this setting sparingly and only when needed.

<aside class="warning">Returns an HTTP 404 error if the requested entity cannot be found.</aside>

## Multiple Entities

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/entity/Candidate/123,456?fields=id,firstName,lastName

# Example Response
{
    data: [
        {
          "id" : 123,
          "firstName" : "Alanzo",
          "lastName" : "Smith"
        }, {
          "id" : 456,
          "firstName" : "Janis",
          "lastName" : "Williams"
        }
    ]
}
```

This is an extension of the single GET and supports the same result set control parameters (count, start) as the query call. Id values are specified as a comma-separated list:

### HTTP Request

`{corpToken}/entity/{entityType}/{{entity-id},{entity-id},*}?fields={field-list}`

Parameter | Required | Description
------ | -------- | -----
fields | yes | Comma-separated list of field names.
layout | yes | Name of a configured layout.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.
showReadOnly | no | (true/false) Whether to show read-only fields. Only applies when the layout parameter is used. NOTE: Read-only fields inside of composite properties (Address is the only instance of a composite property) do not obey visibility rules right now. They will always show, regardless of this setting. This is a known issue and there are plans to fix it in a future release.}}
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data. For more information, see [Meta](#meta).
showEditable | no | (true/false) Whether to show the editable field in responses. The editable field indicates whether an entity is editable. Default value is false.

<aside class="warning">Returns an HTTP 404 error if none of the requested entities are found. If any of the requested entities are found, returns the found entities and does not throw an error.</aside>

## To-many Associations

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/entity/ClientCorporation/5059165,2362648/clientContacts?fields=firstName,lastName,address&count=2

# Example Response
{
    ...
}
```
This is an extension of the single and multiple GETs that returns the to-many associated entities of the specified type for the specified entity ID(s). The call supports the same query parameters as the query call.

### HTTP Request

`{corpToken}/entity/{entityType}/{id}/{toManyFieldName}s?fields={field-list}`

Parameter | Required | Description
------ | -------- | -----
fields | yes | Comma-separated list of field names.
layout | yes | Name of a configured layout.
start  | no  | From the set of matched results, return record numbers start through (start + count).
count  | no  | Limit on the number of records to return. If the set of matched results is larger than count, cap the returned results at size count.
orderBy | no | Name of property on which to base the order of returned entities.
showReadOnly | no | (true/false) Whether to show read-only fields. Only applies when the layout parameter is used. NOTE: Read-only fields inside of composite properties (Address is the only instance of a composite property) do not obey visibility rules right now. They will always show, regardless of this setting. This is a known issue and there are plans to fix it in a future release.}}
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data. For more information, see [Meta](#meta).
showEditable | no | (true/false) Whether to show the editable field in responses. The editable field indicates whether an entity is editable. Default value is false.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 error if none of the requested entities are found. If any of the requested entities are found, returns the found entities and does not throw an error.</aside>

## <span class="tag">PUT</span> /entity

``` shell
curl -X PUT \
     -H "Content-Type: application/json" \
     -d '{"firstName" : "Alanzo", "lastName" : "Smith"}' \
     https://rest.bullhornstaffing.com/rest-services/e999/entity/Candidate

# Example Response
{
  "changedEntityId": 1489,
  "changeType": "INSERT"
}

```

You can use HTTP PUT requests to create new entities. The URL looks the same as GET request URL, but without the last path element containing an entity ID. Place the data comprising the new entity to be inserted in JSON format in the request body. The structure of the JSON is identical to that returned in HTTP responses to GET requests, with a few additional restrictions:

*   You cannot create to-many associations on the entity being inserted. You must create them in a subsequent "associate" call.
*   You can create to-one associations. The associations can only be to existing entities; You cannot create new associated entities while creating the main entity.

Associations fields are set by giving as their values a JSON object containing one field, named 'id', and having value the id of the entity to associate.

If you specify fields that do not exist on the entity being created, returns a 400 error containing messaging about the unknown fields.

Most entities in the Bullhorn data model contain mandatory fields. Some of these mandatory fields have default values. All mandatory fields without default values must have values specified in the JSON body of the PUT request or return a 400 error.

NOTE: When using an HTTP PUT request to create a Client Corporation entity an archived Client Contact entity, which belongs to this new Client Corporation, will automatically be created. This mirrors what is done through the ATS when creating a Client Corporation and allows the new Client Corporation to correctly follow ownership rules (where the ownership of a Client Corp is based on ownership of its Client Contacts) and belong to the person creating it. 

### HTTP Request

`{corpToken}/entity/{entityType}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 error if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.</aside>


### Create To-many Associations

``` shell
curl -X PUT \
     https://rest.bullhornstaffing.com/rest-services/e999/entity/Candidate/3084/primarySkills/964,684,253
```

You can add to-many associations to an entity with a PUT request in which you specify entity IDs of the entities you want to associate. The call fails if any of the association entities you specify are already associated.

`{corpToken}/entity/{entityType}/{entity-id}/{to-many-association-name}/{entity-id},*}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns An HTTP 404 error if the requested entity cannot be found, fields are specified that do not exist on the specified entity, or you specify values for any mandatory fields with no default values.</aside>

## <span class="tag">POST</span> /entity

``` shell
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{ "id" : 5059165, "firstName" : "Alanzo","lastName" : "Smith" }' \
     https://rest.bullhornstaffing.com/rest-services/e999/entity/Candidate/5059165

     # Example Response
{
  "changedEntityId": 1489,
  "changeType": "UPDATE"
}
```
You can update entities with HTTP POST requests. The URL looks the same as the GET request URL. Place the data comprising the entity fields in JSON format in the request body. The structure of the JSON in a POST request is identical to that returned in HTTP responses to GET requests, but read-only properties cannot be changed.

<aside class="notice">To update confidential fields as part of a POST /entity call, the user must have the Edit Confidential Data user action entitlement. The confidentialFieldList private label attribute contains the list of fields that are considered confidential.</aside>

*   You cannot create to-many associations on the entity being updated. You must create to-many associations in a subsequent "associate" call.
*   You can create to-one associations.

You set association fields by giving as their values a JSON object that contains a field named 'id', and providing the value the id of the entity to associate.

If you provide fields that do not exist on the entity being created, returns a 400 error containing messages about the unknown fields.

Most entities in the Bullhorn data model contain mandatory fields, some of which have default values. Returns a 400 error if you do not specify, in the JSON body of the PUT request, values for all mandatory fields that do not have default values.

### HTTP Request

`{corpToken}/entity/{entityType}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.</aside>


### To-many Associations - Special Case

``` shell
# This example will create and associate a new customObject1s record.
curl -X PUT https://rest.bullhornstaffing.com/rest-services/e999/entity/JobOrder/123

# This example will update an existing customObject1s record #1.
curl -X PUT https://rest.bullhornstaffing.com/rest-services/e999/entity/JobOrder/123
```

For special to-many associations, like Custom Objects, you can create and associate in a single step. You can add or update to-many associations with a POST request as if the data is directly on the parent entity. You can combine standard parent entity updates with special association add and edits.

### HTTP Request

`{corpToken}/entity/{parent-entity-name}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.</aside>


## <span class="tag">DELETE</span> /entity

Deletes an entity or to-many association.

The API supports hard or soft delete using the DELETE verb. You can also use a standard update request with the POST verb to set the isDeleted property of a soft-deletable entity to true.

### Hard or Soft Delete via DELETE call

``` shell
curl -X DELETE \
     https://rest.bullhornstaffing.com/rest-services/e999/entity/NoteEntity/2552
```

Hard deletes one or more hard-deletable entities, which removes it from the database. Soft deletes one or more soft-deletable entities, which sets the isDeleted property of the entity to true.

This operation is available for all entity types except immutable entities, which are neither hard-deletable nor soft-deletable. Immutable entities include the following:

*   BusinessSector
*   Category
*   Country
*   ClientCorporation
*   Skill
*   Specialty
*   State
*   TimeUnit

### HTTP Request

`{corpToken}/entity/{entityType}/{entity-id}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 error if the requested entity cannot be found.</aside>

To delete an entity with children, explicitly delete all the children before attempting to delete the root entity.

### Soft delete via POST (update) call

``` shell
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{ "isDeleted" : true }' \
     https://rest.bullhornstaffing.com/rest-services/e999/entity/ClientContact/1804

```

When you soft delete an entity, it is not removed from the database. A soft delete operation is actually an update (for example, POST) that sets the isDeleted property of the entity to true.

### HTTP Request

`{corpToken}/entity/{entityType}/{entity-id}`

<aside class="warning">Returns an HTTP 404 error if the requested entity cannot be found.</aside>

### Disassociate To-many Associations

``` shell
curl -X DELETE \
     https://rest.bullhornstaffing.com/rest-services/e999/entity/Candidate/3084/primarySkills/253
```

Removes or "disassociates" a to-many association relationship on an entity.

`{corpToken}/entity/{entityType}/{entity-id}/{to-many-association-name}/{entity-id},*}`

<aside class="warning">Returns an HTTP 404 error if the requested entity cannot be found.</aside>

## Effective Dated Entity

Effective Dated Entities are entities that are versioned by a specific date (the version’s effectiveDate). By maintaining multiple versions of an entity, users can track historical data and the context of an entity on a specific date.

### How to Create the First Version

An API user can use HTTP PUT requests to create new Effective Dated Entities much like normal entities. The URL looks the same as a GET request URL, but without the last path element containing an entity ID. Place the data comprising the new entity to be inserted in JSON format in the request body.

All Effective Dated Entities have a required effectiveDate field. The effectiveEndDate and viewableStartDate fields are calculated based on what Versions exist on this Root entity.

One key difference between Effective Dated Entities and normal entities is that Effective Dated Entities return both a changedEntityId and changedVersionId in the response. This is because an update to an Effective Dated Entity involves two entities - the Location(container/Root) and the LocationVersion.

``` shell
curl -X PUT \
     https://rest.bullhornstaffing.com/rest-services/e999/entity/Location

Sample Request Body
{
  "clientCorporation" : { "id": 123 },
  "effectiveDate" : "2020-1-1",
  "title" : "My location title",
  "address" : {
    "address1" : "200 S Main",
    "address2" : "",
    "city" : "Clayton",
    "state" : "MO",
    "zip" : "",
    "countryID" : 1
  },
    "customText1": "my custom text"
}
```

### How to Create Subsequent Versions

Creating additional Versions on an existing EDE is considered as both an Update and Create action as you are updating the Location(container/Root) while creating a new Version(the details).

To create an additional version, you can use an HTTP POST request. The URL looks the same as a PUT request URL, but includes the id of the Location you are updating much like the POST and GET calls as the last path element of the URL. The JSON data is also identical to the PUT request and no versionId should be included.

Not all fields in the JSON are unique to the Version entity, so requests against these fields will cause an Update to the Location(container/Root) instead of creating a new Version. Location's clientCorporation is an example and thus is a required field on initial Root create but not on subsequent create calls for Versions.

``` shell
curl -X POST \
     https://rest.bullhornstaffing.com/rest-services/e999/entity/Location/1234

Sample Request Body
{
  "effectiveDate" : "2020-1-1",
  "title" : "My location title",
  "address" : {
    "address1" : "200 S Main",
    "address2" : "",
    "city" : "Clayton",
    "state" : "MO",
    "zip" : "",
    "countryID" : 1
  },
    "customText1": "my custom text"
}
```

### How to Update a Specific Version

Updating an existing Version requires the use of an HTTP POST request. The URL and JSON body look exactly the same as the GET request URL. Place the data comprising the entity fields in JSON format in the request body.

Due to the double-entity nature of Effective Dated Entities, you must pass both the entityId and versionId that you wish to update in this request.

``` shell
curl -X POST \
     https://rest.bullhornstaffing.com/rest-services/e999/entity/Location/1234

Sample Request Body
{
  "versionID": 7654,
  "customText1": "my custom text"
}
```

### How to Delete a Version

Deleting a Version on an Effective Dated Entity requires the use of an HTTP DELETE request. When you delete a Version, it is hard-deleted from the Database (Edit History for that Version remains). When attempting to delete the only Version(s) of an EDE, we block the hard-delete and instead cause the Root entity to be soft-deleted to remove it from the user's view in the UI while still maintaining historical context for how it was used.

``` shell
curl -X DELETE \
     https://rest.bullhornstaffing.com/rest-services/e999/entity/Location/1234

Sample Response
{
   "message": "Successfully deleted 1 Location entities."
}
```

### How to Read a Version
There are multiple ways to read an Effective Dated Entity and/or the Versions on it. All of these ways involve making a HTTP GET request as outlined below.

When going against the Root entity, we return both ids to the user - the id and the versionId. These ids are important when making updates to this Version. By default, the viewableStartDate, effectiveDate, and effectiveEndDate fields are also returned to the user.

##### Today’s Version
When making a normal entity/ GET request against an entity, we return the Version that is effective today according to the user's PC time.

``` shell
curl -X GET \
     https://rest.bullhornstaffing.com/rest-services/e999/entity/Location/1234?fields=address

Sample Response
{
  "id" : 5059165,
  "versionId" : 123,
  "viewableStartDate" : '2020-1-1',
  "effectiveDate" : '2020-1-1',
  "effectiveEndDate" : '2021-1-1',
  "address" : {
    "address1" : "",
    "address2" : "",
    "city" : "Sacramento",
    "state" : "ca",
    "zip" : "",
    "countryID" : 1
  }
}
```

### Version that is effectiveOn a Given Date
This effectiveOn param defaults to today but can be passed as a query param to return a different Version.
``` shell
curl -X GET \
     https://rest.bullhornstaffing.com/rest-services/e999/entity/Location/1234?fields=address&effectiveOn=2027-12-31
```

### All Versions - ToMany
A user can also request all the Versions that exist on the Effective Dated Entity
``` shell
curl -X GET \
     https://rest.bullhornstaffing.com/rest-services/e999/entity/Location/1234/versions?fields=address

Sample Response
data: [{
  "id" : 5059165,
  "versionId" : 123,
  "viewableStartDate" : '1900-1-1',
  "effectiveDate" : '2020-1-1',
  "effectiveEndDate" : '2024-12-31',
  "address" : {
    "address1" : "",
    "address2" : "",
    "city" : "Clayton",
    "state" : "MO",
    "zip" : "",
    "countryID" : 1
  }
},
{
  "id" : 5059165,
  "versionId" : 124,
  "viewableStartDate" : '2025-1-1',
  "effectiveDate" : '2025-1-1',
  "effectiveEndDate" : '2030-1-1',
  "address" : {
    "address1" : "",
    "address2" : "",
    "city" : "Sacramento",
    "state" : "CA",
    "zip" : "",
    "countryID" : 1
  }
}
}]
```

### Associated Effective Dated Entity Fields
Effective Dated Entity fields requested via an associated object can be specified by a specific date by using the effectiveOn parameter.  Every Effective Dated Entity field requested in this way will be requested based on the specified date.

``` shell
curl -X GET \
    https://rest.bullhornstaffing.com/rest-services/e999/entity/Placement/1?fields=location&effectiveOn=2021-12-31
```

``` shell
curl -X GET \
    https://rest.bullhornstaffing.com/rest-services/e999/query/Placement?where=firstName='Bob'&fields=location&effectiveOn=2027-12-31
```

``` shell
curl -X GET \
    https://rest.bullhornstaffing.com/rest-services/e999/search/Placement?fields=location&effectiveOn=2021-12-31&query=id>0
```
In the above examples, Location is an Effective Dated Entity field being requested from an associated Placement.  The effectiveOn date will be applied to the Location being requested. 
