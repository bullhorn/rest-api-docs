# Entitlements

## /entitlements

``` shell
curl https://rest.bullhorn.com/rest-services/e999/entitlements

# Example Response
[
    {
        "entity": "Candidate",
        "entitlementURL": "https://rest.bullhorn.com/rest-services/{corpToken}/entitlements/Candidate"
    }, ...
]
```

Gets the list of entitlements calls that are available for each entity for the current user. The request returns an array of available entitlements calls.

## /entitlements/{Entity}

``` shell
curl https://rest.bullhorn.com/rest-services/e999/entitlements/Candidate

# Example Response
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
