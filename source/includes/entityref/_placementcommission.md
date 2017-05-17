# PlacementCommission

Represents a commission payment that is paid upon successful placement of a Candidate in a job. Each PlacementCommission instance is associated with exactly one Placement instance; a Placement may have multiple PlacementCommissions associated with it.

| **PlacementCommission field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X |
| comments | String | Free-text comments on this commission. |
| commissionPercentage | Double | The commission amount, expressed as a percentage: for example, 0.05 = 5%. Saved as decimal. | X |
| dateAdded | Timestamp | Date on which this record was created in the Bullhorn system. | X |
| dateLastModified | Timestamp | Date on which the PlacementCommission was last modified. |
| externalRecipient | String (100) | If the person who should receive the commission does not have a Bullhorn id, this field indicates that person's name. |
| flatPayout | Double | The commission expressed as a flat sum. | X |
| grossMarginPercentage | Double | The percentage of the total gross margin for the Placement that the commission recipient will receive. | X |
| hourlyPayout | Double | The commission expressed as an hourly rate (e.g., $1.00 for each hour worked by the employee). | X |
| placement | To-one association | Placement to which this commission pertains. | X |
| role | String (50) | The commission recipient's role for the Placement (Sales, Recruiting, and so forth). |
| status | String (30) | Status of this commission. |
| user | To-one association | User who will receive the commission, if applicable. |