# Pay and Bill - PayMasterTransaction

Read-only entity that represents a PayMasterTransaction.

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
<th>PayMasterTransaction fields</th>
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
<td>Unique identifier for this entity</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>adjustmentSequenceNumber</td>
<td><p>Integer</p></td>
<td><p>Adjustment sequence number</p></td>
<td><span>X</span></td>
<td>X</td>
</tr>
<tr class="odd">
<td>amount</td>
<td>BigDecimal</td>
<td>Amount</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>comment</td>
<td>String (2147483647)</td>
<td>Comment</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>currencyUnit</td>
<td>To-one association</td>
<td><p>Currency unit</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>alphabeticCode</li>
<li>name</li>
</ul></td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date the entity was added</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date last modified</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>payExportBatch</td>
<td>To-one association</td>
<td><p>Pay Export Batch</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>payMaster</td>
<td>To-one association</td>
<td><p>Pay master</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td><span>X</span></td>
<td>X</td>
</tr>
<tr class="even">
<td>quantity</td>
<td>BigDecimal</td>
<td>Quantity</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>rate</td>
<td>BigDecimal</td>
<td><p>Rate</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>recordingDate</td>
<td>Date</td>
<td>Recording date</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>reversalOfTransaction</td>
<td>To-one association</td>
<td><p>Pay Master Transaction</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>transactionOrigin</td>
<td><p>To-one association</p></td>
<td><p>Transaction origin</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul></td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>transactionStatus</td>
<td><p>To-one association</p></td>
<td><p>Transaction status</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul></td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>transactionType</td>
<td><p>To-one association</p></td>
<td><p>Transaction type</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul></td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>unitOfMeasure</td>
<td><p>To-one association</p>
<p>(String Flag)</p></td>
<td><p>Unit of measure</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>label</li>
</ul></td>
<td>X</td>
<td> </td>
</tr>
</tbody>
</table>


