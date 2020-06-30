# CandidateCertification

This entity represents a certification that a Candidate may have.

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
            <th>CandidateCertification fields</th>
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
            <td>boardCertification</td>
            <td>String (100)</td>
            <td>Set by certificationBoardCertificationList private label attribute</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>candidate</td>
            <td>To One Association</td>
            <td>Candidate linked to CandidateCertification.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>certification</td>
            <td>To One Association</td>
            <td>Certification linked to CandidateCertification.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>certificationFileAttachments</td>
            <td>To Many Association</td>
            <td>CertificationFileAttachments associated to entity.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>comments</td>
            <td>String (2147483647)</td>
            <td>Free-text comments on this record.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>compact</td>
            <td>Integer</td>
            <td>yes/no (1/0) Whether compact or not.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>copyOnFile</td>
            <td>Integer</td>
            <td>yes/no (1/0) Whether on file.</td>
            <td></td>
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
            <td>dateCertified</td>
            <td>Timestamp</td>
            <td>Date candidate obtained certification.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateExpiration</td>
            <td>Timestamp</td>
            <td>Date certification expires.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date the CandidateCertification was last updated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>displayStatus</td>
            <td>String (30)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>fileAttachments</td>
            <td>To Many Association</td>
            <td>CandidateFileAttachments associated to entity. Association created by adding the ID(s) of the fileAttachment(s) to this field in an association PUT call of the form: {corpToken}/entity/CandidateCertification/{entity-id}/fileAttachments/{entity-id},*}.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isComplete</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>issuedBy</td>
            <td>String (100)</td>
            <td>Entity that issued certification to candidate.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>licenseNumber</td>
            <td>String (100)</td>
            <td>License number of the certification.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>licenseType</td>
            <td>String (30)</td>
            <td>License Type of the certification.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>location</td>
            <td>String (100)</td>
            <td>Location where certification is valid.</td>
            <td></td>
            <td></td>
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
            <td>Creator of CandidateCertification.</td>
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
            <td>Free text of certification results.</td>
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
