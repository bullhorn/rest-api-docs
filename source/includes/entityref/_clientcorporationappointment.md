# ClientCorporationAppointment

Association entity between ClientCorporation, ClientContact, and Appointment entities. This entity is read-only and is only created when the companyStampOnActivitiesEnabled corporation setting is enabled.

| **ClientCorporationAppointment field** | **Type** | **Description** | **Not null** | **Read-Only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| clientCorporation | To-one association | Associated ClientCorporation. | X | |
| clientContact | To-one association | Associated ClientContact. |  X | |
| appointment | To-one association | Associated Appointment. | X | |