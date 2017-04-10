# Department

Represents a department for a user's corporation. Users can create, read, and update departments. Only users with the  Account Administration entitlement can create and update departments.

<table>
<thead>
<tr class="header">
<th><strong>Department field</strong></th>
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
<td>Unique Identifier for this entity.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>description</td>
<td>String (255)</td>
<td>Department description.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>enabled</td>
<td>Boolean</td>
<td>Indicates whether department is enabled.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>name</td>
<td>String(100)</td>
<td>Department name.</td>
<td>X</td>
<td></td>
</tr>
</tbody>
</table>