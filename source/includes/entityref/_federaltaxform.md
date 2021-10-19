# FederalTaxForm

Represents a tax form that is added to a candidate at the federal level.

The FederalTaxForm entity is only available in the user interface if the novoTaxInfoTab corporation setting is enabled.


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
            <th>FederalTaxForm fields</th>
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
            <td>candidate</td>
            <td>To-one association</td>
            <td>Candidate to which the FederalTaxForm applies.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customDate1-5</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customInt1-5</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customMoney1-5</td>
            <td>BigDecimal</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customText1-10</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>The date on which this record was created in the Bullhorn system.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>The date on which this record was last modified.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>federalAdditionalWithholdingsAmount</td>
            <td>BigDecimal</td>
            <td>Number of federal withholdings the Candidate has selected on W-2 tax form.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>federalExemptions</td>
            <td>Integer</td>
            <td>Number of federal exemptions the Candidate has indicated on W-2 tax form.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>federalExtraWithholdingAmount</td>
            <td>BigDecimal</td>
            <td>Enter any additional tax you want withheld each pay period.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>federalFilingStatus</td>
            <td>String (10)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Whether entity is deleted or the default value is false.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isExempt</td>
            <td>Boolean</td>
            <td>To claim exemption from withholding, set this to withholding.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>otherDeductionsAmount</td>
            <td>BigDecimal</td>
            <td>If there are other deductions to be claimed (other than standard).</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>otherIncomeAmount</td>
            <td>BigDecimal</td>
            <td>If you want tax withheld for other income that is expected.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>totalDependentClaimAmount</td>
            <td>BigDecimal</td>
            <td>Total amount claimed for dependents.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>twoJobs</td>
            <td>Boolean</td>
            <td>If more then one job is held at a time or if the person is married and filing jointly and their spouse also works.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
