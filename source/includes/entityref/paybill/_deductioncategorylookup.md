# DeductionCategoryLookup

Entity that represents the deduction categories available.

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
            <th>DeductionCategoryLookup fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Whether or not deduction label is deleted.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>label</td>
            <td>String (100)</td>
            <td>This field is used in the UI to display the deducation category type indicated by the payroll provider. Payroll Provider can choose a default value of Tax, Deduction, Other, or simply add new deduction types and labels.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>


     
        
