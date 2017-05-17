# {Entity}FileAttachment

Read-only entity that represents a file associated with an entity. The GET /entity/{EntityType}\]/{entityID}/fileAttachments call returns a list of files associated with that entity. Entity can be ClientCorporation, JobOrder, Candidate, ClientContact, Opportunity, or Placement.

| **{Entity}FileAttachement field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for the entity. | X | X |
| contentSubType | String | Content subtype for the file. | X | |
| contentType | String | Content type for the file. | X | |
| dateAdded | Timestamp | When the file was added. | X | X |
| description | String | Description for the file. | X | |
| directory | String | Location of the file on server. | X | |
| distribution | String | Distribution type for the file. | X | |
| externalID | String | Third-party ID of the file. | X | |
| fileExtension | String | Extension type of the file. | X | X |
| fileSize | Integer | Size on disk of the file. | X | X |
| fileType | String | Type of the file; for example, SAMPLE. | X | |
| isCopied | Boolean | Whether the file was copied from another entity. | X | |
| isDeleted | Boolean | Whether file is deleted | X | X |
| isOpen | Boolean | Whether file is open. | X | X |
| isPrivate | Boolean | Whether the file is private. | X | X |
| isSendOut | Boolean | Whether the file is from a sendout. | X | X |
| {entity} | To-one association | Entity associated with the file. | X | X |
| name | String | Name of the file. | X | X |
| type | String | Type of the file; for example, Resume. | X | |
| usersSharedWith | To-many association | Users with whom the file is shared. | X | |
| uuid | String | Globally unique random ID. | X | X |