# Issue

Entity representing an Issue which contains metadata and a collection of IssueItems which represent individual reported issues.

| **Issue field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| action | String |  | | |
| actionEntityID | Integer |  | | |
| actionEntityName | String |  | | |
| dateAdded | Timestamp |  | X | |
| externalSystemName | String |  | | |
| issueItems | To-many association |  | | |
| payMasterTransactionPayExportBatchIssues | To-many association |  | | |
| severity | String |  | X | |
