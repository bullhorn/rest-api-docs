# TearsheetMember

Represents a tearsheet member. 

<table>
<thead>
<tr class="header">
<th><p><strong>TearsheetMember</strong></p>
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
<td> </td>
</tr>
<tr class="even">
<td>candidateRestrictionBits</td>
<td>Integer</td>
<td>Candidate restriction bits.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>dateAdded</td>
<td>Timestamp</td>
<td>The date on which this record was created in the Bullhorn system.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>person</td>
<td>To-one association</td>
<td>Person with whom this TearsheetMember is associated.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>tearsheet</td>
<td>To-one association</td>
<td>Tearsheet with which this TearsheetMember is associated.</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>