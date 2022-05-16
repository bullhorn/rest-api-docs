# Location

An [effective-dated entity](../index.html#effective-dated-entity) that represents the location of a ClientCorporation.

Displays today's version unless you specify the effectiveOn query parameter (LocationVersion.viewableStartDate < today AND LocationVersion.efffectiveEndDate > today).

CRUD Access - CREATE, READ, UPDATE, DELETE

Entitlements - Add Location, Add Location Version, Delete Location and Version, Manage Current Location Version, Manage Historical Location Version, Manage Future Location Version, View Current and Future Location and Version.

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
            <th>Location fields</th>
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
            <td>address</td>
            <td>AddressWithStateID</td>
            <td>Fields:
                <ul><li>address1</li>
                <li>address2</li>
                <li>city</li>
                <li>state</li>
                <li>stateID</li>
                <li>stateName</li>
                <li>zip</li>
                <li>countryID</li>
                <li>countryName</li>
                <li>countryCode</li></ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>candidate</td>
            <td>To-one association</td>
            <td>The Candidate of the associated Location<br><br>Default fields:<ul>
                <li>id</li>
                <li>firstName</li>
                <li>lastName</li></ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>ClientCorporation of the associated Location<br><br>Default fields:<ul>
                <li>id</li>
                <li>name</li></ul></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customDate1-3</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customFloat1-3</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customInt1-3</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customText1-20</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customTextBlock1-3</td>
            <td>String (2147483647)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>declineToApplyTaxes</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>description</td>
            <td>String (255)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>effectiveDate</td>
            <td>Date</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>externalID</td>
            <td>String (100)</td>
            <td>User defined external ID</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isBillTo</td>
            <td>Boolean</td>
            <td>Is billing sent to this location.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isSoldTo</td>
            <td>Boolean</td>
            <td>Sold to the location.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isWorkSite</td>
            <td>Boolean</td>
            <td>Is this location a worksite.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To-one Association</td>
            <td>CorporateUser who is the owner of this entity. The default value is user who created the entity. <br><br>Default values:
                <ul><li>id</li>
                <li>firstName</li>
                <li>lastName</li></ul></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>salesTaxGroups</td>
            <td>To-many association</td>
            <td>AllSalesTaxGroup</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>status</td>
            <td>String (100)</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>title</td>
            <td>String (100)</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>versionID</td>
            <td>Integer</td>
            <td>LocationVersion associated with the Location. On GET calls, this is the ID of the current Version. On POST calls, this is the Version to update.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>versions</td>
            <td>To-many association</td>
            <td>LocationVersion - Versions associated with the Location.<br><br>Default fields:
                <ul><li>id</li>
                <li>effectiveDate</li>
                <li>effectiveEndDate</li>
                <li>title</li></ul></td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
