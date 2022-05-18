# CandidateCertificationRequirement

Represents the required certifications for a Candidate.

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
            <th>CandidateCertificationRequirement fields</th>
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
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>candidate</td>
            <td>To-one association</td>
            <td>Associated Candidate.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>candidateCertification</td>
            <td>To-one association</td>
            <td>CandidateCertification that fulfills this CandidateCertificationRequirement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>certification</td>
            <td>To-one association</td>
            <td>Certification that is required.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>certificationFileAttachments</td>
            <td>To-many association</td>
            <td>Associated CertificationFileAttachments.</td>
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
            <td>Date on which this record was created in the Bullhorn system.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateExpiration</td>
            <td>Timestamp</td>
            <td>Date CandidateCertificationRequirement expires.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date entity was last modified.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>documentDeadline</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>fileAttachments</td>
            <td>To-many association</td>
            <td>Associated CandidateFileAttachment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td><p><span>Whether entity is deleted.</span></p>
<p><span> <span>The default value is false.</span> </span></p></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>matchingCredentialCount</td>
            <td>Integer</td>
            <td>Count of matching Credentials.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td>Unused.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>modifyingUser</td>
            <td>To-one association</td>
            <td>Associated CorporateUser.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>owner</td>
            <td>To-one association</td>
            <td>Associated CorporateUser.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>status</td>
            <td>To-one association</td>
            <td>Associated CertificationRequirementStatusLookup.</td>
            <td></td>
            <td></td>
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
            <td>Status of certification.</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
