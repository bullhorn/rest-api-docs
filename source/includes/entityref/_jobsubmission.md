# JobSubmission

Represents a formal submission of a Candidate for a particular job. A job submission occurs after the Candidate has been evaluated, interviewed, and otherwise assessed, and the parties involved have agreed that the Candidate may be suitable. The JobSubmission entity is then created with references to the Candidate and the JobOrder representing the position. If the JobSubmission is approved, a Placement entity is created.

The JobSubmission entity supports the massUpdate operations.

**Note:** When you set the status field of a JobSubmission to “New Lead”, it becomes a web response, which is an informal job submission. When you update another status, it becomes a formal job submission. When you create a web response, set the dateWebResponse field to the current date. When you update a web response to make it a formal job submission, set the dateAdded field to the current date.


<table>
    <colgroup>
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
    </colgroup>
    <thead>
        <tr class="header">
            <th>JobSubmission fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>id</td>
            <td>Integer</td>
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>appointments</td>
            <td>To-many association</td>
            <td>Ids of Appointments associated with this JobSubmission.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billRate</td>
            <td>BigDecimal</td>
            <td>Bill rate for this JobSubmission.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>branch</td>
            <td>To-one association</td>
            <td>Branch</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>candidate</td>
            <td>To-one association</td>
            <td>Candidate submitted for this job.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>comments</td>
            <td>String (2147483647)</td>
            <td>Free-text comments on this JobSubmission.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customDate1-5</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customFloat1-5</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customInt1-5</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customText1-25</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customTextBlock1-5</td>
            <td>String (2147483647)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date on which this JobSubmission record was created in the Bullhorn system.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date on which the JobSubmission was last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateWebResponse</td>
            <td>Timestamp</td>
            <td>When a new web response is added, set the dateWebResponse field to the current timestamp. When a web response is promoted to a submission, update the dateAdded property to the current timestamp.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>endDate</td>
            <td>Timestamp</td>
            <td>Placeholder for where the start date of the Placement.  This is not automatically updated.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>history</td>
            <td>To-many association</td>
            <td>JobSubmissionHistory</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Indicates whether this record is marked as deleted in the Bullhorn system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isHidden</td>
            <td>Boolean</td>
            <td>Indicates whether web responses are hidden. If you do not plan to promote a web response to a submission, set the isHidden field to true.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobOrder</td>
            <td>To-one association</td>
            <td>JobOrder to which this JobSubmission corresponds.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jobSubmissionCertificationRequirements</td>
            <td>To-many association</td>
            <td>JobSubmissionCertificationRequirement</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>jobSubmissionIntegrations</td>
            <td>To-many association</td>
            <td>JobSubmissionIntegration</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>latestAppointment</td>
            <td>To-one association</td>
            <td>Appointment</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>owners</td>
            <td>To-many association</td>
            <td>Primary (first) and secondary (all but first) corporateUsers considered owners of this JobSubmission.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payRate</td>
            <td>BigDecimal</td>
            <td>Pay rate for this JobSubmission.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>salary</td>
            <td>BigDecimal</td>
            <td>Salary for this JobSubmission.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>screeningCompletedDateTime</td>
            <td>Timestamp</td>
            <td>Screening Completed DateTime</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>screeningDuration</td>
            <td>Float</td>
            <td>Screening Duration</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>screeningFeedbackComment</td>
            <td>String (255)</td>
            <td>Screening Feedback Comment</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>screeningFeedbackRating</td>
            <td>Integer</td>
            <td>Screening Feedback Rating</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>screeningScore</td>
            <td>Integer</td>
            <td>Screening Score</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>screeningStatus</td>
            <td>String (100)</td>
            <td>Screening Status</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>screeningSummary</td>
            <td>String (255)</td>
            <td>Screening Summary</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>sendingUser</td>
            <td>To-one association</td>
            <td>CorporateUser credited with making the submission. The default value is user who created the JobSubmission.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>source</td>
            <td>String (100)</td>
            <td>Source of the JobSubmission (for example, web, Integer, and so forth.)</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>startDate</td>
            <td>Timestamp</td>
            <td>Placeholder for where the start date of the Placement. This is not automatically updated.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>status</td>
            <td>String (30)</td>
            <td>Status of the JobSubmission (for example, reviewed, accepted, and so forth.). Allowable values are available in the response of the settings/jobResponseStatusList operation.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>tasks</td>
            <td>To-many association</td>
            <td>Task</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>

