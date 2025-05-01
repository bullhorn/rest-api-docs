# ExpenseSheet

Acts as a master record for collecting and summarizing an employee’s incurred expenses, facilitating the reimbursement process by grouping multiple expense entries.

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
            <th>ExpenseSheet fields</th>
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
            <td>Record of when ExpenseSheet was created.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>addedByUser</td>
            <td>To-one association</td>
            <td>CorporateUser default fields: 
                <li>id</li><li>firstName</li><li>lastName</li></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>approvalDate</td>
            <td>Timestamp</td>
            <td>Record of when the ExpenseSheet was approved.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>approvedBy</td>
            <td>String (101)</td>
            <td>User the ExpenseSheet was approved by.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billed</td>
            <td>BigDecimal</td>
            <td>Amount to be billed.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>calendarInstance</td>
            <td>To-one association</td>
            <td>CalendarInstance default fields: 
                <li>id</li><li>label</li></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>candidate</td>
            <td>To-one association</td>
            <td>Candidate default fields: 
                <li>id</li><li>firstName</li><li>lastName</li></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>ClientCorporation default fields: 
                <li>id</li><li>name</li></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>description</td>
            <td>String (255)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>expenseSheetEntryApprovalStatusLookup</td>
            <td>To-one association</td>
            <td>ExpenseSheetEntryApprovalStatusLookup options: 
                <li>Draft</li><li>Submitted</li><li>Approved</li><li>Completed</li><li>Rejected</li></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>externalID</td>
            <td>String (100)</td>
            <td>Concatenation of BTE ExpenseReportID EmplNames RecordID with an underscore and PlacementID.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobOrder</td>
            <td>To-one association</td>
            <td>JobOrder default fields: 
                <li>id</li><li>title</li></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>lastModifiedAtUtc</td>
            <td>Timestamp</td>
            <td>Record of when ExpenseSheet was most recently modified.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>lastProcessedOn</td>
            <td>Timestamp</td>
            <td>Record of when ExpenseSheet was most recently processed.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>modifyingUser</td>
            <td>To-one association</td>
            <td>CorporateUser default fields: 
                <li>id</li>
                <li>firstName</li>
                <li>lastName</li>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>paid</td>
            <td>BigDecimal</td>
            <td>Amount to be paid.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placement</td>
            <td>To-one association</td>
            <td>Placement default fields: 
                <li>id</li></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>processingStatus</td>
            <td>To-one association</td>
            <td>TimeAndExpenseSheetProcessingStatusLookup options:
                <li>Pending</li>
                <li>Evaluating</li>
                <li>Processing</li>
                <li>Completed</li>
                <li>Failed</li>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timeLaborEvalSheetStatusLookup</td>
            <td>To-one association</td>
            <td>TimeLaborEvalSheetStatusLookup options: 
                <li>No evaluation required</li>
                <li>Evaluation required </li>
                <li>Evaluation failed</li>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>