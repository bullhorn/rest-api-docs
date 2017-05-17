# Note

Represents a note (comment) associated with a Candidate, ClientContact, CorporateUser, JobOrder, Lead, or Opportunity. Notes can be accessed via the "Notes" tab on the person's record in the Bullhorn application.

If you include a commentingPerson value and a personReference value when you create a Note, the association to an entity is made automatically and you do not need to make a separate call to create a NoteEntity.

| **Note field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Id of this Note. | X | |
| action | String (30) | Action type associated with Note. The list of values is configured in the private label attribute called commentActionList. | | |
| bHTimestamp | byte[] | Timestamp for this Note. | | |
| commentingPerson | To-one association | Person who created the Note. The default value is user who creates the Note. | X | |
| candidates | To-many association | Candidates associated with this Note. | | |
| clientContacts | To-many association | ClientContacts associated with this Note. | | |
| comments | String | Text of this Note. | X | |
| corporateUsers | To-many association | Ids of CorporateUsers associated with this Note. | | |
| dateAdded | Timestamp | Date on which this record was created in the Bullhorn system. | X | |
| dateLastModified | Timestamp | Date on which the Note was last modified. | | |
| externalID | String (50) | External identifier for the record, used for integrations with external datasources or custom imports. | | | 
| entities | To-many association | Ids of NoteEntities associated with this Note. | | |
| isDeleted | Boolean | Indicates whether this record has been marked as Deleted in the Bullhorn system. | X | |
| jobOrder | To-one association | Primary JobOrder associated with this Note. | | |
| jobOrders | To-many association | JobOrders associated with this Note. | | |
| leads | To-many association | Leads associated with this Note. | | |
| minutesSpent | Integer | Number of minutes spent on actions associated with this note, if applicable. | | |
| personReference | To-one association | Person with whom this Note is associated. | X | |
| placements | To-many association | Ids of Placements associated with this Note. | | |