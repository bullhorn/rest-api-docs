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
            <td>
                <p>CorporateUser - this is the internal user who added the record.</p>
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
            <td><p>BillableChargeHoldStatusLookup - this is the hold status lookup for the BillableCharge.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billableTransactions</td>
            <td>To-many association</td>
            <td>BillableChargeBillableTransaction - list of associated billable charge transactions.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billingCalendarInstances</td>
            <td>To-many association - list of associated billing calendar instances.</td>
            <td>CalendarInstance.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingClientContact</td>
            <td>To-one association</td>
            <td>
                <p>Billing contact - the client contact associated with this billable charge.</p>
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
                <p>ClientCorporation - this is the bill-to company.</p>
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
                <p>CorporateUser.</p>
                <p><span>Default fields:</span></p>
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
                <p>Billing profile.</p>
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
            <td>BillingSyncBatchFileAttachment - list of associated billing sync batch file attachments.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>candidate</td>
            <td>To-one association</td>
            <td>
                <p>Candidate.</p>
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
                <p>ClientCorporation.</p>
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
                <p>Currency unit.</p>
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
            <td>Description.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>entryTypeLookup</td>
            <td>To-one association</td>
            <td>EntryTypeLookup - options are Timesheet or Expense.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>expenseSheet</td>
            <td>To-one association</td>
            <td>Expense sheet.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>externalID</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment1</td>
            <td>To-one association</td>
            <td>
                <p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment1 is configured as Class, which allows users to specify the type of the ledger.</p>
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
                <p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment2 is configured as Division, which allows users to specify the type of the ledger.</p>
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
                <p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment3 is configured as Department, which allows users to specify the type of the ledger.</p>
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
                <p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment4 is configured as Country, which allows users to specify the type of the ledger.</p>
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
                <p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment5 is configured as Location, which allows users to specify the type of the ledger.</p>
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
            <td>GeneralLedgerServiceCode.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerStatus</td>
            <td>To-one association</td>
            <td>
                <p>UnbilledRevenueGeneralLedgerExportStatusLookup - General Ledger Exports Status.</p>
                <p>Options are:</p>
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
            <td>Indicates whether billable charge has an adjustment. 
            This field is set automatically when an adjustment has occurred in the system, and it can also be manually overridden later if the charge needs to be manually adjusted.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>hasRebill</td>
            <td>Boolean</td>
            <td>Indicates whether billable charge has been rebilled.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoiceStatements</td>
            <td>To-many association</td>
            <td>Invoice statements.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>invoiceTerm</td>
            <td>To-one association</td>
            <td>
                <p>InvoiceTerm.</p>
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
            <td>InvoicedTransactions - lists IDs of invoiced transactions.</td>
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
            <td>To-one association</td>
            <td>
                <p>Job.</p>
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
            <td>Indicates whether billable charge is ready eligible.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>maxAccountingPeriod</td>
            <td>To-one association</td>
            <td>
                <p>Maximum Accounting Period of all transactions on billable charge.</p>
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
                <p>Minimum Accounting Period of all transactions on billable charge.</p>
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
            <td>This is the comment associated with the billableChargeHoldStatusLookup.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payBillCycles</td>
            <td>To-many association</td>
            <td>
                <p>PayBillCycles - displays the associated Billing Cycle(s).</p>
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
            <td>Period end date.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placement</td>
            <td>To-one association</td>
            <td>
                <p>Placement.</p>
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
            <td>Ready to bill override.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>To-one association</td>
            <td>
                <p>BillableChargeStatusLookup.</p>
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
            <td>Subtotal.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>summaryTransactions</td>
            <td>To-many association</td>
            <td>BillableChargeSummaryTransactions.</td>
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
            <td>Timesheet.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>transactionAccountingPeriods</td>
            <td>To-many association</td>
            <td>
                <p>List of Accounting Periods of all transactions.</p>
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
                <p>TransactionStatus.</p>
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
                <p>Transaction type.</p>
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
            <td>BillableChargeUnbillableTransaction.</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
