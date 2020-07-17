# IssueItems

Entity representing individual reported issues.

| **IssueItems field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| comments | String |  | | |
| description | String |  | | |
| dateAdded | Timestamp |  | X | X |
| dateLateModified | Timestamp |  | | |
| errorType | String |  | | |
| externalEntityID | String |  | | |
| externalEntityName | String |  | | |
| fieldReference | String |  | | |
| fixableByUser | Boolean |  | | |
| fixInBullhorn | Boolean |  | | |
| issue | To-one associaton |  | X | |
| issueResolutionStatusLookup | To-one associaton |  | X | |
| modifiedByUser | To-one association |  | | |
| rawIssueItemPayload | String |  | | |
| referenceUrl | String |  | | |
| referenceUrlMethod | String |  | | |
| referenceUrlResponse | String |  | | |
| referenceUrlStatusCode | Integer |  | | |
| severity | String |  | X | |
| sourceEntity | String |  | | |
| sourceEntityID | Integer |  | | |
