# CandidateReference

Represents a person who serves as a reference for a Candidate.

| **CandidateReference field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| candidate | To-one association | Candidate for whom this person is a reference. | X | |
| candidateTitle | String (50) | Candidate's title when he or she worked with or for the reference. | | |
| clientCorporation | To-one association | ClientCorporation where the CandidateReference works. | | |
| companyName | String (50) | Name of the company where reference works, if it does not have a ClientCorporation record in Bullhorn. | | |
| customDate1 to 5 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1 to 5 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customInt1 to 5 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customText1 to 5 | String (500) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customTextBlock1 to 3 | String (2147483647) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| dateAdded | Timestamp | Date on which this record was created in the Bullhorn system. | X | |
| employmentEnd | Timestamp | End date of Candidate's employment with the reference. | | |
| employmentStart | Timestamp | Start of the period during which the Candidate worked with the reference. | | |
| isDeleted | Boolean | Indicates whether this record has been marked as deleted in the Bullhorn system. | X | |
| jobOrder | Integer | JobOrder for which Candidate is being considered. | | |
| referenceClientContact | To-one association | Bullhorn ClientContact for this reference, if applicable. | | |
| referenceEmail | String (50) | Email address for reference; not used if the CandidateReference is a client contact. | | |
| referenceFirstName | String (50) | Reference's first name; not used if reference is a ClientContact. | | |
| referenceLastName | String (50) | Reference's last name; not used if the CandidateReference is a ClientContact. | | |
| referencePhone | String (20) | Phone number for the CandidateReference; not used if the reference is a ClientContact. | | |
| referenceTitle | String (50) | Reference's job title; not used if the reference is a ClientContact. | | |
| status | String (20) | Status of this reference request. | | |
| yearsKnown | Integer | Indicates how long reference has known the Candidate. | | |