# LeadHistory

Read-only entity that represents the status and ClientCorporation history of a Lead.

<table>
<thead>
<tr class="header">
<th><p><strong>LeadHistory</strong></p>
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
<td>Unique Identifier for this entity.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>clientCorporation</td>
<td>To-one association</td>
<td>ClientCorporation of the associated Lead at the time this LeadHistory was created.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date this LeadHistory was added.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>lead</td>
<td>To-one association</td>
<td>Lead associated with this LeadHistory.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>modifyingUser</td>
<td>To-one association</td>
<td>CorporateUser who modified the Lead associated with this LeadHistory.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>status</td>
<td>String(30)</td>
<td>Status of the associated Lead at the time this LeadHistory was created.</td>
<td>X</td>
<td>X</td>
</tr>
</tbody>
</table>