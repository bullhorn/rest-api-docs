# Pay and Bill - AccountingPeriod

Defines a financial period—typically marked by start and end dates—within which billing and revenue transactions are grouped, reported, and reconciled.

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
            <td>Accounting Period date.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>