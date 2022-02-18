# TimeLaborEvalRule

This entity represents the required certifications for a TimeLaborEvalRule.



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
            <th>TimeLaborEvalRule fields</th>
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
                <li>id</li>
                <li>firstName</li>
                <li>lastName</li>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>description</td>
            <td>String (4000)</td>
            <td>A short description of the Rule.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>holidays</td>
            <td>To-many association</td>
            <td>Holiday fields: 
                <li>id</li>
                <li>label</li>
            Rule is associate to a Holiday for certain specified dates on the calendar.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isRun</td>
            <td>Boolean</td>
            <td>Whether or not the rule has been run. If it has been run, the rule cannot be deleted, only set to inactive.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>lastModifiedAtUtc</td>
            <td>Timestamp</td>
            <td>Record of when the rule was most recently modified.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>modifyingUser</td>
            <td>To-one association</td>
            <td>CorporateUser default fields:  
                <li>id</li>
                <li>firstName</li>
                <li>lastName</li></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>name</td>
            <td>String (100)</td>
            <td>The user given name of the rule.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>parameters</td>
            <td>Map</td>
            <td>Variable Rule Type Information that appears based on what Rule Type is selected.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>states</td>
            <td>To-many association</td>
            <td>NorthAmericaState. All 50 states and any combination of them are available to choose.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timeLaborCalcTypeLookup</td>
            <td>To-one association</td>
            <td>TimeLaborCalcTypeLookup options:
                <li>Pay</li>
                <li>Bill</li>
                <li>Pay & Bill.</li>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>timeLaborEvalRuleCategoryLookup</td>
            <td>To-one association</td>
            <td>TimeLaborEvalRuleCategoryLookup options: 
                <li>Holiday</li> <li>Threshold <li>Exempt <li>Per Diem <li>PeriodBasedRate <li>Surplus <li>Penalties <li>Validation <li>Orientation</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timeLaborEvalRuleCombineCriteriaLookup</td>
            <td>To-one association</td>
            <td>TimeLaborEvalRuleCombineCriteriaLookup options: 
                <li>Candidate</li> <li>Placement</li> <li>Sheet</li></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>timeLaborEvalRuleStatusLookup</td>
            <td>To-one association</td>
            <td>TimeLaborEvalRuleStatusLookup options: 
                <li>Active <li>Inactive. </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timeLaborEvalRuleTemplates</td>
            <td>To-many association</td>
            <td>TimeLaborEvalRuleTemplate: Displays on UI as Used on Templates, could be on multiple templates. Points to which templates the rule is used on.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>timeLaborEvalRuleTypeLookup</td>
            <td>To-one association</td>
            <td>TimeLaborEvalRuleTypeLookup: All rule types under the categories listed in the Category Lookup.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>