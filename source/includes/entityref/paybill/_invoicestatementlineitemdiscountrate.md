# Pay and Bill - InvoiceStatementLineItemDiscountRate

Represents the rounded subtotals for unique [DiscountRates](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-discountrate) tied to an [InvoiceStatementLineItem](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-invoicestatementlineitem).

CRUD Access - READ

Entitlements - View Any Invoice Statement

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
            <th>InvoiceStatementLineItemDiscountRate fields</th>
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
            <td>baseAmount</td>
            <td>BigDecimal</td>
            <td><br/></td>
            <td> X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billMasterTransactionDiscountDetail</td>
            <td>To-one association</td>
            <td><p>Associated BillMasterTransactionDiscountDetail.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>calculatePriority</td>
            <td>Integer</td>
            <td>Value which determines order that the discount is applied when there are more than
                one.
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>calculateAndDisplayOnInvoice</td>
            <td>Boolean</td>
            <td>If true, discount will be applied to the InvoiceStatement.discountAmount calculation.
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>discountAmount</td>
            <td>BigDecimal</td>
            <td><br/></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
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
        <tr class="even">
            <td>ignoreForSalesTaxCalculations</td>
            <td>Boolean</td>
            <td>If false, discount will be applied to the base amount used for tax calculations.</td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>invoiceStatementLineItem</td>
            <td><p>To-One association</p>
                <p>(InvoiceStatementLineItem)</p></td>
            <td>The Invoice Statement Line Item object tied to this entity.</td>
            <td><br/></td>
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
