# EmployerContribution

Entity that represents the Payroll provider's Employer Contributions.

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
        <tr class="odd">
            <td>id</td>
            <td>Integer</td>
            <td>Payroll provider’s identifier for the contributions made by the employer.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>amount</td>
            <td>BigDecimal</td>
            <td>Total employer contribution dollar amount. This is a required field.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>code</td>
            <td>String (100)</td>
            <td>Payroll provider’s employer contribution code. This is a required field.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>description</td>
            <td>String (2147483647)</td>
            <td>Description of the employer contribution. This is a required field.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payCheck</td>
            <td>To-one association</td>
            <td>Payroll provider’s paycheck IDs for the employee paycheck. This is required to update the paycheck user interface for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>


     
        
