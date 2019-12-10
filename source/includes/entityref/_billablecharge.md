# Pay and Bill - BillableCharge

Represents a billable charge.

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
<th>BillableCharge fields</th>
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
<td>addedByUser</td>
<td>To-one association</td>
<td><p>Corporate User.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>firstName</li>
<li>lastName</li>
</ul></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>billMasters</td>
<td><p>To-one association</p></td>
<td><p>Bill masters.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>billingClientContact</td>
<td><p>To-one association</p></td>
<td><p>Billing contact.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>firstName</li>
<li>lastName</li>
</ul>
<p> </p></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>billingClientCorporation</td>
<td><p>To-one association</p></td>
<td><p>Bill-to company.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>billingCorporateUser</td>
<td>To-one association</td>
<td><p>Corporate User.</p>
<p><span>Default fields:</span></p>
<ul>
<li>id</li>
<li>firstName</li>
<li>lastName</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>billingFrequency</td>
<td>String (20)</td>
<td>Billing frequency.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>billingProfile</td>
<td>To-one association</td>
<td><p>Billing profile.</p>
<p>Default Fields:</p>
<ul>
<li>id</li>
<li>clientCorporation</li>
<li>title</li>
<li>effectiveDate</li>
<li>effectiveEndDate</li>
<li>versionID</li>
<li>billingClientCorporation</li>
</ul></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>billingSchedule</td>
<td>Integer</td>
<td>Billing schedule.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>candidate</td>
<td><p>To-one association</p></td>
<td><p>Candidate.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>firstName</li>
<li>lastName</li>
</ul>
<p> </p></td>
<td> </td>
<td> X</td>
</tr>
<tr class="odd">
<td>clientCorporation</td>
<td><p>To-one association</p></td>
<td><p>ClientCorporation.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul>
<p> </p></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>currencyUnit</td>
<td>To-one association</td>
<td><p>Currency unit.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>alphabeticCode</li>
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
<td>description</td>
<td>String</td>
<td>Description.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>fileAttachments</td>
<td>To-many association</td>
<td><p>Billable Charge File Attachment.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td><p>generalLedgerSegment1</p></td>
<td><span>To-one association</span></td>
<td><p>General Ledger Segment 1.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>externalSegmentNumber</li>
<li>externalSegmentName</li>
</ul></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td><p><span>generalLedgerSegment2</span></p></td>
<td><span>To-one association</span></td>
<td><p>General Ledger Segment 2</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>externalSegmentNumber</li>
<li>externalSegmentName</li>
</ul></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><span>generalLedgerSegment3</span></p></td>
<td><span>To-one association</span></td>
<td><p>General Ledger Segment 3.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>externalSegmentNumber</li>
<li>externalSegmentName</li>
</ul></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td><p><span>generalLedgerSegment4</span></p></td>
<td><span>To-one association</span></td>
<td>General Ledger Segment 4.
<p>Default fields:</p>
<ul>
<li>id</li>
<li>externalSegmentNumber</li>
<li>externalSegmentName</li>
</ul></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p><span>generalLedgerSegment5</span></p></td>
<td><span>To-one association</span></td>
<td><span>General Ledger Segment 5.</span>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>externalSegmentNumber</li>
<li>externalSegmentName</li>
</ul></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>invoiceTerm</td>
<td>To-one association</td>
<td><p>Invoice terms.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>clientCorporation</li>
<li>title</li>
<li>effectiveDate</li>
<li>effectiveEndDate</li>
<li>versionID</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>isInvoiced</td>
<td>Boolean</td>
<td>Indicates whether billable charge is invoiced.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>jobOrder</td>
<td><p>To-one association</p></td>
<td><p>Job.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>title</li>
</ul></td>
<td> </td>
<td> X</td>
</tr>
<tr class="odd">
<td>periodEndDate</td>
<td>Date</td>
<td>Period end date</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>placement</td>
<td>To-one association</td>
<td><p>Placement.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>readyToBillOverride</td>
<td>Integer</td>
<td>Ready to bill override.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>status</td>
<td>To-one association</td>
<td><p>BillableChargeStatusLookup.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>label</li>
<li>readOnly</li>
</ul></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>subTotal</td>
<td>BigDecimal</td>
<td>subtotal.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>transactionStatus</td>
<td><p>To-one association</p></td>
<td><p>Transaction status.</p>
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
<td><p>Transaction type.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
</tbody>
</table>


