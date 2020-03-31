# File

## <span class="tag">GET</span> /file

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/file/Candidate/3835/231

# Example Response
{"File": {
   "contentType": "text/plain",
   "fileContent": "VGhpcyBpcyBhIHZlcnkgc21hbGwgdGV4dCBmaWxlLg0KDQpTbWFsbFRleHRGaWxl",
   "name": "SmallFile.txt"
}}
```

Returns an attached file as base64-encoded text.

**Note:** The optional "raw" path parameter returns a multipart-encoded version of the file. This path parameter exists for convenience. When an API user makes a call of this form in a browser, it appears that the browser has downloaded the file.

Files can be attached to the following types of entities:

* Candidate
* ClientContact
* ClientCorporation
* JobOrder
* Opportunity
* Placement

### HTTP Request

`{corpToken}/file/{entityType}/{entityId}/{fileId}(/raw)`

Param | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 error if the requested entity cannot be found.</aside>

## <span class="tag">GET</span> /entityFiles

(deprecated; replaced by /entity/{entityType}/{entityId}/fileAttachments)

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/entityFiles/Candidate/203866

# Example Response
{"EntityFiles": [
      {
      "id": 201,
      "type": null,
      "name": "File1.txt",
      "description" : "Resume file for candidate.",
      "contentType": "text",
      "contentSubType": "plain"
   },
      {
      "id": 202,
      "type": null,
      "name": "File2.txt",
      "description": null,
      "contentType": "text",
      "contentSubType": "plain"
   }
]}
```

Returns metadata for attached files.
Files can be attached to the following types of entities:

* Candidate
* ClientContact
* ClientCorporation
* JobOrder
* Opportunity
* Placement

### HTTP Request

`{corpToken}/entityFiles/{entityType}/{entityId}`

Param | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">GET</span> /entity/{entityType}/{entityId}/fileAttachments


``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/entity/JobOrder/203866/fileAttachments?fields=*

# Example Response
{
  "start" : 0,
  "count" : 1,
  "data" : [ {
    "contentSubType" : "plain",
    "contentType" : "text",
    "dateAdded" : 1530815115887,
    "departmentsSharedWith" : {
      "total" : 0,
      "data" : [ ]
    },
    "description" : null,
    "directory" : "4659/2018.07/",
    "distribution" : "internal",
    "externalID" : "Portfolio",
    "fileExtension" : ".txt",
    "fileOwner" : null,
    "fileSize" : 23,
    "fileType" : "SAMPLE         ",
    "isCopied" : false,
    "isDeleted" : false,
    "isEncrypted" : true,
    "isExternal" : false,
    "isOpen" : true,
    "isPrivate" : false,
    "isSendOut" : false,
    "jobOrder" : {
      "id" : 232625,
      "title" : "Greatest Job"
    } ]
}
```

Returns metadata for attached files.

Files can be attached to the following types of entities:

* Candidate
* ClientContact
* ClientCorporation
* JobOrder
* Opportunity
* Placement

### HTTP Request

`{corpToken}/entityFiles/{entityType}/{entityId}`

Param | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.


## <span class="tag">PUT</span> /file

``` shell

# Base64-encoded file request

curl -X PUT \
     -H "Content-Type: application/json" \
     -d '{"externalID" : "portfolio", "fileContent" : "VGhpcyBpcyBhIHZlcnkgc21hbGwgdGV4dCBmaWxlLg0KDQpTbWFsbFRleHRGaWxl", \
        "fileType" : "SAMPLE", "name" : "TestResumeFile.txt", "contentType" : "text/plain",\
        "description" : "Resume file for candidate.", "type" : "cover"}' \
     https://rest.bullhornstaffing.com/rest-services/e999/file/Candidate/5097909

# Multipart/form (raw) file request

curl -X PUT \
    -F "file=@samplefile.txt" \
    https://rest.bullhornstaffing.com/rest-services/e999/file/Candidate/5097909/raw?filetype=SAMPLE&externalID=portfolio

# Example Response
{"fileId": 178}
```
Attaches a file to an entity. You can send a file as base64-encoded text or multipart/form data (raw). 
Files can be attached to the following types of entities:

* Candidate
* ClientContact
* ClientCorporation
* JobOrder
* Opportunity
* Placement

### HTTP Request for base64-encoded file

`{corpToken}/file/{entityType}/{entityId}`

Request body field | Required | Description
------ | -------- | -----
comments | no | Comments that describes the file.
contentType | no | Type/subtype of the file content.
externalID | yes | External identifier for the file.
fileContent | yes | Base64-encoded string of the file content.
fileExtension | no | Extension of the file. For example, .doc or .jpg.
fileType | yes | Always use the value “SAMPLE”.
name | yes | File name. If a file extension is included as part of the name and the fileExtension field is not set, the file extension in the name is used.
type | no | Type of file that is attached.


Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

### HTTP Request for multipart/form (raw) file

`{corpToken}/file/{entityType}/{entityId}/raw`

Parameter | Required | Description
------ | -------- | -----
externalID | yes | External identifier for the file.
fileType | yes | Always use the value “SAMPLE”.
name | yes | File name.
contentType | no | Type/subtype of the file content.
description | no | Comment that describes the file.
type | no | Type of file that is attached.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">POST</span> /file

``` shell

# Base64-encoded file request

curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"externalID" : "portfolio", "fileContent" : "VGhpcyBpcyBhIHZlcnkgc21hbGwgdGV4dCBmaWxlLg0KDQpTbWFsbFRleHRGaWxl", \
        "fileType" : "SAMPLE", "name" : "TestResumeFile.txt", "contentType" : "text/plain",\
        "description" : "Resume file for candidate.", "type" : "cover"}' \
     https://rest.bullhornstaffing.com/rest-services/e999/file/Candidate/5097909/1234

# Multipart/form (raw) file request

curl -X POST \
    -F "file=@samplefile.txt" \
    https://rest.bullhornstaffing.com/rest-services/e999/file/Candidate/5097909/1234/raw?filetype=SAMPLE&externalID=portfolio

# Example Response
No response body; returns 200 on successful update.
```
Updates a file attachment. You can update a file as base64-encoded text or multipart/form data (raw). 
Files attachments can be updated for the following types of entities:

* Candidate
* ClientContact
* ClientCorporation
* JobOrder
* Opportunity
* Placement

### HTTP Request for base64-encoded file

`{corpToken}/file/{entityType}/{entityId}/{fileId}`

Request body field | Required | Description
------ | -------- | -----
comments | no | Comments that describes the file.
contentType | no | Type/subtype of the file content.
externalID | yes | External identifier for the file.
fileContent | yes | Base64-encoded string of the file content.
fileExtension | no | Extension of the file. For example, .doc or .jpg.
fileType | yes | Always use the value “SAMPLE”.
name | yes | File name. If a file extension is included as part of the name and the fileExtension field is not set, the file extension in the name is used.
type | no | Type of file that is attached.


Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

### HTTP Request for multipart/form (raw) file

`{corpToken}/file/{entityType}/{entityId}/raw`

Parameter | Required | Description
------ | -------- | -----
externalID | yes | External identifier for the file.
fileType | yes | Always use the value “SAMPLE”.
name | yes | File name.
contentType | no | Type/subtype of the file content.
description | no | Comment that describes the file.
type | no | Type of file that is attached.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">DELETE</span> /file

``` shell
curl -X DELETE \
     https://rest.bullhornstaffing.com/rest-services/e999/file/Candidate/3835/231

     # Example Response
{
   "fileId": 178,
   "changeType": "DELETED"
}

```
Soft deletes a file attachment. The actual file remains on the server.

### HTTP Request

`{corpToken}/file/{entityType}/{entityId}/{fileId}}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 error if the requested entity cannot be found.</aside>
