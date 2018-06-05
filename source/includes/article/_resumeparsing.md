---
layout: post
title: Resume Parsing
description: Use the REST API to create candidate data from a resume
author: Mike Peterson
categories: [ REST ]
---

# Use the REST API to create candidate data from a resume

The Bullhorn REST API provides a set of operations that parse a resume to Candidate-related data or HRXML. The API also provides operations that convert a resume to HTML or plain text. In this article, we use the REST API to complete the following sequence of tasks:

1. Parse a resume
2. Create a candidate
3. Create candidate education
4. Create candidate work history
5. Add primary skills to the candidate
6. Attach a resume file to the candidate

Before using the REST API, you must perform authorization and authentication. See [Getting Started with the Bullhorn REST API](../Getting-Started-with-REST) for information about obtaining an OAuth 2.0 access token and logging in to the REST API. for information about obtaining an OAuth 2.0 access token and logging in to the REST API.

## Parse a resume

To return candidate-related data from a parsed resume, we make a POST /resume/parseToCandidate REST call.

We attach a .doc resume file named candidate.doc to the request as a multipart/form attachment; in a browser form, this is `<input type="file"/>`. The call returns candidate, candidate education, candidate work history, and skills data.

Request URI:

~~~ http
POST https://rest.bullhornstaffing.com/rest-services/{corpToken}/resume/parseToCandidate?format=DOC
~~~

Response:

~~~ json
{
    "candidate": {
        "address": {
            "address1": "123 Osoite Katu",
            "address2": "Apartment 1",
            "city": "Kaupunki",
            "state": "MA",
            "zip": "02210",
            "countryID": 1
        },
        "phone": "+1 4663464663",
        "fax": "+1 3293293290",
        "pager": "+1 724 7727247",
        "mobile": "+1 662 4666624",
        "firstName": "Minun",
        "lastName": "Nimi",
        "nameSuffix": "DR.",
        "email": "minun.nimi@finland.com",
        "phone2": "+1 835 3838353x90",
        "phone3": "+1 864 3868643",
        "email2": "mnimi2@finland2.com",
        "email3": "minumn3@finland3.com",
        "workPhone": "+1 3874383874x89"
    },
   "candidateEducation":    [
            {
         "startDate": 1007226000000,
         "endDate": 1117641600000,
         "graduationDate": 1117641600000,
         "school": "Berkeley State University",
         "city": "Santa Cruz",
         "state": "CA",
         "degree": "B.Sc",
         "major": "COMPUTER SCIENCE",
         "gpa": 4
      },
            {
         "endDate": 1241193600000,
         "graduationDate": 1241193600000,
         "school": "Boston University School of Music",
         "city": "Boston",
         "state": "MA",
         "degree": "B.A",
         "major": "ADMINISTRATION International Management",
         "gpa": 3.87
      }
   ],
   "candidateWorkHistory":    [
            {
         "startDate": 1015002000000,
         "endDate": 1188662400000,
         "companyName": "Teen Pop",
         "title": "Pop Software Engineer",
         "comments": "New Millennium Music Corp. Really  How  What"
      },
            {
         "startDate": 665427600000,
         "endDate": 909939600000,
         "companyName": "Nineties Bank of Music Concord",
         "title": "Hip Hop Software Engineer",
         "comments": "MA    Bop  Hop  Hip"
      },
            {
         "startDate": 315594000000,
         "endDate": 628534800000,
         "companyName": "Eighties National",
         "comments": "New Wave Musak  Listen  Like  Learn"
      }
   ],
   "skillList":    [
      "Blowout preventer",
      "FINANCE",
      "MA"
   ]
}
~~~

## Create a candidate from the parsed resume

To create a candidate from the parsed resume, we make a PUT /entity/Candidate REST call.

**Note:** When performing this operation programmatically, you would most likely parse the /resume/parseToCandidate response to a Json object for easy manipulation. You would then write the "Candidate" section of the response to a string you can use in the body of the PUT /entity/Candidate request.
The body of this request is the Candidate section of the /resume/parseToCandidate response. No data changes are necessary.

Request URI:

~~~ http
PUT https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/Candidate
{
    "address": {
        "address1": "123 Osoite Katu",
        "address2": "Apartment 1",
        "city": "Kaupunki",
        "state": "MA",
        "zip": "02210",
        "countryID": 1
    },
    "phone": "+1 4663464663",
    "fax": "+1 3293293290",
    "pager": "+1 724 7727247",
    "mobile": "+1 662 4666624",
    "firstName": "Minun",
    "lastName": "Nimi",
    "nameSuffix": "DR.",
    "email": "minun.nimi@finland.com",
    "phone2": "+1 835 3838353x90",
    "phone3": "+1 864 3868643",
    "email2": "mnimi2@finland2.com",
    "email3": "minumn3@finland3.com",
    "workPhone": "+1 3874383874x89"

    }
}
~~~

Response:

~~~ json
{
   "changedEntityType": "Candidate",
   "changedEntityId": 2038,
   "changeType": "INSERT"
}
~~~

We have successfully created a Candidate entity from the parsed resume. We can return the new Candidate entity with this request URI:

~~~ http
GET https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/Candidate/2038?fields=*
~~~

Response:

~~~ json
{
  "data" : {
    "id" : 2038,
    "address" : {
      "address1" : "123 Osoite Katu",
      "address2" : "Apartment 1",
      "city" : "Kaupunki",
      "state" : "MA",
      "zip" : "02210",
      "countryID" : 1
    },
    "businessSectors" : {
      "total" : 0,
      "data" : [ ]
    },
    "candidateID" : 871,
    "categories" : {
      "total" : 0,
      "data" : [ ]
    },
    "category" : {
      "id" : 431889
    },
    ...
    "firstName" : "Minun",
    "username" : "_300006637",
    "veteran" : null,
    "willRelocate" : false,
    "workAuthorized" : true,
    "workPhone" : "+1 3874383874x89"
  }
}
~~~

With a slight change to the POST /resume/parseToCandidate REST call, we can return a text or HTML version of the resume in the response. We will return a text version of the resume. The only difference is that the call includes the populateDescription parameter.

Request URI:

~~~ http
POST https://rest.bullhornstaffing.com/rest-services/{corpToken}/resume/parseToCandidate?format=DOC&populateDescription=text
~~~

The response includes the text version of the resume in the description field of the Candidate data.

Response:

~~~ json
{
   "candidate": {
      "address":       {
         "address1": "123 Osoite Katu",
         "address2": "Apartment 1",
         "city": "Kaupunki",
         "state": "MA",
         "zip": "02210",
         "countryID": 1
      },
      "phone": "+1 4663464663",
      "fax": "+1 3293293290",
      "pager": "+1 724 7727247",
      "mobile": "+1 662 4666624",
      "firstName": "Minun",
      "lastName": "Nimi",
      "nameSuffix": "DR.",
      "middleName": "Keskimmäinen",
      "email": "minun.nimi@finland.com",
      "phone2": "+1 835 3838353x90",
      "phone3": "+1 864 3868643",
      "email2": "mnimi2@finland2.com",
      "email3": "minumn3@finland3.com",
      "description": "Dr. Minun Keskimmäinen Nimi\r\n123 Osoite Katu\r\nApartment 1\r\nKaupunki, MA
 02210\r\nHome: 466-346-4663 Business: 387-438-3874 ext. 89 Mobile: 662-466-6624\r\nTelephone: 835-383-8353 ext.
90 VoiceNumber: 864-386-8643\r\nFax: 329-329-3290 Pager: 724-772-7247\r\nMinun.Nimi@finland.com
 mnimi2@finland2.comminumn3@finland3.com\r\n\r\nEmployment History\r\n\r\nEighties National Music Bank Lexington,
 MA Jan. 1, 1980 - Dec. 31, 1989\r\n\r\nNew Wave Musak Software Engineer\r\n·  Listen\r\n·  Like\r\n
Learn\r\n\r\nNineties Bank of Music Concord, MA February 1991 - November 1998\r\n\r\nHip Hop Software Engineer\r\n·
Bop\r\n·  Hop\r\n·  Hip\r\n\r\nNew Millennium Music Corp. Bedford, MA Mar. 2002 - Sept. 2007\r\n\r\nTeen Pop Software
Engineer\r\n·  Really\r\n·  How\r\n·  What\r\n\r\nEducation\r\n\r\nBerkeley State University, Santa Cruz, CA\r\nBachelor of
Science, Computer Science, December 2001 - June 2005\r\n·  Cumulative GPA: 3.0/4.0; Major GPA: 4.0/4.0\r\n·  Dean's
List - 3 Semesters\r\n\r\nBoston University School of Music; Boston, MA\r\nBachelor of Arts in Business Administration
May 2009\r\nDual Concentration in International Management and Finance\r\nMinor in Economics\r\nCumulative GPA: 3.87\r\n
Activities/Honors\r\nHonors Student\r\nDean s List: Fall 2005 and Spring 2006\r\n\r\n.\r\n",
      "workPhone": "+1 3874383874x89"
  },
   ...
}
~~~

**Note:** The resume in the description field is a Json-encoded string. If you have parsed the POST /resume/parseToCandidate response to an object for manipulation, you must re-encode the description value before using it in a PUT /entity/Candidate call. For example, in Groovy you can use the groovy.json.JsonOutput.toJson(java.lang.String s) method to Json-encode a string.

## Create candidate education data from the parsed resume

To create a CandidateEducation entity from the parsed resume, we make a PUT /entity/CandidateEducation REST call.

The CandidateEducation section of the POST /resume/parseToCandidate response is an array of CandidateEducation objects. You must make separate PUT /entity/CandidateEducation calls for each CandidateEducation object in the array.

**Note:** When performing this operation programmatically, you would most likely parse the /resume/parseToCandidate response to a Json object for easy manipulation. You would then write a "CandidateEducation" object from the response to a string you can use in the body of the PUT /entity/CandidateEducation request.

Request URI:

~~~ http
PUT https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/CandidateEducation
~~~

Request body:
~~~
{
   "candidate":  {"id": 2038},
   "startDate": 1007226000000,
   "endDate": 1117641600000,
   "graduationDate": 1117641600000,
   "school": "Berkeley State University",
   "city": "Santa Cruz",
   "state": "CA",
   "degree": "B.Sc",
   "major": "COMPUTER SCIENCE",
   "gpa": 4
}
~~~


The request body matches the first item in the array of returned CandidateEducation objects with the exception of one additional field, the "candidate" field, where we specify the id of the new Candidate entity.

Response:

~~~ json
{
    "changedEntityType": "CandidateEducation",
    "changedEntityId": 657,
    "changeType": "INSERT"
}
~~~

We have successfully created a CandidateEducation entity from the parsed resume. We can return the new CandidateEducation entity with this request URI:

~~~
GET https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/Candidate/2038?fields=*
~~~

Response:

~~~ json
{
  "data" : {
    "id" : 657,
    "candidate" : {
      "id" : 2038,
      "firstName" : "Minun",
      "lastName" : "Nimi"
    },
    "certification" : null,
    "city" : "Santa Cruz",
    "comments" : null,
    "customDate1" : null,
     ...
    "dateAdded" : 1369334851697,
    "degree" : "B.Sc",
    "endDate" : 1117641600000,
    "expirationDate" : null,
    "gpa" : 4.0,
    "graduationDate" : 1117641600000,
    "isDeleted" : false,
    "major" : "COMPUTER SCIENCE",
    "migrateGUID" : null,
    "school" : "Berkeley State University",
    "startDate" : 1007226000000,
    "state" : "CA"
  }
}
~~~

## Create candidate work history from the parsed resume

To create a CandidateWorkHistory entity from the parsed resume, we make a PUT /entity/CandidateWorkHistory REST call.

The CandidateWorkHistory section of the POST /resume/parseToCandidate response is an array of CandidateWorkHistory objects. You must make separate PUT /entity/CandidateWorkHistory calls for each CandidateWorkHistory object in the array.

**Note:** When performing this operation programmatically, you would most likely parse the /resume/parseToCandidate response to a Json object for easy manipulation. You would then write a "CandidateWorkHistory" object from the response to a string you can use in the body of the PUT /entity/CandidateWorkHistory request.

Request URI:

~~~ http
PUT https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/CandidateWorkHistory
{
	"candidate":  {"id": 2038},
        "startDate": 1015002000000,
         "endDate": 1188662400000,
         "companyName": "Teen Pop",
         "title": "Pop Software Engineer",
         "comments": "New Millennium Music Corp. Really  How  What"
}
~~~


The request body matches the first item in the array of returned CandidateWorkHistory objects with the exception of one additional field, the "candidate" field, where we specify the id of the new Candidate entity.

Response:

~~~ json
{
    "changedEntityType": "CandidateWorkHistory",
    "changedEntityId": 2446,
    "changeType": "INSERT"
}
~~~

We have successfully created a CandidateWorkHistory entity. We can return the new CandidateWorkHistory entity with this request URI:

~~~ http
GET https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/CandidateWorkHistory/2446?fields=*
~~~

Response:

~~~ json
{
  "data" : {
    "id" : 2446,
    "bonus" : null,
    "candidate" : {
      "id" : 2038,
      "firstName" : "Minun",
      "lastName" : "Nimi"
    },
    "clientCorporation" : null,
    "comments" : "New Millennium Music Corp. Really  How  What",
    "commission" : null,
    "companyName" : "Teen Pop",
    "customDate1" : null,
     ...
    "dateAdded" : 1369336573990,
    "endDate" : 1188662400000,
    "isDeleted" : false,
    "isLastJob" : false,
    "jobOrder" : null,
    "migrateGUID" : null,
    "placement" : null,
    "salary1" : null,
    "salary2" : null,
    "salaryType" : null,
    "startDate" : 1015002000000,
    "terminationReason" : null,
    "title" : "Pop Software Engineer"
  }
}
~~~

## Add primary skills from the parsed resume

The SkillList section of the POST /resume/parseToCandidate response is an array of skill names. To add primary skill associations to the Candidate entity, we need to know the ids of existing Skill entities that correspond to the returned skill names. These are the skills defined in the Bullhorn private label. We call GET /options/Skill to return the full list of Skill entities.

When we find matching Skill ids, we call PUT /entity/Candidate/{candidateId}/primarySkills/{skillId,skillId,...} to associate those Skill entities as primary skills for the Candidate.
**Note:** When performing this operation programmatically, you would most likely parse the POST /resume/parseToCandidate response to a Json object for easy manipulation.

Request URI for adding Skills 260 and 964 as primary skill associations:

~~~ http
PUT https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/Candidate/2038/primarySkills/260,964
~~~

Response:

~~~ json
{
    "changedEntityType": "Candidate",
    "changedEntityId": 2038,
    "changeType": "ASSOCIATE"
}
~~~

We have successfully added two primary skill associations to the Candidate entity. We can see that the associations have been added with this request URI:

~~~
GET https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/Candidate/2038?fields=primarySkills
~~~

Response:

~~~ json
{
  "data" : {
    "primarySkills" : {
      "total" : 2,
      "data" : [ {
        "id" : 964
      }, {
        "id" : 260
      } ]
    }
  }
}
~~~

## Attach the resume file to the candidate

To attach the original resume file to the Candidate entity, we call PUT /file/Candidate/{candidateId}/raw. We attach the .doc resume file to the request as a multipart/form attachment; in a browser form, this is `<input type="file"/>`.

Request URI:

~~~ http
PUT https://rest.bullhornstaffing.com/rest-services/{corpToken}/file/Candidate/2038/raw?externalID=Portfolio&fileType=SAMPLE
~~~

The externalID and fileType parameters are required. For externalID, use Portfolio as the value. For fileType, use SAMPLE as the value.

Response:

~~~ json
{
    "fileId" : 124523
}
~~~

We have successfully attached the resume file to the Candidate entity. We can see that the attachment has been added with this request URI:

~~~ http
GET https://rest.bullhornstaffing.com/rest-services/{corpToken}/entityFiles/Candidate/2038
~~~

Response:

~~~ json
{
  "EntityFiles" : [ {
    "id" : 1234523,
    "type" : "Resume",
    "name" : "candidate.doc",
    "description" : null,
    "contentType" : "application/msword"
  }]
}
~~~
