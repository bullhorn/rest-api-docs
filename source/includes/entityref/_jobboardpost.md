# JobBoardPost

Represents a view into a JobOrder entity with information typically used in public job boards. JobBoardPost is a read-only entity.

<table>
<thead>
<tr class="header">
<th><p><strong>JobBoardPost</strong></p>
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
<td>Address</td>
<td>Address of the hiring company; when the record is created in the Bullhorn application, this data is pulled from the client contact record.</td>
<td> </td>
<td> X</td>
</tr>
<tr class="odd">
<td>benefits</td>
<td>String</td>
<td>Text description of benefits offered with this job.</td>
<td> </td>
<td> X</td>
</tr>
<tr class="even">
<td>bonusPackage</td>
<td>String</td>
<td>Text description of the bonus package offered with this job.</td>
<td> </td>
<td> X</td>
</tr>
<tr class="odd">
<td>categories</td>
<td>To-many association</td>
<td>IDs of Categories associated with this job.</td>
<td> </td>
<td> X</td>
</tr>
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date when this record was created in the Bullhorn system.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>dateEnd</td>
<td>Timestamp</td>
<td>Date when the job will end (if applicable).</td>
<td> </td>
<td> X</td>
</tr>
<tr class="even">
<td>dateLastPublished</td>
<td>Timestamp</td>
<td>Date when this record was last published to the 'Corporate' Job Board.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>employmentType</td>
<td>String (200)</td>
<td>Type of employment offered: for example, contract, permanent, and so forth. Determines which of the five job types are used.</td>
<td>X</td>
<td> X</td>
</tr>
<tr class="even">
<td>isPublic</td>
<td>Boolean</td>
<td>Controls whether a job appears on the Bullhorn job board (if in use). Only 3 values allows, -1, 0, 1.</td>
<td> </td>
<td> X</td>
</tr>
<tr class="odd">
<td>isOpen</td>
<td>Boolean</td>
<td>Indicates whether the job is open.</td>
<td> </td>
<td>X </td>
</tr>
<tr class="even">
<td>payRate</td>
<td>BigDecimal</td>
<td>Pay rate offered with this job.</td>
<td> </td>
<td> X</td>
</tr>
<tr class="odd">
<td>publicDescription</td>
<td>String (200000)</td>
<td>Description of this job for use on public job boards.</td>
<td></td>
<td>X </td>
</tr>
<tr class="even">
<td>publishedCategory</td>
<td>To-one association</td>
<td><p>The category that was last selected when publishing the job. Included Category fields are:</p>
<p>id</p>
<p>name</p></td>
<td> </td>
<td> X</td>
</tr>
<tr class="odd">
<td>publishedZip</td>
<td>String (18)</td>
<td>Published Zip Code of the job location.</td>
<td> </td>
<td>X </td>
</tr>
<tr class="even">
<td>responseUser</td>
<td>To-one association</td>
<td>ID of CorporateUser to whom submissions should be sent.</td>
<td> </td>
<td> X</td>
</tr>
<tr class="odd">
<td>salary</td>
<td>BigDecimal</td>
<td>Salary offered for this job.</td>
<td> </td>
<td> X</td>
</tr>
<tr class="even">
<td>salaryUnit</td>
<td>String (12)</td>
<td>Salary unit represented by the range (e.g. per hour, yearly).</td>
<td> </td>
<td> X</td>
</tr>
<tr class="odd">
<td>startDate</td>
<td>Timestamp</td>
<td>Desired start date for the position.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>title</td>
<td>String (100)</td>
<td>Job title.</td>
<td> </td>
<td> X</td>
</tr>
<tr class="odd">
<td>travelRequirements</td>
<td>String (50)</td>
<td>Text description of the amount of travel required for this job.</td>
<td> </td>
<td> X</td>
</tr>
<tr class="even">
<td>willRelocate</td>
<td>Boolean</td>
<td>Indicates whether the hiring company will provide relocation assistance.</td>
<td> </td>
<td> X</td>
</tr>
<tr class="odd">
<td>willSponsor</td>
<td>Boolean</td>
<td>Indicates whether the hiring company is willing to sponsor an employee on a work visa.</td>
<td> </td>
<td> X</td>
</tr>
<tr class="even">
<td>yearsRequired</td>
<td>Integer</td>
<td>Number of years of experience required for the job.</td>
<td> </td>
<td> X</td>
</tr>
</tbody>
</table>