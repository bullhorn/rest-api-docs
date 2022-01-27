# Timesheet

This entity represents the required certifications for a Job Submission.



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
            <td>Record of when Timesheet was created</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>addedByUser</td>
            <td>To-one association</td>
            <td>CorporateUser default fields: id, firstName, lastName</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>additionalBillAmount</td>
            <td>BigDecimal</td>
            <td>Amount added to be billed</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>additionalPayAmount</td>
            <td>BigDecimal</td>
            <td>Amount added to be paid</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billed</td>
            <td>BigDecimal</td>
            <td>Amount to be billed</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>calendarInstance</td>
            <td>To-one association</td>
            <td>CalendarInstance default fields: id, label </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>candidate</td>
            <td>To-one association</td>
            <td>Candidate default fields: id, firstName, lastName</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>ClientCorporation default fields: id, name</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>externalID</td>
            <td>String (100)</td>
            <td>Concatenation of BTE TimeHistory EmplNames RecordID with and underscore and PlacementID</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>hoursWorked</td>
            <td>BigDecimal</td>
            <td>Number of hours worked</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>jobOrder</td>
            <td>To-one association</td>
            <td>JobOrder default fields: id, title</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>lastModifiedAtUtc</td>
            <td>Timestamp</td>
            <td>Record of when Timesheet was most recently modified</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>lastVersion</td>
            <td>Integer</td>
            <td>ID of the most recent version of this Timesheet</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>modifyingUser</td>
            <td>To-one association</td>
            <td>CorporateUser default fields: id, firstName, lastName</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>paid</td>
            <td>BigDecimal</td>
            <td>Amount to be paid</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>placement</td>
            <td>To-one association</td>
            <td>Placement default fields: id</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>timeLaborEvalSheetStatusLookup</td>
            <td>To-one association</td>
            <td>TimeLaborEvalSheetStatusLookup options: No evaluation required, Evaluation required, Evaluation failed</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>timesheetEntryApprovalStatusLookup</td>
            <td>To-one association</td>
            <td>TimesheetEntryApprovalStatusLookup options: Draft, Submitted, Approved, Completed, Rejected</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>units</td>
            <td>Boolean</td>
            <td>Whether or not this Timesheet is measured in units </td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>