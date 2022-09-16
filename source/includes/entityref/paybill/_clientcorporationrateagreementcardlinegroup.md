# Pay and Bill - ClientCorporationRateAgreementCardLineGroup

Represents a group of rates on a Client Corporation


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
            <td>ClientCorporationRateAgreementCard</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>clientCorporationRateAgreementCardLines</td>
            <td>To-many association</td>
            <td>ClientCorporationRateAgreementCardLine</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>clientCorporationRateAgreementCardVersion</td>
            <td>To-one association</td>
            <td>ClientCorporationRateAgreementCardVersion</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>earnCodeGroup</td>
            <td>To-one association</td>
            <td>EarnCodeGroup</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>externalID</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isBase</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
