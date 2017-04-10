# JobOrder

Represents an open job to be filled.

The JobOrder entity supports the [massUpdate](#get-massupdate) operations.

<table>
<thead>
<tr class="header">
<th><p><strong>JobOrder</strong></p>
<p><strong>field</strong></p></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
<th><strong>Not null</strong></th>
<th><strong>Read-only</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>id</td>
<td>Integer</td>
<td>Unique identifier for this entity.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>address</td>
<td>Address1</td>
<td><p>Address of the hiring company; when the record is created in the Bullhorn application, this data is pulled from the client contact record.</p>
<ul>
<li><p>address1</p></li>
<li><p>address2</p></li>
<li><p>city</p></li>
<li><p>state</p></li>
<li><p>zip</p></li>
<li><p>countryID:</p></li>
</ul>
<blockquote>
<p>options:<br />
value: 1<br />
value: 2</p>
</blockquote>
<p>Use the following REST call to get the list of countryIDs and labels:</p>
<p>/meta/JobOrder?<br />
fields=address(countryID)</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>appointments</td>
<td>To-many association</td>
<td>Ids of Appointments associated with this job.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>approvedPlacements</td>
<td>To-many association</td>
<td>Ids of the approved Placements associated with this job.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>assignedUsers</td>
<td>To-many association</td>
<td>Internal users assigned to this job.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>benefits</td>
<td>String</td>
<td>Text description of benefits offered with this job.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>billRateCategoryID</td>
<td>Integer</td>
<td>Id of the client bill rate category.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>bonusPackage</td>
<td>String</td>
<td>Text description of the bonus package offered with this job.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>branchCode</td>
<td>String (100)</td>
<td>Code representing the corporate branch where the job is located.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>businessSectors</td>
<td>To-many association</td>
<td>Ids of BusinessSectors associated with this job.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>categories</td>
<td>To-many association</td>
<td>Ids of Categories associated with this job.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>certificationList</td>
<td>String</td>
<td>List of Certifications that an applicant should have.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>certifications</td>
<td>To-many association</td>
<td>Certifications that applicants should have.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>clientBillRate</td>
<td>BigDecimal</td>
<td>Amount to be billed to the client for this job when it is filled.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>clientContact</td>
<td>To-one association</td>
<td>ClientContact associated with this job.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>clientCorporation</td>
<td>To-one association</td>
<td>Hiring company.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>correlatedCustom-Date1-3</td>
<td>Timestamp</td>
<td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>correlatedCustom-Float1-3</td>
<td>Double</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>correlatedCustomInt1-3</td>
<td>Integer</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>correlatedCustomText1-10</td>
<td>String (100)</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>correlatedCustom-TextBlock1-3</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>costCenter</td>
<td>String (30)</td>
<td>Name of the cost center associated with this job. This cost center flows to the placement record and drives invoice grouping (placements with the same cost center for the same client will be grouped together)</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customDate1-3</td>
<td>BigDecimal</td>
<td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customFloat1-3</td>
<td>Double</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customInt1-3</td>
<td>Integer</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customObject1s to 10s</td>
<td>CustomObject</td>
<td>Fields to which custom objects can be assigned. For more information about custom objects, see the Bullhorn Resource Center and the following article on using the REST API with custom objects:<br />
<a href="http://developer.bullhorn.com/articles/customobjects" class="uri">http://developer.bullhorn.com/articles/customobjects</a></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>customText1-20</td>
<td>String (100)</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customTextBlock1-5</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date when this record was created in the Bullhorn system.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>dateClosed</td>
<td>Timestamp</td>
<td>Date when the job was marked as closed.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateEnd</td>
<td>Timestamp</td>
<td>Date when the job will end (if applicable).</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>dateLastExported</td>
<td>Timestamp</td>
<td>Date when the job was last exported.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date on which the job was last modified.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>degreeList</td>
<td>String</td>
<td>List of educational degrees required for this job.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>description</td>
<td>String (200000)</td>
<td>Text description of the job.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>durationWeeks</td>
<td>Double</td>
<td>Expected duration the job. For a permanent position, this is null.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>educationDegree</td>
<td>String (50)</td>
<td>Required degree for the job.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>employmentType</td>
<td>String (200)</td>
<td>Type of employment offered: for example, contract, permanent, and so forth. Determines which of the five job types are used.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>externalCategoryID</td>
<td>Integer</td>
<td>Category exposed on public job postings to the web.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>externalID</td>
<td>String (30)</td>
<td>Used for migrations or for the job's external/back-office identification number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>feeArrangement</td>
<td>Double</td>
<td>Fee, expressed as a percentage, that will be paid by the ClientCorporation when the job is filled.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>hoursOfOperation</td>
<td>String (30)</td>
<td>Hiring company's hours of operation.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>hoursPerWeek</td>
<td>Double</td>
<td>Number of hours per week that the employee will work.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>Interviews</td>
<td>To-many association</td>
<td>Ids of interview Appointments associated with this job.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>isClientEditable</td>
<td>Boolean</td>
<td>Indicates whether a ClientContact can modify the job via the Bullhorn system.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether this record is marked as deleted in the Bullhorn system.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>isInterviewRequired</td>
<td>Boolean</td>
<td>Indicates whether applicants are required to Interview for the job.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>isJobcastPublished</td>
<td>Boolean</td>
<td>Indicates whether the job was published through Jobcast.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>isOpen</td>
<td>Boolean</td>
<td>Indicates whether the job is open.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>isPublic</td>
<td>Boolean</td>
<td>Controls whether a job appears on the Bullhorn job board (if in use). Only 3 values allows, -1, 0, 1.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>jobBoardList</td>
<td>String</td>
<td>List of job boards on which this job has been posted.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>notes</td>
<td>To-many association</td>
<td>Ids of Notes associated with this job.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>numOpenings</td>
<td>Integer</td>
<td>Number of openings to be filled for this job.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>onSite</td>
<td>String (20)</td>
<td>Location requirements; for example, on-site, off-site, no preference.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>Opportunity</td>
<td>To-one association</td>
<td>Opportunity with which this JobOrder is associated.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>optionsPackage</td>
<td>String</td>
<td>Text description of the stock options package offered with this job.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>owner</td>
<td>To-one association</td>
<td><p>CorporateUser who owns this job.</p>
<p>The default value is user who creates the JobOrder.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>payRate</td>
<td>BigDecimal</td>
<td>Pay rate offered with this job.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>placements</td>
<td>To-many association</td>
<td>Ids of Placements associated with this job.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>publicDescription</td>
<td>String (200000)</td>
<td>Description of this job for use on public job boards.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>publishedZip</td>
<td>String (18)</td>
<td>Published Zip Code of the job location.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>reasonClosed</td>
<td>String</td>
<td>Text description of the reason this job was closed, if applicable.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>reportTo</td>
<td>String (100)</td>
<td>Name and/or title of the person this job will report to.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>reportToClientContact</td>
<td>To-one association</td>
<td><p>ClientContact this job reports to. Included ClientContact fields are:</p>
<p>id</p>
<p>firstName</p>
<p>lastName</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>responseUser</td>
<td>To-one association</td>
<td>CorporateUser to whom submissions should be sent.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>salary</td>
<td>BigDecimal</td>
<td>Salary offered for this job.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>salaryUnit</td>
<td>String (12)</td>
<td>Salary unit represented by the range (for example, per hour, yearly).</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>sendouts</td>
<td>To-many association</td>
<td>Ids of Sendouts associated with this job.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>skillList</td>
<td>String</td>
<td>Comma-separated list of skills the applicants should have.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>skills</td>
<td>To-many association</td>
<td>Ids of Skills associated with this job.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>source</td>
<td>String (100)</td>
<td>Source of the job.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>startDate</td>
<td>Timestamp</td>
<td><p>Desired start date for the position.</p>
<p>The default value is 12 AM on day record is added.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>status</td>
<td>String (200)</td>
<td>Current status of the Job Order. Examples: Accepting Candidates, Currently Interviewing, Covered, Offer Out, Placed</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>submissions</td>
<td>To-many association</td>
<td>Ids of JobSubmissions associated with this job.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>tasks</td>
<td>Task</td>
<td>Tasks associated with this job.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>taxRate</td>
<td>Double</td>
<td>Rate (percentage) at which the person hired for this job will be taxed.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>taxStatus</td>
<td>String (20)</td>
<td>Tax Status, for example, 1099, W-2, and so forth.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>tearsheets</td>
<td>To-many association</td>
<td>Ids of Tearsheets with which this JobOrder is associated.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>title</td>
<td>String (100)</td>
<td>Job title.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>travelRequirements</td>
<td>String (50)</td>
<td>Text description of the amount of travel required for this job.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>type</td>
<td>Integer</td>
<td>Job type, for example, Cold, Cool, Medium, Warm, Hot. Stored in DB as Integer with display values configured in field maps.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>usersAssigned</td>
<td>String()</td>
<td>Comma-separated list of user IDs that represent a horizontal view of the assignedUsers list.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>willRelocate</td>
<td>Boolean</td>
<td>Indicates whether the hiring company will provide relocation assistance.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>willSponsor</td>
<td>Boolean</td>
<td>Indicates whether the hiring company is willing to sponsor an employee on a work visa.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>yearsRequired</td>
<td>Integer</td>
<td>Number of years of experience required for the job.</td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>