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
            <td>billingCalendar</td>
            <td>To-one association</td>
            <td>Calendar - the billing calendar that is associated with the billing cycle.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billingCalendarFrequencyLookup</td>
            <td>To-one association</td>
            <td>CalendarFrequencyLookup</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>label</td>
            <td>String (100)</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>


     
        
