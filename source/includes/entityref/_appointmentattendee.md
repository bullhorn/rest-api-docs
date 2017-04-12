# AppointmentAttendee

Represents a person who has been invited to an appointment.

| **AppointmentAttendee field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| appointment | To-one association | Appointment to which this AppointmentAttendee corresponds. | X | |
| attendee | To-one association | The ClientContact, Candidate, or CorporateUser id for this person. Included fields are: id, _subtype | X | |
| acceptanceStatus | Integer | Indicates whether attendee has accepted, accepted tentatively, declined, or not responded to this invitation. (-1 = declined, 0 or null = has not responded, 1 = accepted, and 2 = tentative.) | X | |