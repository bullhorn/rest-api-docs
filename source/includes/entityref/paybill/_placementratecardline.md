# Pay and Bill - PlacementRateCardLine

An Entity representing each individual rate on a Placement

CRUD Access - READ

Entitlements - Based on PlacementRateCardVersion entitlements

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
            <th>PlacementRateCardLine fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>id</td>
            <td>ID</td>
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>alias</td>
            <td>String (100)</td>
            <td>Name of Earn Code that will be displayed in Time and Expense and on the Invoice Statement</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billCurrencyUnit</td>
            <td>To One Association</td>
            <td>Currency Unit for billing
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>alphabeticCode</li>
                    <li>name</li>
                </ul>                
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billRate</td>
            <td>BigDecimal</td>
            <td>Rate for billing (i.e. Hourly rate) </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>earnCode</td>
            <td>To One Association</td>
            <td>Earn Code associated with the line, based on the EarnCodeGroup </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>externalID</td>
            <td>String (100)</td>
            <td>Customer defined identifier</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payCurrencyUnit</td>
            <td>To One Association</td>
            <td>CurrencyUnit for payroll
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>alphabeticCode</li>
                    <li>name</li>
                </ul>                
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payRate</td>
            <td>BigDecimal</td>
            <td>Pay Rate</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placementRateCardLineGroup</td>
            <td>To One Association</td>
            <td>PlacementRateCardLineGroup
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>                              
            </td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>