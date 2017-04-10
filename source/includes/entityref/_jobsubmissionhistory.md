# JobSubmissionHistory

Read-only entity that represents the transaction history of a JobSubmission. The GET /query/JobSubmissionHistory call returns a list of JobSubmissionHistory entities for one or more JobSubmission entities. The GET /entity/JobSubmissionHistory/{entityId} call returns a single JobSubmissionHistory entity that represents one JobSubmission change. Supports create and delete operations.

<table>
<thead>
<tr class="header">
<th><p><strong>JobSubmissionHistory</strong></p>
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
<td>comments</td>
<td>String</td>
<td>Value of the JobSubmission comments fields for this transaction.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date on which the JobSubmission record was created in the Bullhorn system.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>jobSubmission</td>
<td>To-one association</td>
<td>JobSubmission associated with this JobSubmissionHistory.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>sendingUser</td>
<td>To-one association</td>
<td><p>CorporateUser credited with making the JobSubmission.</p>
<p>The default value is user who created the JobSubmission.</p></td>
<td>X</td>
<td> X</td>
</tr>
<tr class="even">
<td>status</td>
<td>String (30)</td>
<td>Status of the JobSubmission (for example, reviewed, accepted, and so forth.). Allowable values are configured in field maps.</td>
<td>X</td>
<td> X</td>
</tr>
<tr class="odd">
<td>transactionID</td>
<td>String (36)</td>
<td>Unique transaction id for this JobSubmissionHistory.</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>