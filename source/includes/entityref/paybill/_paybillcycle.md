#  Pay and Bill - PayBillCycle

Entity that represents a billing cycle record.


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
            <th>PayBillCycle fields</th>
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
            <td>billEvalEnabled</td>
            <td>Boolean</td>
            <td>Enabled for billing cycle</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billingCalendar</td>
            <td>To-one association</td>
            <td>Calendar</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billingCalendarFrequencyLookup</td>
            <td>To-one association</td>
            <td>CalendarFrequencyLookup</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date the entity was added.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date the entity was last modified.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoiceCycleEnabled</td>
            <td>Boolean</td>
            <td>Enabled for invoice cycle</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>label</td>
            <td>String (100)</td>
            <td>Label</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payEvalEnabled</td>
            <td>Boolean</td>
            <td>Enabled for pay cycle</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timesheetEnabled</td>
            <td>Boolean</td>
            <td>Enabled for timesheet cycle</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>


     
        
