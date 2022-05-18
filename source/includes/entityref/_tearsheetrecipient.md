# TearsheetRecipient

Represents a tearsheet recipient. 

| **TearsheetRecipient field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | |
| candidateRestrictionBits | Integer | Candidate restriction bits. | X | |
| dateAdded | Timestamp | Date on which this record was created in the Bullhorn system. | X | |
| description | String (2147483647) | Free-text description. | | |
| isDeleted | Boolean | Indicates whether this record is marked as deleted in the Bullhorn system. | X | |
| isSent | Boolean | Indicates whether | | |
| jobOrder | To-one association | JobOrder with which this TearsheetRecipient is associated. | | |
| person | To-one association | Person with whom this TearsheetRecipient is associated. | | |
| tearsheet | To-one association | Tearsheet with which this TearsheetRecipient is associated. | | |