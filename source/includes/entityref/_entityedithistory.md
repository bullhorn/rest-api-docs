# {Entity}EditHistory

Read-only entity that represents the transaction history of an {Entity}. The GET /query{Entity}EditHistory call returns a list of {Entity}EditHistory entities for one or more {Entity} entities. The GET /entity{Entity}EditHistory/{comma-separated entityIds} call returns one or more {Entity}EditHistory entities, each of which represents a set of {Entity} field changes.
{Entity} can be any one of the following: Appointment, CandidateCertification, ClientCorporation, JobOrder, JobSubmission, Opportunity, Placement, PlacementCertification, PlacementChangeRequest, PlacementCommission, Task, User.

| **{Entity}EditHistory field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | id of this entity. | X | X |
| auditTrail | String (2147483647) | An HTML snippet representing the field changes for the given ID. Not always generated. | X | | 
| dateAdded | Timestamp | Date on which this {Entity}EditHistory record was created in the Bullhorn system. | X | X |
| fieldChanges | To-many association | The {Entity}EditHistoryFieldChange entities associated with this {Entity}EditHistory. | X | | 
| migrateGUID | String (36) | Unused. |  X | | 
| modifyingPerson | To-one association | User credited with making the [Entity] change(s). |  X | |
| targetEntity | To-one association | The [Entity] to which this {Entity}EditHistory applies. | X | X |
| transactionID | String (36) | Unique transaction id for this {Entity}EditHistory. | X | |