# Pay and Bill - CustomerRequiredFieldPlacementConfiguration
An entity that represents a Customer Required Field (CRF) configuration for a Placement. It extends CustomerRequiredFieldConfigurationBase to manage CRF versions.

CRUD Access - READ ONLY

Entitlements - View Customer Required Field Configuration
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
            <th>Customer Required Field Placement Configuration fields</th>
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
            <td>placement</td>
            <td>To-one association</td>
            <td>
                <p>The placement associated with this CRF configuration.</p>
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
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date on which this record was created in the Bullhorn system.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date when this record was last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>
