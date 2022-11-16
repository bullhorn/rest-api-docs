# Paycheck

Entity that represents paycheck and payroll information on candidate entities only. 


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
            <th>Paycheck fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>payCheckID</td>
            <td>Integer</td>
            <td>The Payroll Provider’s identifier for the employee paycheck. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>externalPayrollEmployeeID</td>
            <td>String (200)</td>
            <td>The Payroll Providers generated identifier for the employee receiving the paycheck</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payExportBatchExternalID</td>
            <td>Integer</td>
            <td>This is used to identify the payroll providers' export that will get submitted as a batch to the Bullhorn API.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>CandidateID</td>
            <td>Integer</td>
            <td>DESCRIPTION TBD. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>checkNumber</td>
            <td>String (100)</td>
            <td>The unique identifier for the paycheck number as listed with the Payroll Provider. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>checkDate</td>
            <td>Timestamp</td>
            <td>The date that the paycheck was issued. This is not the date the employee was paid. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>periodStartDate</td>
            <td>Timestamp</td>
            <td>The date the pay period started for the paycheck. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>periodEndDate</td>
            <td>Timestamp</td>
            <td>The date the pay period ended for the paycheck. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>grossPay</td>
            <td>BigDecimal</td>
            <td>The gross pay amount pre-taxed from the employee's paycheck. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>netPay</td>
            <td>BigDecimal</td>
            <td>DESCRIPTION TBD. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isVoid</td>
            <td>Boolean</td>
            <td>Whether or not the paycheck has been voided. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>type</td>
            <td>String (50)</td>
            <td>The method in which the employee was paid for this paycheck. ACH, Check, Cash, etc</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payPeriod</td>
            <td>String (50)</td>
            <td>DESCRIPTION TBD. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>fitTaxableAmount</td>
            <td>BigDecimal</td>
            <td>The federal income taxable amount. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>earnAmount</td>
            <td>BigDecimal</td>
            <td>DESCRIPTION TBD. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>otherEarnAmount</td>
            <td>BigDecimal</td>
            <td>The amount of additional earnings outside of the tradition earn amount during the pay period.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>voucherID</td>
            <td>String (200)</td>
            <td>Used to identify the payroll voucher.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payDate</td>
            <td>Timestamp</td>
            <td>The date the employee received payment to their payment method type. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>


     
        
