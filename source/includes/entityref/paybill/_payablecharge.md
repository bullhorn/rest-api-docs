# Pay and Bill - PayableCharge

Read-only entity that represents a payable charge. Dynamic insert and update via billing-sync-services.

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
<th>PayableCharge fields</th>
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
<p>Default Fields:</p>
<ul>
<li>id</li>
<li>firstName</li>
<li>lastName</li>
</ul></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>canExport</td>
<td>Boolean</td>
<td> </td>
<td>X</td>
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
<td><p>Client Corporation.</p>
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
<td>String (MAX)</td>
<td>Description.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>employeeType</td>
<td>String (30)</td>
<td>Tax form type.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p>generalLedgerSegment1</p></td>
<td><span>To-one association</span></td>
<td><p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment1 is configured as Class, which allows users to specify the type of the ledger.</p>
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
<td><p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment2 is configured as Division, which allows users to specify the type of the ledger.</p>
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
<td><p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment3 is configured as Department, which allows users to specify the type of the ledger.</p>
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
<td>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment4 is configured as Country, which allows users to specify the type of the ledger.
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
<td><span>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment5 is configured as Location, which allows users to specify the type of the ledger.</span>
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
<td>jobOrder</td>
<td><p>To-one association</p></td>
<td><p>Job Order.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>title</li>
</ul>
<p> </p></td>
<td> </td>
<td> X</td>
</tr>
<tr class="odd">
<td>payMasters</td>
<td>To-Many association</td>
<td><p>Associated PayMasters.</p>
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
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>placement</td>
<td>To-one association</td>
<td><p>Placement.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>readyToPayOverride</td>
<td>Boolean</td>
<td>Ready to pay status override.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>status</td>
<td>To-one association</td>
<td><p>PayableChargeStatusLookup.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>label</li>
<li>readOnly</li>
</ul></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>subtotal</td>
<td>BigDecimal</td>
<td>Subtotal.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
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
<tr class="even">
<td>transactionType</td>
<td><p>To-one association</p></td>
<td><p>Transaction origin.</p>
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


