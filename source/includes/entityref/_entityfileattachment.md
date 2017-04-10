# {Entity}FileAttachment

Read-only entity that represents a file associated with an entity. The GET /entity/{EntityType}\]/{entityID}/fileAttachments call returns a list of files associated with that entity. Entity can be ClientCorporation, JobOrder, Candidate, ClientContact, Opportunity, or Placement.

<table>
<thead>
<tr class="header">
<th><p><strong>{Entity}FileAttachement</strong></p>
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
<td>Unique identifier for the entity.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>contentSubType</td>
<td>String</td>
<td>Content subtype for the file.</td>
<td></td>
<td>X</td>
</tr>
<tr class="odd">
<td>contentType</td>
<td>String</td>
<td>Content type for the file.</td>
<td></td>
<td>X</td>
</tr>
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>When the file was added.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>description</td>
<td>String</td>
<td>Description for the file.</td>
<td></td>
<td>X</td>
</tr>
<tr class="even">
<td>directory</td>
<td>String</td>
<td>Location of the file on server.</td>
<td></td>
<td>X</td>
</tr>
<tr class="odd">
<td>distribution</td>
<td>String</td>
<td>Distribution type for the file.</td>
<td></td>
<td>X</td>
</tr>
<tr class="even">
<td>externalID</td>
<td>String</td>
<td>Third-party ID of the file.</td>
<td></td>
<td>X</td>
</tr>
<tr class="odd">
<td>fileExtension</td>
<td>String</td>
<td>Extension type of the file.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>fileSize</td>
<td>Integer</td>
<td>Size on disk of the file.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>fileType</td>
<td>String</td>
<td>Type of the file; for example, SAMPLE.</td>
<td></td>
<td>X</td>
</tr>
<tr class="even">
<td>isCopied</td>
<td>Boolean</td>
<td>Whether the file was copied from another entity.</td>
<td></td>
<td>X</td>
</tr>
<tr class="odd">
<td>isDeleted</td>
<td>Boolean</td>
<td>Whether file is deleted</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>isOpen</td>
<td>Boolean</td>
<td>Whether file is open.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>isPrivate</td>
<td>Boolean</td>
<td>Whether the file is private.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>isSendOut</td>
<td>Boolean</td>
<td>Whether the file is from a sendout.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>{entity}</td>
<td>To-one association</td>
<td>Entity associated with the file.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>name</td>
<td>String</td>
<td>Name of the file.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>type</td>
<td>String</td>
<td>Type of the file; for example, Resume.</td>
<td></td>
<td>X</td>
</tr>
<tr class="even">
<td>usersSharedWith</td>
<td>To-many association</td>
<td>Users with whom the file is shared.</td>
<td></td>
<td>X</td>
</tr>
<tr class="odd">
<td>uuid</td>
<td>String</td>
<td>Globally unique random ID.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>