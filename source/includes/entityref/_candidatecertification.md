# CandidateCertification

This entity represents a certification that a Candidate may have.

| **CandidateCertification** | **field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| boardCertification | String (100) |
| candidate | To-one association | Candidate linked to CandidateCertification. | X |
| certification | To-one association | Certification linked to CandidateCertification. | X |
| comments | String | Free-text comments on this record. |
| compact | Integer |
| copyOnFile | Integer |
| dateCertified | Timestamp | Date candidate obtained certification. |
| dateExpiration | Timestamp | Date certification expires. |
| dateLastModified | Timestamp | Date the CandidateCertification was last updated. | X |
| issuedBy | String (100) | Entity that issued certification to candidate. |
| licenseNumber | String (100) |
| licenseType | String (30) |
| location | String (100) |
| modifyingUser | To-one association |
| name | String (100) | Name of CandidateCertification. | X |
| results | String (255) |
| status | String (30) | Status of CandidateCertification. |