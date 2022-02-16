# TimeLaborEvalRuleTemplate

This entity represents the required certifications for a TimeLaborEvalRuleTemplate.



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
            <th>TimeLaborEvalRuleTemplate fields</th>
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
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>addedAtUtc</td>
            <td>Timestamp</td>
            <td>Record of when Rule was created.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>addedByUser</td>
            <td>To-one association</td>
            <td>CorporateUser default fields: 
                <li>id <li>firstName <li>lastName</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>description</td>
            <td>String (500)</td>
            <td>A short description of the Rule Template.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isDefault</td>
            <td>Boolean</td>
            <td>Whether or not this is the default template for the company.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>lastModifiedAtUtc</td>
            <td>Timestamp</td>
            <td>Record of when the rule was most recently modified.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>modifyingUser</td>
            <td>To-one association</td>
            <td>CorporateUser default fields: 
                <li>id <li>firstName <li>lastName</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>name</td>
            <td>String (100)</td>
            <td>User given name of the Rule Template.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>timeLaborEvalRules</td>
            <td>To-many association</td>
            <td>TimeLaborEvalRules associated with this Template.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timeLaborEvalRulesCalcTypes</td>
            <td>To-many association</td>
            <td>TimeLaborCalcTypeLookup options: 
                <li>Pay <li>Bill <li>Pay & Bill, and any combination of these three.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>timeLaborEvalRulesCategories</td>
            <td>To-many association</td>
            <td>TimeLaborEvalRuleCategoryLookup options: 
                <li>Holiday <li>Threshold <li>Exempt <li>Per Diem <li>PeriodBasedRate <li>Surplus <li>Penalties <li>Validation <li>Orientation, and any combination of those categories. </td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
