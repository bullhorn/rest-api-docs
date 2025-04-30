# Pay and Bill - SalesTaxRate

An [effective-dated entity](../index.html#effective-dated-entity) that specifies the percentage or fixed rate at which sales tax is applied, including details on the applicable region and effective periods.

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
            <td>The amount for this entity - used for a fixed/amount type tax. The default value is 0.000000.</td>
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
            <td>externalID</td>
            <td>String</td>
            <td>Update SalesTaxRate so that API users can associate internal and external data</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerAccount</td>
            <td>To-one association (GeneralLedgerAccount)</td>
            <td>
                <p>GeneralLedgerAccount.</p>
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
        <tr class="even">
            <td>generalLedgerSegment1</td>
            <td>To-one association (GeneralLedgerSegment)</td>
            <td>
                <p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment1 is configured as Class, which allows users to specify the type of the ledger.</p>
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
            <td>generalLedgerSegment2</td>
            <td>To-one association (GeneralLedgerSegment)</td>
            <td>
                <p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment2 is configured as Division, which allows users to specify the type of the ledger.</p>
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
            <td>generalLedgerSegment3</td>
            <td>To-one association (GeneralLedgerSegment)</td>
            <td>
                <p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment3 is configured as Department, which allows users to specify the type of the ledger.</p>
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
            <td>generalLedgerSegment4</td>
            <td>To-one association (GeneralLedgerSegment)</td>
            <td>
                <p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment4 is configured as Country, which allows users to specify the type of the ledger.</p>
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
            <td>generalLedgerSegment5</td>
            <td>To-one association (GeneralLedgerSegment)</td>
            <td>
                <p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment5 is configured as Location, which allows users to specify the type of the ledger.</p>
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
            <td>generalLedgerServiceCode</td>
            <td>To-one association (GeneralLedgerServiceCode)</td>
            <td>
                <p>Product/service code.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>externalServiceCodeNumber</li>
                    <li>externalServiceCodeName</li>
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
            <td>To-one association (TaxJurisdictionTypeLookup)</td>
            <td>
                <p>Jurisdiction type.</p>
                <p>Options are:</p>
                    <ol>
                        <li>City</li>
                        <li>County</li>
                        <li>District</li>
                        <li>State</li>
                        <li>Other</li>
                        <li>MTA</li>
                    </ol>
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
            <td>To-one association (CorporateUser)</td>
            <td>
                <p>Corporate User who is the owner of this entity. The default value is the user who created the entity.</p>
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
            <td>The rate for this entity (i.e. 0.075 to indicate 7.5%). The default value is 0.000000.</td>
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
            <td>To-one association (SalesTaxRateSourceLookup)</td>
            <td>
                <p>Source of this entity.</p>
                <p>Options:</p>
                <ol>
                    <li>Manual (default)</li>
                </ol>
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
            <td>To-one association (TaxStatusLookup)</td>
            <td>
                <p>Status of this entity.</p>
                <p>Options are:</p>
                <ol>
                    <li>Active</li>
                    <li>Inactive</li>
                </ol>
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
            <td>To-one association (TaxTypeLookup)</td>
            <td>
                <p>The tax type of this entity.</p>
                <p>Options are:</p>
                <ol>
                    <li>Amount</li>
                    <li>Percent</li>
                </ol>
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
            <td>To-one association (SalesTaxRateTypeLookup)</td>
            <td>
                </p>Type of SalesTaxRate.</p>
                <p>Options are:</p>
                <ol>
                    <li>Location Based Tax</li>
                    <li>Invoice Tax</li>
                </ol>
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
            <td>Unique Identifier for the current version.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>versions</td>
            <td>To-many association (SalesTaxRateVersion)</td>
            <td>Versions of this entity.</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
