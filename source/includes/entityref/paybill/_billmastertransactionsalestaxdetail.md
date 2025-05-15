# Pay and Bill - BillMasterTransactionSalesTaxDetail

Represents the denormalized details of a sales tax rate version for a [BillMasterTransactionSalesTaxRate](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-billmastertransactionsalestaxrate).

CRUD Access - READ

Entitlements - View Billable Charge

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
        <th>BillMasterTransactionSalesTaxDetail fields</th>
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
        <td>Associated AllSalesTaxRate.</td>
        <td>X</td>
        <td><br/></td>
    </tr>
    <tr class="odd">
        <td>billMasterTransactionSalesTaxRates</td>
        <td>To-many association</td>
        <td><p>Associated BillMasterTransactionSalesTaxRates.</p>
            <p>Default fields:</p>
            <ul>
                <li>id</li>
            </ul>
        </td>
        <td><br/></td>
        <td><br/></td>
    </tr>
    <tr class="even">
        <td>dateAdded</td>
        <td>Timestamp</td>
        <td>Date the entity was added.</td>
        <td>X</td>
        <td>X</td>
    </tr>
    <tr class="odd">
        <td>jurisdictionName</td>
        <td>String (200)</td>
        <td><br/></td>
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
    </tbody>
</table>
