
# CandidateEducation

Represents an educational degree or course of study that a Candidate lists on his or her resume. Each CandidateEducation instance corresponds to a line item on the "Education" tab of a Candidate in the Bullhorn application.

| **CandidateEducation** | **field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X |
| candidate | To-one association | Candidate with whom this entity is associated. Included Candidate fields are: id, firstName, lastName |
| certification | String | Certification received with this education, if applicable. |
| city | String (40) | Name of the city where the education took place. |
| comments | String | Free-text comments on this record. |
| customDate1 to 5 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. |
| customFloat1 to 5 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. |
| customInt1 to 5 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. |
| customText1 to 5 | String | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. |
| customTextBlock1 to 3 | String | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. |
| dateAdded | Timestamp | Date on which this record was created in the Bullhorn system. | X |
| degree | String (100) | Indicates what educational degree the Candidate received; for example, B.A., M.A., Ph.D., and so forth. |
| endDate | Timestamp | Date when Candidate finished this education. |
| expirationDate | Timestamp | Expiration date for a certificate or other credential that needs to be periodically renewed. |
| gpa | Double | Indicates Candidate's grade point average. |
| graduationDate | Timestamp | Date when Candidate graduated. |
| isDeleted | Boolean | Indicates whether this record has been marked as deleted in the Bullhorn system. |
| major | String (100) | Indicates the field in which Candidate majored. |
| school | String (100) | Name of the educational institute where this education took place. |
| startDate | Timestamp | Date when Candidate began study. |
| state | String (50) | Name of the U.S State in which the education took place. |