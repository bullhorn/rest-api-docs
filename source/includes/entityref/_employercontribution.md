# EmployerContribution

Entity that represents the Payroll Provider's Employer Contributions. Available on candidate entities only.


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
            <th>EmployerContribution fields</th>
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
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>code</td>
            <td>String (100)</td>
            <td>The Payroll Provider’s employer contribution code. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>description</td>
            <td>String (2147483647)</td>
            <td>The description of the employer contribution. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>amount</td>
            <td>BigDecimal</td>
            <td>The total employer contribution dollar amount. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>


     
        
