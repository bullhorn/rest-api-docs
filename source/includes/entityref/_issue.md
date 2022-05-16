# Issue

Entity representing an Issue which contains metadata and a collection of IssueItems which represent individual reported issues.

| **Issue field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| action | String | The action being performed that initiated this Issue.  This field is free-form.  For Payroll Export issues, typical values are "Payroll Export", "New Hire Export", "Accounts Payable Export", or "Unknown". | | |
| actionEntityID | Integer | The ID of the entity on which this Issue is based.  This can be left blank if no specific entity is relevant. | | |
| actionEntityName | String | The name of the entity on which this Issue is based.  This can be left blank if no specific entity is relevant. | | |
| dateAdded | Timestamp | Date on which the entity was created. | X | |
| externalSystemName | String | Name of an integrating external system to be used to specify the source of the issue being reported. | | |
| issueItems | To-many association | The list of associated IssueItems related to this Issue. | | |
| payMasterTransactionPayExportBatchIssues | To-many association | Association to any related PayMasterTransactionPayExportBatchIssues which can tie the issue to a pay export batch.| | X |
| severity | String | The severity of the Issue.  Valid values are Error, Warning, Exception, and Unknown. | X | |
