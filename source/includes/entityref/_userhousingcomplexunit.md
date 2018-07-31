# UserHousingComplexUnit

Read-only entity that represents a housing complex unit for a candidate. 

| **UserHousingComplexUnit field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| candidate | To-one association | Candidate submitted for this job. | | |
| comments | String (2147483647) | Free-text comments about this housing complex. | | |
| customDate1 to 5 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1 to 5 | Double | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customInt1 to 5 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customText1 to 5 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customTextBlock1 to 5 | String (2147483647) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| dateBegin | Timestamp | Begin date. | | |
| dateEnd | Timestamp | End date. | | |
| deduction | Double | | | |
| isDeleted | Boolean | Indicates whether this record has been marked as deleted in the Bullhorn system. | X | |
| placement | To-many association | Set of FurnitureDeliveries attached to this HousingComplexUnit. | | |
| unit | To-one association | Associated HousingComplexUnit. | X | |