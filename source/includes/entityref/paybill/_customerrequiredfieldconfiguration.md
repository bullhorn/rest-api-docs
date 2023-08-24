# Pay and Bill - CustomerRequiredFieldConfiguration

An entity that represents the primary view for the CRF EDE. CustomerRequiredFieldConfiguration is an EDE entity designed to associate a CustomerRequiredField to a Placement. They have a 1:1 relationship with Placements signifying that only one Placement can have that specific Customer Required Field Configuration.

CRUD Access- CREATE, READ, UPDATE, DELETE

Entitlements - Add Customer Required Field Configuration, Edit Customer Required Field Configuration, Delete Customer Required Field Configuration, View Customer Required Field Configuration

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
            <th>Customer Required Field Configuration fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>customerRequiredFieldConfigurationID</td>
            <td>Integer</td>
            <td>Unique Identifier for this entity. Sourced from the CRFC root.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customerRequiredFieldMeta</td>
            <td>Many-to-one association</td>
            <td>
                <p>The CRF associated with the root.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>Many-to-one association</td>
            <td>
                <p>The user who owns the root.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>firstName</li>
                    <li>lastName</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Represents if the root has been deleted or not.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>viewableStartDate</td>
            <td>Date</td>
            <td>Date when the CRF will become viewable.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customerRequiredFieldConfigurationVersionID</td>
            <td>Integer</td>
            <td>ID of the current CRF version.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>defaultCustomerRequiredFieldOption</td>
            <td>One-to-One association</td>
            <td>The default option. Sourced from the CRF version.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>effectiveDate</td>
            <td>Date</td>
            <td>The date the EDE begins being effective.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td>The date the EDE stops being effective.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>TimeStamp</td>
            <td>Date the entity was added.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>TimeStamp</td>
            <td>Date entity was last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isActive</td>
            <td>Boolean</td>
            <td>States if the current version is active.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isFirst</td>
            <td>Boolean</td>
            <td>States if the current version is the first one.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placement</td>
            <td>Many-to-one association</td>
            <td>
                <p>The placement associated with the CRF. (Connected using the BH_PlacementCustomerRequiredField table)</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customerRequiredFieldConfigurationVersionOptions</td>
            <td>One-to-Many association</td>
            <td>Collection of CustomerRequiredFieldConfigurationVersionOption objects tied to this Customer Required Field Configuration</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

