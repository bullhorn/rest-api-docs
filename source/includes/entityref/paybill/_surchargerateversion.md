# Pay and Bill - SurchargeRateVersion

Represents a Surcharge Rate Version.

CRUD Access - READ

Entitlements - Add Surcharge Rate,  Add Surcharge Rate Version, Delete Surcharge Rate and Version, Manage Current Surcharge Rate Version, Manage Future Surcharge Rate Version, Manage Historical Surcharge Rate Version, View Current and Future Surcharge Rate Version

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
            <th>SurchargeRateVersion fields</th>
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
            <td>amount</td>
            <td>BigDecimal</td>
            <td>Amount of discount.</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date the entity was added.</td>
            <td>X</td>
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
            <td>earnCodes</td>
            <td><p>To-many association</p>
                <p>(SurchargeRateVersionEarnCode)</p></td>
            <td>Earn codes tied to this surcharge rate.</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>effectiveDate</td>
            <td>Date</td>
            <td>Effective date.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td>Effective end date.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>generalLedgerAccount</td>
            <td><p>To-one association</p>
                <p>(GeneralLedgerAccount)</p></td>
            <td><p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>externalAccountNumber</li>
                    <li>externalAccountName</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment1</td>
            <td><p>To-one association</p>
                <p>(GeneralLedgerSegment1)</p></td>
            <td><p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment1 is configured as Class, which allows users to specify the type of the ledger.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>externalSegmentNumber</li>
                    <li>externalSegmentName</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment2</td>
            <td><p>To-one association</p>
                <p>(GeneralLedgerSegment2)</p></td>
            <td><p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment2 is configured as Division, which allows users to specify the type of the ledger.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>externalSegmentNumber</li>
                    <li>externalSegmentName</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment3</td>
            <td><p>To-one association</p>
                <p>(GeneralLedgerSegment3)</p></td>
            <td><p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment3 is configured as Department, which allows users to specify the type of the ledger.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>externalSegmentNumber</li>
                    <li>externalSegmentName</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment4</td>
            <td><p>To-one association</p>
                <p>(GeneralLedgerSegment4)</p></td>
            <td><p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment4 is configured as Country, which allows users to specify the type of the ledger.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>externalSegmentNumber</li>
                    <li>externalSegmentName</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment5</td>
            <td><p>To-one association</p>
                <p>(GeneralLedgerSegment5)</p></td>
            <td><p>General Ledger Segments are part of the Chart of Accounts structure. By default generalLedgerSegment5 is configured as Location, which allows users to specify the type of the ledger.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>externalSegmentNumber</li>
                    <li>externalSegmentName</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>generalLedgerServiceCode</td>
            <td><p>To-one association</p>
                <p>(GeneralLedgerServiceCode)</p></td>
            <td><p>Product/Service Code.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>externalServiceCodeNumber</li>
                    <li>externalServiceCodeName</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>isFirst</td>
            <td>Boolean</td>
            <td>Indicates if this is the first version.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>rate</td>
            <td>BigDecimal</td>
            <td><br/></td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td><p>To-one association</p>
                <p>(StatusLookup)
                </p></td>
            <td><p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>title</td>
            <td>String(200)</td>
            <td><br/></td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>type</td>
            <td><p>To-one association</p>
                <p>(SurchargeRateTypeLookup)</p></td>
            <td>
                <p>Options are:</p>
                <ol>
                    <li>$ / Unit of Measure</li>
                    <li>Percentage</li>
                    <li>Legacy surcharge</li>
                </ol>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
    </tbody>
</table>
