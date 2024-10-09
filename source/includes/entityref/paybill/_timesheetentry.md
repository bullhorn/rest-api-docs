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
                <li>id</li><li>firstName</li><li>lastName</li></td>
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
            <td>approvedBy</td>
            <td>String (255)</td>
            <td>Name of the user who approved the TimesheetEntry.</td>
            <td></td>
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
            <td>billRate</td>
            <td>BigDecimal</td>
            <td>Custom bill rate of the TimesheetEntry.</td>
            <td></td>
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
                <li>id</li><li>alphabeticCode</li><li>name</li></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customerRequiredFields</td>
            <td>To-many association</td>
            <td>TimesheetEntryCustomerRequiredFields associated with the TimesheetEntry.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>earnCode</td>
            <td>To-one association</td>
            <td>EarnCode default fields: 
                <li>id</li><li>code</li><li>externalID</li><li>title<br>Refer to the EarnCode entity for more details.</li></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>endedAt</td>
            <td>OffsetDateTime</td>
            <td>Record of when the TimesheetEntry ends.</td>
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
                <li>id</li><li>firstName</li><li>lastName</li></td>
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
            <td>payRate</td>
            <td>BigDecimal</td>
            <td>Custom pay rate of the TimesheetEntry.</td>
            <td></td>
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
            <td>startedAt</td>
            <td>OffsetDateTime</td>
            <td>Record of when TimesheetEntry started.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>timeLaborCalcTypeLookup</td>
            <td>To-one association</td>
            <td>TimeLaborCalcTypeLookup options: 
                <li>Pay</li><li>Bill</li><li>Pay & Bill</li></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timeLaborEvalSheetTypeLookup</td>
            <td>To-one association</td>
            <td>TimeLaborEvalSheetEntryTypeLookup options: 
                <li>Time</li><li>Labor</li><li>AdditionalPay</li><li>Expense</li></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>timeLaborSystemTypeLookupID</td>
            <td>To-one association</td>
            <td>TimeLaborSystemTypeLookup options: 
                <li>Unknown</li><li>WTE</li><li>System</li><li>Admin</li><li>VMS</li><li>Clock</li><li>Mobile</li><li>VTC</li><li>IVR</li><li>Expense</li></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>timesheet</td>
            <td>To-one association</td>
            <td>Timesheet fields: 
                <li>id</li><li>calendarInstance</li><li>candidate</li></td>
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
            <td>timesheetEntryApprovalStatusLogEntry</td>
            <td>To-one association</td>
            <td>TimesheetEntryApprovalStatusLogEntry associated with the TimesheetEntry.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>timesheetEntryApprovalStatusLogEntry</td>
            <td>To-one association</td>
            <td>TimesheetEntryApprovalStatusLogEntry associated with the TimesheetEntry.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timesheetEntryApprovalStatusLookup</td>
            <td>To-one association</td>
            <td>TimesheetEntryApprovalStatusLookup options: 
                <li>Draft</li><li>Submitted</li><li>Approved</li><li>Completed</li><li>Rejected</li></td>
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
                <li>id</li><li>label</li></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>voidingTimesheetEntry</td>
            <td>To-one association</td>
            <td>TimesheetEntry fields: 
                <li>id </li></td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
