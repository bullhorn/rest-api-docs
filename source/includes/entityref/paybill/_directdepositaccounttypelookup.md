# Pay and Bill - DirectDepositAccountTypeLookup

Provides a standardized set of lookup values that classify the types of [DirectDepositAccounts](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-directdepositaccount) (for example, checking or savings) used during payment processing.

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
            <td>Indicates whether the Direct Deposit Account Type needs to be picked up by the API for processes like registration of a pay card.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Whether the direct deposit type is deleted</td>
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