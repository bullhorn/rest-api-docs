# State

Represents a state or province within a nation. 

| **State field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | |
| code | String | Postal abbreviation of the state. | | |
| country | To-one association | Nation that contains this state. | X | |
| name | String | Name of the state. | X | |