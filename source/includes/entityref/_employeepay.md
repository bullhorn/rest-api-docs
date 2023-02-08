# EmployeePay
Entity that houses the data necessary to represent paycheck and payroll information.


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
            <td>id</td>
            <td>Integer</td>
            <td>Payroll provider’s identifier for the employee’s payment. This would be separate from check ID or check number.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>amount</td>
            <td>BigDecimal</td>
            <td>Paid dollar amount associated with the earnings.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>chargeDate</td>
            <td>Timestamp</td>
            <td>Charge date seen on the employee timesheet.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>department</td>
            <td>String (100)</td>
            <td>Department code associated with the earnings.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>earnCodeName</td>
            <td>String (100)</td>
            <td>Name of the earn code associated with the earnings for this company.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>glCode</td>
            <td>String (100)</td>
            <td>General Ledger (G/L) account code from the time sheet.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>hoursUnits</td>
            <td>BigDecimal</td>
            <td>The number of hours or units paid for the paycheck.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>hoursWorked</td>
            <td>BigDecimal</td>
            <td>The total number of hours worked from the timesheet. This is required to update the paycheck user interface for your client.</td>
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
            <td>location</td>
            <td>String (100)</td>
            <td>Location associated with the employee’s earnings as synced with the Bullhorn ATS.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payCheck</td>
            <td>To-one association</td>
            <td>Payroll provider’s paycheck IDs for the employee paycheck. This is required to update the paycheck user interface for your client.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>projPhase</td>
            <td>String (100)</td>
            <td>Project phase associated with a paycheck’s earnings.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>projWork</td>
            <td>String (100)</td>
            <td>Project code associated with a paycheck’s earnings.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>shift</td>
            <td>String (100)</td>
            <td>Shift code associated with the earnings.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>unitRate</td>
            <td>BigDecimal</td>
            <td>Number of hours or units paid for the paycheck.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>workCompID</td>
            <td>String (100)</td>
            <td>Payroll provider’s identifier for the workers' compensation from the time sheet.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
