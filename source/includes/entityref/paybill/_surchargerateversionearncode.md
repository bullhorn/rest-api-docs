# Pay and Bill - SurchargeRateVersionEarnCode

Association table for [SurchargeRateVersion](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-surchargerateversion) and [EarnCode](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-earncode)

CRUD Access - CREATE, READ, DELETE

Entitlements - None

<table>
    <colgroup>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
    </colgroup>
    <thead>
        <tr class="header">
            <th>SurchargeRateVersionEarnCode fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="odd">
            <td>id</td>
            <td>Integer</td>
            <td>Unique Identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>surchargeRateVersion</td>
            <td><p>To-one association</p>
                <p>(SurchargeRateVersion)</p></td>
            <td><p>SurchargeRateVersion associated with this entity.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                </ul>
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>earnCode</td>
            <td><p>To-one association</p>
                <p>(EarnCode)</p></td>
            <td>EarnCode associated with this entity.</td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td><p>To-one association</p>
                <p>(CorporateUser)</p></td>
            <td>CorporateUser who created this entity.</td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date this entity was added.</td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date this <span>entity</span> was modified.</td>
            <td>X</td>
            <td><br/></td>
        </tr>
    </tbody>
</table>
