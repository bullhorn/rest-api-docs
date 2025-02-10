# Pay and Bill - CustomerRequiredFieldConfigurationVersionOption

An entity that represents the Customer Required Field options available for a particular Customer Required Field version.

CRUD ACCESS - READ ONLY

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
            <th>Customer Required Field Configuration Version Option fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>customerRequiredFieldConfigurationVersionOptionId</td>
            <td>Integer</td>
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customerRequiredFieldConfigurationVersion</td>
            <td>Many-to-one association</td>
            <td>
                <p>The associated Customer Required Field version.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customerRequiredFieldOption</td>
            <td>One-to-One association</td>
            <td>
                <p>The associated Customer Required Field option.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>TimeStamp</td>
            <td>Date the entity was added.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>TimeStamp</td>
            <td>Date the entity was modified last.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>sortOrder</td>
            <td>Integer</td>
            <td>The order this versionOption will use for sorting.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>

