# JobShiftSubmission

Similar to a job submission, shift submissions contain status and allow for a workflow of assigning a candidate to a jobshift without a JobShiftAssignment.

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
            <td>Candidate</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isPublished</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jobShift</td>
            <td>To-one association</td>
            <td>JobShift</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobShiftOfferContext</td>
            <td>To-one association</td>
            <td>JobShiftOfferContext</td>
            <td></td>
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
