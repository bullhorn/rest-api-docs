# Pay and Bill - SalesTaxRate

An Effective Dated Entity that represents a sales tax rate

CRUD Access - CREATE, READ, UPDATE, DELETE

Entitlements - Add Sales Tax Rate, Add Sales Tax Rate Version, Delete Sales Tax Rate and Version, Manage Current Sales Tax Rate Version, Manage Historical Sales Tax Rate Version, Manage Future Sales Tax Rate Version, View Current and Future Sales Tax Rate and Version

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
            <th>SalesTaxRate fields</th>
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
            <td>amount</td>
            <td>BigDecimal</td>
            <td>The amount for this entity - used for a fixed/amount type tax. The default value is 0.000000</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date on which the entity was created.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date on which the entity was last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>effectiveDate</td>
            <td>Date</td>
            <td>Date on which the rate will take effect.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td>Date on which the rate will no longer in effect.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>generalLedgerAccount</td>
            <td>To One Association</td>
            <td>
                <p>GeneralLedgerAccount associated with this SalesTaxRate.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>externalAccountNumber</li>
                    <li>externalAccountName</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment1</td>
            <td>To One Association</td>
            <td>
                <p>GeneralLedgerSegment1</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>externalSegmentNumber</li>
                    <li>externalSegmentName</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment2</td>
            <td>To One Association</td>
            <td>
                <p>GeneralLedgerSegment2</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>externalSegmentNumber</li>
                    <li>externalSegmentName</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment3</td>
            <td>To One Association</td>
            <td>
                <p>GeneralLedgerSegment3</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>externalSegmentNumber</li>
                    <li>externalSegmentName</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment4</td>
            <td>To One Association</td>
            <td>
                <p>GeneralLedgerSegment4</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>externalSegmentNumber</li>
                    <li>externalSegmentName</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment5</td>
            <td>To One Association</td>
            <td>
                <p>GeneralLedgerSegment5</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>externalSegmentNumber</li>
                    <li>externalSegmentName</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>          	
                <p>Indicates whether this record has been marked as deleted in the Bullhorn system.</p>
                <p>The default value is false.</p>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jurisdictionName</td>
            <td>String (200)</td>
            <td>Jurisdiction name.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jurisdictionType</td>
            <td>To One Association</td>
            <td>
                <p>TaxJurisdictionTypeLookup</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>label</td>
            <td>String (200)</td>
            <td>Label.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To One Association</td>
            <td>
                <p>CorporateUser who is the owner of this entity. The default value is the user who created the entity.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>firstName</li>
                    <li>lastName</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>rate</td>
            <td>BigDecimal</td>
            <td>The rate for this entity (i.e. 0.075 to indicate 7.5%). The default value is 0.000000</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>reportingCodeName</td>
            <td>String (100)</td>
            <td>Reporting code name.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>source</td>
            <td>To One Association</td>
            <td>
                <p>SalesTaxRateSourceLookup</p>
                <p>The source of this entity.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>stateID</td>
            <td>Integer</td>
            <td>State ID from internal database table.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>To One Association</td>
            <td>
                <p>TaxStatusLookup</p>
                <p>Status of this entity.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>taxType</td>
            <td>To One Association</td>
            <td>
                <p>TaxTypeLookup</p>
                <p>The tax type of this entity. This is used to help map V1 of taxes to V2 by storing what type of tax the user intended to create.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>type</td>
            <td>To One Association</td>
            <td>
                </p>SalesTaxRateTypeLookup</p>
                </p>Type of entity.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>versionID</td>
            <td>Integer</td>
            <td>Unique Identifier for the current version</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>versions</td>
            <td>To Many Association</td>
            <td>SalesTaxRateVersion</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>