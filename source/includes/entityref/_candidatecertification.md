# CandidateCertification

This entity represents a certification that a Candidate may have.

| **CandidateCertification field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| boardCertification | String (100) | Set by certificationBoardCertificationList private label attribute | | |
| candidate | To-one association | Candidate linked to CandidateCertification. | X | |
| certification | To-one association | Certification linked to CandidateCertification. | X | |
| comments | String | Free-text comments on this record. | | |
| compact | Integer | yes/no (1/0) Whether compact or not. | | |
| copyOnFile | Integer | yes/no (1/0) Whether on file. | | |
| dateCertified | Timestamp | Date candidate obtained certification. | | |
| dateExpiration | Timestamp | Date certification expires. | | |
| dateLastModified | Timestamp | Date the CandidateCertification was last updated. | X | |
| issuedBy | String (100) | Entity that issued certification to candidate. | | |
| licenseNumber | String (100) | License number of the certification. | | |
| licenseType | String (30) | License Type of the certification. | | |
| location | String (100) | Location where certification is valid. | | |
| modifyingUser | To-one association | Creator of CandidateCertification. | | |
| name | String (100) | Name of CandidateCertification. | X | |
| results | String (255) | Free text of certification results. | | |
| status | String (30) | Status of CandidateCertification. | | |

