# JobOrder

Represents an open job to be filled.

The JobOrder entity supports the massUpdate operations.

| **JobOrder field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| address | Address1 | Address of the hiring company; when the record is created in the Bullhorn application, this data is pulled from the client contact record.<ul><li>address1</li><li>address2</li><li>city</li><li>state</li><li>zip</li><li>countryID: options:<ul><li>value: 1</li><li>value: 2</li></ul></ul>Use the following REST call to get the list of countryIDs and labels: /meta/JobOrder?felds=address(countryID) | | |
| appointments | To-many association | Ids of Appointments associated with this job. | | |
| approvedPlacements | To-many association | Ids of the approved Placements associated with this job. | | |
| assignedUsers | To-many association | Internal users assigned to this job. | | |
| benefits | String | Text description of benefits offered with this job. | | |
| billRateCategoryID | Integer | Id of the client bill rate category. | | |
| bonusPackage | String | Text description of the bonus package offered with this job. | | |
| branchCode | String (100) | Code representing the corporate branch where the job is located. | | |
| businessSectors | To-many association | Ids of BusinessSectors associated with this job. | | |
| categories | To-many association | Ids of Categories associated with this job. | | |
| certificationList | String | List of Certifications that an applicant should have. | | |
| certifications | To-many association | Certifications that applicants should have. | | |
| clientBillRate | BigDecimal | Amount to be billed to the client for this job when it is filled. | | |
| clientContact | To-one association | ClientContact associated with this job. | X | |
| clientCorporation | To-one association | Hiring company. | X | |
| correlatedCustom-Date1-3 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| correlatedCustom-Float1-3 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| correlatedCustomInt1-3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| correlatedCustomText1-10 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| correlatedCustom-TextBlock1-3 | String | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| costCenter | String (30) | Name of the cost center associated with this job. This cost center flows to the placement record and drives invoice grouping (placements with the same cost center for the same client will be grouped together) | | |
| customDate1-3 | BigDecimal | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1-3 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customInt1-3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customObject1s to 10s | CustomObject | Fields to which custom objects can be assigned. For more information about custom objects, see the Bullhorn Resource Center and the following article on using the REST API with custom objects: [http://developer.bullhorn.com/articles/customobjects](http://developer.bullhorn.com/articles/customobjects) | | |
| customText1-20 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customTextBlock1-5 | String | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| dateAdded | Timestamp | Date when this record was created in the Bullhorn system. | X | |
| dateClosed | Timestamp | Date when the job was marked as closed. | | |
| dateEnd | Timestamp | Date when the job will end (if applicable). | | |
| dateLastExported | Timestamp | Date when the job was last exported. | | |
| dateLastModified | Timestamp | Date on which the job was last modified. | | |
| degreeList | String | List of educational degrees required for this job. | | |
| description | String (200000) | Text description of the job. | | |
| durationWeeks | Double | Expected duration the job. For a permanent position, this is null. | | |
| educationDegree | String (50) | Required degree for the job. | | |
| employmentType | String (200) | Type of employment offered: for example, contract, permanent, and so forth. Determines which of the five job types are used. | X | |
| externalCategoryID | Integer | Category exposed on public job postings to the web. | | |
| externalID | String (30) | Used for migrations or for the job's external/back-office identification number. | | |
| feeArrangement | Double | Fee, expressed as a percentage, that will be paid by the ClientCorporation when the job is filled. | | |
| hoursOfOperation | String (30) | Hiring company's hours of operation. | | |
| hoursPerWeek | Double | Number of hours per week that the employee will work. | | |
| Interviews | To-many association | Ids of interview Appointments associated with this job. | | |
| isClientEditable | Boolean | Indicates whether a ClientContact can modify the job via the Bullhorn system. | | |
| isDeleted | Boolean | Indicates whether this record is marked as deleted in the Bullhorn system. | | |
| isInterviewRequired | Boolean | Indicates whether applicants are required to Interview for the job. | | |
| isJobcastPublished | Boolean | Indicates whether the job was published through Jobcast. | | |
| isOpen | Boolean | Indicates whether the job is open. | | |
| isPublic | Boolean | Controls whether a job appears on the Bullhorn job board (if in use). Only 3 values allows, -1, 0, 1. | | |
| jobBoardList | String | List of job boards on which this job has been posted. | | |
| notes | To-many association | Ids of Notes associated with this job. | | |
| numOpenings | Integer | Number of openings to be filled for this job. | | |
| onSite | String (20) | Location requirements; for example, on-site, off-site, no preference. | | |
| Opportunity | To-one association | Opportunity with which this JobOrder is associated. | | |
| optionsPackage | String | Text description of the stock options package offered with this job. | | |
| owner | To-one association | CorporateUser who owns this job. The default value is user who creates the JobOrder. | X | |
| payRate | BigDecimal | Pay rate offered with this job. | | |
| placements | To-many association | Ids of Placements associated with this job. | | |
| publicDescription | String (200000) | Description of this job for use on public job boards. | | |
| publishedZip | String (18) | Published Zip Code of the job location. | | |
| reasonClosed | String | Text description of the reason this job was closed, if applicable. | | |
| reportTo | String (100) | Name and/or title of the person this job will report to. | | |
| reportToClientContact | To-one association | ClientContact this job reports to. | | |
| responseUser | To-one association | CorporateUser to whom submissions should be sent. |
| salary | BigDecimal | Salary offered for this job. | | |
| salaryUnit | String (12) | Salary unit represented by the range (for example, per hour, yearly). | | |
| sendouts | To-many association | Ids of Sendouts associated with this job. | | |
| skillList | String | Comma-separated list of skills the applicants should have. | | |
| skills | To-many association | Ids of Skills associated with this job. | | |
| source | String (100) | Source of the job. | | |
| startDate | Timestamp | Desired start date for the position. The default value is 12 AM on day record is added. | X | |
| status | String (200) | Current status of the Job Order. Examples: Accepting Candidates, Currently Interviewing, Covered, Offer Out, Placed | | |
| submissions | To-many association | Ids of JobSubmissions associated with this job. | | |
| tasks | Task | Tasks associated with this job. | | |
| taxRate | Double | Rate (percentage) at which the person hired for this job will be taxed. | | |
| taxStatus | String (20) | Tax Status, for example, 1099, W-2, and so forth. | | |
| tearsheets | To-many association | Ids of Tearsheets with which this JobOrder is associated. | | |
| title | String (100) | Job title. | | |
| travelRequirements | String (50) | Text description of the amount of travel required for this job. | | |
| type | Integer | Job type, for example, Cold, Cool, Medium, Warm, Hot. Stored in DB as Integer with display values configured in field maps. | | |
| usersAssigned | String() | Comma-separated list of user IDs that represent a horizontal view of the assignedUsers list. | | |
| willRelocate | Boolean | Indicates whether the hiring company will provide relocation assistance. | | |
| willSponsor | Boolean | Indicates whether the hiring company is willing to sponsor an employee on a work visa. | | |
| yearsRequired | Integer | Number of years of experience required for the job. | | |