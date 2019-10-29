# Services

## POST /services/CCPA/notifyOnCapture

The California Consumer Privacy Act (CCPA) is a bill meant to enhance privacy rights and consumer protection for residents of California and goes into effect on January, 2020. Notify on Capture is a feature of this bill that notifies a person in the system that their data is being captured for the purposes of serving them as a staffing agency. An email is sent and a note is added to the person record for tracking. The staffing agency is responsible for knowing if and when to send Notify on Capture emails.

The email body and subject line are pulled from as system settings (a.k.a. Private Label Attributes) that are specific to the type person record:
 
 * `candidateDataCaptureNotificationEmailBody` / `candidateDataCaptureNotificationEmailSubjectLine`
 * `contactDataCaptureNotificationEmailBody` / `contactDataCaptureNotificationEmailSubjectLine`
 * `leadDataCaptureNotificationEmailBody` / `leadDataCaptureNotificationEmailSubjectLine`

After the email is successfully sent, a note is added to the person record with an action type from the: `dataCaptureNotificationNoteType` system setting. 

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/services/CCPA/notifyOnCapture

# Example Responsew
{
    "results": {
        "SUCCESS": [
            123,
            456
        ],
        "FAILURE": []
    },
    "overallStatus": "SUCCESS",
    "message": "Notify on capture email has been sent and note added.",
    "successIds": [
        123,
        456
    ],
    "failureIds": []
}
```

### HTTP Request

`{corpToken}/services/CCPA/notifyOnCapture`

Parameter | Required | Description
--------- | -------- | -----------
entity | yes | One of: "Candidate", "ClientContact", or "Lead".
ids | yes | List of IDs of the given type of entity, a maximum of 500 per call.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## GET /services/PlacementChangeRequest/approve/

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/services/PlacementChangeRequest/approve/123

# Example Response
{
    "message": "success",
    "placementID": 70695,
    "placementChangeRequest": {
        "requestStatus": "Approved",
        "id": 123
    }
}
```

Approves a PlacementChangeRequest and updates the associated placement with the fields changes specified on the PlacementChangeRequest.

The PlacementChangeRequest requestStatus is changed to the value stored in the private label attribute "placementApprovalStatus".

### HTTP Request

`{corpToken}/services/PlacementChangeRequest/approve/{placementChangeRequestId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.
