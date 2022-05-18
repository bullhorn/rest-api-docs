# JobOrder

Represents an open job to be filled.

The JobOrder entity supports the massUpdate operations.

<table>
    <colgroup>
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
    </colgroup>
    <thead>
        <tr class="header">
            <th>JobOrder fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>id</td>
            <td>Integer</td>
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>address</td>
            <td>COMPOSITE</td>
            <td>Address of the hiring company; when the record is created in the Bullhorn application, this data is pulled from the client contact record.<ul><li>address1</li><li>address2</li><li>city</li><li>state</li><li>zip</li><li>countryID: options:<ul><li>value: 1</li><li>value: 2</li></ul></ul>Use the following REST call to get the list of countryIDs and labels:<br>/meta/JobOrder?felds=address(countryID)</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>appointments</td>
            <td>To-many association</td>
            <td>Appointments associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>approvedPlacements</td>
            <td>To-many association</td>
            <td>Approved Placements associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>assignedUsers</td>
            <td>To-many association</td>
            <td>Internal users assigned to the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>benefits</td>
            <td>String (2147483647)</td>
            <td>Text description of benefits offered with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billRateCategoryID</td>
            <td>Integer</td>
            <td>Id of the client bill rate category.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billingProfile</td>
            <td>To-one Association</td>
            <td>BillingProfile</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>bonusPackage</td>
            <td>String (2147483647)</td>
            <td>Text description of the bonus package offered with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>branch</td>
            <td>To-one Association</td>
            <td>Branch associated with the JobOrder.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>branchCode</td>
            <td>String (100)</td>
            <td>Code representing the corporate branch where the JobOrder is located.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>businessSectors</td>
            <td>To-many association</td>
            <td>BusinessSectors associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>categories</td>
            <td>To-many association</td>
            <td>Categories associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>certificationGroups</td>
            <td>To-many association</td>
            <td>CertificationGroups associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>certificationList</td>
            <td>String (255)</td>
            <td>List of Certifications that a Candidate should have.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>certifications</td>
            <td>To-many association</td>
            <td>Certifications that Candidates should have.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>clientBillRate</td>
            <td>BigDecimal</td>
            <td>Amount to be billed to the client for the JobOrder when it is filled.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>clientContact</td>
            <td>To-one Association</td>
            <td>ClientContact associated with the JobOrder.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>clientCorporation</td>
            <td>To-one Association</td>
            <td>Hiring company associated with the JobOrder.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>clientCorporationLine</td>
            <td>To-one Association</td>
            <td>AgreementLine associated with the JobOrder.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>correlatedCustomDate1-3</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomFloat1-3</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>correlatedCustomInt1-3</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
         <tr class="odd">
            <td>correlatedCustomText1-10</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomTextBlock1-3</td>
            <td>String (2147483647)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>costCenter</td>
            <td>String (30)</td>
            <td>Name of the cost center associated with the JobOrder. This cost center flows to the placement record and drives invoice grouping. Placements with the same cost center for the same client will be grouped together.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customDate1-3</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customFloat1-3</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customInt1-8</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customText1-40</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customTextBlock1-5</td>
            <td>String (2147483647)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date when this record was created in the Bullhorn system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateClosed</td>
            <td>Timestamp</td>
            <td>Date when the JobOrder was marked as closed.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateEnd</td>
            <td>Timestamp</td>
            <td>Date when the JobOrder will end (if applicable).</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateLastExported</td>
            <td>Timestamp</td>
            <td>Date when the JobOrder was last exported.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date on which the JobOrder was last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastPublished</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>degreeList</td>
            <td>String (2147483647)</td>
            <td>List of educational degrees required for the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>description</td>
            <td>String (2147483647)</td>
            <td>Text description of the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>durationWeeks</td>
            <td>Double</td>
            <td>Expected duration the JobOrder. For a permanent position, this is null.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>educationDegree</td>
            <td>String (50)</td>
            <td>Required degree for the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>employmentType</td>
            <td>String (200)</td>
            <td>Type of employment offered: for example, contract, permanent, and so forth. Determines which of the five JobOrder types is used.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>externalCategoryID</td>
            <td>Integer</td>
            <td>Category exposed on public JobOrder postings to the web.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>externalID</td>
            <td>String (100)</td>
            <td>Used for migrations or for the JobOrder's external/back-office identification number.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>feeArrangement</td>
            <td>Double</td>
            <td>Fee, expressed as a percentage, that will be paid by the ClientCorporation when the JobOrder is filled.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>fileAttachments</td>
            <td>To-many association</td>
            <td>JobOrderFileAttachment associated with the JobOrder.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>hoursOfOperation</td>
            <td>String (30)</td>
            <td>Hiring company's hours of operation.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>hoursPerWeek</td>
            <td>Double</td>
            <td>Number of hours per week that the employee will work.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>interviews</td>
            <td>To-many association</td>
            <td>Appointments associated with the JobOrder.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isClientEditable</td>
            <td>Boolean</td>
            <td>Indicates whether a ClientContact can modify the JobOrder via the Bullhorn system.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Indicates whether this record is marked as deleted in the Bullhorn system.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isInterviewRequired</td>
            <td>Boolean</td>
            <td>Indicates whether applicants are required to Interview for the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isJobcastPublished</td>
            <td>Boolean</td>
            <td>Indicates whether the JobOrder was published through Jobcast.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isOpen</td>
            <td>Boolean</td>
            <td>Indicates whether the JobOrder is open.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isPublic</td>
            <td>Integer</td>
            <td>Controls whether a JobOrder appears on the Bullhorn job board (if in use). Only 3 values allows, -1, 0, 1.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobBoardList</td>
            <td>String (2147483647)</td>
            <td>List of job boards on which the JobOrder has been posted.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jobCode</td>
            <td>To-one Association</td>
            <td>JobCode</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>jobOrderIntegrations</td>
            <td>To-many association</td>
            <td>JobOrderIntegration</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>location</td>
            <td>To-one Association</td>
            <td>Location</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>markUpPercentage</td>
            <td>Double</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>notes</td>
            <td>To-many association</td>
            <td>Notes associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>numOpenings</td>
            <td>Integer</td>
            <td>Number of openings to be filled for the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>onSite</td>
            <td>String (20)</td>
            <td>Location requirements; for example, on-site, off-site, no preference.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>opportunity</td>
            <td>To-one Association</td>
            <td>Opportunity associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>optionsPackage</td>
            <td>String (2147483647)</td>
            <td>Text description of the stock options package offered with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To-one Association</td>
            <td>CorporateUser who owns the JobOrder. The default value is user who creates the JobOrder.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payRate</td>
            <td>BigDecimal</td>
            <td>Pay rate offered with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>placements</td>
            <td>To-many association</td>
            <td>Placements associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>publicDescription</td>
            <td>String (2147483647)</td>
            <td>Description of the JobOrder for use on public job boards.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>publishedCategory</td>
            <td>To-one Association</td>
            <td>Category</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>publishedZip</td>
            <td>String (18)</td>
            <td>Published ZIP code of the job location.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>reasonClosed</td>
            <td>String (2147483647)</td>
            <td>Text description of the reason the JobOrder was closed, if applicable.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>reportTo</td>
            <td>String (100)</td>
            <td>Name and/or title of the person the JobOrder will report to.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>reportToClientContact</td>
            <td>To-one Association</td>
            <td>ClientContact the JobOrder reports to.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>responseUser</td>
            <td>To-one Association</td>
            <td>CorporateUser to whom submissions should be sent.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>salary</td>
            <td>BigDecimal</td>
            <td>Salary offered for the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>salaryUnit</td>
            <td>String (12)</td>
            <td>Salary unit represented by the range (for example, per hour, yearly).</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>sendouts</td>
            <td>To-many association</td>
            <td>Sendouts associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>shift</td>
            <td>To-one Association</td>
            <td>Shift</td>
            <td>Deprecated. Shift associated with the JobOrder.</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>shifts</td>
            <td>To-many association</td>
            <td>Deprecated. Shifts associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>skillList</td>
            <td>String (2147483647)</td>
            <td>Comma-separated list of skills the applicants should have.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>skills</td>
            <td>To-many association</td>
            <td>Skills associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>source</td>
            <td>String (100)</td>
            <td>Source of the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>specialties</td>
            <td>To-many association</td>
            <td>Specialties associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>startDate</td>
            <td>Timestamp</td>
            <td>Desired start date for the position. The default value is 12 AM on day record is added.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>status</td>
            <td>String (200)</td>
            <td>Current status of the Job Order. Examples: Accepting Candidates, Currently Interviewing, Covered, Offer Out, Placed</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>submissions</td>
            <td>To-many association</td>
            <td>JobSubmissions associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>tasks</td>
            <td>To-many association</td>
            <td>Tasks associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>taxRate</td>
            <td>Double</td>
            <td>Rate (percentage) at which the person hired for the JobOrder will be taxed.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>taxStatus</td>
            <td>String (20)</td>
            <td>Tax Status, for example, 1099, W-2, and so forth.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>tearsheets</td>
            <td>To-many association</td>
            <td>Tearsheets associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>timeUnits</td>
            <td>To-many association</td>
            <td>TimeUnits associated with the JobOrder.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>title</td>
            <td>String (100)</td>
            <td>Job title.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>travelRequirements</td>
            <td>String (50)</td>
            <td>Text description of the amount of travel required for the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>type</td>
            <td>Integer</td>
            <td>Job type, for example, Cold, Cool, Medium, Warm, Hot. Stored in DB as Integer with display values configured in field maps.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>usersAssigned</td>
            <td>String (0)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>webResponses</td>
            <td>To-many association</td>
            <td>Web responses associated with the JobOrder. This field is populated when you create JobSubmissions where JobSubmission.status is “New Lead”.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>willRelocate</td>
            <td>Boolean</td>
            <td>Indicates whether the hiring company will provide relocation assistance.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>willRelocateInt</td>
            <td>Integer</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>willSponsor</td>
            <td>Boolean</td>
            <td>Indicates whether the hiring company is willing to sponsor an employee on a work visa.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>workersCompRate</td>
            <td>To-one Association</td>
            <td>WorkersCompensationRate entity associated with the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>yearsRequired</td>
            <td>Integer</td>
            <td>Number of years of experience required for the JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
