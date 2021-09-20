# Pay and Bill - BillMasterTransactionSurchargeDetail

Represents the denormalized details of a surcharge rate for a BillMasterTransactionSurchargeRate.

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
            <th>BillMasterTransactionSurchargeDetail fields</th>
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
            <td>billMasterTransactionSurchargeRates</td>
            <td>To-many association</td>
            <td><p>Associated BillMasterTransactionSurchargeRates</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
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
        <tr class="odd">
            <td>title</td>
            <td>String (200)</td>
            <td><br/></td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>rate</td>
            <td>Decimal (19, 6)</td>
            <td><br/></td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>amount</td>
            <td>Decimal (19,6)</td>
            <td><br/></td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>surchargeRateType</td>
            <td>To-one association</td>
            <td><br/></td>
            <td><br/></td>
            <td><br/></td>
        </tr>
    </tbody>
</table>