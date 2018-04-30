---
layout: post
title: Understanding REST Form Triggers
description: Understanding REST Form Triggers
author: Mike Peterson
categories: [ REST ]
---

# Understanding REST Form Triggers

REST form triggers let you intercept REST calls and perform additional validations or data processing before data is saved in the Bullhorn database. Because application logic for form triggers can live outside of the Bullhorn hosting facilities, you have the freedom to write your own custom logic, including accessing non-Bullhorn systems to verify or modify data.
 
A form trigger is a web application that performs its own validation or data processing. If the form trigger responds with a value of true, the data is saved to the database. The Bullhorn support team can also configure what should happen if a form trigger fails to respond in a timely fashion. REST form triggers are configured at the corporation level.

You can create REST form triggers for creating or updating entities of the following types:

* Candidate
* ClientContact
* ClientCorporation
* JobOrder
* JobSubmission
* Lead
* Note
* Opportunity
* Placement

The Bullhorn support team configures your form trigger with the following information:

| Field | Value |
| :------ | :------- |
| Name | Name of the form trigger. |
| Trigger URL | Endpoint to hit when the REST create or update request is sent. |
| Wait for Response | Whether to wait for the response of the form trigger before proceeding. |
| Timeout | Time to wait for a response. Maximum of three seconds. If it takes longer, it is considered an error. |
| HTTP Method | Whether the trigger takes a POST or PUT. |

## Validating and changing data
Regardless of your programming environment, the remote service you use as a form trigger must provide logic for validating the data passed to it, and provide a response of true or false. The request body that is sent to the form trigger endpoint has the following structure:

~~~ json
{
    "meta": {
        "userId": 1 // User ID of the updating user
    },
    "data": { "id": 123, .... }
}
~~~
 
The form trigger endpoint response must conform to the following structure:

~~~ json
{
    "result": true,                 // to save it or not
    "error": "Error message",       // if result is false, reason to not save
    "data" : { "id": 123, .... }    // the data to save if result was true
}
~~~

**IMPORTANT:** The data returned in the "data" key of the response is what will be saved. If the form trigger is performing validation with no data changes, it still must respond with the full data packet that was sent to it.

## Executing a form trigger on a REST call
To execute a form trigger, you must pass “executeFormTriggers=true” on an entity create or update call. For example, the following REST call creates a Candidate and executes a form trigger that changes the value of the Candidate name:

~~~ http
PUT http://rest.bullhornstaffing.com/rest-services/abcde/entity/Candidate?&executeFormTriggers=true
~~~

Body:
~~~ json
{
    "firstName": "First",
    "lastName": "Last",
    "name": "FirstLast",
    "username": "TestUserName",
    "status" : "active"
}
~~~

Response:
~~~ json
{
    "changedEntityType": "Candidate",
    "changedEntityId": 792069,
    "changeType": "INSERT",
    "data": {
        "lastName": "Last",
        "username": "TestUserName",
        "status": "active",
        "name": "FirstLast",
        "firstName": "First"
    }
}
~~~

The following REST call gets back the name field of the Candidate that was just created. Note that the name value is changed so that a timestamp precedes the value that was sent on the request to create the Candidate:

~~~ http
GET http://rest.bullhornstaffing.com/rest-services/abcde/entity/Candidate/792069?fields=name
~~~

Body:
~~~ json
{
    "data": {
        "name": "1503504704182 FirstLast"
    }
}
~~~