# Lead

Represents a Lead on a potential Candidate, ClientContact, or ClientCorporation. A Lead can be converted into a Candidate, ClientContact, or ClientCorporation.

| **Lead field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| address | Address | Lead's address. This is an address object containing Street Address, City, State, Zip, and CountryID. | | |
| assignedTo | To-many association | CorporateUser(s) this Lead is assigned to. | | |
| businessSectors | To-many association | IDs of BusinessSectors in which the Lead operates. | | |
| campaignSource | String | Campaign source of the Lead. | | |
| candidates | To-many association | Candidates associated with this Lead. | | |
| category | To-one association | Lead's primary Category. | X | |
| categories | To-many association | IDs of the Categories associated with the Lead. Note that the categoryId property is used to store the Lead's primary Category, while this association hold that Category and any other Categories to which the Lead belongs. | | |
| clientContacts | To-many association | ClientContacts associated with this Lead. | | |
| clientCorporation | To-one association | ClientCorporation associated with this Lead. | | |
| comments | String | Free-text comments on this Lead. | | |
| companyName | String(100) | Name of the Lead's company (can be used if there is no ClientCorporation entity for this Lead's company). | | |
| companyURL | String(100) | | | |
| conversionSource | String(200) | Source of the Lead's conversion. For example, Cold Call, Monster, and so forth. | | |
| customDate1-3 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1-3 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customInt1-3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customText1-20 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customTextBlock1-5 | String | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| dateAdded | Timestamp | Date on which this record was created in the Bullhorn system. | X | |
| dateLastComment | Timestamp | Date on which the last comment referencing this Lead was made. | | |
| dateLastModified | Timestamp | Date on which the Lead was last modified. | | |
| dateLastVisited | Timestamp | Date on which the Lead was last visited. | | |
| description | String | Description of the Lead. | | |
| distributionLists | To-many association | IDs of DistributionLists associated with this Lead. | | |
| division | String (40) | Department that the Lead is associated with. | | |
| email | String (100) | Lead's primary email address. | X | |
| email2 | String (100) | Additional email address. Typically used for the Lead's home or personal email. | | |
| email3 | String(100) | Additional email address. Typically used for the Lead's home or personal email. | | |
| fax | String(20) | The primary fax number for the Lead. | | |
| fax2 | String(20) | An additional fax number for the Lead. | | |
| fax3 | String(20) | An additional fax number for the Lead. | | | | |
| firstName | String (50) | Lead's first name. | | |
| history | To-many association | IDs of LeadHistory entities associated with this Lead. | | |
| isDayLightSavingsTime | Boolean | Indicates whether the Lead's location is using Daylight Saving Time. | | |
| isDeleted | Boolean | Indicates whether this record has been marked as Deleted in the Bullhorn system. | X | |
| lastName | String (50) | Lead's last name | | |
| leadSource | String (15) | Source of the Lead. For example, LinkedIn, Facebook, Marketing, and so forth. | | |
| massMailOptOut | Boolean | Indicates whether the Lead has chosen not to be included in mass emails through the Bullhorn system | X | |
| middleName | String (50) | Lead's middle name. | | |
| mobile | String (20) | Lead's mobile (cellular) telephone number. | | |
| name | String | Lead's full name. Should be a combination of the firstName and lastName fields separated by a space. <br>**Notes:** If you create a Lead with no value in the name field, users have no way to select that Lead in the Bullhorn staffing application. If you create or modify a Lead name that is not a combination of the firstName and lastName fields, the name will be overwritten when a user saves the Lead in the Bullhorn staffing application. The name will change to a combination of the firstName and lastName fields. | | |
| namePrefix | String (5) | Lead's name prefix. For example Dr., Ms, Mr., and so forth. | | |
| nameSuffix | String (5) | Lead's name suffix. For example Jr. | | |
| nickName | String(50) | Lead's nickname. | | |
| notes | To-many association | IDs of Note entities associated with this Lead. | | |
| numEmployees | Integer | The number of employees associated with the Lead. | | |
| occupation | String(50) | Occupation of the Lead. | | |
| owner | To-one association | ID of the CorporateUser who is the owner of this Lead record. | X |
| ownerCorporation | To-one association | Corporation ID of the Lead's owner. | | |
| pager | String(20) | Lead's pager number. | | |
| phone | String (20) | Lead's primary telephone number. | | |
| phone2 | String(20) | Additional phone number for the Lead. | | |
| phone3 | String(20) | Additional phone number for the Lead. | | |
| preferredContact | String(15) | Preferred contact method of the Lead. | X |
| primarySkills | To-many association | Skills that are listed as the primary skills for this Lead. | | |
| priority | String(15) | Priority of the Lead. | | |
| referredByPerson | To-one association | Person who referred this Lead. | | |
| reportToPerson | To-one association | Person to whom this Lead reports. | | |
| role | String (255) | Role of the Lead. | | |
| salary | BigDecimal | The desired salary of the Lead. | | |
| salaryLow | BigDecimal | The lowest yearly salary the Lead would accept. | | |
| secondarySkills | To-many association | Skills that are listed as secondary skills for this Lead | | |
| skillSet | String | Text description of the Lead's skills. | | |
| smsOptIn | Boolean | Indicates whether the Lead has granted permission to be sent messages via SMS. | | |
| specialties | To-many association | IDs of the Specialties are associated with this Lead. | | |
| status | String (100) | Status of the lead; for example, New Lead, Active, Prospect, and so forth. Possible values can be configured using field maps. | X | |
| tearsheets | To-many association | IDs of Tearsheets associated with this Lead. | | |
| timeZoneOffsetEST | Integer | Indicates the number of hours by which the Lead's time zone differs from Eastern Standard Time. For example, Pacific Standard Time is -3, three hours earlier than Eastern Standard Time. | | |
| type | String(30) | Describes the type of Lead. For example, Staffing, RFP/VOR, etc. Possible values can be configured using the field maps. | X | |
| willRelocate | Boolean | Indicates whether or not a Lead is willing to relocate. | | |