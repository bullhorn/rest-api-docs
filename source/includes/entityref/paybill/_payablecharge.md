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
            <td>canExport</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
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
            <td>department</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>description</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>employeeType</td>
            <td>String (30)</td>
            <td></td>
            <td></td>
            <td>X</td>
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
            <td>exportedTransactions</td>
            <td>To-many association</td>
            <td>PayableChargeExportedTransaction</td>
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
            <td>GeneralLedgerSegment1</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment2</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment2</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment3</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment3</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment4</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment4</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment5</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment5</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerServiceCode</td>
            <td>To-one association</td>
            <td>GeneralLedgerServiceCode</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>hasAdjustment</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobOrder</td>
            <td>To-one association</td>
            <td>JobOrder</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>locationState</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>maxAccountingPeriod</td>
            <td>To-one association</td>
            <td>AccountingPeriod</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>minAccountingPeriod</td>
            <td>To-one association</td>
            <td>AccountingPeriod</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>payGroup</td>
            <td>String (255)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>payMasters</td>
            <td>To-many association</td>
            <td>PayMaster</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>payableTransactions</td>
            <td>To-many association</td>
            <td>PayableChargePayableTransaction</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>periodEndDate</td>
            <td>Date</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>persistedDepartment</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>persistedEmployeeType</td>
            <td>String (30)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>persistedLocation</td>
            <td>To-one association</td>
            <td>Location</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>persistedLocationState</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>persistedPayGroup</td>
            <td>String (255)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>persistedTimeAndExpenseBranch</td>
            <td>String (32)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>persistedTimeAndExpenseSource</td>
            <td>String (1)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>placement</td>
            <td>To-one association</td>
            <td>Placement</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>readyToPayOverride</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>To-one association</td>
            <td>PayableChargeStatusLookup</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>subtotal</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timeAndExpenseBranch</td>
            <td>String (32)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>timeAndExpenseSource</td>
            <td>String (1)</td>
            <td></td>
            <td></td>
            <td>X</td>
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
    </tbody>
</table>


