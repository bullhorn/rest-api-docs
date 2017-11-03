# Task

Represents a task that a user has created in the Bullhorn system using the Tasks feature.

The Task entity supports the massUpdate operations.

| **Task field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| assignees | To-many association | Associates CorporateUsers with a Task. Can only be accessed from the user interface when the multipleAssigneesAndContactsOnTasks corporation setting is enabled, in which case childTasks are neither shown nor created. | | |
| candidate | To-one association | Candidate associated with this task, if any. | | |
| childTaskOwners | To-many association | Users assigned to childTasks. | | |
| childTasks | To-many association | Assignments. You populate this field by creating Tasks where Task.parentTask is this Task. | | |
| clientContact | To-one association | ClientContact associated with this task, if any. | | |
| clientContactReferences | To-many association | Associates Tasks to multiple ClientContacts. Can only be accessed from the user interface when the multipleAssigneesAndContactsOnTasks corporation setting is enabled, in which case this field is populated instead of the clientContact field. | | |
| dateAdded | Timestamp | The date on which this record was created. | X | | 
| dateBegin | Timestamp | The date when the task is due to begin. The default value is current time rounded up to next 15 minutes, or dateEnd if it is provided. | X | |
| dateCompleted | Timestamp | The date when the task was completed, if applicable. The default value is current time rounded up to next 15 minutes, or dateBegin if it is provided. | | |
| dateEnd | Timestamp | The date when the task was scheduled to end. Used for recurring tasks. | X | |
| dateLastModified | Timestamp | Date when the Task was last modified. | | |
| description | String (2147483647) | Free-text description of the task. The default value is “”. | X | |
| isCompleted | Boolean | Indicates whether the task has been completed. | X | |
| isDeleted | Boolean | Indicates whether this record has been marked as deleted. | X | |
| isPrivate | Boolean | Indicates whether this is a private task. A private task is not visible to users other than the user who created the task. | X | |
| jobOrder | To-one association | JobOrder associated with this task, if any. | | |
| lead | To-one association | Lead, if any, associated with this task. | | |
| notificationMinutes | Integer | Indicates how many minutes in advance the user has chosen to be reminded of this task. | X | |
| opportunity | To-one association | Opportunity, if any, associated with this task. | | |
| owner | To-one association | User who created the task. The default value is user who creates the Task. | X | |
| parentTask | To-one association | Task that is parent of this one, if any. Used when the task is assigned to someone other than the owner. The childTask is a copy of the parentTask managed by the assignee. | | |
| placement | To-one association | Placement associated with this Task. | | |
| priority | Integer | Priority level of a task.Value is 1, 2, or 3, where 1 is Low, 2 is Normal, and 3 is High. | | |
| recurrenceDayBits | Integer | Indicates which days are part of the recurrence pattern, if the task is a recurring one. The value of this field is the sum of the days included in the series: Sun = 2, Mon = 4, Tue = 8, Wed = 16, Thur = 32, Fri = 64, Sat = 128\. For example, a meeting that occurs on Monday and Friday would have a recurrenceDayBits value of 68 (4+64). | | |
| recurrenceFrequency | Integer | Frequency with which the task recurs: for example, a recurrenceFrequency of 2 for a weekly meeting would imply the meeting occurs every 2 weeks. Null for a one-time task. | | |
| recurrenceStyle | String (10) | A=absolute, R=relative: e.g., an absolute would be the third week of every month, whereas a relative would be every third week. | | |
| recurrenceType | String (1) | Type of recurrence. D=daily, W=weekly, M=monthly, A=annually. | | |
| subject | String (100) | Subject header for the task. | X | |
| taskUUID | String (35) | Secondary unique identifier for this entity. Used to identify the record when it is synchronized to external systems. Format is 8-4-4-16 where all characters are A-Z or 0-9. | | |
| timeZoneID | String (50) | Id of time zone. | | |
| type | String (30) | Type of task. For example, Follow-Up, Email, Personal, and so forth. | X | |