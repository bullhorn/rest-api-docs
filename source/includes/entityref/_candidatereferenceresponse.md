# CandidateReferenceResponse
Represents a CandidateReference's answer to a CandidateReferenceQuestion.
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
            <th>CandidateReferenceResponse fields</th>
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
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td>Unused.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>question</td>
            <td>To-one association</td>
            <td>CandidateReferenceQuestion that this CandidateReferenceResponse answers.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>reference</td>
            <td>To-one association</td>
            <td>CandidateReference who provided this CandidateReferenceResponse.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>responseText</td>
            <td>String (2147483647)</td>
            <td>Text of this CandidateReferenceResponse.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>