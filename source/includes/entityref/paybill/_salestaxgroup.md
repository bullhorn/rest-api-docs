# Pay and Bill - SalesTaxGroup

Represents various taxes (city, state, other, and so forth) associated with a zip+4 range.

CRUD Access - CREATE, READ, UPDATE

Entitlements - Add Sales Tax Group, Edit Sales Tax Group, Read Sales Tax Group, Delete Sales Tax Group

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
            <th>SalesTaxGroup fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>Integer</td>
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date the entity was added.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <td>stateID</td>
            <td>Integer</td>
            <td>State id of tax group userd for validation with zip code.</td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr>
            <td>taxStatusLookup</td>
            <td><p>Many-To-One association</p>
                <div>(TaxStatusLookup)</div>
            </td>
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
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr>
            <td>label</td>
            <td>String</td>
            <td>Label of tax group.</td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr>
            <td>zipcode</td>
            <td>String</td>
            <td>Zipcode of tax group.</td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr>
            <td>zipPlus4Low</td>
            <td>String</td>
            <td>Provides a range of zipcodes within the tax group.</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr>
            <td>zipPlus4High</td>
            <td><span>String</span></td>
            <td><span>Provides a range of zipcodes within the tax group.</span></td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr>
            <td>externalID</td>
            <td>Integer</td>
            <td>External id for the tax group, from the tax group source.</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr>
            <td>salesTaxRateSourceLookup</td>
            <td><p>Many-To-One association</p>
                <p>(SalesTaxRateSourceLookup)</p></td>
            <td><p>The source for the sales tax group.</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr>
            <td>stateSalesTaxRate</td>
            <td><p>Many-To-One association</p>
                <p>(StateSalesTaxRate)</p></td>
            <td><p>State Sales Tax Rate for the tax group.</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr>
            <td>citySalesTaxRate</td>
            <td><p>Many-To-One association</p>
                <p>(CitySalesTaxRate)</p></td>
            <td><p>City Sales Tax Rate for the tax group.</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr>
            <td>countySalesTaxRate</td>
            <td><p>Many-To-One association</p>
                <p>(CountySalesTaxRate)</p></td>
            <td><p>County Sales Tax Rate for the tax group.</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr>
            <td>districtSalesTaxRate</td>
            <td><p><span>Many-To-One association</span></p>
                <p><span>(DistrictSalesTaxRate)</span></p></td>
            <td><p>District Sales Tax Rate for the tax group.</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr>
            <td>otherSalesTaxRates</td>
            <td><p>Many-To-Many</p>
                <p>List (OtherSalesTaxRate)</p></td>
            <td><p>Other Sales Tax Rates for the tax group.</p>
                <p><br/></p></td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr>
            <td>totalRate</td>
            <td>BigDecimal</td>
            <td>Sum of all rates of associated tax rates.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr>
            <td>taxOnMarginEnabled</td>
            <td>Boolean</td>
            <td>Field marks the Sales Tax Group to utilize taxable margins. If configured to true, will be used in conjunction with taxableMargin field on Placement Rate Card Line to determine appropriate level of taxes for transactions.</td>
            <td>X</td>
            <td><br/></td>
        </tr>
    </tbody>
</table>
