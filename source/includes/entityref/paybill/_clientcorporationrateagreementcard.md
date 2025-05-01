# Pay and Bill - ClientCorporationRateAgreementCard

An effective-dated entity that acts as a master record for rate agreements between a staffing firm and a [ClientCorporation](https://bullhorn.github.io/rest-api-docs/entityref.html#clientcorporation), detailing overall rate structures and contractual terms.

ClientCorporationRateAgreementCard is the flattened entity. When making PUT and POST calls to ClientCorporationRateAgreementCard, the child entities, [ClientCorporationRateAgreementCardLineGroup](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-clientcorporationrateagreementcardlinegroup) and [ClientCorporationRateAgreementCardLine](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-clientcorporationrateagreementcardline), can be passed as well with all associated data. This data can also flow down into JobOrderRateCard.

CRUD Access - CREATE, READ, UPDATE, DELETE

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
            <th>ClientCorporationRateAgreementCard fields</th>
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
            <td><p>ClientCorporation.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>title</li>
                </ul></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>clientCorporationRateAgreementCardLineGroups</td>
            <td>To-many association</td>
            <td>clientCorporationRateAgreementCardLineGroup - list of IDs of the associated rate groups.
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul></td>
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
            <td>Date on which this record was last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>effectiveDate</td>
            <td>Date</td>
            <td>Date when the record is effective.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td>Date until when the record is effective.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Whether entity is deleted.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>name</td>
            <td>String (100)</td>
            <td>Name of the rate card.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>rootExternalID</td>
            <td>String (100)</td>
            <td>The root external ID.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>rootMigrateGUID</td>
            <td>String (36)</td>
            <td>The root migrate GUID.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>versionID</td>
            <td>Integer</td>
            <td>Unique Identifier for the current version.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>versions</td>
            <td>To-many association</td>
            <td>IDs of associated ClientCorporationRateAgreementCardVersion records.</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
