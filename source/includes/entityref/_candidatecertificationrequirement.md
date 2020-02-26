# CandidateCertificationRequirement

This entity represents the required certifications for a Candidate.

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
 <td>ID</td>
 <td>Unique identifier for this entity.</td>
 <td>X</td>
 <td>X</td>
 </tr>
<tr class="odd">
 <td>candidate</td>
 <td>To-one association</td>
 <td>Candidate</td>
 <td>X</td>
 <td></td>
 </tr>
<tr class="even">
 <td>candidateCertification</td>
 <tdTo-one association</td>
 <td>CandidateCertification that fulfills this Requirement.</td>
 <td></td>
 <td></td>
 </tr>
<tr class="odd">
 <td>certification</td>
 <td>To-one association</td>
 <td>The Certification that is required.</td>
 <td>X</td>
 <td></td>
 </tr>
<tr class="even">
 <td>certificationFileAttachments</td>
 <td>To-many association</td>
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
 <td>fileAttachments</td>
 <td>To-many association</td>
 <td>CandidateFileAttachment</td>
 <td></td>
 <td>X</td>
 </tr>
<tr class="even">
 <td>matchingCredentialCount</td>
 <td>Integer</td>
 <td></td>
 <td></td>
 <td>X</td>
 </tr>
<tr class="odd">
 <td>modifyingUser</td>
 <tdTo-one association</td>
 <td>CorporateUser</td>
 <td>X</td>
 <td>X</td>
 </tr>
<tr class="even">
 <td>owner</td>
 <tdTo-one association</td>
 <td>CorporateUser</td>
 <td>X</td>
 <td></td>
 </tr>
<tr class="odd">
 <td>status</td>
 <td>To-one association</td>
 <td>CertificationRequirementStatusLookup</td>
 <td></td>
 <td></td>
 </tr>
<tr class="even">
 <td>userCertificationName</td>
 <td>String (100)</td>
 <td></td>
 <td></td>
 <td>X</td>
 </tr>
<tr class="odd">
 <td>userCertificationStatus</td>
 <td>String (30)</td>
 <td></td>
 <td></td>
 <td>X</td>
 </tr>
 </tbody>
</table>
