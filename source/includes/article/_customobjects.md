---
layout: post
title: Use the REST API with Custom Objects
description: 
author: Mike Peterson
categories: [ REST ]
---

# Use the REST API with Custom Objects

## What are custom objects
Custom objects are custom fields that extend the standard Bullhorn Candidate, ClientContact, ClientCorporation, JobOrder, Opportunity, and Placement entities. You can use custom objects to more closely match your business data requirements. These fields are entities and you can use the REST API to create, edit, and return instances of them. See the Bullhorn Resource Center for general information about custom objects.

**Note:** Before using the REST API, you must perform authorization and authentication. See Getting Started with the Bullhorn REST API for information about obtaining an OAuth 2.0 access token and logging in to the REST API.

## REST API calls for custom objects

The following topics provide REST API examples to get you up and running quickly with custom objects:

* [Get metadata for custom objects](#get-metadata-for-custom-objects)
* [Create custom object on new entity](#create-custom-object-on-new-entity)
* [Update custom object on existing entity](#update-custom-object-on-existing-entity)
* [Update and create custom objects on existing entity](#update-and-create-custom-objects-on-existing-entity)
* [Search for entity based on custom object](#search-for-entity-based-on-custom-object)
* [Disassociate custom object from entity](#disassociate-custom-object-from-entity)
* [Query custom object](#query-custom-object)


## Get metadata for custom objects

Before working with custom objects with the REST API, you first must understand the structure of the custom objects assigned to an entity type. The REST /meta request returns information about the structure of the entity type, including its assigned custom objects.

 Each entity can have customObject1s through customObject10s assigned as custom objects. To determine which custom objects are assigned to an entity type, request all fields with the * character as the following example shows. Only the assigned customObjects are returned in the list of entity fields.

**Note:** A custom object can be configured so that only users in specific departments can view that custom object or its metadata. If the current user does not have view entitlements to a custom object, a /meta call returns no metadata for that custom object. 

Request URI:
~~~ http
GET https://rest.bullhornstaffing.com/rest-services/{corpToken}/meta/Candidate?
fields=*
~~~

Once you know the custom objects available on an entity type, you can get more information about those custom objects. You have two choices for working with custom objects:
* Use the client-defined object and field names assigned in the Bullhorn administration application; for example, $Invoice(status).
* Use the static object and field names defined in the database; for example, customObject2s(text1).

Your choice depends on whether you prefer to work with names that reflect the business logic that a custom object represents. To use client-defined object and field names, the Bullhorn support team must enable "Use Client Defined Name in REST" on the custom object configuration. On the JSON response of an entity metadata call, such as meta/Candidate?fields=*, the value of the JSON key "associatedEntity.label" on a customObject{#}s object is the client-defined custom object name. For example, the client-defined custom object name on this example is "ClientDefinedCO":
~~~ json
...
 {
    "name" : "customObject9s",
    "type" : "TO_MANY",
    "confidential" : false,
    "label" : "Custom Object9s",
    "optionsType" : "PersonCustomObjectInstance9",
    "optionsUrl" : "https://rest.bullhornstaffing.com/rest-services/1yg8p/options/PersonCustomObjectInstance9",
    "hideFromSearch" : false,
    "associatedEntity" : {
      "entity" : "PersonCustomObjectInstance9",
      "entityMetaUrl" : "https://rest.bullhornstaffing.com/rest-services/1yg8p/meta/PersonCustomObjectInstance9?fields=*",
      "label" : "ClientDefinedCO",
      "dateLastModified" : "1505885678477",
      "fields" : [ {
        "name" : "id",
        "type" : "ID",
        "dataType" : "Integer"
      } ],
      "staticTemplateName" : "ClientDefinedCO",
      "tabName" : "ClientDefinedCO"
    }
...
~~~

**Note:** You must reference the client-defined name with the $ character as a prefix.

### Client-defined custom object metadata
The following request returns just the metadata for the custom object assigned to $ClientDefinedCO on the Candidate entity type. This is an example of working with a custom object by its client-defined name:

Request URI:
~~~ http
GET https://rest.bullhornstaffing.com/rest-services/{corpToken}/meta/Candidate?
fields=$ClientDefinedCO(*)
~~~

Response:
~~~ json
{
  "entity" : "Candidate",
  "entityMetaUrl" : "https://rest-test-backend.bh-bos2.bullhorn.com:8181/rest-services/1yg8p/meta/Candidate?fields=*",
  "label" : "Candidate",
  "dateLastModified" : "1505885660081",
  "fields" : [ {
    "name" : "$ClientDefinedCO",
    "type" : "TO_MANY",
    "confidential" : false,
    "label" : "Custom Object9s",
    "optionsType" : "PersonCustomObjectInstance9",
    "optionsUrl" : "https://rest-test-backend.bh-bos2.bullhorn.com:8181/rest-services/1yg8p/options/PersonCustomObjectInstance9",
    "hideFromSearch" : false,
    "associatedEntity" : {
      "entity" : "$PersonClientDefinedCO",
      "entityMetaUrl" : "http://rest-test-backend.bh-bos2.bullhorn.com:8181/rest-services/1yg8p/meta/$PersonClientDefinedCO?fields=*",
      "label" : "ClientDefinedCO",
      "dateLastModified" : "1505885678477",
      "fields" : [ {
        "name" : "id",
        "type" : "ID",
        "dataType" : "Integer"
      }, {
        "name" : "dateAdded",
        "type" : "SCALAR",
        "dataType" : "Timestamp",
        "confidential" : false,
        "label" : "Date Added",
        "hideFromSearch" : false
      }, {
        "name" : "dateLastModified",
        "type" : "SCALAR",
        "dataType" : "Timestamp",
        "confidential" : false,
        "label" : "Date Last Modified",
        "hideFromSearch" : false
      }, {
        "name" : "person",
        "type" : "TO_ONE",
        "confidential" : false,
        "label" : "Person",
        "optionsType" : "Person",
        "optionsUrl" : "https://rest.bullhornstaffing.com/rest-services/1yg8p/options/Person",
        "hideFromSearch" : false,
        "associatedEntity" : {
          "entity" : "Person",
          "entityMetaUrl" : "https://rest.bullhornstaffing.com/rest-services/1yg8p/meta/Person?fields=*",
          "label" : "Person",
          "dateLastModified" : "1505885679669",
          "fields" : [ {
            "name" : "id",
            "type" : "ID",
            "dataType" : "Integer"
          }, {
            "name" : "_subtype",
            "type" : "SCALAR",
            "dataType" : "String",
            "maxLength" : 255
          }, {
            "name" : "firstName",
            "type" : "SCALAR",
            "dataType" : "String",
            "maxLength" : 50,
            "confidential" : false,
            "label" : "First Name",
            "hideFromSearch" : false
          }, {
            "name" : "lastName",
            "type" : "SCALAR",
            "dataType" : "String",
            "maxLength" : 50,
            "confidential" : false,
            "label" : "Last Name",
            "hideFromSearch" : false
          } ]
        }
      }, {
        "name" : "clientDefinedTextField",
        "type" : "SCALAR",
        "dataType" : "String",
        "maxLength" : 100,
        "confidential" : false,
        "label" : "clientDefinedText",
        "optionsType" : "$PersonclientDefinedText",
        "optionsUrl" : "https://rest.bullhornstaffing.com/rest-services/1yg8p/options/$PersonclientDefinedText",
        "hideFromSearch" : false
      } ],
      "staticTemplateName" : "ClientDefinedCO",
      "tabName" : "ClientDefinedCO"
    }
  } ]
}
~~~

### Static custom object metadata
The following request returns just the metadata for the custom object assigned to customObject2s on the Candidate entity type. This is an example of working with a custom object by its standard name:

Request URI:
~~~ http
GET https://rest.bullhornstaffing.com/rest-services/{corpToken}/meta/Candidate?
fields=customObject2s(*)
~~~

Response:
~~~ json
{
  "entity" : "Candidate",
  "entityMetaUrl" : "http://rest.bullhornstaffing.com/rest-services/1yg8p/meta/Candidate?fields=*",
  "label" : "Candidate",
  "fields" : [ {
    "name" : "customObject2s",
    "type" : "TO_MANY",
    "confidential" : false,
    "label" : "Custom Object2s",
    "optionsType" : "PersonCustomObjectInstance2",
    "optionsUrl" : "https://rest.bullhornstaffing.com/rest-services/1yg8p/options/PersonCustomObjectInstance2",
    "hideFromSearch" : false,
    "associatedEntity" : {
      "entity" : "PersonCustomObjectInstance2",
      "entityMetaUrl" : "https://rest.bullhornstaffing.com/rest-services/1yg8p/meta/PersonCustomObjectInstance2?fields=*",
      "label" : "RestAutomation1",
      "fields" : [ {
        "name" : "date1",
        "type" : "SCALAR",
        "dataType" : "Timestamp",
        "confidential" : false,
        "label" : "date1",
        "hideFromSearch" : false
      }, {
        "name" : "dateAdded",
        "type" : "SCALAR",
        "dataType" : "Timestamp",
        "confidential" : false,
        "label" : "Date Added",
        "hideFromSearch" : false
      }, {
        "name" : "float1",
        "type" : "SCALAR",
        "dataType" : "Float",
        "confidential" : false,
        "label" : "float1",
        "hideFromSearch" : false
      }, {
        "name" : "int1",
        "type" : "SCALAR",
        "dataType" : "Integer",
        "confidential" : false,
        "label" : "int1",
        "hideFromSearch" : false
      }, {
        "name" : "text1",
        "type" : "SCALAR",
        "dataType" : "String",
        "maxLength" : 100,
        "confidential" : false,
        "label" : "text1a",
        "options" : [ {
          "value" : "sometext1",
          "label" : "sometext1"
        }, {
          "value" : "sometext2",
          "label" : "sometext2"
        } ],
        "hideFromSearch" : false
      } ]
    }
  } ]
}
~~~

## Create custom object on new entity
The following example request creates a new Candidate and also creates a new client-defined custom object and associates it with the Candidate. The custom object is assigned to the $ClientDefinedCO field on the Candidate entity type; the "clientDefinedText" field name is obtained from the field "label" on the entity metadata response.

**Note:** A custom object can be configured so that only users in specific departments can create or edit that custom object. If the current user does not have edit entitlements to a custom object, the user cannot create or edit that type of custom object.

Request URI:
~~~ http
PUT https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/Candidate
Content-Type: application/json
~~~

Request body:
~~~ json
{
    "$ClientDefinedCO":[{"clientDefinedText":"some text"}],
    "firstName": "TestFirst",
    "lastName": "TestLast",
    "name": "TestFirst TestLast",
    "username": "TestCandidatexxx",
    "status" : "active"
}
~~~

Response:
~~~ json
{
    "changedEntityType": "Candidate",
    "changedEntityId": 31918,
    "changeType": "INSERT"
    ...
}
~~~

 Alternatively, you can use the static custom object and field names obtained from entity metadata, as the following request body shows:
 ~~~ json
 {
    "customObject9s":[{"text1":"some text"}],
    "firstName": "TestFirst",
    "lastName": "TestLast",
    "name": "TestFirst TestLast",
    "username": "TestCandidatexxx",
    "status" : "active"
}
~~~

## Update custom object on existing entity

The following example request updates a client-defined custom object on a Candidate. The example updates the clientDefinedText field of the custom object that has id 3649.

**Note:** A custom object can be configured so that only users in specific departments can create or edit that custom object. If the current user does not have edit entitlements to a custom object, the user cannot create or edit that type of custom object.

Request URI:
~~~ http
POST https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/Candidate/32031
Content-Type: application/json
~~~

Request body:
~~~ json
{
   "$ClientDefinedCO":[{"id":3649,
   "clientDefinedText":"updated the value!"}]
}
~~~

 Alternatively, you can use the static custom object and field names obtained from entity metadata, as the following request body shows:
~~~ json
{
   "customObject9s":[{"id":3649,
   "text1":"updated the value!"}]
}
~~~

## Update and create custom objects on existing entity
The following example request updates an existing client-defined custom object and creates a new client-defined custom object on an existing Candidate. The example updates the clientDefinedText field of the custom object that has id 3649 and also creates a new custom object and sets its clientDefinedText value.

Request URI:
~~~ http
POST https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/Candidate/32039
Content-Type: application/json
~~~

Request body:
~~~ json
{
   "$ClientDefinedCO":
     [
        {"id":3649,
        "clientDefinedText":"updated the value!"},
        {"clientDefinedText":"Brand new custom object here!"}
     ]
}
~~~

 Alternatively, you can use the static custom object and field names obtained from entity metadata, as the following request body shows:
 ~~~ json
{
   "customObject9s":
     [
        {"id":3649,"text1":"updated the value!"},
        {"text1":"Brand new custom object here!"}
     ]
}
~~~

## Search for entity based on custom object
The following example request performs a Candidate search based on the value of the clientDefinedText field of a client-defined custom object. The syntax used in the "query" parameter on the request is a lookup query, which is a SQL query on an indexed entity field; the indexed entity field is Candidate.id. The search returns all Candidates with ids where $ClientDefinedCO.clientDefinedText='sometext'.

Request URI:
~~~ http
GET https://rest.bullhornstaffing.com/rest-services/{corpToken}/search/Candidate?
query=id:"^($ClientDefinedCO.clientDefinedText='sometext')"&fields=id,
$ClientDefinedCO(clientDefinedText)&sort=-id&count=5
~~~

Alternatively, you can use the static custom object and field names obtained from entity metadata, as the following request URI shows:
~~~ http
GET https://rest.bullhornstaffing.com/rest-services/{corpToken}/search/Candidate?
query=id:"^(customObject9s.text1='sometext')"&fields=id,customObject2s(text1)&sort=-id&count=5
~~~

**Note:** A custom object can be configured so that only users in specific departments can view that custom object. If the current user does not have view entitlements to a custom object, a search on that custom object returns no matching items.

## Disassociate custom object from entity
The following example request disassociates an existing custom object from an existing entity in a standard disassociation request. You must use the static custom object name for this call. 

Request URI:
~~~ http
DELETE https://rest.bullhornstaffing.com/rest-services/{corpToken}/entity/Candidate/32056
/customObject2s/3680
~~~

## Query custom object
The following example request performs a custom object query. You must use the static custom object name for this call.

**Note:** A custom object can be configured so that only users in specific departments can view that custom object. If the current user does not have view entitlements to a custom object, a query on that custom object returns no matching items.

Request URI:
~~~ http
GET https://rest.bullhornstaffing.com/rest-services/{corpToken}/query/PersonCustomObjectInstance2?
where=id=3684&fields=id&orderBy=-id&count=5
~~~