# Pay and Bill - CustomerRequiredFieldMeta

Customer Required Field Meta defines what a Customer Required should be labeled as and how long it should be viewable. Represents metadata for a Customer Required Field.

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
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>
                <p>Client Corporation which the CRF belongs to.</p>
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
            <td>label</td>
            <td>String (255)</td>
            <td>Label (or title) for the CRF</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>valueType</td>
            <td>To-one association</td>
            <td>
                <p>The types of values the CRF will have.</p>
                <p>Options:</p>
                <ul>
                    <li>Text (1)</li>
                    <li>Custom Picker (2)</li>
                    <li>Purchase Order (3)</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>viewableStartDate</td>
            <td>Date</td>
            <td>Date when the CRF will become viewable.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>viewableEndDate</td>
            <td>Date</td>
            <td>Date when the CRF will stop becoming viewable.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isRequiredOnTimesheet</td>
            <td>Boolean</td>
            <td>Indicates the CRF should be required on Timesheet.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isVisibleOnTimeSheet</td>
            <td>Boolean</td>
            <td>Indicates the CRF should be visible on Timesheet.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>doesFlowToNewJobs</td>
            <td>Boolean</td>
            <td>Indicates the CRF will exist on newly created jobs.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>TimeStamp</td>
            <td>Date on which this record was created in the Bullhorn system.</td>
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
            <td>customText1-5</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customInt1-5</td>
            <td>Integer</td>
            <td>Configurable Integer fields that can be used to store custom data.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customDate1-3</td>
            <td>TimeStamp</td>
            <td>Configurable Date fields that can be used to store custom data.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>options</td>
            <td>One-to-Many association</td>
            <td>Collection of CustomerRequiredFieldOption objects tied to this Customer Required Field Meta.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

