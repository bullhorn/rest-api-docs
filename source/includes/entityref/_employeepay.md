# EmployeePay

Entity that represents a candidate's paycheck and payroll information.


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
            <th>EmployeePay fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>employeePayID</td>
            <td>Integer</td>
            <td>The Payroll Provider’s identifier for the employee’s payment. This would be separate from Check ID or Check Number. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payCheckID</td>
            <td>Integer</td>
            <td>The Payroll Provider’s identifier for the employee paycheck. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>locationID</td>
            <td>Integer</td>
            <td>The location code associated with the employee’s earnings as synced with the Bullhorn ATS. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>chargeDate</td>
            <td>Timestamp</td>
            <td>The charge date seen on the employee timesheet. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>hoursUnits</td>
            <td>Decimal (18,0)</td>
            <td>The number of hours or units paid for the paycheck. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>hoursWorked</td>
            <td>Decimal (18,0)</td>
            <td>The total number of hours worked from the timesheet.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>amount</td>
            <td>BigDecimal</td>
            <td>The paid dollar amount associated with the earnings. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>unitRate</td>
            <td>Decimal (18,0)</td>
            <td>This is the amount for each hour or unit paid. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobCode</td>
            <td>String (100)</td>
            <td>Job or position code associated with the earnings.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>shift</td>
            <td>String (100)</td>
            <td>The shift code associated with the earnings.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>department</td>
            <td>String (100)</td>
            <td>The department code associated with the earnings.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>glCode</td>
            <td>String (100)</td>
            <td>The General Ledger (G/L) account code from the time sheet.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>projWork</td>
            <td>String (100)</td>
            <td>Project code associated with a paycheck’s earnings</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>projPhase</td>
            <td>String (100)</td>
            <td>Project phase associated with a paycheck’s earnings</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>earnCodeName</td>
            <td>String (100)</td>
            <td>The name of the earn code associated with the earnings for this company</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>workCompID</td>
            <td>String (100)</td>
            <td>The Payroll Provider’s identifier for the workers' compensation from the time sheet</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>


     
        
