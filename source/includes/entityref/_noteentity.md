# NoteEntity

Represents the Candidate, ClientContact, CorporateUser, JobOrder, or Placement associated with a Note.

If you include a commentingPerson value and a personReference value when you create a Note, the association to an entity is made automatically and you do not need to make a separate call to create a NoteEntity.

|**NoteEntity field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | |
| note | To-one association | Note associated with this NoteEntity. | | |
| targetEntityID | Integer | Id of target entity to which the associated Note applies. | X | |
| targetEntityName | String | Name of target entity type. For Candidates ClientContacts, and CorporateUsers, specify “User” as the targetEntityName value. For JobOrders and Placements, specify the actual entity name as the targetEntityName value. | X | |