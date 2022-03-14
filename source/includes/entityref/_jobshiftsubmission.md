# JobShiftSubmission

Similar to a JobSubmission, JobShiftSubmissions contain status and allow for a workflow of assigning a Candidate to a JobShift without a JobShiftAssignment.

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
            <th>JobShiftSubmission fields</th>
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
            <td>Candidate associated to JobShiftSubmission.</td>
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
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date when this record was last modified in the Bullhorn system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isPublished</td>
            <td>Boolean</td>
            <td>Indicates when JobShiftSubmission is promoted to JobShiftAssignment.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jobShift</td>
            <td>To-one association</td>
            <td>JobShift associated with JobShiftSubmission.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobShiftOfferContext</td>
            <td>To-one association</td>
            <td>Context within the JobShift offer.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>String (50)</td>
            <td>Status of JobShiftSubmission.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
