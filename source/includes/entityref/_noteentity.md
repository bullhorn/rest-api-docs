# NoteEntity

Represents the Candidate, ClientContact, CorporateUser, JobOrder, or Placement associated with a Note.

If you include a commentingPerson value and a personReference value when you create a Note, the association to an entity is made automatically and you do not need to make a separate call to create a NoteEntity.

<table>
<thead>
<tr class="header">
<th><p><strong>NoteEntity</strong></p>
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
<td> </td>
</tr>
<tr class="even">
<td>note</td>
<td>To-one association</td>
<td>Note associated with this NoteEntity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>targetEntityID</td>
<td>Integer</td>
<td>Id of target entity to which the associated Note applies.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>targetEntityName</td>
<td>String</td>
<td>Name of target entity type. For Candidates ClientContacts, and CorporateUsers, specify “User” as the targetEntityName value. For JobOrders and Placements, specify the actual entity name as the targetEntityName value.</td>
<td>X</td>
<td> </td>
</tr>
</tbody>
</table>