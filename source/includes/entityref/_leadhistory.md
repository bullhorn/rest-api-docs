# LeadHistory

Read-only entity that represents the status and ClientCorporation history of a Lead.

| **LeadHistory field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| clientCorporation | To-one association | ClientCorporation of the associated Lead at the time this LeadHistory was created. | X | |
| dateAdded | Timestamp | Date this LeadHistory was added. | X | X |
| lead | To-one association | Lead associated with this LeadHistory. | X | X |
| modifyingUser | To-one association | CorporateUser who modified the Lead associated with this LeadHistory. | X | X |
| status | String (30) | Status of the associated Lead at the time this LeadHistory was created. | X | X |