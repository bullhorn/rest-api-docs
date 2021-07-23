# Pay and Bill - BillMasterTransactionSurchargeRate

Represents an association between a bill master transaction and surcharge rate

CRUD Access - READ

Entitlements - None

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
            <th>BillMasterTransactionSurchargeRate fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="odd">
            <th><p>BillMasterTransactionSurchargeRate fields</p></th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
        <tr class="even">
            <td>id</td>
            <td>Integer</td>
            <td>Unique Identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>adjustmentSequenceNumber</td>
            <td><p>Integer</p></td>
            <td><p>Adjustment sequence number.</p></td>
            <td> X</td>
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
            <td>billMasterTransaction</td>
            <td>To-one association</td>
            <td><p>Associated Bill Master Transaction</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td> X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>currencyUnit</td>
            <td>To-one association</td>
            <td><p>Associated Currency Unit.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td> X</td>
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
            <td>reversalOfTransactionSurchargeRate</td>
            <td>To-one association</td>
            <td>Associated reversed Bill Master <span>Transaction</span> Surcharge Rate.
            </td>
            <td><br/></td>
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
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                    <li>versionID</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>surchargeRateVersionID</td>
            <td>Integer</td>
            <td><br/></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>surchargeAmount</td>
            <td>BigDecimal</td>
            <td><br/></td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>