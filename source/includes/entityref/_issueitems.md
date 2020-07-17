# IssueItems

Entity representing individual reported issues.

| **IssueItems field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| comments | String | Comments about the IssueItems to be used for reference. | | |
| description | String | A text description of the IssueItems. | | |
| dateAdded | Timestamp | The date on which the entity was created. | X | |
| dateLateModified | Timestamp | The date on which the entity was last modified. | | |
| errorType | String | The type of error type being reported.  Valid values are INVALID-DATA, MISSING-DATA, DATA-MISMATCH, SYSTEM-ERROR, or UNKNOWN. | | |
| externalEntityID | String | A reference to any external entity ID that is related to this issue. | | |
| externalEntityName | String | A reference to any external entity name that is related to this issue. | | |
| fieldReference | String | The field on the entity that is known to be related to the issue being reported. | | |
| fixableByUser | Boolean | Whether or not this issue should be fixable by a user. | | |
| fixInBullhorn | Boolean | Whether or not this issue should be fixable within the Bullhorn system. | | |
| issue | To-one associaton | The Issue entity to which this IssueItems entity is associated. | X | |
| issueResolutionStatusLookup | To-one associaton | The code of the issue resolution status.  A value of 1 means Open.  A value of 2 means Resolved.  A value of 3 means Dismissed. | X | |
| modifiedByUser | To-one association | The user who last modified the entity. | | |
| rawIssueItemPayload | String | Text field containing raw payload information such as JSON containing additional context of the reported issue. | | |
| referenceUrl | String | The Bullhorn API URL that is being reported on by this issue. | | |
| referenceUrlMethod | String | The Bullhorn API HTTP method that is being reported on by this issue. | | |
| referenceUrlResponse | String | The Bullhorn API response message that is being reported on by this issue. | | |
| referenceUrlStatusCode | Integer | The Bullhorn API HTTP status code that is being reported on by this issue. | | |
| severity | String | The severity of the IssueItems.  Valid values are Error, Warning, Exception, and Unknown. | X | |
| sourceEntity | String | The entity type that is being reported on in this issue. | | |
| sourceEntityID | Integer | The ID of the entity that is being reported on in this issue. | | |
