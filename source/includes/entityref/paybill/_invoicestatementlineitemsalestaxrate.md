# Pay and Bill - InvoiceStatementLineItemSalesTaxRate

Represents the rounded subtotals for unique sales tax rates to an invoice statement line item

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
            <th>InvoiceStatementLineItemSalesTaxRate fields</th>
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
            <td>allSalesTaxRate</td>
            <td>To-one association</td>
            <td>Associated AllSalesTaxRate</td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>baseAmount</td>
            <td>BigDecimal</td>
            <td><br/></td>
            <td> X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>billMasterTransactionSalesTaxDetail</td>
            <td>To-one association</td>
            <td><p>Associated BillMasterTransactionSalesTaxDetail</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>externalSalesTaxRate</td>
            <td>To-one association</td>
            <td>Associated ExternalSalesTaxRate (should be populated if salesTaxRate is
                null)
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td><span>invoiceStatementLineItem</span></td>
            <td><p>To-one association</p>
                <p>(InvoiceStatementLineItem)</p></td>
            <td>The Invoice Statement object tied to this Invoice Statement Sales Tax Rate</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>jurisdictionName</td>
            <td>String (200)</td>
            <td><br/></td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>jurisdictionType</td>
            <td><p>Many-To-One association</p>
                <p>(TaxJurisdictionTypeLookup)</p></td>
            <td><p>Jurisdiction type.</p>
                <p>Options are:</p>
                    <ol>
                        <li>City</li>
                        <li>County</li>
                        <li>District</li>
                        <li>State</li>
                        <li>Other</li>
                        <li>MTA</li>
                    </ol>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>rate</td>
            <td>BigDecimal</td>
            <td><br/></td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>salesTaxRate</td>
            <td><p>To-one association</p>
                <p>(SalesTaxRate)</p></td>
            <td><p>Associated Sales Tax Rate. (should be populated
                if externalSalesTaxRateID is null)</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                    <li>jurisdictionName</li>
                    <li>versionID</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>taxAmount</td>
            <td>BigDecimal</td>
            <td><br/></td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>