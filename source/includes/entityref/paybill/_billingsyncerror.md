# Pay and Bill - BillingSyncError

Read-only entity that represents a billing-sync error. Dynamic insert and update via billing-sync-services.

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
<th>BillingSyncError fields</th>
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
<td>acknowledgedByUser</td>
<td>To-one association</td>
<td>User who acknowledges the error.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>acknowledgeDate</td>
<td>Timestamp</td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date the entity was added.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>errorCode</td>
<td>String (100)</td>
<td>Billing-sync error code.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>externalID</td>
<td>String (50)</td>
<td>User facing unique identifier.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>placement</td>
<td>To-one association</td>
<td>Placement associated with this error.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>rawDataPacket</td>
<td>String (2147483647)</td>
<td>Raw data packet.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>rawError</td>
<td>String (2147483647)</td>
<td>Raw error.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>tokens</td>
<td><span>String (</span> <span>2147483647)</span></td>
<td>Tokens.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>transactionDate</td>
<td>Date</td>
<td>Date of transaction.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>transactionOrigin</td>
<td>To-one association</td>
<td>Transaction origin.</td>
<td> </td>
<td>X</td>
</tr>
</tbody>
</table>


