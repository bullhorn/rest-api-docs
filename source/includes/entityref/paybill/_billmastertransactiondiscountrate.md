# Pay and Bill - BillMasterTransactionDiscountRate

Represents an association between a [BillMasterTransactions](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-billmastertransactions) and [DiscountRate](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-discountrate).

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
            <th>BillMasterTransactionDiscountRate fields</th>
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
            <td>	Amount used to calculate the total sales tax for the entity, in conjunction with the discountRate.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billMasterTransaction</td>
            <td>To-one association (BillMasterTransaction)</td>
            <td>
                <p>Associated Bill Master Transaction.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr><tr class="even">
            <td>billMasterTransactionDiscountDetail</td>
            <td>To-one association (BillMasterTransactionDiscountDetail)</td>
            <td>
             <p>Associated BillMasterTransactionDiscountDetail.</p>
             <p>Default fields:</p>
             <ul>
                 <li>id</li>
             </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>currencyUnit</td>
            <td>To-one association (CurrencyUnit)</td>
            <td>
                <p>Associated Currency Unit.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
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
            <td>discountAmount</td>
            <td>BigDecimal</td>
            <td>Calculated by multiplying the baseAmount by the discountRate.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>discountRate</td>
            <td>To-one association (DiscountRate)</td>
            <td>
                <p>Associated Discount Rate; used to calculate discountAmount in conjunction with baseAmount.</p>
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
            <td>discountRateVersionID</td>
            <td>Integer</td>
            <td>Associated version used for calculating the discountAmount.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>reversalOfTransactionDiscountRate</td>
            <td>To-one association (BillMasterTransactionDiscountRate)</td>
            <td>
                <p>Associated reversed Bill Master Transaction Discount Rate.</p>
            </td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
