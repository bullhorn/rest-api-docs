# JobShift

The main entity for Shift scheduling and is used for storing start & end times, references to the ClientCorporation, JobOrder, and other details for the JobShift such as location, name, and so forth.

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
            <td>Date when this record was created in the Bullhorn system.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date when this record was last modified in the Bullhorn system.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>endTime</td>
            <td>OffsetDateTime</td>
            <td>Time the JobShift Ends.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>fillRatio</td>
            <td>Double</td>
            <td>Ratio of assigned Candidates to openings on the JobShift.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isClosed</td>
            <td>Boolean</td>
            <td>Indicates whether this record has been marked as closed in the Bullhorn system.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobOrder</td>
            <td>To-one association</td>
            <td>JobOrder associated to the JobShift.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jobShiftAssignments</td>
            <td>To-many association</td>
            <td>JobShiftAssignments associated to the JobShift.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>jobShiftSubmissions</td>
            <td>To-many association</td>
            <td>JobShiftSubmission associated to a JobShift. JobShiftSubmission is created when offering a Candidate a JobShift.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>location</td>
            <td>To-one association</td>
            <td>Location associated to JobShift sourced from the ClientCorporation.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>name</td>
            <td>String (150)</td>
            <td>Name of the JobShift.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>notes</td>
            <td>To-many association</td>
            <td>Note associated with JobShift.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>numAssigned</td>
            <td>Integer</td>
            <td>Indicates the number of assigned Candidates associated to the JobShift.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>openings</td>
            <td>Integer</td>
            <td>Indicates the total openings to be filled on the JobShift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>reasonClosed</td>
            <td>String (150)</td>
            <td>Indicates the reason the JobShift was closed.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>sequenceID</td>
            <td>String (36)</td>
            <td>Unused.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>shift</td>
            <td>To-one association</td>
            <td>The Shift associated with the JobShift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>shiftPosition</td>
            <td>To-one association</td>
            <td>The ShiftPosition associated with the JobShift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>shiftTypes</td>
            <td>To-many association</td>
            <td>The ShiftTypes over which the associated JobShift spans.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>startTime</td>
            <td>OffsetDateTime</td>
            <td>Time the JobShift Starts.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>
