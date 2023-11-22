# CandidateReferenceQuestion
Represents a question that can be asked of a CandidateReference. Answers to these questions are stored as CandidateReferenceResponses.
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
            <th>CandidateReferenceQuestion fields</th>
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
            <td>category</td>
            <td>To-one association</td>
            <td>Category associated with this CandidateReferenceQuestion.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>corporation</td>
            <td>To-one association</td>
            <td>Corporation associated with this CandidateReferenceQuestion.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>enabled</td>
            <td>Integer</td>
            <td>Whether this CandidateReferenceQuestion is enabled for new references.
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td>Unused.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>questionText</td>
            <td>String (2000)</td>
            <td>Text of this CandidateReferenceQuestion.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>responses</td>
            <td>To-many association</td>
            <td>CandidateReferenceResponses that have been provided for this CandidateReferenceQuestion.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>sortOrder</td>
            <td>Integer</td>
            <td>The relative order in which this CandidateReferenceQuestion will appear (lower numbers precede higher).</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date the entity was added.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>
