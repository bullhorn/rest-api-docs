# PayCheck

Entity that represents paycheck and payroll information to be displayed on a candidate record. These fields are displayed in the user interface.

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
            <th>PayCheck fields</th>
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
            <td>Payroll provider’s identifier for the employee paycheck. This is required to update the paycheck user interface for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>candidate</td>
            <td>To-one association</td>
            <td>Bullhorn application ID for the employee receiving the paycheck. This is required to update the paycheck user interface for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>checkDate</td>
            <td>Timestamp</td>
            <td>Date that the paycheck was issued. This is not the date the employee was paid. This is required to update the paycheck user interface for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>checkNumber</td>
            <td>String (100)</td>
            <td>Unique identifier for the paycheck number as listed with the Payroll provider. This is required to update the paycheck user interface for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date that the paycheck was added into the Bullhorn ATS.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date on which this record was modified in the Bullhorn ATS.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>earnAmount</td>
            <td>BigDecimal</td>
            <td>Amount of all earnings during the pay period for hours worked. This is a required field.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>employeePays</td>
            <td>To-many association</td>
            <td>Employee payment from the employee paycheck for the pay period.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>employeeTaxDeductions</td>
            <td>To-many association</td>
            <td>Total dollar amount of the tax deductions from the employee paycheck for the pay period.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>employeeTotalDeduction</td>
            <td>BigDecimal</td>
            <td>Amount of all deductions for the employee. This is a required field.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>employerContributions</td>
            <td>To-many association</td>
            <td>Total dollar amount the employer is contributing to the employee paycheck for the pay period</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>externalPayrollEmployeeID</td>
            <td>String (200)</td>
            <td>Payroll provider's generated identifier for the employee receiving the paycheck.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>fitTaxableAmount</td>
            <td>BigDecimal</td>
            <td>Federal income taxable amount.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>grossPay</td>
            <td>BigDecimal</td>
            <td>Gross pay amount pre-taxed from the employee's paycheck. This is required to update the paycheck user interface for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>hoursWorked</td>
            <td>BigDecimal</td>
            <td>Total number of hours worked from the timesheet. This is a calculated field housing the amount of all hours worked from the EmployeePay entity. </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isVoid</td>
            <td>Boolean</td>
            <td>Whether or not the paycheck has been voided.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>netPay</td>
            <td>BigDecimal</td>
            <td>Net pay amount from the employee's paycheck after taxes, deductions, garnishments, and other fees are subtracted. This is required to update the paycheck user interface for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>otherEarnAmount</td>
            <td>BigDecimal</td>
            <td>Amount of additional earnings outside of the tradition earn amount during the pay period.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payDate</td>
            <td>Timestamp</td>
            <td>Date the employee received payment to their payment method type.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payExportBatchExternal</td>
            <td>To-one association</td>
            <td>Payroll provider's export that will get submitted as a batch to the Bullhorn API.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payPeriod</td>
            <td>String (50)</td>
            <td>Date for the pay period for which the employee is going to be paid.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>periodStartDate</td>
            <td>Timestamp</td>
            <td>Date the pay period started for the paycheck. This is required to update the paycheck user interface for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>periodEndDate</td>
            <td>Timestamp</td>
            <td>Date the pay period ended for the paycheck. This is required to update the paycheck user interface for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>taxAmount</td>
            <td>BigDecimal</td>
            <td>Sum of the taxAmount field from the EmployeePay entity that correlates to that paycheck. </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>type</td>
            <td>String (50)</td>
            <td>Method in which the employee was paid for this paycheck. Methods include ACH, Check, Cash, and so forth. This is required to update the paycheck user interface for your clients.</td>
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
    </tbody>
</table>


     
        
