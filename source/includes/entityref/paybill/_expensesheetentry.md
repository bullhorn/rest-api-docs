# ExpenseSheetEntry

Details an individual expense item within an [ExpenseSheet](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-expensesheet), capturing information like date, amount, and expense category for precise tracking and validation.

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
            <th>ExpenseSheetEntry fields</th>
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
            <td>addedAtUtc</td>
            <td>Timestamp</td>
            <td>Record of when ExpenseSheetEntry was created.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>addedByUser</td>
            <td>To-one association</td>
            <td>CorporateUser default fields: 
                <li>id</li><li>firstName</li><li>lastName</li></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billEvalDate</td>
            <td>Date</td>
            <td>Date when &quot;billed&quot; field is evaluated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billed</td>
            <td>BigDecimal</td>
            <td>Amount to be billed.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>comment</td>
            <td>String (2000)</td>
            <td>A short comment to be added by the user to the ExpenseSheetEntry.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>currencyUnit</td>
            <td>To-one association</td>
            <td>CurrencyUnit fields: 
                <li>id</li><li>alphabeticCode</li><li>name</li></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>earnCode</td>
            <td>To-one association</td>
            <td>EarnCode default fields: 
                <li>id</li><li>code</li><li>externalID</li><li>title<br>Refer to the EarnCode entity for more details.</li></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>expenseSheet</td>
            <td>To-one association</td>
            <td>ExpenseSheet field: 
                <li>id</li></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>expenseSheetDay</td>
            <td>Date</td>
            <td>Date with which the ExpenseSheetEntry is associated with.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>expenseSheetEntryApprovalStatusLookup</td>
            <td>To-one association</td>
            <td>ExpenseSheetEntryApprovalStatusLookup options: 
                <li>Draft</li><li>Submitted</li><li>Approved</li><li>Completed</li><li>Rejected</li></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>expenseSheetVersion</td>
            <td>Integer</td>
            <td>Integer to store which version of the expenseSheet this entry is associated with.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>externalID</td>
            <td>String (100)</td>
            <td>User facing unique identifier.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>externalTimestamp</td>
            <td>Long</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>fileID</td>
            <td>Integer</td>
            <td>File associated with the ExpenseSheetEntry.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>lastModifiedAtUtc</td>
            <td>Timestamp</td>
            <td>Record of when the ExpenseSheetEntry was most recently modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>modifyingUser</td>
            <td>To-one association</td>
            <td>CorporateUser default fields: 
                <li>id</li><li>firstName</li><li>lastName</li></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>paid</td>
            <td>BigDecimal</td>
            <td>Amount to be paid.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>payEvalDate</td>
            <td>Date</td>
            <td>Date when &quot;paid&quot; field is evaluated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>quantity</td>
            <td>BigDecimal</td>
            <td>Total amount.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>timestamp</td>
            <td>Byte[]</td>
            <td>Time stored in byte format.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>unitOfMeasure</td>
            <td>To-one association</td>
            <td>UnitOfMeasure fields: 
                <li>id</li><li>label</li></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>voidingExpenseSheetEntry</td>
            <td>To-one association</td>
            <td>ExpenseSheetEntry fields: 
                <li>id </li></td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
