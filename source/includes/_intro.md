# Introduction

## Background

The Bullhorn REST API project (codename Lava) aims to provide general, comprehensive access to all functions of the Bullhorn ATS over a uniform, commonly understood Web transport mechanism (namely, REST).

For more information on REST, see the [Wikipedia article](http://en.wikipedia.org/wiki/Representational_state_transfer) and [the paper that first codified it](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm).

Some goals of the REST API are:

1.  Ease of use
2.  Consistency and uniformity
3.  Very good performance
4.  Comprehensive coverage of Bullhorn functionality

## General Conventions

Whenever possible, the REST API will follow specifications, conventions and practices of HTTP and the Web in general. This includes things like case sensitivity of URLs, character encodings, HTTP methods, and so forth. Additional recommended practices for REST APIs shall also be observed whenever appropriate.

### URLs

Web URLs are case-sensitive, except for machine names. We shall follow that practice. All REST API URLs should be considered case-sensitive.

All URLs are namespaced by corporation. The first path element of all API URLs, after any context root, will be an identifier for a corporation. For example:

`https://rest.bullhorn.com/e999/entity/Candidate`

Where `e999` is the corporation identifier.

### Entities

Bullhorn uses the term entity to refer to a type of thing represented in the Bullhorn system. Candidate, ClientContact, JobOrder, and Placement are examples of entities. Entities capture the core concepts within the Bullhorn system and provide an organization for storing staffing data and applying the rules and processing that comprise the Bullhorn system.

The REST API currently supports the following entity types. For information about these entity types,see the  .

**Non-list entities** | **List entities**
--------------------- | ---------------------
Appointment           | Category
AppointmentAttendee   | Country
Candidate             | BusinessSector
CandidateEducation    | Skill
CandidateReference    | Specialty
CandidateSource       | State
CandidateWorkHistory  |
ClientContact         |
ClientContactRatios   |
ClientCorporation     |
ClientCorporationRatios |
CorporateUser         |
CorporationDepartment |
Lead**                |
LeadHistory**         |
JobOrder              |
JobSubmission         |
Note                  |
NoteEntity            |
Opportunity**         |
OpportunityHistory**  |
Person                |
Placement             |
PlacementChangeRequest |
PlacementCommission   |
Sendout               |
Shift                 |
Task                  |

<aside class="notice">** CRM Only Entities</aside>

### JSON

As in HTTP, the REST API will follow the specifications and conventions of the JSON data format and any related Javascript syntax specifications. For more information, see the following articles:

*   [http://www.json.org](http://www.json.org)
*   [http://en.wikipedia.org/wiki/JSON](http://en.wikipedia.org/wiki/JSON)

### JSONP

The Bullhorn REST API supports JSONP. To enable JSONP for any request to the API, provide a value for the optional `callback` parameter. This changes the API's response as follows:

1.   The API wraps its response in a Javascript method call. The name of the method is the same as the value of the `callback` parameter.
2.   The response HTTP `Content-Type` is `"text/javascript"` instead of `"application/json"`

For more information about JSONP, see the following article: [http://en.wikipedia.org/wiki/JSONP](http://en.wikipedia.org/wiki/JSONP)

## API Operations

There are several API calls for retrieving data:/entity, /search, /query, and /meta. These calls share some common parameters and behavior:

### Entity ids

All entities have a field named "id", which is the primary key of the entity:

When selecting to-one and to-many fields, "id" is automatically included if no sub-field is specified:

### Notes

1. to-many fields can only appear at the top level (no nesting):

2. to-many fields that are soft-deletable (i.e. deletion is indicated by the isDeleted field) will not be returned.

### Entity and Property Metadata

Metadata, data describing the structure of returned entity data, can be included in any data set returned by the API. See `Meta` for details.
