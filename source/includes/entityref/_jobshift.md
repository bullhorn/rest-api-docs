# JobShift

JobShift is the main entity for shift scheduling and is used for storing start & end times, references to the clientCorporation, job, and other details for the shift (such as location, name, etc).

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
            <th>JobShift fields</th>
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
            <td>endTime</td>
            <td>OffsetDateTime</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>fillRatio</td>
            <td>Double</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isClosed</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobOrder</td>
            <td>To-one association</td>
            <td>JobOrder</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jobShiftAssignments</td>
            <td>To-many association</td>
            <td>JobShiftAssignment</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>jobShiftSubmissions</td>
            <td>To-many association</td>
            <td>JobShiftSubmission</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>location</td>
            <td>To-one association</td>
            <td>Location</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>name</td>
            <td>String (150)</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>notes</td>
            <td>To-many association</td>
            <td>Note</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>numAssigned</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>openings</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>reasonClosed</td>
            <td>String (150)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>sequenceID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>shift</td>
            <td>To-one association</td>
            <td>Shift</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>shiftPosition</td>
            <td>To-one association</td>
            <td>ShiftPosition</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>shiftTypes</td>
            <td>To-many association</td>
            <td>ShiftType</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>startTime</td>
            <td>OffsetDateTime</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>
