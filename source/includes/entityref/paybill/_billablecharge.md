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
        <tr class="even">
            <td>id</td>
            <td>Integer</td>
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>addedByUser</td>
            <td>To-one association</td>
            <td>CorporateUser</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billMasterTransactionDistributionBatches</td>
            <td>To-many association</td>
            <td>BillMasterTransactionDistributionBatch</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billMasters</td>
            <td>To-many association</td>
            <td>BillMaster</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billableTransactions</td>
            <td>To-many association</td>
            <td>BillableChargeBillableTransaction</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingCalendarInstances</td>
            <td>To-many association</td>
            <td>CalendarInstance</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billingClientContact</td>
            <td>To-one association</td>
            <td>ClientContact</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingClientCorporation</td>
            <td>To-one association</td>
            <td>ClientCorporation</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billingCorporateUser</td>
            <td>To-one association</td>
            <td>CorporateUser</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingFrequency</td>
            <td>String (20)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billingProfile</td>
            <td>To-one association</td>
            <td>BillingProfile</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billingSchedule</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billingSyncBatchFileAttachments</td>
            <td>To-many association</td>
            <td>BillingSyncBatchFileAttachment</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>candidate</td>
            <td>To-one association</td>
            <td>Candidate</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>ClientCorporation</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>currencyUnit</td>
            <td>To-one association</td>
            <td>CurrencyUnit</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>description</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>entryTypeLookup</td>
            <td>To-one association</td>
            <td>EntryTypeLookup</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>expenseSheet</td>
            <td>To-one association</td>
            <td>ExpenseSheet</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>externalID</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment1</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment1</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment2</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment2</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment3</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment3</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment4</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment4</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment5</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment5</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerServiceCode</td>
            <td>To-one association</td>
            <td>GeneralLedgerServiceCode</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerStatus</td>
            <td>To-one association</td>
            <td>UnbilledRevenueGeneralLedgerExportStatusLookup</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>hasAdjustment</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>hasRebill</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>invoiceStatements</td>
            <td>To-many association</td>
            <td>InvoiceStatement</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>invoiceTerm</td>
            <td>To-one association</td>
            <td>InvoiceTerm</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>invoicedTransactions</td>
            <td>To-many association</td>
            <td>BillableChargeInvoicedTransaction</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isInvoiced</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>jobOrder</td>
            <td>To-one association</td>
            <td>JobOrder</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>markAsReadyEligible</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>maxAccountingPeriod</td>
            <td>To-one association</td>
            <td>AccountingPeriod</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>minAccountingPeriod</td>
            <td>To-one association</td>
            <td>AccountingPeriod</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>payBillCycles</td>
            <td>To-many association</td>
            <td>PayBillCycle</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>periodEndDate</td>
            <td>Date</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placement</td>
            <td>To-one association</td>
            <td>Placement</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>readyToBillOverride</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>To-one association</td>
            <td>BillableChargeStatusLookup</td>
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
            <td>To-many association</td>
            <td>BillableChargeSummaryTransaction</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>timeAndExpenseBranch</td>
            <td>String (32)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timesheet</td>
            <td>To-one association</td>
            <td>Timesheet</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>transactionAccountingPeriods</td>
            <td>To-many association</td>
            <td>AccountingPeriod</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>transactionStatus</td>
            <td>To-one association</td>
            <td>TransactionStatus</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>transactionType</td>
            <td>To-one association</td>
            <td>TransactionType</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>unbillableTransactions</td>
            <td>To-many association</td>
            <td>BillableChargeUnbillableTransaction</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>

