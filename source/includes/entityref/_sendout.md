# Sendout

Represents a sendout, which occurs when a Candidate's information is sent to a ClientCorporation to be evaluated for a particular job.

<table>
<thead>
<tr class="header">
<th><strong>Sendout field</strong></th>
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
<td> </td>
</tr>
<tr class="even">
<td>candidate</td>
<td>To-one association</td>
<td><p>Candidate being sent out. Included Candidate fields are:</p>
<p>id</p>
<p>firstName</p>
<p>lastName </p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>clientContact</td>
<td>To-one association</td>
<td><p>ClientContact receiving the Sendout. Included ClientContact fields are:</p>
<p>id</p>
<p>firstName</p>
<p>lastName</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>clientCorporation</td>
<td>To-one association</td>
<td>Hiring company.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateAdded</td>
<td>Timestamp</td>
<td>The date on which this entity was created in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>email</td>
<td>String (100)</td>
<td>Email address to which the Sendout is sent.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>isRead</td>
<td>Boolean</td>
<td>Indicates whether the email has been opened.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>jobOrder</td>
<td>To-one association</td>
<td><p>JobOrder for which the Candidate is being considered. Included JobOrder fields are:</p>
<p>id</p>
<p>title</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>user</td>
<td>To-one association</td>
<td><p>CorporateUser who initiated this Sendout.</p>
<p>The default value is user who creates the Sendout.</p></td>
<td>X</td>
<td> </td>
</tr>
</tbody>
</table>