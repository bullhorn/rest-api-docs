# Category

This entity represents a category in which a Candidate or JobOrder can be placed. A category that has a value for parentCategoryId greater than zero is a specialty.

<table>
<thead>
<tr class="header">
<th><p><strong>Category</strong></p>
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
<td>Date on which record was created in the Bullhorn system.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>description</td>
<td>String (255)</td>
<td>Free-text description of this category.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>enabled</td>
<td>Boolean</td>
<td>Indicates whether category is available for use in the Bullhorn system.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>name</td>
<td>String (100)</td>
<td>Name of the category + PLId (for categories)</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>occupation</td>
<td>String (50)</td>
<td>Occupation.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>skills</td>
<td>To-many association</td>
<td>Ids of the Skills associated with this Category.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>specialties</td>
<td>To-many association</td>
<td>Ids of the Specialties that are children of this Category.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>type</td>
<td>String (20)</td>
<td>Bill Rate Category, Skills Checklist Category, and so forth.</td>
<td> </td>
<td>X</td>
</tr>
</tbody>
</table>