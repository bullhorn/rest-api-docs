# Company

## Getting a Company's notes

``` javascript
// https://rest.bullhornstaffing.com/rest-services/e999/entity/ClientCorporation/5059165/clientContactNotes?fields=id,action,comments
{
  "total" : 3,
  "data" : [{
    "id" : 3212,
    "action" : "Inbound Call",
    "comments" : "Got a call from johnny about new opportunity"
  },
  ...]
}
```

The `ClientCorporation` or `Company` record can not have `Notes` associated with them.  A Company's notes will be inferred through the notes associated with the `ClientContacts` or `Contacts` associated with the company.  The REST API has a field `clientContactNotes` that automatically rolls up the Contacts notes as a `TO_MANY` field.

The API also offers a way to query directly against the `TO_MANY` field as we do in the example.  This will return a list of Note entities, you may apply additional filters to the query.  The syntax should be similar to that of a `query` call.

NOTE: At least one of the required parameters(fields and layout) or both must be specified.

## Multiple Entities

``` javascript
// https://rest.bullhornstaffing.com/rest-services/e999/entity/Candidate/123,456?fields=id,firstName,lastName
{
    data: [
        {
          "id" : 123,
          "firstName" : "Alanzo",
          "lastName" : "Smith"
        }, {
          "id" : 456,
          "firstName" : "Janis",
          "lastName" : "Williams"
        }
    ]
}
```

This is an extension of the single GET and supports the same result set control parameters (count, start) as the query call. id values are specified as a comma-separated list:
