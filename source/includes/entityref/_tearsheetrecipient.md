# TearsheetRecipient

Represents a tearsheet recipient. 

<table>
<thead>
<tr class="header">
<th><p><strong>TearsheetRecipient</strong></p>
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
<td>description</td>
<td>String</td>
<td>Free-text description.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether this record is marked as deleted in the Bullhorn system.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>isSent</td>
<td>Boolean</td>
<td>Indicates whether</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>jobOrder</td>
<td>To-one association</td>
<td>JobOrder with which this TearsheetRecipient is associated. This field includes the following JobOrder fields:<br />
id<br />
title</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>person</td>
<td>To-one association</td>
<td>Person with whom this TearsheetRecipient is associated.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>tearsheet</td>
<td>To-one association</td>
<td>Tearsheet with which this TearsheetRecipient is associated.</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>