# Pay and Bill - CustomerRequiredFieldJobConfiguration
An entity that represents a Customer Required Field (CRF) configuration for a Job Order. It extends CustomerRequiredFieldConfigurationBase.

[effective-dated entity](../index.html#effective-dated-entity)

CRUD Access - READ ONLY

Entitlements - View Job Customer Required Field Configuration

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
            <th>Customer Required Field Job Configuration fields</th>
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
            <td>jobOrder</td>
            <td>To-one association</td>
            <td>
                <p>The job order associated with this CRF configuration.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>versions</td>
            <td>To-many association</td>
            <td>
                <p>Collection of CustomerRequiredFieldConfigurationVersion objects associated with this configuration.</p>
                <p>Ordered by effectiveDate.</p>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customerRequiredFieldMeta</td>
            <td>To-one association</td>
            <td>
                <p>The CRF metadata associated with this configuration.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To-one association</td>
            <td>
                <p>The corporate user who owns this configuration.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>firstName</li>
                    <li>lastName</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Indicates whether this record has been marked as deleted in the Bullhorn system.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date on which this record was created in the Bullhorn system.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date when this record was last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>
