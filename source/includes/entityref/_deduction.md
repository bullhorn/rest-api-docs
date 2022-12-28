# Deduction

Entity that represents the Payroll provider's Deduction information.

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
            <th>Deduction fields</th>
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
            <td>Payroll provider’s identifier for the tax deductions made by the employer. </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>code</td>
            <td>String (100)</td>
            <td>Payroll provider’s employee tax deduction code. Required to update the paycheck user interface for your client.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>description</td>
            <td>String (2147483647)</td>
            <td>Required description of the tax deduction.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>deductionCategoryLookupID</td>
            <td>Integer</td>
            <td>Auto-generated field used to identify existing or payroll provider additions to deduction categories.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>oneTimeSwitch</td>
            <td>String (100)</td>
            <td>Payroll Provider Identifier to indicate if the deduction is used a single time.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>overLimitAmount</td>
            <td>BigDecimal</td>
            <td>Amount of wages for a check where a maximum amount of taxable income has been met.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payCheck</td>
            <td>To-one association</td>
            <td>Payroll provider’s paycheck IDs for the employee paycheck.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>taxableAmount</td>
            <td>BigDecimal</td>
            <td>Total dollar amount of the paycheck that is taxable.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>taxAmount</td>
            <td>BigDecimal</td>
            <td>Total dollar amount of taxes deducted from the paycheck.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>type</td>
            <td>String (100)</td>
            <td>Used to identify the type of deduction being utlized in the paycheck. This field, along with ‘label’ in the DeductionCategoryLookup table should be used to display deduction type on the UI.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>unionID</td>
            <td>String (100)</td>
            <td>Payroll Provider Identifier for the labor union code associated with the deduction.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>


     
        
