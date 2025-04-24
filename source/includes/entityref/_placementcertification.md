# PlacementCertification

This entity represents the required certifications for a Placement.


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
            <th>PlacementCertification fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>id</td>
            <td>ID</td>
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>candidateCertification</td>
            <td>To One Association</td>
            <td>CandidateCertification that fulfills this Requirement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>candidateCertificationName</td>
            <td>String (255)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>candidateCertificationStatus</td>
            <td>String (255)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>certification</td>
            <td>To One Association</td>
            <td>The Certification that is required.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>certificationFileAttachments</td>
            <td>To Many Association</td>
            <td>CertificationFileAttachment</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customDate1-10</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customFloat1-3</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customInt1-3</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customText1-10</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customTextBlock1-10</td>
            <td>String (2147483647)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateExpiration</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date the PlacementCertification was last updated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>documentDeadline</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>editHistories</td>
            <td>To Many Association</td>
            <td>PlacementCertificationEditHistory</td>
            <td></td>
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
            <td>matchingCredentialCount</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>modifyingUser</td>
            <td>To One Association</td>
            <td>CorporateUser</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>owner</td>
            <td>To One Association</td>
            <td>CorporateUser</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>placement</td>
            <td>To One Association</td>
            <td>Placement</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>To One Association</td>
            <td>CertificationRequirementStatusLookup</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
