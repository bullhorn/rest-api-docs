# Sendout

Represents a sendout, which occurs when a Candidate's information is sent to a ClientCorporation to be evaluated for a particular job.

| **Sendout field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | |
| candidate | To-one association | Candidate being sent out. | X | |
| clientContact | To-one association | ClientContact receiving the Sendout. | | |
| clientCorporation | To-one association | Hiring company. | | |
| dateAdded | Timestamp | Date on which this entity was created in the Bullhorn system. | X | |
| email | String (100) | Email address to which the Sendout is sent. | | |
| isRead | Boolean | Indicates whether the email has been opened. | X | |
| jobOrder | To-one association | JobOrder for which the Candidate is being considered. | | |
| user | To-one association | CorporateUser who initiated this Sendout. The default value is user who creates the Sendout. | X | |