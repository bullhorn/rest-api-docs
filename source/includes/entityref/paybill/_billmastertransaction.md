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
        <tr class="even">
            <td>id</td>
            <td>Integer</td>
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>accountingPeriod</td>
            <td>To-one association</td>
            <td>
                <p>Accounting Period.</p>
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
            <td>adjustmentSequenceNumber</td>
            <td>Integer</td>
            <td>Adjustment sequence number.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>amount</td>
            <td>BigDecimal</td>
            <td>Amount.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billMaster</td>
            <td>To-one association</td>
            <td>
                <p>Associated BillMaster.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billMasterTransactionDistributionBatch</td>
            <td>To-one association</td>
            <td>BillMasterTransactionDistributionBatch.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>comment</td>
            <td>String (2147483647)</td>
            <td>Comments.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>currencyUnit</td>
            <td>To-one association</td>
            <td>
                <p>Associated CurrencyUnit.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td>X</td>
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
            <td>editHistories</td>
            <td>To-many association</td>
            <td>BillMasterTransactionEditHistory.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>invoiceStatement</td>
            <td>To-one association</td>
            <td>
                <p>Associated InvoiceStatement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>invoiceStatementBatch</td>
            <td>To-one association</td>
            <td>
                <p>Associated InvoiceStatementBatch.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>invoiceStatementLineItem</td>
            <td>To-one association</td>
            <td>
                <p>Associated InvoiceStatementLineItem.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isCustomRate</td>
            <td>Boolean</td>
            <td>Whether transaction is a custom rate.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Whether transaction is deleted.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isUnbillable</td>
            <td>Boolean</td>
            <td>Whether transaction is marked as unbillable.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>needsReview</td>
            <td>Boolean</td>
            <td>Whether transaction needs review.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>netAmount</td>
            <td>BigDecimal</td>
            <td>Net amount.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>netQuantity</td>
            <td>BigDecimal</td>
            <td>Net quantity.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>payPeriodEndDate</td>
            <td>Date</td>
            <td>Pay period end date.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>quantity</td>
            <td>BigDecimal</td>
            <td>Quantity.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>rate</td>
            <td>BigDecimal</td>
            <td>Rate.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>recordingDate</td>
            <td>Date</td>
            <td>Recording date.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>reversalOfTransaction</td>
            <td>To-one association</td>
            <td>Associated reversed BillMasterTransaction.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>timestamp</td>
            <td>byte[]</td>
            <td>Rowversion.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>transactionOrigin</td>
            <td>To-one association</td>
            <td>
                <p>Associated TransactionOrigin.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>transactionType</td>
            <td>To-one association</td>
            <td>
                <p>Associated TransactionOrigin.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>unbilledRevenueDistributions</td>
            <td>To-many association</td>
            <td>UnbilledRevenueDistribution.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>unbilledRevenueGeneralLedgerExportStatusLookup</td>
            <td>To-one association</td>
            <td>
                <p>Associated UnbilledRevenueGeneralLedgerExportStatusLookup.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
                <p>Value defaulted to 'Ready for Distribution'</p>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>unitOfMeasure</td>
            <td>To-one association</td>
            <td>
                <p>Associated UnitOfMeasure.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>version</td>
            <td>Integer</td>
            <td>To be used by TimeLaborEval in the future.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>wasUnbilled</td>
            <td>Boolean</td>
            <td>Whether transaction was unbilled.</td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>


