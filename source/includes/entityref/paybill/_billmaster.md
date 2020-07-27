# Pay and Bill - BillMaster

Read-only entity that represents a BillMaster record.

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
<th>BillMaster fields</th>
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
<td>billMasterTransactions</td>
<td>To-many association</td>
<td><p>Associated BillMasterTransactions.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>billableCharge</td>
<td>To-one association</td>
<td><p>Associated BillableCharge.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>billingSyncBatch</td>
<td>To-one association</td>
<td><p>Associated BillingSyncBatch.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>canInvoice</td>
<td>Boolean</td>
<td>Indicates whether can invoice.</td>
<td> </td>
<td><p>X</p></td>
</tr>
<tr class="even">
<td>earnCode</td>
<td>To-one association</td>
<td><p>Associated EarnCode.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>externalID</li>
<li>title</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>transactionDate</td>
<td><p>Date</p></td>
<td><p>Transaction date</p></td>
<td> </td>
<td>X</td>
</tr>
</tbody>
</table>


