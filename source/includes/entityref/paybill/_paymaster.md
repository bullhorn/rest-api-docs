# Pay and Bill - PayMaster

Serves as the master record for a payroll cycle, aggregating overall payment details and linking together individual transactions for accurate financial reconciliation.

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
<th>PayMaster fields</th>
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
<td>billingSyncBatch</td>
<td>To-one association</td>
<td><p>Billing sync batch.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>canExport</td>
<td>Boolean</td>
<td> </td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>earnCode</td>
<td>To-one association</td>
<td><p>Earn code.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>externalID</li>
<li>title</li>
</ul></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>payMasterTransactions</td>
<td>To-many association</td>
<td><p>Pay master transaction.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>payableCharge</td>
<td>To-one association</td>
<td><p>Payable charge.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>transactionDate</td>
<td><p>Date</p></td>
<td><p>Transaction date.</p></td>
<td>X</td>
<td> </td>
</tr>
</tbody>
</table>


