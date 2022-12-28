# DeductionCategoryLookup

Entity that holds the deduction categories
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
            <th>paycheck fields</th>
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
            <td>ID field for the deduction categories.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>label</td>
            <td>String (100)</td>
            <td>Label of the deduction category.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Weather or not the category is deleted.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>


     
        
