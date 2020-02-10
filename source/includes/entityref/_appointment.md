# Appointment

Represents an appointment on a Bullhorn user's calendar. A separate Appointment instance is created for each user who is invited to the appointment; the instance belonging to the Appointment owner (the person who created it) is the parent, and has a null value for the parentAppointment property. The Appointment instances belonging to the invitees are the child instances; these refer to the parent in their parentAppointment properties, and are associated with the parent through its childAppointments association. Each user who is invited to the appointment is represented by an AppointmentAttendee instance.

| **Appointment field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity.  | X | |
| attendees | To-many association | Ids of the AppointmentAttendees for this Appointment. | | |
| appointmentUUID | String (300) | A secondary unique identifier for this entity. Used to identify the record when it is synchronized to external systems. Format is 8-4-4-16 where all characters are A-Z or 0-9. | X | |
| candidateReference | To-one association | The Candidate with whom this Appointment is associated, if any. | | |
| clientContactReference | To-one association | The ClientContact with whom this Appointment is associated, if any. | | |
| childAppointments | To-many association | Child Appointments associated with this Appointment. The ownerID of any child Appointment represents a user who has been invited to this Appointment. | | |
| communicationMethod | String (30) | Indicates how the appointment will be conducted: phone, on-site, off-site, and so forth. | X | |
| dateAdded | Timestamp | The date on which this record was created in the Bullhorn system. | X | |
| dateBegin | Timestamp | The date on which the appointment began/will begin.<br>The default value is current time rounded up to next half hour, or 15 minutes before dateEnd if it is provided. | X | |
| dateEnd | Timestamp | The date on which the appointment ended/will end.<br>The default value is 15 minutes after dateBegin. | X | |
| dateLastModified | Timestamp | The date on which this record was last modified. | X | X |
| description | String (2147483647) | Free-text description of the appointment.<br>The default value is “”. | X | |
| isAllDay | Boolean | Indicates whether the appointment will last all day. | | |
| isDeleted | Boolean | Indicates whether this record has been marked as deleted in the Bullhorn system. | X | |
| isPrivate | Boolean | Indicates whether the appointment is viewable by others. If set to private, only the appointment owner and attendees may view the appointment details. | X | |
| jobOrder | To-one association | JobOrder associated with the appointment, if any.| | |
| lead | To-one association | Lead, if any, associated with the appointment. Included Lead field is id. | | |
| location | String (100) | Indicates where the appointment will take place (conference room name, and so forth).<br>The default value is “”. | X | |
| migrateGUID | String (36) | Unused. |  X | |
| notificationMinutes | Integer | Indicates when the Bullhorn application should remind the user of the appointment. May be zero for no reminder. | X | |
| opportunity | To-one association | Opportunity, if any, associated with the appointment. Included Opportunity field is id. | | |
| owner | To-one association | Bullhorn user (Person) who owns the appointment. The default value is user who creates the Appointment. | | X | 
| parentAppointment | To-one association | Appointment that is the parent of this one, if any. Included Appointment field is id. | | |
| placement | To-one association | Placement associated with the appointment, if any. Included Placement field is id. | | |
| recurrenceDayBits | Integer | Indicates which days are part of the recurrence pattern, if the appointment is a recurring one. The value of this field is the sum of the days included in the series: Sun = 2, Mon = 4, Tue = 8, Wed = 16, Thur = 32, Fri = 64, Sat = 128\. For example, a meeting that occurs on Monday and Friday would have a recurrenceDayBits value of 68 (4+64). | | |
| recurrenceFrequency | Integer | The frequency with which the appointment recurs: e.g., a recurrenceFrequency of 2 for a weekly meeting would imply the meeting occurs every 2 weeks. Null for a one-time appointment. | | |
| recurrenceStyle | String (10) | A=absolute, R=relative: e.g., an absolute would be the third week of every month, whereas a relative would be every third week. | | |
| recurrenceType | String (1) | The type of recurrence. D=daily, W=weekly, M=monthly, A=annually. | | |
| subject | String (100) | Subject header of the appointment. | X | |
| type | String (30) | Used to distinguish appointments by an identifiable class or kind, for example Interview, Call, Personal, and so forth. | X | |