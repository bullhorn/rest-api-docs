# ShiftType

Is set at the corporation level to define various Shift time intervals (Morning, Afternoon, Evening, Overnight). Used for setting candidatePreferences.

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
            <th>ShiftType fields</th>
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
            <td>endTime</td>
            <td>String (16)</td>
            <td>The end time for the associated ShiftType.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>icon</td>
            <td>String (50)</td>
            <td>Icon associated to the ShiftType.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Indicates whether this record has been marked as deleted in the Bullhorn system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>name</td>
            <td>String (50)</td>
            <td>Name of the associated ShiftType.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>startTime</td>
            <td>String (16)</td>
            <td>The start time for the associated ShiftType.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>
