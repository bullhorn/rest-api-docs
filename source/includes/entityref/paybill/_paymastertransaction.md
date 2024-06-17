# Pay and Bill - PayMasterTransaction

Read-only entity that represents a PayMasterTransaction.

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
            <th>PayMasterTransaction fields</th>
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
            <td>AccountingPeriod</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>adjustmentSequenceNumber</td>
            <td>Integer</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>amount</td>
            <td>BigDecimal</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>comment</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>currencyUnit</td>
            <td>To-one association</td>
            <td>CurrencyUnit</td>
            <td>X</td>
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
            <td>editHistories</td>
            <td>To-many association</td>
            <td>PayMasterTransactionEditHistory</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isCustomRate</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>netAmount</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>netQuantity</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>payExportBatch</td>
            <td>To-one association</td>
            <td>PayExportBatch</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>payExportBatches</td>
            <td>To-many association</td>
            <td>PayExportBatch</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payMaster</td>
            <td>To-one association</td>
            <td>PayMaster</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>payPeriodEndDate</td>
            <td>Date</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>quantity</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>rate</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>recordingDate</td>
            <td>Date</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>reversalOfTransaction</td>
            <td>To-one association</td>
            <td>PayMasterTransaction</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>timestamp</td>
            <td>byte[]</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>transactionOrigin</td>
            <td>To-one association</td>
            <td>TransactionOrigin</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>transactionType</td>
            <td>To-one association</td>
            <td>TransactionType</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>unitOfMeasure</td>
            <td>To-one association</td>
            <td>UnitOfMeasure</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>version</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>


