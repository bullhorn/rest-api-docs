# Tearsheet

Represents a tearsheet. 

The Tearsheet entity supports the [massUpdate](#get-massupdate) operations.

<table>
<thead>
<tr class="header">
<th><p><strong>Tearsheet</strong></p>
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
<td>candidates</td>
<td>To-many<br />
association</td>
<td>Candidates with which this Tearsheet is associated. This field includes the following Candidate fields:<br />
id<br />
firstName<br />
lastName</td>
<td></td>
<td> </td>
</tr>
<tr class="odd">
<td>clientContacts</td>
<td>To-many association</td>
<td>ClientContacts with which this Tearsheet is associated. This field includes the following ClientContact fields:<br />
id<br />
firstName<br />
lastName</td>
<td></td>
<td> </td>
</tr>
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date on which the Tearsheet was created in the Bullhorn system.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date on which the Tearsheet was last modified.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>description</td>
<td>String</td>
<td>Free-text description.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether this record is marked as deleted in the Bullhorn system.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>isPrivate</td>
<td>Boolean</td>
<td>Indicates whether this is a private Tearsheet. A private Tearsheet is not visible to users other than the user who created the tearsheet.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>jobOrders</td>
<td>To-many association</td>
<td>JobOrders with which this Tearsheet is associated. This field includes the following JobOrder fields:<br />
id<br />
title</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>name</td>
<td>String</td>
<td>Name of this Tearsheet.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>owner</td>
<td>To-one association</td>
<td><p>CorporateUser who is the primary owner of this Tearsheet.</p>
<p>The default value is user who created the tearsheet.</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>recipients</td>
<td>To-many association</td>
<td>Ids of TearsheetRecipients with which this Tearsheet is associated.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>