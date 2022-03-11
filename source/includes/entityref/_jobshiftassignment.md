# JobShiftAssignment

Ties the Candidate to a JobShift and also allows for storing time capture details such as actualStartTime and actualEndTime.

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
            <td>End time of the associated JobShift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>actualStartTime</td>
            <td>OffsetDateTime</td>
            <td>Start time of the associated JobShift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>candidate</td>
            <td>To-one association</td>
            <td>Candidate assigned to JobShift.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>ClientCorporation associated to JobShift.</td>
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
            <td>Indicates whether this JobShiftAssignment has been marked as cancelled in the Bullhorn system.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobShift</td>
            <td>To-one association</td>
            <td>JobShift associated to JobShiftAssignment.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>linkedJobShiftSubmission</td>
            <td>To-one association</td>
            <td>Link of JobShiftSubmission that was promoted to JobShiftAssignment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To-one association</td>
            <td>Owner that created the JobShiftAssignment.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placement</td>
            <td>To-one association</td>
            <td>Placement that is associated to the JobShiftAssignment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>reasonCancelled</td>
            <td>String (150)</td>
            <td>Indicates reason JobShiftAssignment was cancelled.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>scheduledEndTime</td>
            <td>OffsetDateTime</td>
            <td>End Time of the JobShiftAssignment. May reflect different from actualEndTime if JobShiftAssignment End Time was updated.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>scheduledStartTime</td>
            <td>OffsetDateTime</td>
            <td>Start Time of the JobShiftAssignment. May reflect different from actualStartTime if JobShiftAssignment Start Time was updated.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>String (50)</td>
            <td>Status of the JobShiftAssignment.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
