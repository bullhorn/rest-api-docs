# WorkersCompensation

Represents workers compensation data.

| **WorkersCompensation field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| code | String | The code set for this WorkersCompensation. | X | |
| dateAdded | Timestamp | Date on which this record was created in the Bullhorn system. | X | X |
| dateLastModified | Timestamp | Date on which the WorkersCompensation was last modified. | X | X |
| description | String | Description text about the WorkersCompensation. | | |
| name | String | The name of the WorkersCompensation. | | |
| rates | To-many association | Set of WorkersCompensationRate entities attached to this WorkersCompensation. | | |
| state | String | State associated to this WorkersCompensation. | | |
