# PlacementCertification

This entity represents the required certification for a Placement.

| **PlacementCertification field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| CandidateCertification | To-one association | CandidateCertification that fulfills this PlacementCertification. | X | |
| certification | To-one association | The certification that is required. | X | |
| dateAdded | Timestamp | The date on which this record was created in the Bullhorn system. | X | |
| placement | To-one association | Placement that this PlacementCertification is for. | X | |