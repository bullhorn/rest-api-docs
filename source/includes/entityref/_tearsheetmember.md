# TearsheetMember

Represents a tearsheet member. 

| **TearsheetMember field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | |
| candidateRestrictionBits | Integer | Candidate restriction bits. | X | |
| dateAdded | Timestamp | The date on which this record was created in the Bullhorn system. | X | |
| person | To-one association | Person with whom this TearsheetMember is associated. | | |
| tearsheet | To-one association | Tearsheet with which this TearsheetMember is associated. | | |