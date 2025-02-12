# Pay and Bill - CustomerRequiredFieldValueTypeLookup
Represents the possible value types for Customer Required Fields (CRF).

CRUD Access - READ ONLY

Entitlements - View Client Customer Required Field

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
            <th>Customer Required Field Value Type Lookup fields</th>
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
            <td>label</td>
            <td>String</td>
            <td>Label for the value type.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Indicates whether this record has been marked as deleted in the Bullhorn system.</td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>
Pre-defined Values:

Text (1)
Custom Picker (2)
Purchase Order (3)
