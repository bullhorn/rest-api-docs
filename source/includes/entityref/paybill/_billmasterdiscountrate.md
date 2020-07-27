# Pay and Bill - BillMasterDiscountRate

Represents an association between BillMaster and a DiscountRate

CRUD Access - READ

Entitlements - None

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
            <th>BillMasterDiscountRate fields</th>
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
            <td>billMaster</td>
            <td>To One Association (BillMaster)</td>
            <td>
                <p>Associated Bill Master</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
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
            <td>discountRate</td>
            <td>To One Association (DiscountRate)</td>
            <td>
                <p>Associated Discount Rate.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>title</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                    <li>versionID</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To One Association (CorporateUser)</td>
            <td>
                <p>CorporateUser</p>
                <p>Associated Corporate User.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>firstName</li>
                    <li>lastName</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>
