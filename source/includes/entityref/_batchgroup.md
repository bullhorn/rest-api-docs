# Pay and Bill - BatchGroup

Read-only entity that represents a batch group. Dynamic insert via billing-sync-services.

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th><p>BatchGroup fields</p></th>
<th>Type</th>
<th>Description</th>
<th>Not null</th>
<th>Read-only</th>
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
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date the entity was added.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>billingSyncBatches</td>
<td>To-many association</td>
<td><p>BillingSyncBatches.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
</tbody>
</table>


