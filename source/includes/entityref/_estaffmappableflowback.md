# EstaffMappableFlowback

Represents data sent to Bullhorn ATS when Candidate onboarding information is updated in eStaff.

| **EstaffMappableFlowback field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| estaffFieldType | String (255) | Field type from eStaff ATS. | X | |
| estaffRecordType | String (255) | Record type from eStaff ATS. | X | |
| atsField | String (255) | Field type from Bullhorn ATS. | X | |
| atsEntity | String (255) | Entity type from Bullhorn ATS. | X | |
| alwaysOverwrite | Boolean | Determines if values should always be overwritten or only when the value was blank. | X | |