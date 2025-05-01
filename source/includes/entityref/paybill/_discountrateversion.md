# Pay and Bill - DiscountRateVersion

Represents a version entity for the [DiscountRate](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-discountrate) effective-dated entity.

CRUD Access - READ

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
            <th>DiscountRateVersion fields</th>
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
            <td>X</td>
        </tr>
        <tr class="even">
            <td>calculateAndDisplayOnInvoice</td>
            <td>Boolean</td>
            <td>Determines whether to show calculated discount on invoice.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>calculatePriority</td>
            <td>Integer</td>
            <td>The order in which to calculate this discount relative to other discounts applied to the invoice. Should be a value from 1 to 25.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date the entity was added.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>discountRateID</td>
            <td>Integer</td>
            <td>The ID of the DiscountRate this version is applicable to.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>discountTypeLookup</td>
            <td>To-one association (DiscountTypeLookup)</td>
            <td>
                <p>The Discount type.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
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
            <td>The earliest date that this discount should apply to.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td>The latest date that this discount should apply to.</td>
            <td></td>
            <td>X</td>
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
            <td>X</td>
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
            <td>X</td>
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
            <td>X</td>
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
            <td>X</td>
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
            <td>X</td>
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
            <td>X</td>
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
            <td>X</td>
        </tr>
        <tr class="even">
            <td>ignoreForSalesTaxCalculations</td>
            <td>Boolean</td>
            <td>Whether or not the discount should be applied when calculating sales taxes.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isFirst</td>
            <td>Boolean</td>
            <td>Indicates if this is the first version.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>rate</td>
            <td>BigDecimal</td>
            <td>The rate per quantity to apply.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>sentToAccountsReceivable</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>statusLookup</td>
            <td>To-one association (StatusLookup)</td>
            <td>
                <p>Status of the DiscountRateVersion.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>title</td>
            <td>String (200)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>versionMigrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
