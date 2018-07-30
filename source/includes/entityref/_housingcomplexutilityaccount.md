# HousingComplexUtilityAccount

Read-only entity that represents a housing complex unit utility account that a ClientCorporation uses when providing housing for certain types of employees. 

| **HousingComplexUtilityAccount field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| address | Address | HousingComplex address:<ul><li>address1</li><li>address2</li><li>city</li><li>state</li><li>zip</li><li>countryID: options:<ul><li>value: 1</li><li>value: 2</li></ul></ul>Use the following REST call to get the list of countryIDs and labels:<br>/meta/HousingComplex?fields=address(countryID) | | |
| accountNumber | String (100) | Utility account number. | | |
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
| dateConnected | Timestamp | Utility connection date. | | |
| dateDisconnected | Timestamp | Utility disconnection date. | | |
| deposit | Double | Deposit amount. | | |
| fax | String (20) | Fax number for the housing complex. | | |
| isDeleted | Boolean | Indicates whether this record has been marked as deleted in the Bullhorn system. | X | |
| name | String (100) | Name of the housing complex. | | |
| phone | String (20) | Primary phone number. | | |
| type | String (100) | Type of utility account. | | |
| unit | To-one association | Associated HousingComplexUnit. | X | |

