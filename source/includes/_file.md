# File

## <span class="tag">GET</span> /file

``` shell
curl https://rest.bullhornstaffing.com/e999/file/Candidate/3835/231

# Example Response
{"File": {
   "contentType": "text/plain",
   "fileContent": "VGhpcyBpcyBhIHZlcnkgc21hbGwgdGV4dCBmaWxlLg0KDQpTbWFsbFRleHRGaWxl",
   "name": "SmallFile.txt"
}}
```

Returns an attached file as base64-encoded text.
Files can be attached to the following types of entities:
* Candidate
* ClientContact
* ClientCorporation
* JobOrder
* Opportunity
* Placement

### HTTP Request

`{corpToken}/file/{entityType}/{entityId}/{fileId}`

Param | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 error if the requested entity cannot be found.</aside>

## <span class="tag">GET</span> /entityFiles

``` shell
curl https://rest.bullhornstaffing.com/e999/entityFiles/Candidate/203866

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
externalID | yes | External identifier for the file.
fileContent | yes | Base64-encoded string of the file content.
fileType | yes | Always use the value “SAMPLE”.
name | yes | File name.
contentType | no | Type/subtype of the file content.
description | no | Comment that describes the file.
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
type | no | Type of file that is attached.BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.


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
