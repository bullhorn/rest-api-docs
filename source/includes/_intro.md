# Introduction

This reference guide provides general information about the Bullhorn REST API and specific information about each API operation and supported entity type.

Other Guides: 
- Entity Reference Guide available: [here](./entityref.html)

## General Conventions

Whenever possible, the REST API will follow specifications, conventions and practices of HTTP and the web in general. This includes things like case sensitivity of URLs, character encodings, HTTP methods, and so forth. Additional recommended practices for REST APIs are also observed whenever appropriate.

### URLs

API users should use data-center-specific URLs for login workflows based on the results of making a GET rest-services/loginInfo request with the API_Username to return the list of correct URLs for that user:
https://rest.bullhornstaffing.com/rest-services/loginInfo?username={API_Username}


Web URLs are case-sensitive, except for machine names. All REST API URLs should be considered case-sensitive.

All URLs are namespaced by corporation. The first path element of all API URLs, after any context root, will be an identifier for a corporation. For example:

`https://rest{swimlane#}.bullhornstaffing.com/rest-services/{corptoken}/entity/Candidate`

Where `e999` is the corporation identifier.

### Entities
Bullhorn uses the term entity to refer to a type represented in the Bullhorn system. Candidate, ClientContact, JobOrder, and Placement are examples of entities. Entities capture the core concepts within the Bullhorn system and provide an organization for storing staffing data and applying the rules and processing that comprise the Bullhorn system.

### JSON

The REST API follows the specifications and conventions of the JavaScript Object Notation (JSON) data format and any related Javascript syntax specifications. For more information, see the following articles:

*   [http://www.json.org](http://www.json.org)
*   [http://en.wikipedia.org/wiki/JSON](http://en.wikipedia.org/wiki/JSON)

### JSONP
The REST API supports JSONP. To enable JSONP for any request to the API, provide a value for the optional `callback` parameter. This changes the API's response as follows:

1.   The API wraps its response in a Javascript method call. The name of the method is the same as the value of the `callback` parameter.
2.   The response HTTP `Content-Type` is `"text/javascript"` instead of `"application/json"`.

For more information about JSONP, see the following article: [http://en.wikipedia.org/wiki/JSONP](http://en.wikipedia.org/wiki/JSONP)

## API Operations
There are several API operations for retrieving entity data: entity, search, query, and meta. These calls share some common parameters and behavior.

* Use the entity operation to create, update, and get entities by id; use the PUT, POST, and GET HTTP verbs to create, update and get entities, respectively.
* Use the search operation to search for entities in a Lucene search index, and return them by id. Use the search operation with search/{EntityType} and no query parameters to return data that describes the structure of the Lucene index fields for the entity.
* Use the query operation to query for entities with the Java Persistence Query Language (JPQL), and return them by id.
* Use the meta operation to return entity metadata data that describes the structure of returned entity data. You can also return entity metadata on any entity, search, or query call by including the meta query parameter on the call; See `Meta` for details.

### Entity ids
All entities have a field named id that is the primary key of the entity. When selecting to-one and to-many association fields on an  entity, id is automatically included if no sub-fields are specified.

### Notes
* to-many association fields only appear at the top level (no nesting).
* to-many associated entities that are soft-deleted (deletion is indicated by the isDeleted field) are not returned.