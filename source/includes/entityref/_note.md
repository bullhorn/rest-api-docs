# Note

Represents a note (comment) associated with a Candidate, ClientContact, CorporateUser, JobOrder, Lead, or Opportunity. Notes can be accessed via the "Notes" tab on the person's record in the Bullhorn application.

If you include a commentingPerson value and a personReference value when you create a Note, the association to an entity is made automatically and you do not need to make a separate call to create a NoteEntity.

<table>
<thead>
<tr class="header">
<th><p><strong>Note</strong></p>
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
<td>Id of this Note.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>action</td>
<td>String (30)</td>
<td>Action type associated with Note. The list of values is configured in the private label attribute called commentActionList.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>bHTimestamp</td>
<td>byte[]</td>
<td>Timestamp for this Note.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>commentingPerson</td>
<td>To-one association</td>
<td><p>Person who created the Note.</p>
<p>The default value is user who creates the Note.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>candidates</td>
<td>To-many association</td>
<td><p>Candidates associated with this Note. Included fields are:<br />
id</p>
<p>firstName</p>
<p>lastName</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>clientContacts</td>
<td>To-many association</td>
<td><p>ClientContacts associated with this Note.</p>
<p>Included fields are:<br />
id</p>
<p>firstName</p>
<p>lastName</p></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>comments</td>
<td>String</td>
<td>Text of this Note.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>corporateUsers</td>
<td>To-many association</td>
<td>Ids of CorporateUsers associated with this Note.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date on which this record was created in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date on which the Note was last modified.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>externalID</td>
<td>String (50)</td>
<td>External identifier for the record, used for integrations with external datasources or custom imports</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>entities</td>
<td>To-many association</td>
<td>Ids of NoteEntities associated with this Note.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether this record has been marked as Deleted in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>jobOrder</td>
<td>To-one association</td>
<td><p>Primary JobOrder associated with this Note. Included fields are:<br />
id</p>
<p>title</p></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>jobOrders</td>
<td>To-many association</td>
<td><p>JobOrders associated with this Note. Included fields are:<br />
id</p>
<p>title</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>leads</td>
<td>To-many association</td>
<td>Leads associated with this Note. Included lead field is id.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>minutesSpent</td>
<td>Integer</td>
<td>Number of minutes spent on actions associated with this note, if applicable.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>personReference</td>
<td>To-one association</td>
<td><p>Person with whom this Note is associated. Included fields are:<br />
id</p>
<p>_subtype</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>placements</td>
<td>To-many association</td>
<td>Ids of Placements associated with this Note.</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>