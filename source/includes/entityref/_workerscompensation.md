# WorkersCompensation

This entity represents Entity that represents workers compensation data.

| **WorkersCompensation field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| code | String | The code set for this WorkersCompensation. | X | |
| description | String | Description text about the WorkersCompensation. | | |
| name | String | The name of the WorkersCompensation. | | |
| rates | To-many association | Set of WorkersCompensationRate entities attached to this WorkersCompensation. | | |
| state | String | State associated to this WorkersCompensation. | | |