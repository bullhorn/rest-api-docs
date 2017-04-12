# CorporateUser

Represents an Internal user at your organization. CorporateUser is read-only. 

| **CorporateUser field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| customDate1 to 3 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1 to 3 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customInt1 to 3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment | | |
| customText1 to 20 | String | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| dateLastComment | Timestamp | Date on which CorporateUser’s last comment was made. | | |
| departments | To-many association | Ids of departments to which the CorporateUser belongs. | | |
| address | Address | CorporateUser’s main address: address1, address2, city, state, zip, countryID: options: value: 1, value: 2Use th. e following REST call to get the list of countryIDs and labels: /meta/CorporateUser?fields=address(countryID) | X | |
| email | String (100) | Primary email address. | | |
| email2 | String (100) | Additional email address 2. | | |
| email3 | String (100) | Additional email address 3. | | |
| emailNotify | Boolean | Indicates whether the user has chosen to be notified via pop-up in the Bullhorn application when a new email message arrives. | X | |
| emailSignature | String | Contents of the user's email signature. | X | |
| enabled | Boolean | Indicates whether the user may log in to the Bullhorn application. | X | X |
| externalEmail | String | User’s external (non-Bullhorn) email address. Used for forwarding | X | |
| firstName | String | First name of the CorporateUser. | | |
| inboundEmailEnabled | Boolean | Indicates whether the user can receive email through the Bullhorn application. | X | |
| isDayLightSavingsTime | Boolean | Indicates whether it is daylight savings time. | | |
| isDeleted | Boolean | Indicates whether CorporateUser is deleted. | | |
| isLockedOut | Boolean | Indicates whether the CorporateUser is locked out. | | |
| isOutboundFaxEnabled | Boolean | Indicates whether the user has permission to send faxes. | X | |
| jobAssignments | To-many association | JobOrders that have been assigned to this CorporateUser. Included JobOrder fields are: id, title | | |
| loginRestrictions | LoginRestrictions | A group of available login restrictions, including time, date, and IP address. | | |
| massMailOptOut | Boolean | Indicates whether the CorporateUser opted out of mass mailings. | | |
| middleName | String (50) | Middle name of the CorporateUser. | | |
| mobile | String (20) | Mobile phone number of the CorporateUser. | | |
| name | String (100) | Name of the CorporateUser. | | |
| namePrefix | String (5) | Name prefix of the CorporateUser. | | |
| nameSuffix | String (5) | Name suffix of the CorporateUser. | | |
| nickName | String (50) | Nickname of the CorporateUser. | | |
| occupation | String (50) | Occupation of the CorporateUser. | | |
| pager | String (20) | Pager number of the CorporateUser. | | |
| password | String | CorporateUser’s password for logging in to Bullhorn. | X | |
| phone to phone3 | String (20) | Phone number of the CorporateUser. | | |
| smsOptIn | Boolean | Indicates whether the CorporateUser has granted permission to be sent messages via SMS. | | |
| taskAssignments | Task | Not supported in this release. Tasks that have been assigned to this CorporateUser, including those owned by the user. | | |
| timeZoneOffsetEST | Integer | Indicates the number of hours by which the CorporateUser’s time zone differs from Eastern Standard Time. For example, Pacific Standard Time is -3, three hours earlier than Eastern. | | |
| username | String (100) | CorporateUser’s username for logging in to Bullhorn. | X | |