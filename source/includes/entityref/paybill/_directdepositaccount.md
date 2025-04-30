# Pay and Bill - DirectDepositAccount

Stores bank account details required for processing direct deposit payments, including information like account and routing numbers associated with an employee or contractor.

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
            <th>DirectDepositAccount fields</th>
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
            <td>allocationMethod</td>
            <td>String(10)</td>
            <td>Method of allocation for this account (either "Amount" or "Percent").</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>amount</td>
            <td>BigDecimal</td>
            <td>The amount of a Candidate's check that should go to this account.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>percentValue</td>
            <td>BigDecimal</td>
            <td>The percentage of a Candidate's check that should go to this account.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>remainder</td>
            <td>Boolean</td>
            <td>If true, the remainder of a Candidate's check goes to this account.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>currencyUnit</td>
            <td>To-one association</td>
            <td>
                <p>Currency unit.</p>
                <p>Default fields:</p>
                <ul>
                <li>id</li>
                <li>alphabeticCode</li>
                <li>name</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>bankName</td>
            <td>String (200)</td>
            <td>The name of the bank where the account is held.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>accountNumber</td>
            <td>String</td>
            <td>The account number for the bank account in question.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>transitNumber</td>
            <td>String (50)</td>
            <td>The transit number for the bank account in question.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>institutionNumber</td>
            <td>String (50)</td>
            <td>The institution number for the bank account in question, used internationally.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>directDepositAccountTypeLookup</td>
            <td>To-one association</td>
            <td>An id of 1 indicates Checking, 2 Savings, 3 PayCard.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>candidate</td>
            <td>To-one association</td>
            <td>The Candidate associated with this bank account.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>paymentOrder</td>
            <td>Integer</td>
            <td>The order this account should be processed when processing payroll.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Indicates whether this record is marked as deleted in the Bullhorn system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>deletedByUserID</td>
            <td>Integer</td>
            <td>User who deleted this DirectDepositAccount.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date on which this account was added to Bullhorn.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date on which this account was modified in Bullhorn.</td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>


     
        
