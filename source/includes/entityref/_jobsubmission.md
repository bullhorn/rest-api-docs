# JobSubmission

Represents a formal submission of a Candidate for a particular job. A job submission occurs after the Candidate has been evaluated, interviewed, and otherwise assessed, and the parties involved have agreed that the Candidate may be suitable. The JobSubmission entity is then created with references to the Candidate and the JobOrder representing the position. If the JobSubmission is approved, a Placement entity is created.

The JobSubmission entity supports the [massUpdate](#get-massupdate) operations.

**Note:** When you set the status field of a JobSubmission to “New Lead”, it becomes a web response, which is an informal job submission. When you update another status, it becomes a formal job submission. When you create a web response, set the dateWebResponse field to the current date. When you update a web response to make it a formal job submission, set the dateAdded field to the current date.

<table>
<thead>
<tr class="header">
<th><p><strong>JobSubmission</strong></p>
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
<td>appointments</td>
<td>To-many association</td>
<td>Ids of Appointments associated with this JobSubmission.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>billRate</td>
<td>BigDecimal</td>
<td>Bill rate for this JobSubmission.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>candidate</td>
<td>To-one association</td>
<td><p>Candidate submitted for this job. Included Candidate fields are:</p>
<p>id</p>
<p>firstName</p>
<p>lastName</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>comments</td>
<td>String</td>
<td>Free-text comments on this JobSubmission.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date on which this JobSubmission record was created in the Bullhorn system.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date on which the JobSubmission was last modified.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>dateWebResponse</td>
<td>Timestamp</td>
<td>When a new web response is added, set the dateWebResponse field to the current timestamp. When a web response is promoted to a submission, update the dateAdded property to the current timestamp.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether this record is marked as deleted in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>isHidden</td>
<td>Boolean</td>
<td>Indicates whether web responses are hidden. If you do not plan to promote a web response to a submission, set the isHidden field to true.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>jobOrder</td>
<td>Integer</td>
<td>JobOrder to which this JobSubmission corresponds.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>owners</td>
<td>To-many association</td>
<td>Primary (first) and secondary (all but first) corporateUsers considered owners of this JobSubmission.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>payRate</td>
<td>BigDecimal</td>
<td>Pay rate for this JobSubmission.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>salary</td>
<td>BigDecimal</td>
<td>Salary for this JobSubmission.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>sendingUser</td>
<td>To-one association</td>
<td><p>CorporateUser credited with making the submission.</p>
<p>The default value is user who created the JobSubmission.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>source</td>
<td>String (100)</td>
<td>Source of the JobSubmission (for example, web, Integer, and so forth.)</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>status</td>
<td>String (30)</td>
<td>Status of the JobSubmission (for example, reviewed, accepted, and so forth.). Allowable values are configured in field maps.</td>
<td>X</td>
<td> </td>
</tr>
</tbody>
</table>