# CandidateTaxInfo

Allows for viewing and updating tax information for a Candidate.

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
            <th>CandidateTaxInfo fields</th>
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
            <td>Candidate associated to this CandidateTaxInfo.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>taxID</td>
            <td>String</td>
            <td>Candidate's taxID.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>ssn</td>
            <td>String</td>
            <td>Candidate's social security number.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateOfBirth</td>
            <td>Timestamp</td>
            <td>Candidate's date of birth.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>i9OnFile</td>
            <td>Boolean</td>
            <td>Candidate's i9 on file.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateI9Expiration</td>
            <td>Timestamp</td>
            <td>Candidate's i9 expiration.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>taxIDIndicator</td>
            <td>String</td>
            <td>Candidate's primary tax form's taxIDIndicator.</td>
            <td></td>
            <td></td>
        </tr>
         <tr class="even">
            <td>militaryDomicileState</td>
            <td>String</td>
            <td>Candidate's primary tax form's military domicile state.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>militaryDomicileExpiration</td>
            <td>Timestamp</td>
            <td>Candidate's primary tax form's military domicile state's expiration.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customDate1 to 3</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customInt1 to 3</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customText1 to 5</td>
            <td>String</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
