# Pay and Bill - BillMasterTransaction

Read-only entity that represents a BillMasterTransaction.

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
<th>BillMasterTransaction fields</th>
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
<td>adjustmentSequenceNumber</td>
<td><p>Integer</p></td>
<td><p>Adjustment sequence number.</p></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>amount</td>
<td>BigDecimal</td>
<td>Amount.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>billMaster</td>
<td>To-one association</td>
<td><p>Associated BillMaster.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>comments</td>
<td>String (2147483647)</td>
<td>Comments.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>currencyUnit</td>
<td>To-one association</td>
<td><p>Associated CurrencyUnit.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date the entity was added.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date last modified.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>invoiceStatement</td>
<td>To-one association</td>
<td><p>Associated InvoiceStatement.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>invoiceStatementBatch</td>
<td>To-one association</td>
<td><p>Associated InvoiceStatementBatch.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>invoiceStatementLineItem</td>
<td>To-one association</td>
<td><p>Associated InvoiceStatementLineItem.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>needsReview</td>
<td>Boolean</td>
<td>Whether transaction needs review.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>payPeriodEndDate</td>
<td>Date</td>
<td><p>Pay period end date.</p></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>quantity</td>
<td>Double</td>
<td>Quantity.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>rate</td>
<td>BigDecimal</td>
<td><p>Rate.</p></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>recordingDate</td>
<td>Date</td>
<td>Recording date.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>reversalOfTransaction</td>
<td>To-one association</td>
<td>Associated reversed BillMasterTransaction.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>timeLaborEvalDiffStatusLookupID</td>
<td><p>To-one association</p></td>
<td><p>New transaction type field used by TimeLaborEval.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>timeLaborEvalUnitID</td>
<td><p>To-one association</p></td>
<td><p>Metadata used for TimeLaborEval calculations</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>timestamp</td>
<td>byte[]</td>
<td><p>Rowversion.</p></td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>transactionOrigin</td>
<td><p>To-one association</p></td>
<td><p>Associated TransactionOrigin.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>transactionStatus</td>
<td><p>To-one association</p></td>
<td><p>Associated TransactionStatus.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>transactionType</td>
<td><p>To-one association</p></td>
<td><p>Associated TransactionOrigin.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>unbilledRevenueGeneralLedgerExportStatusLookup</td>
<td><p>To-one association</p></td>
<td><p>Associated UnbilledRevenueGeneralLedgerExportStatusLookup.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>label</li>
</ul>
<p>Value defaulted to 'Ready for Distribution'</p></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>unitOfMeasure</td>
<td><p>To-one association</p>
<p>(String flag)</p></td>
<td><p>Associated UnitOfMeasure.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>label</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>version</td>
<td>Int</td>
<td><p>To be used by TimeLaborEval in the future.</p></td>
<td> </td>
<td>X</td>
</tr>
</tbody>
</table>


