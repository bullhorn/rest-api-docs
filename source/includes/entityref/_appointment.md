# Appointment

Represents an appointment on a Bullhorn user's calendar. A separate Appointment instance is created for each user who is invited to the appointment; the instance belonging to the Appointment owner (the person who created it) is the parent, and has a null value for the parentAppointment property. The Appointment instances belonging to the invitees are the child instances; these refer to the parent in their parentAppointment properties, and are associated with the parent through its childAppointments association. Each user who is invited to the appointment is represented by an AppointmentAttendee instance.

<table>
<thead>
<tr class="header">
<th><strong>Appointment field</strong></th>
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
<td>Unique identifier for this entity. </td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>attendees</td>
<td>To-many association</td>
<td>Ids of the AppointmentAttendees for this Appointment.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>appointmentUUID</td>
<td>String</td>
<td>A secondary unique identifier for this entity. Used to identify the record when it is synchronized to external systems. Format is 8-4-4-16 where all characters are A-Z or 0-9.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>candidateReference</td>
<td>To-one association</td>
<td><p>The Candidate with whom this Appointment is associated, if any. Included Candidate fields are:</p>
<p>id</p>
<p>firstName</p>
<p>lastName</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>clientContactReference</td>
<td>To-one association</td>
<td><p>The ClientContact with whom this Appointment is associated, if any. Included ClientContact fields are:</p>
<p>id</p>
<p>firstName</p>
<p>lastName</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>childAppointments</td>
<td>To-many association</td>
<td>Child Appointments associated with this Appointment. The ownerID of any child Appointment represents a user who has been invited to this Appointment.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>communicationMethod</td>
<td>String (30)</td>
<td>Indicates how the appointment will be conducted: phone, on-site, off-site, and so forth.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>The date on which this record was created in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>dateBegin</td>
<td>Timestamp</td>
<td><p>The date on which the appointment began/will begin.</p>
<p>The default value is current time rounded up to next half hour, or 15 minutes before dateEnd if it is provided.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>dateEnd</td>
<td>Timestamp</td>
<td><p>The date on which the appointment ended/will end.</p>
<p>The default value is 15 minutes after dateBegin.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>The date on which this record was last modified.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>description</td>
<td>String</td>
<td><p>Free-text description of the appointment.</p>
<p>The default value is “”.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>isAllDay</td>
<td>Boolean</td>
<td>Indicates whether the appointment will last all day.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether this record has been marked as deleted in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>isPrivate</td>
<td>Boolean</td>
<td>Indicates whether the appointment is viewable by others. If set to private, only the appointment owner and attendees may view the appointment details.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>jobOrder</td>
<td>To-one association</td>
<td><p>JobOrder associated with the appointment, if any. Included JobOrder fields are:</p>
<p>id</p>
<p>title</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>lead</td>
<td>To-one association</td>
<td>Lead, if any, associated with the appointment. Included Lead field is id.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>location</td>
<td>String (100)</td>
<td><p>Indicates where the appointment will take place (conference room name, and so forth).</p>
<p>The default value is “”.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>notificationMinutes</td>
<td>Integer</td>
<td>Indicates when the Bullhorn application should remind the user of the appointment. May be zero for no reminder.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>opportunity</td>
<td>To-one association</td>
<td>Opportunity, if any, associated with the appointment. Included Opportunity field is id.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>owner</td>
<td>To-one association</td>
<td><p>Bullhorn user (Person) who owns the appointment. The default value is user who creates the Appointment.</p>
<p>Included fields are:</p>
<p>id</p>
<p>_subtype (the type of Person object)</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>parentAppointment</td>
<td>To-one association</td>
<td>Appointment that is the parent of this one, if any. Included Appointment field is id.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>placement</td>
<td>To-one association</td>
<td>Placement associated with the appointment, if any. Included Placement field is id.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>recurrenceDayBits</td>
<td>Integer</td>
<td>Indicates which days are part of the recurrence pattern, if the appointment is a recurring one. The value of this field is the sum of the days included in the series: Sun = 2, Mon = 4, Tue = 8, Wed = 16, Thur = 32, Fri = 64, Sat = 128. For example, a meeting that occurs on Monday and Friday would have a recurrenceDayBits value of 68 (4+64).</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>recurrenceFrequency</td>
<td>Integer</td>
<td>The frequency with which the appointment recurs: e.g., a recurrenceFrequency of 2 for a weekly meeting would imply the meeting occurs every 2 weeks. Null for a one-time appointment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>recurrenceStyle</td>
<td>String (10)</td>
<td>A=absolute, R=relative: e.g., an absolute would be the third week of every month, whereas a relative would be every third week.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>recurrenceType</td>
<td>String (1)</td>
<td>The type of recurrence. D=daily, W=weekly, M=monthly, A=annually.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>subject</td>
<td>String (100)</td>
<td>Subject header of the appointment.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>type</td>
<td>String (30)</td>
<td>Used to distinguish appointments by an identifiable class or kind, for example Interview, Call, Personal, and so forth.</td>
<td>X</td>
<td> </td>
</tr>
</tbody>
</table>