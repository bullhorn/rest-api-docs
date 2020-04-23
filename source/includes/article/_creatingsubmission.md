---
layout: post
title: Creating a Submission
description: Use the REST API to create candidates and submit them for jobs
author: Mike Peterson
categories: [ REST ]
---

# Use the REST API to create candidates and submit them for jobs

In this article, we use the Bullhorn REST API to complete the following sequence of tasks:

1. Get a list of jobs from Bullhorn
2. Get a list of tearsheets (hot lists) from Bullhorn
3. Create a candidate in Bullhorn
4. Add the candidate to a tearsheet
5. Submit the candidate for a job as a web response
6. Promote the web response to a submission

Before using the REST API, you must perform authorization and authentication. See [Getting Started with the Bullhorn REST API](../Getting-Started-with-REST) for information about obtaining an OAuth 2.0 access token and logging in to the REST API.

## Get a list of jobs

The first thing we want to do after logging into the REST API is get a list of jobs from Bullhorn. From this list, we can choose jobs that match potential candidates. To get a list of jobs that match our search criteria, we make a GET /search/JobOrder REST call in which we provide a search query. The query is made against an Apache Lucene search index and uses Lucene query syntax. For more information about Lucene query syntax, see:

<http://www.lucenetutorial.com/lucene-query-syntax.html/>

Here is a sample REST call where we search for jobs that are open, not deleted, and not archived. The fields parameter refines the call to return just the id, company (clientCorporation), company contact (clientContact), and description for each job that is returned. Note that the count parameter is set to 20, which is the default count for a /search call. To view additional items, you can page data by setting the start and count query parameters to match the items you want to return in subsequent REST calls.

Request URI:

~~~ http
GET https://rest.bullhorn.com/rest-services/{corpToken}/search/JobOrder?query=isOpen:1 AND isDeleted:0 AND NOT status:archive&fields=id,clientCorporation,clientContact,description&count=20&start=0
~~~

Response:

~~~ json
{
  "total" : 1154,
  "start" : 0,
  "count" : 20,
  "data" : [ {
    "id" : 95423,
    "clientCorporation" : {
      "id" : 3767,
      "name" : "General Chemical"
    },
    "clientContact" : {
      "id" : 5063396,
      "firstName" : "Chris",
      "lastName" : "Jones"
    },
    "description" : "sample",
    "_score" : 1.0
  }, {
    "id" : 95429,
    "clientCorporation" : {
      "id" : 103371,
      "name" : "Bowlmatic, Inc."
    },
    "clientContact" : {
      "id" : 5062195,
      "firstName" : "Samual",
      "lastName" : "Smith"
    },
    "description" : "sample",
    "_score" : 1.0
  }
...
]
}
~~~

The search call only returns jobs that the user is entitled to view. Bullhorn users have one of the following entitlement levels for viewing jobs:

* All jobs that users in this user's company created
* All jobs that users in this user's department created
* Only jobs that this user created

## Get a list of tearsheets (hot lists)

The next thing we want to do is get a list of tearsheets. You use tearsheets, also called hot lists, to group candidates, contacts, or even jobs based on any criteria you define, to save for later use. To get a list of tearsheets that match our search criteria, we make a GET /query/Tearsheet REST call in which we provide a search query. The query is made against a database and uses SQL-like syntax.

Here is a sample REST call where we search for tearsheets that are public and not deleted, or are private, not deleted, and owned by the current user. Replace {currentUserId} with the actual id of the user; You can make the /settings/userId call to get the current user id. The fields query parameter returns all fields for each tearsheet that is returned. Note that the count parameter is set to 15, which is the default count for a /query call. To view additional items, you can page data by setting the start and count query parameters to match the items you want to return in subsequent REST calls.

Request URI:

~~~ http
GET https://rest.bullhorn.com/rest-services/{corpToken}/query/Tearsheet?fields=id&where=(isPrivate=false AND isDeleted=false) OR (isPrivate=true ANDisDeleted=false AND owner.id={currentUserId})
~~~

Response:

~~~ json
{
  "start" : 0,
  "count" : 15,
  "data" : [ {
    "id" : 3198,
    "candidates" : {
      "total" : 25,
      "data" : [ ]
    },
    "clientContacts" : {
      "total" : 0,
      "data" : [ ]
    },
    "dateAdded" : 1396371363117,
    "description" : null,
    "isDeleted" : false,
    "isPrivate" : false,
    "jobOrders" : {
      "total" : 2,
      "data" : [ ]
    },
    "name" : "tearsheet1",
    "owner" : {
      "id" : 5119506
    },
    "recipients" : {
      "total" : 0,
      "data" : [ ]
    }
  }, {
    "id" : 3197,
    "candidates" : {
      "total" : 6,
      "data" : [ ]
    },
    "clientContacts" : {
      "total" : 0,
      "data" : [ ]
    },
    "dateAdded" : 1396365291813,
    "description" : null,
    "isDeleted" : false,
    "isPrivate" : false,
    "jobOrders" : {
      "total" : 1,
      "data" : [ ]
    },
    "name" : "tearsheet2",
    "owner" : {
      "id" : 5119506
    },
    "recipients" : {
      "total" : 0,
      "data" : [ ]
    }
  }
...
  } ]
}
~~~

## Create a candidate

Now that we have a lists of jobs and tearsheets, we can create a candidate, which we will add to a tearsheet and submit for a job.

Here is a sample REST call where we create a candidate:

Request URI:

~~~ http
PUT https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/Candidate
{
    "firstName": "John",
    "lastName": "Smith",
    "email": "jsmith@novacorp.com",
    "description": "Resume text.",
    "name": "John Smith",
    "username": "user1",
    "password": "secretPassword",
    "category": { "id": 212822 },
    "userType": {"id":35}
}
~~~

Response:

~~~ json
{
  "changedEntityType" : "Candidate",
  "changedEntityId" : 3747,
  "changeType" : "INSERT"
}
~~~

We would want to perform duplicate checking on the following fields before sending the request to create a candidate:

* firstName (first three characters only)
* lastName
* email

First, we make a GET /search/Candidate REST call and return the first three items, if any are found. If email or lastName is blank, we can skip this check.

Here is a sample REST call that searches for duplicates based on the request above:

Request URI:

~~~ http
GET https://rest.bullhornstaffing.com/rest-services/{corpToken}/search/Candidate?count=3&query=firstName:"John" AND lastName:"Smith"AND email:"jsmith@novacorp.com"&fields=id,firstName,lastName,email
~~~

If a duplicate was found, the response might look like this:

~~~ json
{
    "total": 1,
    "start": 0,
    "count": 1,
    "data": [
        {
            "_score": 10.501189,
            "id": 3082,
            "firstName": "John",
            "lastName": "Smith",
            "email": "jsmith@novacorp.com"
        }
    ]
}
~~~

**Note:** You can use the REST API to create a candidate and related data from a resume.

## Add the candidate to a tearsheet

Now we can add the new candidate to a tearsheet. To do this, we make a PUT /entity/Tearsheet association REST call in which we specify the id of the tearsheet, the name of the entity association field (in this case, candidates), and the id of the candidate. To add more than one candidate to a tearsheet, we use a comma-separated list as shown in this sample REST call:

Request URI:

~~~ http
PUT https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/Tearsheet/7/candidates/3747,3738
{
    "changedEntityType": "Tearsheet",
    "changedEntityId": 5
    "changeType": "ASSOCIATE"
}
~~~

## Submit the candidate for a job as a web response

Next, we submit the candidate for a job as a web response. A web response is an online application for a job that has not yet been submitted. To create a web response, we make a PUT /entity/JobSubmission REST call in which we set the candidate field to the id of our candidate, the jobOrder field to the id of our job, the status field to "New Lead", and the dateWebResponse field to the current date/time as a Unix timestamp in milliseconds.

Here is a sample REST call where we create a web response:

Request URI:

~~~ http
PUT https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/JobSubmission
{
    "candidate": {"id": 3747},
    "jobOrder": {"id": 36},
    "status": "New Lead",
    "dateWebResponse": 1370522348880
}
~~~

Response:

~~~ json
{
    "changedEntityType": "JobSubmission",
    "changedEntityId": 863,
    "changeType": "INSERT"
}
~~~

## Promote the web response to a submission

When we want to promote the web response to a submission, we make a POST /entity/JobSubmission REST call in which we update the status field to "Submitted" and the dateAdded field to the current date/time as a Unix timestamp in milliseconds.

Here is a sample REST call where we create a submission:

Request URI:

~~~ http
POST https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/JobSubmission/863
{
    "status": "Submitted",
    "dateAdded": 1370522348880,
}
~~~

Response:

~~~ json
{
    "changedEntityType": "JobSubmission",
    "changedEntityId": 863,
    "changeType": "UPDATE"
}
~~~

**Note:** If we decided that we never want to promote the web response to a submission, we make a POST /entity/JobSubmission REST call in which we set the isHidden field to "true".
