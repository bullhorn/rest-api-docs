# Pay and Bill - ClientCorporationRateAgreementCardLineGroup

Represents a group of rates on a ClientCorporation


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
            <th>ClientCorporationRateAgreementCardLineGroup fields</th>
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
            <td>clientCorporationRateAgreementCard</td>
            <td>To-one association</td>
            <td>ClientCorporationRateAgreementCard
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>clientCorporationRateAgreementCardLines</td>
            <td>To-many association</td>
            <td>ClientCorporationRateAgreementCardLine - (No more than there are EarnCodes for the given EarnCodeGroup)
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>clientCorporationRateAgreementCardVersion</td>
            <td>To-one association</td>
            <td>ClientCorporationRateAgreementCardVersion
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
            <td>earnCodeGroup</td>
            <td>To-one association</td>
            <td>Earn Code Group for all of the rates
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>externalID</td>
            <td>String (100)</td>
            <td>External identifier for the record, used for migrations and back-office Integration.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isBase</td>
            <td>Boolean</td>
            <td>This is the list of default rates for the rate card.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td>The Migrate GUID.</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
