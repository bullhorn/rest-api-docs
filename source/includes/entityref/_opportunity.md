# Opportunity

Represents a possible Opportunity which can be converted to a JobOrder.

<table>
<thead>
<tr class="header">
<th><p><strong>Opportunity</strong></p>
<p><strong>field</strong></p></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
<th><strong>Not null</strong></th>
<th><strong>Read-Only</strong></th>
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
<td>actualCloseDate</td>
<td>Timestamp</td>
<td>Actual close date of the Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>address</td>
<td>Address</td>
<td>Address of the hiring company; when the Opportunity is created in the Bullhorn application, this data is pulled from the ClientContact record that is associated with this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>appointments</td>
<td>To-many association</td>
<td>IDs of Appointments associated with this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>assignedDate</td>
<td>Timestamp</td>
<td>Date the Opportunity was assigned to a CorporateUser.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>assignedUsers</td>
<td>To-many association</td>
<td>CorporateUsers assigned to this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>benefits</td>
<td>String</td>
<td>Text description of benefits offered with this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>billRateCategoryID</td>
<td>Integer</td>
<td>ID of the client bill rate category.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>bonusPackage</td>
<td>String</td>
<td>Text description of the bonus package offered with this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>branchCode</td>
<td>String(100)</td>
<td>Code representing the corporate branch where this Opportunity is located.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>businessSector</td>
<td>Integer</td>
<td>ID of the primary BusinessSector associated with this Opportunity.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>businessSectors</td>
<td>To-many association</td>
<td>IDs of BusinessSectors associated with this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>campaignSource</td>
<td>String(100)</td>
<td>Campaign source of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>category</td>
<td>Integer</td>
<td>ID of the primary Category associated with this Opportunity.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>categories</td>
<td>To-many association</td>
<td>IDs of Categories associated with this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>certifications</td>
<td>To-many association</td>
<td>Certifications needed for this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>clientContact</td>
<td>To-one association</td>
<td>ClientContact associated with this Opportunity.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>clientCorporation</td>
<td>To-one association</td>
<td>ClientCorporation the ClientContact associated with this Opportunity is employed by.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>committed</td>
<td>Boolean</td>
<td>Indicates whether the Opportunity has been committed to.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customDate1-3</td>
<td>BigDecimal</td>
<td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customFloat1-3</td>
<td>Double</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customInt1-3</td>
<td>Integer</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
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
<td>customObject1s to 10s</td>
<td>CustomObject</td>
<td>Fields to which custom objects can be assigned. For more information about custom objects, see the Bullhorn Resource Center and the following article on using the REST API with custom objects:<br />
<a href="http://developer.bullhorn.com/articles/customobjects" class="uri">http://developer.bullhorn.com/articles/customobjects</a></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date when this record was created in the Bullhorn system.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date this record was last modified.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td><p>dealValue</p>
<p> </p></td>
<td>BigDecimal</td>
<td>Deal value for this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>degreeList</td>
<td>String</td>
<td>Degree requirements for this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>description</td>
<td>String</td>
<td>Text description of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>educationDegree</td>
<td>String(50)</td>
<td>Education requirements for this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>effectiveDate</td>
<td>Timestamp</td>
<td>Effective date of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>estimatedDuration</td>
<td>Double</td>
<td>Estimated duration of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>estimatedEndDate</td>
<td>Timestamp</td>
<td>Estimated date when this Opportunity will end (if applicable).</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>estimatedHoursPerWeek</td>
<td>Double</td>
<td>The estimated hours per week of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>estimatedStartDate</td>
<td>Timestamp</td>
<td>The estimated start date for this Opportunity.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>estimatedBillRate</td>
<td>BigDecimal</td>
<td>Estimated bill rate of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>expectedCloseDate</td>
<td>Timestamp</td>
<td>Expected close date of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>expectedFee</td>
<td>Double</td>
<td>Fee, expressed as a percentage, that will be paid by the ClientCorporation when the potential JobOrder is filled.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>expectedParRate</td>
<td>BigDecimal</td>
<td>The expected pay rate of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>externalCategoryID</td>
<td>Integer</td>
<td>ID of the external category of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>externalID</td>
<td>String(30)</td>
<td>External identifier for the record, used for migrations and back-office integration.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>history</td>
<td>To-many association</td>
<td>IDs of OpportunityHistory entities associated with this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>ignoreUntilDate</td>
<td>Timestamp</td>
<td>The date, if any, until which to ignore this Opportunity. Allows you to ignore an Opportunity until a certain day/time.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether this record has been marked as Deleted in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>isOpen</td>
<td>Boolean</td>
<td>Indicates whether this Opportunity is Open or Closed.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>jobOrders</td>
<td>To-many association</td>
<td>JobOrders that have been converted from this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>lead</td>
<td>To-one association</td>
<td>Lead, if any, that is associated to this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>markUpPercentage</td>
<td>Double</td>
<td>Percent of mark up for this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>notes</td>
<td>To-many association</td>
<td>Notes associated with this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>numOpenings</td>
<td>Integer</td>
<td>Number of openings of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>onSite</td>
<td>String(20)</td>
<td>Location requirements of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>optionsPackage</td>
<td>String</td>
<td>Options package of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>owner</td>
<td>To-one association</td>
<td>ID of CorporateUser who owns this Opportunity.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>priority</td>
<td>Integer</td>
<td>Priority of this Opportunity, for example, Cold, Cool, Medium, Warm, Hot. Stored in DB as Integer with display values configured in field maps.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>publicDescription</td>
<td>String</td>
<td>Public description of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>publishedZip</td>
<td>String(18)</td>
<td>Published zip code of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>reasonClosed</td>
<td>String(255)</td>
<td>Text description of the reason this Opportunity was closed.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>salary</td>
<td>BigDecimal</td>
<td>Salary offered for this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>salaryUnit</td>
<td>String(12)</td>
<td>Salary unit represented by the range. For example, per hour, yearly, and so forth.</td>
<td> </td>
<td> </td>
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
<td>IDs of Skills associated with this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>source</td>
<td>String (100)</td>
<td>Source of this Opportunity. For example, Existing Client, Internet Search, and so forth.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>specialties</td>
<td>To-many association</td>
<td>IDs of Specialties associated with this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>status</td>
<td>String (200)</td>
<td>Current status of this Opportunity. i.e. Prospective, Active, Lost to Competition, and so forth.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>tasks</td>
<td>To-many association</td>
<td>Tasks associated with this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>tearsheets</td>
<td>To-many association</td>
<td>Tearsheets associated with this Opportunity</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>title</td>
<td>String (100)</td>
<td>Opportunity title.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>type</td>
<td>String (200)</td>
<td>Type of employment offered: for example, contract, permanent, and so forth. Determines which of the five Opportunity tracks are used.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>weightedDealValue</td>
<td>BigDecimal</td>
<td>Weighted deal value of this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>willRelocate</td>
<td>Boolean</td>
<td>Indicates whether or not the company will provide relocation assistance for this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>winProbabilityPercent</td>
<td>Double</td>
<td>Probability of winning this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>yearsRequired</td>
<td>Integer</td>
<td>Minimum experience required for this Opportunity.</td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>