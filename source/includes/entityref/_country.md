# Country

Represents a country.

| **Country field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| code | String | Code associated with this Country. | | |
| name | String | Name of the Country. | X | |
| states | To-many association | Ids of States that are associated with this Country. | | |