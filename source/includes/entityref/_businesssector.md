# BusinessSector

Represents a business sector, which can be associated with Candidates, ClientCorporations, and JobOrders for classification purposes.

| **BusinessSector field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| dateAdded | Timestamp | Date on which this record was created in the Bullhorn system.| | |
| name | String (100) | Name of this business sector. | X | X |