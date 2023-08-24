# Pay and Bill - CustomerRequiredFieldOption

These options define what options a user will be able to choose from when filling in the Customer Required Field. Each option can have its own value, label, and start and end dates.

CRUD Access - CREATE, READ, UPDATE

Entitlements - Add Client Customer Required Field, View Client Customer Required Field, Update Client Customer Required Field

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
            <th>Customer Required Field Meta fields</th>
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
            <td>customerRequiredFieldMetaID</td>
            <td>To-one association</td>
            <td>
                <p>Customer Required Field Meta that this Option is part of.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>value</td>
            <td>String (255)</td>
            <td>The value for the CRF(Customer Required Field) option</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>displayLabel</td>
            <td>String (255)</td>
            <td>How the CRF(Customer Required Field) will display in the UI</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>viewableStartDate</td>
            <td>Date</td>
            <td>Date when the CRF(Customer Required Field) will become viewable.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>viewableEndDate</td>
            <td>Date</td>
            <td>Date when the CRF(Customer Required Field) will stop becoming viewable.</td>
            <td></td>
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
            <td>Date entity was last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isClientDefault</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>associatedEntityID</td>
            <td>Integer</td>
            <td>Association between a Purchase Order entity and Customer Required Field through the “associatedEntityID” column.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

