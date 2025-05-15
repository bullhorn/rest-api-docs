# Pay and Bill - ClientCorporationRateAgreementCardLine

Represents individual line items within the rate agreement card, detailing specific rate components, charges, or conditions on a [ClientCorporation](https://bullhorn.github.io/rest-api-docs/entityref.html#clientcorporation).

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
            <th>ClientCorporationRateAgreementCardLine fields</th>
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
            <td>alias</td>
            <td>String (100)</td>
            <td>Name of Earn Code that will be displayed in Time and Expense and on the Invoice Statement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billCurrencyUnit</td>
            <td>To-one association</td>
            <td>Currency unit for billing.
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
            <td>billMultiplier</td>
            <td>BigDecimal</td>
            <td>
                <p>The multiplier between the REG billRate and the current line’s billRate.</p>
                <ul>
                    <li>REG billMultiplier is always 1 (read only)</li>
                    <li>The following are defaulted from PayBillSetting:</li>
                        <ul>
                            <li>overtimeBillMultiplier (OT billMultiplier) - Set on ClientCorporationRateAgreementCardLine.billMultiplier for the OT earnCode</li>
                            <li>doubleTimeBillMultiplier (DT billMultiplier) - Set on ClientCorporationRateAgreementCardLine.billMultiplier for the DT earnCode</li>
                        </ul>
                </ul>
                <p>OT and DT billMultipliers get automatically calculated in code based off their respective billRate and REG billRate.</p>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billRate</td>
            <td>BigDecimal</td>
            <td>
                <p>Rate for billing (stored as an hourly rate).</p>
                <p>billRate can get automatically calculated in code based off its respective payRate and markupPercent.</p>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>clientCorporationRateAgreementCardLineGroup</td>
            <td>To-one association</td>
            <td>ClientCorporationRateAgreementCardLineGroup.
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>                              
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customFloat1-5</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customInt1-5</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customRate1-5</td>
            <td>BigDecimal</td>
            <td>Configurable rate fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customText1-10</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>earnCode</td>
            <td>To-one association</td>
            <td>Earn Code associated with the line, based on the EarnCodeGroup.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>externalID</td>
            <td>String (100)</td>
            <td>External identifier for the record, used for migrations and back-office Integration.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>markupPercent</td>
            <td>BigDecimal</td>
            <td>
                <p>Used to indicate what the difference is between the payRate and billRate as a percentage.</p>
                <p>= (billRate - payRate) / payRate</p>
                <p>(For example, if payRate = 20 and billRate = 28 then there is a 40% markup.)</p>
                <p>Markups get automatically calculated in code based off their respective billRate and payRate.</p>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>markupValue</td>
            <td>BigDecimal</td>
            <td>
                <p>Used to indicate what the difference is between payRate and billRate displayed as money.</p>
                <p>= billRate - payRate</p>
                <p>For example, there's a $10.00 difference between billRate = $20.00 and payRate = $10.00.</p>
                <p>Markups get automatically calculated in code based off their respective billRate and payRate.</p>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td>Unused.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payCurrencyUnit</td>
            <td>To-one association</td>
            <td>CurrencyUnit for payroll.
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
            <td>payMultiplier</td>
            <td>BigDecimal</td>
            <td>
            <p>The multiplier between the REG payRate and the current line’s payRate.</p>
                <ul>
                    <li>REG billMultiplier is always 1 (read only)</li>
                    <li>The following are defaulted from PayBillSetting:</li>
                        <ul>
                            <li>overtimePayMultiplier (OT payMultiplier) - Set on ClientCorporationRateAgreementCardLine.payMultiplier  for the OT earnCode</li>
                            <li>doubleTimePayMultiplier (DT payMultiplier) - Set on ClientCorporationRateAgreementCardLine.payMultiplier  for the DT earnCode</li>
                        </ul>
                </ul>
                <p>OT and DT payMultipliers get automatically calculated in code based off their respective payRates and REG payRate.</p>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payRate</td>
            <td>BigDecimal</td>
            <td>
                <p>Pay Rate (stored as an hourly rate).</p>
                <p>payRate can get automatically calculated in code based off its respective billRate and markupPercent.</p>
            </td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
