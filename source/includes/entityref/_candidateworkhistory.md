# CandidateWorkHistory

Represents a single entry in the "Work History" section of a Candidate's resume: that is, a job the Candidate has had. For each current or former position the Candidate has held, there is a unique CandidateWorkHistory instance associated with that Candidate. Each CandidateWorkHistory instance corresponds to a line item on the "Work History" tab of a Candidate record in the Bullhorn application.

| **CandidateWorkHistory field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| bonus | Double | Amount of the bonus paid to Candidate. | | |
| candidate | To-one association | Candidate with whom CandidateWorkHistory is associated. | X | |
| clientCorporation | To-one association | ClientCorporation associated with Candidate. | | |
| comments | String | Free-text comments on CandidateWorkHistory. | | |
| commission | Double | Amount of commission earned by Candidate at this position. | | |
| companyName | String (100) | Name of the company where the Candidate worked. | | |
| customDate1 to 5 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1 to 5 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customInt1 to 5 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customText1 to 5 | String | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customTextBlock1 to 3 | String | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| dateAdded | Timestamp | Date on which this record was created in the Bullhorn system. | X | X |
| endDate | Timestamp | Date on which job ended, if applicable. | | |
| isDeleted | Boolean | Indicates whether this record has been marked as deleted in the Bullhorn system. | X | |
| isLastJob | Boolean | Indicates whether this was the Candidate's most recent job. | X | |
| jobOrder | To-one association | JobOrder associated with the CandidateWorkHistory, if applicable. | | |
| placement | To-one association | Placement representing the Candidate's placement in a job, if applicable.  | | |
| salary1 | BigDecimal | Candidate's starting salary at this position. | | |
| salary2 | BigDecimal | Candidate's final salary at this position. | | |
| salaryType | String (20) | Indicates how the Candidate was paid: Hourly, Yearly, and so forth. | | |
| startDate | Timestamp | Date on which Candidate began working at this position. | | |
| terminationReason | String (100) | Reason for the Candidate's termination from this position, if applicable. | | |
| title | String (50) | Candidate's job title in this position. | | |