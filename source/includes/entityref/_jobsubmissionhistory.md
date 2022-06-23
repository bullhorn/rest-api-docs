# JobSubmissionHistory

Read-only entity that represents the transaction history of a JobSubmission. The GET /query/JobSubmissionHistory call returns a list of JobSubmissionHistory entities for one or more JobSubmission entities. The GET /entity/JobSubmissionHistory/{entityId} call returns a single JobSubmissionHistory entity that represents one JobSubmission change. Supports create and delete operations.

| **JobSubmissionHistory field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| comments | String (2147483647) | Value of the JobSubmission comments fields for this transaction. | | |
| dateAdded | Timestamp | Date on which the JobSubmission record was created in the Bullhorn system. | X | X |
| jobSubmission | To-one association | JobSubmission associated with this JobSubmissionHistory. | X | X |
| modifyingUser | To-one association | CorporateUser credited with modifying the JobSubmission. | X |  X |
| status | String (30) | Status of the JobSubmission (for example, reviewed, accepted, and so forth.). Allowable values are configured in field maps. | X |  X |
| transactionID | String (36) | Unique transaction id for this JobSubmissionHistory. | | |
