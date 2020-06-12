# EstaffMappableFlowback

Represents data sent to Bullhorn ATS when Candidate onboarding information is updated in eStaff.

| **EstaffMappableFlowback field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| estaffMappableFlowbackID | Integer | Unique identifier for this entity. | X | X |
| estaffFieldType | String (255) | Field type in eStaff ATS. | X | |
| estaffRecordType | String (255) | Record type in eStaff ATS. | X | |
| atsField | String (255) | Field type in Bullhorn ATS. | X | |
| atsEntity | String (255) | Entity type in Bullhorn ATS. | X | |
| alwaysOverwrite | Boolean | Determines if values in Bullhorn ATS should always be overwritten by eStaff values or only if the Bullhorn value is blank. | X | |