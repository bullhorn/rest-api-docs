# Pay and Bill - BillMasterTransactionSalesTaxRate

Represents an association between a BillMasterTransaction and SalesTaxRate

CRUD Access - READ

Entitlements - None

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
            <th>BillMasterTransactionSalesTaxRate fields</th>
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
            <td>adjustmentSequenceNumber</td>
            <td>Integer</td>
            <td>Adjustment sequence number.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>baseAmount</td>
            <td>BigDecimal</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billMasterTransaction</td>
            <td>To One Association</td>
            <td>
                <p>BillMasterTransaction</p>
                <p>Associated Bill Master Transaction</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>currencyUnit</td>
            <td>To One Association</td>
            <td>
                <p>CurrencyUnit</p>
                <p>Associated Currency Unit.</p>
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
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date the entity was added.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>reversalOfTransactionSalesTaxRate</td>
            <td>To One Association</td>
            <td>Associated reversed Bill Master Transaction Sales Tax Rate.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>salesTaxRate</td>
            <td>To One Association</td>
            <td>
                <p>Associated Currency Unit.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                    <li>versionID</li>
                    <li>jurisdictionName</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>salesTaxRateVersionID</td>
            <td>Integer</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>taxAmount</td>
            <td>BigDecimal</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>