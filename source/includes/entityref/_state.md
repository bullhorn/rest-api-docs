# State

Represents a state or province within a nation. 

<table>
<thead>
<tr class="header">
<th><p><strong>State</strong></p>
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
<td>code</td>
<td>String</td>
<td>Postal abbreviation of the state.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>country</td>
<td>To-one association</td>
<td>Nation that contains this state.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>name</td>
<td>String</td>
<td>Name of the state.</td>
<td>X</td>
<td> </td>
</tr>
</tbody>
</table>