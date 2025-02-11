# services

## POST /services/CCPA/notifyOnCapture

The California Consumer Privacy Act (CCPA) is a bill meant to enhance privacy rights and consumer protection for residents of California and goes into effect on January, 2020. Notify on Capture is a feature of this bill that notifies a person in the system that their data is being captured for the purposes of serving them as a staffing agency. An email is sent and a note is added to the person record for tracking. The staffing agency is responsible for knowing if and when to send Notify on Capture emails.

The email body and subject line are pulled from system settings (private label attributes) that are specific to the person record:

* `candidateDataCaptureNotificationEmailBody` / `candidateDataCaptureNotificationEmailSubjectLine`
* `contactDataCaptureNotificationEmailBody` / `contactDataCaptureNotificationEmailSubjectLine`
* `leadDataCaptureNotificationEmailBody` / `leadDataCaptureNotificationEmailSubjectLine`

After the email is successfully sent, a note is added to the person record with an action type from the `dataCaptureNotificationNoteType` system setting.

``` shell
curl -X POST \
      https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/services/CCPA/notifyOnCapture

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

## POST / PUT /services/CorporateUser

With appropriate access, you can add or update users. Adding users may incur additional user fees. For questions about your account and billing, please contact Bullhorn Support or your Account Manager.

``` shell
curl -X PUT \
      https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/services/CorporateUser

curl -X POST \
      https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/services/CorporateUser/{corporateUserID}

# Example Request
{
    "userType": {
            "id": 456789
        },
        "privateLabel": {
            "id": 987654
        },
        "userSettings": {
            "openOutboundMailInDefaultClient": "FALSE",
            "sendAppointmentReminder": "FALSE",
            "sendInvitationsToOwner": "FALSE",
            "mobileEnabled": "0"
        },
        "firstName": "Jane",
        "middleName": "Francine",
        "lastName": "Doe",
        "name": "Jane Doe",
        "username": "JaneDoe",
        "nickName": "Janey",
        "password": "FakePassword",
        "enabled": true,
        "emailNotify": false,
        "timeZoneOffsetEST": 600,
        "address": {
            "address1": "Fake Address 1",
            "address2": "Fake Address 2",
            "city": "Boston",
            "countryID": 1,
            "state": "MA",
            "zip": "02108"
        },
        "userDateAdded": 1550874742177,
        "dateLastComment": 1607036876320,
        "departments": [
            {
                "id": 123456,
                "isPrimary": true
            },
            {
                "id": 456789,
                "isPrimary": false
            }
        ],
        "email": "fakeEmail@fakeEmail.com",
        "email2": "fakeEmail2@fakeEmail.com",
        "email3": "fakeEmail3@fakeEmail.com",
        "emailSignature": "Jane Doe",
        "externalEmail": "fakeExternalEmail@fakeExternalEmail.com",
        "phone": "12345678912",
        "phone2": "45612378894",
        "phone3": "12346512384",
        "mobile": "13216549456",
        "pager": "456987412512",
        "fax": "12345678912",
        "fax2": "45612378894",
        "fax3": "12346512384",
        "occupation": "HR",
        "companyName": "Fake Company",
        "addressSourceLocation": {
            "id": 7
        },
        "namePrefix": "Ms",
        "nameSuffix": "ii",
        "isDayLightSavings": false,
        "isLockedOut": false,
        "isOutboundFaxEnabled": false,
        "inboundEmailEnabled": false,
        "customText1": "Custom Text",
        "customText2": "Custom Text",
        "customText3": "Custom Text",
        "customText4": "Custom Text",
        "customText5": "Custom Text",
        "customText6": "Custom Text",
        "customText7": "Custom Text",
        "customText8": "Custom Text",
        "customText9": "Custom Text",
        "customText10": "Custom Text",
        "customText11": "Custom Text",
        "customText12": "Custom Text",
        "customText13": "Custom Text",
        "customText14": "Custom Text",
        "customText15": "Custom Text",
        "customText16": "Custom Text",
        "customText17": "Custom Text",
        "customText18": "Custom Text",
        "customText19": "Custom Text",
        "customText20": "Custom Text",
        "customDate1": "1550874742177",
        "customDate2": "1550874742177",
        "customDate3": "1550874742177",
        "customFloat1": 1.3,
        "customFloat2": 0.4,
        "customFloat3": 10.5,
        "customInt1": 100,
        "customInt2": 450,
        "customInt3": 30,
        "isDeleted": false,
        "massMailOptOut": false,
        "smsOptIn": false,
        "loginRestrictions": {
            "ipAddress": "149.176.114.106",
            "timeStart": "23:30:00",
            "timeEnd": "00:30:00",
            "weekDays": [
                1,
                2,
                6
            ]
        },
        "samlInfo": {
            "samlIdpID": 456,
            "nameID": "ssoEmail@email.com",
            "idpType": 1
        }
}

# Example Response for PUT
{
    "changedEntityType": "CorporateUser",
    "changedEntityId": 123456,
    "changeType": "INSERT",
    "data": {}
}

# Example Response for POST
{
    "changedEntityType": "CorporateUser",
    "changedEntityId": 123456,
    "changeType": "UPDATE",
    "data": {}
}
```

### HTTP Request

`{corpToken}/services/CorporateUser` and `{corpToken}/services/CorporateUser/{corporateUserID}`

Parameter | Required | Description
--------- |----------| -----------
BhRestToken | yes      | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header._

## PUT /services/CorporateUser/{corporateUserID}/delegation

With appropriate access, you can add delegates to users.

``` shell
curl -X PUT \
      https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/services/CorporateUser/{corporateUserID}/delegation

# Example Request
{
    "delegate": 1
}

# Example Response for PUT
{
    "delegate": 1
}
```

### HTTP Request

`{corpToken}/services/CorporateUser/{corporateUserID}/delegation` and `{corpToken}/services/CorporateUser/{corporateUserID}/delegation`

Parameter | Required | Description
--------- |----------| -----------

BhRestToken | yes      | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## POST / PUT /services/DirectDepositAccount

The Direct Deposit Account service allows for the creation of direct deposit accounts attached to a single candidate.

``` shell
curl -X POST / PUT \
      https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/services/DirectDepositAccount

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
      https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/services/IssueReport

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
      https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/services/PlacementChangeRequest/approve/123

# Example Request 1
# No Request Body

# Example Response 1
{
    "message": "success",
    "placementID": 70695,
    "placementChangeRequest": {
        "requestStatus": "Approved",
        "id": 123
    }
}

# Example Request 2
{
    "approvingUser": {
        "id": 24
    },
    "correlatedCustomText1": "correlated custom text 1",
    "customText18": "custom text 18",
    "customText29": "custom text 29",
    "dateApproved": 1716523200001,
    "requestCustomText10": "request custom text 10",
    "requestStatus": "Test Status",
    "requestingUser": {
        "id": 10
    }
}

# Example Response 2
{
    "message": "success",
    "placementID": 70695,
    "placementChangeRequest": {
        "requestStatus": "Test Status",
        "id": 123
    }
}
```

Approves a PlacementChangeRequest and updates the associated placement with the fields changes specified on the PlacementChangeRequest.

This request can be made _**without**_ any request body.

This request can be made with a request body that contains any PlacementChangeRequest fields, including `dateApproved`.
If PlacementChangeRequest fields are included, then updates will be made to the PlacementChangeRequest entity.

If nothing is provided in the request body for the following fields, the system will automatically set a value:

* approvingUser 
  * This will be set to the CorporateUser who made the service call. 
* dateApproved 
  * This will be set to the timestamp of the request.
* requestStatus
  * This will be set to the localized value stored in the `placementApprovalStatus` private label attribute.

### HTTP Request

`{corpToken}/services/PlacementChangeRequest/approve/{placementChangeRequestId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## PUT /services/RevenueRecognition/BillMasterTransactionDistributionBatch

Handles the creation of a BillMasterTransactionDistributionBatch and its subsequent association to BillableCharges.

``` shell
curl -X PUT \
      https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/services/RevenueRecognition/BillMasterTransactionDistributionBatch

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
      https://rest{swimlane#}.bullhorn.com/rest-services/e999/services/RevenueRecognition/UnbilledRevenueDistributionBatch 

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
      https://rest{swimlane#}.bullhorn.com/rest-services/e999/services/RevenueRecognition/UpdateTransactionExportStatus 

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
      https://rest{swimlane#}.bullhorn.com/rest-services/e999/services/PayExportBatch/batchExportStatus

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
                        "description": "Fake Description.",
                        "referenceUrl": "https://www.google.com",
                        "referenceUrlMethod": "POST",
                        "externalEntityId": "104",
                        "referenceUrlResponse": "Fake Response",
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


### PUT /services/BillableCharge

Allows a user to create a billable charge.

At least one of either a placement or a billing profile is required. If only a placement is provided, it must have a billing profile. A description is required.

```shell
curl -X PUT \
      https://rest{swimlane#}.bullhorn.com/rest-services/e999/services/BillableCharge

# Example Request
{
    "description": "BillableCharge Test",
    "periodEndDate": "2024-04-27",
    "placement": {
        "id": 272
    },
    "billMasters": [
        {
            "quantity": 30.0,
            "transactionDate": "2024-04-27",
            "amount": 1500.0,
            "earnCode": {
                "id": 5
            },
            "rate": 50,
            "customerRequiredFields": [
                {
                    "customerRequiredFieldMeta": {
                        "id": 2
                    },
                    "customerRequiredFieldOption": {
                        "id": 14
                    }
                },
                {
                    "customerRequiredFieldMeta": {
                        "id": 1
                    },
                    "textValue": "Meta Text Value!"
                }
            ]
        }
    ]
}
```

### HTTP Request

`{corpToken}/services/BillableCharge`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.


### POST /services/BillableCharge

Allows a user to update a billable charge.

```shell
curl -X PUT \
      https://rest{swimlane#}.bullhorn.com/rest-services/e999/services/BillableCharge

# Example Request
{
    "billMasters": [
        {
            "quantity": 30.0,
            "transactionDate": "2024-04-27",
            "amount": 1500.0,
            "earnCode": {
                "id": 5
            },
            "rate": 50,
            "customerRequiredFields": [
                {
                    "customerRequiredFieldMeta": {
                        "id": 2
                    },
                    "customerRequiredFieldOption": {
                        "id": 14
                    }
                },
                {
                    "customerRequiredFieldMeta": {
                        "id": 1
                    },
                    "textValue": "Meta Text Value!"
                }
            ]
        }
    ]
}
```

### HTTP Request

`{corpToken}/services/BillableCharge/{billableChargeId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.



### POST /services/CustomerRequiredField
Creates and updates client CRFs, manages CRF options, and sets default options.

Utilizes:
* Add Client Customer Required Field
* Update Client Customer Required Field


Validates:
* Start date must be before end date
* Client ID must exist
* Client has ≤10 Metas
* Meta has ≤50 Options
* CRF Type exists
* Meta has a label
* Only 1 option is marked default
* Requires booleans for doesFlowToNewJobs, requiredOntimesheet, visibleOnTimesheet
* If PO then requires entityID in message and PO ID exists


```shell
curl -X POST \ PUT
https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/services/CustomerRequiredField/{id?}

# Example Request
{
    "options": [
        {
            "displayLabel": "NEW OPTION",
            "associatedEntityID": {{purchaseOrderId3}}
        },
        {
            "id": {{customerRequiredFieldOptionId}},
            "displayLabel": "UPDATE display label"
        }
    ]
}
```

### HTTP Request
`{corpToken}/services/CustomerRequiredField/{id?}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

### POST /services/PlacementCustomerRequiredField
Creates, updates and removes CRFs on placements and manages CRF options.
Utilizes:

* Add Customer Required Field Configuration
* Edit Customer Required Field Configuration
* Delete Customer Required Field Configuration

Validates:

* Meta exists
* Default option ID exists
* Options exist and relate to the Meta
* Requires effective date
* Effective date is unique
* Requires isActive
* Root ID matches version parent ID

```shell  
curl -X POST \ PUT \ GET
      https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/services/PlacementCustomerRequiredField/{id?}

# Example Request
{
    "versionID": 230,
    "effectiveDate": "2023-02-28",
    "isActive": true,
    "defaultCustomerRequiredFieldOption": {
        "id": 96
    },
	"options": {
	    "replaceAll": [96, 97, 98]
}
```

### HTTP Request
`{corpToken}/services/PlacementCustomerRequiredField/{id?}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

### POST /services/JobOrderCustomerRequiredField
Creates, updates and removes CRFs on jobs and manages CRF options.
Utilizes:

* Add Job Customer Required Field Configuration
* Edit Job Customer Required Field Configuration
* Delete Job Customer Required Field Configuration

Validates:

* Meta exists
* Default option ID exists
* Options exist and relate to the Meta
* Requires effective date
* Effective date is unique
* Requires isActive
* Root ID matches version parent ID

```shell    
curl -X POST \ PUT \ GET
      https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/services/JobOrderCustomerRequiredField/{id?}

# Example Request
{
    "versionID": 230,
    "effectiveDate": "2023-02-28",
    "isActive": true,
    "defaultCustomerRequiredFieldOption": {
        "id": 96
    },
	"options": {
	    "replaceAll": [96, 97, 98]
}

```
### HTTP Request
`{corpToken}/services/JobOrderCustomerRequiredField/{id?}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

### DELETE /services/PlacementCustomerRequiredField/version
Manages versions for Placement CRFs.


* 10 CRFs per Placement
* 50 CRF Options per Version

```shell   
curl -X DELETE \
      https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/services/PlacementCustomerRequiredField/{id?}/version/{id?}

# Example Request
{
    "effectiveDate": "2023-02-28",
    "isActive": true,
    "defaultCustomerRequiredFieldOption": {
        "id": 236
    },
	"options": {
	    "replaceAll": [236, 237, 238, 239, 240, 241, 242, 243, 244, 245]
	}
}

```
### HTTP Request
`{corpToken}/services/PlacementCustomerRequiredField/{id?}/version/{id?}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

### DELETE /services/JobOrderCustomerRequiredField/version
Manages versions for Job CRFs.

* 10 CRFs per Job
* 50 CRF Options per Version
* Version

```shell   
curl -X DELETE \
      https://rest{swimlane#}.bullhornstaffing.com/rest-services/e999/services/JobOrderCustomerRequiredField/{id?}/version/{id?}

# Example Request
{
    "effectiveDate": "2023-02-28",
    "isActive": true,
    "defaultCustomerRequiredFieldOption": {
        "id": 236
    },
	"options": {
	    "replaceAll": [236, 237, 238, 239, 240, 241, 242, 243, 244, 245]
	}
}
```
### HTTP Request
`{corpToken}/services/JobOrderCustomerRequiredField/{id?}/version/{id?}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | yes | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.
