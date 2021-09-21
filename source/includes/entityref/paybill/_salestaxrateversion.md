# Pay and Bill - SalesTaxRateVersion

The version entity for the Sales Tax Rate effective dated entity

CRUD Access - READ

Entitlements - Edit Any Invoice Statement (in future: Add Sales Tax Rate, Add Sales Tax Rate Version, Delete Sales Tax Rate and Version, Manage Current Sales Tax Rate Version, Manage Future Sales Tax Rate Version, Manage Historical Sales Tax Rate Version, View Current and Future Sales Tax Rate and Version)

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
            <th>SalesTaxRateVersion fields</th>
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
            <td>effectiveDate</td>
            <td>Date</td>
            <td>The earliest date that this tax should apply to.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td>The latest date that this tax should apply to.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isFirst</td>
            <td>Boolean</td>
            <td>Indicates if this record was the first version created on the SalesTaxRate. The default value is false.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>jurisdictionName</td>
            <td>String (200)</td>
            <td>Jurisdiction name.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>label</td>
            <td>String (200)</td>
            <td>Label.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>rate</td>
            <td>BigDecimal</td>
            <td>The rate for this entity (i.e. 0.075 to indicate 7.5%). The default value is 0.000000.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>reportingCodeName</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>source</td>
            <td>To-one association (SalesTaxRateSourceLookup)</td>
            <td>
                <p>The source of this entity.</p>
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
            <td>X</td>
        </tr>
        <tr class="odd">
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
            <td>X</td>
        </tr>
    </tbody>
</table>
