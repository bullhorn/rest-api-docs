
Entity reference
----------------

This section provides information about each of the entity types that
the REST API supports.

The following table lists the supported entity types and the allowed
create, read, update, and delete (CRUD) operations.

You can also use the /meta/{EntityType}?fields=\* call to get the full
set of entity meta data for any given entity.

**Note:** A soft delete is a POST operation in which you change the
isDeleted value to true. A hard delete is a DELETE operation.

Valid table as template:

Params | Required | Description
------ | -------- | -----
access_token | yes | Access token obtained from OAuth authorization |
version      | yes | Version of the API to use (\* is a wildcard for latest version). |
ttl          | no  | Session time-to-live in minutes. |
clientId     | no  |  Pass in an OAuth key here to spoof the features associated. |

Attempt at a table from converted source:

Entity name      | Allowed CRUD operations | Delete type
------ | -------- | -----
ActivityGoal | READ | N/A             |       
ActivityGoalConfiguration | READ, CREATE, UPDATE, DELETE | Soft|
ActivityGoalTarget    | READ, CREATE, UPDATE, DELETE | Hard |
Appointment | READ, CREATE, UPDATE, DELETE | Soft |
AppointmentAttendee | READ, CREATE, UPDATE,  DELETE | Hard |
BusinessSector | READ | N/A |
Candidate | READ, CREATE, UPDATE, DELETE | Soft |



CandidateCertificatio | READ, CREATE, UPDATE, DELETE | Soft|
CandidateEducation    | READ, CREATE, UPDATE,  DELETE | Soft|
CandidateReference    | READ, CREATE, UPDATE DELETE, | Soft|
CandidateSource       | READ, CREATE, UPDATE, DELETE | Hard|
CandidateWorkHistory  | READ, CREATE, UPDATE, DELETE | Soft|


--------------



ClientContact         | READ, CREATE, UPDATE, DELETE | Soft           |
ClientCorporation     | READ, CREATE, UPDATE  | N/A                   |
CorporationDepartment | READ                  | N/A                   |
CorporateUser         | READ                  | N/A                   |
Country               | READ                  | N/A                   |
CustomAction          | READ                  | N/A                   |
Department            | READ, CREATE, UPDATE  | N/A                   |
JobOrder              | READ, CREATE, UPDATE, DELETE | Soft           |
JobSubmission         | READ, CREATE, UPDATE, DELETE | Soft           |
Lead\(CRM only)                 | READ, CREATE, UPDATE, DELETE | Soft |
LeadHistory\(CRM only)          | READ                  | N/A         |
Note                  | READ, CREATE, UPDATE, DELETE | Soft           |
NoteEntity            | READ, CREATE, UPDATE, DELETE | Hard           |
Opportunity\(CRM only)          | READ, CREATE, UPDATE, DELETE | Soft |
OpportunityHistory\ (CRM only)  | READ                  | N/A         |
Placement             | READ, CREATE, UPDATE, DELETE | Hard           |
PlacementChangeRequest | READ                  | N/A                   |
PlacementCommission   | READ, CREATE, UPDATE, DELETE | Hard           |
Sendout               | READ, CREATE, UPDATE, DELETE | Hard           |
Skill                 | READ                  | N/A                   |
Specialty             | READ                  | N/A                   |
State                 | READ                  | N/A                   |
Task                  | READ, CREATE, UPDATE, DELETE | Soft           |
Tearsheet             | READ, CREATE, UPDATE, | Soft                  |
TearsheetRecipient    | READ, CREATE, UPDATE, DELETE | Hard           |
TimeUnit              | READ                  | N/A                   |

### ActivityGoal

Read-only view of activity goals established for sales personnel in the
organization.

ActivityGoal field |   Type |              Description |     Not null |   Read-only
id |                       Integer |              Unique identifier for this entity.|                                                                                X |              X |

user |                    To-many association |  User for whom this activity goal was created. |                                                                     X |              X |


                                                                                                                                                                                  
                                                 Entity - CorporateUser; id - Integer; firstName - String; lastName - String;                                                     

  department               To-one association    Department of user for whom this activity goal was created.                                                       X              X
                                                                                                                                                                                  
                                                 Entity: CorporationDepartment; id - Integer;                                                                                     

  activityType             String                Type of goal for record.                                                                                          X              X

  startDate                String                The first day of the time period in which this activity goal is in effect, in the format: "YYYY-MM-DD".                          X

  endDate                  String                The last day of time period in which this activity goal is in effect, in the format: "YYYY-MM-DD".                               X

  goal                     Integer               Target goal for activity type.                                                                                    X              

  actual                   Integer               Current count of activity type data for goal.                                                                                    X

  periodName               String                Time period for activity goal. (Weekly/Monthly).                                                                  X              X

  percentAttained          Integer               The whole percentage attained to date, equal to the attained value divided by the goal value multiplied by 100.                  X
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### ActivityGoalConfiguration

Lets a user configure an activity goal for use in conjunction with the
activity goals feature.

  **ActivityGoalConfiguration field**   **Type**              **Description**                                                          **Not null**   **Read-only**
  ------------------------------------- --------------------- ------------------------------------------------------------------------ -------------- ---------------
  id                                    Integer               Unique Identifier for this entity.                                       X              X
  codeIdentifier                        String                Field that determines if a goal is an ActivityGoal or RecordBasedGoal.   X              
  dateLastModified                      Timestamp             The last time record was modified.                                       X              X
  Description                           String                Goal description.                                                        X              
  goalPeriodId                          Integer               Id of goal time period.                                                  X              
  goalTypeId                            Integer               Id of goal type.                                                         X              X
  isDeleted                             Boolean               Whether or not activity goal is deleted.                                 X              
  name                                  String                Name of goal.                                                            X              
  pulseConfigurationValues              To-many association   Values against which goal is tracked.                                                   

### ActivityGoalTarget

Lets a user assign an activity goal to a user.

  **ActivityGoalTarget field**   **Type**              **Description**                                      **Not null**   **Read-only**
  ------------------------------ --------------------- ---------------------------------------------------- -------------- ---------------
  id                             Integer               Unique Identifier for this entity.                   X              X
  activityGoalConfiguration      To-one association    The activity goal configuration assigned to user.    X              
  goal                           Integer               The amount of activity that user is trying to hit.   X              
  periodName                     String                Time period for activity goal. (Weekly/Monthly).     X              
  user                           To\_one association   User to which activity goal is assigned.             X              

### Appointment

Represents an appointment on a Bullhorn user's calendar. A separate
Appointment instance is created for each user who is invited to the
appointment; the instance belonging to the Appointment owner (the person
who created it) is the parent, and has a null value for the
parentAppointment property. The Appointment instances belonging to the
invitees are the child instances; these refer to the parent in their
parentAppointment properties, and are associated with the parent through
its childAppointments association. Each user who is invited to the
appointment is represented by an AppointmentAttendee instance.

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Appointment field**    **Type**              **Description**                                                                                                                                                                                                                                                                                                                                          **Not null**   **Read-only**
  ------------------------ --------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------- ---------------
  id                       Integer               Unique identifier for this entity.                                                                                                                                                                                                                                                                                                                       X               

  attendees                To-many association   Ids of the AppointmentAttendees for this Appointment.                                                                                                                                                                                                                                                                                                                   

  appointmentUUID          String                A secondary unique identifier for this entity. Used to identify the record when it is synchronized to external systems. Format is 8-4-4-16 where all characters are A-Z or 0-9.                                                                                                                                                                          X               

  candidateReference       To-one association    The Candidate with whom this Appointment is associated, if any. Included Candidate fields are:                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 id                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 firstName                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 lastName                                                                                                                                                                                                                                                                                                                                                                

  clientContactReference   To-one association    The ClientContact with whom this Appointment is associated, if any. Included ClientContact fields are:                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 id                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 firstName                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 lastName                                                                                                                                                                                                                                                                                                                                                                

  childAppointments        To-many association   Child Appointments associated with this Appointment. The ownerID of any child Appointment represents a user who has been invited to this Appointment.                                                                                                                                                                                                                   

  communicationMethod      String (30)           Indicates how the appointment will be conducted: phone, on-site, off-site, and so forth.                                                                                                                                                                                                                                                                 X               

  dateAdded                Timestamp             The date on which this record was created in the Bullhorn system.                                                                                                                                                                                                                                                                                        X               

  dateBegin                Timestamp             The date on which the appointment began/will begin.                                                                                                                                                                                                                                                                                                      X               
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 The default value is current time rounded up to next half hour, or 15 minutes before dateEnd if it is provided.                                                                                                                                                                                                                                                         

  dateEnd                  Timestamp             The date on which the appointment ended/will end.                                                                                                                                                                                                                                                                                                        X               
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 The default value is 15 minutes after dateBegin.                                                                                                                                                                                                                                                                                                                        

  dateLastModified         Timestamp             The date on which this record was last modified.                                                                                                                                                                                                                                                                                                                         

  description              String                Free-text description of the appointment.                                                                                                                                                                                                                                                                                                                X               
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 The default value is “”.                                                                                                                                                                                                                                                                                                                                                

  isAllDay                 Boolean               Indicates whether the appointment will last all day.                                                                                                                                                                                                                                                                                                                     

  isDeleted                Boolean               Indicates whether this record has been marked as deleted in the Bullhorn system.                                                                                                                                                                                                                                                                         X               

  isPrivate                Boolean               Indicates whether the appointment is viewable by others. If set to private, only the appointment owner and attendees may view the appointment details.                                                                                                                                                                                                   X               

  jobOrder                 To-one association    JobOrder associated with the appointment, if any. Included JobOrder fields are:                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 id                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 title                                                                                                                                                                                                                                                                                                                                                                   

  lead                     To-one association    Lead, if any, associated with the appointment. Included Lead field is id.                                                                                                                                                                                                                                                                                               

  location                 String (100)          Indicates where the appointment will take place (conference room name, and so forth).                                                                                                                                                                                                                                                                    X               
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 The default value is “”.                                                                                                                                                                                                                                                                                                                                                

  notificationMinutes      Integer               Indicates when the Bullhorn application should remind the user of the appointment. May be zero for no reminder.                                                                                                                                                                                                                                          X               

  opportunity              To-one association    Opportunity, if any, associated with the appointment. Included Opportunity field is id.                                                                                                                                                                                                                                                                                 

  owner                    To-one association    Bullhorn user (Person) who owns the appointment. The default value is user who creates the Appointment.                                                                                                                                                                                                                                                  X               
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 Included fields are:                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 id                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                 \_subtype (the type of Person object)                                                                                                                                                                                                                                                                                                                                   

  parentAppointment        To-one association    Appointment that is the parent of this one, if any. Included Appointment field is id.                                                                                                                                                                                                                                                                                    

  placement                To-one association    Placement associated with the appointment, if any. Included Placement field is id.                                                                                                                                                                                                                                                                                       

  recurrenceDayBits        Integer               Indicates which days are part of the recurrence pattern, if the appointment is a recurring one. The value of this field is the sum of the days included in the series: Sun = 2, Mon = 4, Tue = 8, Wed = 16, Thur = 32, Fri = 64, Sat = 128. For example, a meeting that occurs on Monday and Friday would have a recurrenceDayBits value of 68 (4+64).                   

  recurrenceFrequency      Integer               The frequency with which the appointment recurs: e.g., a recurrenceFrequency of 2 for a weekly meeting would imply the meeting occurs every 2 weeks. Null for a one-time appointment.                                                                                                                                                                                    

  recurrenceStyle          String (10)           A=absolute, R=relative: e.g., an absolute would be the third week of every month, whereas a relative would be every third week.                                                                                                                                                                                                                                          

  recurrenceType           String (1)            The type of recurrence. D=daily, W=weekly, M=monthly, A=annually.                                                                                                                                                                                                                                                                                                        

  subject                  String (100)          Subject header of the appointment.                                                                                                                                                                                                                                                                                                                       X               

  type                     String (30)           Used to distinguish appointments by an identifiable class or kind, for example Interview, Call, Personal, and so forth.                                                                                                                                                                                                                                  X               
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### AppointmentAttendee

Represents a person who has been invited to an appointment.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **AppointmentAttendee field**   **Type**             **Description**                                                                                                                                                                                  **Not null**   **Read-only**
  ------------------------------- -------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -------------- ---------------
  id                              Integer              Unique identifier for this entity.                                                                                                                                                               X              X

  appointment                     To-one association   Appointment to which this AppointmentAttendee corresponds.                                                                                                                                       X               

  attendee                        To-one association   The ClientContact, Candidate, or CorporateUser id for this person. Included fields are:                                                                                                          X               
                                                                                                                                                                                                                                                                       
                                                       id                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                       
                                                       \_subtype                                                                                                                                                                                                       

  acceptanceStatus                Integer              Indicates whether attendee has accepted, accepted tentatively, declined, or not responded to this invitation. (-1 = declined, 0 or null = has not responded, 1 = accepted, and 2 = tentative.)   X               
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### BusinessSector

Represents a business sector, which can be associated with Candidates,
ClientCorporations, and JobOrders for classification purposes.

  -------------------------------------------------------------------------------------------------------
  **BusinessSector**   **Type**       **Description**                      **Not null**   **Read-only**
                                                                                          
  **field**                                                                               
  -------------------- -------------- ------------------------------------ -------------- ---------------
  id                   Integer        Unique identifier for this entity.   X              X

  dateAdded            Timestamp      When the entity was created.                        

  name                 String (100)   Name of this business sector.        X              X
  -------------------------------------------------------------------------------------------------------

### Candidate

Represents a person seeking a job.

The Candidate entity supports the [massUpdate](#get-massupdate)
operations.

+-------------+-------------+-------------+-------------+-------------+
| **Candidate | **Type**    | **Descripti | **Not       | **Read-only |
| **          |             | on**        | null**      | **          |
|             |             |             |             |             |
| **field**   |             |             |             |             |
+=============+=============+=============+=============+=============+
| id          | Integer     | Unique      | X           | X           |
|             |             | identifier  |             |             |
|             |             | for this    |             |             |
|             |             | entity.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| address     | Address     | Candidate   |             |             |
|             |             | address:    |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 1           |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 2           |             |             |
|             |             |             |             |             |
|             |             | -   city    |             |             |
|             |             |             |             |             |
|             |             | -   state   |             |             |
|             |             |             |             |             |
|             |             | -   zip     |             |             |
|             |             |             |             |             |
|             |             | -   country |             |             |
|             |             | ID:         |             |             |
|             |             |             |             |             |
|             |             | > options:\ |             |             |
|             |             | > value: 1\ |             |             |
|             |             | > value: 2  |             |             |
|             |             |             |             |             |
|             |             | Use the     |             |             |
|             |             | following   |             |             |
|             |             | REST call   |             |             |
|             |             | to get the  |             |             |
|             |             | list of     |             |             |
|             |             | countryIDs  |             |             |
|             |             | and labels: |             |             |
|             |             |             |             |             |
|             |             | /meta/Candi |             |             |
|             |             | date?\      |             |             |
|             |             | fields=addr |             |             |
|             |             | ess(country |             |             |
|             |             | ID)         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| businessSec | To-many     | Ids of      |             |             |
| tors        | association | BusinessSec |             |             |
|             |             | tors        |             |             |
|             |             | with which  |             |             |
|             |             | Candidate   |             |             |
|             |             | is          |             |             |
|             |             | associated. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| candidateSo | To-one      | Source of   |             |   X         |
| urce        | association | the         |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| category    | To-one      | Candidate's | X           |             |
|             | association | primary     |             |             |
|             |             | Category.   |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is    |             |             |
|             |             | the Other   |             |             |
|             |             | Area(s)     |             |             |
|             |             | category    |             |             |
|             |             | for the     |             |             |
|             |             | user’s      |             |             |
|             |             | private     |             |             |
|             |             | label or    |             |             |
|             |             | the first   |             |             |
|             |             | Category.   |             |             |
|             |             |             |             |             |
|             |             |             |             |             |
|             |             |             |             |             |
|             |             | **Note:**   |             |             |
|             |             | This        |             |             |
|             |             | property    |             |             |
|             |             | refers to   |             |             |
|             |             | the         |             |             |
|             |             | original    |             |             |
|             |             | category    |             |             |
|             |             | assigned to |             |             |
|             |             | the         |             |             |
|             |             | Candidate.  |             |             |
|             |             | To retrieve |             |             |
|             |             | or update   |             |             |
|             |             | categories  |             |             |
|             |             | for the     |             |             |
|             |             | Candidate,  |             |             |
|             |             | you should  |             |             |
|             |             | use the     |             |             |
|             |             | categories  |             |             |
|             |             | association |             |             |
|             |             | s           |             |             |
|             |             | (see        |             |             |
|             |             | below).     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| categories  | To-many     | Categories  |             |             |
|             | association | assigned to |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| certificati | String      | Candidate's |             |             |
| ons         |             | certificati |             |             |
|             |             | ons.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| comments    | String      | Free-text   | X           |             |
|             |             | comments on |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| companyName | String      | Name of     |             |             |
|             | (100)       | company     |             |             |
|             |             | where the   |             |             |
|             |             | Candidate   |             |             |
|             |             | currently   |             |             |
|             |             | works.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| companyURL  | String      | Candidate's |             |             |
|             | (100)       | personal    |             |             |
|             |             | URL.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customDate1 | Timestamp   | Configurabl |             |             |
| to 3        |             | e           |             |             |
|             |             | date fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customFloat | Double      | Configurabl |             |             |
| 1           |             | e           |             |             |
| to 3        |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customInt1  | Integer     | Configurabl |             |             |
| to 3        |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customObjec | CustomObjec | Fields to   |             |             |
| t1s         | t           | which       |             |             |
| to 10s      |             | custom      |             |             |
|             |             | objects can |             |             |
|             |             | be          |             |             |
|             |             | assigned.   |             |             |
|             |             | For more    |             |             |
|             |             | information |             |             |
|             |             | about       |             |             |
|             |             | custom      |             |             |
|             |             | objects,    |             |             |
|             |             | see the     |             |             |
|             |             | Bullhorn    |             |             |
|             |             | Resource    |             |             |
|             |             | Center and  |             |             |
|             |             | the         |             |             |
|             |             | following   |             |             |
|             |             | article on  |             |             |
|             |             | using the   |             |             |
|             |             | REST API    |             |             |
|             |             | with custom |             |             |
|             |             | objects:\   |             |             |
|             |             | <http://dev |             |             |
|             |             | eloper.bull |             |             |
|             |             | horn.com/ar |             |             |
|             |             | ticles/cust |             |             |
|             |             | omobjects>  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customText1 | String      | Configurabl |             |             |
| to 20       | (100)       | e           |             |             |
|             |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customTextB | String      | Configurabl |             |             |
| lock1       |             | e           |             |             |
| to 5        |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateAdded   | Timestamp   | Date on     | X           | X           |
|             |             | which this  |             |             |
|             |             | record was  |             |             |
|             |             | created in  |             |             |
|             |             | the         |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateAvailab | Timestamp   | Date on     |             |             |
| le          |             | which       |             |             |
|             |             | Candidate   |             |             |
|             |             | will be     |             |             |
|             |             | available   |             |             |
|             |             | to begin    |             |             |
|             |             | work.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateAvailab | Timestamp   | Date on     |             |             |
| leEnd       |             | which       |             |             |
|             |             | Candidate's |             |             |
|             |             | availabilit |             |             |
|             |             | y           |             |             |
|             |             | will end,   |             |             |
|             |             | if          |             |             |
|             |             | applicable. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateI9Expir | Timestamp   | Date on     |             |             |
| ation       |             | which the   |             |             |
|             |             | Candidate's |             |             |
|             |             | I9 form     |             |             |
|             |             | will        |             |             |
|             |             | expire.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateLastCom | Timestamp   | Date of the |             |             |
| ment        |             | most recent |             |             |
|             |             | Note        |             |             |
|             |             | referencing |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateLastMod | Timestamp   | Date the    |             |             |
| ified       |             | Candidate   |             |             |
|             |             | was last    |             |             |
|             |             | modified.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateNextCal | Timestamp   | Date when   |             |             |
| l           |             | the         |             |             |
|             |             | Candidate   |             |             |
|             |             | should next |             |             |
|             |             | be called.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateOfBirth | Timestamp   | Candidate's |             |             |
|             |             | date of     |             |             |
|             |             | birth.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dayRate     | BigDecimal  | Candidate's |             |             |
|             |             | desired     |             |             |
|             |             | per-day pay |             |             |
|             |             | rate.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dayRateLow  | BigDecimal  | Lowest      |             |             |
|             |             | per-day     |             |             |
|             |             | rate the    |             |             |
|             |             | Candidate   |             |             |
|             |             | will        |             |             |
|             |             | accept.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| degreeList  | String      | List of     |             |             |
|             |             | Candidate's |             |             |
|             |             | educational |             |             |
|             |             | degrees.    |             |             |
|             |             | Field on    |             |             |
|             |             | the edit    |             |             |
|             |             | screen, not |             |             |
|             |             | the field   |             |             |
|             |             | in People   |             |             |
|             |             | Template.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| description | String      | Text field, |             |             |
|             |             | usually     |             |             |
|             |             | used to     |             |             |
|             |             | contain the |             |             |
|             |             | Candidate's |             |             |
|             |             | resume.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| desiredLoca | String      | Locations   |             |             |
| tions       |             | where       |             |             |
|             |             | Candidate   |             |             |
|             |             | would like  |             |             |
|             |             | to work.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| disability  | String (1)  | Indicates   |             |             |
|             |             | whether     |             |             |
|             |             | Candidate   |             |             |
|             |             | has a       |             |             |
|             |             | disability. |             |             |
|             |             | Allowable   |             |             |
|             |             | values can  |             |             |
|             |             | be          |             |             |
|             |             | configured  |             |             |
|             |             | using field |             |             |
|             |             | maps.       |             |             |
|             |             | Default     |             |             |
|             |             | values are  |             |             |
|             |             | U           |             |             |
|             |             | (Unknown),  |             |             |
|             |             | Y (Yes),    |             |             |
|             |             | and N (No). |             |             |
+-------------+-------------+-------------+-------------+-------------+
| educationDe | String      | Candidate's |             |             |
| gree        |             | highest     |             |             |
|             |             | level of    |             |             |
|             |             | education.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| email       | String      | Candidate's |             |             |
|             | (100)       | email       |             |             |
|             |             | address.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| email2      | String      | Additional  |             |             |
|             | (100)       | email       |             |             |
|             |             | address.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| email3      | String      | Additional  |             |             |
|             | (100)       | email       |             |             |
|             |             | address.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| employeeTyp | String (30) | Candidate's | X           |             |
| e           |             | employee    |             |             |
|             |             | type: for   |             |             |
|             |             | example     |             |             |
|             |             | 1099 or W2. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| employmentP | String      | Indicates   |             |             |
| reference   | (200)       | type of     |             |             |
|             |             | employment  |             |             |
|             |             | the         |             |             |
|             |             | Candidate   |             |             |
|             |             | would       |             |             |
|             |             | prefer: for |             |             |
|             |             | example,    |             |             |
|             |             | permanent,  |             |             |
|             |             | part-time,  |             |             |
|             |             | and so      |             |             |
|             |             | forth.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| ethnicity   | String (50) | Candidate's |             |             |
|             |             | ethnicity.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| experience  | Integer     | Number of   |             |             |
|             |             | years of    |             |             |
|             |             | experience  |             |             |
|             |             | that the    |             |             |
|             |             | Candidate   |             |             |
|             |             | has.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| externalID  | String (50) | Used for    |             |             |
|             |             | records     |             |             |
|             |             | migrated in |             |             |
|             |             | from other  |             |             |
|             |             | systems;    |             |             |
|             |             | often used  |             |             |
|             |             | for the     |             |             |
|             |             | Candidate's |             |             |
|             |             | external/ba |             |             |
|             |             | ckoffice    |             |             |
|             |             | Id.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| fax         | String (20) | Candidate's |             |             |
|             |             | fax number. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| fax2        | String (20) | Additional  |             |             |
|             |             | fax number. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| fax3        | String (20) | Additional  |             |             |
|             |             | fax number. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| federalAddt | BigDecimal  | Number of   |             |             |
| ional       |             | federal     |             |             |
|             |             | withholding |             |             |
| Witholdings |             | s           |             |             |
| Amount      |             | the         |             |             |
|             |             | Candidate   |             |             |
|             |             | has         |             |             |
|             |             | selected on |             |             |
|             |             | his or her  |             |             |
|             |             | W-2 tax     |             |             |
|             |             | form.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| federalExem | Integer     | Number of   |             |             |
| ptions      |             | federal     |             |             |
|             |             | exemptions  |             |             |
|             |             | the         |             |             |
|             |             | Candidate   |             |             |
|             |             | has         |             |             |
|             |             | indicated   |             |             |
|             |             | on his or   |             |             |
|             |             | her W-2 tax |             |             |
|             |             | form.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| federalFili | String      | Candidate's |             |             |
| ngStatus    |             | federal tax |             |             |
|             |             | filing      |             |             |
|             |             | status.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| firstName   | String (50) | Candidate's | X           |             |
|             |             | first name. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| gender      | String (6)  | Candidate's |             |             |
|             |             | gender.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| hourlyRate  | BigDecimal  | Candidate's |             |             |
|             |             | desired     |             |             |
|             |             | hourly pay  |             |             |
|             |             | rate.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| hourlyRateL | BigDecimal  | Lowest      |             |             |
| ow          |             | hourly pay  |             |             |
|             |             | rate the    |             |             |
|             |             | Candidate   |             |             |
|             |             | will        |             |             |
|             |             | accept.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| i9OnFile    | Integer     | Indicates   |             |             |
|             |             | whether     |             |             |
|             |             | Candidate's |             |             |
|             |             | I-9 form    |             |             |
|             |             | has already |             |             |
|             |             | been filled |             |             |
|             |             | out and is  |             |             |
|             |             | on file.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| interviews  | To-many     | Interviews  |             | X           |
|             | association | for         |             |             |
|             |             | Candidate.  |             |             |
|             |             |             |             |             |
|             |             | This field  |             |             |
|             |             | is          |             |             |
|             |             | populated   |             |             |
|             |             | when you    |             |             |
|             |             | create      |             |             |
|             |             | Appointment |             |             |
|             |             | s           |             |             |
|             |             | where       |             |             |
|             |             | Appointment |             |             |
|             |             | .candidate  |             |             |
|             |             | is this     |             |             |
|             |             | Candidate   |             |             |
|             |             | and         |             |             |
|             |             | Appointment |             |             |
|             |             | .type       |             |             |
|             |             | is          |             |             |
|             |             | “Interview” |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isDeleted   | Boolean     | Indicates   | X           |             |
|             |             | whether     |             |             |
|             |             | this record |             |             |
|             |             | is marked   |             |             |
|             |             | as deleted  |             |             |
|             |             | in the      |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isEditable  | Boolean     | Indicates   | X           |             |
|             |             | whether     |             |             |
|             |             | Candidate   |             |             |
|             |             | can edit    |             |             |
|             |             | his or her  |             |             |
|             |             | profile     |             |             |
|             |             | information |             |             |
|             |             | ;           |             |             |
|             |             | applicable  |             |             |
|             |             | to          |             |             |
|             |             | Candidate/C |             |             |
|             |             | lient       |             |             |
|             |             | login.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| lastName    | String (50) | Candidate's | X           |             |
|             |             | last name.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| leads       | To-many     | Leads       |             |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| linkedPerso | To-one      | If person   |             |             |
| n           | association | represented |             |             |
|             |             | by          |             |             |
|             |             | Candidate   |             |             |
|             |             | is also a   |             |             |
|             |             | ClientConta |             |             |
|             |             | ct,         |             |             |
|             |             | this field  |             |             |
|             |             | includes    |             |             |
|             |             | the         |             |             |
|             |             | following   |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | fields:     |             |             |
|             |             |             |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | \_subtype   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| localAddtio | BigDecimal  | Number of   |             |             |
| nal         |             | local       |             |             |
|             |             | withholding |             |             |
| Witholdings |             | s           |             |             |
| Amount      |             | the         |             |             |
|             |             | Candidate   |             |             |
|             |             | has         |             |             |
|             |             | selected on |             |             |
|             |             | his or her  |             |             |
|             |             | W-2 tax     |             |             |
|             |             | form.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| localExempt | Integer     | Number of   |             |             |
| ions        |             | local       |             |             |
|             |             | exemptions  |             |             |
|             |             | Candidate   |             |             |
|             |             | has         |             |             |
|             |             | indicated   |             |             |
|             |             | on his or   |             |             |
|             |             | her W-2 tax |             |             |
|             |             | form.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| localFiling | String      | Candidate's |             |             |
| Status      |             | local tax   |             |             |
|             |             | filing      |             |             |
|             |             | status.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| localTaxCod | String      | Candidate's |             |             |
| e           |             | local tax   |             |             |
|             |             | code (if    |             |             |
|             |             | local taxes |             |             |
|             |             | apply); not |             |             |
|             |             | required.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| massMailOpt | Boolean     | Indicates   |             |             |
| Out         |             | whether     |             |             |
|             |             | Candidate   |             |             |
|             |             | has chosen  |             |             |
|             |             | not to be   |             |             |
|             |             | included in |             |             |
|             |             | mass emails |             |             |
|             |             | through the |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| middleName  | String (50) | Candidate's |             |             |
|             |             | middle      |             |             |
|             |             | name.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| mobile      | String (20) | Candidate's |             |             |
|             |             | mobile      |             |             |
|             |             | (cell)      |             |             |
|             |             | telephone   |             |             |
|             |             | number.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| name        | String      | Candidate's | X           |             |
|             |             | full name.  |             |             |
|             |             | If setting  |             |             |
|             |             | firstname   |             |             |
|             |             | or          |             |             |
|             |             | lastname,   |             |             |
|             |             | you must    |             |             |
|             |             | also set    |             |             |
|             |             | this field; |             |             |
|             |             | it does not |             |             |
|             |             | populate    |             |             |
|             |             | automatical |             |             |
|             |             | ly.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| namePrefix  | String (5)  | Candidate's |             |             |
|             |             | name        |             |             |
|             |             | prefix, for |             |             |
|             |             | example     |             |             |
|             |             | Dr., Ms.,   |             |             |
|             |             | Mr., and so |             |             |
|             |             | forth.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| nameSuffix  | String (5)  | Candidate's |             |             |
|             |             | name        |             |             |
|             |             | suffix, for |             |             |
|             |             | example Jr. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| nickName    | String      | Candidate's |             |             |
|             |             | nickname.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| numCategori | Integer     | Number of   |             |             |
| es          |             | Category    |             |             |
|             |             | objects     |             |             |
|             |             | associated  |             |             |
|             |             | with        |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| numOwners   | Integer     | Number of   |             |             |
|             |             | CorporateUs |             |             |
|             |             | ers         |             |             |
|             |             | that are    |             |             |
|             |             | listed as   |             |             |
|             |             | owner of    |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| occupation  | String (50) | Candidate's |             |             |
|             |             | current     |             |             |
|             |             | occupation  |             |             |
|             |             | or job      |             |             |
|             |             | title.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| owner       | To-one      | CorporateUs | X           |             |
|             | association | er          |             |             |
|             |             | who is the  |             |             |
|             |             | primary     |             |             |
|             |             | owner of    |             |             |
|             |             | Candidate.  |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is    |             |             |
|             |             | user who    |             |             |
|             |             | creates the |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| pager       | String (20) | Candidate's |             |             |
|             |             | pager       |             |             |
|             |             | number.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| paperWorkOn | String      | Configurabl |             |             |
| File        |             | e           |             |             |
|             |             | field that  |             |             |
|             |             | tracks      |             |             |
|             |             | whether the |             |             |
|             |             | Candidate's |             |             |
|             |             | tax         |             |             |
|             |             | paperwork   |             |             |
|             |             | has been    |             |             |
|             |             | received.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| password    | String      | Candidate’s | X           |             |
|             |             | password.   |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is a  |             |             |
|             |             | randomly    |             |             |
|             |             | generated   |             |             |
|             |             | string.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| phone       | String (20) | Candidate's |             |             |
|             |             | home        |             |             |
|             |             | telephone   |             |             |
|             |             | number.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| phone2      | String (20) | Candidate's |             |             |
|             |             | telephone   |             |             |
|             |             | number at   |             |             |
|             |             | work.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| phone3      | String (20) | Alternate   |             |             |
|             |             | telephone   |             |             |
|             |             | number.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| placements  | To-many     | Placements  |             | X           |
|             | association | for         |             |             |
|             |             | Candidate.  |             |             |
|             |             |             |             |             |
|             |             | This field  |             |             |
|             |             | is          |             |             |
|             |             | populated   |             |             |
|             |             | when you    |             |             |
|             |             | create      |             |             |
|             |             | Placements  |             |             |
|             |             | where       |             |             |
|             |             | Placement.c |             |             |
|             |             | andidate    |             |             |
|             |             | is this     |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| preferredCo | String (15) | Candidate's | X           |             |
| ntact       |             | preferred   |             |             |
|             |             | method of   |             |             |
|             |             | contact     |             |             |
|             |             | (for        |             |             |
|             |             | example,    |             |             |
|             |             | phone,      |             |             |
|             |             | email, and  |             |             |
|             |             | so forth.)  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| primarySkil | To-many     | Skills that |             |             |
| ls          | association | are listed  |             |             |
|             |             | as primary  |             |             |
|             |             | Skills for  |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| recentClien | String      | List of     |             |             |
| tList       |             | ClientCorpo |             |             |
|             |             | rations     |             |             |
|             |             | for which   |             |             |
|             |             | Candidate   |             |             |
|             |             | has worked. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| referredBy  | String (50) | Name of     |             |             |
|             |             | person who  |             |             |
|             |             | referred    |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| referredByP | To-one      | Person who  |             |             |
| erson       | association | referred    |             |             |
|             |             | Candidate,  |             |             |
|             |             | if          |             |             |
|             |             | applicable. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| salary      | BigDecimal  | Candidate's |             |             |
|             |             | desired     |             |             |
|             |             | yearly      |             |             |
|             |             | salary.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| salaryLow   | BigDecimal  | Lowest      |             |             |
|             |             | yearly      |             |             |
|             |             | salary the  |             |             |
|             |             | Candidate   |             |             |
|             |             | will        |             |             |
|             |             | accept.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| secondaryAd | Address     | Candidate's |             |             |
| dress       |             | work        |             |             |
|             |             | address:    |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 1           |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 2           |             |             |
|             |             |             |             |             |
|             |             | -   city    |             |             |
|             |             |             |             |             |
|             |             | -   state   |             |             |
|             |             |             |             |             |
|             |             | -   zip     |             |             |
|             |             |             |             |             |
|             |             | -   country |             |             |
|             |             | ID:         |             |             |
|             |             |             |             |             |
|             |             | > options:\ |             |             |
|             |             | > value: 1\ |             |             |
|             |             | > value: 2  |             |             |
|             |             |             |             |             |
|             |             | Use the     |             |             |
|             |             | following   |             |             |
|             |             | REST call   |             |             |
|             |             | to get the  |             |             |
|             |             | list of     |             |             |
|             |             | countryIDs  |             |             |
|             |             | and labels: |             |             |
|             |             |             |             |             |
|             |             | /meta/Candi |             |             |
|             |             | date?\      |             |             |
|             |             | fields=addr |             |             |
|             |             | ess(country |             |             |
|             |             | ID)         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| secondaryOw | To-many     | CorporateUs |             |             |
| ners        | association | ers         |             |             |
|             |             | who are     |             |             |
|             |             | additional  |             |             |
|             |             | owners of   |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| secondarySk | Skill       | Skills that |             |             |
| ills        |             | are listed  |             |             |
|             |             | as          |             |             |
|             |             | secondary   |             |             |
|             |             | skills for  |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| sendouts    | To-many     | Sendouts    |             |             |
|             | association | for         |             |             |
|             |             | Candidate.  |             |             |
|             |             |             |             |             |
|             |             | This field  |             |             |
|             |             | is          |             |             |
|             |             | populated   |             |             |
|             |             | when you    |             |             |
|             |             | create      |             |             |
|             |             | Sendouts    |             |             |
|             |             | where the   |             |             |
|             |             | Sendout.can |             |             |
|             |             | didate      |             |             |
|             |             | is this     |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| skillSet    | String      | Text        |             |             |
|             |             | description |             |             |
|             |             | of          |             |             |
|             |             | Candidate's |             |             |
|             |             | skills.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| smsOptIn    | Boolean     | Indicates   |             |             |
|             |             | whether     |             |             |
|             |             | Candidate   |             |             |
|             |             | has granted |             |             |
|             |             | permission  |             |             |
|             |             | to be sent  |             |             |
|             |             | messages    |             |             |
|             |             | via SMS.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| source      | String      | Candidate   |             |             |
|             | (200)       | source: for |             |             |
|             |             | example,    |             |             |
|             |             | Advertiseme |             |             |
|             |             | nt,         |             |             |
|             |             | Client      |             |             |
|             |             | Referral,   |             |             |
|             |             | LinkedIn,   |             |             |
|             |             | Monster.com |             |             |
|             |             | ,           |             |             |
|             |             | and so      |             |             |
|             |             | forth.      |             |             |
|             |             | Allowable   |             |             |
|             |             | values can  |             |             |
|             |             | be          |             |             |
|             |             | configured  |             |             |
|             |             | using field |             |             |
|             |             | maps.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| specialties | To-many     | Candidate’s |             |             |
|             | association | specialty   |             |             |
|             |             | skills.     |             |             |
|             |             |             |             |             |
|             |             | This field  |             |             |
|             |             | is          |             |             |
|             |             | populated   |             |             |
|             |             | when you    |             |             |
|             |             | associate a |             |             |
|             |             | Specialty   |             |             |
|             |             | with this   |             |             |
|             |             | Candidate   |             |             |
|             |             | in [a       |             |             |
|             |             | to-many     |             |             |
|             |             | association |             |             |
|             |             | ](#create-t |             |             |
|             |             | o-many-asso |             |             |
|             |             | ciations)   |             |             |
|             |             | operation.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| ssn         | String (18) | Candidate's |             |             |
|             |             | Social      |             |             |
|             |             | Security    |             |             |
|             |             | Number.     |             |             |
|             |             | Check field |             |             |
|             |             | map for     |             |             |
|             |             | proper      |             |             |
|             |             | format.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| stateAddtio | BigDecimal  | Number of   |             |             |
| nal         |             | state       |             |             |
|             |             | withholding |             |             |
| Witholdings |             | s           |             |             |
| Amount      |             | Candidate   |             |             |
|             |             | has         |             |             |
|             |             | selected on |             |             |
|             |             | his or her  |             |             |
|             |             | W-2 tax     |             |             |
|             |             | form.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| stateExempt | Integer     | Number of   |             |             |
| ions        |             | state       |             |             |
|             |             | exemptions  |             |             |
|             |             | Candidate   |             |             |
|             |             | has         |             |             |
|             |             | indicated   |             |             |
|             |             | on W-2 tax  |             |             |
|             |             | form.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| stateFiling | String      | Candidate's |             |             |
| Status      |             | state tax   |             |             |
|             |             | filing      |             |             |
|             |             | status.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| status      | String      | Candidate   | X           |             |
|             | (100)       | status with |             |             |
|             |             | company:    |             |             |
|             |             | for         |             |             |
|             |             | example,    |             |             |
|             |             | New Lead,   |             |             |
|             |             | Active,     |             |             |
|             |             | Offer       |             |             |
|             |             | Pending,    |             |             |
|             |             | Placed, and |             |             |
|             |             | so forth.   |             |             |
|             |             | Allowable   |             |             |
|             |             | values can  |             |             |
|             |             | be          |             |             |
|             |             | configured  |             |             |
|             |             | using field |             |             |
|             |             | maps.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| submissions | To-many     | JobSubmissi |             | X           |
|             | association | ons         |             |             |
|             |             | for         |             |             |
|             |             | Candidate.  |             |             |
|             |             |             |             |             |
|             |             | This field  |             |             |
|             |             | is          |             |             |
|             |             | populated   |             |             |
|             |             | when you    |             |             |
|             |             | create      |             |             |
|             |             | JobSubmissi |             |             |
|             |             | ons         |             |             |
|             |             | where       |             |             |
|             |             | JobSubmissi |             |             |
|             |             | on.candidat |             |             |
|             |             | e           |             |             |
|             |             | is this     |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| tasks       | To-many     | Tasks       |             |             |
|             | association | associated  |             |             |
|             |             | with        |             |             |
|             |             | Candidate.\ |             |             |
|             |             | \           |             |             |
|             |             | This field  |             |             |
|             |             | is          |             |             |
|             |             | populated   |             |             |
|             |             | when you    |             |             |
|             |             | create      |             |             |
|             |             | Tasks where |             |             |
|             |             | Task.candid |             |             |
|             |             | ate         |             |             |
|             |             | is this     |             |             |
|             |             | Candidate.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| taxID       | String (18) | Id that     |             |             |
|             |             | Candidate   |             |             |
|             |             | uses for    |             |             |
|             |             | tax         |             |             |
|             |             | purposes if |             |             |
|             |             | not SSN.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| taxState    | String      | State in    |             |             |
|             |             | which       |             |             |
|             |             | Candidate   |             |             |
|             |             | pays taxes. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| timeZoneOff | Integer     | Indicates   |             |             |
| setEST      |             | the number  |             |             |
|             |             | of hours by |             |             |
|             |             | which the   |             |             |
|             |             | Candidate's |             |             |
|             |             | time zone   |             |             |
|             |             | differs     |             |             |
|             |             | from        |             |             |
|             |             | Eastern     |             |             |
|             |             | Standard    |             |             |
|             |             | Time. For   |             |             |
|             |             | example,    |             |             |
|             |             | Pacific     |             |             |
|             |             | Standard    |             |             |
|             |             | Time is -3, |             |             |
|             |             | three hours |             |             |
|             |             | earlier     |             |             |
|             |             | than        |             |             |
|             |             | Eastern.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| travelLimit | Integer     | Maximum     |             |             |
|             |             | distance    |             |             |
|             |             | Candidate   |             |             |
|             |             | is willing  |             |             |
|             |             | to travel.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| type        | String      | Candidate   |             |             |
|             | (100)       | type: for   |             |             |
|             |             | example,    |             |             |
|             |             | Active,     |             |             |
|             |             | Passive,    |             |             |
|             |             | and so      |             |             |
|             |             | forth.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| userDateAdd | Timestamp   | Date the    |             | X           |
| ed          |             | record was  |             |             |
|             |             | added to    |             |             |
|             |             | the system. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| username    | String      | Candidate’s | X           |             |
|             |             | username    |             |             |
|             |             | for logging |             |             |
|             |             | in to       |             |             |
|             |             | Bullhorn.   |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is    |             |             |
|             |             | \_\[random  |             |             |
|             |             | number\]    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| veteran     | String (1)  | Indicates   |             |             |
|             |             | whether     |             |             |
|             |             | Candidate   |             |             |
|             |             | is a        |             |             |
|             |             | veteran: Y  |             |             |
|             |             | for yes, N  |             |             |
|             |             | for no, or  |             |             |
|             |             | U for       |             |             |
|             |             | unknown.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| webResponse | To-many     | Web         |             |             |
|             | association | responses   |             |             |
|             |             | for         |             |             |
|             |             | Candidate.\ |             |             |
|             |             | \           |             |             |
|             |             | This field  |             |             |
|             |             | is          |             |             |
|             |             | populated   |             |             |
|             |             | when you    |             |             |
|             |             | create      |             |             |
|             |             | JobSubmissi |             |             |
|             |             | ons         |             |             |
|             |             | where       |             |             |
|             |             | JobSubmissi |             |             |
|             |             | on.candidat |             |             |
|             |             | e           |             |             |
|             |             | is this     |             |             |
|             |             | Candidate   |             |             |
|             |             | and         |             |             |
|             |             | JobSubmissi |             |             |
|             |             | on.status   |             |             |
|             |             | is “New     |             |             |
|             |             | Lead”.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| willRelocat | Boolean     | Indicates   |             |             |
| e           |             | whether     |             |             |
|             |             | Candidate   |             |             |
|             |             | is willing  |             |             |
|             |             | to relocate |             |             |
|             |             | for a       |             |             |
|             |             | position.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| workAuthori | Boolean     | Indicates   |             |             |
| zed         |             | whether     |             |             |
|             |             | Candidate   |             |             |
|             |             | is          |             |             |
|             |             | authorized  |             |             |
|             |             | to work in  |             |             |
|             |             | the U.S.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| workPhone   | String (20) | Candidate's |             |             |
|             |             | telephone   |             |             |
|             |             | number at   |             |             |
|             |             | work.       |             |             |
+-------------+-------------+-------------+-------------+-------------+

#### Candidate confidential fields

By default, candidate fields listed in the ‘Confidential Fields’ private
label attribute are returned with the value “\*\*CONFIDENTIAL\*\*”.
However, confidential fields can also be included in the ‘Candidate
Viewable Confidential Fields’ private label attribute. Only users with
the ‘View Candidate Viewable Confidential Fields’ user action
entitlement can view candidate viewable confidential fields.

User who have both the ‘View Candidate Viewable Confidential Fields’ and
‘Edit Confidential Fields’ user action entitlements can edit candidate
viewable confidential fields.

### CandidateCertification

This entity represents a certification that a Candidate may have.

  ------------------------------------------------------------------------------------------------------------------------------------
  **CandidateCertification**   **Type**             **Description**                                     **Not null**   **Read-only**
                                                                                                                       
  **field**                                                                                                            
  ---------------------------- -------------------- --------------------------------------------------- -------------- ---------------
  id                           Integer              Unique identifier for this entity.                  X              X

  boardCertification           String (100)                                                                            

  candidate                    To-one association   Candidate linked to CandidateCertification.         X              

  certification                To-one association   Certification linked to CandidateCertification.     X              

  comments                     String               Free-text comments on this record.                                 

  compact                      Integer                                                                                 

  copyOnFile                   Integer                                                                                 

  dateCertified                Timestamp            Date candidate obtained certification.                             

  dateExpiration               Timestamp            Date certification expires.                                        

  dateLastModified             Timestamp            Date the CandidateCertification was last updated.                  X

  issuedBy                     String (100)         Entity that issued certification to candidate.                     

  licenseNumber                String (100)                                                                            

  licenseType                  String (30)                                                                             

  location                     String (100)                                                                            

  modifyingUser                To-one association                                                                      

  name                         String (100)         Name of CandidateCertification.                     X              

  results                      String (255)                                                                            

  status                       String (30)          Status of CandidateCertification.                                  
  ------------------------------------------------------------------------------------------------------------------------------------

### CandidateEducation

Represents an educational degree or course of study that a Candidate
lists on his or her resume. Each CandidateEducation instance corresponds
to a line item on the "Education" tab of a Candidate in the Bullhorn
application.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **CandidateEducation**   **Type**             **Description**                                                                                                        **Not null**   **Read-only**
                                                                                                                                                                                      
  **field**                                                                                                                                                                           
  ------------------------ -------------------- ---------------------------------------------------------------------------------------------------------------------- -------------- ---------------
  id                       Integer              Unique identifier for this entity.                                                                                                    X

  candidate                To-one association   Candidate with whom this entity is associated. Included Candidate fields are:                                                          
                                                                                                                                                                                      
                                                id                                                                                                                                    
                                                                                                                                                                                      
                                                firstName                                                                                                                             
                                                                                                                                                                                      
                                                lastName                                                                                                                              

  certification            String               Certification received with this education, if applicable.                                                                             

  city                     String (40)          Name of the city where the education took place.                                                                                       

  comments                 String               Free-text comments on this record.                                                                                                     

  customDate1 to 5         Timestamp            Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.                      

  customFloat1 to 5        Double               Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.                   

  customInt1 to 5          Integer              Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.                   

  customText1 to 5         String               Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.                      

  customTextBlock1 to 3    String               Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.                      

  dateAdded                Timestamp            Date on which this record was created in the Bullhorn system.                                                                         X

  degree                   String (100)         Indicates what educational degree the Candidate received; for example, B.A., M.A., Ph.D., and so forth.                                

  endDate                  Timestamp            Date when Candidate finished this education.                                                                                           

  expirationDate           Timestamp            Expiration date for a certificate or other credential that needs to be periodically renewed.                                           

  gpa                      Double               Indicates Candidate's grade point average.                                                                                             

  graduationDate           Timestamp            Date when Candidate graduated.                                                                                                         

  isDeleted                Boolean              Indicates whether this record has been marked as deleted in the Bullhorn system.                                                       

  major                    String (100)         Indicates the field in which Candidate majored.                                                                                        

  school                   String (100)         Name of the educational institute where this education took place.                                                                     

  startDate                Timestamp            Date when Candidate began study.                                                                                                       

  state                    String (50)          Name of the U.S State in which the education took place.                                                                               
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### CandidateReference

Represents a person who serves as a reference for a Candidate.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **CandidateReference**   **Type**             **Description**                                                                                                        **Not null**   **Read-only**
                                                                                                                                                                                      
  **field**                                                                                                                                                                           
  ------------------------ -------------------- ---------------------------------------------------------------------------------------------------------------------- -------------- ---------------
  id                       Integer              Unique identifier for this entity.                                                                                     X              X

  candidate                To-one association   Candidate for whom this person is a reference. Included Candidate fields are:                                          X               
                                                                                                                                                                                      
                                                id                                                                                                                                    
                                                                                                                                                                                      
                                                firstName                                                                                                                             
                                                                                                                                                                                      
                                                lastName                                                                                                                              

  candidateTitle           String (50)          Candidate's title when he or she worked with or for the reference.                                                                     

  clientCorporation        To-one association   ClientCorporation where the CandidateReference works.                                                                                  

  companyName              String (50)          Name of the company where reference works, if it does not have a ClientCorporation record in Bullhorn.                                 

  customDate1 to 5         Timestamp            Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.                      

  customFloat1 to 5        Double               Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.                   

  customInt1 to 5          Integer              Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.                   

  customText1 to 5         String               Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.                      

  customTextBlock1 to 3    String               Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.                      

  dateAdded                Timestamp            Date on which this record was created in the Bullhorn system.                                                          X               

  employmentEnd            Timestamp            End date of Candidate's employment with the reference.                                                                                 

  employmentStart          Timestamp            Start of the period during which the Candidate worked with the reference.                                                              

  isDeleted                Boolean              Indicates whether this record has been marked as deleted in the Bullhorn system.                                       X               

  jobOrder                 Integer              JobOrder for which Candidate is being considered.                                                                                      

  referenceClientContact   To-one association   Bullhorn ClientContact for this reference, if applicable.                                                                              

  referenceEmail           String (50)          Email address for reference; not used if the CandidateReference is a client contact.                                                   

  referenceFirstName       String (50)          Reference's first name; not used if reference is a ClientContact.                                                                      

  referenceLastName        String (50)          Reference's last name; not used if the CandidateReference is a ClientContact.                                                          

  referencePhone           String (20)          Phone number for the CandidateReference; not used if the reference is a ClientContact.                                                 

  referenceTitle           String (50)          Reference's job title; not used if the reference is a ClientContact.                                                                   

  status                   String (20)          Status of this reference request.                                                                                                      

  yearsKnown               Integer              Indicates how long reference has known the Candidate.                                                                                  
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### CandidateWorkHistory

Represents a single entry in the "Work History" section of a Candidate's
resume: that is, a job the Candidate has had. For each current or former
position the Candidate has held, there is a unique CandidateWorkHistory
instance associated with that Candidate. Each CandidateWorkHistory
instance corresponds to a line item on the "Work History" tab of a
Candidate record in the Bullhorn application.

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **CandidateWorkHistory**   **Type**             **Description**                                                                                                        **Not null**   **Read-only**
                                                                                                                                                                                        
  **field**                                                                                                                                                                             
  -------------------------- -------------------- ---------------------------------------------------------------------------------------------------------------------- -------------- ---------------
  id                         Integer              Unique identifier for this entity.                                                                                     X              X

  bonus                      Double               Amount of the bonus paid to Candidate.                                                                                                 

  candidate                  To-one association   Candidate with whom CandidateWorkHistory is associated.                                                                X               

  clientCorporation          To-one association   ClientCorporation associated with Candidate.                                                                                           

  comments                   String               Free-text comments on CandidateWorkHistory.                                                                                            

  commission                 Double               Amount of commission earned by Candidate at this position.                                                                             

  companyName                String (100)         Name of the company where the Candidate worked.                                                                                        

  customDate1 to 5           Timestamp            Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.                      

  customFloat1 to 5          Double               Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.                   

  customInt1 to 5            Integer              Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.                   

  customText1 to 5           String               Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.                      

  customTextBlock1 to 3      String               Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.                      

  dateAdded                  Timestamp            Date on which this record was created in the Bullhorn system.                                                          X              X

  endDate                    Timestamp            Date on which job ended, if applicable.                                                                                                

  isDeleted                  Boolean              Indicates whether this record has been marked as deleted in the Bullhorn system.                                       X               

  isLastJob                  Boolean              Indicates whether this was the Candidate's most recent job.                                                            X               

  jobOrder                   To-one association   JobOrder associated with the CandidateWorkHistory, if applicable.                                                                      

  placement                  To-one association   Placement representing the Candidate's placement in a job, if applicable.                                                              

  salary1                    BigDecimal           Candidate's starting salary at this position.                                                                                          

  salary2                    BigDecimal           Candidate's final salary at this position.                                                                                             

  salaryType                 String (20)          Indicates how the Candidate was paid: Hourly, Yearly, and so forth.                                                                    

  startDate                  Timestamp            Date on which Candidate began working at this position.                                                                                

  terminationReason          String (100)         Reason for the Candidate's termination from this position, if applicable.                                                              

  title                      String (50)          Candidate's job title in this position.                                                                                                
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

### Category

This entity represents a category in which a Candidate or JobOrder can
be placed. A category that has a value for parentCategoryId greater than
zero is a specialty.

  ---------------------------------------------------------------------------------------------------------------------------------------------
  **Category**   **Type**              **Description**                                                           **Not null**   **Read-only**
                                                                                                                                
  **field**                                                                                                                     
  -------------- --------------------- ------------------------------------------------------------------------- -------------- ---------------
  id             Integer               Unique identifier for this entity.                                        X              X

  dateAdded      Timestamp             Date on which record was created in the Bullhorn system.                  X              X

  description    String (255)          Free-text description of this category.                                                  X

  enabled        Boolean               Indicates whether category is available for use in the Bullhorn system.   X              X

  name           String (100)          Name of the category + PLId (for categories)                              X              X

  occupation     String (50)           Occupation.                                                                              X

  skills         To-many association   Ids of the Skills associated with this Category.                                         

  specialties    To-many association   Ids of the Specialties that are children of this Category.                               

  type           String (20)           Bill Rate Category, Skills Checklist Category, and so forth.                             X
  ---------------------------------------------------------------------------------------------------------------------------------------------

 

### Certification

This entity represents a certification that a Candidate has.

  -----------------------------------------------------------------------------------------------------------
  **Category**   **Type**       **Description**                                **Not null**   **Read-only**
                                                                                              
  **field**                                                                                   
  -------------- -------------- ---------------------------------------------- -------------- ---------------
  id             Integer        Unique identifier for this entity.             X              X

  description    String         Free-text description of this certification.                   

  name           String (100)   Name of this certification.                    X               
  -----------------------------------------------------------------------------------------------------------

### ClientContact

Represents a contact person who works at a ClientCorporation. A
ClientContact can be any person at the ClientCorporation whom you wish
to track in the Bullhorn system: a hiring manager, HR staffer,
executive, or other employee. Note that a Candidate may become a Client
Contact after being placed in a job; or a ClientContact may become a
Candidate after deciding to look for another position.

The ClientContact entity supports the [massUpdate](#get-massupdate)
operations.

+-------------+-------------+-------------+-------------+-------------+
| **ClientCon | **Type**    | **Descripti | **Not       | **Read-only |
| tact**      |             | on**        | null**      | **          |
|             |             |             |             |             |
| **field**   |             |             |             |             |
+=============+=============+=============+=============+=============+
| id          | Integer     | Unique      | X           | X           |
|             |             | identifier  |             |             |
|             |             | for this    |             |             |
|             |             | entity.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| address     | Address     | Contact's   |             |             |
|             |             | address:    |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 1           |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 2           |             |             |
|             |             |             |             |             |
|             |             | -   city    |             |             |
|             |             |             |             |             |
|             |             | -   state   |             |             |
|             |             |             |             |             |
|             |             | -   zip     |             |             |
|             |             |             |             |             |
|             |             | -   country |             |             |
|             |             | ID:         |             |             |
|             |             |             |             |             |
|             |             | > options:\ |             |             |
|             |             | > value: 1\ |             |             |
|             |             | > value: 2  |             |             |
|             |             |             |             |             |
|             |             | Use the     |             |             |
|             |             | following   |             |             |
|             |             | REST call   |             |             |
|             |             | to get the  |             |             |
|             |             | list of     |             |             |
|             |             | countryIDs  |             |             |
|             |             | and labels: |             |             |
|             |             |             |             |             |
|             |             | /meta/Clien |             |             |
|             |             | tContact?\  |             |             |
|             |             | fields=addr |             |             |
|             |             | ess(country |             |             |
|             |             | ID)         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| businessSec | To-many     | Ids of      |             |             |
| tors        | association | BusinessSec |             |             |
|             |             | tors        |             |             |
|             |             | in which    |             |             |
|             |             | the Contact |             |             |
|             |             | operates.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| category    | To-one      | Contact's   | X           |             |
|             | association | primary     |             |             |
|             |             | Category.   |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is    |             |             |
|             |             | the Other   |             |             |
|             |             | Area(s)     |             |             |
|             |             | category    |             |             |
|             |             | for the     |             |             |
|             |             | user’s      |             |             |
|             |             | private     |             |             |
|             |             | label or    |             |             |
|             |             | the first   |             |             |
|             |             | Category.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| categories  | To-many     | Ids of the  |             |             |
|             | association | Categories  |             |             |
|             |             | associated  |             |             |
|             |             | with the    |             |             |
|             |             | Contact.    |             |             |
|             |             | Note that   |             |             |
|             |             | the         |             |             |
|             |             | categoryId  |             |             |
|             |             | property is |             |             |
|             |             | used to     |             |             |
|             |             | store the   |             |             |
|             |             | contact's   |             |             |
|             |             | primary     |             |             |
|             |             | Category,   |             |             |
|             |             | while this  |             |             |
|             |             | association |             |             |
|             |             | hold that   |             |             |
|             |             | Category    |             |             |
|             |             | and any     |             |             |
|             |             | other       |             |             |
|             |             | Categories  |             |             |
|             |             | to which    |             |             |
|             |             | the Contact |             |             |
|             |             | belongs.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| certificati | String      | Contact's   |             |             |
| ons         |             | certificati |             |             |
|             |             | ons.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| clientCorpo | To-one      | ClientCorpo | X           |             |
| ration      | association | ration      |             |             |
|             |             | for which   |             |             |
|             |             | the Contact |             |             |
|             |             | works.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| comments    | String      | Free-text   |             |             |
|             |             | comments on |             |             |
|             |             | this        |             |             |
|             |             | Contact.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customDate1 | Timestamp   | Configurabl |             |             |
| -3          |             | e           |             |             |
|             |             | date fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customFloat | Double      | Configurabl |             |             |
| 1-3         |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customInt1- | Integer     | Configurabl |             |             |
| 3           |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customObjec | CustomObjec | Fields to   |             |             |
| t1s         | t           | which       |             |             |
| to 10s      |             | custom      |             |             |
|             |             | objects can |             |             |
|             |             | be          |             |             |
|             |             | assigned.   |             |             |
|             |             | For more    |             |             |
|             |             | information |             |             |
|             |             | about       |             |             |
|             |             | custom      |             |             |
|             |             | objects,    |             |             |
|             |             | see the     |             |             |
|             |             | Bullhorn    |             |             |
|             |             | Resource    |             |             |
|             |             | Center and  |             |             |
|             |             | the         |             |             |
|             |             | following   |             |             |
|             |             | article on  |             |             |
|             |             | using the   |             |             |
|             |             | REST API    |             |             |
|             |             | with custom |             |             |
|             |             | objects:\   |             |             |
|             |             | <http://dev |             |             |
|             |             | eloper.bull |             |             |
|             |             | horn.com/ar |             |             |
|             |             | ticles/cust |             |             |
|             |             | omobjects>  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customText1 | String      | Configurabl |             |             |
| -20         | (100)       | e           |             |             |
|             |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customTextB | String      | Configurabl |             |             |
| lock1-5     |             | e           |             |             |
|             |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateAdded   | Timestamp   | Date on     | X           |             |
|             |             | which this  |             |             |
|             |             | record was  |             |             |
|             |             | created in  |             |             |
|             |             | the         |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateLastMod | Timestamp   | Date on     |             |             |
| ified       |             | which the   |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | was last    |             |             |
|             |             | modified.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateLastVis | Timestamp   | Date of     |             |             |
| it          |             | ClientConta |             |             |
|             |             | ct’s        |             |             |
|             |             | last visit. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| description | String      | Large text  |             |             |
|             |             | field for   |             |             |
|             |             | additional  |             |             |
|             |             | information |             |             |
|             |             | about the   |             |             |
|             |             | contact.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| desiredCate | String      | Categories  |             |             |
| gories      |             | that the    |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | wants       |             |             |
|             |             | Candidates  |             |             |
|             |             | to belong   |             |             |
|             |             | to.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| desiredSkil | String      | Skills that |             |             |
| ls          |             | the         |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | wants his   |             |             |
|             |             | or her      |             |             |
|             |             | Candidates  |             |             |
|             |             | to have.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| desiredSpec | String      | Specialties |             |             |
| ialties     |             | that the    |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | wants his   |             |             |
|             |             | or her      |             |             |
|             |             | Candidates  |             |             |
|             |             | to have.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| division    | String (40) | Department  |             |             |
|             |             | that the    |             |             |
|             |             | Contact is  |             |             |
|             |             | associated  |             |             |
|             |             | with.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| email       | String (60) | ClientConta | X           |             |
|             |             | ct's        |             |             |
|             |             | primary     |             |             |
|             |             | (work)      |             |             |
|             |             | email       |             |             |
|             |             | address.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| email2      | String      | Additional  |             |             |
|             | (100)       | email       |             |             |
|             |             | address.    |             |             |
|             |             | Typically   |             |             |
|             |             | used for    |             |             |
|             |             | the         |             |             |
|             |             | ClientConta |             |             |
|             |             | ct’s        |             |             |
|             |             | home or     |             |             |
|             |             | personal    |             |             |
|             |             | email.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| email3      | String      | Additional  |             |             |
|             | (100)       | email       |             |             |
|             |             | address.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| externalID  | String (30) | External    |             |             |
|             |             | identifier  |             |             |
|             |             | for the     |             |             |
|             |             | record,     |             |             |
|             |             | used for    |             |             |
|             |             | migrations  |             |             |
|             |             | and         |             |             |
|             |             | back-office |             |             |
|             |             | Integration |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| fax         | String (20) | ClientConta |             |             |
|             |             | ct's        |             |             |
|             |             | primary     |             |             |
|             |             | (work) fax  |             |             |
|             |             | number.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| fax2        | String (20) | Additional  |             |             |
|             |             | fax number. |             |             |
|             |             | Typically   |             |             |
|             |             | used for    |             |             |
|             |             | the         |             |             |
|             |             | contact's   |             |             |
|             |             | home or     |             |             |
|             |             | personal    |             |             |
|             |             | fax.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| fax3        | String (20) | Additional  |             |             |
|             |             | fax number. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| firstName   | String (50) | ClientConta |             |             |
|             |             | ct's        |             |             |
|             |             | first name. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isDayLightS | Boolean     | Indicates   |             |             |
| avings      |             | whether the |             |             |
|             |             | ClientConta |             |             |
|             |             | ct's        |             |             |
|             |             | location is |             |             |
|             |             | using       |             |             |
|             |             | Daylight    |             |             |
|             |             | Saving      |             |             |
|             |             | Time.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isDeleted   | Boolean     | Indicates   | X           |             |
|             |             | whether     |             |             |
|             |             | this record |             |             |
|             |             | has been    |             |             |
|             |             | marked as   |             |             |
|             |             | deleted in  |             |             |
|             |             | the         |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| lastName    | String (50) | ClientConta |             |             |
|             |             | ct's        |             |             |
|             |             | last name.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| leads       | To-many     | Leads       |             |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | ClientConta |             |             |
|             |             | ct.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| linkedPerso | Person      | If the      |             |             |
| n           |             | person      |             |             |
|             | (superclass | represented |             |             |
|             | of          | by this     |             |             |
|             | Candidate   | ClientConta |             |             |
|             | and         | ct          |             |             |
|             | ClientConta | is also a   |             |             |
|             | ct)         | Candidate,  |             |             |
|             |             | this field  |             |             |
|             |             | includes    |             |             |
|             |             | the         |             |             |
|             |             | following   |             |             |
|             |             | Candidate   |             |             |
|             |             | fields:     |             |             |
|             |             |             |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | \_subtype   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| massMailOpt | Boolean     | Indicates   |             | X           |
| Out         |             | whether the |             |             |
|             |             | Contact has |             |             |
|             |             | chosen not  |             |             |
|             |             | to be       |             |             |
|             |             | included in |             |             |
|             |             | mass emails |             |             |
|             |             | through the |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| middleName  | String (50) | ClientConta |             |             |
|             |             | ct's        |             |             |
|             |             | middle      |             |             |
|             |             | name.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| mobile      | String (20) | ClientConta |             |             |
|             |             | ct's        |             |             |
|             |             | mobile      |             |             |
|             |             | (cellular)  |             |             |
|             |             | telephone   |             |             |
|             |             | number.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| name        | String      | ClientConta |             |             |
|             |             | ct's        |             |             |
|             |             | full name.  |             |             |
|             |             | Should be a |             |             |
|             |             | combination |             |             |
|             |             | of the      |             |             |
|             |             | firstName   |             |             |
|             |             | and         |             |             |
|             |             | lastName    |             |             |
|             |             | fields      |             |             |
|             |             | separated   |             |             |
|             |             | by a space. |             |             |
|             |             |             |             |             |
|             |             | **Notes:**  |             |             |
|             |             | If you      |             |             |
|             |             | create a    |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | with no     |             |             |
|             |             | value in    |             |             |
|             |             | the name    |             |             |
|             |             | field,      |             |             |
|             |             | users will  |             |             |
|             |             | have no way |             |             |
|             |             | to select   |             |             |
|             |             | that        |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | in the      |             |             |
|             |             | Bullhorn    |             |             |
|             |             | staffing    |             |             |
|             |             | application |             |             |
|             |             | .           |             |             |
|             |             |             |             |             |
|             |             | If you      |             |             |
|             |             | create or   |             |             |
|             |             | modify a    |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | name that   |             |             |
|             |             | is not a    |             |             |
|             |             | combination |             |             |
|             |             | of the      |             |             |
|             |             | firstName   |             |             |
|             |             | and         |             |             |
|             |             | lastName    |             |             |
|             |             | fields, the |             |             |
|             |             | name will   |             |             |
|             |             | be          |             |             |
|             |             | overwritten |             |             |
|             |             | when a user |             |             |
|             |             | saves the   |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | in the      |             |             |
|             |             | Bullhorn    |             |             |
|             |             | staffing    |             |             |
|             |             | application |             |             |
|             |             | .           |             |             |
|             |             | The name    |             |             |
|             |             | will change |             |             |
|             |             | to a        |             |             |
|             |             | combination |             |             |
|             |             | of the      |             |             |
|             |             | firstName   |             |             |
|             |             | and         |             |             |
|             |             | lastName    |             |             |
|             |             | fields.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| namePrefix  | String (5)  | ClientConta |             |             |
|             |             | ct's        |             |             |
|             |             | name        |             |             |
|             |             | prefix, for |             |             |
|             |             | example     |             |             |
|             |             | Dr., Ms,    |             |             |
|             |             | Mr., and so |             |             |
|             |             | forth.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| nameSuffix  | String (5)  | ClientConta |             |             |
|             |             | ct's        |             |             |
|             |             | name        |             |             |
|             |             | suffix, for |             |             |
|             |             | example Jr. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| nickName    | String      | ClientConta |             |             |
|             |             | ct's        |             |             |
|             |             | nickname.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| numEmployee | Integer     | Number of   | X           |             |
| s           |             | employees   |             |             |
|             |             | who report  |             |             |
|             |             | to this     |             |             |
|             |             | Contact.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| occupation  | String (50) | ClientConta |             |             |
|             |             | ct's        |             |             |
|             |             | job title.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| office      | String (40) | For         |             |             |
|             |             | companies   |             |             |
|             |             | with        |             |             |
|             |             | multiple    |             |             |
|             |             | locations,  |             |             |
|             |             | this field  |             |             |
|             |             | can be used |             |             |
|             |             | to indicate |             |             |
|             |             | which       |             |             |
|             |             | office this |             |             |
|             |             | contact     |             |             |
|             |             | works out   |             |             |
|             |             | of.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| owner       | To-one      | CorporateUs | X           |             |
|             | association | er          |             |             |
|             |             | who is the  |             |             |
|             |             | owner of    |             |             |
|             |             | this        |             |             |
|             |             | Contact     |             |             |
|             |             | record.     |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is    |             |             |
|             |             | user who    |             |             |
|             |             | creates the |             |             |
|             |             | ClientConta |             |             |
|             |             | ct.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| pager       | String (20) | ClientConta |             |             |
|             |             | ct's        |             |             |
|             |             | pager       |             |             |
|             |             | number.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| password    | String      | ClientConta | X           |             |
|             |             | ct's        |             |             |
|             |             | password    |             |             |
|             |             | for logging |             |             |
|             |             | in to       |             |             |
|             |             | Bullhorn.   |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is a  |             |             |
|             |             | randomly    |             |             |
|             |             | generated   |             |             |
|             |             | string.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| phone       | String (20) | ClientConta |             |             |
|             |             | ct's        |             |             |
|             |             | primary     |             |             |
|             |             | (work)      |             |             |
|             |             | telephone   |             |             |
|             |             | number.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| phone2      | String (20) | Alternate   |             |             |
|             |             | phone       |             |             |
|             |             | number.     |             |             |
|             |             | Typically   |             |             |
|             |             | used for    |             |             |
|             |             | the         |             |             |
|             |             | contact's   |             |             |
|             |             | home phone  |             |             |
|             |             | number.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| phone3      | String (20) | Alternate   |             |             |
|             |             | phone       |             |             |
|             |             | number.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| preferredCo | String (15) | Contact's   | X           |             |
| ntact       |             | preferred   |             |             |
|             |             | method of   |             |             |
|             |             | contact     |             |             |
|             |             | (For        |             |             |
|             |             | example,    |             |             |
|             |             | phone,      |             |             |
|             |             | email, and  |             |             |
|             |             | so forth.)  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| referredByP | Person      | Person who  |             |             |
| erson       |             | referred    |             |             |
|             |             | this        |             |             |
|             |             | ClientConta |             |             |
|             |             | ct.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| reportToPer | Person      | Person to   |             |             |
| son         |             | whom this   |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | reports.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| secondaryAd | Address     | ClientConta |             |             |
| dress       |             | ct's        |             |             |
|             |             | secondary   |             |             |
|             |             | (home)      |             |             |
|             |             | address:    |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 1           |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 2           |             |             |
|             |             |             |             |             |
|             |             | -   city    |             |             |
|             |             |             |             |             |
|             |             | -   state   |             |             |
|             |             |             |             |             |
|             |             | -   zip     |             |             |
|             |             |             |             |             |
|             |             | -   country |             |             |
|             |             | ID:         |             |             |
|             |             |             |             |             |
|             |             | > options:\ |             |             |
|             |             | > value: 1\ |             |             |
|             |             | > value: 2  |             |             |
|             |             |             |             |             |
|             |             | Use the     |             |             |
|             |             | following   |             |             |
|             |             | REST call   |             |             |
|             |             | to get the  |             |             |
|             |             | list of     |             |             |
|             |             | countryIDs  |             |             |
|             |             | and labels: |             |             |
|             |             |             |             |             |
|             |             | /meta/Clien |             |             |
|             |             | tContact?\  |             |             |
|             |             | fields=addr |             |             |
|             |             | ess(country |             |             |
|             |             | ID)         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| secondaryOw | To-many     | Ids of      |             |             |
| ners        | association | internal    |             |             |
|             |             | users who   |             |             |
|             |             | are         |             |             |
|             |             | secondary   |             |             |
|             |             | owners of   |             |             |
|             |             | this        |             |             |
|             |             | Contact.    |             |             |
|             |             | Note that   |             |             |
|             |             | the owner   |             |             |
|             |             | property is |             |             |
|             |             | used to     |             |             |
|             |             | store the   |             |             |
|             |             | ClientConta |             |             |
|             |             | ct’s        |             |             |
|             |             | primary     |             |             |
|             |             | owner,      |             |             |
|             |             | while this  |             |             |
|             |             | association |             |             |
|             |             | hold that   |             |             |
|             |             | person and  |             |             |
|             |             | any other   |             |             |
|             |             | owners of   |             |             |
|             |             | the         |             |             |
|             |             | Contact.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| skills      | To-many     | Ids of      |             |             |
|             | association | Skills that |             |             |
|             |             | the         |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | wants       |             |             |
|             |             | Candidates  |             |             |
|             |             | to have.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| smsOptIn    | Boolean     | Indicates   |             |             |
|             |             | whether the |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | has granted |             |             |
|             |             | permission  |             |             |
|             |             | to be sent  |             |             |
|             |             | messages    |             |             |
|             |             | via SMS.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| source      | String      | Source from |             |             |
|             | (200)       | which this  |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | was found.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| status      | String (30) | Status of   | X           |             |
|             |             | the         |             |             |
|             |             | contact;    |             |             |
|             |             | for         |             |             |
|             |             | example,    |             |             |
|             |             | New Lead,   |             |             |
|             |             | Active,     |             |             |
|             |             | Prospect,   |             |             |
|             |             | and so      |             |             |
|             |             | forth.      |             |             |
|             |             | Possible    |             |             |
|             |             | values can  |             |             |
|             |             | be          |             |             |
|             |             | configured  |             |             |
|             |             | using field |             |             |
|             |             | maps.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| timeZoneOff | Integer     | Indicates   |             |             |
| setEST      |             | the number  |             |             |
|             |             | of hours by |             |             |
|             |             | which the   |             |             |
|             |             | ClientConta |             |             |
|             |             | ct's        |             |             |
|             |             | time zone   |             |             |
|             |             | differs     |             |             |
|             |             | from        |             |             |
|             |             | Eastern     |             |             |
|             |             | Standard    |             |             |
|             |             | Time. For   |             |             |
|             |             | example,    |             |             |
|             |             | Pacific     |             |             |
|             |             | Standard    |             |             |
|             |             | Time is -3, |             |             |
|             |             | three hours |             |             |
|             |             | earlier     |             |             |
|             |             | than        |             |             |
|             |             | Eastern.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| type        | String (30) | Describes   | X           |             |
|             |             | the type of |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | (for        |             |             |
|             |             | example,    |             |             |
|             |             | Primary,    |             |             |
|             |             | Secondary,  |             |             |
|             |             | Target,     |             |             |
|             |             | Gatekeeper) |             |             |
|             |             | .           |             |             |
|             |             | Possible    |             |             |
|             |             | values can  |             |             |
|             |             | be          |             |             |
|             |             | configured  |             |             |
|             |             | using field |             |             |
|             |             | maps.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| username    | String      | ClientConta | X           |             |
|             |             | ct's        |             |             |
|             |             | username    |             |             |
|             |             | for logging |             |             |
|             |             | in to       |             |             |
|             |             | Bullhorn.   |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is    |             |             |
|             |             | \_\[random  |             |             |
|             |             | number\]    |             |             |
+-------------+-------------+-------------+-------------+-------------+

### ClientCorporation

Represents a company that is a client of a company; for example, a
company with jobs to fill.

The ClientCorporation entity supports the [massUpdate](#get-massupdate)
operations.

+-------------+-------------+-------------+-------------+-------------+
| **ClientCor | **Type**    | **Descripti | **Not       | **Read-only |
| poration**  |             | on**        | null**      | **          |
|             |             |             |             |             |
| **field**   |             |             |             |             |
+=============+=============+=============+=============+=============+
| id          | Integer     | Unique      | X           | X           |
|             |             | identifier  |             |             |
|             |             | for this    |             |             |
|             |             | entity.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| address     | Address     | ClientCorpo | X           |             |
|             |             | ration's    |             |             |
|             |             | main        |             |             |
|             |             | address:    |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 1           |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 2           |             |             |
|             |             |             |             |             |
|             |             | -   city    |             |             |
|             |             |             |             |             |
|             |             | -   state   |             |             |
|             |             |             |             |             |
|             |             | -   zip     |             |             |
|             |             |             |             |             |
|             |             | -   country |             |             |
|             |             | ID:         |             |             |
|             |             |             |             |             |
|             |             | > options:\ |             |             |
|             |             | > value: 1\ |             |             |
|             |             | > value: 2  |             |             |
|             |             |             |             |             |
|             |             | Use the     |             |             |
|             |             | following   |             |             |
|             |             | REST call   |             |             |
|             |             | to get the  |             |             |
|             |             | list of     |             |             |
|             |             | countryIDs  |             |             |
|             |             | and labels: |             |             |
|             |             |             |             |             |
|             |             | /meta/Clien |             |             |
|             |             | tCorporatio |             |             |
|             |             | n?\         |             |             |
|             |             | fields=addr |             |             |
|             |             | ess(country |             |             |
|             |             | ID)         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| annualReven | BigDecimal  | ClientCorpo | X           |             |
| ue          |             | ration's    |             |             |
|             |             | annual      |             |             |
|             |             | revenue in  |             |             |
|             |             | millions of |             |             |
|             |             | U.S.        |             |             |
|             |             | dollars.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| billingAddr | AddressWith | Address     |             |             |
| ess         | out-Country | that        |             |             |
|             |             | contains    |             |             |
|             |             | the address |             |             |
|             |             | to which    |             |             |
|             |             | bills       |             |             |
|             |             | should be   |             |             |
|             |             | sent for    |             |             |
|             |             | this        |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration.     |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 1           |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 2           |             |             |
|             |             |             |             |             |
|             |             | -   city    |             |             |
|             |             |             |             |             |
|             |             | -   state   |             |             |
|             |             |             |             |             |
|             |             | -   zip     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| billingCont | String      | Name of the |             |             |
| act         | (100)       | person to   |             |             |
|             |             | whom bills  |             |             |
|             |             | should be   |             |             |
|             |             | sent.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| billingFreq | String (20) | Frequency   |             |             |
| uency       |             | with which  |             |             |
|             |             | bills       |             |             |
|             |             | should be   |             |             |
|             |             | sent to the |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration:     |             |             |
|             |             | for         |             |             |
|             |             | example,    |             |             |
|             |             | Weekly,     |             |             |
|             |             | Bi-Weekly,  |             |             |
|             |             | Semi-Monthl |             |             |
|             |             | y,          |             |             |
|             |             | Monthly.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| billingPhon | String (20) | Phone       |             |             |
| e           |             | number of   |             |             |
|             |             | the billing |             |             |
|             |             | contact     |             |             |
|             |             | person.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| businessSec | String      | Comma-separ |             |             |
| torList     |             | ated        |             |             |
|             |             | list of     |             |             |
|             |             | BusinessSec |             |             |
|             |             | tors        |             |             |
|             |             | in which    |             |             |
|             |             | the         |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration      |             |             |
|             |             | operates.   |             |             |
|             |             | See field   |             |             |
|             |             | map data    |             |             |
|             |             | for a list  |             |             |
|             |             | of possible |             |             |
|             |             | values.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| childClient | To-many     | ClientCorpo |             |             |
| Corporation | association | rations     |             |             |
| s           |             | that are    |             |             |
|             |             | children of |             |             |
|             |             | this one.   |             |             |
|             |             | Included    |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration      |             |             |
|             |             | fields are: |             |             |
|             |             |             |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | name        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| clientCorpo | To-many     | **Not       |             |             |
| rationCerti | association | supported   |             |             |
| fications   |             | in this     |             |             |
|             |             | release.**  |             |             |
|             |             |             |             |             |
|             |             | ClientCorpo |             |             |
|             |             | rationCerti |             |             |
|             |             | fications   |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | corporation |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| clientConta | To-many     | ClientConta |             |             |
| cts         | association | cts         |             |             |
|             |             | who work at |             |             |
|             |             | this        |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration.     |             |             |
|             |             | Included    |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | fields are: |             |             |
|             |             |             |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | firstName   |             |             |
|             |             |             |             |             |
|             |             | lastName    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| companyDesc | String      | Text        |             |             |
| ription     |             | description |             |             |
|             |             | of the      |             |             |
|             |             | company.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| companyURL  | String      | Company's   |             |             |
|             | (100)       | website     |             |             |
|             |             | URL. May    |             |             |
|             |             | use http:// |             |             |
|             |             | but not     |             |             |
|             |             | required.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| competitors | String      | Company's   |             |             |
|             |             | major       |             |             |
|             |             | competitors |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| culture     | String      | Text        |             |             |
|             |             | description |             |             |
|             |             | of the      |             |             |
|             |             | corporate   |             |             |
|             |             | culture.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customDate1 | Timestamp   | Configurabl |             |             |
| -3          |             | e           |             |             |
|             |             | date fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customFloat | Double      | Configurabl |             |             |
| 1-3         |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customInt1- | Integer     | Configurabl |             |             |
| 3           |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customObjec | CustomObjec | Fields to   |             |             |
| t1s         | t           | which       |             |             |
| to 10s      |             | custom      |             |             |
|             |             | objects can |             |             |
|             |             | be          |             |             |
|             |             | assigned.   |             |             |
|             |             | For more    |             |             |
|             |             | information |             |             |
|             |             | about       |             |             |
|             |             | custom      |             |             |
|             |             | objects,    |             |             |
|             |             | see the     |             |             |
|             |             | Bullhorn    |             |             |
|             |             | Resource    |             |             |
|             |             | Center and  |             |             |
|             |             | the         |             |             |
|             |             | following   |             |             |
|             |             | article on  |             |             |
|             |             | using the   |             |             |
|             |             | REST API    |             |             |
|             |             | with custom |             |             |
|             |             | objects:\   |             |             |
|             |             | <http://dev |             |             |
|             |             | eloper.bull |             |             |
|             |             | horn.com/ar |             |             |
|             |             | ticles/cust |             |             |
|             |             | omobjects>  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customText1 | String      | Configurabl |             |             |
| -20         | (100)       | e           |             |             |
|             |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customTextB | String      | Configurabl |             |             |
| lock1-5     |             | e           |             |             |
|             |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateAdded   | Timestamp   | Date on     | X           | X           |
|             |             | which this  |             |             |
|             |             | record was  |             |             |
|             |             | created in  |             |             |
|             |             | the         |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateFounded | Timestamp   | Date on     |             |             |
|             |             | which the   |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration      |             |             |
|             |             | was         |             |             |
|             |             | founded.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateLastMod | Timestamp   | Date on     |             |             |
| ified       |             | which the   |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration      |             |             |
|             |             | was last    |             |             |
|             |             | modified.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| department  | To-one      | Department  |             |             |
|             | association | in the      |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration      |             |             |
|             |             | that has    |             |             |
|             |             | primary     |             |             |
|             |             | responsibil |             |             |
|             |             | ity         |             |             |
|             |             | for this    |             |             |
|             |             | client (for |             |             |
|             |             | example, a  |             |             |
|             |             | regional    |             |             |
|             |             | office).    |             |             |
|             |             |             |             |             |
|             |             | Default     |             |             |
|             |             | value is    |             |             |
|             |             | primary     |             |             |
|             |             | department  |             |             |
|             |             | of user who |             |             |
|             |             | adds the    |             |             |
|             |             | record.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| feeArrangem | Double      | Fee,        | X           |             |
| ent         |             | expressed   |             |             |
|             |             | as a        |             |             |
|             |             | percentage, |             |             |
|             |             | that this   |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration      |             |             |
|             |             | will pay    |             |             |
|             |             | for each    |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| funding     | String      | Current     |             |             |
|             |             | funding     |             |             |
|             |             | status of   |             |             |
|             |             | the         |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| industryLis | String      | Comma-separ |             |             |
| t           |             | ated        |             |             |
|             |             | list of     |             |             |
|             |             | industries  |             |             |
|             |             | in which    |             |             |
|             |             | the company |             |             |
|             |             | operates.   |             |             |
|             |             | See field   |             |             |
|             |             | map data    |             |             |
|             |             | for the     |             |             |
|             |             | list used   |             |             |
|             |             | by a        |             |             |
|             |             | particular  |             |             |
|             |             | company.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| invoiceForm | String      | Configurabl |             |             |
| at          |             | e           |             |             |
|             |             | field to be |             |             |
|             |             | passed to a |             |             |
|             |             | back-office |             |             |
|             |             | system to   |             |             |
|             |             | indicate    |             |             |
|             |             | how to      |             |             |
|             |             | group       |             |             |
|             |             | invoices    |             |             |
|             |             | for this    |             |             |
|             |             | company     |             |             |
|             |             | (Per        |             |             |
|             |             | Placement,  |             |             |
|             |             | Per Billing |             |             |
|             |             | Contact,    |             |             |
|             |             | and so      |             |             |
|             |             | forth.)     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| invoiceGrou | To-many     | **Not       |             |             |
| ps          | association | supported   |             |             |
|             |             | in this     |             |             |
|             |             | release.**  |             |             |
|             |             |             |             |             |
|             |             | Invoice     |             |             |
|             |             | groups      |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| invoices    | To-many     | **Not       |             |             |
|             | association | supported   |             |             |
|             |             | in this     |             |             |
|             |             | release.**  |             |             |
|             |             |             |             |             |
|             |             | Invoices    |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | corporation |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| leads       | To-many     | Leads       |             |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| name        | String      | Name of the | X           |             |
|             | (100)       | company.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| notes       | String      | Free text   |             |             |
|             |             | field for   |             |             |
|             |             | entering    |             |             |
|             |             | any         |             |             |
|             |             | comments or |             |             |
|             |             | notes about |             |             |
|             |             | the         |             |             |
|             |             | company.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| numEmployee | Integer     | Total       | X           |             |
| s           |             | number of   |             |             |
|             |             | people      |             |             |
|             |             | employed by |             |             |
|             |             | the         |             |             |
|             |             | company.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| numOffices  | Integer     | Total       | X           |             |
|             |             | number of   |             |             |
|             |             | offices for |             |             |
|             |             | the         |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| Owners      | To-many     | Owners of   |             |             |
|             | association | the         |             |             |
|             |             | ClientConta |             |             |
|             |             | cts         |             |             |
|             |             | for this    |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| ownerShip   | String (30) | Status of   |             |             |
|             |             | the         |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration's    |             |             |
|             |             | current     |             |             |
|             |             | ownership   |             |             |
|             |             | (for        |             |             |
|             |             | example,    |             |             |
|             |             | Public,     |             |             |
|             |             | Private).   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| parentClien | To-one      | ClientCorpo |             |             |
| tCorporatio | association | ration      |             |             |
| n           |             | that is a   |             |             |
|             |             | parent of   |             |             |
|             |             | this one.   |             |             |
|             |             | Included    |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration      |             |             |
|             |             | fields are: |             |             |
|             |             |             |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | name        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| phone       | String (20) | Main phone  |             |             |
|             |             | number for  |             |             |
|             |             | the         |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| rateCards   | To-many     | **Not       |             |             |
|             | association | supported   |             |             |
|             |             | in this     |             |             |
|             |             | release.**  |             |             |
|             |             |             |             |             |
|             |             | Rate cards  |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| revenue     | String      | Estimated   |             |             |
|             |             | annual      |             |             |
|             |             | revenue in  |             |             |
|             |             | millions    |             |             |
|             |             | for the     |             |             |
|             |             | company.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| status      | String (30) | Status of   | X           |             |
|             |             | the         |             |             |
|             |             | business    |             |             |
|             |             | relationshi |             |             |
|             |             | p           |             |             |
|             |             | with this   |             |             |
|             |             | company;    |             |             |
|             |             | for         |             |             |
|             |             | example,    |             |             |
|             |             | Prospect,   |             |             |
|             |             | Active, and |             |             |
|             |             | so forth.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| taxRate     | Double      | Tax rate    |             |             |
|             |             | for the     |             |             |
|             |             | company     |             |             |
|             |             | expressed   |             |             |
|             |             | in          |             |             |
|             |             | percentage: |             |             |
|             |             | for         |             |             |
|             |             | example,    |             |             |
|             |             | 28%. Passed |             |             |
|             |             | to a        |             |             |
|             |             | back-office |             |             |
|             |             | system if   |             |             |
|             |             | applicable. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| tickerSymbo | String (20) | Stock       |             |             |
| l           |             | market      |             |             |
|             |             | ticker      |             |             |
|             |             | symbol for  |             |             |
|             |             | the         |             |             |
|             |             | company.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| workWeekSta | Integer     | Day of the  |             |             |
| rt          |             | week on     |             |             |
|             |             | which the   |             |             |
|             |             | work week   |             |             |
|             |             | starts for  |             |             |
|             |             | this        |             |             |
|             |             | company.    |             |             |
|             |             | 1=Sunday,   |             |             |
|             |             | 2=Monday,   |             |             |
|             |             | and so      |             |             |
|             |             | forth.      |             |             |
+-------------+-------------+-------------+-------------+-------------+

### CorporationDepartment

Represents a department in a corporation.

  ----------------------------------------------------------------------------------------------------------------------------------------------------------
  **CorporationDepartment**   **Type**       **Description**                                                                  **Not null**   **Read-Only**
                                                                                                                                             
  **field**                                                                                                                                  
  --------------------------- -------------- -------------------------------------------------------------------------------- -------------- ---------------
  id                          Integer        Unique identifier for this entity.                                               X              X

  dateAdded                   Timestamp      Date when this record was created in the Bullhorn system.                        X              X

  description                 String (255)   Text description of the CorporationDepartment.                                                   

  enabled                     Boolean        Indicates whether this CorporationDepartment is enabled for use in the system.   X              X

  name                        String (100)   Name of the CorporationDepartment.                                               X              X
  ----------------------------------------------------------------------------------------------------------------------------------------------------------

 

### ClientCorporationAppointment

Association entity between ClientCorporation, ClientContact, and
Appointment entities. This entity is read-only and is only created when
the companyStampOnActivitiesEnabled corporation setting is enabled.

  ---------------------------------------------------------------------------------------------------------------------------
  **ClientCorporationAppointment**   **Type**             **Description**                      **Not null**   **Read-Only**
                                                                                                              
  **field**                                                                                                   
  ---------------------------------- -------------------- ------------------------------------ -------------- ---------------
  id                                 Integer              Unique identifier for this entity.   X              X

  clientCorporation                  To-one association   Associated ClientCorporation.                       X

  clientContact                      To-one association   Associated ClientContact.                            X

  appointment                        To-one association   Associated Appointment.                             X
  ---------------------------------------------------------------------------------------------------------------------------

 

### ClientCorporationNote

Association entity between ClientCorporation, ClientContact, and Note
entities. This entity is read-only and is only created when the
companyStampOnActivitiesEnabled corporation setting is enabled.

  --------------------------------------------------------------------------------------------------------------------
  **ClientCorporationNote**   **Type**             **Description**                      **Not null**   **Read-Only**
                                                                                                       
  **field**                                                                                            
  --------------------------- -------------------- ------------------------------------ -------------- ---------------
  id                          Integer              Unique identifier for this entity.   X              X

  clientCorporation           To-one association   Associated ClientCorporation.                       X

  clientContact               To-one association   Associated ClientContact.                            X

  note                        To-one association   Associated Note.                                    X
  --------------------------------------------------------------------------------------------------------------------

 

### ClientCorporationTask

Association entity between ClientCorporation, ClientContact, and Task
entities. This entity is read-only and is only created when the
companyStampOnActivitiesEnabled corporation setting is enabled.

  ---------------------------------------------------------------------------------------------------------------------------
  **ClientCorporationAppointment**   **Type**             **Description**                      **Not null**   **Read-Only**
                                                                                                              
  **field**                                                                                                   
  ---------------------------------- -------------------- ------------------------------------ -------------- ---------------
  id                                 Integer              Unique identifier for this entity.   X              X

  clientCorporation                  To-one association   Associated ClientCorporation.                       X

  clientContact                      To-one association   Associated ClientContact.                            X

  task                               To-one association   Associated Task.                                    X
  ---------------------------------------------------------------------------------------------------------------------------

 

### CorporateUser

Represents an Internal user at your organization. CorporateUser is
read-only. 

+-------------+-------------+-------------+-------------+-------------+
| **Corporate | **Type**    | **Descripti | **Not       | **Read-only |
| User**      |             | on**        | null**      | **          |
|             |             |             |             |             |
| **field**   |             |             |             |             |
+=============+=============+=============+=============+=============+
| id          | Integer     | Unique      | X           | X           |
|             |             | identifier  |             |             |
|             |             | for this    |             |             |
|             |             | entity.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customDate1 | Timestamp   | Configurabl |             |             |
| to 3        |             | e           |             |             |
|             |             | date fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customFloat | Double      | Configurabl |             |             |
| 1           |             | e           |             |             |
| to 3        |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customInt1  | Integer     | Configurabl |             |             |
| to 3        |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customText1 | String      | Configurabl |             |             |
| to 20       |             | e           |             |             |
|             |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateLastCom | Timestamp   | Date on     |             |             |
| ment        |             | which       |             |             |
|             |             | CorporateUs |             |             |
|             |             | er’s        |             |             |
|             |             | last        |             |             |
|             |             | comment was |             |             |
|             |             | made.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| departments | To-many     | Ids of      |             |             |
|             | association | departments |             |             |
|             |             | to which    |             |             |
|             |             | the         |             |             |
|             |             | CorporateUs |             |             |
|             |             | er          |             |             |
|             |             | belongs.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| address     | Address     | CorporateUs | X           |             |
|             |             | er’s        |             |             |
|             |             | main        |             |             |
|             |             | address:    |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 1           |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 2           |             |             |
|             |             |             |             |             |
|             |             | -   city    |             |             |
|             |             |             |             |             |
|             |             | -   state   |             |             |
|             |             |             |             |             |
|             |             | -   zip     |             |             |
|             |             |             |             |             |
|             |             | -   country |             |             |
|             |             | ID:         |             |             |
|             |             |             |             |             |
|             |             | > options:\ |             |             |
|             |             | > value: 1\ |             |             |
|             |             | > value: 2  |             |             |
|             |             |             |             |             |
|             |             | Use the     |             |             |
|             |             | following   |             |             |
|             |             | REST call   |             |             |
|             |             | to get the  |             |             |
|             |             | list of     |             |             |
|             |             | countryIDs  |             |             |
|             |             | and labels: |             |             |
|             |             |             |             |             |
|             |             | /meta/Corpo |             |             |
|             |             | rateUser?\  |             |             |
|             |             | fields=addr |             |             |
|             |             | ess(country |             |             |
|             |             | ID)         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| email       | String      | Primary     |             |             |
|             | (100)       | email       |             |             |
|             |             | address.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| email2      | String      | Additional  |             |             |
|             | (100)       | email       |             |             |
|             |             | address 2.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| email3      | String      | Additional  |             |             |
|             | (100)       | email       |             |             |
|             |             | address 3.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| emailNotify | Boolean     | Indicates   |             | X           |
|             |             | whether the |             |             |
|             |             | user has    |             |             |
|             |             | chosen to   |             |             |
|             |             | be notified |             |             |
|             |             | via pop-up  |             |             |
|             |             | in the      |             |             |
|             |             | Bullhorn    |             |             |
|             |             | application |             |             |
|             |             | when a new  |             |             |
|             |             | email       |             |             |
|             |             | message     |             |             |
|             |             | arrives.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| emailSignat | String      | Contents of |             | X           |
| ure         |             | the user's  |             |             |
|             |             | email       |             |             |
|             |             | signature.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| enabled     | Boolean     | Indicates   | X           | X           |
|             |             | whether the |             |             |
|             |             | user may    |             |             |
|             |             | log in to   |             |             |
|             |             | the         |             |             |
|             |             | Bullhorn    |             |             |
|             |             | application |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| externalEma | String      | User’s      |             | X           |
| il          |             | external    |             |             |
|             |             | (non-Bullho |             |             |
|             |             | rn)         |             |             |
|             |             | email       |             |             |
|             |             | address.    |             |             |
|             |             | Used for    |             |             |
|             |             | forwarding  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| firstName   | String      | First name  |             |             |
|             |             | of the      |             |             |
|             |             | CorporateUs |             |             |
|             |             | er.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| inboundEmai | Boolean     | Indicates   |             | X           |
| lEnabled    |             | whether the |             |             |
|             |             | user can    |             |             |
|             |             | receive     |             |             |
|             |             | email       |             |             |
|             |             | through the |             |             |
|             |             | Bullhorn    |             |             |
|             |             | application |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isDayLightS | Boolean     | Indicates   |             |             |
| avingsTime  |             | whether it  |             |             |
|             |             | is daylight |             |             |
|             |             | savings     |             |             |
|             |             | time.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isDeleted   | Boolean     | Indicates   |             |             |
|             |             | whether     |             |             |
|             |             | CorporateUs |             |             |
|             |             | er          |             |             |
|             |             | is deleted. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isLockedOut | Boolean     | Indicates   |             |             |
|             |             | whether the |             |             |
|             |             | CorporateUs |             |             |
|             |             | er          |             |             |
|             |             | is locked   |             |             |
|             |             | out.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isOutboundF | Boolean     | Indicates   |             | X           |
| axEnabled   |             | whether the |             |             |
|             |             | user has    |             |             |
|             |             | permission  |             |             |
|             |             | to send     |             |             |
|             |             | faxes.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| jobAssignme | To-many     | JobOrders   |             |             |
| nts         | association | that have   |             |             |
|             |             | been        |             |             |
|             |             | assigned to |             |             |
|             |             | this        |             |             |
|             |             | CorporateUs |             |             |
|             |             | er.         |             |             |
|             |             | Included    |             |             |
|             |             | JobOrder    |             |             |
|             |             | fields are: |             |             |
|             |             |             |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | title       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| loginRestri | LoginRestri | A group of  |             |             |
| ctions      | ctions      | available   |             |             |
|             |             | login       |             |             |
|             |             | restriction |             |             |
|             |             | s,          |             |             |
|             |             | including   |             |             |
|             |             | time, date, |             |             |
|             |             | and IP      |             |             |
|             |             | address.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| massMailOpt | Boolean     | Indicates   |             |             |
| Out         |             | whether the |             |             |
|             |             | CorporateUs |             |             |
|             |             | er          |             |             |
|             |             | opted out   |             |             |
|             |             | of mass     |             |             |
|             |             | mailings.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| middleName  | String (50) | Middle name |             |             |
|             |             | of the      |             |             |
|             |             | CorporateUs |             |             |
|             |             | er.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| mobile      | String (20) | Mobile      |             |             |
|             |             | phone       |             |             |
|             |             | number of   |             |             |
|             |             | the         |             |             |
|             |             | CorporateUs |             |             |
|             |             | er.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| name        | String      | Name of the |             |             |
|             | (100)       | CorporateUs |             |             |
|             |             | er.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| namePrefix  | String (5)  | Name prefix |             |             |
|             |             | of the      |             |             |
|             |             | CorporateUs |             |             |
|             |             | er.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| nameSuffix  | String (5)  | Name suffix |             |             |
|             |             | of the      |             |             |
|             |             | CorporateUs |             |             |
|             |             | er.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| nickName    | String (50) | Nickname of |             |             |
|             |             | the         |             |             |
|             |             | CorporateUs |             |             |
|             |             | er.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| occupation  | String (50) | Occupation  |             |             |
|             |             | of the      |             |             |
|             |             | CorporateUs |             |             |
|             |             | er.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| pager       | String (20) | Pager       |             |             |
|             |             | number of   |             |             |
|             |             | the         |             |             |
|             |             | CorporateUs |             |             |
|             |             | er.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| password    | String      | CorporateUs | X           |             |
|             |             | er’s        |             |             |
|             |             | password    |             |             |
|             |             | for logging |             |             |
|             |             | in to       |             |             |
|             |             | Bullhorn.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| phone to    | String (20) | Phone       |             |             |
| phone3      |             | number of   |             |             |
|             |             | the         |             |             |
|             |             | CorporateUs |             |             |
|             |             | er.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| smsOptIn    | Boolean     | Indicates   |             |             |
|             |             | whether the |             |             |
|             |             | CorporateUs |             |             |
|             |             | er          |             |             |
|             |             | has granted |             |             |
|             |             | permission  |             |             |
|             |             | to be sent  |             |             |
|             |             | messages    |             |             |
|             |             | via SMS.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| taskAssignm | Task        | Not         |             |             |
| ents        |             | supported   |             |             |
|             |             | in this     |             |             |
|             |             | release.    |             |             |
|             |             |             |             |             |
|             |             | Tasks that  |             |             |
|             |             | have been   |             |             |
|             |             | assigned to |             |             |
|             |             | this        |             |             |
|             |             | CorporateUs |             |             |
|             |             | er,         |             |             |
|             |             | including   |             |             |
|             |             | those owned |             |             |
|             |             | by the      |             |             |
|             |             | user.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| timeZoneOff | Integer     | Indicates   |             |             |
| setEST      |             | the number  |             |             |
|             |             | of hours by |             |             |
|             |             | which the   |             |             |
|             |             | CorporateUs |             |             |
|             |             | er’s        |             |             |
|             |             | time zone   |             |             |
|             |             | differs     |             |             |
|             |             | from        |             |             |
|             |             | Eastern     |             |             |
|             |             | Standard    |             |             |
|             |             | Time. For   |             |             |
|             |             | example,    |             |             |
|             |             | Pacific     |             |             |
|             |             | Standard    |             |             |
|             |             | Time is -3, |             |             |
|             |             | three hours |             |             |
|             |             | earlier     |             |             |
|             |             | than        |             |             |
|             |             | Eastern.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| username    | String      | CorporateUs | X           |             |
|             | (100)       | er’s        |             |             |
|             |             | username    |             |             |
|             |             | for logging |             |             |
|             |             | in to       |             |             |
|             |             | Bullhorn.   |             |             |
+-------------+-------------+-------------+-------------+-------------+

### Country

Represents a country.

  -------------------------------------------------------------------------------------------------------------------------
  **Country**   **Type**              **Description**                                        **Not null**   **Read-only**
                                                                                                            
  **field**                                                                                                 
  ------------- --------------------- ------------------------------------------------------ -------------- ---------------
  id            Integer               Unique identifier for this entity.                     X              X

  code          String                Code associated with this Country.                                     

  name          String                Name of the Country.                                   X               

  states        To-many association   Ids of States that are associated with this Country.                  
  -------------------------------------------------------------------------------------------------------------------------

### CustomAction

Represents a Bullhorn custom action. For more information about custom
actions, see:\
<http://developer.bullhorn.com/doc/version_2-0/understanding_custom_components.htm>

  ---------------------------------------------------------------------------------------------------------
  **CustomAction**   **Type**   **Description**                              **Not null**   **Read-only**
                                                                                            
  **field**                                                                                 
  ------------------ ---------- -------------------------------------------- -------------- ---------------
  id                 Integer    Unique identifier for this entity.           X              X

  actionOrder        Integer                                                                 

  apiKeyID           Integer    Bullhorn API key id.                                         

  componentURL       String     URL of CustomAction.                                        

  enabled            Boolean    Indicates whether CustomAction is enabled.                  

  entity             String     Entity to which CustomAction applies.        X              

  name               String     Name of CustomAction.                                       
  ---------------------------------------------------------------------------------------------------------

### Department

Represents a department for a user's corporation. Users can
create, read, and update departments. Only users with the  Account
Administration entitlement can create and update departments.

  **Department field**   **Type**       **Description**                            **Not null**   **Read-only**
  ---------------------- -------------- ------------------------------------------ -------------- ---------------
  id                     Integer        Unique Identifier for this entity.         X              X
  description            String (255)   Department description.                    X              
  enabled                Boolean        Indicates whether department is enabled.                  
  name                   String(100)    Department name.                           X              

[]{#_Toc467587093 .anchor}**{Entity}FileAttachment**

Read-only entity that represents a file associated with an entity. The
GET /entity/{EntityType}\]/{entityID}/fileAttachments call returns a
list of files associated with that entity. Entity can be
ClientCorporation, JobOrder, Candidate, ClientContact, Opportunity, or
Placement.

  -------------------------------------------------------------------------------------------------------------------------------------
  **{Entity}FileAttachement**   **Type**              **Description**                                    **Not null**   **Read-only**
                                                                                                                        
  **field**                                                                                                             
  ----------------------------- --------------------- -------------------------------------------------- -------------- ---------------
  id                            Integer               Unique identifier for the entity.                  X              X

  contentSubType                String                Content subtype for the file.                                     X

  contentType                   String                Content type for the file.                                        X

  dateAdded                     Timestamp             When the file was added.                           X              X

  description                   String                Description for the file.                                         X

  directory                     String                Location of the file on server.                                   X

  distribution                  String                Distribution type for the file.                                   X

  externalID                    String                Third-party ID of the file.                                       X

  fileExtension                 String                Extension type of the file.                        X              X

  fileSize                      Integer               Size on disk of the file.                          X              X

  fileType                      String                Type of the file; for example, SAMPLE.                            X

  isCopied                      Boolean               Whether the file was copied from another entity.                  X

  isDeleted                     Boolean               Whether file is deleted                            X              X

  isOpen                        Boolean               Whether file is open.                              X              X

  isPrivate                     Boolean               Whether the file is private.                       X              X

  isSendOut                     Boolean               Whether the file is from a sendout.                X              X

  {entity}                      To-one association    Entity associated with the file.                   X              X

  name                          String                Name of the file.                                  X              X

  type                          String                Type of the file; for example, Resume.                            X

  usersSharedWith               To-many association   Users with whom the file is shared.                               X

  uuid                          String                Globally unique random ID.                         X              X

                                                                                                                        
  -------------------------------------------------------------------------------------------------------------------------------------

### HousingComplex

Represents a housing complex that a ClientCorporation uses when
providing housing for certain types of employees.

 

+-------------+-------------+-------------+-------------+-------------+
| **HousingCo | **Type**    | **Descripti | **Not       | **Read-only |
| mplex       |             | on**        | null**      | **          |
| field**     |             |             |             |             |
+=============+=============+=============+=============+=============+
| id          | Integer     | Unique      | X           | X           |
|             |             | identifier  |             |             |
|             |             | for this    |             |             |
|             |             | entity.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| address     | Address     | HousingComp |             |             |
|             |             | lex         |             |             |
|             |             | address:    |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 1           |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 2           |             |             |
|             |             |             |             |             |
|             |             | -   city    |             |             |
|             |             |             |             |             |
|             |             | -   state   |             |             |
|             |             |             |             |             |
|             |             | -   zip     |             |             |
|             |             |             |             |             |
|             |             | -   country |             |             |
|             |             | ID:         |             |             |
|             |             |             |             |             |
|             |             | > options:\ |             |             |
|             |             | > value: 1\ |             |             |
|             |             | > value: 2  |             |             |
|             |             |             |             |             |
|             |             | /meta/Housi |             |             |
|             |             | ngComplex?\ |             |             |
|             |             | fields=addr |             |             |
|             |             | ess(country |             |             |
|             |             | ID)         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| billingCont | Integer     | The         |             |             |
| actID       |             | Bullhorn    |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | ID of the   |             |             |
|             |             | billing     |             |             |
|             |             | contact     |             |             |
|             |             | person for  |             |             |
|             |             | this        |             |             |
|             |             | housing     |             |             |
|             |             | complex.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| comments    | String      | Free-text   |             |             |
|             |             | comments    |             |             |
|             |             | about this  |             |             |
|             |             | housing     |             |             |
|             |             | complex.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| complexMana | Integer     | The         |             |             |
| gerID       |             | Bullhorn    |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | ID of the   |             |             |
|             |             | housing     |             |             |
|             |             | complex     |             |             |
|             |             | manager.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| complexOwne | Integer     | The         |             |             |
| rID         |             | Bullhorn    |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | ID of the   |             |             |
|             |             | housing     |             |             |
|             |             | complex     |             |             |
|             |             | owner.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| contactName | String      | Name of the |             |             |
|             | (100)       | contact     |             |             |
|             |             | person for  |             |             |
|             |             | the housing |             |             |
|             |             | complex,    |             |             |
|             |             | generally a |             |             |
|             |             | facilities  |             |             |
|             |             | manager or  |             |             |
|             |             | superintend |             |             |
|             |             | ent.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customConta | Integer     | Configurabl |             |             |
| ctID1       |             | e           |             |             |
| to 3        |             | fields for  |             |             |
|             |             | identifying |             |             |
|             |             | additional  |             |             |
|             |             | ClientConta |             |             |
|             |             | cts who     |             |             |
|             |             | have roles  |             |             |
|             |             | related to  |             |             |
|             |             | this        |             |             |
|             |             | housing     |             |             |
|             |             | complex.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customDate1 | Timestamp   | Configurabl |             |             |
| to 3        |             | e           |             |             |
|             |             | date fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customFloat | Double      | Configurabl | X           |             |
| 1           |             | e           |             |             |
| to 3        |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customInt1  | Integer     | Configurabl |             |             |
| to 3        |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customText1 | String      | Configurabl |             |             |
| to 5        | (100)       | e           |             |             |
|             |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customTextB | String      | Configurabl |             |             |
| lock1       |             | e           |             |             |
| to 5        |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateAdded   | Timestamp   | The date on | X           |             |
|             |             | which this  |             |             |
|             |             | record was  |             |             |
|             |             | created in  |             |             |
|             |             | the         |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| fax         | String (20) | Fax number  |             |             |
|             |             | for the     |             |             |
|             |             | housing     |             |             |
|             |             | complex.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isDeleted   | Boolean     | Indicates   | X           |             |
|             |             | whether     |             |             |
|             |             | this record |             |             |
|             |             | has been    |             |             |
|             |             | marked as   |             |             |
|             |             | deleted in  |             |             |
|             |             | the         |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| name        | String      | Name of the | X           |             |
|             | (100)       | housing     |             |             |
|             |             | complex.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| owner       | Integer     | CorporateUs | X           |             |
|             |             | er          |             |             |
|             |             | who is the  |             |             |
|             |             | owner of    |             |             |
|             |             | this        |             |             |
|             |             | housing     |             |             |
|             |             | complex.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| phone       | String (20) | Primary     |             |             |
|             |             | phone       |             |             |
|             |             | number of   |             |             |
|             |             | the housing |             |             |
|             |             | complex.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| whitelistCl | To-many     | Set of      |             |             |
| ientCorpora | association | ClientCorpo |             |             |
| tions       |             | rations     |             |             |
|             |             | to use this |             |             |
|             |             | housing     |             |             |
|             |             | complex.    |             |             |
+-------------+-------------+-------------+-------------+-------------+

 

### JobBoardPost

Represents a view into a JobOrder entity with information typically used
in public job boards. JobBoardPost is a read-only entity.

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **JobBoardPost**     **Type**              **Description**                                                                                                                              **Not null**   **Read-only**
                                                                                                                                                                                                         
  **field**                                                                                                                                                                                              
  -------------------- --------------------- -------------------------------------------------------------------------------------------------------------------------------------------- -------------- ---------------
  id                   Integer               Unique identifier for this entity.                                                                                                           X              X

  address              Address               Address of the hiring company; when the record is created in the Bullhorn application, this data is pulled from the client contact record.                   X

  benefits             String                Text description of benefits offered with this job.                                                                                                          X

  bonusPackage         String                Text description of the bonus package offered with this job.                                                                                                 X

  categories           To-many association   IDs of Categories associated with this job.                                                                                                                  X

  dateAdded            Timestamp             Date when this record was created in the Bullhorn system.                                                                                                   X

  dateEnd              Timestamp             Date when the job will end (if applicable).                                                                                                                  X

  dateLastPublished    Timestamp             Date when this record was last published to the 'Corporate' Job Board.                                                                                      X

  employmentType       String (200)          Type of employment offered: for example, contract, permanent, and so forth. Determines which of the five job types are used.                 X               X

  isPublic             Boolean               Controls whether a job appears on the Bullhorn job board (if in use). Only 3 values allows, -1, 0, 1.                                                        X

  isOpen               Boolean               Indicates whether the job is open.                                                                                                                          X 

  payRate              BigDecimal            Pay rate offered with this job.                                                                                                                              X

  publicDescription    String (200000)       Description of this job for use on public job boards.                                                                                                       X 

  publishedCategory    To-one association    The category that was last selected when publishing the job. Included Category fields are:                                                                   X
                                                                                                                                                                                                         
                                             id                                                                                                                                                          
                                                                                                                                                                                                         
                                             name                                                                                                                                                        

  publishedZip         String (18)           Published Zip Code of the job location.                                                                                                                     X 

  responseUser         To-one association    ID of CorporateUser to whom submissions should be sent.                                                                                                      X

  salary               BigDecimal            Salary offered for this job.                                                                                                                                 X

  salaryUnit           String (12)           Salary unit represented by the range (e.g. per hour, yearly).                                                                                                X

  startDate            Timestamp             Desired start date for the position.                                                                                                         X              X

  title                String (100)          Job title.                                                                                                                                                   X

  travelRequirements   String (50)           Text description of the amount of travel required for this job.                                                                                              X

  willRelocate         Boolean               Indicates whether the hiring company will provide relocation assistance.                                                                                     X

  willSponsor          Boolean               Indicates whether the hiring company is willing to sponsor an employee on a work visa.                                                                       X

  yearsRequired        Integer               Number of years of experience required for the job.                                                                                                          X
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  

### JobOrder

Represents an open job to be filled.

The JobOrder entity supports the [massUpdate](#get-massupdate)
operations.

+-------------+-------------+-------------+-------------+-------------+
| **JobOrder* | **Type**    | **Descripti | **Not       | **Read-only |
| *           |             | on**        | null**      | **          |
|             |             |             |             |             |
| **field**   |             |             |             |             |
+=============+=============+=============+=============+=============+
| id          | Integer     | Unique      | X           | X           |
|             |             | identifier  |             |             |
|             |             | for this    |             |             |
|             |             | entity.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| address     | Address1    | Address of  |             |             |
|             |             | the hiring  |             |             |
|             |             | company;    |             |             |
|             |             | when the    |             |             |
|             |             | record is   |             |             |
|             |             | created in  |             |             |
|             |             | the         |             |             |
|             |             | Bullhorn    |             |             |
|             |             | application |             |             |
|             |             | ,           |             |             |
|             |             | this data   |             |             |
|             |             | is pulled   |             |             |
|             |             | from the    |             |             |
|             |             | client      |             |             |
|             |             | contact     |             |             |
|             |             | record.     |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 1           |             |             |
|             |             |             |             |             |
|             |             | -   address |             |             |
|             |             | 2           |             |             |
|             |             |             |             |             |
|             |             | -   city    |             |             |
|             |             |             |             |             |
|             |             | -   state   |             |             |
|             |             |             |             |             |
|             |             | -   zip     |             |             |
|             |             |             |             |             |
|             |             | -   country |             |             |
|             |             | ID:         |             |             |
|             |             |             |             |             |
|             |             | > options:\ |             |             |
|             |             | > value: 1\ |             |             |
|             |             | > value: 2  |             |             |
|             |             |             |             |             |
|             |             | Use the     |             |             |
|             |             | following   |             |             |
|             |             | REST call   |             |             |
|             |             | to get the  |             |             |
|             |             | list of     |             |             |
|             |             | countryIDs  |             |             |
|             |             | and labels: |             |             |
|             |             |             |             |             |
|             |             | /meta/JobOr |             |             |
|             |             | der?\       |             |             |
|             |             | fields=addr |             |             |
|             |             | ess(country |             |             |
|             |             | ID)         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| appointment | To-many     | Ids of      |             |             |
| s           | association | Appointment |             |             |
|             |             | s           |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| approvedPla | To-many     | Ids of the  |             |             |
| cements     | association | approved    |             |             |
|             |             | Placements  |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| assignedUse | To-many     | Internal    |             |             |
| rs          | association | users       |             |             |
|             |             | assigned to |             |             |
|             |             | this job.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| benefits    | String      | Text        |             |             |
|             |             | description |             |             |
|             |             | of benefits |             |             |
|             |             | offered     |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| billRateCat | Integer     | Id of the   |             |             |
| egoryID     |             | client bill |             |             |
|             |             | rate        |             |             |
|             |             | category.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| bonusPackag | String      | Text        |             |             |
| e           |             | description |             |             |
|             |             | of the      |             |             |
|             |             | bonus       |             |             |
|             |             | package     |             |             |
|             |             | offered     |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| branchCode  | String      | Code        |             |             |
|             | (100)       | representin |             |             |
|             |             | g           |             |             |
|             |             | the         |             |             |
|             |             | corporate   |             |             |
|             |             | branch      |             |             |
|             |             | where the   |             |             |
|             |             | job is      |             |             |
|             |             | located.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| businessSec | To-many     | Ids of      |             |             |
| tors        | association | BusinessSec |             |             |
|             |             | tors        |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| categories  | To-many     | Ids of      |             |             |
|             | association | Categories  |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| certificati | String      | List of     |             |             |
| onList      |             | Certificati |             |             |
|             |             | ons         |             |             |
|             |             | that an     |             |             |
|             |             | applicant   |             |             |
|             |             | should      |             |             |
|             |             | have.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| certificati | To-many     | Certificati |             |             |
| ons         | association | ons         |             |             |
|             |             | that        |             |             |
|             |             | applicants  |             |             |
|             |             | should      |             |             |
|             |             | have.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| clientBillR | BigDecimal  | Amount to   |             |             |
| ate         |             | be billed   |             |             |
|             |             | to the      |             |             |
|             |             | client for  |             |             |
|             |             | this job    |             |             |
|             |             | when it is  |             |             |
|             |             | filled.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| clientConta | To-one      | ClientConta | X           |             |
| ct          | association | ct          |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| clientCorpo | To-one      | Hiring      | X           |             |
| ration      | association | company.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| correlatedC | Timestamp   | Configurabl |             |             |
| ustom-Date1 |             | e           |             |             |
| -3          |             | date fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| correlatedC | Double      | Configurabl |             |             |
| ustom-Float |             | e           |             |             |
| 1-3         |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| correlatedC | Integer     | Configurabl |             |             |
| ustomInt1-3 |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| correlatedC | String      | Configurabl |             |             |
| ustomText1- | (100)       | e           |             |             |
| 10          |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| correlatedC | String      | Configurabl |             |             |
| ustom-TextB |             | e           |             |             |
| lock1-3     |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| costCenter  | String (30) | Name of the |             |             |
|             |             | cost center |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | job. This   |             |             |
|             |             | cost center |             |             |
|             |             | flows to    |             |             |
|             |             | the         |             |             |
|             |             | placement   |             |             |
|             |             | record and  |             |             |
|             |             | drives      |             |             |
|             |             | invoice     |             |             |
|             |             | grouping    |             |             |
|             |             | (placements |             |             |
|             |             | with the    |             |             |
|             |             | same cost   |             |             |
|             |             | center for  |             |             |
|             |             | the same    |             |             |
|             |             | client will |             |             |
|             |             | be grouped  |             |             |
|             |             | together)   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customDate1 | BigDecimal  | Configurabl |             |             |
| -3          |             | e           |             |             |
|             |             | date fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customFloat | Double      | Configurabl |             |             |
| 1-3         |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customInt1- | Integer     | Configurabl |             |             |
| 3           |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customObjec | CustomObjec | Fields to   |             |             |
| t1s         | t           | which       |             |             |
| to 10s      |             | custom      |             |             |
|             |             | objects can |             |             |
|             |             | be          |             |             |
|             |             | assigned.   |             |             |
|             |             | For more    |             |             |
|             |             | information |             |             |
|             |             | about       |             |             |
|             |             | custom      |             |             |
|             |             | objects,    |             |             |
|             |             | see the     |             |             |
|             |             | Bullhorn    |             |             |
|             |             | Resource    |             |             |
|             |             | Center and  |             |             |
|             |             | the         |             |             |
|             |             | following   |             |             |
|             |             | article on  |             |             |
|             |             | using the   |             |             |
|             |             | REST API    |             |             |
|             |             | with custom |             |             |
|             |             | objects:\   |             |             |
|             |             | <http://dev |             |             |
|             |             | eloper.bull |             |             |
|             |             | horn.com/ar |             |             |
|             |             | ticles/cust |             |             |
|             |             | omobjects>  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customText1 | String      | Configurabl |             |             |
| -20         | (100)       | e           |             |             |
|             |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customTextB | String      | Configurabl |             |             |
| lock1-5     |             | e           |             |             |
|             |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateAdded   | Timestamp   | Date when   |             | X           |
|             |             | this record |             |             |
|             |             | was created |             |             |
|             |             | in the      |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateClosed  | Timestamp   | Date when   |             |             |
|             |             | the job was |             |             |
|             |             | marked as   |             |             |
|             |             | closed.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateEnd     | Timestamp   | Date when   |             |             |
|             |             | the job     |             |             |
|             |             | will end    |             |             |
|             |             | (if         |             |             |
|             |             | applicable) |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateLastExp | Timestamp   | Date when   |             |             |
| orted       |             | the job was |             |             |
|             |             | last        |             |             |
|             |             | exported.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateLastMod | Timestamp   | Date on     |             |             |
| ified       |             | which the   |             |             |
|             |             | job was     |             |             |
|             |             | last        |             |             |
|             |             | modified.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| degreeList  | String      | List of     |             |             |
|             |             | educational |             |             |
|             |             | degrees     |             |             |
|             |             | required    |             |             |
|             |             | for this    |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| description | String      | Text        |             |             |
|             | (200000)    | description |             |             |
|             |             | of the job. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| durationWee | Double      | Expected    |             |             |
| ks          |             | duration    |             |             |
|             |             | the job.    |             |             |
|             |             | For a       |             |             |
|             |             | permanent   |             |             |
|             |             | position,   |             |             |
|             |             | this is     |             |             |
|             |             | null.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| educationDe | String (50) | Required    |             |             |
| gree        |             | degree for  |             |             |
|             |             | the job.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| employmentT | String      | Type of     | X           |             |
| ype         | (200)       | employment  |             |             |
|             |             | offered:    |             |             |
|             |             | for         |             |             |
|             |             | example,    |             |             |
|             |             | contract,   |             |             |
|             |             | permanent,  |             |             |
|             |             | and so      |             |             |
|             |             | forth.      |             |             |
|             |             | Determines  |             |             |
|             |             | which of    |             |             |
|             |             | the five    |             |             |
|             |             | job types   |             |             |
|             |             | are used.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| externalCat | Integer     | Category    |             |             |
| egoryID     |             | exposed on  |             |             |
|             |             | public job  |             |             |
|             |             | postings to |             |             |
|             |             | the web.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| externalID  | String (30) | Used for    |             |             |
|             |             | migrations  |             |             |
|             |             | or for the  |             |             |
|             |             | job's       |             |             |
|             |             | external/ba |             |             |
|             |             | ck-office   |             |             |
|             |             | identificat |             |             |
|             |             | ion         |             |             |
|             |             | number.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| feeArrangem | Double      | Fee,        |             |             |
| ent         |             | expressed   |             |             |
|             |             | as a        |             |             |
|             |             | percentage, |             |             |
|             |             | that will   |             |             |
|             |             | be paid by  |             |             |
|             |             | the         |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration      |             |             |
|             |             | when the    |             |             |
|             |             | job is      |             |             |
|             |             | filled.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| hoursOfOper | String (30) | Hiring      |             |             |
| ation       |             | company's   |             |             |
|             |             | hours of    |             |             |
|             |             | operation.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| hoursPerWee | Double      | Number of   |             |             |
| k           |             | hours per   |             |             |
|             |             | week that   |             |             |
|             |             | the         |             |             |
|             |             | employee    |             |             |
|             |             | will work.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| Interviews  | To-many     | Ids of      |             |             |
|             | association | interview   |             |             |
|             |             | Appointment |             |             |
|             |             | s           |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isClientEdi | Boolean     | Indicates   |             |             |
| table       |             | whether a   |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | can modify  |             |             |
|             |             | the job via |             |             |
|             |             | the         |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isDeleted   | Boolean     | Indicates   |             |             |
|             |             | whether     |             |             |
|             |             | this record |             |             |
|             |             | is marked   |             |             |
|             |             | as deleted  |             |             |
|             |             | in the      |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isInterview | Boolean     | Indicates   |             |             |
| Required    |             | whether     |             |             |
|             |             | applicants  |             |             |
|             |             | are         |             |             |
|             |             | required to |             |             |
|             |             | Interview   |             |             |
|             |             | for the     |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isJobcastPu | Boolean     | Indicates   |             |             |
| blished     |             | whether the |             |             |
|             |             | job was     |             |             |
|             |             | published   |             |             |
|             |             | through     |             |             |
|             |             | Jobcast.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isOpen      | Boolean     | Indicates   |             |             |
|             |             | whether the |             |             |
|             |             | job is      |             |             |
|             |             | open.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isPublic    | Boolean     | Controls    |             |             |
|             |             | whether a   |             |             |
|             |             | job appears |             |             |
|             |             | on the      |             |             |
|             |             | Bullhorn    |             |             |
|             |             | job board   |             |             |
|             |             | (if in      |             |             |
|             |             | use). Only  |             |             |
|             |             | 3 values    |             |             |
|             |             | allows, -1, |             |             |
|             |             | 0, 1.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| jobBoardLis | String      | List of job |             |             |
| t           |             | boards on   |             |             |
|             |             | which this  |             |             |
|             |             | job has     |             |             |
|             |             | been        |             |             |
|             |             | posted.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| notes       | To-many     | Ids of      |             |             |
|             | association | Notes       |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| numOpenings | Integer     | Number of   |             |             |
|             |             | openings to |             |             |
|             |             | be filled   |             |             |
|             |             | for this    |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| onSite      | String (20) | Location    |             |             |
|             |             | requirement |             |             |
|             |             | s;          |             |             |
|             |             | for         |             |             |
|             |             | example,    |             |             |
|             |             | on-site,    |             |             |
|             |             | off-site,   |             |             |
|             |             | no          |             |             |
|             |             | preference. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| Opportunity | To-one      | Opportunity |             |             |
|             | association | with which  |             |             |
|             |             | this        |             |             |
|             |             | JobOrder is |             |             |
|             |             | associated. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| optionsPack | String      | Text        |             |             |
| age         |             | description |             |             |
|             |             | of the      |             |             |
|             |             | stock       |             |             |
|             |             | options     |             |             |
|             |             | package     |             |             |
|             |             | offered     |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| owner       | To-one      | CorporateUs | X           |             |
|             | association | er          |             |             |
|             |             | who owns    |             |             |
|             |             | this job.   |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is    |             |             |
|             |             | user who    |             |             |
|             |             | creates the |             |             |
|             |             | JobOrder.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| payRate     | BigDecimal  | Pay rate    |             |             |
|             |             | offered     |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| placements  | To-many     | Ids of      |             |             |
|             | association | Placements  |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| publicDescr | String      | Description |             |             |
| iption      | (200000)    | of this job |             |             |
|             |             | for use on  |             |             |
|             |             | public job  |             |             |
|             |             | boards.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| publishedZi | String (18) | Published   |             |             |
| p           |             | Zip Code of |             |             |
|             |             | the job     |             |             |
|             |             | location.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| reasonClose | String      | Text        |             |             |
| d           |             | description |             |             |
|             |             | of the      |             |             |
|             |             | reason this |             |             |
|             |             | job was     |             |             |
|             |             | closed, if  |             |             |
|             |             | applicable. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| reportTo    | String      | Name and/or |             |             |
|             | (100)       | title of    |             |             |
|             |             | the person  |             |             |
|             |             | this job    |             |             |
|             |             | will report |             |             |
|             |             | to.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| reportToCli | To-one      | ClientConta |             |             |
| entContact  | association | ct          |             |             |
|             |             | this job    |             |             |
|             |             | reports to. |             |             |
|             |             | Included    |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | fields are: |             |             |
|             |             |             |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | firstName   |             |             |
|             |             |             |             |             |
|             |             | lastName    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| responseUse | To-one      | CorporateUs |             |             |
| r           | association | er          |             |             |
|             |             | to whom     |             |             |
|             |             | submissions |             |             |
|             |             | should be   |             |             |
|             |             | sent.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| salary      | BigDecimal  | Salary      |             |             |
|             |             | offered for |             |             |
|             |             | this job.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| salaryUnit  | String (12) | Salary unit |             |             |
|             |             | represented |             |             |
|             |             | by the      |             |             |
|             |             | range (for  |             |             |
|             |             | example,    |             |             |
|             |             | per hour,   |             |             |
|             |             | yearly).    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| sendouts    | To-many     | Ids of      |             |             |
|             | association | Sendouts    |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| skillList   | String      | Comma-separ |             |             |
|             |             | ated        |             |             |
|             |             | list of     |             |             |
|             |             | skills the  |             |             |
|             |             | applicants  |             |             |
|             |             | should      |             |             |
|             |             | have.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| skills      | To-many     | Ids of      |             |             |
|             | association | Skills      |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| source      | String      | Source of   |             |             |
|             | (100)       | the job.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| startDate   | Timestamp   | Desired     | X           |             |
|             |             | start date  |             |             |
|             |             | for the     |             |             |
|             |             | position.   |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is 12 |             |             |
|             |             | AM on day   |             |             |
|             |             | record is   |             |             |
|             |             | added.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| status      | String      | Current     |             |             |
|             | (200)       | status of   |             |             |
|             |             | the Job     |             |             |
|             |             | Order.      |             |             |
|             |             | Examples:   |             |             |
|             |             | Accepting   |             |             |
|             |             | Candidates, |             |             |
|             |             | Currently   |             |             |
|             |             | Interviewin |             |             |
|             |             | g,          |             |             |
|             |             | Covered,    |             |             |
|             |             | Offer Out,  |             |             |
|             |             | Placed      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| submissions | To-many     | Ids of      |             |             |
|             | association | JobSubmissi |             |             |
|             |             | ons         |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| tasks       | Task        | Tasks       |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| taxRate     | Double      | Rate        |             |             |
|             |             | (percentage |             |             |
|             |             | )           |             |             |
|             |             | at which    |             |             |
|             |             | the person  |             |             |
|             |             | hired for   |             |             |
|             |             | this job    |             |             |
|             |             | will be     |             |             |
|             |             | taxed.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| taxStatus   | String (20) | Tax Status, |             |             |
|             |             | for         |             |             |
|             |             | example,    |             |             |
|             |             | 1099, W-2,  |             |             |
|             |             | and so      |             |             |
|             |             | forth.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| tearsheets  | To-many     | Ids of      |             |             |
|             | association | Tearsheets  |             |             |
|             |             | with which  |             |             |
|             |             | this        |             |             |
|             |             | JobOrder is |             |             |
|             |             | associated. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| title       | String      | Job title.  |             |             |
|             | (100)       |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| travelRequi | String (50) | Text        |             |             |
| rements     |             | description |             |             |
|             |             | of the      |             |             |
|             |             | amount of   |             |             |
|             |             | travel      |             |             |
|             |             | required    |             |             |
|             |             | for this    |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| type        | Integer     | Job type,   |             |             |
|             |             | for         |             |             |
|             |             | example,    |             |             |
|             |             | Cold, Cool, |             |             |
|             |             | Medium,     |             |             |
|             |             | Warm, Hot.  |             |             |
|             |             | Stored in   |             |             |
|             |             | DB as       |             |             |
|             |             | Integer     |             |             |
|             |             | with        |             |             |
|             |             | display     |             |             |
|             |             | values      |             |             |
|             |             | configured  |             |             |
|             |             | in field    |             |             |
|             |             | maps.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| usersAssign | String()    | Comma-separ |             |             |
| ed          |             | ated        |             |             |
|             |             | list of     |             |             |
|             |             | user IDs    |             |             |
|             |             | that        |             |             |
|             |             | represent a |             |             |
|             |             | horizontal  |             |             |
|             |             | view of the |             |             |
|             |             | assignedUse |             |             |
|             |             | rs          |             |             |
|             |             | list.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| willRelocat | Boolean     | Indicates   |             |             |
| e           |             | whether the |             |             |
|             |             | hiring      |             |             |
|             |             | company     |             |             |
|             |             | will        |             |             |
|             |             | provide     |             |             |
|             |             | relocation  |             |             |
|             |             | assistance. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| willSponsor | Boolean     | Indicates   |             |             |
|             |             | whether the |             |             |
|             |             | hiring      |             |             |
|             |             | company is  |             |             |
|             |             | willing to  |             |             |
|             |             | sponsor an  |             |             |
|             |             | employee on |             |             |
|             |             | a work      |             |             |
|             |             | visa.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| yearsRequir | Integer     | Number of   |             |             |
| ed          |             | years of    |             |             |
|             |             | experience  |             |             |
|             |             | required    |             |             |
|             |             | for the     |             |             |
|             |             | job.        |             |             |
+-------------+-------------+-------------+-------------+-------------+

  

### JobSubmission

Represents a formal submission of a Candidate for a particular job. A
job submission occurs after the Candidate has been evaluated,
interviewed, and otherwise assessed, and the parties involved have
agreed that the Candidate may be suitable. The JobSubmission entity is
then created with references to the Candidate and the JobOrder
representing the position. If the JobSubmission is approved, a Placement
entity is created.

The JobSubmission entity supports the [massUpdate](#get-massupdate)
operations.

**Note:** When you set the status field of a JobSubmission to “New
Lead”, it becomes a web response, which is an informal job submission.
When you update another status, it becomes a formal job submission. When
you create a web response, set the dateWebResponse field to the current
date. When you update a web response to make it a formal job submission,
set the dateAdded field to the current date.

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **JobSubmission**   **Type**              **Description**                                                                                                                                                                                      **Not null**   **Read-only**
                                                                                                                                                                                                                                                                
  **field**                                                                                                                                                                                                                                                     
  ------------------- --------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------- ---------------
  id                  Integer               Unique identifier for this entity.                                                                                                                                                                   X              X

  appointments        To-many association   Ids of Appointments associated with this JobSubmission.                                                                                                                                                             

  billRate            BigDecimal            Bill rate for this JobSubmission.                                                                                                                                                                                   

  candidate           To-one association    Candidate submitted for this job. Included Candidate fields are:                                                                                                                                     X               
                                                                                                                                                                                                                                                                
                                            id                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                
                                            firstName                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                
                                            lastName                                                                                                                                                                                                            

  comments            String                Free-text comments on this JobSubmission.                                                                                                                                                                           

  dateAdded           Timestamp             Date on which this JobSubmission record was created in the Bullhorn system.                                                                                                                          X              X

  dateLastModified    Timestamp             Date on which the JobSubmission was last modified.                                                                                                                                                                  

  dateWebResponse     Timestamp             When a new web response is added, set the dateWebResponse field to the current timestamp. When a web response is promoted to a submission, update the dateAdded property to the current timestamp.                  X

  isDeleted           Boolean               Indicates whether this record is marked as deleted in the Bullhorn system.                                                                                                                           X               

  isHidden            Boolean               Indicates whether web responses are hidden. If you do not plan to promote a web response to a submission, set the isHidden field to true.                                                                            

  jobOrder            Integer               JobOrder to which this JobSubmission corresponds.                                                                                                                                                    X               

  owners              To-many association   Primary (first) and secondary (all but first) corporateUsers considered owners of this JobSubmission.                                                                                                               

  payRate             BigDecimal            Pay rate for this JobSubmission.                                                                                                                                                                                    

  salary              BigDecimal            Salary for this JobSubmission.                                                                                                                                                                                      

  sendingUser         To-one association    CorporateUser credited with making the submission.                                                                                                                                                   X               
                                                                                                                                                                                                                                                                
                                            The default value is user who created the JobSubmission.                                                                                                                                                            

  source              String (100)          Source of the JobSubmission (for example, web, Integer, and so forth.)                                                                                                                                               

  status              String (30)           Status of the JobSubmission (for example, reviewed, accepted, and so forth.). Allowable values are configured in field maps.                                                                         X               
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

### JobSubmissionHistory

Read-only entity that represents the transaction history of a
JobSubmission. The GET /query/JobSubmissionHistory call returns a list
of JobSubmissionHistory entities for one or more JobSubmission entities.
The GET /entity/JobSubmissionHistory/{entityId} call returns a single
JobSubmissionHistory entity that represents one JobSubmission change.
Supports create and delete operations.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **JobSubmissionHistory**   **Type**             **Description**                                                                                                                **Not null**   **Read-only**
                                                                                                                                                                                                
  **field**                                                                                                                                                                                     
  -------------------------- -------------------- ------------------------------------------------------------------------------------------------------------------------------ -------------- ---------------
  id                         Integer              Unique identifier for this entity.                                                                                             X              X

  comments                   String               Value of the JobSubmission comments fields for this transaction.                                                                              

  dateAdded                  Timestamp            Date on which the JobSubmission record was created in the Bullhorn system.                                                     X              X

  jobSubmission              To-one association   JobSubmission associated with this JobSubmissionHistory.                                                                       X              X

  sendingUser                To-one association   CorporateUser credited with making the JobSubmission.                                                                          X               X
                                                                                                                                                                                                
                                                  The default value is user who created the JobSubmission.                                                                                      

  status                     String (30)          Status of the JobSubmission (for example, reviewed, accepted, and so forth.). Allowable values are configured in field maps.   X               X

  transactionID              String (36)          Unique transaction id for this JobSubmissionHistory.                                                                                          
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

### Lead

Represents a Lead on a potential Candidate, ClientContact, or
ClientCorporation. A Lead can be converted into a Candidate,
ClientContact, or ClientCorporation.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Lead**                **Type**              **Description**                                                                                                                                                                                                                                                                 **Not null**   **Read-only**
                                                                                                                                                                                                                                                                                                                                               
  **field**                                                                                                                                                                                                                                                                                                                                    
  ----------------------- --------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------- ---------------
  id                      Integer               Unique identifier for this entity.                                                                                                                                                                                                                                              X              X

  address                 Address               Lead's address. This is an address object containing Street Address, City, State, Zip, and CountryID.                                                                                                                                                                                           

  assignedTo              To-many association   CorporateUser(s) this Lead is assigned to.                                                                                                                                                                                                                                                      

  businessSectors         To-many association   IDs of BusinessSectors in which the Lead operates.                                                                                                                                                                                                                                              

  campaignSource          String                Campaign source of the Lead.                                                                                                                                                                                                                                                                    

  candidates              To-many association   Candidates associated with this Lead.                                                                                                                                                                                                                                                           

  category                To-one association    Lead's primary Category.                                                                                                                                                                                                                                                        X               

  categories              To-many association   IDs of the Categories associated with the Lead. Note that the categoryId property is used to store the Lead's primary Category, while this association hold that Category and any other Categories to which the Lead belongs.                                                                   

  clientContacts          To-many association   ClientContacts associated with this Lead.                                                                                                                                                                                                                                                       

  clientCorporation       To-one association    ClientCorporation associated with this Lead.                                                                                                                                                                                                                                                    

  comments                String                Free-text comments on this Lead.                                                                                                                                                                                                                                                                

  companyName             String(100)           Name of the Lead's company (can be used if there is no ClientCorporation entity for this Lead's company).                                                                                                                                                                                       

  companyURL              String(100)                                                                                                                                                                                                                                                                                                           

  conversionSource        String(200)           Source of the Lead's conversion. For example, Cold Call, Monster, and so forth.                                                                                                                                                                                                                 

  customDate1-3           Timestamp             Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                               

  customFloat1-3          Double                Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                            

  customInt1-3            Integer               Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                            

  customText1-20          String (100)          Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                               

  customTextBlock1-5      String                Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                               

  dateAdded               Timestamp             Date on which this record was created in the Bullhorn system.                                                                                                                                                                                                                   X               

  dateLastComment         Timestamp             Date on which the last comment referencing this Lead was made.                                                                                                                                                                                                                                  

  dateLastModified        Timestamp             Date on which the Lead was last modified.                                                                                                                                                                                                                                                      

  dateLastVisited         Timestamp             Date on which the Lead was last visited.                                                                                                                                                                                                                                                        

  description             String                Description of the Lead.                                                                                                                                                                                                                                                                        

  distributionLists       To-many association   IDs of DistributionLists associated with this Lead.                                                                                                                                                                                                                                             

  division                String (40)           Department that the Lead is associated with.                                                                                                                                                                                                                                                    

  email                   String (100)          Lead's primary email address.                                                                                                                                                                                                                                                   X               

  email2                  String (100)          Additional email address. Typically used for the Lead's home or personal email.                                                                                                                                                                                                                 

  email3                  String(100)           Additional email address. Typically used for the Lead's home or personal email.                                                                                                                                                                                                                 

  fax                     String(20)            The primary fax number for the Lead.                                                                                                                                                                                                                                                            

  fax2                    String(20)            An additional fax number for the Lead.                                                                                                                                                                                                                                                          

  fax3                    String(20)            An additional fax number for the Lead.                                                                                                                                                                                                                                                          

  firstName               String (50)           Lead's first name.                                                                                                                                                                                                                                                                              

  history                 To-many association   IDs of LeadHistory entities associated with this Lead.                                                                                                                                                                                                                                          

  isDayLightSavingsTime   Boolean               Indicates whether the Lead's location is using Daylight Saving Time.                                                                                                                                                                                                                            

  isDeleted               Boolean               Indicates whether this record has been marked as Deleted in the Bullhorn system.                                                                                                                                                                                                X               

  lastName                String (50)           Lead's last name                                                                                                                                                                                                                                                                                

  leadSource              String (15)           Source of the Lead. For example, LinkedIn, Facebook, Marketing, and so forth.                                                                                                                                                                                                                   

  massMailOptOut          Boolean               Indicates whether the Lead has chosen not to be included in mass emails through the Bullhorn system                                                                                                                                                                                            X

  middleName              String (50)           Lead's middle name.                                                                                                                                                                                                                                                                             

  mobile                  String (20)           Lead's mobile (cellular) telephone number.                                                                                                                                                                                                                                                      

  name                    String                Lead's full name. Should be a combination of the firstName and lastName fields separated by a space.                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                               
                                                **Notes:** If you create a Lead with no value in the name field, users have no way to select that Lead in the Bullhorn staffing application.                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                               
                                                If you create or modify a Lead name that is not a combination of the firstName and lastName fields, the name will be overwritten when a user saves the Lead in the Bullhorn staffing application. The name will change to a combination of the firstName and lastName fields.                  

  namePrefix              String (5)            Lead's name prefix. For example Dr., Ms, Mr., and so forth.                                                                                                                                                                                                                                     

  nameSuffix              String (5)            Lead's name suffix. For example Jr.                                                                                                                                                                                                                                                             

  nickName                String(50)            Lead's nickname.                                                                                                                                                                                                                                                                                

  notes                   To-many association   IDs of Note entities associated with this Lead.                                                                                                                                                                                                                                                 

  numEmployees            Integer               The number of employees associated with the Lead.                                                                                                                                                                                                                                               

  occupation              String(50)            Occupation of the Lead.                                                                                                                                                                                                                                                                         

  owner                   To-one association    ID of the CorporateUser who is the owner of this Lead record.                                                                                                                                                                                                                   X               

  ownerCorporation        To-one association    Corporation ID of the Lead's owner.                                                                                                                                                                                                                                                             

  pager                   String(20)            Lead's pager number.                                                                                                                                                                                                                                                                            

  phone                   String (20)           Lead's primary telephone number.                                                                                                                                                                                                                                                                

  phone2                  String(20)            Additional phone number for the Lead.                                                                                                                                                                                                                                                           

  phone3                  String(20)            Additional phone number for the Lead.                                                                                                                                                                                                                                                           

  preferredContact        String(15)            Preferred contact method of the Lead.                                                                                                                                                                                                                                           X               

  primarySkills           To-many association   Skills that are listed as the primary skills for this Lead.                                                                                                                                                                                                                                     

  priority                String(15)            Priority of the Lead.                                                                                                                                                                                                                                                                           

  referredByPerson        To-one association    Person who referred this Lead.                                                                                                                                                                                                                                                                  

  reportToPerson          To-one association    Person to whom this Lead reports.                                                                                                                                                                                                                                                               

  role                    String (255)          Role of the Lead.                                                                                                                                                                                                                                                                               

  salary                  BigDecimal            The desired salary of the Lead.                                                                                                                                                                                                                                                                 

  salaryLow               BigDecimal            The lowest yearly salary the Lead would accept.                                                                                                                                                                                                                                                 

  secondarySkills         To-many association   Skills that are listed as secondary skills for this Lead                                                                                                                                                                                                                                        

  skillSet                String                Text description of the Lead's skills.                                                                                                                                                                                                                                                          

  smsOptIn                Boolean               Indicates whether the Lead has granted permission to be sent messages via SMS.                                                                                                                                                                                                                  

  specialties             To-many association   IDs of the Specialties are associated with this Lead.                                                                                                                                                                                                                                           

  status                  String (100)          Status of the lead; for example, New Lead, Active, Prospect, and so forth. Possible values can be configured using field maps.                                                                                                                                                  X               

  tearsheets              To-many association   IDs of Tearsheets associated with this Lead.                                                                                                                                                                                                                                                    

  timeZoneOffsetEST       Integer               Indicates the number of hours by which the Lead's time zone differs from Eastern Standard Time. For example, Pacific Standard Time is -3, three hours earlier than Eastern Standard Time.                                                                                                       

  type                    String(30)            Describes the type of Lead. For example, Staffing, RFP/VOR, etc. Possible values can be configured using the field maps.                                                                                                                                                        X               

  willRelocate            Boolean               Indicates whether or not a Lead is willing to relocate.                                                                                                                                                                                                                                         
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### LeadHistory

Read-only entity that represents the status and ClientCorporation
history of a Lead.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------
  **LeadHistory**     **Type**             **Description**                                                                      **Not null**   **Read-only**
                                                                                                                                               
  **field**                                                                                                                                    
  ------------------- -------------------- ------------------------------------------------------------------------------------ -------------- ---------------
  id                  Integer              Unique Identifier for this entity.                                                   X              X

  clientCorporation   To-one association   ClientCorporation of the associated Lead at the time this LeadHistory was created.                  X

  dateAdded           Timestamp            Date this LeadHistory was added.                                                     X              X

  lead                To-one association   Lead associated with this LeadHistory.                                               X              X

  modifyingUser       To-one association   CorporateUser who modified the Lead associated with this LeadHistory.                X              X

  status              String(30)           Status of the associated Lead at the time this LeadHistory was created.              X              X
  ------------------------------------------------------------------------------------------------------------------------------------------------------------

### Note

Represents a note (comment) associated with a Candidate, ClientContact,
CorporateUser, JobOrder, Lead, or Opportunity. Notes can be accessed via
the "Notes" tab on the person's record in the Bullhorn application.

If you include a commentingPerson value and a personReference value when
you create a Note, the association to an entity is made automatically
and you do not need to make a separate call to create a NoteEntity.

+-------------+-------------+-------------+-------------+-------------+
| **Note**    | **Type**    | **Descripti | **Not       | **Read-only |
|             |             | on**        | null**      | **          |
| **field**   |             |             |             |             |
+=============+=============+=============+=============+=============+
| id          | Integer     | Id of this  | X           |             |
|             |             | Note.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| action      | String (30) | Action type |             |             |
|             |             | associated  |             |             |
|             |             | with Note.  |             |             |
|             |             | The list of |             |             |
|             |             | values is   |             |             |
|             |             | configured  |             |             |
|             |             | in the      |             |             |
|             |             | private     |             |             |
|             |             | label       |             |             |
|             |             | attribute   |             |             |
|             |             | called      |             |             |
|             |             | commentActi |             |             |
|             |             | onList.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| bHTimestamp | byte\[\]    | Timestamp   |             |             |
|             |             | for this    |             |             |
|             |             | Note.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| commentingP | To-one      | Person who  | X           |             |
| erson       | association | created the |             |             |
|             |             | Note.       |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is    |             |             |
|             |             | user who    |             |             |
|             |             | creates the |             |             |
|             |             | Note.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| candidates  | To-many     | Candidates  |             |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Note.       |             |             |
|             |             | Included    |             |             |
|             |             | fields      |             |             |
|             |             | are:\       |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | firstName   |             |             |
|             |             |             |             |             |
|             |             | lastName    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| clientConta | To-many     | ClientConta |             |             |
| cts         | association | cts         |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Note.       |             |             |
|             |             |             |             |             |
|             |             | Included    |             |             |
|             |             | fields      |             |             |
|             |             | are:\       |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | firstName   |             |             |
|             |             |             |             |             |
|             |             | lastName    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| comments    | String      | Text of     | X           |             |
|             |             | this Note.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| corporateUs | To-many     | Ids of      |             |             |
| ers         | association | CorporateUs |             |             |
|             |             | ers         |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Note.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateAdded   | Timestamp   | Date on     | X           |             |
|             |             | which this  |             |             |
|             |             | record was  |             |             |
|             |             | created in  |             |             |
|             |             | the         |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateLastMod | Timestamp   | Date on     |             |             |
| ified       |             | which the   |             |             |
|             |             | Note was    |             |             |
|             |             | last        |             |             |
|             |             | modified.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| externalID  | String (50) | External    |             |             |
|             |             | identifier  |             |             |
|             |             | for the     |             |             |
|             |             | record,     |             |             |
|             |             | used for    |             |             |
|             |             | integration |             |             |
|             |             | s           |             |             |
|             |             | with        |             |             |
|             |             | external    |             |             |
|             |             | datasources |             |             |
|             |             | or custom   |             |             |
|             |             | imports     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| entities    | To-many     | Ids of      |             |             |
|             | association | NoteEntitie |             |             |
|             |             | s           |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Note.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isDeleted   | Boolean     | Indicates   | X           |             |
|             |             | whether     |             |             |
|             |             | this record |             |             |
|             |             | has been    |             |             |
|             |             | marked as   |             |             |
|             |             | Deleted in  |             |             |
|             |             | the         |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| jobOrder    | To-one      | Primary     |             |             |
|             | association | JobOrder    |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Note.       |             |             |
|             |             | Included    |             |             |
|             |             | fields      |             |             |
|             |             | are:\       |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | title       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| jobOrders   | To-many     | JobOrders   |             |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Note.       |             |             |
|             |             | Included    |             |             |
|             |             | fields      |             |             |
|             |             | are:\       |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | title       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| leads       | To-many     | Leads       |             |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Note.       |             |             |
|             |             | Included    |             |             |
|             |             | lead field  |             |             |
|             |             | is id.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| minutesSpen | Integer     | Number of   |             |             |
| t           |             | minutes     |             |             |
|             |             | spent on    |             |             |
|             |             | actions     |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | note, if    |             |             |
|             |             | applicable. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| personRefer | To-one      | Person with | X           |             |
| ence        | association | whom this   |             |             |
|             |             | Note is     |             |             |
|             |             | associated. |             |             |
|             |             | Included    |             |             |
|             |             | fields      |             |             |
|             |             | are:\       |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | \_subtype   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| placements  | To-many     | Ids of      |             |             |
|             | association | Placements  |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Note.       |             |             |
+-------------+-------------+-------------+-------------+-------------+

### NoteEntity

Represents the Candidate, ClientContact, CorporateUser, JobOrder, or
Placement associated with a Note.

If you include a commentingPerson value and a personReference value when
you create a Note, the association to an entity is made automatically
and you do not need to make a separate call to create a NoteEntity.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **NoteEntity**     **Type**             **Description**                                                                                                                                                                                                            **Not null**   **Read-only**
                                                                                                                                                                                                                                                                                    
  **field**                                                                                                                                                                                                                                                                         
  ------------------ -------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------- ---------------
  id                 Integer              Unique identifier for this entity.                                                                                                                                                                                         X               

  note               To-one association   Note associated with this NoteEntity.                                                                                                                                                                                                      

  targetEntityID     Integer              Id of target entity to which the associated Note applies.                                                                                                                                                                  X               

  targetEntityName   String               Name of target entity type. For Candidates ClientContacts, and CorporateUsers, specify “User” as the targetEntityName value. For JobOrders and Placements, specify the actual entity name as the targetEntityName value.   X               
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### \

### Opportunity

Represents a possible Opportunity which can be converted to a JobOrder.

+-------------+-------------+-------------+-------------+-------------+
| **Opportuni | **Type**    | **Descripti | **Not       | **Read-Only |
| ty**        |             | on**        | null**      | **          |
|             |             |             |             |             |
| **field**   |             |             |             |             |
+=============+=============+=============+=============+=============+
| id          | Integer     | Unique      | X           | X           |
|             |             | identifier  |             |             |
|             |             | for this    |             |             |
|             |             | entity.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| actualClose | Timestamp   | Actual      |             |             |
| Date        |             | close date  |             |             |
|             |             | of the      |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| address     | Address     | Address of  |             |             |
|             |             | the hiring  |             |             |
|             |             | company;    |             |             |
|             |             | when the    |             |             |
|             |             | Opportunity |             |             |
|             |             | is created  |             |             |
|             |             | in the      |             |             |
|             |             | Bullhorn    |             |             |
|             |             | application |             |             |
|             |             | ,           |             |             |
|             |             | this data   |             |             |
|             |             | is pulled   |             |             |
|             |             | from the    |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | record that |             |             |
|             |             | is          |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| appointment | To-many     | IDs of      |             |             |
| s           | association | Appointment |             |             |
|             |             | s           |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| assignedDat | Timestamp   | Date the    |             |             |
| e           |             | Opportunity |             |             |
|             |             | was         |             |             |
|             |             | assigned to |             |             |
|             |             | a           |             |             |
|             |             | CorporateUs |             |             |
|             |             | er.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| assignedUse | To-many     | CorporateUs |             |             |
| rs          | association | ers         |             |             |
|             |             | assigned to |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| benefits    | String      | Text        |             |             |
|             |             | description |             |             |
|             |             | of benefits |             |             |
|             |             | offered     |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| billRateCat | Integer     | ID of the   |             |             |
| egoryID     |             | client bill |             |             |
|             |             | rate        |             |             |
|             |             | category.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| bonusPackag | String      | Text        |             |             |
| e           |             | description |             |             |
|             |             | of the      |             |             |
|             |             | bonus       |             |             |
|             |             | package     |             |             |
|             |             | offered     |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| branchCode  | String(100) | Code        |             |             |
|             |             | representin |             |             |
|             |             | g           |             |             |
|             |             | the         |             |             |
|             |             | corporate   |             |             |
|             |             | branch      |             |             |
|             |             | where this  |             |             |
|             |             | Opportunity |             |             |
|             |             | is located. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| businessSec | Integer     | ID of the   |             |             |
| tor         |             | primary     |             |             |
|             |             | BusinessSec |             |             |
|             |             | tor         |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| businessSec | To-many     | IDs of      |             |             |
| tors        | association | BusinessSec |             |             |
|             |             | tors        |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| campaignSou | String(100) | Campaign    |             |             |
| rce         |             | source of   |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| category    | Integer     | ID of the   |             |             |
|             |             | primary     |             |             |
|             |             | Category    |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| categories  | To-many     | IDs of      |             |             |
|             | association | Categories  |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| certificati | To-many     | Certificati |             |             |
| ons         | association | ons         |             |             |
|             |             | needed for  |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| clientConta | To-one      | ClientConta | X           |             |
| ct          | association | ct          |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| clientCorpo | To-one      | ClientCorpo | X           |             |
| ration      | association | ration      |             |             |
|             |             | the         |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | is employed |             |             |
|             |             | by.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| committed   | Boolean     | Indicates   |             |             |
|             |             | whether the |             |             |
|             |             | Opportunity |             |             |
|             |             | has been    |             |             |
|             |             | committed   |             |             |
|             |             | to.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customDate1 | BigDecimal  | Configurabl |             |             |
| -3          |             | e           |             |             |
|             |             | date fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customFloat | Double      | Configurabl |             |             |
| 1-3         |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customInt1- | Integer     | Configurabl |             |             |
| 3           |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customText1 | String      | Configurabl |             |             |
| -20         | (100)       | e           |             |             |
|             |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customTextB | String      | Configurabl |             |             |
| lock1-5     |             | e           |             |             |
|             |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customObjec | CustomObjec | Fields to   |             |             |
| t1s         | t           | which       |             |             |
| to 10s      |             | custom      |             |             |
|             |             | objects can |             |             |
|             |             | be          |             |             |
|             |             | assigned.   |             |             |
|             |             | For more    |             |             |
|             |             | information |             |             |
|             |             | about       |             |             |
|             |             | custom      |             |             |
|             |             | objects,    |             |             |
|             |             | see the     |             |             |
|             |             | Bullhorn    |             |             |
|             |             | Resource    |             |             |
|             |             | Center and  |             |             |
|             |             | the         |             |             |
|             |             | following   |             |             |
|             |             | article on  |             |             |
|             |             | using the   |             |             |
|             |             | REST API    |             |             |
|             |             | with custom |             |             |
|             |             | objects:\   |             |             |
|             |             | <http://dev |             |             |
|             |             | eloper.bull |             |             |
|             |             | horn.com/ar |             |             |
|             |             | ticles/cust |             |             |
|             |             | omobjects>  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateAdded   | Timestamp   | Date when   |             | X           |
|             |             | this record |             |             |
|             |             | was created |             |             |
|             |             | in the      |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateLastMod | Timestamp   | Date this   |             |             |
| ified       |             | record was  |             |             |
|             |             | last        |             |             |
|             |             | modified.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dealValue   | BigDecimal  | Deal value  |             |             |
|             |             | for this    |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| degreeList  | String      | Degree      |             |             |
|             |             | requirement |             |             |
|             |             | s           |             |             |
|             |             | for this    |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| description | String      | Text        |             |             |
|             |             | description |             |             |
|             |             | of this     |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| educationDe | String(50)  | Education   |             |             |
| gree        |             | requirement |             |             |
|             |             | s           |             |             |
|             |             | for this    |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| effectiveDa | Timestamp   | Effective   |             |             |
| te          |             | date of     |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| estimatedDu | Double      | Estimated   |             |             |
| ration      |             | duration of |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| estimatedEn | Timestamp   | Estimated   |             |             |
| dDate       |             | date when   |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | will end    |             |             |
|             |             | (if         |             |             |
|             |             | applicable) |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| estimatedHo | Double      | The         |             |             |
| ursPerWeek  |             | estimated   |             |             |
|             |             | hours per   |             |             |
|             |             | week of     |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| estimatedSt | Timestamp   | The         | X           |             |
| artDate     |             | estimated   |             |             |
|             |             | start date  |             |             |
|             |             | for this    |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| estimatedBi | BigDecimal  | Estimated   |             |             |
| llRate      |             | bill rate   |             |             |
|             |             | of this     |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| expectedClo | Timestamp   | Expected    |             |             |
| seDate      |             | close date  |             |             |
|             |             | of this     |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| expectedFee | Double      | Fee,        |             |             |
|             |             | expressed   |             |             |
|             |             | as a        |             |             |
|             |             | percentage, |             |             |
|             |             | that will   |             |             |
|             |             | be paid by  |             |             |
|             |             | the         |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration      |             |             |
|             |             | when the    |             |             |
|             |             | potential   |             |             |
|             |             | JobOrder is |             |             |
|             |             | filled.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| expectedPar | BigDecimal  | The         |             |             |
| Rate        |             | expected    |             |             |
|             |             | pay rate of |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| externalCat | Integer     | ID of the   |             |             |
| egoryID     |             | external    |             |             |
|             |             | category of |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| externalID  | String(30)  | External    |             |             |
|             |             | identifier  |             |             |
|             |             | for the     |             |             |
|             |             | record,     |             |             |
|             |             | used for    |             |             |
|             |             | migrations  |             |             |
|             |             | and         |             |             |
|             |             | back-office |             |             |
|             |             | integration |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| history     | To-many     | IDs of      |             |             |
|             | association | Opportunity |             |             |
|             |             | History     |             |             |
|             |             | entities    |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| ignoreUntil | Timestamp   | The date,   |             |             |
| Date        |             | if any,     |             |             |
|             |             | until which |             |             |
|             |             | to ignore   |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
|             |             | Allows you  |             |             |
|             |             | to ignore   |             |             |
|             |             | an          |             |             |
|             |             | Opportunity |             |             |
|             |             | until a     |             |             |
|             |             | certain     |             |             |
|             |             | day/time.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isDeleted   | Boolean     | Indicates   | X           |             |
|             |             | whether     |             |             |
|             |             | this record |             |             |
|             |             | has been    |             |             |
|             |             | marked as   |             |             |
|             |             | Deleted in  |             |             |
|             |             | the         |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isOpen      | Boolean     | Indicates   | X           |             |
|             |             | whether     |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | is Open or  |             |             |
|             |             | Closed.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| jobOrders   | To-many     | JobOrders   |             |             |
|             | association | that have   |             |             |
|             |             | been        |             |             |
|             |             | converted   |             |             |
|             |             | from this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| lead        | To-one      | Lead, if    |             |             |
|             | association | any, that   |             |             |
|             |             | is          |             |             |
|             |             | associated  |             |             |
|             |             | to this     |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| markUpPerce | Double      | Percent of  |             |             |
| ntage       |             | mark up for |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| notes       | To-many     | Notes       |             |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| numOpenings | Integer     | Number of   |             |             |
|             |             | openings of |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| onSite      | String(20)  | Location    |             |             |
|             |             | requirement |             |             |
|             |             | s           |             |             |
|             |             | of this     |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| optionsPack | String      | Options     |             |             |
| age         |             | package of  |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| owner       | To-one      | ID of       | X           |             |
|             | association | CorporateUs |             |             |
|             |             | er          |             |             |
|             |             | who owns    |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| priority    | Integer     | Priority of |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | ,           |             |             |
|             |             | for         |             |             |
|             |             | example,    |             |             |
|             |             | Cold, Cool, |             |             |
|             |             | Medium,     |             |             |
|             |             | Warm, Hot.  |             |             |
|             |             | Stored in   |             |             |
|             |             | DB as       |             |             |
|             |             | Integer     |             |             |
|             |             | with        |             |             |
|             |             | display     |             |             |
|             |             | values      |             |             |
|             |             | configured  |             |             |
|             |             | in field    |             |             |
|             |             | maps.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| publicDescr | String      | Public      |             |             |
| iption      |             | description |             |             |
|             |             | of this     |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| publishedZi | String(18)  | Published   |             |             |
| p           |             | zip code of |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| reasonClose | String(255) | Text        |             |             |
| d           |             | description |             |             |
|             |             | of the      |             |             |
|             |             | reason this |             |             |
|             |             | Opportunity |             |             |
|             |             | was closed. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| salary      | BigDecimal  | Salary      |             |             |
|             |             | offered for |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| salaryUnit  | String(12)  | Salary unit |             |             |
|             |             | represented |             |             |
|             |             | by the      |             |             |
|             |             | range. For  |             |             |
|             |             | example,    |             |             |
|             |             | per hour,   |             |             |
|             |             | yearly, and |             |             |
|             |             | so forth.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| skillList   | String      | Comma-separ |             |             |
|             |             | ated        |             |             |
|             |             | list of     |             |             |
|             |             | skills the  |             |             |
|             |             | applicants  |             |             |
|             |             | should      |             |             |
|             |             | have.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| skills      | To-many     | IDs of      |             |             |
|             | association | Skills      |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| source      | String      | Source of   |             |             |
|             | (100)       | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
|             |             | For         |             |             |
|             |             | example,    |             |             |
|             |             | Existing    |             |             |
|             |             | Client,     |             |             |
|             |             | Internet    |             |             |
|             |             | Search, and |             |             |
|             |             | so forth.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| specialties | To-many     | IDs of      |             |             |
|             | association | Specialties |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| status      | String      | Current     |             |             |
|             | (200)       | status of   |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
|             |             | i.e.        |             |             |
|             |             | Prospective |             |             |
|             |             | ,           |             |             |
|             |             | Active,     |             |             |
|             |             | Lost to     |             |             |
|             |             | Competition |             |             |
|             |             | ,           |             |             |
|             |             | and so      |             |             |
|             |             | forth.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| tasks       | To-many     | Tasks       |             |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| tearsheets  | To-many     | Tearsheets  |             |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Opportunity |             |             |
+-------------+-------------+-------------+-------------+-------------+
| title       | String      | Opportunity |             |             |
|             | (100)       | title.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| type        | String      | Type of     | X           |             |
|             | (200)       | employment  |             |             |
|             |             | offered:    |             |             |
|             |             | for         |             |             |
|             |             | example,    |             |             |
|             |             | contract,   |             |             |
|             |             | permanent,  |             |             |
|             |             | and so      |             |             |
|             |             | forth.      |             |             |
|             |             | Determines  |             |             |
|             |             | which of    |             |             |
|             |             | the five    |             |             |
|             |             | Opportunity |             |             |
|             |             | tracks are  |             |             |
|             |             | used.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| weightedDea | BigDecimal  | Weighted    |             |             |
| lValue      |             | deal value  |             |             |
|             |             | of this     |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| willRelocat | Boolean     | Indicates   |             |             |
| e           |             | whether or  |             |             |
|             |             | not the     |             |             |
|             |             | company     |             |             |
|             |             | will        |             |             |
|             |             | provide     |             |             |
|             |             | relocation  |             |             |
|             |             | assistance  |             |             |
|             |             | for this    |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| winProbabil | Double      | Probability |             |             |
| ityPercent  |             | of winning  |             |             |
|             |             | this        |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| yearsRequir | Integer     | Minimum     |             |             |
| ed          |             | experience  |             |             |
|             |             | required    |             |             |
|             |             | for this    |             |             |
|             |             | Opportunity |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+

**\
**

### OpportunityHistory

Read-only entity that represents the history of certain fields of an
Opportunity.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **OpportunityHistory**   **Type**             **Description**                                                                                      **Not null**   **Read-only**
                                                                                                                                                                    
  **field**                                                                                                                                                         
  ------------------------ -------------------- ---------------------------------------------------------------------------------------------------- -------------- ---------------
  id                       Integer              Unique identifier for this entity.                                                                   X              X

  dateAdded                Timestamp            Date this OpportunityHistory was added.                                                              X              X

  dealValue                BigDecimal           Deal value of the associated Opportunity at the time this OpportunityHistory was created.                           X

  effectiveDate            Timestamp            Date the status change comes into effect for the associated Opportunity.                                            X

  modifyingUser            To-one association   CorporateUser who modified the Opportunity associated with this OpportunityHistory.                  X              X

  opportunity              To-one association   Opportunity associated with this OpportunityHistory.                                                 X              X

  status                   String               Status of the associated Opportunity at the time this OpportunityHistory was created.                X              X

  weightedDealValue        BigDecimal           Weighted deal value of the associated Opportunity at the time this OpportunityHistory was created.                  X

  winProbabilityPercent    Double               Probability of winning the associated Opportunity at the time this OpportunityHistory was created.                  X
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

### Placement

Represents a successfully filled job; for example, a placement of a
candidate in a job.

Each Placement record corresponds to a single JobOrder and a single
Candidate, although a JobOrder may have multiple Placements associated
with it (for example, if a company hires several people for the same
position).

The Placement entity supports the [massUpdate](#get-massupdate)
operations.

+-------------+-------------+-------------+-------------+-------------+
| **Placement | **Type **   | **Descripti | **Not       | **Read-only |
| **          |             | on**        | null**      | **          |
|             |             |             |             |             |
| **field**   |             |             |             |             |
+=============+=============+=============+=============+=============+
| id          | Integer     | Unique      | X           | X           |
|             |             | identifier  |             |             |
|             |             | for this    |             |             |
|             |             | entity.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| appointment | To-many     | Appointment |             |             |
| s           | association | s           |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| approvedCha | Integer     | Number of   |             |             |
| ngeRequests |             | change      |             |             |
|             |             | requests    |             |             |
|             |             | with a      |             |             |
|             |             | status of   |             |             |
|             |             | approved.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| approvingCl | To-one      | ClientConta |             |             |
| ientContact | association | ct          |             |             |
|             |             | who can     |             |             |
|             |             | approve the |             |             |
|             |             | timecard,   |             |             |
|             |             | if used.    |             |             |
|             |             | Included    |             |             |
|             |             | fields      |             |             |
|             |             | are:\       |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | firstName   |             |             |
|             |             |             |             |             |
|             |             | lastName    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| backupAppro | To-one      | Another     |             |             |
| ving-       | association | ClientConta |             |             |
|             |             | ct          |             |             |
| ClientConta |             | who can     |             |             |
| ct          |             | approve the |             |             |
|             |             | timecard,   |             |             |
|             |             | if used.    |             |             |
|             |             | Included    |             |             |
|             |             | fields      |             |             |
|             |             | are:\       |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | firstName   |             |             |
|             |             |             |             |             |
|             |             | lastName    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| billingClie | To-one      | ClientConta |             |             |
| ntContact   | association | ct          |             |             |
|             |             | in charge   |             |             |
|             |             | of          |             |             |
|             |             | processing  |             |             |
|             |             | bills for   |             |             |
|             |             | this        |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| billingFreq | String (20) | Frequency   |             |             |
| uency       |             | with which  |             |             |
|             |             | the client  |             |             |
|             |             | company     |             |             |
|             |             | will be     |             |             |
|             |             | billed for  |             |             |
|             |             | this        |             |             |
|             |             | position,   |             |             |
|             |             | initially   |             |             |
|             |             | copied from |             |             |
|             |             | the         |             |             |
|             |             | associated  |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration      |             |             |
|             |             | record but  |             |             |
|             |             | can be      |             |             |
|             |             | modified on |             |             |
|             |             | the         |             |             |
|             |             | Placement   |             |             |
|             |             | record.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| bonusPackag | String      | Text        |             |             |
| e           |             | description |             |             |
|             |             | of the      |             |             |
|             |             | bonus       |             |             |
|             |             | package for |             |             |
|             |             | this        |             |             |
|             |             | placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| candidate   | To-one      | Candidate   | X           |             |
|             | association | who was     |             |             |
|             |             | placed.     |             |             |
|             |             | Cannot be   |             |             |
|             |             | changed     |             |             |
|             |             | after this  |             |             |
|             |             | record is   |             |             |
|             |             | created.    |             |             |
|             |             | Included    |             |             |
|             |             | fields      |             |             |
|             |             | are:\       |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | firstName   |             |             |
|             |             |             |             |             |
|             |             | lastName    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| changeReque | To-many     | PlacementCh |             |             |
| sts         | association | angeRequest |             |             |
|             |             | s           |             |             |
|             |             | for this    |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| clientBillR | Double      | Hourly rate |             |             |
| ate         |             | at which    |             |             |
|             |             | the client  |             |             |
|             |             | company     |             |             |
|             |             | will be     |             |             |
|             |             | billed for  |             |             |
|             |             | work done   |             |             |
|             |             | during      |             |             |
|             |             | regular     |             |             |
|             |             | business    |             |             |
|             |             | hours.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| clientOvert | Double      | Hourly rate |             |             |
| imeRate     |             | at which    |             |             |
|             |             | the client  |             |             |
|             |             | company     |             |             |
|             |             | will be     |             |             |
|             |             | billed for  |             |             |
|             |             | overtime.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| comments    | String      | Text field  |             |             |
|             |             | for         |             |             |
|             |             | entering    |             |             |
|             |             | any         |             |             |
|             |             | comments    |             |             |
|             |             | about the   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| commissions | To-many     | Ids of      |             |             |
|             | association | PlacementCo |             |             |
|             |             | mmissions   |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| correlatedC | Timestamp   | Configurabl |             |             |
| ustomDate1- |             | e           |             |             |
| 3           |             | date fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| correlatedC | Double      | Configurabl |             |             |
| ustomFloat1 |             | e           |             |             |
| -3          |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| correlatedC | Integer     | Configurabl |             |             |
| ustomInt1-3 |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| correlatedC | String      | Configurabl |             |             |
| ustomText1- | (100)       | e           |             |             |
| 10          |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| correlatedC | String      | Configurabl |             |             |
| ustom-      |             | e           |             |             |
|             |             | text fields |             |             |
| TextBlock1- |             | that can be |             |             |
| 3           |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| costCenter  | String      | Text field  |             |             |
|             | (100)       | for Client  |             |             |
|             |             | Cost        |             |             |
|             |             | Center.     |             |             |
|             |             | Drives      |             |             |
|             |             | invoice     |             |             |
|             |             | grouping    |             |             |
|             |             | (placements |             |             |
|             |             | with the    |             |             |
|             |             | same cost   |             |             |
|             |             | center for  |             |             |
|             |             | the same    |             |             |
|             |             | client will |             |             |
|             |             | be grouped  |             |             |
|             |             | together).  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customBillR | BigDecimal  | Configurabl |             |             |
| ate1-10     |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customDate1 | Timestamp   | Configurabl |             |             |
| -3          |             | e           |             |             |
|             |             | date fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customFloat | Double      | Configurabl |             |             |
| 1-3         |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customInt1- | Integer     | Configurabl |             |             |
| 3           |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customObjec | CustomObjec | Fields to   |             |             |
| t1s         | t           | which       |             |             |
| to 10s      |             | custom      |             |             |
|             |             | objects can |             |             |
|             |             | be          |             |             |
|             |             | assigned.   |             |             |
|             |             | For more    |             |             |
|             |             | information |             |             |
|             |             | about       |             |             |
|             |             | custom      |             |             |
|             |             | objects,    |             |             |
|             |             | see the     |             |             |
|             |             | Bullhorn    |             |             |
|             |             | Resource    |             |             |
|             |             | Center and  |             |             |
|             |             | the         |             |             |
|             |             | following   |             |             |
|             |             | article on  |             |             |
|             |             | using the   |             |             |
|             |             | REST API    |             |             |
|             |             | with custom |             |             |
|             |             | objects:\   |             |             |
|             |             | <http://dev |             |             |
|             |             | eloper.bull |             |             |
|             |             | horn.com/ar |             |             |
|             |             | ticles/cust |             |             |
|             |             | omobjects>  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customPayRa | BigDecimal  | Configurabl |             |             |
| te1-10      |             | e           |             |             |
|             |             | numeric     |             |             |
|             |             | fields that |             |             |
|             |             | can be used |             |             |
|             |             | to store    |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customText1 | String      | Configurabl |             |             |
| -40         | (100)       | e           |             |             |
|             |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| customTextB | String      | Configurabl |             |             |
| lock1-5     |             | e           |             |             |
|             |             | text fields |             |             |
|             |             | that can be |             |             |
|             |             | used to     |             |             |
|             |             | store       |             |             |
|             |             | custom data |             |             |
|             |             | depending   |             |             |
|             |             | on the      |             |             |
|             |             | needs of a  |             |             |
|             |             | particular  |             |             |
|             |             | deployment. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateAdded   | Timestamp   | Indicates   | X           |             |
|             | (5)         | when this   |             |             |
|             |             | Placement   |             |             |
|             |             | was created |             |             |
|             |             | in the      |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateBegin   | Timestamp   | Date when   | X           |             |
|             |             | the         |             |             |
|             |             | Candidate   |             |             |
|             |             | will begin  |             |             |
|             |             | work.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateClientE | Timestamp   | Date when a |             |             |
| ffective    |             | pending     |             |             |
|             |             | change to   |             |             |
|             |             | the client  |             |             |
|             |             | bill rate   |             |             |
|             |             | will take   |             |             |
|             |             | effect.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateEffecti | Timestamp   | Date when a |             |             |
| ve          |             | pending     |             |             |
|             |             | change to   |             |             |
|             |             | the         |             |             |
|             |             | Candidate's |             |             |
|             |             | pay rate    |             |             |
|             |             | will take   |             |             |
|             |             | effect.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateEnd     | Timestamp   | Date when   |             |             |
|             |             | the job     |             |             |
|             |             | will end.   |             |             |
|             |             | For a       |             |             |
|             |             | permanent   |             |             |
|             |             | placement,  |             |             |
|             |             | this is     |             |             |
|             |             | null.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| daysGuarant | Integer     | Number of   | X           |             |
| eed         |             | days the    |             |             |
|             |             | Candidate   |             |             |
|             |             | is          |             |             |
|             |             | guaranteed  |             |             |
|             |             | for this    |             |             |
|             |             | job. If the |             |             |
|             |             | Candidate   |             |             |
|             |             | leaves the  |             |             |
|             |             | job before  |             |             |
|             |             | working     |             |             |
|             |             | this many   |             |             |
|             |             | days, the   |             |             |
|             |             | ClientCompa |             |             |
|             |             | ny          |             |             |
|             |             | may not     |             |             |
|             |             | have to pay |             |             |
|             |             | its fee;    |             |             |
|             |             | see         |             |             |
|             |             | daysProRate |             |             |
|             |             | d.          |             |             |
|             |             | Used for    |             |             |
|             |             | Permanent   |             |             |
|             |             | placements. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateLastMod | Timestamp   | Date on     |             |             |
| ified       |             | which the   |             |             |
|             |             | Placement   |             |             |
|             |             | was last    |             |             |
|             |             | modified.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| daysProRate | Integer     | Indicates   | X           |             |
| d           |             | how many    |             |             |
|             |             | days the    |             |             |
|             |             | Candidate   |             |             |
|             |             | must work   |             |             |
|             |             | before the  |             |             |
|             |             | Client      |             |             |
|             |             | Corporation |             |             |
|             |             | will be     |             |             |
|             |             | expected to |             |             |
|             |             | pay a       |             |             |
|             |             | pro-rated   |             |             |
|             |             | portion of  |             |             |
|             |             | the fee.    |             |             |
|             |             | Used for    |             |             |
|             |             | Permanent   |             |             |
|             |             | placements. |             |             |
|             |             | For         |             |             |
|             |             | example, if |             |             |
|             |             | daysGuarant |             |             |
|             |             | eed         |             |             |
|             |             | = 90 and    |             |             |
|             |             | daysProRate |             |             |
|             |             | d           |             |             |
|             |             | = 30, then  |             |             |
|             |             | if the      |             |             |
|             |             | Candidate   |             |             |
|             |             | works 29    |             |             |
|             |             | days no fee |             |             |
|             |             | is due, but |             |             |
|             |             | if the      |             |             |
|             |             | Candidate   |             |             |
|             |             | works 30-89 |             |             |
|             |             | days the    |             |             |
|             |             | Client      |             |             |
|             |             | Corporation |             |             |
|             |             | must pay a  |             |             |
|             |             | percentage  |             |             |
|             |             | of the fee, |             |             |
|             |             | and if the  |             |             |
|             |             | Candidate   |             |             |
|             |             | works 90    |             |             |
|             |             | days or     |             |             |
|             |             | more, the   |             |             |
|             |             | full fee is |             |             |
|             |             | due.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| durationWee | Double      | Duration of | X           |             |
| ks          |             | the job in  |             |             |
|             |             | weeks. You  |             |             |
|             |             | can use     |             |             |
|             |             | this        |             |             |
|             |             | property in |             |             |
|             |             | addition to |             |             |
|             |             | dateEnd.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| employeeTyp | String (30) | Type of     |             |             |
| e           |             | employee:   |             |             |
|             |             | for example |             |             |
|             |             | W2, 1099,   |             |             |
|             |             | Employee,   |             |             |
|             |             | Contractor, |             |             |
|             |             | and so      |             |             |
|             |             | forth.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| employmentT | String (30) | Employment  | X           |             |
| ype         |             | Type,       |             |             |
|             |             | initially   |             |             |
|             |             | copied from |             |             |
|             |             | the         |             |             |
|             |             | associated  |             |             |
|             |             | JobOrder    |             |             |
|             |             | but can be  |             |             |
|             |             | modified on |             |             |
|             |             | the         |             |             |
|             |             | Placement   |             |             |
|             |             | record.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| fee         | Double      | Fee         | X           |             |
|             |             | (expressed  |             |             |
|             |             | as a        |             |             |
|             |             | decimal)    |             |             |
|             |             | that the    |             |             |
|             |             | company     |             |             |
|             |             | will        |             |             |
|             |             | receive for |             |             |
|             |             | this        |             |             |
|             |             | placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| hoursOfOper | String      | Hours       |             |             |
| ation       | (100)       | during      |             |             |
|             |             | which the   |             |             |
|             |             | employee    |             |             |
|             |             | will work.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| hoursPerDay | Double      | Number of   | X           |             |
|             |             | hours per   |             |             |
|             |             | day that    |             |             |
|             |             | the         |             |             |
|             |             | employee    |             |             |
|             |             | will work.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| housingAmen | To-many     | **Not       |             |             |
| ities       | association | supported   |             |             |
|             |             | in this     |             |             |
|             |             | release.**  |             |             |
|             |             |             |             |             |
|             |             | Amenities   |             |             |
|             |             | available   |             |             |
|             |             | as part of  |             |             |
|             |             | the housing |             |             |
|             |             | arrangement |             |             |
|             |             | for this    |             |             |
|             |             | Placement,  |             |             |
|             |             | if          |             |             |
|             |             | applicable. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| housingMana | Integer     | Id of the   |             |             |
| gerID       |             | corporate   |             |             |
|             |             | user        |             |             |
|             |             | serving as  |             |             |
|             |             | manager of  |             |             |
|             |             | the housing |             |             |
|             |             | arrangement |             |             |
|             |             | s,          |             |             |
|             |             | if          |             |             |
|             |             | applicable. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| housingStat | String      | Status of   |             |             |
| us          |             | the         |             |             |
|             |             | Placement   |             |             |
|             |             | Housing, if |             |             |
|             |             | applicable. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| invoiceGrou | Integer     | **Not       |             |             |
| pID         |             | supported   |             |             |
|             |             | in this     |             |             |
|             |             | release.**  |             |             |
|             |             |             |             |             |
|             |             | Id of the   |             |             |
|             |             | InvoiceGrou |             |             |
|             |             | p           |             |             |
|             |             | object      |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| invoiceGrou | String      | Name of the |             |             |
| pName       |             | invoice     |             |             |
|             | (100)       | group       |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| invoiceID   | Integer     | **Not       |             |             |
|             |             | supported   |             |             |
|             |             | in this     |             |             |
|             |             | release.**  |             |             |
|             |             |             |             |             |
|             |             | Id of the   |             |             |
|             |             | Invoice     |             |             |
|             |             | object      |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
|             |             | This field  |             |             |
|             |             | is used for |             |             |
|             |             | Permanent   |             |             |
|             |             | placements  |             |             |
|             |             | since only  |             |             |
|             |             | a single    |             |             |
|             |             | invoice is  |             |             |
|             |             | needed.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| invoiceItem | To-many     | **Not       |             |             |
| s           | association | supported   |             |             |
|             |             | in this     |             |             |
|             |             | release.**  |             |             |
|             |             |             |             |             |
|             |             | Invoice     |             |             |
|             |             | Items       |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| jobOrder    | To-one      | JobOrder    | X           |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
|             |             | Cannot be   |             |             |
|             |             | changed     |             |             |
|             |             | after this  |             |             |
|             |             | record is   |             |             |
|             |             | created.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| jobSubmissi | To-one      | JobSubmissi |             |             |
| on          | association | on          |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| markupPerce | Double      | markupPerce |             |             |
| ntage       |             | ntage       |             |             |
|             |             | =           |             |             |
|             |             | (clientBill |             |             |
|             |             | Rate        |             |             |
|             |             | - payRate)  |             |             |
|             |             | / payRate.  |             |             |
|             |             | Multiply by |             |             |
|             |             | 100 to get  |             |             |
|             |             | actual      |             |             |
|             |             | percentage. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| notes       | To-many     | Notes       |             |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| optionsPack | String      | Text        |             |             |
| age         |             | description |             |             |
|             |             | of the      |             |             |
|             |             | stock       |             |             |
|             |             | options     |             |             |
|             |             | package     |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| otExemption | Boolean     | Indicates   |             |             |
|             |             | whether the |             |             |
|             |             | employee is |             |             |
|             |             | eligible    |             |             |
|             |             | for hours   |             |             |
|             |             | over 40 to  |             |             |
|             |             | automatical |             |             |
|             |             | ly          |             |             |
|             |             | be          |             |             |
|             |             | classified  |             |             |
|             |             | as          |             |             |
|             |             | Overtime.   |             |             |
|             |             |             |             |             |
|             |             | Boolean: 0  |             |             |
|             |             | = Eligible, |             |             |
|             |             | 1 = Exempt. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| otherHourly | Double      | Additional  |             |             |
| Fee         |             | hourly      |             |             |
|             |             | fees, if    |             |             |
|             |             | any.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| otherHourly | String      | Free text   |             |             |
| FeeComments |             | field for   |             |             |
|             |             | comments on |             |             |
|             |             | additional  |             |             |
|             |             | hourly      |             |             |
|             |             | fees.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| overtimeMar | Double      | overtimeMar |             |             |
| kupPercenta |             | kupPercenta |             |             |
| ge          |             | ge          |             |             |
|             |             | =           |             |             |
|             |             | (clientOver |             |             |
|             |             | timeRate    |             |             |
|             |             | -           |             |             |
|             |             | overtimeRat |             |             |
|             |             | e)          |             |             |
|             |             | /           |             |             |
|             |             | overtimeRat |             |             |
|             |             | e.          |             |             |
|             |             | Multiply by |             |             |
|             |             | 100 to get  |             |             |
|             |             | actual      |             |             |
|             |             | percentage. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| overtimeRat | Double      | Hourly rate |             |             |
| e           |             | at which    |             |             |
|             |             | the         |             |             |
|             |             | employee    |             |             |
|             |             | will be     |             |             |
|             |             | paid for    |             |             |
|             |             | overtime    |             |             |
|             |             | work.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| payRate     | BigDecimal  | Rate at     | X           |             |
|             |             | which the   |             |             |
|             |             | employee    |             |             |
|             |             | will be     |             |             |
|             |             | paid during |             |             |
|             |             | regular     |             |             |
|             |             | business    |             |             |
|             |             | hours. This |             |             |
|             |             | may or may  |             |             |
|             |             | not be used |             |             |
|             |             | depending   |             |             |
|             |             | on the job  |             |             |
|             |             | type.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| pendingChan | Integer     | Number of   |             |             |
| geRequests  |             | change      |             |             |
|             |             | requests    |             |             |
|             |             | with a      |             |             |
|             |             | status of   |             |             |
|             |             | submitted.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| recruitingM | Double      | Percentage  | X           |             |
| anager-     |             | of the      |             |             |
|             |             | total gross |             |             |
| PercentGros |             | margin that |             |             |
| sMargin     |             | the         |             |             |
|             |             | recruiting  |             |             |
|             |             | manager     |             |             |
|             |             | will        |             |             |
|             |             | receive.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| referralFee | BigDecimal  | Referral    | X           |             |
|             |             | fee         |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement,  |             |             |
|             |             | if any.     |             |             |
|             |             | Only used   |             |             |
|             |             | with        |             |             |
|             |             | external    |             |             |
|             |             | Candidate   |             |             |
|             |             | source.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| referralFee | String      | Configurabl | X           |             |
| Type        |             | e           |             |             |
|             |             | list of fee |             |             |
|             |             | types       |             |             |
|             |             | associated  |             |             |
|             |             | with the    |             |             |
|             |             | referralFee |             |             |
|             |             | .           |             |             |
|             |             | Only used   |             |             |
|             |             | with        |             |             |
|             |             | external    |             |             |
|             |             | Candidate   |             |             |
|             |             | source.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| reportedMar | Double      | Hourly      |             |             |
| gin         |             | margin in   |             |             |
|             |             | dollars,    |             |             |
|             |             | calculated  |             |             |
|             |             | using       |             |             |
|             |             | burden and  |             |             |
|             |             | other       |             |             |
|             |             | costs.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| reportTo    | String      | Name/title  |             |             |
|             | (100)       | of the      |             |             |
|             |             | person to   |             |             |
|             |             | whom this   |             |             |
|             |             | position    |             |             |
|             |             | will        |             |             |
|             |             | report.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| salary      | BigDecimal  | Salary that | X           |             |
|             |             | the         |             |             |
|             |             | employee    |             |             |
|             |             | will        |             |             |
|             |             | receive.    |             |             |
|             |             | This may be |             |             |
|             |             | either a    |             |             |
|             |             | yearly or   |             |             |
|             |             | hourly      |             |             |
|             |             | salary. See |             |             |
|             |             | salaryUnit. |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is 0. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| salaryUnit  | String (20) | Indicates   | X           |             |
|             |             | whether the |             |             |
|             |             | salary is   |             |             |
|             |             | per year or |             |             |
|             |             | per hour.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| salesManage | Double      | Percentage  | X           |             |
| r-          |             | of the      |             |             |
|             |             | total gross |             |             |
| PercentGros |             | margin that |             |             |
| sMargin     |             | the sales   |             |             |
|             |             | manager     |             |             |
|             |             | will        |             |             |
|             |             | receive.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| shiftID     | Integer     | **Not       |             |             |
|             |             | supported   |             |             |
|             |             | in this     |             |             |
|             |             | release.**  |             |             |
|             |             |             |             |             |
|             |             | Id of the   |             |             |
|             |             | Shift       |             |             |
|             |             | object      |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement,  |             |             |
|             |             | if          |             |             |
|             |             | applicable. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| statementCl | To-one      | ClientConta |             |             |
| ientContact | association | ct          |             |             |
|             |             | who should  |             |             |
|             |             | receive     |             |             |
|             |             | statements  |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
|             |             | Included    |             |             |
|             |             | fields      |             |             |
|             |             | are:\       |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | firstName   |             |             |
|             |             |             |             |             |
|             |             | lastName    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| status      | String (30) | Status of   | X           |             |
|             |             | the         |             |             |
|             |             | Placement:  |             |             |
|             |             | For         |             |             |
|             |             | example:    |             |             |
|             |             | Approved,   |             |             |
|             |             | Completed,  |             |             |
|             |             | Terminated, |             |             |
|             |             | and so      |             |             |
|             |             | forth.      |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is    |             |             |
|             |             | “Placed”.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| surveys     | Survey      | **Not       |             |             |
|             |             | supported   |             |             |
|             |             | in this     |             |             |
|             |             | release.**  |             |             |
|             |             |             |             |             |
|             |             | Surveys     |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| tasks       | To-many     | Tasks       |             |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| taxRate     | Double      | Percentage  |             |             |
|             |             | at which    |             |             |
|             |             | this        |             |             |
|             |             | Placement   |             |             |
|             |             | will be     |             |             |
|             |             | taxed.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| taxState    | String      | Name of the |             |             |
|             |             | US State    |             |             |
|             |             | that is the |             |             |
|             |             | tax state   |             |             |
|             |             | for this    |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| termination | String      | If the      |             |             |
| Reason      |             | Placement   |             |             |
|             |             | has a       |             |             |
|             |             | status of   |             |             |
|             |             | "Terminated |             |             |
|             |             | ,"          |             |             |
|             |             | this field  |             |             |
|             |             | indicates   |             |             |
|             |             | the reason  |             |             |
|             |             | for         |             |             |
|             |             | termination |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| timeUnits   | TimeUnit    | TimeUnit    |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| timeCard    | TimeCard    | **Not       |             |             |
|             |             | supported   |             |             |
|             |             | in this     |             |             |
|             |             | release.**  |             |             |
|             |             |             |             |             |
|             |             | Timecards   |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| timecardExp | TimecardExp | **Not       |             |             |
| enses       | ense        | supported   |             |             |
|             |             | in this     |             |             |
|             |             | release.**  |             |             |
|             |             |             |             |             |
|             |             | Expenses    |             |             |
|             |             | incurred in |             |             |
|             |             | relation to |             |             |
|             |             | this        |             |             |
|             |             | Placement,  |             |             |
|             |             | for which   |             |             |
|             |             | the         |             |             |
|             |             | employee    |             |             |
|             |             | wishes to   |             |             |
|             |             | be          |             |             |
|             |             | reimbursed. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| timecardTim | TimecardTim | **Not       |             |             |
| es          | e           | supported   |             |             |
|             |             | in this     |             |             |
|             |             | release.**  |             |             |
|             |             |             |             |             |
|             |             | Timecard    |             |             |
|             |             | entries     |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| workersComp | Integer     | **Not       |             |             |
| ensation-   | (100)       | supported   |             |             |
|             |             | in this     |             |             |
| RateID      |             | release.**  |             |             |
|             |             |             |             |             |
|             |             | Id of the   |             |             |
|             |             | WorkersComp |             |             |
|             |             | ensationRat |             |             |
|             |             | e           |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| workWeekSta | Integer     | Day of the  |             |             |
| rt          |             | week on     |             |             |
|             |             | which the   |             |             |
|             |             | work week   |             |             |
|             |             | begins for  |             |             |
|             |             | this        |             |             |
|             |             | Placement.  |             |             |
|             |             | 1 = Sunday, |             |             |
|             |             | 2 = Monday, |             |             |
|             |             | and so      |             |             |
|             |             | forth.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| venderClien | To-one      | Umbrella    |             |             |
| tCorporatio | association | company     |             |             |
| n           |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Placement.  |             |             |
|             |             | Included    |             |             |
|             |             | ClientCorpo |             |             |
|             |             | ration      |             |             |
|             |             | fields are: |             |             |
|             |             |             |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | name        |             |             |
+-------------+-------------+-------------+-------------+-------------+

[]{#_Toc467587106 .anchor}**PlacementCertification**

This entity represents the required certification for a Placement.

  ----------------------------------------------------------------------------------------------------------------------------------------------------
  **PlacementCertification**   **Type**             **Description**                                                     **Not null**   **Read-only**
                                                                                                                                       
  **field**                                                                                                                            
  ---------------------------- -------------------- ------------------------------------------------------------------- -------------- ---------------
  id                           Integer              Unique identifier for this entity.                                  X              X

  CandidateCertification       To-one association   CandidateCertification that fulfills this PlacementCertification.   X              

  certification                To-one association   The certification that is required.                                 X              

  dateAdded                    Timestamp            The date on which this record was created in the Bullhorn system.   X              

  placement                    To-one association   Placement that this PlacementCertification is for.                  X              
  ----------------------------------------------------------------------------------------------------------------------------------------------------

### PlacementChangeRequest

Represents a change request that is submitted for a particular
Placement. Placements cannot be directly modified; a user must submit a
PlacementChangeRequest for approval. Supports create, update, and delete
operations.

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **PlacementChangeRequest field**   **Type**             **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                    **Not null**   **Read-only**
  ---------------------------------- -------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------- ---------------
  id                                 Integer              Unique identifier for this entity.                                                                                                                                                                                                                                                                                                                                                                                                                 X              X

  approvingUser                      To-one association   Id of user who approved the change.                                                                                                                                                                                                                                                                                                                                                                                                                               

  billingClientContact               To-one association   ClientContact in charge of processing bills for this Placement. Included ClientContact fields are:                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                          id                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                          firstName                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                          lastName                                                                                                                                                                                                                                                                                                                                                                                                                                                          

  billingFrequency                   String (20)          Frequency with which the client company will be billed for this position, initially copied from the associated ClientCorporation but can be modified on the Placement.                                                                                                                                                                                                                                                                                            

  bonusPackage                       String               Text description of the bonus package for this Placement.                                                                                                                                                                                                                                                                                                                                                                                                         

  clientBillRate                     Double               Hourly rate at which the client company will be billed for work done during regular business hours.                                                                                                                                                                                                                                                                                                                                                               

  clientOvertimeRate                 Double               Hourly rate at which the client company will be billed for overtime.                                                                                                                                                                                                                                                                                                                                                                                              

  comments                           String               Free text field for any comments on this record.                                                                                                                                                                                                                                                                                                                                                                                                                  

  correlatedCustomDate1-3            Timestamp            Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                                                                                                                                                                                                 

  correlatedCustomFloat1-3           Double               Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                                                                                                                                                                                              

  correlatedCustomInt1-3             Integer              Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                                                                                                                                                                                              

  correlatedCustomText1-10           String (100)         Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                                                                                                                                                                                                 

  correlatedCustomTextBlock1-3       String               Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                                                                                                                                                                                                 

  costCenter                         String               Text field for Client Cost Center. Drives invoice grouping (placements with the same cost center for the same client will be grouped together).                                                                                                                                                                                                                                                                                                                   

  customBillRate1-10                 BigDecimal           Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                                                                                                                                                                                              

  customDate1-3                      Timestamp            Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                                                                                                                                                                                                 

  customFloat1-3                     Double               Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                                                                                                                                                                                              

  customInt1-3                       Integer              Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                                                                                                                                                                                              

  customPayRate1-10                  BigDecimal           Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                                                                                                                                                                                              

  customText1-40                     String (100)         Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                                                                                                                                                                                                 

  customTextBlock1-5                 String               Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.                                                                                                                                                                                                                                                                                                                                                 

  dateAdded                          Timestamp            Date on which this entity was created.                                                                                                                                                                                                                                                                                                                                                                                                             X              X

  dateApproved                       Timestamp            Date on which this change was approved.                                                                                                                                                                                                                                                                                                                                                                                                                           

  dateBegin                          Timestamp            Date on which Candidate will begin work.                                                                                                                                                                                                                                                                                                                                                                                                           X              

  dateClientEffective                Timestamp            Date on which a pending change to the ClientCorporation bill rate will take effect.                                                                                                                                                                                                                                                                                                                                                                               

  dateEffective                      Timestamp            Date on which a pending change to the Candidate's pay rate will take effect.                                                                                                                                                                                                                                                                                                                                                                                      

  dateEnd                            Timestamp            Date on which the job will end. For a permanent placement, this will be null.                                                                                                                                                                                                                                                                                                                                                                                     

  dateLastModified                   Timestamp            Date on which the PlacementChangeRequest was last modified.                                                                                                                                                                                                                                                                                                                                                                                                       

  daysGuaranteed                     Integer              Number of days Candidate is guaranteed for this job. If Candidate leaves the job before working this many days, the ClientCorporation may not have to pay its fee; see daysProRated. Used for Permanent placements.                                                                                                                                                                                                                                X              

  daysProRated                       Integer              Indicates how many days the Candidate must work before the ClientCorporation will be expected to pay a pro-rated portion of the fee. Used for Permanent placements. For example, if daysGuaranteed = 90 and daysProRated = 30, then if the Candidate works 29 days no fee is due, but if the Candidate works 30-89 days the ClientCorporation must pay a percentage of the fee, and if the Candidate works 90 days or more, the full fee is due.   X              

  durationWeeks                      Double               Duration of the job in weeks. This field can be used in addition to dateEnd.                                                                                                                                                                                                                                                                                                                                                                       X              

  employeeType                       String (30)          Type of employee: for example W2, 1099, Employee, Contractor, and so forth.                                                                                                                                                                                                                                                                                                                                                                                       

  employmentType                     String (30)          Employment type, initially copied from the associated JobOrder but can be modified on the Placement.                                                                                                                                                                                                                                                                                                                                               X              

  fee                                Double               Fee (expressed as a decimal) that the company will receive for this placement.                                                                                                                                                                                                                                                                                                                                                                     X              

  hoursOfOperation                   String (100)         Hours during which the employee will work.                                                                                                                                                                                                                                                                                                                                                                                                                        

  hoursPerDay                        Double               Number of hours per day that the employee will work.                                                                                                                                                                                                                                                                                                                                                                                               X              

  housingManagerID                   Integer              Id of CorporateUser serving as manager of the housing arrangements, if applicable.                                                                                                                                                                                                                                                                                                                                                                                

  housingStatus                      String (30)          Status of the Placement Housing, if applicable.                                                                                                                                                                                                                                                                                                                                                                                                                   

  optionsPackage                     String               Text description of the stock options package associated with this Placement.                                                                                                                                                                                                                                                                                                                                                                                     

  otExemption                        Integer              Indicates whether the employee is eligible for hours over 40 to automatically be classified as Overtime. Boolean 0 = Eligible, 1 = Exempt.                                                                                                                                                                                                                                                                                                                        

  otherHourlyFee                     Double               Additional hourly fees, if any.                                                                                                                                                                                                                                                                                                                                                                                                                                   

  otherHourlyFeeComments             String               Free text field for comments on additional hourly fees.                                                                                                                                                                                                                                                                                                                                                                                                           

  overtimeRate                       Double               Hourly rate at which the employee will be paid for overtime work.                                                                                                                                                                                                                                                                                                                                                                                                 

  payRate                            BigDecimal           Rate at which the employee will be paid during regular business hours. This may or may not be used depending on the job type.                                                                                                                                                                                                                                                                                                                      X              

  placement                          To-one association   Placement to which this change request applies.                                                                                                                                                                                                                                                                                                                                                                                                    X              

  recruitingManager-                 Double               Percentage of total gross margin that the recruiting manager will receive.                                                                                                                                                                                                                                                                                                                                                                         X              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  PercentGrossMargin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

  referralFee                        BigDecimal           Referral fee associated with this Placement, if any. Only used with external Candidate source.                                                                                                                                                                                                                                                                                                                                                                    

  referralFeeType                    String               Configurable list of fee types associated with referralFee. Only used with external Candidate source.                                                                                                                                                                                                                                                                                                                                                             

  reportTo                           String               Name/title of the person to whom this position will report.                                                                                                                                                                                                                                                                                                                                                                                                       

  requestCustomDate1-3               Timestamp            Configurable date fields.                                                                                                                                                                                                                                                                                                                                                                                                                                         

  requestCustomFloat1-3              Double               Configurable numeric fields.                                                                                                                                                                                                                                                                                                                                                                                                                                      

  requestCustomInt1-3                Integer              Configurable numeric fields.                                                                                                                                                                                                                                                                                                                                                                                                                                      

  requestCustomText1-20              String (30)          Configurable text fields.                                                                                                                                                                                                                                                                                                                                                                                                                                         

  requestCustomTextBlock1-5          String               Configurable text fields.                                                                                                                                                                                                                                                                                                                                                                                                                                         

  requestingUser                     To-one association   CorporateUser who initiated this change request.                                                                                                                                                                                                                                                                                                                                                                                                   X              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

  requestStatus                      String (40)          Status of change request.                                                                                                                                                                                                                                                                                                                                                                                                                          X              

  requestType                        String (50)          Configurable. Type of request.                                                                                                                                                                                                                                                                                                                                                                                                                     X              

  salary                             BigDecimal           Salary that employee will receive. This may be either a yearly or hourly salary. See salaryUnit.                                                                                                                                                                                                                                                                                                                                                   X              

  salaryUnit                         String               Indicates whether the salary is per year or per hour.                                                                                                                                                                                                                                                                                                                                                                                              X              

  salesManager-PercentGrossMargin    Double               Percentage of the total gross margin that the sales manager will receive.                                                                                                                                                                                                                                                                                                                                                                          X              

  statementClientContact             To-one association   ClientContact who should receive statements associated with this Placement. Included ClientContact fields are:                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                          id                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                          firstName                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                          lastName                                                                                                                                                                                                                                                                                                                                                                                                                                                          

  status                             String (100)         Status of Placement: for example, Approved, Completed, Terminated, and so forth.                                                                                                                                                                                                                                                                                                                                                                   X              

  terminationReason                  String (100)         Status of Placement: for example, Approved, Completed, Terminated, and so forth.                                                                                                                                                                                                                                                                                                                                                                                  

  vendorClientCorporation            To-one association   Vendor ClientCorporation associated with change request. Included ClientCorporation fields are:                                                                                                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                          id                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                          name                                                                                                                                                                                                                                                                                                                                                                                                                                                              

  workersCompRateID                  Integer              **Not supported in this release.**                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                          Id of the WorkersCompensationRate object associated with this Placement.                                                                                                                                                                                                                                                                                                                                                                                          

  workWeekStart                      Integer              Day of the week on which the work week begins for this Placement. 1 = Sunday, 2 = Monday, and so forth.                                                                                                                                                                                                                                                                                                                                                           
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### \

### PlacementCommission

Represents a commission payment that is paid upon successful placement
of a Candidate in a job. Each PlacementCommission instance is associated
with exactly one Placement instance; a Placement may have multiple
PlacementCommissions associated with it.

  **PlacementCommission field**   **Type**             **Description**                                                                                                         **Not null **   **Read-only**
  ------------------------------- -------------------- ----------------------------------------------------------------------------------------------------------------------- --------------- ---------------
  id                              Integer              Unique identifier for this entity.                                                                                      X                
  comments                        String               Free-text comments on this commission.                                                                                                   
  commissionPercentage            Double               The commission amount, expressed as a percentage: for example, 0.05 = 5%. Saved as decimal.                             X                
  dateAdded                       Timestamp            Date on which this record was created in the Bullhorn system.                                                           X                
  dateLastModified                Timestamp            Date on which the PlacementCommission was last modified.                                                                                
  externalRecipient               String (100)         If the person who should receive the commission does not have a Bullhorn id, this field indicates that person's name.                    
  flatPayout                      Double               The commission expressed as a flat sum.                                                                                 X                
  grossMarginPercentage           Double               The percentage of the total gross margin for the Placement that the commission recipient will receive.                  X                
  hourlyPayout                    Double               The commission expressed as an hourly rate (e.g., \$1.00 for each hour worked by the employee).                         X                
  placement                       To-one association   Placement to which this commission pertains.                                                                            X                
  role                            String (50)          The commission recipient's role for the Placement (Sales, Recruiting, and so forth).                                                     
  status                          String (30)          Status of this commission.                                                                                                              
  user                            To-one association   User who will receive the commission, if applicable.                                                                                     

### \

### Sendout

Represents a sendout, which occurs when a Candidate's information is
sent to a ClientCorporation to be evaluated for a particular job.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Sendout field**   **Type**             **Description**                                                                       **Not null**   **Read-only**
  ------------------- -------------------- ------------------------------------------------------------------------------------- -------------- ---------------
  id                  Integer              Unique identifier for this entity.                                                    X               

  candidate           To-one association   Candidate being sent out. Included Candidate fields are:                              X               
                                                                                                                                                
                                           id                                                                                                   
                                                                                                                                                
                                           firstName                                                                                            
                                                                                                                                                
                                           lastName                                                                                             

  clientContact       To-one association   ClientContact receiving the Sendout. Included ClientContact fields are:                               
                                                                                                                                                
                                           id                                                                                                   
                                                                                                                                                
                                           firstName                                                                                            
                                                                                                                                                
                                           lastName                                                                                             

  clientCorporation   To-one association   Hiring company.                                                                                       

  dateAdded           Timestamp            The date on which this entity was created in the Bullhorn system.                     X               

  email               String (100)         Email address to which the Sendout is sent.                                                           

  isRead              Boolean              Indicates whether the email has been opened.                                          X               

  jobOrder            To-one association   JobOrder for which the Candidate is being considered. Included JobOrder fields are:                   
                                                                                                                                                
                                           id                                                                                                   
                                                                                                                                                
                                           title                                                                                                

  user                To-one association   CorporateUser who initiated this Sendout.                                             X               
                                                                                                                                                
                                           The default value is user who creates the Sendout.                                                   
  -------------------------------------------------------------------------------------------------------------------------------------------------------------

### Skill

Represents a skill that a Candidate may have. The Skill entity can be
used in a Candidate entity to indicate that the Candidate has that
skill, or in a JobOrder entity to indicate that applicants for that job
should have that skill.

  --------------------------------------------------------------------------------------------------------------------
  **Skill**     **Type**              **Description**                                   **Not null**   **Read-Only**
                                                                                                       
  **field**                                                                                            
  ------------- --------------------- ------------------------------------------------- -------------- ---------------
  id            Integer               Unique identifier for this entity.                X              X

  enabled       Boolean               Indicates whether Skill is enabled.                              

  categories    To-many association   Categories with which this Skill is associated.                  

  description   String                **Not supported in this release.**                               X
                                                                                                       
                                      Text description of this Skill.                                  

  name          String (100)          Name of this Skill.                               X              X
  --------------------------------------------------------------------------------------------------------------------

### Specialty

Represents a specialty that can be associated with a JobOrder or held by
a Candidate. Specialties are associated with a parent Category.

  ---------------------------------------------------------------------------------------------------------------------------------------------
  **Specialty**    **Type**       **Description**                                                                **Not null**   **Read-only**
                                                                                                                                
  **field**                                                                                                                     
  ---------------- -------------- ------------------------------------------------------------------------------ -------------- ---------------
  id               Integer        Unique identifier for this entity.                                             X              X

  dateAdded        Timestamp      Date on which this record was created in the Bullhorn system.                  X              X

  enabled          Boolean        Indicates whether category is available for use in the Bullhorn application.   X              X

  name             String (100)   Name of Specialty.                                                             X              X

  parentCategory   Integer        Category that is parent of this Specialty.                                                    X
  ---------------------------------------------------------------------------------------------------------------------------------------------

 

### \

### State

Represents a state or province within a nation. 

  ----------------------------------------------------------------------------------------------------
  **State**   **Type**             **Description**                      **Not null**   **Read-only**
                                                                                       
  **field**                                                                            
  ----------- -------------------- ------------------------------------ -------------- ---------------
  id          Integer              Unique identifier for this entity.   X               

  code        String               Postal abbreviation of the state.                    

  country     To-one association   Nation that contains this state.     X               

  name        String               Name of the state.                   X               
  ----------------------------------------------------------------------------------------------------

### Task

Represents a task that a user has created in the Bullhorn system using
the Tasks feature.

The Task entity supports the [massUpdate](#get-massupdate) operations.

+-------------+-------------+-------------+-------------+-------------+
| **Task      | **Type**    | **Descripti | **Not       | **Read-only |
| field**     |             | on**        | null**      | **          |
+=============+=============+=============+=============+=============+
| id          | Integer     | Unique      | X           | X           |
|             |             | identifier  |             |             |
|             |             | for this    |             |             |
|             |             | entity.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| assignees   | To-many     | Associates  |             |             |
|             | association | CorporateUs |             |             |
|             |             | ers         |             |             |
|             |             | with a      |             |             |
|             |             | Task. Can   |             |             |
|             |             | only be     |             |             |
|             |             | accessed    |             |             |
|             |             | from the    |             |             |
|             |             | user        |             |             |
|             |             | interface   |             |             |
|             |             | when the    |             |             |
|             |             | multipleAss |             |             |
|             |             | igneesAndCo |             |             |
|             |             | ntactsOnTas |             |             |
|             |             | ks          |             |             |
|             |             | corporation |             |             |
|             |             | setting is  |             |             |
|             |             | enabled, in |             |             |
|             |             | which case  |             |             |
|             |             | childTasks  |             |             |
|             |             | are neither |             |             |
|             |             | shown nor   |             |             |
|             |             | created.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| candidate   | To-one      | Candidate   |             |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | task, if    |             |             |
|             |             | any.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| childTaskOw | To-many     | Users       |             |             |
| ners        | association | assigned to |             |             |
|             |             | childTasks. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| childTasks  | To-many     | Assignments |             |             |
|             | association | .\          |             |             |
|             |             | \           |             |             |
|             |             | You         |             |             |
|             |             | populate    |             |             |
|             |             | this field  |             |             |
|             |             | by creating |             |             |
|             |             | Tasks where |             |             |
|             |             | Task.parent |             |             |
|             |             | Task        |             |             |
|             |             | is this     |             |             |
|             |             | Task.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| clientConta | To-one      | ClientConta |             |             |
| ct          | association | ct          |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | task, if    |             |             |
|             |             | any.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| clientConta | To-many     | Associates  |             |             |
| ctReference | association | Tasks to    |             |             |
| s           |             | multiple    |             |             |
|             |             | ClientConta |             |             |
|             |             | cts.        |             |             |
|             |             | Can only be |             |             |
|             |             | accessed    |             |             |
|             |             | from the    |             |             |
|             |             | user        |             |             |
|             |             | interface   |             |             |
|             |             | when the    |             |             |
|             |             | multipleAss |             |             |
|             |             | igneesAndCo |             |             |
|             |             | ntactsOnTas |             |             |
|             |             | ks          |             |             |
|             |             | corporation |             |             |
|             |             | setting is  |             |             |
|             |             | enabled, in |             |             |
|             |             | which case  |             |             |
|             |             | this field  |             |             |
|             |             | is          |             |             |
|             |             | populated   |             |             |
|             |             | instead of  |             |             |
|             |             | the         |             |             |
|             |             | clientConta |             |             |
|             |             | ct          |             |             |
|             |             | field.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateAdded   | Timestamp   | The date on | X           |             |
|             |             | which this  |             |             |
|             |             | record was  |             |             |
|             |             | created.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateBegin   | Timestamp   | The date    | X           |             |
|             |             | when the    |             |             |
|             |             | task is due |             |             |
|             |             | to begin.   |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is    |             |             |
|             |             | current     |             |             |
|             |             | time        |             |             |
|             |             | rounded up  |             |             |
|             |             | to next 15  |             |             |
|             |             | minutes, or |             |             |
|             |             | dateEnd if  |             |             |
|             |             | it is       |             |             |
|             |             | provided.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateComplet | Timestamp   | The date    |             |             |
| ed          |             | when the    |             |             |
|             |             | task was    |             |             |
|             |             | completed,  |             |             |
|             |             | if          |             |             |
|             |             | applicable. |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is    |             |             |
|             |             | current     |             |             |
|             |             | time        |             |             |
|             |             | rounded up  |             |             |
|             |             | to next 15  |             |             |
|             |             | minutes, or |             |             |
|             |             | dateBegin   |             |             |
|             |             | if it is    |             |             |
|             |             | provided.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateEnd     | Timestamp   | The date    | X           |             |
|             |             | when the    |             |             |
|             |             | task was    |             |             |
|             |             | scheduled   |             |             |
|             |             | to end.     |             |             |
|             |             | Used for    |             |             |
|             |             | recurring   |             |             |
|             |             | tasks.      |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateLastMod | Timestamp   | Date when   |             |             |
| ified       |             | the Task    |             |             |
|             |             | was last    |             |             |
|             |             | modified.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| description | String      | Free-text   | X           |             |
|             |             | description |             |             |
|             |             | of the      |             |             |
|             |             | task.       |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is    |             |             |
|             |             | “”.         |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isCompleted | Boolean     | Indicates   | X           |             |
|             |             | whether the |             |             |
|             |             | task has    |             |             |
|             |             | been        |             |             |
|             |             | completed.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isDeleted   | Boolean     | Indicates   | X           |             |
|             |             | whether     |             |             |
|             |             | this record |             |             |
|             |             | has been    |             |             |
|             |             | marked as   |             |             |
|             |             | deleted.    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isPrivate   | Boolean     | Indicates   | X           |             |
|             |             | whether     |             |             |
|             |             | this is a   |             |             |
|             |             | private     |             |             |
|             |             | task. A     |             |             |
|             |             | private     |             |             |
|             |             | task is not |             |             |
|             |             | visible to  |             |             |
|             |             | users other |             |             |
|             |             | than the    |             |             |
|             |             | user who    |             |             |
|             |             | created the |             |             |
|             |             | task.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| jobOrder    | To-one      | JobOrder    |             |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | task, if    |             |             |
|             |             | any.        |             |             |
|             |             | Included    |             |             |
|             |             | JobOrder    |             |             |
|             |             | fields are: |             |             |
|             |             |             |             |             |
|             |             | id          |             |             |
|             |             |             |             |             |
|             |             | title       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| lead        | To-one      | Lead, if    |             |             |
|             | association | any,        |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | task.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| notificatio | Integer     | Indicates   | X           |             |
| nMinutes    |             | how many    |             |             |
|             |             | minutes in  |             |             |
|             |             | advance the |             |             |
|             |             | user has    |             |             |
|             |             | chosen to   |             |             |
|             |             | be reminded |             |             |
|             |             | of this     |             |             |
|             |             | task.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| opportunity | To-one      | Opportunity |             |             |
|             | association | ,           |             |             |
|             |             | if any,     |             |             |
|             |             | associated  |             |             |
|             |             | with this   |             |             |
|             |             | task.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| owner       | To-one      | User who    | X           |             |
|             | association | created the |             |             |
|             |             | task.       |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is    |             |             |
|             |             | user who    |             |             |
|             |             | creates the |             |             |
|             |             | Task.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| parentTask  | To-one      | Task that   |             |             |
|             | association | is parent   |             |             |
|             |             | of this     |             |             |
|             |             | one, if     |             |             |
|             |             | any. Used   |             |             |
|             |             | when the    |             |             |
|             |             | task is     |             |             |
|             |             | assigned to |             |             |
|             |             | someone     |             |             |
|             |             | other than  |             |             |
|             |             | the owner.  |             |             |
|             |             | The         |             |             |
|             |             | childTask   |             |             |
|             |             | is a copy   |             |             |
|             |             | of the      |             |             |
|             |             | parentTask  |             |             |
|             |             | managed by  |             |             |
|             |             | the         |             |             |
|             |             | assignee.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| placement   | To-one      | Placement   |             |             |
|             | association | associated  |             |             |
|             |             | with this   |             |             |
|             |             | Task.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| priority    | Integer     | Priority    |             |             |
|             |             | level of a  |             |             |
|             |             | task.Value  |             |             |
|             |             | is 1, 2, or |             |             |
|             |             | 3, where 1  |             |             |
|             |             | is Low, 2   |             |             |
|             |             | is Normal,  |             |             |
|             |             | and 3 is    |             |             |
|             |             | High.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| recurrenceD | Integer     | Indicates   |             |             |
| ayBits      |             | which days  |             |             |
|             |             | are part of |             |             |
|             |             | the         |             |             |
|             |             | recurrence  |             |             |
|             |             | pattern, if |             |             |
|             |             | the task is |             |             |
|             |             | a recurring |             |             |
|             |             | one. The    |             |             |
|             |             | value of    |             |             |
|             |             | this field  |             |             |
|             |             | is the sum  |             |             |
|             |             | of the days |             |             |
|             |             | included in |             |             |
|             |             | the series: |             |             |
|             |             | Sun = 2,    |             |             |
|             |             | Mon = 4,    |             |             |
|             |             | Tue = 8,    |             |             |
|             |             | Wed = 16,   |             |             |
|             |             | Thur = 32,  |             |             |
|             |             | Fri = 64,   |             |             |
|             |             | Sat = 128.  |             |             |
|             |             | For         |             |             |
|             |             | example, a  |             |             |
|             |             | meeting     |             |             |
|             |             | that occurs |             |             |
|             |             | on Monday   |             |             |
|             |             | and Friday  |             |             |
|             |             | would have  |             |             |
|             |             | a           |             |             |
|             |             | recurrenceD |             |             |
|             |             | ayBits      |             |             |
|             |             | value of 68 |             |             |
|             |             | (4+64).     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| recurrenceF | Integer     | Frequency   |             |             |
| requency    |             | with which  |             |             |
|             |             | the task    |             |             |
|             |             | recurs: for |             |             |
|             |             | example, a  |             |             |
|             |             | recurrenceF |             |             |
|             |             | requency    |             |             |
|             |             | of 2 for a  |             |             |
|             |             | weekly      |             |             |
|             |             | meeting     |             |             |
|             |             | would imply |             |             |
|             |             | the meeting |             |             |
|             |             | occurs      |             |             |
|             |             | every 2     |             |             |
|             |             | weeks. Null |             |             |
|             |             | for a       |             |             |
|             |             | one-time    |             |             |
|             |             | task.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| recurrenceS | String (10) | A=absolute, |             |             |
| tyle        |             | R=relative: |             |             |
|             |             | e.g., an    |             |             |
|             |             | absolute    |             |             |
|             |             | would be    |             |             |
|             |             | the third   |             |             |
|             |             | week of     |             |             |
|             |             | every       |             |             |
|             |             | month,      |             |             |
|             |             | whereas a   |             |             |
|             |             | relative    |             |             |
|             |             | would be    |             |             |
|             |             | every third |             |             |
|             |             | week.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| recurrenceT | String (1)  | Type of     |             |             |
| ype         |             | recurrence. |             |             |
|             |             | D=daily,    |             |             |
|             |             | W=weekly,   |             |             |
|             |             | M=monthly,  |             |             |
|             |             | A=annually. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| subject     | String      | Subject     | X           |             |
|             | (100)       | header for  |             |             |
|             |             | the task.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| taskUUID    | String (35) | Secondary   |             |             |
|             |             | unique      |             |             |
|             |             | identifier  |             |             |
|             |             | for this    |             |             |
|             |             | entity.     |             |             |
|             |             | Used to     |             |             |
|             |             | identify    |             |             |
|             |             | the record  |             |             |
|             |             | when it is  |             |             |
|             |             | synchronize |             |             |
|             |             | d           |             |             |
|             |             | to external |             |             |
|             |             | systems.    |             |             |
|             |             | Format is   |             |             |
|             |             | 8-4-4-16    |             |             |
|             |             | where all   |             |             |
|             |             | characters  |             |             |
|             |             | are A-Z or  |             |             |
|             |             | 0-9.        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| timeZoneID  | String (50) | Id of time  |             |             |
|             |             | zone.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| type        | String (30) | Type of     | X           |             |
|             |             | task. For   |             |             |
|             |             | example,    |             |             |
|             |             | Follow-Up,  |             |             |
|             |             | Email,      |             |             |
|             |             | Personal,   |             |             |
|             |             | and so      |             |             |
|             |             | forth.      |             |             |
+-------------+-------------+-------------+-------------+-------------+

### Tearsheet

Represents a tearsheet. 

The Tearsheet entity supports the [massUpdate](#get-massupdate)
operations.

+-------------+-------------+-------------+-------------+-------------+
| **Tearsheet | **Type**    | **Descripti | **Not       | **Read-only |
| **          |             | on**        | null**      | **          |
|             |             |             |             |             |
| **field**   |             |             |             |             |
+=============+=============+=============+=============+=============+
| id          | Integer     | Unique      | X           |             |
|             |             | identifier  |             |             |
|             |             | for this    |             |             |
|             |             | entity.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| candidates  | To-many\    | Candidates  |             |             |
|             | association | with which  |             |             |
|             |             | this        |             |             |
|             |             | Tearsheet   |             |             |
|             |             | is          |             |             |
|             |             | associated. |             |             |
|             |             | This field  |             |             |
|             |             | includes    |             |             |
|             |             | the         |             |             |
|             |             | following   |             |             |
|             |             | Candidate   |             |             |
|             |             | fields:\    |             |             |
|             |             | id\         |             |             |
|             |             | firstName\  |             |             |
|             |             | lastName    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| clientConta | To-many     | ClientConta |             |             |
| cts         | association | cts         |             |             |
|             |             | with which  |             |             |
|             |             | this        |             |             |
|             |             | Tearsheet   |             |             |
|             |             | is          |             |             |
|             |             | associated. |             |             |
|             |             | This field  |             |             |
|             |             | includes    |             |             |
|             |             | the         |             |             |
|             |             | following   |             |             |
|             |             | ClientConta |             |             |
|             |             | ct          |             |             |
|             |             | fields:\    |             |             |
|             |             | id\         |             |             |
|             |             | firstName\  |             |             |
|             |             | lastName    |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateAdded   | Timestamp   | Date on     | X           |             |
|             |             | which the   |             |             |
|             |             | Tearsheet   |             |             |
|             |             | was created |             |             |
|             |             | in the      |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateLastMod | Timestamp   | Date on     |             |             |
| ified       |             | which the   |             |             |
|             |             | Tearsheet   |             |             |
|             |             | was last    |             |             |
|             |             | modified.   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| description | String      | Free-text   |             |             |
|             |             | description |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isDeleted   | Boolean     | Indicates   | X           |             |
|             |             | whether     |             |             |
|             |             | this record |             |             |
|             |             | is marked   |             |             |
|             |             | as deleted  |             |             |
|             |             | in the      |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isPrivate   | Boolean     | Indicates   |             |             |
|             |             | whether     |             |             |
|             |             | this is a   |             |             |
|             |             | private     |             |             |
|             |             | Tearsheet.  |             |             |
|             |             | A private   |             |             |
|             |             | Tearsheet   |             |             |
|             |             | is not      |             |             |
|             |             | visible to  |             |             |
|             |             | users other |             |             |
|             |             | than the    |             |             |
|             |             | user who    |             |             |
|             |             | created the |             |             |
|             |             | tearsheet.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| jobOrders   | To-many     | JobOrders   |             |             |
|             | association | with which  |             |             |
|             |             | this        |             |             |
|             |             | Tearsheet   |             |             |
|             |             | is          |             |             |
|             |             | associated. |             |             |
|             |             | This field  |             |             |
|             |             | includes    |             |             |
|             |             | the         |             |             |
|             |             | following   |             |             |
|             |             | JobOrder    |             |             |
|             |             | fields:\    |             |             |
|             |             | id\         |             |             |
|             |             | title       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| name        | String      | Name of     | X           |             |
|             |             | this        |             |             |
|             |             | Tearsheet.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| owner       | To-one      | CorporateUs |             |             |
|             | association | er          |             |             |
|             |             | who is the  |             |             |
|             |             | primary     |             |             |
|             |             | owner of    |             |             |
|             |             | this        |             |             |
|             |             | Tearsheet.  |             |             |
|             |             |             |             |             |
|             |             | The default |             |             |
|             |             | value is    |             |             |
|             |             | user who    |             |             |
|             |             | created the |             |             |
|             |             | tearsheet.  |             |             |
+-------------+-------------+-------------+-------------+-------------+
| recipients  | To-many     | Ids of      |             |             |
|             | association | TearsheetRe |             |             |
|             |             | cipients    |             |             |
|             |             | with which  |             |             |
|             |             | this        |             |             |
|             |             | Tearsheet   |             |             |
|             |             | is          |             |             |
|             |             | associated. |             |             |
+-------------+-------------+-------------+-------------+-------------+
|             |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+

### TearsheetMember

Represents a tearsheet member. 

  --------------------------------------------------------------------------------------------------------------------------------------------------
  **TearsheetMember**        **Type**             **Description**                                                     **Not null**   **Read-only**
                                                                                                                                     
  **field**                                                                                                                          
  -------------------------- -------------------- ------------------------------------------------------------------- -------------- ---------------
  id                         Integer              Unique identifier for this entity.                                  X               

  candidateRestrictionBits   Integer              Candidate restriction bits.                                         X              

  dateAdded                  Timestamp            The date on which this record was created in the Bullhorn system.   X              

  person                     To-one association   Person with whom this TearsheetMember is associated.                               

  tearsheet                  To-one association   Tearsheet with which this TearsheetMember is associated.                           
  --------------------------------------------------------------------------------------------------------------------------------------------------

### TearsheetRecipient

Represents a tearsheet recipient. 

+-------------+-------------+-------------+-------------+-------------+
| **Tearsheet | **Type**    | **Descripti | **Not       | **Read-only |
| Recipient** |             | on**        | null**      | **          |
|             |             |             |             |             |
| **field**   |             |             |             |             |
+=============+=============+=============+=============+=============+
| id          | Integer     | Unique      | X           |             |
|             |             | identifier  |             |             |
|             |             | for this    |             |             |
|             |             | entity.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| candidateRe | Integer     | Candidate   | X           |             |
| strictionBi |             | restriction |             |             |
| ts          |             | bits.       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| dateAdded   | Timestamp   | The date on | X           |             |
|             |             | which this  |             |             |
|             |             | record was  |             |             |
|             |             | created in  |             |             |
|             |             | the         |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| description | String      | Free-text   |             |             |
|             |             | description |             |             |
|             |             | .           |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isDeleted   | Boolean     | Indicates   | X           |             |
|             |             | whether     |             |             |
|             |             | this record |             |             |
|             |             | is marked   |             |             |
|             |             | as deleted  |             |             |
|             |             | in the      |             |             |
|             |             | Bullhorn    |             |             |
|             |             | system.     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| isSent      | Boolean     | Indicates   |             |             |
|             |             | whether     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| jobOrder    | To-one      | JobOrder    |             |             |
|             | association | with which  |             |             |
|             |             | this        |             |             |
|             |             | TearsheetRe |             |             |
|             |             | cipient     |             |             |
|             |             | is          |             |             |
|             |             | associated. |             |             |
|             |             | This field  |             |             |
|             |             | includes    |             |             |
|             |             | the         |             |             |
|             |             | following   |             |             |
|             |             | JobOrder    |             |             |
|             |             | fields:\    |             |             |
|             |             | id\         |             |             |
|             |             | title       |             |             |
+-------------+-------------+-------------+-------------+-------------+
| person      | To-one      | Person with |             |             |
|             | association | whom this   |             |             |
|             |             | TearsheetRe |             |             |
|             |             | cipient     |             |             |
|             |             | is          |             |             |
|             |             | associated. |             |             |
+-------------+-------------+-------------+-------------+-------------+
| tearsheet   | To-one      | Tearsheet   |             |             |
|             | association | with which  |             |             |
|             |             | this        |             |             |
|             |             | TearsheetRe |             |             |
|             |             | cipient     |             |             |
|             |             | is          |             |             |
|             |             | associated. |             |             |
+-------------+-------------+-------------+-------------+-------------+

### TimeUnit

Represents a time unit. 

  -------------------------------------------------------------------------------------------
  **State**    **Type**   **Description**                      **Not null**   **Read-only**
                                                                              
  **field**                                                                   
  ------------ ---------- ------------------------------------ -------------- ---------------
  id           Integer    Unique identifier for this entity.   X               

  name         String     Name of this TimeUnit.               X              

  timeMarker   Integer    Time marker, such as AM or PM.       X               

  weekDay      Integer    Day of the week.                     X               
  -------------------------------------------------------------------------------------------
