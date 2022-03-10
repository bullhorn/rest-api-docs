# JobShiftAssignment

JobShiftAssignment ties the candidate to a JobShift and also allows for storing time capture details (such as actualStartTime and actualEndTime).

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
            <th>JobShiftAssignment fields</th>
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
            <td>actualEndTime</td>
            <td>OffsetDateTime</td>
            <td>End time of the associated Job Shift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>actualStartTime</td>
            <td>OffsetDateTime</td>
            <td>Start time of the associated Job Shift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>candidate</td>
            <td>To-one association</td>
            <td>Candidate assigned to Job Shift.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>Client Corporation associated to Job Shift.</td>
            <td>X</td>
            <td></td>
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
            <td>isCancelled</td>
            <td>Boolean</td>
            <td>Indicates whether this Job Shift Assignment has been marked as cancelled in the Bullhorn system.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobShift</td>
            <td>To-one association</td>
            <td>Job Shift associated to Job Shift Assignment.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>linkedJobShiftSubmission</td>
            <td>To-one association</td>
            <td>Link of Job Shift Submission that was promoted to Job Shift Assignment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To-one association</td>
            <td>Owner that created the Job Shift Assignment.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placement</td>
            <td>To-one association</td>
            <td>Placement that is associated to the Job Shift Assignment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>reasonCancelled</td>
            <td>String (150)</td>
            <td>Reason why Shift Assignment is cancelled.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>scheduledEndTime</td>
            <td>OffsetDateTime</td>
            <td>End Time of the Shift Assignment. May be different from actualEndTime if Shift Assignment End Time was updated.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>scheduledStartTime</td>
            <td>OffsetDateTime</td>
            <td>Start Time of the Shift Assignment. May be different from actualStartTime if Shift Assignment Start Time was updated.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>String (50)</td>
            <td>Status of the Job Shift Assignment.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
