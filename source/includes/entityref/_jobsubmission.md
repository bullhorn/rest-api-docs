# JobSubmission

Represents a formal submission of a Candidate for a particular job. A job submission occurs after the Candidate has been evaluated, interviewed, and otherwise assessed, and the parties involved have agreed that the Candidate may be suitable. The JobSubmission entity is then created with references to the Candidate and the JobOrder representing the position. If the JobSubmission is approved, a Placement entity is created.

The JobSubmission entity supports the massUpdate operations.

**Note:** When you set the status field of a JobSubmission to “New Lead”, it becomes a web response, which is an informal job submission. When you update another status, it becomes a formal job submission. When you create a web response, set the dateWebResponse field to the current date. When you update a web response to make it a formal job submission, set the dateAdded field to the current date.

| **JobSubmission field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| appointments | To-many association | Ids of Appointments associated with this JobSubmission. | | |
| billRate | BigDecimal | Bill rate for this JobSubmission. | | |
| candidate | To-one association | Candidate submitted for this job. | X | | 
| comments | String | Free-text comments on this JobSubmission. | | |
| dateAdded | Timestamp | Date on which this JobSubmission record was created in the Bullhorn system. | X | X |
| dateLastModified | Timestamp | Date on which the JobSubmission was last modified. | | |
| dateWebResponse | Timestamp | When a new web response is added, set the dateWebResponse field to the current timestamp. When a web response is promoted to a submission, update the dateAdded property to the current timestamp. | X | |
| isDeleted | Boolean | Indicates whether this record is marked as deleted in the Bullhorn system. | X | |
| isHidden | Boolean | Indicates whether web responses are hidden. If you do not plan to promote a web response to a submission, set the isHidden field to true. | | |
| jobOrder | Integer | JobOrder to which this JobSubmission corresponds. | X | |
| owners | To-many association | Primary (first) and secondary (all but first) corporateUsers considered owners of this JobSubmission. | | |
| payRate | BigDecimal | Pay rate for this JobSubmission. | | |
| salary | BigDecimal | Salary for this JobSubmission. | | |
| sendingUser | To-one association | CorporateUser credited with making the submission. The default value is user who created the JobSubmission. | X | |
| source | String (100) | Source of the JobSubmission (for example, web, Integer, and so forth.) | | |
| status | String (30) | Status of the JobSubmission (for example, reviewed, accepted, and so forth.). Allowable values are available in the response of the settings/jobResponseStatusList operation. | X | |