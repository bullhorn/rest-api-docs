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
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>actualStartTime</td>
            <td>OffsetDateTime</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>candidate</td>
            <td>To-one association</td>
            <td>Candidate</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>ClientCorporation</td>
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
            <td>isCancelled</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobShift</td>
            <td>To-one association</td>
            <td>JobShift</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>linkedJobShiftSubmission</td>
            <td>To-one association</td>
            <td>JobShiftSubmission</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To-one association</td>
            <td>CorporateUser</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placement</td>
            <td>To-one association</td>
            <td>Placement</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>reasonCancelled</td>
            <td>String (150)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>scheduledEndTime</td>
            <td>OffsetDateTime</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>scheduledStartTime</td>
            <td>OffsetDateTime</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>String (50)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
