# Pay and Bill - JobOrderRateCardLine

An Entity representing each individual rate on a Job Order


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
            <th>JobOrderRateCardLine fields</th>
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
            <td>To-one association</td>
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
            <td>billMultiplier</td>
            <td>BigDecimal</td>
            <td>
                <p>The multiplier between the REG billRate and the current line’s billRate.</p>
                <ul>
                    <li>REG billMultiplier is always 1 (read only)</li>
                    <li>The following are defaulted from PayBillSetting:</li>
                        <ul>
                            <li>overtimeBillMultiplier (OT billMultiplier) - Set on JobOrderRateCardLine.billMultiplier for the OT earnCode</li>
                            <li>doubleTimeBillMultiplier (DT billMultiplier) - Set on JobOrderRateCardLine.billMultiplier for the DT earnCode</li>
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
            <td>earnCode</td>
            <td>To-one association</td>
            <td>Earn Code associated with the line, based on the EarnCodeGroup </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>externalID</td>
            <td>String (100)</td>
            <td>Customer defined identifier</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>markupPercent</td>
            <td>BigDecimal</td>
            <td>
                <p>Used to indicate what the difference is between the payRate and billRate as a percentage.</p>
                <p>= (billRate - payRate) / payRate</p>
                <p>(For example, if payRate = 20 and billRate = 28 then there is a 40% markup.)</p>
                <p>markups get automatically calculated in code based off their respective billRate and payRate.</p>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>markupValue</td>
            <td>BigDecimal</td>
            <td>
                <p>Used to indicate what the difference is between payRate and billRate displayed as money.</p>
                <p>= billRate - payRate</p>
                <p>(For example, there's a $10.00 difference between billRate = $20.00 and payRate = $10.00.)</p>
                <p>markups get automatically calculated in code based off their respective billRate and payRate.</p>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payCurrencyUnit</td>
            <td>To-one association</td>
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
        <tr class="odd">
            <td>payMultiplier</td>
            <td>BigDecimal</td>
            <td>
            <p>The multiplier between the REG payRate and the current line’s payRate.</p>
                <ul>
                    <li>REG billMultiplier is always 1 (read only)</li>
                    <li>The following are defaulted from PayBillSetting:</li>
                        <ul>
                            <li>overtimePayMultiplier (OT payMultiplier) - Set on JobOrderRateCardLine.payMultiplier  for the OT earnCode</li>
                            <li>doubleTimePayMultiplier (DT payMultiplier) - Set on JobOrderRateCardLine.payMultiplier  for the DT earnCode</li>
                        </ul>
                </ul>
                <p>OT and DT payMultipliers get automatically calculated in code based off their respective payRates and REG payRate.</p>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payRate</td>
            <td>BigDecimal</td>
            <td>
                <p>Pay Rate (stored as an hourly rate).</p>
                <p>payRate can get automatically calculated in code based off its respective billRate and markupPercent.</p>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jobOrderRateCardLineGroup</td>
            <td>To-one association</td>
            <td>JobOrderRateCardLineGroup
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
