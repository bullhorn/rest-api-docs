# OpportunityHistory

Read-only entity that represents the history of certain fields of an Opportunity.

| **OpportunityHistory field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| dateAdded | Timestamp | Date this OpportunityHistory was added. | X | X |
| dealValue | BigDecimal | Deal value of the associated Opportunity at the time this OpportunityHistory was created. | X | |
| effectiveDate | Timestamp | Date the status change comes into effect for the associated Opportunity. | X | |
| modifyingUser | To-one association | CorporateUser who modified the Opportunity associated with this OpportunityHistory. | X | X |
| opportunity | To-one association | Opportunity associated with this OpportunityHistory. | X | X |
| status | String | Status of the associated Opportunity at the time this OpportunityHistory was created. | X | X |
| weightedDealValue | BigDecimal | Weighted deal value of the associated Opportunity at the time this OpportunityHistory was created. | X | |
| winProbabilityPercent | Double | Probability of winning the associated Opportunity at the time this OpportunityHistory was created. | X | |