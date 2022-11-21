# EmployeeTaxDeduction

Entity that represents the Payroll Provider's Employee Tax Deduction information.

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
            <td>id</td>
            <td>Integer</td>
            <td>The Payroll Provider’s identifier for the tax deductions made by the employer. </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>code</td>
            <td>String (100)</td>
            <td>The  Payroll Provider’s employee tax deduction code. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>description</td>
            <td>String (2147483647)</td>
            <td>The description of the tax deduction. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>overLimitAmount</td>
            <td>BigDecimal</td>
            <td>The amount of taxes over the taxable limit. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payCheck</td>
            <td>To-one association</td>
            <td>The Payroll Provider’s paycheck IDs for the employee paycheck. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>taxableAmount</td>
            <td>BigDecimal</td>
            <td>The total dollar amount of the paycheck that is taxable. This is required to update the Paycheck UI for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>taxAmount</td>
            <td>BigDecimal</td>
            <td>The total dollar amount of taxes deducted from the paycheck. This is required to update the Paycheck UI for your client.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>


     
        
