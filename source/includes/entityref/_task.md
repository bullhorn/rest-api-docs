# Task

Represents a task that a user has created in the Bullhorn system using the Tasks feature.

The Task entity supports the [massUpdate](#get-massupdate) operations.

<table>
<thead>
<tr class="header">
<th><strong>Task field</strong></th>
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
<td>X</td>
</tr>
<tr class="even">
<td>assignees</td>
<td>To-many association</td>
<td>Associates CorporateUsers with a Task. Can only be accessed from the user interface when the multipleAssigneesAndContactsOnTasks corporation setting is enabled, in which case childTasks are neither shown nor created.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>candidate</td>
<td>To-one association</td>
<td>Candidate associated with this task, if any.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>childTaskOwners</td>
<td>To-many association</td>
<td>Users assigned to childTasks.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>childTasks</td>
<td>To-many association</td>
<td>Assignments.<br />
<br />
You populate this field by creating Tasks where Task.parentTask is this Task.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>clientContact</td>
<td>To-one association</td>
<td>ClientContact associated with this task, if any.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>clientContactReferences</td>
<td>To-many association</td>
<td>Associates Tasks to multiple ClientContacts. Can only be accessed from the user interface when the multipleAssigneesAndContactsOnTasks corporation setting is enabled, in which case this field is populated instead of the clientContact field.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>The date on which this record was created.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>dateBegin</td>
<td>Timestamp</td>
<td><p>The date when the task is due to begin.</p>
<p>The default value is current time rounded up to next 15 minutes, or dateEnd if it is provided.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>dateCompleted</td>
<td>Timestamp</td>
<td><p>The date when the task was completed, if applicable.</p>
<p>The default value is current time rounded up to next 15 minutes, or dateBegin if it is provided.</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateEnd</td>
<td>Timestamp</td>
<td>The date when the task was scheduled to end. Used for recurring tasks.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date when the Task was last modified.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>description</td>
<td>String</td>
<td><p>Free-text description of the task.</p>
<p>The default value is “”.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>isCompleted</td>
<td>Boolean</td>
<td>Indicates whether the task has been completed.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether this record has been marked as deleted.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>isPrivate</td>
<td>Boolean</td>
<td>Indicates whether this is a private task. A private task is not visible to users other than the user who created the task.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>jobOrder</td>
<td>To-one association</td>
<td><p>JobOrder associated with this task, if any. Included JobOrder fields are:</p>
<p>id</p>
<p>title</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>lead</td>
<td>To-one association</td>
<td>Lead, if any, associated with this task.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>notificationMinutes</td>
<td>Integer</td>
<td>Indicates how many minutes in advance the user has chosen to be reminded of this task.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>opportunity</td>
<td>To-one association</td>
<td>Opportunity, if any, associated with this task.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>owner</td>
<td>To-one association</td>
<td><p>User who created the task.</p>
<p>The default value is user who creates the Task.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>parentTask</td>
<td>To-one association</td>
<td>Task that is parent of this one, if any. Used when the task is assigned to someone other than the owner. The childTask is a copy of the parentTask managed by the assignee.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>placement</td>
<td>To-one association</td>
<td>Placement associated with this Task.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>priority</td>
<td>Integer</td>
<td>Priority level of a task.Value is 1, 2, or 3, where 1 is Low, 2 is Normal, and 3 is High.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>recurrenceDayBits</td>
<td>Integer</td>
<td>Indicates which days are part of the recurrence pattern, if the task is a recurring one. The value of this field is the sum of the days included in the series: Sun = 2, Mon = 4, Tue = 8, Wed = 16, Thur = 32, Fri = 64, Sat = 128. For example, a meeting that occurs on Monday and Friday would have a recurrenceDayBits value of 68 (4+64).</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>recurrenceFrequency</td>
<td>Integer</td>
<td>Frequency with which the task recurs: for example, a recurrenceFrequency of 2 for a weekly meeting would imply the meeting occurs every 2 weeks. Null for a one-time task.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>recurrenceStyle</td>
<td>String (10)</td>
<td>A=absolute, R=relative: e.g., an absolute would be the third week of every month, whereas a relative would be every third week.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>recurrenceType</td>
<td>String (1)</td>
<td>Type of recurrence. D=daily, W=weekly, M=monthly, A=annually.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>subject</td>
<td>String (100)</td>
<td>Subject header for the task.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>taskUUID</td>
<td>String (35)</td>
<td>Secondary unique identifier for this entity. Used to identify the record when it is synchronized to external systems. Format is 8-4-4-16 where all characters are A-Z or 0-9.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>timeZoneID</td>
<td>String (50)</td>
<td>Id of time zone.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>type</td>
<td>String (30)</td>
<td>Type of task. For example, Follow-Up, Email, Personal, and so forth.</td>
<td>X</td>
<td> </td>
</tr>
</tbody>
</table>