# Services

## POST /services/CCPA/notifyOnCapture

The California Consumer Privacy Act (CCPA) is a bill meant to enhance privacy rights and consumer protection for residents of California and goes into effect on January, 2020. Notify on Capture is a feature of this bill that notifies a person in the system that their data is being captured for the purposes of serving them as a staffing agency. An email is sent and a note is added to the person record for tracking. The staffing agency is responsible for knowing if and when to send Notify on Capture emails.

The email body and subject line are pulled from system settings (private label attributes) that are specific to the person record:
 
 * `candidateDataCaptureNotificationEmailBody` / `candidateDataCaptureNotificationEmailSubjectLine`
 * `contactDataCaptureNotificationEmailBody` / `contactDataCaptureNotificationEmailSubjectLine`
 * `leadDataCaptureNotificationEmailBody` / `leadDataCaptureNotificationEmailSubjectLine`

After the email is successfully sent a note is added to the person record with an action type from the: `dataCaptureNotificationNoteType` system setting. 

``` shell
curl -X POST \
      https://rest.bullhornstaffing.com/rest-services/e999/services/CCPA/notifyOnCapture

# Example Response
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

## POST /services/IssueReport

The Issue Report service allows for creation of issues to be presented to the user. These user-facing issues will be related to existing entities, and provide data on what the issue is and how to fix it. 

``` shell
curl -X POST \
      https://rest.bullhornstaffing.com/rest-services/e999/services/IssueReport

# Example Request
{
    "issues": [
        {
            "action": "New Hire Export",
            "actionEntity": "Placement",
            "actionEntityId": 4,
            "externalSystemName": "ACME HR",
            "issueItems": [
                {
                    "severity": "Error",
                    "errorType": "MISSING-DATA",
                    "fieldReference": "zip",
                    "description": "Work location zip code is missing."
                },
                {
                    "severity": "Error",
                    "errorType": "INVALID-DATA",
                    "fieldReference": "status",
                    "description": "Invalid status 'Mostly Active'. Valid statuses are 'Active', 'Inactive', 'Other'."
                }
            ]
        }
    ]
}

# Example Response
[
    {
        "changedEntityType": "Issue",
        "changedEntityId": 1234,
        "changeType": "INSERT",
        "data": {}
    }
]
```

### HTTP Request

`{corpToken}/services/IssueReport`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## POST /services/PlacementChangeRequest/approve/

``` shell
curl -X POST \
      https://rest.bullhornstaffing.com/rest-services/e999/services/PlacementChangeRequest/approve/123

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

The PlacementChangeRequest requestStatus is changed to the value stored in the placementApprovalStatus private label attribute.

### HTTP Request

`{corpToken}/services/PlacementChangeRequest/approve/{placementChangeRequestId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.
