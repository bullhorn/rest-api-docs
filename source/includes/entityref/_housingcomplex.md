# HousingComplex

Represents a housing complex that a ClientCorporation uses when providing housing for certain types of employees. 

| **HousingComplex field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| address | Address | HousingComplex address:<ul><li>address1</li><li>address2</li><li>city</li><li>state</li><li>zip</li><li>countryID: options:<ul><li>value: 1</li><li>value: 2</li></ul></ul>Use the following REST call to get the list of countryIDs and labels: /meta/HousingComplex?fields=address(countryID) | | |
| billingContactID | Integer | The Bullhorn ClientContact ID of the billing contact person for this housing complex. |
| comments | String | Free-text comments about this housing complex. | | |
| complexManagerID | Integer | The Bullhorn ClientContact ID of the housing complex manager. | | |
| complexOwnerID | Integer | The Bullhorn ClientContact ID of the housing complex owner.  | | |
| contactName | String (100) | Name of the contact person for the housing complex, generally a facilities manager or superintendent. | | |
| customContactID1 to 3 | Integer | Configurable fields for identifying additional ClientContacts who have roles related to this housing complex. | | |
| customDate1 to 3 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1 to 3 | Double | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | X | |
| customInt1 to 3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customText1 to 5 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customTextBlock1 to 5 | String | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| dateAdded | Timestamp | The date on which this record was created in the Bullhorn system. | X | |
| fax | String (20) | Fax number for the housing complex. | | |
| isDeleted | Boolean | Indicates whether this record has been marked as deleted in the Bullhorn system. | X | |
| name | String (100) | Name of the housing complex. | X | |
| owner | Integer | CorporateUser who is the owner of this housing complex. | X | |
| phone | String (20) | Primary phone number of the housing complex. | | |
| whitelistClientCorporations | To-many association | Set of ClientCorporations to use this housing complex. | | |