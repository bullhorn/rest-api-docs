# Candidate

Represents a person seeking a job.

The Candidate entity supports the [massUpdate](#get-massupdate) operations.

| **Candidate field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| address | Address | Candidate address:<ul><li>address1</li><li>address2</li><li>city</li><li>state</li><li>zip</li><li>countryID: options:<ul><li>value: 1</li><li>value: 2</li></ul></ul>Use the following REST call to get the list of countryIDs and labels: /meta/Candidate?fields=address(countryID) | | |
| businessSectors | To-many association | Ids of BusinessSectors with which Candidate is associated. | | |
| candidateSource | To-one association | Source of the Candidate. |   X | |
| category | To-one association | Candidate's primary Category. The default value is the Other Area(s) category for the user’s private label or the first Category. **Note:** This property refers to the original category assigned to the Candidate. To retrieve or update categories for the Candidate, you should use the categories associations (see below). | X | |
| categories | To-many association | Categories assigned to Candidate. | | |
| certifications | String | Candidate's certifications. | | |
| comments | String | Free-text comments on Candidate. | X | |
| companyName | String (100) | Name of company where the Candidate currently works. | | |
| companyURL | String (100) | Candidate's personal URL. | | |
| customDate1 to 3 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1 to 3 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customInt1 to 3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customObject1s to 10s | CustomObject | Fields to which custom objects can be assigned. For more information about custom objects, see the Bullhorn Resource Center and the following article on using the REST API with custom objects: [http://developer.bullhorn.com/articles/customobjects](http://developer.bullhorn.com/articles/customobjects) | | |
| customText1 to 20 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customTextBlock1 to 5 | String | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| dateAdded | Timestamp | Date on which this record was created in the Bullhorn system. | X | X |
| dateAvailable | Timestamp | Date on which Candidate will be available to begin work. | | |
| dateAvailableEnd | Timestamp | Date on which Candidate's availability will end, if applicable. | | |
| dateI9Expiration | Timestamp | Date on which the Candidate's I9 form will expire. | | |
| dateLastComment | Timestamp | Date of the most recent Note referencing Candidate. | | |
| dateLastModified | Timestamp | Date the Candidate was last modified. | | |
| dateNextCall | Timestamp | Date when the Candidate should next be called. | | |
| dateOfBirth | Timestamp | Candidate's date of birth. | | |
| dayRate | BigDecimal | Candidate's desired per-day pay rate. | | |
| dayRateLow | BigDecimal | Lowest per-day rate the Candidate will accept. | | |
| degreeList | String | List of Candidate's educational degrees. Field on the edit screen, not the field in People Template. | | |
| description | String | Text field, usually used to contain the Candidate's resume. | | |
| desiredLocations | String | Locations where Candidate would like to work. | | |
| disability | String (1) | Indicates whether Candidate has a disability. Allowable values can be configured using field maps. Default values are U (Unknown), Y (Yes), and N (No). | | |
| educationDegree | String | Candidate's highest level of education. | | |
| email | String (100) | Candidate's email address. | | |
| email2 | String (100) | Additional email address. | | |
| email3 | String (100) | Additional email address. | | |
| employeeType | String (30) | Candidate's employee type: for example 1099 or W2. | X | |
| employmentPreference | String (200) | Indicates type of employment the Candidate would prefer: for example, permanent, part-time, and so forth. |
| ethnicity | String (50) | Candidate's ethnicity. | | |
| experience | Integer | Number of years of experience that the Candidate has. | | |
| externalID | String (50) | Used for records migrated in from other systems; often used for the Candidate's external/backoffice Id. |
| fax | String (20) | Candidate's fax number. | | |
| fax2 | String (20) | Additional fax number. | | |
| fax3 | String (20) | Additional fax number. | | |
| federalAdditionalWitholdingsAmount | BigDecimal | Number of federal withholdings the Candidate has selected on his or her W-2 tax form. | | |
| federalExemptions | Integer | Number of federal exemptions the Candidate has indicated on his or her W-2 tax form. | | |
| federalFilingStatus | String | Candidate's federal tax filing status. | | |
| firstName | String (50) | Candidate's first name. | X | |
| gender | String (6) | Candidate's gender. | | |
| hourlyRate | BigDecimal | Candidate's desired hourly pay rate. | | |
| hourlyRateLow | BigDecimal | Lowest hourly pay rate the Candidate will accept. | | |
| i9OnFile | Integer | Indicates whether Candidate's I-9 form has already been filled out and is on file. | | |
| interviews | To-many association | Interviews for Candidate. This field is populated when you create Appointments where Appointment.candidate is this Candidate and Appointment.type is “Interview”. | X | |
| isDeleted | Boolean | Indicates whether this record is marked as deleted in the Bullhorn system. | X | |
| isEditable | Boolean | Indicates whether Candidate can edit his or her profile information; applicable to Candidate/Client login. | X |
| lastName | String (50) | Candidate's last name. | X | |
| leads | To-many association | Leads associated with this Candidate. | | |
| linkedPerson | To-one association | If person represented by Candidate is also a ClientContact, this field includes the following ClientContact fields: id, _subtype | | |
| localAddtionalWitholdingsAmount | BigDecimal | Number of local withholdings the Candidate has selected on his or her W-2 tax form. | | |
| localExemptions | Integer | Number of local exemptions Candidate has indicated on his or her W-2 tax form. | | |
| localFilingStatus | String | Candidate's local tax filing status. | | |
| localTaxCode | String | Candidate's local tax code (if local taxes apply); not required. | | |
| massMailOptOut | Boolean | Indicates whether Candidate has chosen not to be included in mass emails through the Bullhorn system. | | |
| middleName | String (50) | Candidate's middle name. | | |
| mobile | String (20) | Candidate's mobile (cell) telephone number. | | |
| name | String | Candidate's full name. If setting firstname or lastname, you must also set this field; it does not populate automatically. | X | |
| namePrefix | String (5) | Candidate's name prefix, for example Dr., Ms., Mr., and so forth. | | |
| nameSuffix | String (5) | Candidate's name suffix, for example Jr. | | |
| nickName | String | Candidate's nickname. | | |
| numCategories | Integer | Number of Category objects associated with Candidate. | | |
| numOwners | Integer | Number of CorporateUsers that are listed as owner of Candidate. | | |
| occupation | String (50) | Candidate's current occupation or job title. | | |
| owner | To-one association | CorporateUser who is the primary owner of Candidate. The default value is user who creates the Candidate. | X | |
| pager | String (20) | Candidate's pager number. | | |
| paperWorkOnFile | String | Configurable field that tracks whether the Candidate's tax paperwork has been received. | | |
| password | String | Candidate’s password. The default value is a randomly generated string. | X | |
| phone | String (20) | Candidate's home telephone number. | | |
| phone2 | String (20) | Candidate's telephone number at work. | | |
| phone3 | String (20) | Alternate telephone number. | | |
| placements | To-many association | Placements for Candidate. This field is populated when you create Placements where Placement.candidate is this Candidate. | X | |
| preferredContact | String (15) | Candidate's preferred method of contact (for example, phone, email, and so forth.) | X | |
| primarySkills | To-many association | Skills that are listed as primary Skills for Candidate. | | |
| recentClientList | String | List of ClientCorporations for which Candidate has worked. | | |
| referredBy | String (50) | Name of person who referred Candidate. | | |
| referredByPerson | To-one association | Person who referred Candidate, if applicable. | | |
| salary | BigDecimal | Candidate's desired yearly salary. | | |
| salaryLow | BigDecimal | Lowest yearly salary the Candidate will accept. | | |
| secondaryAddress | Address | Candidate's work address:<ul><li>address1</li><li>address2</li><li>city</li><li>state</li><li>zip</li><li>countryID: options:<ul><li>value: 1</li><li>value: 2</li></ul></ul>Use the following REST call to get the list of countryIDs and labels: /meta/Candidate?fields=address(countryID) | | |
| secondaryOwners | To-many association | CorporateUsers who are additional owners of Candidate. | | |
| secondarySkills | Skill | Skills that are listed as secondary skills for Candidate. | | |
| sendouts | To-many association | Sendouts for Candidate. This field is populated when you create Sendouts where the Sendout.candidate is this Candidate. | | |
| skillSet | String | Text description of Candidate's skills. | | |
| smsOptIn | Boolean | Indicates whether Candidate has granted permission to be sent messages via SMS. | | |
| source | String (200) | Candidate source: for example, Advertisement, Client Referral, LinkedIn, Monster.com, and so forth. Allowable values can be configured using field maps. | | |
| specialties | To-many association | Candidate’s specialty skills. This field is populated when you associate a Specialty with this Candidate in [a to-many association](#create-to-many-associations) operation. | | |
| ssn | String (18) | Candidate's Social Security Number. Check field map for proper format. | | |
| stateAddtionalWitholdingsAmount | BigDecimal | Number of state withholdings Candidate has selected on his or her W-2 tax form. | | |
| stateExemptions | Integer | Number of state exemptions Candidate has indicated on W-2 tax form. | | |
| stateFilingStatus | String | Candidate's state tax filing status. | | |
| status | String (100) | Candidate status with company: for example, New Lead, Active, Offer Pending, Placed, and so forth. Allowable values can be configured using field maps. | X | |
| submissions | To-many association | JobSubmissions for Candidate. This field is populated when you create JobSubmissions where JobSubmission.candidate is this Candidate. | X | |
| tasks | To-many association | Tasks associated with Candidate. This field is populated when you create Tasks where Task.candidate is this Candidate. | | |
| taxID | String (18) | Id that Candidate uses for tax purposes if not SSN. | | |
| taxState | String | State in which Candidate pays taxes. | | |
| timeZoneOffsetEST | Integer | Indicates the number of hours by which the Candidate's time zone differs from Eastern Standard Time. For example, Pacific Standard Time is -3, three hours earlier than Eastern. | | |
| travelLimit | Integer | Maximum distance Candidate is willing to travel. | | |
| type | String (100) | Candidate type: for example, Active, Passive, and so forth. | | |
| userDateAdded | Timestamp | Date the record was added to the system. | X | |
| username | String | Candidate’s username for logging in to Bullhorn. The default value is _[random number] | X | |
| veteran | String (1) | Indicates whether Candidate is a veteran: Y for yes, N for no, or U for unknown. | | |
| webResponse | To-many association | Web responses for Candidate. This field is populated when you create JobSubmissions where JobSubmission.candidate is this Candidate and JobSubmission.status is “New Lead”. | | |
| willRelocate | Boolean | Indicates whether Candidate is willing to relocate for a position. | | |
| workAuthorized | Boolean | Indicates whether Candidate is authorized to work in the U.S. | | |
| workPhone | String (20) | Candidate's telephone number at work. | | | |

## Candidate confidential fields

By default, candidate fields listed in the ‘Confidential Fields’ private label attribute are returned with the value “\*\*CONFIDENTIAL\*\*”. However, confidential fields can also be included in the ‘Candidate Viewable Confidential Fields’ private label attribute. Only users with the ‘View Candidate Viewable Confidential Fields’ user action entitlement can view candidate viewable confidential fields.

User who have both the ‘View Candidate Viewable Confidential Fields’ and ‘Edit Confidential Fields’ user action entitlements can edit candidate viewable confidential fields.