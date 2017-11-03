# Country

Represents a country.

| **Country field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| code | String (4) | Code associated with this Country. | | |
| name | String (64) | Name of the Country. | X | |
| states | To-many association | Ids of States that are associated with this Country. | | |