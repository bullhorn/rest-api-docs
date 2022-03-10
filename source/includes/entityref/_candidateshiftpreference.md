# CandidateShiftPreference

CandidatePreferences is used for storing a candidate's preferences for times and days when they want to work in association with the shiftTypes that are configured.

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
            <th>CandidateShiftPreference fields</th>
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
            <td>candidate</td>
            <td>To-one association</td>
            <td>Candidate associated to Shift Preferences.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date when this record was created in the Bullhorn system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dayNumber</td>
            <td>Integer</td>
            <td>Number of day in the week.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dayOfWeek</td>
            <td>String (255)</td>
            <td>What day of the week it is (ex. Monday).</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isAvailable</td>
            <td>Boolean</td>
            <td>If associated Candidate is available to be assigned to a Job Shift or not.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>shiftType</td>
            <td>To-one association</td>
            <td>Name of the Shift Definition. </td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>
