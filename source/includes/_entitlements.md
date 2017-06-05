# Entitlements

## <span class="tag">GET</span> /entitlements

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/entitlements/Candidate

# Example Response
[
    "CREATE",
    "READ",
    "READ_DEPARTMENT"
    "UPDATE",
    "DELETE"
]
```

Gets the entity entitlements of an entity for the current user. For GET, PUT, POST, and DELETE requests on entities, the user must have the appropriate entitlements for the action to succeed. PUT requests (adding records) require create entitlements. Read, update, and delete entitlements are divided into owned, department, and corporate entitlements. If a user tries to perform an action without the required entitlements, the call fails and an error is thrown.
A user’s ability to perform file attachment GET, PUT, POST, and DELETE operations is based on the user’s entitlements for the entity to which the file attachment operation applies

### List of Entitlements

| **Entitlement** | **Description** |
| --- | --- |
| CREATE | User can create entities. |
| READ_CORPORATE | Generally, user can read all entities. If the entity can be categorized into private and non-private, the user cannot read private entities owned by other users unless the user has the READ_PRIVATE entitlement. |
| READ_DEPARTMENT | User can read entities owned by the current user AND owned by users from the same department(s). |
| READ | User can read entities owned by the user only. |
| UPDATE_CORPORATE | Generally, user can edit all entities. User must also have READ CORPORATE access level. |
| UPDATE_DEPARTMENT | User can edit entities owned by the user AND owned by users from the same department(s). User must also have READ DEPARTMENT or READ CORPORATE access level. |
| UPDATE | User can edit entities owned by the user only. |
| UPDATE_OWNER | Applies to the following entities: Candidate, ClientContact, JobOrder, JobSubmission, Lead,and Opportunity. Without the UPDATE_OWNER entitlement, the user is not allowed to change the owner of an entity even if the user has update entitlements to the entity. If a user has the UPDATE_OWNER entitlement, but only has department-level edit access, the user is able to edit the owners of entities belonging to users in his or her department, but not those belonging to users in other departments. |
| DELETE_CORPORATE | Generally, user can delete any entity. User must also have READ_CORPORATE access level. |
| DELETE_DEPARTMENT | User can delete entities owned by the user AND owned by users from the same department(s). User must also have READ DEPARTMENT or READ CORPORATE access level. |
| DELETE | User can delete entities owned by the user only. |

### File privacy entitlements

File privacy settings are enforced by a field isPrivate on the file entity. If a file is marked private, the user can only access that file if one of the following is true:
-   User has the View All Private Attachments entitlement
-   File is shared with the user
-   User is the owner or secondary owner of the entity to which the file is associated
