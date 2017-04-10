# BusinessSector

Represents a business sector, which can be associated with Candidates, ClientCorporations, and JobOrders for classification purposes.

<table>
<thead>
<tr class="header">
<th><p><strong>BusinessSector</strong></p>
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
<td>When the entity was created.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>name</td>
<td>String (100)</td>
<td>Name of this business sector.</td>
<td>X</td>
<td>X</td>
</tr>
</tbody>
</table>