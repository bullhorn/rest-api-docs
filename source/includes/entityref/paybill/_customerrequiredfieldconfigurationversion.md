# Pay and Bill - CustomerRequiredFieldConfigurationVersion

An entity that represents the version entity for the Customer Required Field (CRF) Effective-Dated Entity (EDE).

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
            <th>Customer Required Field Configuration Version fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>customerRequiredFieldConfigurationVersionID</td>
            <td>Integer</td>
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customerRequiredFieldConfiguration</td>
            <td>Many-to-one association</td>
            <td>
                <p>The CRF root.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>defaultCustomerRequiredFieldOption</td>
            <td>One-to-One association</td>
            <td>The default option.</td>
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
            <td>Date the entity was modified last.</td>
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
            <td>customerRequiredFieldConfigurationVersionOptions</td>
            <td>One-to-Many association</td>
            <td>Collection of CustomerRequiredFieldConfigurationVersionOption objects tied to this Customer Required Field Configuration Version</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

