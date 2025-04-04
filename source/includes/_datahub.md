# Introduction

Bullhorn Data Hub is a flexible data structure to store data for reporting and analytics across Bullhorn, marketplace partners, and external sources. It is built directly within the Bullhorn ATS Platform to help customers consolidate their staffing and relevant business data in a single location. This reference guide provides information about each Data Hub API operation and supported entity type.

# Data Hub Entities

## EdsSourceSystem
Represents the external system sending data. This entity's name is represented as `sourceSystem` when making Data Hub API requests. See [POST / PUT /data-hub/sourceSystem](https://bullhorn.github.io/rest-api-docs/datahubref.html#post-put-data-hub-sourcesystem) section of Data Hub API for more details.

<table>
    <colgroup>
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
    </colgroup>
    <thead>
        <tr class="header">
            <th>EdsSourceSystem field</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="odd">
            <td>name</td>
            <td>String(64)</td>
            <td>Name of the source system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>display</td>
            <td>String(64)</td>
            <td>How the source system will be displayed.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>

## EdsEntityType
Represents a category of data in the source system. This entity's name is represented as `entityType` when making Data Hub API requests. See [POST / PUT /data-hub/entityType](https://bullhorn.github.io/rest-api-docs/datahubref.html#post-put-data-hub-entitytype) section of Data Hub API for more details.

<table>
    <colgroup>
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
    </colgroup>
    <thead>
        <tr class="header">
            <th>EdsEntityType field</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="odd">
            <td>sourceSystem</td>
            <td>To-one association</td>
            <td>Source system associated with entity type.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>name</td>
            <td>String(64)</td>
            <td>Name of the entity type.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>display</td>
            <td>String(64)</td>
            <td>How the entity type will be displayed.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isPrivate</td>
            <td>Boolean</td>
            <td>Determines whether an entity type is private or not.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>

## EdsEntityTypeSchemaVersion
Represents the structure of data for an entity type. This entity's name is represented as `entityTypeSchemaVersion` when making Data Hub API requests. See [POST / PUT /data-hub/entityTypeSchemaVersion](https://bullhorn.github.io/rest-api-docs/datahubref.html#post-put-data-hub-entitytypeschemaversion) section of Data Hub API for more details.

<table>
    <colgroup>
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
    </colgroup>
    <thead>
        <tr class="header">
            <th>EdsEntityTypeSchemaVersion field</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>entityType</td>
            <td>To-one association</td>
            <td>Entity type associated with schema version.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>schema</td>
            <td>String</td>
            <td>The structure of data for an entity type.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>description</td>
            <td>String</td>
            <td>Description of the schema version.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>name</td>
            <td>String(64)</td>
            <td>Name of the schema version.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>

## EdsData
Represents an individual data entry identified by entity type ID and source ID. This entity's name is represented as `data` when making Data Hub API requests. See [POST /data-hub/data](https://bullhorn.github.io/rest-api-docs/datahubref.html#post-data-hub-data) section of Data Hub API for more details.

<table>
    <colgroup>
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
    </colgroup>
    <thead>
        <tr class="header">
            <th>EdsData field</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>sourceId</td>
            <td>String(64)</td>
            <td>Unique identifier for records within a source system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>entityType</td>
            <td>To-one association</td>
            <td>Entity type associated with data record.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>entityTypeSchemaVersion</td>
            <td>To-one association</td>
            <td>Schema version associated with data record.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>sourceId</td>
            <td>String(64)</td>
            <td>Unique identifier for records within a source system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateAddedInSourceSystem</td>
            <td>Timestamp</td>
            <td>Date the record was added in source system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateLastModifiedInSourceSystem</td>
            <td>Timestamp</td>
            <td>Date the record was last updated in source system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payload</td>
            <td>String</td>
            <td>JSON object defined by entity type schema.</td>
            <td>X</td>
            <td></td>
        </tr>
         <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Indicates whether this record has been marked as deleted.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placementId</td>
            <td>Integer</td>
            <td>Identifier for placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>candidateId</td>
            <td>Integer</td>
            <td>Identifier for candidate.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>clientContactId</td>
            <td>Integer</td>
            <td>Identifier for contact.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>clientCorporationId</td>
            <td>Integer</td>
            <td>Identifier for corporation.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jobOrderId</td>
            <td>Integer</td>
            <td>Identifier for job.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jobSubmissionId</td>
            <td>Integer</td>
            <td>Identifier for job submission.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>leadId</td>
            <td>Integer</td>
            <td>Identifier for lead.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>opportunityId</td>
            <td>Integer</td>
            <td>Identifier for opportunity.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>corporateUserId</td>
            <td>Integer</td>
            <td>Identifier for corporate user.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>noteId</td>
            <td>Integer</td>
            <td>Identifier for note.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>appointmentId</td>
            <td>Integer</td>
            <td>Identifier for appointment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payableChargeId</td>
            <td>Integer</td>
            <td>Identifier for payable charge.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billableChargeId</td>
            <td>Integer</td>
            <td>Identifier for billable charge.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

# Data Hub API

The Data Hub API allows partners to pass customer data to Data Hub where it is replicated onwards to Bullhorn Analytics and Data Replicator.
All Data Hub API calls must be made with a valid BH REST Token and accepts UTF-8 encoded JSON via HTTP. This will section list examples of all the Data Hub endpoints.

The Data Hub API is secured in the same manner as the Bullhorn REST API. For a full guide on logging into the API and authorizing a request please follow this documentation: [Authorization](http://bullhorn.github.io/rest-api-docs/index.html#authorization)


##<span class="tag">POST</span> /data-hub/data

``` shell
curl https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/data-hub/data

# Example Request
[
    {
        "sourceSystem": "sourceSystemName",
        "entityType": "entityTypeName",
        "schemaVersion": "schemaVersionName",
        "items": [
            {
                "sourceId": 1,
                "dateAddedInSourceSystem": "2024-11-31T17:48:17.182+00:00",
                "dateLastModifiedInSourceSystem": "2024-11-31T17:48:17.182+00:00",
                "payload": "{ \"name\": \"bob\", \"age\": 25, \"address\": { \"street\": \"789 Main St\", \"city\": \"New York\", \"state\": \"NY\", \"postalCode\": \"10001\" }, \"hobbies\": [\"reading\", \"running\"] }",
                "isDeleted": false,
                "placementId": 107,
                "candidateId": 123,
                "clientContactId": 55,
                "clientCorporationId": 55,
                "jobOrderId": 123,
                "jobSubmissionId": 123,
                "leadId": 123,
                "opportunityId": 465,
                "corporateUserId": 123,
                "noteId": 123,
                "appointmentId": 123,
                "payableChargeId": 123,
                "billableChargeId": 134
            },
            {
                "sourceId": 2,
                "dateAddedInSourceSystem": "2024-11-31T17:48:17.182+00:00",
                "dateLastModifiedInSourceSystem": "2024-11-31T17:48:17.182+00:00",
                "payload": "{ \"name\": \"sam\", \"age\": 30, \"address\": { \"street\": \"123 Main St\", \"city\": \"Dallas\", \"state\": \"TX\", \"postalCode\": \"75001\" }, \"hobbies\": [\"gaming\", \"running\"] }",
                "isDeleted": false,
                "placementId": 107,
                "candidateId": 123,
                "clientContactId": 55,
                "clientCorporationId": 55,
                "jobOrderId": 123,
                "jobSubmissionId": 123,
                "leadId": 123,
                "opportunityId": 465,
                "corporateUserId": 123,
                "noteId": 123,
                "appointmentId": 123,
                "payableChargeId": 123,
                "billableChargeId": 134
            }
            // up to 100 items
        ]
    }
]

# Example Response
{
    "statusCode": 200,
    "messages": [],
    "data": [
        {
            "entityType": "entityTypeName",
            "sourceSystem": "sourceSystemName",
            "totalSuccessfulItems": 1,
            "successfulItems": [
                {
                    "sourceId": "1",
                    "dataId": 1234
                },
                {
                    "sourceId": "2",
                    "dataId": 1235
                }
            ]
        }
    ]
}
```
Upserts up to 100 records to Data Hub. Payload must be formatted according to schema definition setup for the corporation.

### HTTP Request

`{corpToken}/data-hub/data`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

##<span class="tag">POST</span> /data-hub/data/find

``` shell
curl https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/data-hub/data/find

# Example Request
{
    "criteria": {
        "and": [
            {
                "entityType.name": {
                    "equalTo": "entityTypeName"
                }
            },
            {
                "sourceId": {
                   "in": ["2","7"] 
                }
            },
            {
                "entityType.sourceSystem.name": {
                    "equalTo": "sourceSystemName"
                }
            }
        ]
    }
}

# Example Response
{
    "statusCode": 200,
    "messages": null,
    "data": {
        "start": 0,
        "count": 1,
        "total": 1,
        "data": [
            {
                "dataId": 1234,
                "sourceId": "2",
                "entityType": {
                    "entityTypeId": 241,
                    "name": "entityTypeName"
                },
                "entityTypeSchemaVersion": {
                    "entityTypeSchemaVersionId": 441,
                    "name": "schemaVersionName"
                },
                "dateAdded": "2025-01-10T22:56:18.012+00:00",
                "dateLastModified": "2025-01-10T22:56:18.012+00:00",
                "dateAddedInSourceSystem": "2024-12-01T17:48:17.000+00:00",
                "dateLastModifiedInSourceSystem": "2024-12-01T17:48:17.000+00:00",
                "payload": "{ \"name\": \"John Smith\", \"age\": 25, \"address\": { \"street\": \"789 Main St\", \"city\": \"New York\", \"state\": \"NY\", \"postalCode\": \"10001\" }, \"hobbies\": [\"reading\", \"running\"] }",
                "isDeleted": false,
                "candidateId": 123,
                "clientContactId": 10,
                "clientCorporationId": 456,
                "jobOrderId": 123,
                "jobSubmissionId": 123,
                "placementId": 123,
                "leadId": 123,
                "opportunityId": 123,
                "corporateUserId": 123,
                "noteId": 123,
                "appointmentId": 123,
                "payableChargeId": 123,
                "billableChargeId": 134,
                "entityId": 342
            }
        ]
    }
}
```
Used to lookup and view Data Hub records using adaptive query.

### HTTP Request

`{corpToken}/data-hub/sourceSystem`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

##<span class="tag"> POST / PUT </span> /data-hub/sourceSystem

``` shell
curl https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/data-hub/sourceSystem

# Example Request
{
    "name": "sourceSystemName",
    "display": "sourceSystemDisplay"
}

# Example Response
{
    "changedEntityType": "SourceSystem",
    "changedEntityId": 293,
    "changeType": "INSERT",
    "data": {
        "name": "sourceSystemName",
        "display": "sourceSystemDisplay"
    }
}
```
Used to add or update source systems.

### HTTP Request

`{corpToken}/data-hub/sourceSystem` and `{corpToken}/data-hub/sourceSystem/{sourceSystemId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

##<span class="tag"> POST / PUT </span> /data-hub/entityType

``` shell
curl https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/data-hub/entityType

# Example Request
{
    "sourceSystem": {
        "id": 293 // Can also associate source system using sourceSystem.name
    },
    "name": "entityTypeName",
    "display": "entityTypeDisplay",
    "isPrivate": true
}

# Example POST Response
{
    "changedEntityType": "EntityType",
    "changedEntityId": 311,
    "changeType": "INSERT",
    "data": {
        "display": "TiffTests33",
        "name": "TiffTestLetsGO!CertVid-2234",
        "sourceSystem": {
            "id": 293
        },
        "isPrivate": true
    }
}
```
Used to add or update entity types.

### HTTP Request

`{corpToken}/data-hub/entityType` and `{corpToken}/data-hub/entityType/{entityTypeId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

##<span class="tag"> POST / PUT </span> /data-hub/entityTypeSchemaVersion

``` shell
curl https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/data-hub/entityTypeSchemaVersion

# Example Request associating entity type by entityTypeId
{
    "entityType": {
        "id": 311
    },
    "schema": "{\n  \"$id\": \"https://example.com/person.schema.json\",\n  \"$schema\": \"https://json-schema.org/draft/2020-12/schema\",\n  \"description\": \"Schema for a person with name, age, address, and hobbies\",\n  \"type\": \"object\",\n  \"properties\": {\n    \"name\": {\n      \"type\": \"string\",\n      \"description\": \"Name of the person\"\n    },\n    \"age\": {\n      \"type\": \"integer\",\n      \"description\": \"Age of the person\"\n    },\n    \"address\": {\n      \"type\": \"object\",\n      \"properties\": {\n        \"street\": {\n          \"type\": \"string\",\n          \"description\": \"Street address\"\n        },\n        \"city\": {\n          \"type\": \"string\",\n          \"description\": \"City name\"\n        },\n        \"state\": {\n          \"type\": \"string\",\n          \"description\": \"State abbreviation\"\n        },\n        \"postalCode\": {\n          \"type\": \"string\",\n          \"description\": \"Postal code\"\n        }\n      },\n      \"required\": [\"street\", \"city\", \"state\", \"postalCode\"],\n      \"description\": \"Address of the person\"\n    },\n    \"hobbies\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      },\n      \"description\": \"List of hobbies\"\n    }\n  },\n  \"required\": [\"name\", \"age\", \"address\", \"hobbies\"]\n}",
    "description": "New Schema Version",
    "name":"schemaVersionName"
}

# Example Request associating entity type by entityTypeName and sourceSystemName
{
    "entityType": {
        "name": "entityTypeName",
         "sourceSystem": {
            "name": "sourceSystemName"
        }
    },
    "schema": "{\n  \"$id\": \"https://example.com/person.schema.json\",\n  \"$schema\": \"https://json-schema.org/draft/2020-12/schema\",\n  \"description\": \"Schema for a person with name, age, address, and hobbies\",\n  \"type\": \"object\",\n  \"properties\": {\n    \"name\": {\n      \"type\": \"string\",\n      \"description\": \"Name of the person\"\n    },\n    \"age\": {\n      \"type\": \"integer\",\n      \"description\": \"Age of the person\"\n    },\n    \"address\": {\n      \"type\": \"object\",\n      \"properties\": {\n        \"street\": {\n          \"type\": \"string\",\n          \"description\": \"Street address\"\n        },\n        \"city\": {\n          \"type\": \"string\",\n          \"description\": \"City name\"\n        },\n        \"state\": {\n          \"type\": \"string\",\n          \"description\": \"State abbreviation\"\n        },\n        \"postalCode\": {\n          \"type\": \"string\",\n          \"description\": \"Postal code\"\n        }\n      },\n      \"required\": [\"street\", \"city\", \"state\", \"postalCode\"],\n      \"description\": \"Address of the person\"\n    },\n    \"hobbies\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      },\n      \"description\": \"List of hobbies\"\n    }\n  },\n  \"required\": [\"name\", \"age\", \"address\", \"hobbies\"]\n}",
    "description": "New Schema Version",
    "name":"schemaVersionName"
}


# Example POST Response
{
    "changedEntityType": "EntityTypeSchemaVersion",
    "changedEntityId": 507,
    "changeType": "INSERT",
    "data": {
        "schema": "{\n  \"$id\": \"https://example.com/person.schema.json\",\n  \"$schema\": \"https://json-schema.org/draft/2020-12/schema\",\n  \"description\": \"Schema for a person with name, age, address, and hobbies\",\n  \"type\": \"object\",\n  \"properties\": {\n    \"name\": {\n      \"type\": \"string\",\n      \"description\": \"Name of the person\"\n    },\n    \"age\": {\n      \"type\": \"integer\",\n      \"description\": \"Age of the person\"\n    },\n    \"address\": {\n      \"type\": \"object\",\n      \"properties\": {\n        \"street\": {\n          \"type\": \"string\",\n          \"description\": \"Street address\"\n        },\n        \"city\": {\n          \"type\": \"string\",\n          \"description\": \"City name\"\n        },\n        \"state\": {\n          \"type\": \"string\",\n          \"description\": \"State abbreviation\"\n        },\n        \"postalCode\": {\n          \"type\": \"string\",\n          \"description\": \"Postal code\"\n        }\n      },\n      \"required\": [\"street\", \"city\", \"state\", \"postalCode\"],\n      \"description\": \"Address of the person\"\n    },\n    \"hobbies\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      },\n      \"description\": \"List of hobbies\"\n    }\n  },\n  \"required\": [\"name\", \"age\", \"address\", \"hobbies\"]\n}",
        "description": "New Schema Version",
        "name": "schemaVersionName",
        "entityType": {
            "id": 311
        }
    }
}
```
Used to add or update entity type schema versions.

### HTTP Request

`{corpToken}/data-hub/entityTypeSchemaVersion` and `{corpToken}/data-hub/entityTypeSchemaVersion/{schemaVersionId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.


##<span class="tag"> GET </span> /data-hub

``` shell
curl https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/data-hub/entityType/311

# Example Response
{
    "data": {
        "entityTypeId": 311,
        "display": "entityTypeDisplay",
        "name": "entityTypeName",
        "sourceSystem": {
            "id": 293,
            "name": "sourceSystemName"
        },
        "isPrivate": true,
        "entityTypesSchemaVersions": {
            "data": [],
            "count": 1
        },
        "data": {
            "data": [],
            "count": 2
        }
    }
}
```
Used to retrieve information about a source system, entity type, or schema version.

### HTTP Request

`{corpToken}/data-hub/{entityName}/{entityId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

# Errors

The Data Hub API uses the following error codes:

Error Code | Meaning
---------- | -------
206 | Partial Content -- The request has only partially succeeded. One or more of the records in the request failed to be stored in Data Hub.
413 | Request Entity Too Large -- The request has more than 100 items and Data Hub will only process 100 records at a time.
400 | Bad Request -- The request was unsuccessful. All records failed to be processed.
401 | Unauthorized -- Your API key is wrong or expired
404 | Not Found -- The specified entity could not be found
500 | Internal Server Error -- We had a problem with our server.

<br><br><br>
