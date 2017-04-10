# Country

Represents a country.

<table>
<thead>
<tr class="header">
<th><p><strong>Country</strong></p>
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
<td>code</td>
<td>String</td>
<td>Code associated with this Country.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>name</td>
<td>String</td>
<td>Name of the Country.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>states</td>
<td>To-many association</td>
<td>Ids of States that are associated with this Country.</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>