# Pay and Bill - JobOrderRateCard

An [effective-dated entity](../index.html#effective-dated-entity) that represents all the rates on a JobOrder. 
JobOrderRateCard is the flattened entity. When making PUT and POST calls 
to JobOrderRateCard, the child entities, JobOrderRateCardLineGroup and JobOrderRateCardLine, 
can be passed as well with all associated data.
For more information see [how rate card calculations work](https://bullhorn.github.io/Rate-Card-Entities-and-Calculations/)

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
            <td>Integer</td>
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
            <td>Date last modified</td>
            <td></td>
            <td></td>
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
            <td>This is the date until when the record is effective</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td><p><span>Whether entity is deleted.</span></p>
<p><span> <span>The default value is false.</span> </span></p></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobOrderRateCardLineGroups</td>
            <td>To-many association</td>
            <td>JobOrderRateCardLineGroup - list of IDs of the associated rate groups.
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>jobPosting</td>
            <td>To-one association</td>
            <td><p>JobPosting.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>title</li>
                </ul></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>rootExternalID</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>rootMigrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>versionID</td>
            <td>Integer</td>
            <td>Unique Identifier for the current version</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>versions</td>
            <td>To-many association</td>
            <td>IDs of associated JobOrderRateCardVersion records</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>








