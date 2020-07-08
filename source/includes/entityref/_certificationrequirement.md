# CertificationRequirement

Data from CandidateCertificationRequirement, JobSubmissionCertificationRequirement, and PlacementCertification joined together



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
            <th>CertificationRequirement fields</th>
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
            <td>To One Association</td>
            <td>Candidate</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>candidateCertification</td>
            <td>To One Association</td>
            <td>CandidateCertification that fulfills this Requirement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>certification</td>
            <td>To One Association</td>
            <td>The Certification that is required.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>certificationFileAttachments</td>
            <td>To Many Association</td>
            <td>CertificationFileAttachment</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customDate1-10</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customFloat1-3</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customInt1-3</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customText1-10</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customTextBlock1-10</td>
            <td>String (2147483647)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateExpiration</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>documentDeadline</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>entityName</td>
            <td>String (37)</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>fileAttachments</td>
            <td>To Many Association</td>
            <td>CandidateFileAttachment</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td><p><span>Whether entity is deleted.</span></p>
<p><span> <span>The default value is false.</span> </span></p></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobSubmission</td>
            <td>To One Association</td>
            <td>JobSubmission</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>matchingCredentialCount</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>modifyingUser</td>
            <td>To One Association</td>
            <td>CorporateUser</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To One Association</td>
            <td>CorporateUser</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placement</td>
            <td>To One Association</td>
            <td>Placement</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>status</td>
            <td>To One Association</td>
            <td>CertificationRequirementStatusLookup</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>userCertificationName</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>userCertificationStatus</td>
            <td>String (30)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
