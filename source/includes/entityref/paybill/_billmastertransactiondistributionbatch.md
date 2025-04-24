# Pay and Bill - BillMasterTransactionDistributionBatch

Read-only entity used to track which [BillMasterTransactions](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-billmastertransactions) are ready for revenue recognition distribution record creation

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
            <th>BillMasterTransactionDistributionBatch fields</th>
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
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>accountingDate</td>
            <td>Date</td>
            <td>Accounting Date.</td>
            <td> </td>
            <td> </td>
        </tr>
        <tr class="odd">
            <td>batchStatus</td>
            <td>To-one association (BatchStatusLookup)</td>
            <td>Status of this entity.</td>
            <td>X</td>
            <td> </td>
        </tr>
        <tr class="even">
            <td>billableCharges</td>
            <td>To-many association (BillableCharge)</td>
            <td>Billable Charges associated to this entity.</td>
            <td> </td>
            <td> </td>
        </tr>
        <tr class="odd">
            <td>billMasterTransactions</td>
            <td>To-many association (Bill Master Transaction)</td>
            <td>Bill Master Transactions associated to this entity.</td>
            <td> </td>
            <td> </td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date on which the entity was created.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date on which the entity was last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To-one association (CorporateUser)</td>
            <td>
                <p>Corporate User who is the owner of this entity. The default value is the user who created the entity.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>firstName</li>
                    <li>lastName</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>