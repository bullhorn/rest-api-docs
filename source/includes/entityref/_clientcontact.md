# ClientContact

Represents a contact person who works at a ClientCorporation. A ClientContact can be any person at the ClientCorporation whom you wish to track in the Bullhorn system: a hiring manager, HR staffer, executive, or other employee. Note that a Candidate may become a Client Contact after being placed in a job; or a ClientContact may become a Candidate after deciding to look for another position.

The ClientContact entity supports the massUpdate operations.

| **ClientContact field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| address | Address | Contact's  address:<ul><li>address1</li><li>address2</li><li>city</li><li>state</li><li>zip</li><li>countryID: options:<ul><li>value: 1</li><li>value: 2</li></ul></ul>Use the following REST call to get the list of countryIDs and labels:/meta/ClientContact?fields=address(countryID) | | |
| businessSectors | To-many association | Ids of BusinessSectors in which the Contact operates. | | |
| category | To-one association | Contact's primary Category. The default value is the Other Area(s) category for the user’s private label or the first Category. | X | |
| categories | To-many association | Ids of the Categories associated with the Contact. Note that the categoryId property is used to store the contact's primary Category, while this association hold that Category and any other Categories to which the Contact belongs. | | |
| certifications | String | Contact's certifications. | | |
| clientCorporation | To-one association | ClientCorporation for which the Contact works. | X | |
| comments | String | Free-text comments on this Contact. | | |
| customDate1-3 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1-3 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customInt1-3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customObject1s to 10s | CustomObject | Fields to which custom objects can be assigned. For more information about custom objects, see the Bullhorn Resource Center and the following article on using the REST API with custom objects: [http://developer.bullhorn.com/articles/customobjects](http://developer.bullhorn.com/articles/customobjects) | | |
| customText1-20 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customTextBlock1-5 | String | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| dateAdded | Timestamp | Date on which this record was created in the Bullhorn system. | X | |
| dateLastModified | Timestamp | Date on which the ClientContact was last modified. | | |
| dateLastVisit | Timestamp | Date of ClientContact’s last visit. | | |
| description | String | Large text field for additional information about the contact. | | |
| desiredCategories | String | Categories that the ClientContact wants Candidates to belong to. | | |
| desiredSkills | String | Skills that the ClientContact wants his or her Candidates to have. | | |
| desiredSpecialties | String | Specialties that the ClientContact wants his or her Candidates to have. | | |
| division | String (40) | Department that the Contact is associated with. | | |
| email | String (60) | ClientContact's primary (work) email address. | X | |
| email2 | String (100) | Additional email address. Typically used for the ClientContact’s home or personal email. | | |
| email3 | String (100) | Additional email address. | | |
| externalID | String (30) | External identifier for the record, used for migrations and back-office Integration. | | |
| fax | String (20) | ClientContact's primary (work) fax number. | | |
| fax2 | String (20) | Additional fax number. Typically used for the contact's home or personal fax. | | |
| fax3 | String (20) | Additional fax number. | | |
| firstName | String (50) | ClientContact's first name. | | |
| isDayLightSavings | Boolean | Indicates whether the ClientContact's location is using Daylight Saving Time. | | |
| isDeleted | Boolean | Indicates whether this record has been marked as deleted in the Bullhorn system. | X | |
| lastName | String (50) | ClientContact's last name. | | |
| leads | To-many association | Leads associated with this ClientContact. | | |
| linkedPerson | Person (superclass of Candidate and ClientContact) | If the person represented by this ClientContact is also a Candidate, this field includes the following Candidate fields: id, _subtype | | |
| massMailOptOut | Boolean | Indicates whether the Contact has chosen not to be included in mass emails through the Bullhorn system. | X | |
| middleName | String (50) | ClientContact's middle name. | | |
| mobile | String (20) | ClientContact's mobile (cellular) telephone number. | | |
| name | String | ClientContact's full name. Should be a combination of the firstName and lastName fields separated by a space. **Notes:** If you create a ClientContact with no value in the name field, users will have no way to select that ClientContact in the Bullhorn staffing application. If you create or modify a ClientContact name that is not a combination of the firstName and lastName fields, the name will be overwritten when a user saves the ClientContact in the Bullhorn staffing application. The name will change to a combination of the firstName and lastName fields. | | |
| namePrefix | String (5) | ClientContact's name prefix, for example Dr., Ms, Mr., and so forth. | | |
| nameSuffix | String (5) | ClientContact's name suffix, for example Jr. | | |
| nickName | String | ClientContact's nickname. | | |
| numEmployees | Integer | Number of employees who report to this Contact. | X | |
| occupation | String (50) | ClientContact's job title. | | |
| office | String (40) | For companies with multiple locations, this field can be used to indicate which office this contact works out of. | | |
| owner | To-one association | CorporateUser who is the owner of this Contact record. The default value is user who creates the ClientContact. | X | |
| pager | String (20) | ClientContact's pager number. | | |
| password | String | ClientContact's password for logging in to Bullhorn. The default value is a randomly generated string. | X | |
| phone | String (20) | ClientContact's primary (work) telephone number. | | |
| phone2 | String (20) | Alternate phone number. Typically used for the contact's home phone number. | | |
| phone3 | String (20) | Alternate phone number. | | |
| preferredContact | String (15) | Contact's preferred method of contact (For example, phone, email, and so forth.) | X | |
| referredByPerson | Person | Person who referred this ClientContact. | | |
| reportToPerson | Person | Person to whom this ClientContact reports. | | |
| secondaryAddress | Address | ClientContact's secondary (home)  address:<ul><li>address1</li><li>address2</li><li>city</li><li>state</li><li>zip</li><li>countryID: options:<ul><li>value: 1</li><li>value: 2</li></ul></ul>Use the following REST call to get the list of countryIDs and labels: /meta/ClientContact?fields=address(countryID). | | |
| secondaryOwners | To-many association | Ids of internal users who are secondary owners of this Contact. Note that the owner property is used to store the ClientContact’s primary owner, while this association hold that person and any other owners of the Contact. | | |
| skills | To-many association | Ids of Skills that the ClientContact wants Candidates to have. | | |
| smsOptIn | Boolean | Indicates whether the ClientContact has granted permission to be sent messages via SMS. | | |
| source | String (200) | Source from which this ClientContact was found. | | |
| status | String (30) | Status of the contact; for example, New Lead, Active, Prospect, and so forth. Possible values can be configured using field maps. | X | |
| timeZoneOffsetEST | Integer | Indicates the number of hours by which the ClientContact's time zone differs from Eastern Standard Time. For example, Pacific Standard Time is -3, three hours earlier than Eastern. | | |
| type | String (30) | Describes the type of ClientContact (for example, Primary, Secondary, Target, Gatekeeper). Possible values can be configured using field maps. | X | |
| username | String | ClientContact's username for logging in to Bullhorn. The default value is _[random number] | X | |