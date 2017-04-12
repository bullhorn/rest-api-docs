# CorporationDepartment

Represents a department in a corporation.

| **CorporationDepartment field** | **Type** | **Description** | **Not null** | **Read-Only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| dateAdded | Timestamp | Date when this record was created in the Bullhorn system. | X | X |
| description | String (255) | Text description of the CorporationDepartment. | | |
| enabled | Boolean | Indicates whether this CorporationDepartment is enabled for use in the system. | X | X |
| name | String (100) | Name of the CorporationDepartment. | X | X |