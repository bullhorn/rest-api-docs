# LocalTaxForm

Represents a tax form that is added to a candidate at the local level.

The LocalTaxForm entity is only available in the user interface if the novoTaxInfoTab corporation setting is enabled.




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
            <th>LocalTaxForm fields</th>
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
            <td>Candidate to which the LocalTaxForm applies.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customDate1-5</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customInt1-5</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
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
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Whether entity is deleted or the default value is false.</td>
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
            <td>localAdditionalWithholdingsAmount</td>
            <td>BigDecimal</td>
            <td>Number of local withholdings the Candidate has selected on W-2 tax form.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>localExemptions</td>
            <td>Integer</td>
            <td>Number of local exemptions Candidate has indicated on W-2 tax form.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>localFilingStatus</td>
            <td>String (10)</td>
            <td>Candidate’s local tax filing status.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>localTaxCode</td>
            <td>String (1000)</td>
            <td>Candidate’s local tax code (if local taxes apply); not required.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>localTaxStateID</td>
            <td>Integer</td>
            <td>State in which Candidate pays taxes.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
