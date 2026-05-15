# Pay and Bill - BillableCharge

Represents a chargeable billing record generated from a timesheet or expense sheet, capturing the fee amount, rate details, billing period, and GL coding required to invoice a client. BillableCharges are the central object in the billing workflow: they are created when timesheets or expense sheets are approved, grouped into BillMasters for invoice generation, and flow through to InvoiceStatements that are sent to the client.

CRUD Access - READ

Entitlements - View Billable Charge, Add Billable Charge, Edit Billable Charge

The BillableCharge entity supports file attachments. Use `PUT /file/BillableCharge/{entityId}` to attach supporting documents. Attached files are stored as BillingSyncBatchFileAttachment records and are accessible via the `billingSyncBatchFileAttachments` association.

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
            <td>
                <p>CorporateUser - the internal user who added the record.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>firstName</li>
                    <li>lastName</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billMasterTransactionDistributionBatches</td>
            <td>To-many association</td>
            <td>BillMasterTransactionDistributionBatch - list of associated bill master transaction distribution batches.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billMasters</td>
            <td>To-many association</td>
            <td>
                <p>BillMaster - list of associated bill master records.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billableChargeHoldStatusLookup</td>
            <td>To-one association</td>
            <td>BillableChargeHoldStatusLookup - the current hold status of this charge. When set, indicates the charge is on hold and may prevent invoicing depending on the lookup's <code>doesPreventInvoicing</code> flag. A null value means the charge is not on hold.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billableTransactions</td>
            <td>To-many association</td>
            <td>BillMasterTransaction - list of bill master transactions associated with this billable charge.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billingCalendarInstances</td>
            <td>To-many association</td>
            <td>CalendarInstance - list of associated billing calendar instances.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingClientContact</td>
            <td>To-one association</td>
            <td>
                <p>ClientContact - the billing contact associated with this billable charge.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>firstName</li>
                    <li>lastName</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billingClientCorporation</td>
            <td>To-one association</td>
            <td>
                <p>ClientCorporation - the bill-to company.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingCorporateUser</td>
            <td>To-one association</td>
            <td>
                <p>CorporateUser - the internal user responsible for billing this charge.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>firstName</li>
                    <li>lastName</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billingFrequency</td>
            <td>String (20)</td>
            <td>Billing frequency.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingProfile</td>
            <td>To-one association</td>
            <td>
                <p>BillingProfile that determines where and how invoice statements for this charge are addressed and delivered. See <a href="../entityref.html#pay-and-bill-billingprofile">Pay and Bill - BillingProfile</a>.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>clientCorporation</li>
                    <li>title</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                    <li>versionID</li>
                    <li>billingClientCorporation</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billingSchedule</td>
            <td>Integer</td>
            <td>Billing schedule.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingSyncBatchFileAttachments</td>
            <td>To-many association</td>
            <td>BillingSyncBatchFileAttachment - list of file attachments associated with this billable charge. Files uploaded via <code>PUT /file/BillableCharge/{entityId}</code> appear here. See <a href="../entityref.html#pay-and-bill-billingsyncbatchfileattachment">Pay and Bill - BillingSyncBatchFileAttachment</a>.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>candidate</td>
            <td>To-one association</td>
            <td>
                <p>Candidate - the worker associated with this billable charge.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>firstName</li>
                    <li>lastName</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>
                <p>ClientCorporation - the owning corporation for this charge.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>currencyUnit</td>
            <td>To-one association</td>
            <td>
                <p>CurrencyUnit - the currency in which this charge is denominated.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>alphabeticCode</li>
                    <li>name</li>
                </ul>
            </td>
            <td></td>
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
            <td>String (2147483647)</td>
            <td>Free-text description of the charge.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>entryTypeLookup</td>
            <td>To-one association</td>
            <td>EntryTypeLookup - the source type of this charge. Options are Timesheet or Expense.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>expenseSheet</td>
            <td>To-one association</td>
            <td>ExpenseSheet - the expense sheet that generated this charge, if entryTypeLookup is Expense.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>externalID</td>
            <td>String (100)</td>
            <td>External identifier for integration with third-party billing or ERP systems.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment1</td>
            <td>To-one association</td>
            <td>
                <p>GeneralLedgerSegment - part of the Chart of Accounts structure. By default configured as Class, which allows users to specify the type of the ledger.</p>
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
            <td>generalLedgerSegment2</td>
            <td>To-one association</td>
            <td>
                <p>GeneralLedgerSegment - part of the Chart of Accounts structure. By default configured as Division.</p>
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
        <tr class="odd">
            <td>generalLedgerSegment3</td>
            <td>To-one association</td>
            <td>
                <p>GeneralLedgerSegment - part of the Chart of Accounts structure. By default configured as Department.</p>
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
            <td>generalLedgerSegment4</td>
            <td>To-one association</td>
            <td>
                <p>GeneralLedgerSegment - part of the Chart of Accounts structure. By default configured as Country.</p>
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
        <tr class="odd">
            <td>generalLedgerSegment5</td>
            <td>To-one association</td>
            <td>
                <p>GeneralLedgerSegment - part of the Chart of Accounts structure. By default configured as Location.</p>
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
            <td>generalLedgerServiceCode</td>
            <td>To-one association</td>
            <td>GeneralLedgerServiceCode - the GL service code for this charge, used to classify revenue type in the general ledger.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerStatus</td>
            <td>To-one association</td>
            <td>
                <p>UnbilledRevenueGeneralLedgerExportStatusLookup - the current GL export status of this charge. Options are:</p>
                <ol>
                    <li>Export Failed</li>
                    <li>Ready for Distribution</li>
                    <li>Stamped for Distribution</li>
                    <li>Creating Distribution</li>
                    <li>Ready for Export</li>
                    <li>Export Queued</li>
                    <li>Export in progress</li>
                    <li>Export Successful</li>
                </ol>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>hasAdjustment</td>
            <td>Boolean</td>
            <td>Indicates whether this billable charge has been adjusted. Set automatically when an adjustment occurs; can also be manually overridden if the charge requires manual adjustment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>hasRebill</td>
            <td>Boolean</td>
            <td>Indicates whether this billable charge has been rebilled.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoiceStatements</td>
            <td>To-many association</td>
            <td>InvoiceStatement - list of invoice statements that include this charge.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>invoiceTerm</td>
            <td>To-one association</td>
            <td>
                <p>InvoiceTerm - the payment terms applied to invoices generated from this charge.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>clientCorporation</li>
                    <li>title</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                    <li>versionID</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoicedTransactions</td>
            <td>To-many association</td>
            <td>BillMasterTransaction - list of BillMasterTransaction records on this charge that have been invoiced (i.e., where an InvoiceStatement has been generated).</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isInvoiced</td>
            <td>Boolean</td>
            <td>Indicates whether this billable charge has been included on an invoice statement. Filter on <code>isInvoiced = false</code> to find charges still awaiting invoicing.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>jobOrder</td>
            <td>To-one association</td>
            <td>
                <p>JobOrder - the job associated with this billable charge.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>title</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>markAsReadyEligible</td>
            <td>Boolean</td>
            <td>Indicates whether this charge is eligible to be marked as ready to bill. Computed by the system; cannot be set directly.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>maxAccountingPeriod</td>
            <td>To-one association</td>
            <td>
                <p>AccountingPeriod - the latest accounting period across all transactions on this charge.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>accountingPeriodDate</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>minAccountingPeriod</td>
            <td>To-one association</td>
            <td>
                <p>AccountingPeriod - the earliest accounting period across all transactions on this charge.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>accountingPeriodDate</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>onHoldComment</td>
            <td>String (2147483647)</td>
            <td>Free-text comment explaining why the charge is on hold. Populated alongside <code>billableChargeHoldStatusLookup</code> when a charge is placed on hold.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payBillCycles</td>
            <td>To-many association</td>
            <td>
                <p>PayBillCycle - the billing cycle(s) associated with this charge.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>periodEndDate</td>
            <td>Date</td>
            <td>The end date of the billing period covered by this charge.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placement</td>
            <td>To-one association</td>
            <td>
                <p>Placement - the placement that generated this charge.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>readyToBillOverride</td>
            <td>Boolean</td>
            <td>System-set flag indicating whether the ready-to-bill state has been overridden. Managed by the system; use the Mark as Ready service endpoint to change ready-to-bill state.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>To-one association</td>
            <td>
                <p>BillableChargeStatusLookup - the current status of this charge in the billing workflow.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                    <li>readOnly</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>subtotal</td>
            <td>BigDecimal</td>
            <td>The total billable amount for this charge before taxes, discounts, and surcharges.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>summaryTransactions</td>
            <td>To-many association</td>
            <td>BillMasterTransaction - list of summary BillMasterTransaction records rolled up to this charge.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>timeAndExpenseBranch</td>
            <td>String (32)</td>
            <td>The branch identifier from the time and expense system that originated this charge.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timesheet</td>
            <td>To-one association</td>
            <td>Timesheet - the timesheet that generated this charge, if entryTypeLookup is Timesheet.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>transactionAccountingPeriods</td>
            <td>To-many association</td>
            <td>
                <p>AccountingPeriod - all accounting periods covered by transactions on this charge.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>accountingPeriodDate</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>transactionStatus</td>
            <td>To-one association</td>
            <td>
                <p>TransactionStatus - the processing status of the underlying transactions.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>transactionType</td>
            <td>To-one association</td>
            <td>
                <p>TransactionType - the type of transaction that generated this charge (for example, Regular, Overtime, Holiday).</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>unbillableTransactions</td>
            <td>To-many association</td>
            <td>BillMasterTransaction - list of BillMasterTransaction records on this charge where isUnbillable = true.</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>

## Billing Lifecycle

BillableCharges sit between time capture and invoicing in the Bullhorn pay-and-bill workflow:

**Timesheet / ExpenseSheet approved** → BillableCharge created → **BillMaster generated** → InvoiceStatement sent to client

A charge's `status` and `isInvoiced` flag track where it is in this pipeline. The `markAsReadyEligible` flag indicates whether the system has determined the charge can be moved to ready-to-bill; the actual promotion is performed via the dedicated Mark as Ready service endpoint (requires the "Mark Billable Charge Ready" entitlement).

## Hold Status

A BillableCharge can be placed on hold by setting `billableChargeHoldStatusLookup`. Whether a hold prevents invoice generation depends on the lookup record's `doesPreventInvoicing` property. When placing a charge on hold, populate `onHoldComment` with the reason to preserve an audit trail.

## File Attachments

Supporting documents (such as approved timesheets, PO confirmations, or backup documentation for expenses) can be attached to a BillableCharge using the standard file endpoint:

```
PUT {corpToken}/file/BillableCharge/{entityId}
```

Uploaded files are stored as BillingSyncBatchFileAttachment records and are linked to the charge's associated BillMaster and BillingSyncBatch. To retrieve the file list for a charge, query the `billingSyncBatchFileAttachments` association:

```
GET {corpToken}/entity/BillableCharge/{id}?fields=billingSyncBatchFileAttachments
```

<aside class="notice">Only users with the <strong>View Billable Charge</strong> entitlement can read BillableCharge records. The <strong>Add Billable Charge</strong> and <strong>Edit Billable Charge</strong> entitlements gate create and update operations available through the BillableCharge service endpoints. All BillableCharge operations require the WFR OAuth feature on the API credentials.</aside>

## Common Integration Patterns

**Finding uninvoiced charges for a client:** Query on `isInvoiced = false` and `billingClientCorporation.id = {id}` to find charges awaiting invoicing. Always include `status` and `subtotal` in your fields to assess billing readiness.

**GL export integration:** Poll on `generalLedgerStatus` to track which charges have been distributed and exported to your ERP. The status moves from "Ready for Distribution" through to "Export Successful" as the GL pipeline processes the charge.

**Adjustment detection:** Filter on `hasAdjustment = true` to find charges that have been corrected after the original timesheet was approved. These typically require special handling in downstream billing systems.
