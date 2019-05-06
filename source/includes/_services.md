# Services

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
