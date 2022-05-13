# CorporateUser

Read-only entity that represents an internal user at an organization.

| **CorporateUser field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| address | Address | CorporateUser’s main address:<ul><li>address1</li><li>address2</li><li>city</li><li>state</li><li>zip</li><li>countryID: options:<ul><li>value: 1</li><li>value: 2</li></ul></ul>Use the following REST call to get the list of countryIDs and labels:<br>/meta/CorporateUser?fields=address(countryID) | X | |
| branch | To-one association | CorporateUser’s Branch. | | |
| branches | To-many association | CorporateUser’s Branches. | | |
| companyName | String (100) | Name of company where the Candidate currently works. | | |
| corporation | To-one association | Corporation associated with this CorporateUser. | X | X |
| customDate1 to 3 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1 to 3 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customInt1 to 3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customText1 to 20 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| dateLastComment | Timestamp | Date on which CorporateUser’s last comment was made. | | |
| dateLastModified | Timestamp | The last time record was modified. | X | X |
| delegations | To-many association | CorporateUser's delegations. | | |
| departmentIdList | String (255) | Ids of departments to which the CorporateUser belongs. | | |
| departments | To-many association | Departments to which the CorporateUser belongs. | | |
| email | String (100) | Primary email address. | | |
| email2 | String (100) | Additional email address 2. | | |
| email3 | String (100) | Additional email address 3. | | |
| emailNotify | Boolean | Indicates whether the CorporateUser has chosen to be notified via pop-up in the Bullhorn application when a new email message arrives. | X | |
| emailSignature | String (2147483647) | Contents of the CorporateUser's email signature. | X | |
| enabled | Boolean | Indicates whether the CorporateUser may log in to the Bullhorn application. | X | X |
| externalEmail | String (60) |External (non-Bullhorn) email address. Used for forwarding. | X | |
| fax1 to 3 | String (50) | Fax number. | | |
| firstName | String (50) | First name of the CorporateUser. | | |
| inboundEmailEnabled | Boolean | Indicates whether the CorporateUser can receive email through the Bullhorn application. | X | |
| isDayLightSavingsTime | Boolean | Indicates whether it is daylight savings time. | | |
| isDeleted | Boolean | Indicates whether CorporateUser is deleted. | | |
| isHidden | Boolean | Indicates whether the record is hidden. | | |
| isLockedOut | Boolean | Indicates whether the CorporateUser is locked out. | | |
| isOutboundFaxEnabled | Boolean | Indicates whether the CorporateUser has permission to send faxes. | X | |
| jobAssignments | To-many association | JobOrders that have been assigned to this CorporateUser. | | |
| lastName | String (50) | CorporateUser’s last name. | | |
| loginRestrictions | LoginRestrictions | A group of available login restrictions, including time, date, and IP address. | | |
| massMailOptOut | Boolean | Indicates whether the CorporateUser opted out of mass mailings. | | |
| masterUserID | Integer | Master user id. | X | X |
| middleName | String (50) | Middle name of the CorporateUser. | | |
| mobile | String (20) | Mobile phone number of the CorporateUser. | | |
| name | String (100) | Name of the CorporateUser. | | |
| namePrefix | String (5) | Name prefix of the CorporateUser. | | |
| nameSuffix | String (5) | Name suffix of the CorporateUser. | | |
| nickName | String (50) | Nickname of the CorporateUser. | | |
| occupation | String (50) | Occupation of the CorporateUser. | | |
| pager | String (20) | Pager number of the CorporateUser. | | |
| phone to phone3 | String (20) | Phone number of the CorporateUser. | | |
| primaryDepartment | To-one association | Primary department of the CorporateUser. | | |
| privateLabel | To-one association | Private Label | X | |
| privateLabels | To-many association | PrivateLabels assigned to the CorporateUser. | | |
| reportToPerson | Person | Person to whom this CorporateUser reports. | | |
| smsOptIn | Boolean | Indicates whether the CorporateUser has granted permission to be sent messages via SMS. | | |
| status | String (100) | Status of the CorporateUser. | | |
| taskAssignments | Task | Tasks that have been assigned to the CorporateUser, including those owned by the CorporateUser. | | |
| timeZoneOffsetEST | Integer | Indicates the number of hours by which the CorporateUser’s time zone differs from Eastern Standard Time. For example, Pacific Standard Time is -3, three hours earlier than Eastern. | | |
| userDateAdded | Timestamp | Date the record was added to the system. | X | X |
| userType | To-one association | User type | X | |
| username | String (100) | username for logging in to Bullhorn. | X | |