# Pay and Bill - JobOrderRateCard

An Effective Dated Entity that represents all of the rates on a Job Order. JobOrderRateCard is the flattened entity. When making PUT and POST calls to JobOrderRateCard, the child entities (JobOrderRateCardLineGroup - JobOrderRateCardLine) can be passed as well with all associated data.

CRUD Access - CREATE, READ, UPDATE, DELETE

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
            <th>JobOrderRateCard fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>id</td>
            <td>ID</td>
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date the entity was added.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>effectiveDate</td>
            <td>Date</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td>This is the date until when the record is effective.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To One Association</td>
            <td>CorporateUser who is the owner of this entity. The default value is user who created the entity.
                <p>Default fields:</p>
                    <ul><li>id</li>
                    <li>firstName</li>
                    <li>firstName</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>jobPosting</td>
            <td>To One Association</td>
            <td><p>JobPosting.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>title</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobOrderRateCardLineGroups</td>
            <td>To Many Association</td>
            <td>JobOrderRateCardLineGroup - list of IDs of the associated rate groups.
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>rootExternalID</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>rootMigrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>versionID</td>
            <td>Integer</td>
            <td>Unique Identifier for the current version</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>versions</td>
            <td>To Many Association</td>
            <td>IDs of associated JobOrderRateCardVersion records</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>







