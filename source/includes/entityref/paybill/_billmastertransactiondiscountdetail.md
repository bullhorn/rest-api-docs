# Pay and Bill - BillMasterTransactionDiscountDetail

Represents the denormalized details of a discount rate version for a BillMasterTransactionDiscountRate

CRUD Access - READ

Entitlements - View Billable Charge

<table>
    <colgroup>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
    </colgroup>
    <thead>
        <tr class="header">
            <th>BillMasterTransactionDiscountDetail fields</th>
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
            <td>Unique Identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billMasterTransactionDiscountRates</td>
            <td>To-many association</td>
            <td><p>Associated BillMasterTransactionDiscountRates</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td><span>calculatePriority</span></td>
            <td>Integer</td>
            <td><span>Value which determines order that the discount is applied when there are more than one.</span>
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>calculateAndDisplayOnInvoice</td>
            <td>Boolean</td>
            <td>If true, discount will be applied to the InvoiceStatement.discountAmount
                calculation
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date the entity was added.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>discountRate</td>
            <td>To-one association</td>
            <td><p>Associated Discount Rate.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                    <li>versionID</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>ignoreForSalesTaxCalculations</td>
            <td>Boolean</td>
            <td>If false, discount will be applied to the base amount used for tax
                calculations
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>rate</td>
            <td>BigDecimal</td>
            <td><br/></td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>sentToAccountsReceivable</td>
            <td>Boolean</td>
            <td><br/></td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>title</td>
            <td>String (200)</td>
            <td><br/></td>
            <td><br/></td>
            <td><br/></td>
        </tr>
    </tbody>
</table>