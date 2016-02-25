#Entity

## <span class="tag">GET</span> /entity

Gets one or more entities or to-many associations.

Individual entity records are manifested as resources, where the entity type and ID form the last two parts of the resource path.

See for more detail on the general structure of returned data for `GET` requests.

Specify the fields to be included in the response using the `fields` request parameters. The `id` field is always returned, regardless of the fields requested. See for more detail on specifying fields.

NOTE: At least one of the required parameters(fields and layout) or both must be specified.

```
[corporation-token]/entity/[entity-name]/[entity-id]?fields=[field-list]
```

Params | Required | Description
------ | -------- | -----
fields | yes | Comma-separated list of field names.
layout | yes | Name of a configured layout.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or a special HTTP header. See for details on how to provide it.
showReadOnly | no | (DO NOT USE) (true/false) Whether to show read-only fields. Only applies when the layout parameter is used. NOTE: Read-only fields inside of composite properties (Address is the only instance of a composite property) do not obey visibility rules right now. They will always show, regardless of this setting. This is a known issue and there are plans to fix it in a future release.}}
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data. For more information, see .
showEditable | no | (true/false) Whether to show the _editable field in responses. The _editable field indicates whether an entity is editable. Default value is false.

**Possible Errors **

Returns an HTTP 404 error if the requested entity is not found.

**Examples**
```
// https://rest.bullhorn.com/e999/entity/Candidate/5059165?fields=firstName,lastName,address
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

#### Multiple Entities

This is an extension of the single GET and supports the same result set control parameters (count, start) as the query call. ID values are specified as a comma-separated list:

```
[corporation-token]/entity/[entity-name]/[[entity-id],[entity-id],*]?fields=[field-list]
```

Params | Required | Description
------ | -------- | -----
fields | yes | Comma-separated list of field names.
layout | yes | Name of a configured layout.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or a special HTTP header. See for details on how to provide it.
showReadOnly | no | (DO NOT USE) (true/false) Whether to show read-only fields. Only applies when the layout parameter is used. NOTE: Read-only fields inside of composite properties (Address is the only instance of a composite property) do not obey visibility rules right now. They will always show, regardless of this setting. This is a known issue and there are plans to fix it in a future release.}}
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data. For more information, see .
showEditable | no | (true/false) Whether to show the _editable field in responses. The _editable field indicates whether an entity is editable. Default value is false.

**Possible Errors **

Returns an HTTP 404 error if none of the requested entities are found. If any of the requested entities are found, returns the found entities and does not throw an error.

**Examples**
```
// https://rest.bullhorn.com/e999/entity/Candidate/5059165,2362648?fields=firstName,lastName,address
{
    data: [{
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
    },{
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
    }]
}
```


##### To-many Associations

This is an extension of the single and multiple GETs that returns the to-many associated entities of the specified type for the specified entity ID(s). The call supports the same query parameters as the query call.

```
[corporation-token]/entity/[entity-name]]/[[entity-id],[entity-id],*]/[toManyFieldName]s?fields=[field-list]
```

Params | Required | Description
------ | -------- | -----
fields | yes | Comma-separated list of field names.
layout | yes | Name of a configured layout.
where  | no  | (DO NOT USE) SQL-style filter clause see for syntax.
start  | no  | From the set of matched results, return record numbers start through (start + count).
count  | no  | Limit on the number of records to return. If the set of matched results is larger than count, cap the returned results at size count.
orderBy | no | Name of property on which to base the order of returned entities.
showReadOnly | no | (DO NOT USE) (true/false) Whether to show read-only fields. Only applies when the layout parameter is used. NOTE: Read-only fields inside of composite properties (Address is the only instance of a composite property) do not obey visibility rules right now. They will always show, regardless of this setting. This is a known issue and there are plans to fix it in a future release.}}
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data. For more information, see .
showEditable | no | (true/false) Whether to show the _editable field in responses. The _editable field indicates whether an entity is editable. Default value is false.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or a special HTTP header. See for details on how to provide it.

**Possible Errors **

Returns an HTTP 404 error if none of the requested to-many entities are found. If any of the requested to-many entities are found, returns the found entities and does not throw an error.

**Examples**
```
// https://rest.bullhorn.com/e999/entity/ClientCorporation/5059165,2362648/clientContacts?fields=firstName,lastName,address&count=2
{
    ...
}
```

## <span class="tag">PUT</span> /entity

You can use HTTP PUT requests to create new entities. The URL looks the same as GET request URL, but without the last path element containing an entity ID. Place the data comprising the new entity to be inserted in JSON format in the request body. The structure of the JSON is identical to that returned in HTTP responses to GET requests, with a few additional restrictions:

*   You cannot create to-many associations on the entity being inserted. You must create them in a subsequent "associate" call.
*   You can create to-one associations. The associations can only be to existing entities; You cannot create new associated entities while creating the main entity.

Associations fields are set by giving as their values a JSON object containing one field, named 'id', and having value the ID of the entity to associate.

If you specify fields that do not exist on the entity being created, returns a 400 error containing messaging about the unknown fields,

Most entities in the Bullhorn data model contains mandatory fields. Some of these mandatory fields have default values. All mandatory fields without default values must have values specified in the JSON body of the PUT request or returns a 400 error.

NOTE: When using an HTTP PUT request to create a Client Corporation entity an archived Client Contact entity, which belongs to this new Client Corporation, will automatically be created. This mirrors what is done through the ATS when creating a Client Corporation and allows the new Client Corporation to correctly follow ownership rules (where the ownership of a Client Corp is based on ownership of its Client Contacts) and belong to the person creating it. 

```
[corporation-token]/entity/[entity-name]
```

Params | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or a special HTTP header. See for details on how to provide it.

**Possible Errors **

Returns an HTTP 404 error if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.

**Sample Request Body**
```
// [PUT] https://rest.bullhorn.com/e999/entity/Candidate
{
  "firstName" : "Alanzo",
  "lastName" : "Smith"
}
```

##### Create To-many Associations

You can add to-many associations to an entity with a PUT request in which you specify entity IDs of the entities you want to associate. The call fails if any of the association entities you specify are already associated.

NOTE: Certain entities, like Custom Objects, are handled differently.  See .

```
[corporation-token]/entity/[entity-name]/[entity-id]/[to-many-association-name]/[entity-id],*]
```

Params | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or a special HTTP header. See for details on how to provide it.

**Possible Errors**

Returns An HTTP 404 error if the requested entity cannot be found, fields are specified that do not exist on the specified entity, or you specify values for any mandatory fields with no default values.


**Examples**
```
// [PUT] https://rest.bullhorn.com/e999/entity/Candidate/3084/primarySkills/964,684,253
```


## <span class="tag">POST</span> /entity

Update entities using HTTP POST requests. The URL looks the same as the GET request URL. Place the data comprising the entity fields in JSON format in the request body. The structure of the JSON in a POST request is identical to that returned in HTTP responses to GET requests, but read-only properties cannot be changed.

*   You cannot create to-many associations on the entity being updated. You must be create to-many associations in a subsequent "associate" call.
*   You can create to-one associations.

You set association fields by giving as their values a JSON object that contains a field named 'id', and providing the value the ID of the entity to associate.

If you provide fields that do not exist on the entity being created, returns a 400 error containing messages about the unknown fields.

Most entities in the Bullhorn data model contain mandatory fields, some of which have default values. Returns a 400 error if you do not specify, in the JSON body of the PUT request, values for all mandatory fields that do not have default values.

```
[corporation-token]/entity/[entity-name]
```

Params | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or a special HTTP header. See for details on how to provide it.

**Possible Errors **

Returns an HTTP 404 if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.

**Sample Request Body**
```
// [POST] https://rest.bullhorn.com/e999/entity/Candidate/5059165
{
  "id" : 5059165,
  "firstName" : "Alanzo",
  "lastName" : "Smith"
}
```

##### To-many Associations - Special

For special to-many associations, like Custom Objects, we have the ability to create and associate in a single step.  These is due to the fact that we need to know their context to enforce security and data integrity.  You can add/update to-many associations with a POST request the same as if it was data directly on the parent entity. You can combine standard parent entity updates with special association add and edits.

```
[corporation-token]/entity/[parent-entity-name]
```

Params | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or a special HTTP header. See for details on how to provide it.

**Possible Errors **

Returns an HTTP 404 if the requested entity cannot be found, if fields are specified that do not exist on the specified entity, or if values for any mandatory fields with no default value are not included.

**Examples 1**

This example will create and associate a new customObject1s record.

```
// https://rest.bullhorn.com/e999/entity/JobOrder/123

```

**Examples 2**

This example will update an existing customObject1s record #1.

```
https://rest.bullhorn.com/e999/entity/JobOrder/123
```

## <span class="tag">DELETE</span> /entity

Deletes an entity or to-many association.

The API supports two types of delete requests: hard delete and soft delete.

##### Hard delete

Hard deletes an entity.

The types of entity you can hard-delete are CandidateSource, CorporationDepartment, Placement, NoteEntity and CorporateUser. To hard delete an entity send a HTTP request using the DELETE method.

```
[corporation-token]/entity/[entity-name]/[entity-id]
```

Params | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or a special HTTP header. See for details on how to provide it.

**Possible Errors**

Returns an HTTP 404 error if the requested entity cannot be found.

**Examples**
```
https://rest.bullhorn.com/e999/entity/NoteEntity/2552
```

To hard delete an entity with children, you explicitly hard delete all the children before attempting to delete the root entity.

##### Soft delete

When you soft delete an entity, it is not removed from the data storage. A soft delete operation is actually an update (for example, POST) that sets an "isDeleted" flag to true.

The types of entity you can soft delete are Candidate, CandidateEducation, CandidateReference, CandidateWorkHistory, ClientContact, JobOrder, JobSubmission, Note and Person.

```
[corporation-token]/entity/[entity-name]/[entity-id]
```

**Request Body**
```
{
    "isDeleted" : true
}
```

**Possible Errors**

Returns an HTTP 404 error if the entity cannot be found.


**Examples**
```
https://rest.bullhorn.com/e999/entity/ClientContact/1804
```

##### Disassociate To-many Associations

Removes or "disassociates" a to-many association relationship on an entity.

```
[corporation-token]/entity/[entity-name]/[entity-id]/[to-many-association-name]/[entity-id],*]
```

**Possible Errors**

Returns an HTTP 404 error if the requested entity cannot be found.

**Examples**

```
https://rest.bullhorn.com/e999/entity/Candidate/3084/primarySkills/253
```

##### Immutable entities

You cannot hard delete or soft delete the following types of entities:

*   BusinessSector
*   Category
*   Country
*   Skill
*   Specialty
*   State
*   TimeUnit.
