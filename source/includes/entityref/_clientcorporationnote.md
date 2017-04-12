# ClientCorporationNote

Association entity between ClientCorporation, ClientContact, and Note entities. This entity is read-only and is only created when the companyStampOnActivitiesEnabled corporation setting is enabled.

| **ClientCorporationNote field** | **Type** | **Description** | **Not null** | **Read-Only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| clientCorporation | To-one association | Associated ClientCorporation. | X | |
| clientContact | To-one association | Associated ClientContact. |  X | |
| note | To-one association | Associated Note. | X | |