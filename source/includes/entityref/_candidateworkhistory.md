# CandidateWorkHistory

Represents a single entry in the "Work History" section of a Candidate's resume: that is, a job the Candidate has had. For each current or former position the Candidate has held, there is a unique CandidateWorkHistory instance associated with that Candidate. Each CandidateWorkHistory instance corresponds to a line item on the "Work History" tab of a Candidate record in the Bullhorn application.

<table>
<thead>
<tr class="header">
<th><p><strong>CandidateWorkHistory</strong></p>
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
<td>bonus</td>
<td>Double</td>
<td>Amount of the bonus paid to Candidate.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>candidate</td>
<td>To-one association</td>
<td>Candidate with whom CandidateWorkHistory is associated.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>clientCorporation</td>
<td>To-one association</td>
<td>ClientCorporation associated with Candidate.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>comments</td>
<td>String</td>
<td>Free-text comments on CandidateWorkHistory.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>commission</td>
<td>Double</td>
<td>Amount of commission earned by Candidate at this position.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>companyName</td>
<td>String (100)</td>
<td>Name of the company where the Candidate worked.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customDate1 to 5</td>
<td>Timestamp</td>
<td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customFloat1 to 5</td>
<td>Double</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customInt1 to 5</td>
<td>Integer</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customText1 to 5</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customTextBlock1 to 3</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date on which this record was created in the Bullhorn system.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>endDate</td>
<td>Timestamp</td>
<td>Date on which job ended, if applicable.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether this record has been marked as deleted in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>isLastJob</td>
<td>Boolean</td>
<td>Indicates whether this was the Candidate's most recent job.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>jobOrder</td>
<td>To-one association</td>
<td>JobOrder associated with the CandidateWorkHistory, if applicable.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>placement</td>
<td>To-one association</td>
<td>Placement representing the Candidate's placement in a job, if applicable. </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>salary1</td>
<td>BigDecimal</td>
<td>Candidate's starting salary at this position.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>salary2</td>
<td>BigDecimal</td>
<td>Candidate's final salary at this position.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>salaryType</td>
<td>String (20)</td>
<td>Indicates how the Candidate was paid: Hourly, Yearly, and so forth.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>startDate</td>
<td>Timestamp</td>
<td>Date on which Candidate began working at this position.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>terminationReason</td>
<td>String (100)</td>
<td>Reason for the Candidate's termination from this position, if applicable.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>title</td>
<td>String (50)</td>
<td>Candidate's job title in this position.</td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>