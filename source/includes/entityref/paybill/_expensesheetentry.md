# ExpenseSheetEntry

This entity represents the required certifications for a ExpenseSheetEntry.



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
            <td>Record of when Timesheet was created.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>addedByUser</td>
            <td>To-one association</td>
            <td>CorporateUser default fields: 
                <li>id<li>firstName<li>lastName</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billEvalDate</td>
            <td>Date</td>
            <td>Date when "billed" field is evaluated.</td>
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
                <li>id<li>alphabeticCode<li>name</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>earnCode</td>
            <td>To-one association</td>
            <td>EarnCode default fields: 
                <li>id<li>code<li>externalID<li>title<br>Refer to the EarnCode entity for more details.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>expenseSheet</td>
            <td>To-one association</td>
            <td>ExpenseSheet field: 
                <li>id</td>
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
                <li>Draft<li>Submitted<li>Approved<li>Completed<li>Rejected</td>
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
            <td>externalExpenseSheetEntryID</td>
            <td>String (100)</td>
            <td></td>
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
            <td>lastModifiedAtUtc</td>
            <td>Timestamp</td>
            <td>Record of when Timesheet was most recently modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>modifyingUser</td>
            <td>To-one association</td>
            <td>CorporateUser default fields: 
                <li>id<li>firstName<li>lastName</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>paid</td>
            <td>BigDecimal</td>
            <td>Amount to be paid.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>payEvalDate</td>
            <td>Date</td>
            <td>Date when "paid" field is evaluated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>quantity</td>
            <td>BigDecimal</td>
            <td>Total amount.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>timestamp</td>
            <td>Byte[]</td>
            <td>Time stored in byte format.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>unitOfMeasure</td>
            <td>To-one association</td>
            <td>UnitOfMeasure fields: 
                <li>id<li>label</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>voidingExpenseSheetEntry</td>
            <td>To-one association</td>
            <td>ExpenseSheetEntry fields: 
                <li>id</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
