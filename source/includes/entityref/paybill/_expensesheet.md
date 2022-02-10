# ExpenseSheet

This entity represents the required certifications for a ExpenseSheet.



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
            <td>Record of when Timesheet was created.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>addedByUser</td>
            <td>To-one association</td>
            <td>CorporateUser default fields: 
                <li>id<li>firstName<li>lastName</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>approvalDate</td>
            <td>Timestamp</td>
            <td>Record of when the Expense Sheet was approved.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billed</td>
            <td>BigDecimal</td>
            <td>Amount to be billed.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>calendarInstance</td>
            <td>To-one association</td>
            <td>CalendarInstance default fields: 
                <li>id<li>label</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>candidate</td>
            <td>To-one association</td>
            <td>Candidate default fields: 
                <li>id<li>firstName<li>lastName</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>ClientCorporation default fields: 
                <li>id<li>name</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>expenseSheetEntryApprovalStatusLookup</td>
            <td>To-one association</td>
            <td>ExpenseSheetEntryApprovalStatusLookup options: 
                <li>Draft<li>Submitted<li>Approved<li>Completed<li>Rejected</td>
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
                <li>id<li>title</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>lastModifiedAtUtc</td>
            <td>Timestamp</td>
            <td>Record of when Timesheet was most recently modified.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>lastVersion</td>
            <td>Integer</td>
            <td>ID of the most recent version of this Timesheet.</td>
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
            <td></td>
        </tr>
        <tr class="odd">
            <td>placement</td>
            <td>To-one association</td>
            <td>Placement default fields: 
                <li>id</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>timeLaborEvalSheetStatusLookup</td>
            <td>To-one association</td>
            <td>TimeLaborEvalSheetStatusLookup options: 
                <li>No evaluation required<li>Evaluation required<li>Evaluation failed</td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>

