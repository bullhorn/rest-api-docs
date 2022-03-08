# Note

Represents a note (comment) associated with a Candidate, ClientContact, CorporateUser, JobOrder, JobShift, Lead, or Opportunity. Notes can be accessed via the "Notes" tab on the person's record in the Bullhorn application.

If you include a commentingPerson value and a personReference value when you create a Note, the association to an entity is made automatically and you do not need to make a separate call to create a NoteEntity.

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
            <th>Note fields</th>
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
            <td>Id of this Note.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>action</td>
            <td>String (30)</td>
            <td>Action type associated with Note. The list of values is configured in the private label attribute called commentActionList.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>bhTimeStamp</td>
            <td>byte[]</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>candidates</td>
            <td>To-many association</td>
            <td>Candidates associated with this Note.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>clientContacts</td>
            <td>To-many association</td>
            <td>ClientContacts associated with this Note.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>commentingPerson</td>
            <td>To-one association</td>
            <td>Person who created the Note. The default value is user who creates the Note.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>comments</td>
            <td>String (2147483647)</td>
            <td>Text of this Note.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>corporateUsers</td>
            <td>To-many association</td>
            <td>Ids of CorporateUsers associated with this Note.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date on which this record was created in the Bullhorn system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date on which the Note was last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>entities</td>
            <td>To-many association</td>
            <td>Ids of NoteEntities associated with this Note.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>externalID</td>
            <td>String (100)</td>
            <td>External identifier for the record, used for integrations with external datasources or custom imports.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isDeleted</td>
            <td>Indicates whether this record has been marked as Deleted in the Bullhorn system.</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jobOrder</td>
            <td>To-one association</td>
            <td>Primary JobOrder associated with this Note.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobOrders</td>
            <td>To-many association</td>
            <td>JobOrders associated with this Note.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>jobShifts</td>
            <td>To-many association</td>
            <td>JobShift</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>leads</td>
            <td>To-many association</td>
            <td>Leads associated with this Note.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>linkedInID</td>
            <td>String (200)</td>
            <td></td>
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
            <td>minutesSpent</td>
            <td>Integer</td>
            <td>Number of minutes spent on actions associated with this note, if applicable.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>opportunities</td>
            <td>To-many association</td>
            <td>Opportunity</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>people</td>
            <td>To-many association</td>
            <td>Person</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>personReference</td>
            <td>To-one association</td>
            <td>Person with whom this Note is associated.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placements</td>
            <td>To-many association</td>
            <td>Ids of Placements associated with this Note.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>primaryDepartmentName</td>
            <td>String (0)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>truestDateAdded</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table> 
