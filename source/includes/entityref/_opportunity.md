# Opportunity

Represents a possible Opportunity which can be converted to a JobOrder.

| **Opportunity field** | **Type** | **Description** | **Not null** | **Read-Only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| actualCloseDate | Timestamp | Actual close date of the Opportunity. | | |
| address | Address | Address of the hiring company; when the Opportunity is created in the Bullhorn application, this data is pulled from the ClientContact record that is associated with this Opportunity. | | |
| appointments | To-many association | IDs of Appointments associated with this Opportunity. | | |
| assignedDate | Timestamp | Date the Opportunity was assigned to a CorporateUser. | | |
| assignedUsers | To-many association | CorporateUsers assigned to this Opportunity. | | |
| benefits | String | Text description of benefits offered with this Opportunity. | | |
| billRateCategoryID | Integer | ID of the client bill rate category. | | |
| bonusPackage | String | Text description of the bonus package offered with this Opportunity. | | |
| branchCode | String(100) | Code representing the corporate branch where this Opportunity is located. | | |
| businessSector | Integer | ID of the primary BusinessSector associated with this Opportunity. | | |
| businessSectors | To-many association | IDs of BusinessSectors associated with this Opportunity. | | |
| campaignSource | String(100) | Campaign source of this Opportunity. | | |
| category | Integer | ID of the primary Category associated with this Opportunity. | | |
| categories | To-many association | IDs of Categories associated with this Opportunity. | | |
| certifications | To-many association | Certifications needed for this Opportunity. | | |
| clientContact | To-one association | ClientContact associated with this Opportunity. | X | |
| clientCorporation | To-one association | ClientCorporation the ClientContact associated with this Opportunity is employed by. | X | |
| committed | Boolean | Indicates whether the Opportunity has been committed to. | | |
| customDate1-3 | BigDecimal | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1-3 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customInt1-3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customText1-20 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customTextBlock1-5 | String | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customObject1s to 10s | CustomObject | Fields to which custom objects can be assigned. For more information about custom objects, see the Bullhorn Resource Center and the following article on using the REST API with custom objects: http://developer.bullhorn.com/articles/customobjects](http://developer.bullhorn.com/articles/customobjects) | | |
| dateAdded | Timestamp | Date when this record was created in the Bullhorn system. | X | |
| dateLastModified | Timestamp | Date this record was last modified. | | |
| dealValue | BigDecimal | Deal value for this Opportunity. | | |
| degreeList | String | Degree requirements for this Opportunity. | | |
| description | String | Text description of this Opportunity. | | |
| educationDegree | String(50) | Education requirements for this Opportunity. | | |
| effectiveDate | Timestamp | Effective date of this Opportunity. | | |
| estimatedDuration | Double | Estimated duration of this Opportunity. | | |
| estimatedEndDate | Timestamp | Estimated date when this Opportunity will end (if applicable). | | |
| estimatedHoursPerWeek | Double | The estimated hours per week of this Opportunity. | | |
| estimatedStartDate | Timestamp | The estimated start date for this Opportunity. | X | |
| estimatedBillRate | BigDecimal | Estimated bill rate of this Opportunity. | | |
| expectedCloseDate | Timestamp | Expected close date of this Opportunity. | | |
| expectedFee | Double | Fee, expressed as a percentage, that will be paid by the ClientCorporation when the potential JobOrder is filled. | | |
| expectedParRate | BigDecimal | The expected pay rate of this Opportunity. | | |
| externalCategoryID | Integer | ID of the external category of this Opportunity. | | |
| externalID | String(30) | External identifier for the record, used for migrations and back-office integration. | | |
| history | To-many association | IDs of OpportunityHistory entities associated with this Opportunity. | | |
| ignoreUntilDate | Timestamp | The date, if any, until which to ignore this Opportunity. Allows you to ignore an Opportunity until a certain day/time. | | |
| isDeleted | Boolean | Indicates whether this record has been marked as Deleted in the Bullhorn system. | X | |
| isOpen | Boolean | Indicates whether this Opportunity is Open or Closed. | X | |
| jobOrders | To-many association | JobOrders that have been converted from this Opportunity. | | |
| lead | To-one association | Lead, if any, that is associated to this Opportunity. | | |
| markUpPercentage | Double | Percent of mark up for this Opportunity. | | |
| notes | To-many association | Notes associated with this Opportunity. | | |
| numOpenings | Integer | Number of openings of this Opportunity. | | |
| onSite | String(20) | Location requirements of this Opportunity. | | |
| optionsPackage | String | Options package of this Opportunity. | | |
| owner | To-one association | ID of CorporateUser who owns this Opportunity. | X | |
| priority | Integer | Priority of this Opportunity, for example, Cold, Cool, Medium, Warm, Hot. Stored in DB as Integer with display values configured in field maps. | | |
| publicDescription | String | Public description of this Opportunity. | | |
| publishedZip | String(18) | Published zip code of this Opportunity. | | |
| reasonClosed | String(255) | Text description of the reason this Opportunity was closed. | | |
| salary | BigDecimal | Salary offered for this Opportunity. | | |
| salaryUnit | String(12) | Salary unit represented by the range. For example, per hour, yearly, and so forth. | | |
| skillList | String | Comma-separated list of skills the applicants should have. | | |
| skills | To-many association | IDs of Skills associated with this Opportunity. | | |
| source | String (100) | Source of this Opportunity. For example, Existing Client, Internet Search, and so forth. | | |
| specialties | To-many association | IDs of Specialties associated with this Opportunity. | | |
| status | String (200) | Current status of this Opportunity. i.e. Prospective, Active, Lost to Competition, and so forth. | | |
| tasks | To-many association | Tasks associated with this Opportunity. | | |
| tearsheets | To-many association | Tearsheets associated with this Opportunity | | |
| title | String (100) | Opportunity title. | | |
| type | String (200) | Type of employment offered: for example, contract, permanent, and so forth. Determines which of the five Opportunity tracks are used. | X | |
| weightedDealValue | BigDecimal | Weighted deal value of this Opportunity. | | |
| willRelocate | Boolean | Indicates whether or not the company will provide relocation assistance for this Opportunity. | | |
| winProbabilityPercent | Double | Probability of winning this Opportunity. | | |
| yearsRequired | Integer | Minimum experience required for this Opportunity. | | |