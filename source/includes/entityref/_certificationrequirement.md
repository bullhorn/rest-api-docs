# CertificationRequirement

Read-Only Entity

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
 <td>ID</td>
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
 <td>CandidateCertification</td>
 <td></td>
 <td></td>
 </tr>
<tr class="odd">
 <td>certification</td>
 <td>To One Association</td>
 <td>Certification</td>
 <td>X</td>
 <td></td>
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
 <td>To Many Association</td>
 <td>CandidateFileAttachment</td>
 <td></td>
 <td>X</td>
 </tr>
<tr class="odd">
 <td>jobSubmission</td>
 <td>To One Association</td>
 <td>JobSubmission</td>
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