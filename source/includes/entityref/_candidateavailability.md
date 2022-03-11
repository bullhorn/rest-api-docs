# CandidateAvailability

Allows for viewing and updating specific availability for a Candidate on an explicit date/time.

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
            <th>CandidateAvailability fields</th>
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
            <td>Candidate associated to this candidateAvailability.</td>
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
            <td>endTime</td>
            <td>OffsetDateTime</td>
            <td>Time the associated candidateAvailability ends.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isAvailable</td>
            <td>Boolean</td>
            <td>Indicates whether the associated Candidate is available or not.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>startTime</td>
            <td>OffsetDateTime</td>
            <td>Time the associated candidateAvailability starts.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>type</td>
            <td>String (50)</td>
            <td>Type of candidateAvailability.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
