# CandidateCertificationRequirements

This entity represents the required certification for a Candidate.

| **CandidateCertificationRequirements field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| Certification | To-one association | The certification the userCertification satisfies. | X | |
| Candidate | To-one association | The candidate this CandidateCertificationRequirements is associated with. | X | |
| dateAdded | Timestamp | The date on which this record was created in the Bullhorn system. | X | |
| userCertification | To-one association | The user certification that is required. |   | |
| ownerUserId | To-one association | User that this CandidateCertificationRequirements is for. | X | |

