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
            <td>
                <p>Corporate User.</p>
                <p>Default Fields:</p>
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
            <td>canExport</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
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
        <tr class="even">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>
                <p>Client Corporation.</p>
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
            <td>department</td>
            <td>String (100)</td>
            <td>Department.</td>
            <td></td>
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
            <td>employeeType</td>
            <td>String (30)</td>
            <td>Tax form type.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>entryTypeLookup</td>
            <td>To-one association</td>
            <td>EntryTypeLookup.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>expenseSheet</td>
            <td>To-one association</td>
            <td>ExpenseSheet.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>exportedTransactions</td>
            <td>To-many association</td>
            <td>PayableChargeExportedTransactions.</td>
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
                <p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment2 is configured as Class, which allows users to specify the type of the ledger.</p>
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
                <p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment3 is configured as Class, which allows users to specify the type of the ledger.</p>
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
                <p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment4 is configured as Class, which allows users to specify the type of the ledger.</p>
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
                <p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment5 is configured as Class, which allows users to specify the type of the ledger.</p>
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
            <td>hasAdjustment</td>
            <td>Boolean</td>
            <td>Indicates whether payable charge has an adjustment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobOrder</td>
            <td>To-one association</td>
            <td>
                <p>Job Order.</p>
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
            <td>locationState</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>maxAccountingPeriod</td>
            <td>To-one association</td>
            <td>Maximum Accounting Period of all transactions on payable charge.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>minAccountingPeriod</td>
            <td>To-one association</td>
            <td>Minimum Accounting Period of all transactions on payable charge.</td>
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
            <td>
                <p>Associated PayMasters.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>payableTransactions</td>
            <td>To-many association</td>
            <td>PayableChargePayableTransactions.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>periodEndDate</td>
            <td>Date</td>
            <td>Period end date.</td>
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
            <td>readyToPayOverride</td>
            <td>Boolean</td>
            <td>Ready to pay status override.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>To-one association</td>
            <td>
                <p>PayableChargeStatusLookup.</p>
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
            <td>Accounting Periods of all transactions.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>transactionStatus</td>
            <td>To-one association</td>
            <td>
                <p>Transaction status.</p>
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
                <p>Transaction origin.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>


