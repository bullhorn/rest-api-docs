# CertificationFileAttachment

This entity represents files that can be attached directly to candidate certifications.  
This will only be used in the user interface if the enableCandidateCertificationRequirement private label attribute is enabled.

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
 <th>CertificationFileAttachment fields</th>
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
 <td>contentSubType</td>
 <td>String (64)</td>
 <td></td>
 <td></td>
 <td></td>
 </tr>
<tr class="even">
 <td>contentType</td>
 <td>String (64)</td>
 <td></td>
 <td></td>
 <td></td>
 </tr>
<tr class="odd">
 <td>dateAdded</td>
 <td>Timestamp</td>
 <td></td>
 <td></td>
 <td></td>
 </tr>
<tr class="even">
 <td>directory</td>
 <td>String (2147483647)</td>
 <td></td>
 <td></td>
 <td></td>
 </tr>
<tr class="odd">
 <td>fileExtension</td>
 <td>String (10)</td>
 <td></td>
 <td></td>
 <td></td>
 </tr>
<tr class="even">
 <td>fileOwner</td>
 <td>To One Association</td>
 <td>CorporateUser</td>
 <td></td>
 <td></td>
 </tr>
<tr class="odd">
 <td>fileSize</td>
 <td>Integer</td>
 <td></td>
 <td></td>
 <td></td>
 </tr>
<tr class="even">
 <td>isExternal</td>
 <td>Boolean</td>
 <td></td>
 <td></td>
 <td></td>
 </tr>
<tr class="odd">
 <td>name</td>
 <td>String (255)</td>
 <td></td>
 <td>X</td>
 <td></td>
 </tr>
<tr class="even">
 <td>type</td>
 <td>String (64)</td>
 <td></td>
 <td></td>
 <td></td>
 </tr>
 </tbody>
</table>


Creating a file should use a custom endpoint
PUT `{{restUrl}}file/CertificationFileAttachment/`

    {
      "fileContent":"BASE_64_FILE_CONTENTS",
      "name":"image.png",
      "contentType":"image/png",
      "candidateID":xxx
    }

Move/Copy a file from a candidate to a certification file attachment

POST `{restUrl}/entity/Candidate/{candidateId}}/{candidateFileId}}/fileAttachments/(move|copy)/toCertification`
