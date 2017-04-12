# ClientCorporationNote

Association entity between ClientCorporation, ClientContact, and Note entities. This entity is read-only and is only created when the companyStampOnActivitiesEnabled corporation setting is enabled.

<table>
<thead>
<tr class="header">
<th><p><strong>ClientCorporationNote</strong></p>
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
<td>clientCorporation</td>
<td>To-one association</td>
<td>Associated ClientCorporation.</td>
<td></td>
<td>X</td>
</tr>
<tr class="odd">
<td>clientContact</td>
<td>To-one association</td>
<td>Associated ClientContact.</td>
<td> </td>
<td> X</td>
</tr>
<tr class="even">
<td>note</td>
<td>To-one association</td>
<td>Associated Note.</td>
<td></td>
<td>X</td>
</tr>
</tbody>
</table>