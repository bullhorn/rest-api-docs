# Timesheet

This entity represents the required certifications for a Timesheet.



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
            <th>Timesheet fields</th>
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
                <li>id</li>
                <li>firstName</li>
                <li>lastName</li>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>additionalBillAmount</td>
            <td>BigDecimal</td>
            <td>Amount added to be billed.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>additionalPayAmount</td>
            <td>BigDecimal</td>
            <td>Amount added to be paid.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>approvedBy</td>
            <td>String (101)</td>
            <td>User the Timesheet was approved by.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>approvedDate</td>
            <td>Timestamp</td>
            <td>Record of when Timesheet was approved.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billed</td>
            <td>BigDecimal</td>
            <td>Amount to be billed.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>calendarInstance</td>
            <td>To-one association</td>
            <td>CalendarInstance default fields: 
                <li>id</li>
                <li>label</li>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>candidate</td>
            <td>To-one association</td>
            <td>Candidate default fields: 
                <li>id</li>
                <li>firstName</li>
                <li>lastName</li>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>ClientCorporation default fields: 
                <li>id</li>
                <li>name</li>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>externalID</td>
            <td>String (100)</td>
            <td>Concatenation of BTE TimeHistory EmplNames RecordID with and underscore and PlacementID.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>hoursWorked</td>
            <td>BigDecimal</td>
            <td>Number of hours worked.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>jobOrder</td>
            <td>To-one association</td>
            <td>JobOrder default fields: 
                <li>id</li>
                <li>title</li>
            </td>
            <td>X</td>
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
            <td>lastProcessedOn</td>
            <td>Timestamp</td>
            <td>Record of when Timesheet was most recently processed.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
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
        <tr class="odd">
            <td>paid</td>
            <td>BigDecimal</td>
            <td>Amount to be paid.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>placement</td>
            <td>To-one association</td>
            <td>Placement default fields: 
                <li>id</li>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
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
        <tr class="even">
            <td>timeLaborEvalSheetStatusLookup</td>
            <td>To-one association</td>
            <td>TimeLaborEvalSheetStatusLookup options: 
                <li>No evaluation required</li>
                <li>Evaluation required</li>
                <li>Evaluation failed</li>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>timesheetEntryApprovalStatusLookup</td>
            <td>To-one association</td>
            <td>TimesheetEntryApprovalStatusLookup options: 
                <li>Draft</li>
                <li>Submitted</li>
                <li>Approved</li>
                <li>Completed</li>
                <li>Rejected </li>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>units</td>
            <td>Boolean</td>
            <td>Whether or not this Timesheet is measured in units.</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
