# Entitlements

## /entitlements

``` javascript
//returns an array of available entitlements
[
    {
        "entity": "Candidate",
        "entitlementURL": "https://rest.bullhornstaffing.com/rest-services/{corpToken}/entitlements/Candidate"
    }, ...
]
```

Gets the list of entitlements calls that are available for each entity for the current user.

`Eg:  http://172.27.8.154:8080/rest-services/3lpg/entitlements`


## /entitlements/{Entity}

``` javascript
// GET https://rest.bullhornstaffing.com/rest-services/{corpToken}/entitlements/Candidate
[
    "CREATE",
    "READ",
    "READ_DEPARTMENT"
    "UPDATE",
    "DELETE"
]
```

Gets the entity entitlements of an `entity` for the current user.

List of Entitlements

*   CREATE
*   READ
*   READ_DEPARTMENT implies READ
*   READ_CORPORATE implies READ_DEPARTMENT
*   READ_PRIVATE
*   UPDATE implies READ
*   UPDATE_DEPARTMENT implies UPDATE, READ_DEPARTMENT
*   UPDATE_CORPORATE implies UPDATE_DEPARTMENT, READ_CORPORATE
*   DELETE implies READ
*   DELETE_DEPARTMENT implies DELETE, READ_DEPARTMENT
*   DELETE_CORPORATE implies DELETE_DEPARTMENT, READ_CORPORATE
