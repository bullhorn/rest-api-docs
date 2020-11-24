Search messages
 
GET https://rest91.bullhornstaffing.com/rest-services/5dlxi9/meta/BillableCharge?fields=*&meta=full
200
1404 ms
 
# BillableCharge

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
        <tr class="even">
            <td>id</td>
            <td>ID</td>
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>addedByUser</td>
            <td>To One Association</td>
            <td><p>Corporate User.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>firstName</li>
<li>lastName</li>
</ul></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billMasterTransactionDistributionBatches</td>
            <td>To Many Association</td>
            <td>BillMasterTransactionDistributionBatch</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billMasters</td>
            <td>To Many Association</td>
            <td><p>Bill masters.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billableTransactions</td>
            <td>To Many Association</td>
            <td>BillableChargeBillableTransaction</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingCalendarInstances</td>
            <td>To Many Association</td>
            <td>CalendarInstance</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billingClientContact</td>
            <td>To One Association</td>
            <td><p>Billing contact.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>firstName</li>
<li>lastName</li>
</ul>
<p>&#xA0;</p></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingClientCorporation</td>
            <td>To One Association</td>
            <td><p>Bill-to company.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billingCorporateUser</td>
            <td>To One Association</td>
            <td><p>Corporate User.</p>
<p><span>Default fields:</span></p>
<ul>
<li>id</li>
<li>firstName</li>
<li>lastName</li>
</ul></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingFrequency</td>
            <td>String (20)</td>
            <td>Billing frequency.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billingProfile</td>
            <td>To One Association</td>
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
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billingSchedule</td>
            <td>Integer</td>
            <td>Billing schedule.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billingSyncBatchFileAttachments</td>
            <td>To Many Association</td>
            <td>BillingSyncBatchFileAttachment</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>candidate</td>
            <td>To One Association</td>
            <td><p>Candidate.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>firstName</li>
<li>lastName</li>
</ul>
<p>&#xA0;</p></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>clientCorporation</td>
            <td>To One Association</td>
            <td><p>ClientCorporation.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul>
<p>&#xA0;</p></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>currencyUnit</td>
            <td>To One Association</td>
            <td><p>Currency unit.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>alphabeticCode</li>
<li>name</li>
</ul></td>
            <td></td>
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
            <td>description</td>
            <td>String (2147483647)</td>
            <td>Description.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>entryTypeLookup</td>
            <td>To One Association</td>
            <td>Options are Timesheet or Expense</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>externalID</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>fileAttachments</td>
            <td>To Many Association</td>
            <td><p>Billable Charge File Attachment.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment1</td>
            <td>To One Association</td>
            <td>GeneralLedgerSegment1
<p>Default fields:</p>
<ul>
<li>id</li>
<li>externalSegmentNumber</li>
<li>externalSegmentName</li>
</ul>            	
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment2</td>
            <td>To One Association</td>
            <td>GeneralLedgerSegment2
            	<p>Default fields:</p>
<ul>
<li>id</li>
<li>externalSegmentNumber</li>
<li>externalSegmentName</li>
</ul> 
		</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment3</td>
            <td>To One Association</td>
            <td>GeneralLedgerSegment3
            <p>Default fields:</p>
<ul>
<li>id</li>
<li>externalSegmentNumber</li>
<li>externalSegmentName</li>
</ul> </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment4</td>
            <td>To One Association</td>
            <td>GeneralLedgerSegment4
<p>Default fields:</p>
<ul>
<li>id</li>
<li>externalSegmentNumber</li>
<li>externalSegmentName</li>
</ul> </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment5</td>
            <td>To One Association</td>
            <td>GeneralLedgerSegment5
<p>Default fields:</p>
<ul>
<li>id</li>
<li>externalSegmentNumber</li>
<li>externalSegmentName</li></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerServiceCode</td>
            <td>To One Association</td>
            <td>GeneralLedgerServiceCode</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerStatus</td>
            <td>To One Association</td>
            <td>This is the General Ledger Status and it points to UnbilledRevenueGeneralLedgerExportStatusLookup.
<p>Options are:</p>
<ol>
	<li>Export Failed</li>
	<li>Ready for Distribution</li>
	<li>Stamped for Distribution</li>
	<li>Creating Distribution</li>
	<li>	Ready for Export</li>
	<li>Export Queued</li>
	<li>Export in progress</li>
	<li>Export Successful</li>
</ol>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>invoiceTerm</td>
            <td>To One Association</td>
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
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>invoicedTransactions</td>
            <td>To Many Association</td>
            <td>Lists IDs of invoiced transactions</td>
            <td></td>
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
            <td>To One Association</td>
            <td><p>Job.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>title</li>
</ul></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payBillCycles</td>
            <td>To Many Association</td>
            <td>Displays the associated Billing Cycle(s)
<p>Default fields:</p>
<ul>
<li>id</li>
<li>label</li>
</ul>
            	</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>periodEndDate</td>
            <td>Date</td>
            <td>Period end date</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placement</td>
            <td>To One Association</td>
            <td><p>Placement.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>readyToBillOverride</td>
            <td>Boolean</td>
            <td>Ready to bill override.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>To One Association</td>
            <td><p>BillableChargeStatusLookup.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>label</li>
<li>readOnly</li>
</ul></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>subtotal</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>summaryTransactions</td>
            <td>To Many Association</td>
            <td>BillableChargeSummaryTransaction</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>transactionStatus</td>
            <td>To One Association</td>
            <td><p>Transaction status.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>transactionType</td>
            <td>To One Association</td>
            <td><p>Transaction type.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>name</li>
</ul></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>unbillableTransactions</td>
            <td>To Many Association</td>
            <td>BillableChargeUnbillableTransaction</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>







