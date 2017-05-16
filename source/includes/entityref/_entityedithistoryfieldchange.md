# {Entity}EditHistoryFieldChange

Read-only entity that represents a field change associated with an [Entity]EditHistory entity. The GET /query{Entity}EditHistoryFieldChange call returns a list of [Entity]EditHistoryFieldChange entities for one or more {Entity}EditHistory entities. The GET /entity{Entity}EditHistoryFieldChange/{comma-separated entityIds} call returns one or more {Entity}EditHistoryFieldChange entities.
{Entity} can be any one of the following: Appointment, CandidateCertification, ClientCorporation, JobOrder, JobSubmission, Opportunity, Placement, PlacementCertification, PlacementChangeRequest, PlacementCommission, Task, User.

| **{Entity}EditHistoryFieldChange field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | ID of this entity. | X | X |
| columnName | String (100) | Database column name for the value that was changed. | X | X |
| display | String (100) | FieldMap label for the columnName. Value is deduced at the time of [Entity]EditHistoryFieldChange entity creation and does not update if the columnName FieldMap is subsequently renamed/relabeled. | X | X | 
| editHistory | To-one association | {Entity}EditHistory entity that owns this [Entity]EditHistoryFieldChange entity. | X | X |
| newValue | String | The value of columnName before update. |  X | | 
| oldValue | String | The value of columnName after update. |  X | |