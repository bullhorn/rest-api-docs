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
            <td>Time the Job Shift Ends.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>fillRatio</td>
            <td>Double</td>
            <td>Ratio of Assigned Candidates to Openings on the Job Shift.</td>
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
            <td>Job Order associated to the Job Shift.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jobShiftAssignments</td>
            <td>To-many association</td>
            <td>Job Shift Assignments associated to the Job Shift.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>jobShiftSubmissions</td>
            <td>To-many association</td>
            <td>Job Shift Submission associated to a shift. Job Shift Submission is created when Offering a Candidate a Shift, before the Shift Submission is promoted to a Shift Assignment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>location</td>
            <td>To-one association</td>
            <td>Location associated to Job Shift sourced from the Client Corporation.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>name</td>
            <td>String (150)</td>
            <td>Desired Name for the Job Shift.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>notes</td>
            <td>To-many association</td>
            <td>Note associated with Job Shift.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>numAssigned</td>
            <td>Integer</td>
            <td>Number of assigned Candidates associated to the Job Shift.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>openings</td>
            <td>Integer</td>
            <td>Total Openings to be filled on the Job Shift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>reasonClosed</td>
            <td>String (150)</td>
            <td>The reason provided when canceling a Job Shift.</td>
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
            <td>Shift Definition associated with the Job Shift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>shiftPosition</td>
            <td>To-one association</td>
            <td>Shift Position associated with the Job Shift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>shiftTypes</td>
            <td>To-many association</td>
            <td>The shift types the associated Job Shift spans over. Shift Types are designated in Shift Admin.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>startTime</td>
            <td>OffsetDateTime</td>
            <td>Time the Job Shift Starts.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>
