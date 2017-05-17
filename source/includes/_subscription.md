# event

## <span class="tag">GET</span> /event/subscription

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/event/subscription/Abcde?maxEvents=100

# Example Response
{'requestId': 1,
 'events': [{'eventId': 'ID:JBM-40004219',
             'eventType': 'ENTITY',
             'entityName': 'Candidate',
             'eventMetadata': {},
             'updatedProperties': ['phone'],
             'entityEventType': 'UPDATED',
             'eventTimestamp': 1335286112652,
             'entityId': 123}
             ]}
```

Lets you get entity events, field map change events, and job match search events.

### HTTP Request

`{corpToken}/event/subscription/{subscriptionId}`

Parameter | Required | Description
------ | -------- | -----
maxEvents | yes | Integer specifying the maximum number of events to be returned.
requestId | no | Integer specifying an event requestId. Lets you reget events.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">GET</span> /event/subscription/lastRequestId

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/event/subscriptioN/Abcde/lastRequestId

# Example Response
{'result': 1}
```

Lets you get entity events, field map change events, and job match search events.

### HTTP Request

`{corpToken}/event/subscription/{subscriptionId}/lastRequestId`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header. 

## <span class="tag">PUT</span> /event/subscription

``` shell
curl -X PUT \
     -H "Content-Type: application/json" \
     https://rest.bullhornstaffing.com/rest-services/e999/event/subscription/Abcde?type=entity&names=Candidate
&eventTypes=INSERTED,UPDATED,DELETED

# Example Response
{'lastRequestId': 0,
 'subscriptionId': 'abcde',
 'createdOn': 1335285871323,
 'jmsSelector': "JMSType='ENTITY' AND BhCorpId=44 AND BhEntityName='Candidate' AND BhEntityEventType IN ('UPDATED','INSERTED','DELETED')"}

```

Lets you subscribe to event types.

### HTTP Request

`{corpToken}/event/subscription/{subscriptionId}`

Parameter | Required | Description
------ | -------- | -----
type | yes | entity | fieldMapChange | jobMatchSearch.
names | yes | Required with "entity" type. A comma-separated list of entity names.
eventTypes | yes | RRequired with "entity" type. A comma-separated list of entity event types: INSERTED, UPDATED, DELETED.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">DELETE</span> /event/subscription

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/event/subscription/Abcde
&eventTypes=INSERTED,UPDATED,DELETED

# Example Response
{'result': True}

```

Lets you unsubscribe from event types.

### HTTP Request

`{corpToken}/event/subscription/{subscriptionId}`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.