# Pay and Bill - InvoiceStatementSurchargeRate

Represents the rounded subtotals for unique surcharge rates tied to an invoice statement.

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
            <th>InvoiceStatementSurchargeRate fields</th>
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
            <td>billMasterTransactionSurchargeDetail</td>
            <td>To-one association</td>
            <td><p>Associated BillMasterTransactionSurchargeDetail</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>surchargeAmount</td>
            <td>BigDecimal</td>
            <td><br/></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>surchargeRate</td>
            <td>To-one association</td>
            <td><p>Associated Surcharge Rate.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>invoiceStatement</td>
            <td><p>To-One association</p>
                <p>(InvoiceStatement)</p></td>
            <td>The Invoice Statement object tied to this Invoice Statement Surcharge Rate</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>rate</td>
            <td>BigDecimal</td>
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