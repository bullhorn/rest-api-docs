# Pay and Bill - DirectDepositAccountTypeLookup

Contains description of Direct Deposit Account

CRUD Access - READ

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
            <th>DirectDepositAccountTypeLookup fields</th>
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
            <td>hasIntegration</td>
            <td>Boolean</td>
            <td>: Indicates whether the Direct Deposit Account Type should be flagged by the API for custom processes, such as pay card registration.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Whether or not the direct deposit type is deleted</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isPayCard</td>
            <td>Boolean</td>
            <td>Identifies whether the record is marked as a Pay Card account type within the Bullhorn system</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>label</td>
            <td>String (50)</td>
            <td>Name of the Direct Deposit Type</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>