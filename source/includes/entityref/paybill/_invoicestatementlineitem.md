# Pay and Bill - InvoiceStatementLineItem

Represents an invoice line item.

CRUD Access - READ

Entitlements - Add Billable Charge, Edit Billable Charge, View Billable Charge.

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
            <th>InvoiceStatementLineItem fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="odd">
            <td><p>id</p></td>
            <td><p>Integer</p></td>
            <td><p>Invoice Statement Line Item ID: Unique identifier for this entity</p></td>
            <td><p>X</p></td>
            <td><p>X</p></td>
        </tr>
        <tr class="even">
            <td>billMasterTransactions</td>
            <td><p>To-Many association</p></td>
            <td><p> <span>Bill Master Transaction</span></p>
                <p>Fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td> X</td>
        </tr>
        <tr class="odd">
            <td><p>comment</p></td>
            <td>String (MaxLength)</td>
            <td><p>Comment(s)</p></td>
            <td><p><br/></p></td>
            <td><p><br/></p></td>
        </tr>
        <tr class="even">
            <td>currencyUnit</td>
            <td><p>To-one association</p></td>
            <td><p>Currency Unit</p>
                <p>Fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td><p><span>Timestamp</span></p></td>
            <td><p><span>Entity create date</span></p></td>
            <td>X </td>
            <td>X </td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td><p><span>Timestamp</span></p></td>
            <td><p><span>Entity last modified date</span></p></td>
            <td>X</td>
            <td>X </td>
        </tr>
        <tr class="odd">
            <td>description</td>
            <td><p><span>String (<span>MaxLength</span>)</span></p></td>
            <td><p>Description</p></td>
            <td><br/></td>
            <td><p><br/></p></td>
        </tr>
        <tr class="even">
            <td>groupByDisplay</td>
            <td><p><span>String (<span>MaxLength</span>)</span></p></td>
            <td><p>Group By Display Fields</p></td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>groupBys</td>
            <td><p>To-many association</p></td>
            <td><p>Invoice Statement Line Item Group By</p>
                <p>Fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td> X</td>
        </tr>
        <tr class="even">
            <td>invoiceStatement</td>
            <td><p>To-one association</p></td>
            <td><p>Invoice Statement</p>
                <p>Fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td> X</td>
        </tr>
        <tr class="odd">
            <td>invoiceStatementLineDistributions</td>
            <td>One-to-many Association</td>
            <td><span>InvoiceStatementLineDistributions that the InvoiceStatementLineItem is a part of</span>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>quantity</td>
            <td><p>BigDecimal</p></td>
            <td><p>Number of subjects</p></td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>rate</td>
            <td>BigDecimal</td>
            <td>Rate of cost of subjects</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>subtotal</td>
            <td>BigDecimal</td>
            <td>quantity * rate</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>summarizeBys</td>
            <td>To-many association</td>
            <td><p>Invoice Statement Summarize By</p>
                <p>Fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td> X</td>
        </tr>
        <tr class="even">
            <td>taxAmount</td>
            <td>BigDecimal</td>
            <td>Taxed amount</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>total</td>
            <td>BigDecimal</td>
            <td>Calculation of all values</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>chargeTypeLookupID</td>
            <td>Integer</td>
            <td>Identifies the charge type</td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>discountAmount</td>
            <td>BigDecimal</td>
            <td>Rounded total for unique discount rates tied to transactions represented by invoice statement line</td>
            <td></br></td>
            <td> X</td>
        </tr>
        <tr class="even">
            <td>surchargeAmount</td>
            <td>BigDecimal</td>
            <td>Rounded total for unique surcharge rates tied to transactions represented by invoice statement line</td>
            <td></td>
            <td> X</td>
        </tr>
    </tbody>
</table>