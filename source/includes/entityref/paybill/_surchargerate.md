# Pay and Bill - SurchargeRate

Represents a Surcharge Rate.

CRUD Access - CREATE, READ, UPDATE, DELETE

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
            <th>SurchargeRate fields</th>
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
            <td>Amount of surcharge.</td>
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
            <td><p>The earliest date that this surcharge should apply to.</p></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td><p>The latest date that this <span>surcharge</span> should apply to.</p>
                <p>Updated by a stored proc when a new <span>surcharge</span> is added to be the day before the new <span>surcharge's</span>
                    effective date, otherwise it defaults to the year 2999.</p></td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>generalLedgerAccount</td>
            <td><p>To-one association</p>
                <p><span>(GeneralLedgerAccount)</span>
                </p></td>
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
                <p><span>(GeneralLedgerSegment1)</span>
                </p></td>
            <td><p>General Ledger Segments are part of the Chart of Accounts structure. By default Bullhorn's generalLedgerSegment1 is configured as Class, which allows users to specify the type of the ledger.</p>
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
                <p><span>(GeneralLedgerSegment2)</span>
                </p></td>
            <td><p>General Ledger Segments are part of the Chart of Accounts structure. By default Bullhorn's generalLedgerSegment2 is configured as Division, which allows users to specify the type of the ledger.</p>
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
                <p><span>(GeneralLedgerSegment3)</span>
                </p></td>
            <td><p>General Ledger Segments are part of the Chart of Accounts structure. By default Bullhorn's generalLedgerSegment3 is configured as Department, which allows users to specify the type of the ledger.</p>
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
                <p><span>(GeneralLedgerSegment4)</span>
                </p></td>
            <td><p>General Ledger Segments are part of the Chart of Accounts structure. By default Bullhorn's generalLedgerSegment4 is configured as Country, which allows users to specify the type of the ledger.</p>
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
                <p><span>(GeneralLedgerSegment5)</span>
                </p></td>
            <td><p>General Ledger Segments are part of the Chart of Accounts structure. By default Bullhorn's generalLedgerSegment5 is configured as Location, which allows users to specify the type of the ledger.</p>
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
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Soft deleted flag.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isFirst</td>
            <td>Boolean</td>
            <td>Indicates if this is the first version.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>owner</td>
            <td><p>To-one association</p>
                <p>(CorporateUser)</p></td>
            <td><p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>firstName</li>
                    <li>lastName</li>
                </ul>
            </td>
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
        <tr class="even">
            <td>versionID</td>
            <td>Integer</td>
            <td>Unique Identifier for the current version.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>versions</td>
            <td><p>To-many association</p>
                <p>(SurchargeRateVersion)</p></td>
            <td><p>Versions.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                    <li>title</li>
                </ul>
            </td>
            <td><br/></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
