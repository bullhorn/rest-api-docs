# AppointmentAttendee

Represents a person who has been invited to an appointment.

<table>
<thead>
<tr class="header">
<th><strong>AppointmentAttendee field</strong></th>
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
<td>appointment</td>
<td>To-one association</td>
<td>Appointment to which this AppointmentAttendee corresponds.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>attendee</td>
<td>To-one association</td>
<td><p>The ClientContact, Candidate, or CorporateUser id for this person. Included fields are:</p>
<p>id</p>
<p>_subtype</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>acceptanceStatus</td>
<td>Integer</td>
<td>Indicates whether attendee has accepted, accepted tentatively, declined, or not responded to this invitation. (-1 = declined, 0 or null = has not responded, 1 = accepted, and 2 = tentative.)</td>
<td>X</td>
<td> </td>
</tr>
</tbody>
</table>