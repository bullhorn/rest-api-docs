# HousingComplexUnit

Read-only entity that represents a housing complex unit that a ClientCorporation uses when providing housing for certain types of employees. 

| **HousingComplexUnit field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| billingContactID | Integer | The Bullhorn ClientContact id of the billing contact person for this housing complex. | | |
| comments | String (2147483647) | Free-text comments about this housing complex. | | |
| contactName | String (100) | Name of the contact person for the housing complex, generally a facilities manager or superintendent. | | |
| customContactID1 and 2 | Integer | Configurable fields for identifying additional ClientContacts who have roles related to this housing complex. | | |
| customDate1 to 3 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1 to 3 | Double | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customInt1 to 3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customText1 to 5 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customTextBlock1 to 5 | String (2147483647) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| dateAdded | Timestamp | The date on which this record was created in the Bullhorn system. | X | |
| dateLeaseBegin | Timestamp | The lease begin date. | | |
| dateLeaseEnd | Timestamp | The lease end date. | | |
| dateOfDeposit | Timestamp | The deposit date. | | |
| dateORefund | Timestamp | The refund date. | | |
| firstMonthProRate | Double | Prorate value for the first month of the lease. | | |
| isDeleted | Boolean | Indicates whether this record has been marked as deleted in the Bullhorn system. | X | |
| isDepositRefundable | Boolean | Indicates whether lease is on file. | X | |
| isLeaseOnFile | Boolean | Indicates whether deposit is refundable. | X | |
| maxOccupants | Integer | Maximum number of occupants. | | |
| monthlyRent | Double | Monthly rent. | | |
| name | String (100) | Name of the housing complex. | | |
| occupants | Integer | Number of occupants. | | |
| penalties | String | CorporateUser who is the owner of this housing complex. | X | |
| securityDeposit | Double | Amount of security deposit. | | |
| unitManagerID | Integer | ID of unit manager. | | |
| furnitureDeliveries | To-many association | Set of FurnitureDeliveries attached to this HousingComplexUnit. | | |
| userHousingComplexUnits | To-many association | Set of userHousingComplexUnits attached to this HousingComplexUnit. | | |
| utilityAccounts | To-many association | Set of utilityAccounts attached to this HousingComplexUnit. | | |