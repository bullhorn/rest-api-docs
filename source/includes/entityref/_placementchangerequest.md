# PlacementChangeRequest

Represents a change request that is submitted for a particular Placement. Placements cannot be directly modified; a user must submit a PlacementChangeRequest for approval. Supports create, update, and delete operations.

<table>
<thead>
<tr class="header">
<th><strong>PlacementChangeRequest field</strong></th>
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
<td>approvingUser</td>
<td>To-one association</td>
<td>Id of user who approved the change.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>billingClientContact</td>
<td>To-one association</td>
<td><p>ClientContact in charge of processing bills for this Placement. Included ClientContact fields are:</p>
<p>id</p>
<p>firstName</p>
<p>lastName</p></td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>billingFrequency</td>
<td>String (20)</td>
<td>Frequency with which the client company will be billed for this position, initially copied from the associated ClientCorporation but can be modified on the Placement.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>bonusPackage</td>
<td>String</td>
<td>Text description of the bonus package for this Placement.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>clientBillRate</td>
<td>Double</td>
<td>Hourly rate at which the client company will be billed for work done during regular business hours.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>clientOvertimeRate</td>
<td>Double</td>
<td>Hourly rate at which the client company will be billed for overtime.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>comments</td>
<td>String</td>
<td>Free text field for any comments on this record.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>correlatedCustomDate1-3</td>
<td>Timestamp</td>
<td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>correlatedCustomFloat1-3</td>
<td>Double</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>correlatedCustomInt1-3</td>
<td>Integer</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>correlatedCustomText1-10</td>
<td>String (100)</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>correlatedCustomTextBlock1-3</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>costCenter</td>
<td>String</td>
<td>Text field for Client Cost Center. Drives invoice grouping (placements with the same cost center for the same client will be grouped together).</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>customBillRate1-10</td>
<td>BigDecimal</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>customDate1-3</td>
<td>Timestamp</td>
<td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>customFloat1-3</td>
<td>Double</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>customInt1-3</td>
<td>Integer</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>customPayRate1-10</td>
<td>BigDecimal</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>customText1-40</td>
<td>String (100)</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>customTextBlock1-5</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date on which this entity was created.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>dateApproved</td>
<td>Timestamp</td>
<td>Date on which this change was approved.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>dateBegin</td>
<td>Timestamp</td>
<td>Date on which Candidate will begin work.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>dateClientEffective</td>
<td>Timestamp</td>
<td>Date on which a pending change to the ClientCorporation bill rate will take effect.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>dateEffective</td>
<td>Timestamp</td>
<td>Date on which a pending change to the Candidate's pay rate will take effect.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>dateEnd</td>
<td>Timestamp</td>
<td>Date on which the job will end. For a permanent placement, this will be null.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date on which the PlacementChangeRequest was last modified.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>daysGuaranteed</td>
<td>Integer</td>
<td>Number of days Candidate is guaranteed for this job. If Candidate leaves the job before working this many days, the ClientCorporation may not have to pay its fee; see daysProRated. Used for Permanent placements.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>daysProRated</td>
<td>Integer</td>
<td>Indicates how many days the Candidate must work before the ClientCorporation will be expected to pay a pro-rated portion of the fee. Used for Permanent placements. For example, if daysGuaranteed = 90 and daysProRated = 30, then if the Candidate works 29 days no fee is due, but if the Candidate works 30-89 days the ClientCorporation must pay a percentage of the fee, and if the Candidate works 90 days or more, the full fee is due.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>durationWeeks</td>
<td>Double</td>
<td>Duration of the job in weeks. This field can be used in addition to dateEnd.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>employeeType</td>
<td>String (30)</td>
<td>Type of employee: for example W2, 1099, Employee, Contractor, and so forth.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>employmentType</td>
<td>String (30)</td>
<td>Employment type, initially copied from the associated JobOrder but can be modified on the Placement.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>fee</td>
<td>Double</td>
<td>Fee (expressed as a decimal) that the company will receive for this placement.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>hoursOfOperation</td>
<td>String (100)</td>
<td>Hours during which the employee will work.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>hoursPerDay</td>
<td>Double</td>
<td>Number of hours per day that the employee will work.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>housingManagerID</td>
<td>Integer</td>
<td>Id of CorporateUser serving as manager of the housing arrangements, if applicable.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>housingStatus</td>
<td>String (30)</td>
<td>Status of the Placement Housing, if applicable.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>optionsPackage</td>
<td>String</td>
<td>Text description of the stock options package associated with this Placement.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>otExemption</td>
<td>Integer</td>
<td>Indicates whether the employee is eligible for hours over 40 to automatically be classified as Overtime. Boolean 0 = Eligible, 1 = Exempt.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>otherHourlyFee</td>
<td>Double</td>
<td>Additional hourly fees, if any.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>otherHourlyFeeComments</td>
<td>String</td>
<td>Free text field for comments on additional hourly fees.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>overtimeRate</td>
<td>Double</td>
<td>Hourly rate at which the employee will be paid for overtime work.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>payRate</td>
<td>BigDecimal</td>
<td>Rate at which the employee will be paid during regular business hours. This may or may not be used depending on the job type.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>placement</td>
<td>To-one association</td>
<td>Placement to which this change request applies.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td><p>recruitingManager-</p>
<p>PercentGrossMargin</p></td>
<td>Double</td>
<td>Percentage of total gross margin that the recruiting manager will receive.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>referralFee</td>
<td>BigDecimal</td>
<td>Referral fee associated with this Placement, if any. Only used with external Candidate source.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>referralFeeType</td>
<td>String</td>
<td>Configurable list of fee types associated with referralFee. Only used with external Candidate source.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>reportTo</td>
<td>String</td>
<td>Name/title of the person to whom this position will report.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>requestCustomDate1-3</td>
<td>Timestamp</td>
<td>Configurable date fields.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>requestCustomFloat1-3</td>
<td>Double</td>
<td>Configurable numeric fields.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>requestCustomInt1-3</td>
<td>Integer</td>
<td>Configurable numeric fields.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>requestCustomText1-20</td>
<td>String (30)</td>
<td>Configurable text fields.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>requestCustomTextBlock1-5</td>
<td>String</td>
<td>Configurable text fields.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td><p>requestingUser</p>
<p> </p></td>
<td>To-one association</td>
<td>CorporateUser who initiated this change request.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>requestStatus</td>
<td>String (40)</td>
<td>Status of change request.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>requestType</td>
<td>String (50)</td>
<td>Configurable. Type of request.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>salary</td>
<td>BigDecimal</td>
<td>Salary that employee will receive. This may be either a yearly or hourly salary. See salaryUnit.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>salaryUnit</td>
<td>String</td>
<td>Indicates whether the salary is per year or per hour.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>salesManager-PercentGrossMargin</td>
<td>Double</td>
<td>Percentage of the total gross margin that the sales manager will receive.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>statementClientContact</td>
<td>To-one association</td>
<td><p>ClientContact who should receive statements associated with this Placement. Included ClientContact fields are:</p>
<p>id</p>
<p>firstName</p>
<p>lastName</p></td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>status</td>
<td>String (100)</td>
<td>Status of Placement: for example, Approved, Completed, Terminated, and so forth.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>terminationReason</td>
<td>String (100)</td>
<td>Status of Placement: for example, Approved, Completed, Terminated, and so forth.</td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>vendorClientCorporation</td>
<td>To-one association</td>
<td><p>Vendor ClientCorporation associated with change request. Included ClientCorporation fields are:</p>
<p>id</p>
<p>name</p></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>workersCompRateID</td>
<td>Integer</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Id of the WorkersCompensationRate object associated with this Placement.</p></td>
<td> </td>
<td></td>
</tr>
<tr class="even">
<td>workWeekStart</td>
<td>Integer</td>
<td>Day of the week on which the work week begins for this Placement. 1 = Sunday, 2 = Monday, and so forth.</td>
<td> </td>
<td></td>
</tr>
</tbody>
</table>