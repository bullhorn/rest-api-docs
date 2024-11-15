# {Entity}FileAttachment

Read-only entity that represents a file associated with an entity. The GET /entity/{EntityType}\]/{entityID}/fileAttachments call returns a list of files associated with that entity. Entity can be ClientCorporation, JobOrder, Candidate, ClientContact, Opportunity, or Placement.

| **{Entity}FileAttachment field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for the entity. | X | X |
| contentSubType | String (64) | Content subtype for the file. | X | |
| contentType | String (64) | Content type for the file. | X | |
| dateAdded | Timestamp | When the file was added. | X | X |
| departmentsSharedWith | To-many association | Departments with which the file is shared. | X | |
| description | String (2147483647) | Description for the file. | X | |
| directory | String (150) | Location of the file on server. | X | |
| distribution | String (8) | Distribution type for the file. | X | |
| externalID | String (100) | Third-party id of the file. | X | |
| fileExtension | String (10) | Extension type of the file. | X | X |
| fileSize | Integer | Size on disk of the file. | X | X |
| fileType | String (15) | Type of the file; for example, SAMPLE. | X | |
| isCopied | Boolean | Whether the file was copied from another entity. | X | |
| isDeleted | Boolean | Whether file is deleted | X | X |
| isOpen | Boolean | Whether file is open. | X | X |
| isPrivate | Boolean | Whether the file is private. | X | X |
| isSendOut | Boolean | Whether the file is from a sendout. | X | X |
| {entity} | To-one association | Entity associated with the file. | X | X |
| name | String (100) | Name of the file. | X | X |
| type | String (50) | Type of the file; for example, Resume. | X | |
| usersSharedWith | To-many association | Users with whom the file is shared. | X | |
| uuid | String (36) | Globally unique random ID. | X | X |
