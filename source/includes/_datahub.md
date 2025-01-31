# Data Hub Reference Guide

Bullhorn Data Hub is a flexible data structure to store data for reporting, and analytics across Bullhorn, Marketplace Partner and external sources. This reference guide provides information about each API operation and supported entity type.

# Data Hub API
The Data Hub API allows partners to pass customer data to Data Hub where it is replicated onwards to Bullhorn Analytics and Data Replicator.
All Data Hub API calls must be made with a valid BH REST Token. This section lists examples all the Data Hub endpoints.
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
Upserts up to 100 records to datahub. Payload must be formatted according to schema definition setup for the corporation.

### HTTP Request

`{corpToken}/data-hub/data/`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.


## Errors

Data Hub API uses the following error codes:

Error Code | Meaning
---------- | -------
206 | Partial Content -- The request has only partially succeeded. One or more of the records in the request failed to be stored in Data Hub.
413 | Request Entity Too Large -- The request has more than 100 items and Data Hub will only process 100 records at a time.
400 | Bad Request -- The request was unsuccessful. All records failed to be processed.
401 | Unauthorized -- Your API key is wrong or expired
404 | Not Found -- The specified entity could not be found
500 | Internal Server Error -- We had a problem with our server.

## Data Hub Entities

### EdsSourceSystem
Represents the external system sending data.

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
            <th>SourceSystem field</th>
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

### EdsEntityType
Represents a category of data in the Source System.

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
            <th>EntityType field</th>
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

### EdsEntityTypeSchemaVersion
Represents the structure of data for an Entity Type.

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
            <th>EntityTypeSchemaVersion field</th>
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
            <td>Add text</td>
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

### EdsData
Represents an individual data entry identified by Entity Type ID and Source ID.

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
            <td>sourceSystem</td>
            <td>To-one association</td>
            <td>Entity type associated with data record.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>entityType</td>
            <td>String</td>
            <td>Add text</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>schemaVersion</td>
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
