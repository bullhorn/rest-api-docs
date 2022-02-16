# TimesheetEntry

This entity represents the required certifications for a TimesheetEntry.



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
            <th>TimesheetEntry fields</th>
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
            <td>applicableFrom</td>
            <td>Date</td>
            <td>Day when TimesheetEntry starts.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>applicableTo</td>
            <td>Date</td>
            <td>Day when TimesheetEntry ends.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>approvalDate</td>
            <td>Timestamp</td>
            <td>Record of when TimesheetEntry was approved.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billEvalDate</td>
            <td>Date</td>
            <td>Date when "billed" field is evaluated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>comment</td>
            <td>String (2000)</td>
            <td>A short comment to be added by the user to the TimesheetEntry.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>currencyUnit</td>
            <td>To-one association</td>
            <td>CurrencyUnit fields: 
                <li>id<li>alphabeticCode<li>name</td>
            <td>X</td>
            <td></td>
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
            <td>endedAt</td>
            <td>Timestamp</td>
            <td>Record of when the TimesheetEntry ends.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>externalTimesheetEntryID</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>externalTimesheetID</td>
            <td>String (20)</td>
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
            <td>payEvalDate</td>
            <td>Date</td>
            <td>Date when "paid" field is evaluated.</td>
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
            <td>startedAt</td>
            <td>Timestamp</td>
            <td>Record of when TimesheetEntry started.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>timeLaborEvalSheetTypeLookup</td>
            <td>To-one association</td>
            <td>TimeLaborEvalSheetEntryTypeLookup options: 
                <li>Time<li>Labor<li>AdditionalPay<li>Expense</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>timeLaborSystemTypeLookupID</td>
            <td>To-one association</td>
            <td>TimeLaborSystemTypeLookup options: 
                <li>Unknown<li>WTE<li>System<li>Admin<li>VMS<li>Clock<li>Mobile<li>VTC<li>IVR<li>Expense</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>timesheet</td>
            <td>To-one association</td>
            <td>Timesheet fields: 
                <li>id<li>calendarInstance<li>candidate</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>timesheetDay</td>
            <td>Date</td>
            <td>Day associated with TimesheetEntry.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>timesheetEntryApprovalStatusLookup</td>
            <td>To-one association</td>
            <td>TimesheetEntryApprovalStatusLookup options: 
                <li>Draft<li>Submitted<li>Approved<li>Completed<li>Rejected</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>timesheetVersion</td>
            <td>Integer</td>
            <td>Integer of which version of timesheet this entry is associated with.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>timestamp</td>
            <td>Byte[]</td>
            <td>Record stored in byte format.</td>
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
            <td>voidingTimesheetEntry</td>
            <td>To-one association</td>
            <td>TimesheetEntry fields: 
                <li>id </td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
