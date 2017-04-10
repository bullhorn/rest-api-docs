# Placement

Represents a successfully filled job; for example, a placement of a candidate in a job.

Each Placement record corresponds to a single JobOrder and a single Candidate, although a JobOrder may have multiple Placements associated with it (for example, if a company hires several people for the same position).

The Placement entity supports the [massUpdate](#get-massupdate) operations.

<table>
<thead>
<tr class="header">
<th><p><strong>Placement</strong></p>
<p><strong>field</strong></p></th>
<th><strong>Type </strong></th>
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
<td>appointments</td>
<td>To-many association</td>
<td>Appointments associated with this Placement.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>approvedChangeRequests</td>
<td>Integer</td>
<td>Number of change requests with a status of approved.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>approvingClientContact</td>
<td>To-one association</td>
<td><p>ClientContact who can approve the timecard, if used. Included fields are:<br />
id</p>
<p>firstName</p>
<p>lastName</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p>backupApproving-</p>
<p>ClientContact</p></td>
<td>To-one association</td>
<td><p>Another ClientContact who can approve the timecard, if used. Included fields are:<br />
id</p>
<p>firstName</p>
<p>lastName</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>billingClientContact</td>
<td>To-one association</td>
<td>ClientContact in charge of processing bills for this Placement. </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>billingFrequency</td>
<td>String (20)</td>
<td>Frequency with which the client company will be billed for this position, initially copied from the associated ClientCorporation record but can be modified on the Placement record.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>bonusPackage</td>
<td>String</td>
<td>Text description of the bonus package for this placement.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>candidate</td>
<td>To-one association</td>
<td><p>Candidate who was placed. Cannot be changed after this record is created. Included fields are:<br />
id</p>
<p>firstName</p>
<p>lastName</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>changeRequests</td>
<td>To-many association</td>
<td>PlacementChangeRequests for this Placement.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>clientBillRate</td>
<td>Double</td>
<td>Hourly rate at which the client company will be billed for work done during regular business hours.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>clientOvertimeRate</td>
<td>Double</td>
<td>Hourly rate at which the client company will be billed for overtime.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>comments</td>
<td>String</td>
<td>Text field for entering any comments about the Placement.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>commissions</td>
<td>To-many association</td>
<td>Ids of PlacementCommissions associated with this Placement.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>correlatedCustomDate1-3</td>
<td>Timestamp</td>
<td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>correlatedCustomFloat1-3</td>
<td>Double</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>correlatedCustomInt1-3</td>
<td>Integer</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>correlatedCustomText1-10</td>
<td>String (100)</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p>correlatedCustom-</p>
<p>TextBlock1-3</p></td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>costCenter</td>
<td>String (100)</td>
<td>Text field for Client Cost Center. Drives invoice grouping (placements with the same cost center for the same client will be grouped together).</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customBillRate1-10</td>
<td>BigDecimal</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customDate1-3</td>
<td>Timestamp</td>
<td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customFloat1-3</td>
<td>Double</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customInt1-3</td>
<td>Integer</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customObject1s to 10s</td>
<td>CustomObject</td>
<td>Fields to which custom objects can be assigned. For more information about custom objects, see the Bullhorn Resource Center and the following article on using the REST API with custom objects:<br />
<a href="http://developer.bullhorn.com/articles/customobjects" class="uri">http://developer.bullhorn.com/articles/customobjects</a></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>customPayRate1-10</td>
<td>BigDecimal</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customText1-40</td>
<td>String (100)</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customTextBlock1-5</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateAdded</td>
<td>Timestamp (5)</td>
<td>Indicates when this Placement was created in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>dateBegin</td>
<td>Timestamp</td>
<td>Date when the Candidate will begin work.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>dateClientEffective</td>
<td>Timestamp</td>
<td>Date when a pending change to the client bill rate will take effect.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>dateEffective</td>
<td>Timestamp</td>
<td>Date when a pending change to the Candidate's pay rate will take effect.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateEnd</td>
<td>Timestamp</td>
<td>Date when the job will end. For a permanent placement, this is null.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>daysGuaranteed</td>
<td>Integer</td>
<td>Number of days the Candidate is guaranteed for this job. If the Candidate leaves the job before working this many days, the ClientCompany may not have to pay its fee; see daysProRated. Used for Permanent placements.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date on which the Placement was last modified.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>daysProRated</td>
<td>Integer</td>
<td>Indicates how many days the Candidate must work before the Client Corporation will be expected to pay a pro-rated portion of the fee. Used for Permanent placements. For example, if daysGuaranteed = 90 and daysProRated = 30, then if the Candidate works 29 days no fee is due, but if the Candidate works 30-89 days the Client Corporation must pay a percentage of the fee, and if the Candidate works 90 days or more, the full fee is due.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>durationWeeks</td>
<td>Double</td>
<td>Duration of the job in weeks. You can use this property in addition to dateEnd.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>employeeType</td>
<td>String (30)</td>
<td>Type of employee: for example W2, 1099, Employee, Contractor, and so forth.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>employmentType</td>
<td>String (30)</td>
<td>Employment Type, initially copied from the associated JobOrder but can be modified on the Placement record.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>fee</td>
<td>Double</td>
<td>Fee (expressed as a decimal) that the company will receive for this placement.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>hoursOfOperation</td>
<td>String (100)</td>
<td>Hours during which the employee will work.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>hoursPerDay</td>
<td>Double</td>
<td>Number of hours per day that the employee will work.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>housingAmenities</td>
<td>To-many association</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Amenities available as part of the housing arrangement for this Placement, if applicable.</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>housingManagerID</td>
<td>Integer</td>
<td>Id of the corporate user serving as manager of the housing arrangements, if applicable.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>housingStatus</td>
<td>String</td>
<td>Status of the Placement Housing, if applicable.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>invoiceGroupID</td>
<td>Integer</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Id of the InvoiceGroup object associated with this Placement.</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>invoiceGroupName</td>
<td><p>String</p>
<p>(100)</p></td>
<td>Name of the invoice group associated with this Placement.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>invoiceID</td>
<td>Integer</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Id of the Invoice object associated with this Placement. This field is used for Permanent placements since only a single invoice is needed.</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>invoiceItems</td>
<td>To-many association</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Invoice Items associated with this Placement.</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>jobOrder</td>
<td>To-one association</td>
<td>JobOrder associated with this Placement. Cannot be changed after this record is created.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>jobSubmission</td>
<td>To-one association</td>
<td>JobSubmission associated with this Placement.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>markupPercentage</td>
<td>Double</td>
<td>markupPercentage = (clientBillRate - payRate) / payRate. Multiply by 100 to get actual percentage.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>notes</td>
<td>To-many association</td>
<td>Notes associated with this Placement.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>optionsPackage</td>
<td>String</td>
<td>Text description of the stock options package associated with this Placement.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>otExemption</td>
<td>Boolean</td>
<td><p>Indicates whether the employee is eligible for hours over 40 to automatically be classified as Overtime.</p>
<p>Boolean: 0 = Eligible, 1 = Exempt.</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>otherHourlyFee</td>
<td>Double</td>
<td>Additional hourly fees, if any.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>otherHourlyFeeComments</td>
<td>String</td>
<td>Free text field for comments on additional hourly fees.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>overtimeMarkupPercentage</td>
<td>Double</td>
<td>overtimeMarkupPercentage = (clientOvertimeRate - overtimeRate) / overtimeRate. Multiply by 100 to get actual percentage.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>overtimeRate</td>
<td>Double</td>
<td>Hourly rate at which the employee will be paid for overtime work.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>payRate</td>
<td>BigDecimal</td>
<td>Rate at which the employee will be paid during regular business hours. This may or may not be used depending on the job type.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>pendingChangeRequests</td>
<td>Integer</td>
<td>Number of change requests with a status of submitted.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td><p>recruitingManager-</p>
<p>PercentGrossMargin</p></td>
<td>Double</td>
<td>Percentage of the total gross margin that the recruiting manager will receive.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>referralFee</td>
<td>BigDecimal</td>
<td>Referral fee associated with this Placement, if any. Only used with external Candidate source.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>referralFeeType</td>
<td>String</td>
<td>Configurable list of fee types associated with the referralFee. Only used with external Candidate source.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>reportedMargin</td>
<td>Double</td>
<td>Hourly margin in dollars, calculated using burden and other costs.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>reportTo</td>
<td>String (100)</td>
<td>Name/title of the person to whom this position will report.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>salary</td>
<td>BigDecimal</td>
<td><p>Salary that the employee will receive. This may be either a yearly or hourly salary. See salaryUnit.</p>
<p>The default value is 0.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>salaryUnit</td>
<td>String (20)</td>
<td>Indicates whether the salary is per year or per hour.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td><p>salesManager-</p>
<p>PercentGrossMargin</p></td>
<td>Double</td>
<td>Percentage of the total gross margin that the sales manager will receive.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>shiftID</td>
<td>Integer</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Id of the Shift object associated with this Placement, if applicable.</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>statementClientContact</td>
<td>To-one association</td>
<td><p>ClientContact who should receive statements associated with this Placement. Included fields are:<br />
id</p>
<p>firstName</p>
<p>lastName</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>status</td>
<td>String (30)</td>
<td><p>Status of the Placement: For example: Approved, Completed, Terminated, and so forth.</p>
<p>The default value is “Placed”.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>surveys</td>
<td>Survey</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Surveys associated with this Placement.</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>tasks</td>
<td>To-many association</td>
<td>Tasks associated with this Placement.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>taxRate</td>
<td>Double</td>
<td>Percentage at which this Placement will be taxed.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>taxState</td>
<td>String</td>
<td>Name of the US State that is the tax state for this Placement.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>terminationReason</td>
<td>String</td>
<td>If the Placement has a status of &quot;Terminated,&quot; this field indicates the reason for termination.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>timeUnits</td>
<td>TimeUnit</td>
<td>TimeUnit associated with this Placement.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>timeCard</td>
<td>TimeCard</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Timecards associated with this Placement.</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>timecardExpenses</td>
<td>TimecardExpense</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Expenses incurred in relation to this Placement, for which the employee wishes to be reimbursed.</p></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>timecardTimes</td>
<td>TimecardTime</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Timecard entries associated with this Placement.</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td><p>workersCompensation-</p>
<p>RateID</p></td>
<td>Integer (100)</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Id of the WorkersCompensationRate associated with this Placement.</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>workWeekStart</td>
<td>Integer</td>
<td>Day of the week on which the work week begins for this Placement. 1 = Sunday, 2 = Monday, and so forth.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>venderClientCorporation</td>
<td>To-one association</td>
<td><p>Umbrella company associated with this Placement. Included ClientCorporation fields are:</p>
<p>id</p>
<p>name</p></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>