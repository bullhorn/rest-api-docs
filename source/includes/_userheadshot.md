# User Headshot File

## <span class="tag">GET</span> /userHeadshotFile

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/userHeadshotFile/Candidate/3835

# Example Response
<A multipart-encoded version of the file>
```
Returns a user headshot (profile picture) file attached to a Person entity. Headshot files can be attached to the following types of entities:
* Candidate
* ClientContact
* CorporateUser

### HTTP Request

`{corpToken}/userHeadshotFile/entityId}}`

Param | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 error if the requested entity cannot be found.</aside>


## <span class="tag">PUT</span> /userHeadshotFile

``` shell

# Base64-encoded userHeadshotFile request

curl -X PUT \
     -H "Content-Type: application/json" \
     -d '{"externalID" : "portfolio", "fileContent" : "VGhpcyBpcyBhIHZlcnkgc21hbGwgdGV4dCBmaWxlLg0KDQpTbWFsbFRleHRGaWxl", \
        "fileType" : "SAMPLE", "name" : "headshotfile.jpg", "contentType" : "image",\
        "description" : "Headshot file for candidate.", "type" : "headshot"}' \
     https://rest.bullhornstaffing.com/rest-services/e999/userHeadshotFile/Candidate/5097909

# Multipart/form (raw) userHeadshotFile request

curl -X PUT \
    -F "file=@headshotfile.jpg" \
    https://rest.bullhornstaffing.com/rest-services/e999/userHeadshotFile/Candidate/5097909/raw?filetype=SAMPLE&externalID=portfolio

# Example Response
{"fileId": 178}
```
Attaches a user headshot file (profile picture) to an entity. You can send a user headshot file as base64-encoded text or multipart/form data (raw). 
Files can be attached to the following types of entities:
* Candidate
* ClientContact
* ClientCorporation
* JobOrder
* Opportunity
* Placement

### HTTP Request for base64-encoded user headshot file

`{corpToken}/userHeadshotFile/{entityType}/{entityId}`

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

### HTTP Request for multipart/form (raw) user headshot file

`{corpToken}/userHeadshotFile/{entityType}/{entityId}/raw`

Parameter | Required | Description
------ | -------- | -----
externalID | yes | External identifier for the file.
fileType | yes | Always use the value “SAMPLE”.
name | yes | File name.
contentType | no | Type/subtype of the file content.
description | no | Comment that describes the file.
type | no | Type of file that is attached.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">POST</span> /userHeadshotFile

``` shell

# Base64-encoded user headshot file request

curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"externalID" : "portfolio", "fileContent" : "VGhpcyBpcyBhIHZlcnkgc21hbGwgdGV4dCBmaWxlLg0KDQpTbWFsbFRleHRGaWxl", \
        "fileType" : "SAMPLE", "name" : "headshotfile.jpg", "contentType" : "image",\
        "description" : "Headshot file for candidate.", "type" : "headshot"}' \
     https://rest.bullhornstaffing.com/rest-services/e999/userHeadshotFile/Candidate/5097909

# Multipart/form (raw) userHeadshotFile request

curl -X POST \
    -F "file=@headshotfile.jpg" \
    https://rest.bullhornstaffing.com/rest-services/e999/userHeadshotFile/Candidate/5097909/raw?filetype=SAMPLE&externalID=portfolio

# Example Response
{"fileId": 179}
```
Attaches a user headshot file (profile picture) to an entity. You can send a file as base64-encoded text or multipart/form data (raw). 
Files can be attached to the following types of entities:
* Candidate
* ClientContact
* ClientCorporation


### HTTP Request for base64-encoded user headshot file

`{corpToken}/userHeadshotFile/{entityType}/{entityId}`

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

`{corpToken}/userHeadshotFile/{entityType}/{entityId}/raw`

Parameter | Required | Description
------ | -------- | -----
externalID | yes | External identifier for the file.
fileType | yes | Always use the value “SAMPLE”.
name | yes | File name.
contentType | no | Type/subtype of the file content.
description | no | Comment that describes the file.
type | no | Type of file that is attached.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">DELETE</span> /userHeadshotFile

``` shell
curl -X DELETE \
     https://rest.bullhornstaffing.com/rest-services/e999/userHeadshotFile/Candidate/3835

# Example Response
{
   "fileId": 178,
   "changeType": "DELETED"
}

```
Soft deletes a user headshot file. The actual file remains on the server.

### HTTP Request

`{corpToken}/userHeadshotFile/{entityType}/{entityId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

<aside class="warning">Returns an HTTP 404 error if the requested entity cannot be found.</aside>
