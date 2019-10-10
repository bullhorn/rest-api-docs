# Department

Represents a department for a user's corporation. Users can create, read, and update departments. Only users with the  Account Administration entitlement can create and update departments.

| **Department field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| description | String (255) | Department description. | X | |
| enabled | Boolean | Indicates whether department is enabled. | | |
| name | String (100) | Department name. | X | |