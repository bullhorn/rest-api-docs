# Pay and Bill - BillMasterCustomerRequiredField

An entity that represents a [Customer Required Field (CRF)](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-customerrequiredfieldconfiguration) associated with a [BillMaster](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-billmaster).

CRUD Access - READ ONLY

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
            <th>Bill Master Customer Required Field fields</th>
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
            <td>billMaster</td>
            <td>To-one association</td>
            <td>
                <p>The BillMaster associated with this CRF.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customerRequiredFieldMeta</td>
            <td>To-one association</td>
            <td>
                <p>The CRF metadata defining this field.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customerRequiredFieldOption</td>
            <td>To-one association</td>
            <td>
                <p>The selected option for this CRF (if applicable).</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>textValue</td>
            <td>String</td>
            <td>The text value for this CRF (if applicable).</td>
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
