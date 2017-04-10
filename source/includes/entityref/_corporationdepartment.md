# CorporationDepartment

Represents a department in a corporation.

<table>
<thead>
<tr class="header">
<th><p><strong>CorporationDepartment</strong></p>
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
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date when this record was created in the Bullhorn system.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>description</td>
<td>String (255)</td>
<td>Text description of the CorporationDepartment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>enabled</td>
<td>Boolean</td>
<td>Indicates whether this CorporationDepartment is enabled for use in the system.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>name</td>
<td>String (100)</td>
<td>Name of the CorporationDepartment.</td>
<td>X</td>
<td>X</td>
</tr>
</tbody>
</table>