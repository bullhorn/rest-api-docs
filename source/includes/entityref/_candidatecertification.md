# CandidateCertification

This entity represents a certification that a Candidate may have.

<table>
<thead>
<tr class="header">
<th><p><strong>CandidateCertification</strong></p>
<p><strong>field</strong></p></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
<th><strong>Not null</strong></th>
<th><strong>Read-only</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>id</td>
<td>Integer</td>
<td>Unique identifier for this entity.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>boardCertification</td>
<td>String (100)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>candidate</td>
<td>To-one association</td>
<td>Candidate linked to CandidateCertification.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>certification</td>
<td>To-one association</td>
<td>Certification linked to CandidateCertification.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>comments</td>
<td>String</td>
<td>Free-text comments on this record.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>compact</td>
<td>Integer</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>copyOnFile</td>
<td>Integer</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>dateCertified</td>
<td>Timestamp</td>
<td>Date candidate obtained certification.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>dateExpiration</td>
<td>Timestamp</td>
<td>Date certification expires.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date the CandidateCertification was last updated.</td>
<td></td>
<td>X</td>
</tr>
<tr class="odd">
<td>issuedBy</td>
<td>String (100)</td>
<td>Entity that issued certification to candidate.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>licenseNumber</td>
<td>String (100)</td>
<td></td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>licenseType</td>
<td>String (30)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>location</td>
<td>String (100)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>modifyingUser</td>
<td>To-one association</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>name</td>
<td>String (100)</td>
<td>Name of CandidateCertification.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>results</td>
<td>String (255)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>status</td>
<td>String (30)</td>
<td>Status of CandidateCertification.</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

### CandidateEducation

Represents an educational degree or course of study that a Candidate lists on his or her resume. Each CandidateEducation instance corresponds to a line item on the "Education" tab of a Candidate in the Bullhorn application.

<table>
<thead>
<tr class="header">
<th><p><strong>CandidateEducation</strong></p>
<p><strong>field</strong></p></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
<th><strong>Not null</strong></th>
<th><strong>Read-only</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>id</td>
<td>Integer</td>
<td>Unique identifier for this entity.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>candidate</td>
<td>To-one association</td>
<td><p>Candidate with whom this entity is associated. Included Candidate fields are:</p>
<p>id</p>
<p>firstName</p>
<p>lastName</p></td>
<td></td>
<td> </td>
</tr>
<tr class="odd">
<td>certification</td>
<td>String</td>
<td>Certification received with this education, if applicable.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>city</td>
<td>String (40)</td>
<td>Name of the city where the education took place.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>comments</td>
<td>String</td>
<td>Free-text comments on this record.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customDate1 to 5</td>
<td>Timestamp</td>
<td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customFloat1 to 5</td>
<td>Double</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customInt1 to 5</td>
<td>Integer</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customText1 to 5</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customTextBlock1 to 3</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date on which this record was created in the Bullhorn system.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>degree</td>
<td>String (100)</td>
<td>Indicates what educational degree the Candidate received; for example, B.A., M.A., Ph.D., and so forth.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>endDate</td>
<td>Timestamp</td>
<td>Date when Candidate finished this education.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>expirationDate</td>
<td>Timestamp</td>
<td>Expiration date for a certificate or other credential that needs to be periodically renewed.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>gpa</td>
<td>Double</td>
<td>Indicates Candidate's grade point average.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>graduationDate</td>
<td>Timestamp</td>
<td>Date when Candidate graduated.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether this record has been marked as deleted in the Bullhorn system.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>major</td>
<td>String (100)</td>
<td>Indicates the field in which Candidate majored.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>school</td>
<td>String (100)</td>
<td>Name of the educational institute where this education took place.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>startDate</td>
<td>Timestamp</td>
<td>Date when Candidate began study.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>state</td>
<td>String (50)</td>
<td>Name of the U.S State in which the education took place.</td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>

### CandidateReference

Represents a person who serves as a reference for a Candidate.

<table>
<thead>
<tr class="header">
<th><p><strong>CandidateReference</strong></p>
<p><strong>field</strong></p></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
<th><strong>Not null</strong></th>
<th><strong>Read-only</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>id</td>
<td>Integer</td>
<td>Unique identifier for this entity.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>candidate</td>
<td>To-one association</td>
<td><p>Candidate for whom this person is a reference. Included Candidate fields are:</p>
<p>id</p>
<p>firstName</p>
<p>lastName</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>candidateTitle</td>
<td>String (50)</td>
<td>Candidate's title when he or she worked with or for the reference.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>clientCorporation</td>
<td>To-one association</td>
<td>ClientCorporation where the CandidateReference works.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>companyName</td>
<td>String (50)</td>
<td>Name of the company where reference works, if it does not have a ClientCorporation record in Bullhorn.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customDate1 to 5</td>
<td>Timestamp</td>
<td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customFloat1 to 5</td>
<td>Double</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customInt1 to 5</td>
<td>Integer</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customText1 to 5</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customTextBlock1 to 3</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date on which this record was created in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>employmentEnd</td>
<td>Timestamp</td>
<td>End date of Candidate's employment with the reference.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>employmentStart</td>
<td>Timestamp</td>
<td>Start of the period during which the Candidate worked with the reference.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether this record has been marked as deleted in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>jobOrder</td>
<td>Integer</td>
<td>JobOrder for which Candidate is being considered.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>referenceClientContact</td>
<td>To-one association</td>
<td>Bullhorn ClientContact for this reference, if applicable.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>referenceEmail</td>
<td>String (50)</td>
<td>Email address for reference; not used if the CandidateReference is a client contact.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>referenceFirstName</td>
<td>String (50)</td>
<td>Reference's first name; not used if reference is a ClientContact.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>referenceLastName</td>
<td>String (50)</td>
<td>Reference's last name; not used if the CandidateReference is a ClientContact.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>referencePhone</td>
<td>String (20)</td>
<td>Phone number for the CandidateReference; not used if the reference is a ClientContact.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>referenceTitle</td>
<td>String (50)</td>
<td>Reference's job title; not used if the reference is a ClientContact.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>status</td>
<td>String (20)</td>
<td>Status of this reference request.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>yearsKnown</td>
<td>Integer</td>
<td>Indicates how long reference has known the Candidate.</td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>