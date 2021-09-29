# Pay and Bill - BillingSyncBatch

Read-only entity that represents a billing-sync batch. Dynamic insert and update via billing-sync-services.

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
<th>BillingSyncBatch fields</th>
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
<td>batchGroup</td>
<td><p>To-many association</p>
<p> </p></td>
<td><p>Batch group.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td><span>X</span></td>
</tr>
<tr class="odd">
<td>billMasters</td>
<td><p>To-one association</p></td>
<td><p>BillMasters.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
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
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date last modified.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>defaultBillableCharge</td>
<td><span>To-one association</span></td>
<td>Default BillableCharge.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>defaultPayableCharge</td>
<td><span>To-one association</span></td>
<td>Default PayableCharge.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>externalID</td>
<td>String (50)</td>
<td><span>User facing unique identifier.</span></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>payMasters</td>
<td>To-many association</td>
<td><p>PayMasters.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>periodEndDate</td>
<td>Date</td>
<td>Period end date.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>timeOfExternalEvent</td>
<td>Timestamp</td>
<td>Time of external event that initiated batch.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>transactionOrigin</td>
<td><span>To-one association</span></td>
<td>Origin of transaction.</td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>


