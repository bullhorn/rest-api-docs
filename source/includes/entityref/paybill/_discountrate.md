# Pay and Bill - DiscountRate

An effective dated entity that represents a Discount Rate.

CRUD Access - CREATE, READ, UPDATE, DELETE

Entitlements - Add Discount Rate, Add Discount Rate Version, Delete Discount Rate and Version, Manage Current Discount Rate Version, Manage Future Discount Rate Version, Manage Historical Discount Rate Version, View Current and Future Discount Rate and Version

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
            <th>DiscountRate fields</th>
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
            <td>Amount of discount.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>calculateAndDisplayOnInvoice</td>
            <td>Boolean</td>
            <td>Determines whether to show calculated discount on invoice.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>calculatePriority</td>
            <td>Integer</td>
            <td>The order in which to calculate this discount relative to other discounts applied to the invoice. Should be a value from 1 to 25.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>clientCorporation</td>
            <td>To-one association (ClientCorporation)</td>
            <td>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date the entity was added.</td>
            <td>X   </td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>discountTypeLookup</td>
            <td>To-one association (DiscountTypeLookup)</td>
            <td>
                <p>Type of the discount rate.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
                <p>Options are:</p>
                <ol>
                    <li>Discount</li>
                    <li>Rebate</li>
                    <li>VMS Fee</li>
                    <li>Other</li>
                    <li>Legacy discount</li>
                </ol>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>earnCodes</td>
            <td>To-many association (EarnCode)</td>
            <td>EarnCodes associated with this DiscountRate.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>effectiveDate</td>
            <td>Date</td>
            <td>Effective date.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td>Effective end date.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>generalLedgerAccount</td>
            <td>To-one association (GeneralLedgerAccount)</td>
            <td>
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
                <p>Product/Service Code.</p>
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
            <td>ignoreForSalesTaxCalculations</td>
            <td>Boolean</td>
            <td>Flag determining whether to apply the discount rate before taxes are calculated.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Soft deleted flag.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isFirst</td>
            <td>Boolean</td>
            <td>Indicates if this is the first version.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>owner</td>
            <td>To-one association (CorporateUser)</td>
            <td>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>firstName</li>
                    <li>lastName</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>rate</td>
            <td>BigDecimal</td>
            <td>The rate per quantity to apply.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>sentToAccountsReceivable</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>statusLookup</td>
            <td>To-one association (StatusLookup)</td>
            <td>
                <p>Status of the DiscountRate.</p>
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
            <td>title</td>
            <td>String (200)</td>
            <td></td>
            <td></td>
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
            <td>To-many association (DiscountRateVersion)</td>
            <td>
                <p>Versions.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                    <li>title</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>rootMigrateGUID</td>
            <td>String (36)</td>
            <td>
                <p></p>
            </td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
