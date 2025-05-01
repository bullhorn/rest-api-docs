# Pay and Bill - BatchGroup

Organizes related batches into one grouping to streamline the processing and management of bulk operations. 
Dynamically inserted via billing-sync-services.

CRUD Access - READ

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
<th>BatchGroup fields</th>
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
<td>Unique identifier for this entity.</td>
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


