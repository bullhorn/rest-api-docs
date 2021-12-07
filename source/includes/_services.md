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

## POST / PUT /services/DirectDepositAccount

The Direct Deposit Account service allows for the creation of direct deposit accounts attached to a single candidate.

``` shell
curl -X POST / PUT \
      https://rest.bullhornstaffing.com/rest-services/e999/services/DirectDepositAccount

# Example Request
{
    "candidate": {
        "id": 36432821
    },
    "directDepositAccounts": [
        {
            "amount": 1000,
            "remainder": false,
            "currencyUnit": {
                "id": 166,
                "minorUnits": 0
            },
            "bankName": "Chase Bank",
            "accountNumber": "111",
            "transitNumber": "021000021",
            "directDepositAccountTypeLookup": {
                "id": 1,
                "label": "Checking"
            },
            "paymentOrder": 1
        },
        {
            "amount": 500,
            "remainder": false,
            "currencyUnit": {
                "id": 166,
                "minorUnits": 0
            },
            "bankName": "Bank of America",
            "accountNumber": "112",
            "transitNumber": "011401533",
            "directDepositAccountTypeLookup": {
                "id": 2,
                "label": "Savings"
            },
            "paymentOrder": 2
        },
        {
            "remainder": true,
            "currencyUnit": {
                "id": 166,
                "minorUnits": 0
            },
            "bankName": "Wells Fargo",
            "accountNumber": "113",
            "transitNumber": "091000019",
            "directDepositAccountTypeLookup": {
                "id": 3,
                "label": "Pay Card"
            },
            "paymentOrder": 3
        }
    ]
}

# Example Response
[
    {
        "changedEntityType": "DirectDepositAccount",
        "changedEntityId": 22538,
        "changeType": "INSERT",
        "data": {
            
        }
    },
    {
        "changedEntityType": "DirectDepositAccount",
        "changedEntityId": 22539,
        "changeType": "INSERT",
        "data": {
            
        }
    },
    {
        "changedEntityType": "DirectDepositAccount",
        "changedEntityId": 22540,
        "changeType": "INSERT",
        "data": {
            
        }
    }
]
```

### HTTP Request

`{corpToken}/services/DirectDepositAccount`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## PUT /services/IssueReport

The Issue Report service allows for creation of issues to be presented to the user. These user-facing issues will be related to existing entities, and provide data on what the issue is and how to fix it. 

``` shell
curl -X PUT \
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

## PUT /services/RevenueRecognition/BillMasterTransactionDistributionBatch

Handles the creation of a BillMasterTransactionDistributionBatch and its subsequent association to BillableCharges.

``` shell
curl -X PUT \
      https://rest.bullhornstaffing.com/rest-services/e999/services/RevenueRecognition/BillMasterTransactionDistributionBatch

# Example Request
{
    "billableChargeIds":[1118]
}

# Example Response
{
    "changedEntityType":"BillMasterTransactionDistributionBatch",
    "changedEntityId":178,
    "changeType":"INSERT",
    "data":{}
}
```

### HTTP Request

`{corpToken}/services/RevenueRecognition/BillMasterTransactionDistributionBatch`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## PUT /services/RevenueRecognition/UnbilledRevenueDistributionBatch 

Handles the creation of an UnbilledRevenueDistributionBatch and its subsequent association to UnbilledRevenueDistributions.

``` shell
curl -X PUT \
      https://rest.bullhorn.com/rest-services/e999/services/RevenueRecognition/UnbilledRevenueDistributionBatch 

# Example Request
{
    "billableChargeIds":[1110]
}

# Example Response
{
    "changedEntityType":"UnbilledRevenueDistributionBatch",
    "changedEntityId":58,
    "changeType":"INSERT",
    "data":{}
}
```

### HTTP Request

`{corpToken}/services/RevenueRecognition/BillMasterTransactionDistributionBatch`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## POST /services/RevenueRecognition/UpdateTransactionExportStatus

Allows the API user to update the unbilledRevenueGeneralLedgerExportStatus for one or more BillMasterTransactions.

``` shell
curl -X POST \
      https://rest.bullhorn.com/rest-services/e999/services/RevenueRecognition/UpdateTransactionExportStatus 

# Example Request
{
    "billMasterTransactionIDs": [1110],
    "unbilledRevenueGeneralLedgerExportStatusLookupID": 2
}

# Example Response
{
    "changedEntityType": "BillMasterTransaction",
    "changeType": "UPDATE",
    "data": {
        "billMasterTransactionIDs": [
            1110
        ]
    }
}
```

### HTTP Request

`{corpToken}/services/RevenueRecognition/UpdateTransactionExportStatus`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.



## POST /services/PayExportBatch/batchExportStatus

Allows a user to update the status of a PayExportBatch.

NOTE: If you submit a batch export status update where there is only a single failed record with an entity name of PayExportBatch and the entityId matches the sourceBatchId, then we will treat the request as if you had asked our system to fail every PayMasterTransaction associated with that PayExportBatch. Issue creation logic will be unaffected.

``` shell
curl -X POST \
      https://rest.bullhorn.com/rest-services/e999/services/PayExportBatch/batchExportStatus

# Example Request
{
    "exportType": "payroll",
    "sourceBatchID": 5577,
    "successfulRecords": [
        {
            "status": "ACME_SUCCESS",
            "entityName": "~PayrollTimeSheet",
            "entityIds": [
                100, 101
            ],
            "externalBatchID": "BULLHORN_BATCH_ID_5577"
        }
    ],
    "failedRecords": [
        {
            "entityName": "~PayrollTimeSheet",
            "entityId": 102,
            "exception": "Some exception",
            "issues": [
                {
                    "severity": "Error",
                    "externalSystemName": "Charles HR",
                    "actionEntity": "PayExportBatch",
                    "actionEntityId": 1084,
                    "issueItems": [
                      {
                        "sourceEntity": "Placement",
                        "sourceEntityId": 57,
                        "severity": "Error",
                        "fixableByUser": false,
                        "process": "Payroll Export",
                        "comments": "PayExportBatch #1084",
                        "fixInBullhorn": false,
                        "externalEntityName": "Charles HR",
                        "referenceUrlStatusCode": "200",
                        "errorType": "SYSTEM-ERROR",
                        "description": "Acme HR has failed this entire PayExportBatch because we couldn't find the placement in our system.",
                        "referenceUrl": "https://www.google.com",
                        "referenceUrlMethod": "POST",
                        "externalEntityId": "104",
                        "referenceUrlResponse": "Charles HR is a fictitious HR provider created by Bullhorn for testing point-to-point payroll exports",
                        "fieldReference": ""
                      }
                    ],
                    "action": "Payroll Export"
            }
        ]
        },
        {
            "entityName": "~PayrollTimeSheet",
            "entityId": 103,
            "error": "Some exception"
        }
    ]
}

# Example Response
{
    "changedEntityType": "ExternalBatchStatusRequest",
    "changedEntityId": 28,
    "changeType": "INSERT",
    "messages": [
        {
            "detailMessage": "ExternalBatchStatusRequest is queued up for processing",
            "severity": "WARNING",
            "type": "LOCALIZED_PERSISTENCE_MESSAGE"
        }
    ],
    "data": {}
}
```

### HTTP Request

`{corpToken}/services/RevenueRecognition/UpdateTransactionExportStatus`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.
