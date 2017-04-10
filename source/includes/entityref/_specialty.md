# Specialty

Represents a specialty that can be associated with a JobOrder or held by a Candidate. Specialties are associated with a parent Category.

<table>
<thead>
<tr class="header">
<th><p><strong>Specialty</strong></p>
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
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date on which this record was created in the Bullhorn system.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>enabled</td>
<td>Boolean</td>
<td>Indicates whether category is available for use in the Bullhorn application.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>name</td>
<td>String (100)</td>
<td>Name of Specialty.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>parentCategory</td>
<td>Integer</td>
<td>Category that is parent of this Specialty.</td>
<td> </td>
<td>X</td>
</tr>
</tbody>
</table>