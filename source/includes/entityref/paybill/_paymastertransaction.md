# Pay and Bill - PayMasterTransaction

Details an individual payment transaction within a PayMaster record, capturing specific amounts, deductions, and adjustments that compose the overall payroll disbursement.

CRUD Access - READ

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
            <td>comment</td>
            <td>String (2147483647)</td>
            <td>Comment.</td>
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
            <td>PayMasterTransactionEditHistory.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isCustomRate</td>
            <td>Boolean</td>
            <td>Whether transaction is a custom rate.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Whether transaction is deleted.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>netAmount</td>
            <td>BigDecimal</td>
            <td>Net amount.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>netQuantity</td>
            <td>BigDecimal</td>
            <td>Net quantity.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>payExportBatch</td>
            <td>To-one association</td>
            <td>
                <p>Pay Export Batch.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>payExportBatches</td>
            <td>To-many association</td>
            <td>PayExportBatches.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payMaster</td>
            <td>To-one association</td>
            <td>
                <p>Pay master.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
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
            <td>
                <p>Pay Master Transaction.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
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
                <p>Transaction origin.</p>
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
                <p>Transaction type.</p>
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
            <td>unitOfMeasure</td>
            <td>To-one association</td>
            <td>
                <p>Unit of measure.</p>
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
    </tbody>
</table>


