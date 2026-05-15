# Pay and Bill - AccountingPeriod

Represents a discrete financial period used to group, close, and reconcile billing and payroll transactions in the Bullhorn pay-and-bill workflow. Each AccountingPeriod anchors the transactions (BillMaster, PayMaster) that fall within it, enabling period-end close processes and GL export by date range.

CRUD Access - READ.

Entitlements - View Accounting Period

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
            <th>AccountingPeriod fields</th>
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
            <td>accountingPeriodDate</td>
            <td>Date</td>
            <td>The date that identifies this accounting period. Used to stamp and group transactions that fall within the period.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date and time when this record was created.</td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>

## Notes

AccountingPeriod records are system-managed and created automatically by the accounting period roll-forward process (configured via AccountingPeriodSetting). Integrations should treat these as read-only reference data and use the `accountingPeriodDate` to correlate BillMaster and PayMaster transactions to the correct period.

The entity supports the `query` operation. Use `accountingPeriodDate` as a filter to retrieve specific periods — for example, to pull all transactions closed within a given month.