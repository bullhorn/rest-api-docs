# Entitlements

## /entitlements/EntityName

``` javascript
//returns an array of entitlements
[ "READ", "EDIT" ]
```

Gets the entity entitlements of an entity for the login user.

`Eg:  http://172.27.8.154:8080/rest-services/3lpg/entitlements/Candidate`

List of Entitlements
CREATE
READ
READ_DEPARTMENT implies READ
READ_CORPORATE implies READ_DEPARTMENT
READ_PRIVATE
UPDATE implies READ
UPDATE_DEPARTMENT implies UPDATE, READ_DEPARTMENT
UPDATE_CORPORATE implies UPDATE_DEPARTMENT, READ_CORPORATE
DELETE implies READ
DELETE_DEPARTMENT implies DELETE, READ_DEPARTMENT
DELETE_CORPORATE implies DELETE_DEPARTMENT, READ_CORPORATE
