# Data-Hub - Data
Represents a Data-Hub Data record.

CRUD Access - READ, UPDATE.

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
            <th>EdsData fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>dataId</td>
            <td>Integer</td>
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>appointmentId</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billableChargeId</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>candidateId</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>clientContactId</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>clientCorporationId</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>corporateUserId</td>
            <td>Integer</td>
            <td></td>
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
            <td>dateAddedInSourceSystem</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateLastModifiedInSourceSystem</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>entityType</td>
            <td>To-one association</td>
            <td>EdsEntityType</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>entityTypeSchemaVersion</td>
            <td>To-one association</td>
            <td>EdsEntityTypeSchemaVersion</td>
            <td>X</td>
            <td></td>
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
            <td>jobOrderId</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jobSubmissionId</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>leadId</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>noteId</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>opportunityId</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payableChargeId</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payload</td>
            <td>String (2147483647)</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placementId</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>sourceId</td>
            <td>Long</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>
