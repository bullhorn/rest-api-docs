# Placement

Represents a successfully filled job; for example, a placement of a candidate in a job. Each Placement record corresponds to a single JobOrder and a single Candidate, although a JobOrder may have multiple Placements associated with it. For example, a company could hire several people for the same position. The Placement entity supports the massupdate operations.

| **Placement field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| appointments | To-many association | Appointments associated with this Placement. | | |
| approvedChangeRequests | Integer | Number of change requests with a status of approved. | | |
| approvingClientContact | To-one association | ClientContact who can approve the timecard, if used. Included fields are id, firstName, lastName. | | |
| backupApprovingClientContact | To-one association | Another ClientContact who can approve the timecard, if used. Included fields are: id, firstName, lastName | | |
| billingClientContact | To-one association | ClientContact in charge of processing bills for this Placement.  | | |
| billingFrequency | String (20) | Frequency with which the client company will be billed for this position, initially copied from the associated ClientCorporation record but can be modified on the Placement record. | | |
| bonusPackage | String (2147483647) | Text description of the bonus package for this placement. | | |
| candidate | To-one association | Candidate who was placed. Cannot be changed after this record is created. Included fields are id, firstName, lastName. | | X |
| changeRequests | To-many association | PlacementChangeRequests for this Placement. | | |
| clientBillRate | Double | Hourly rate at which the client company will be billed for work done during regular business hours. | | |
| clientOvertimeRate | Double | Hourly rate at which the client company will be billed for overtime. | | |
| comments | String (2147483647) | Text field for entering any comments about the Placement. | | |
| commissions | To-many association | Ids of PlacementCommissions associated with this Placement. | | |
| correlatedCustomDate1-3 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| correlatedCustomFloat1-3 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| correlatedCustomInt1-3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. |
| correlatedCustomText1-10 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| correlatedCustomTextBlock1-3 | String (2147483647) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| costCenter | String (100) | Text field for Client Cost Center. Drives invoice grouping (placements with the same cost center for the same client will be grouped together). | | |
| customBillRate1-10 | BigDecimal | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customDate1-3 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1-3 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customInt1-3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customObject1s to 10s | CustomObject | Fields to which custom objects can be assigned.  For more information about custom objects, see the Bullhorn Resource Center and the following article on using the REST API with custom objects:<br>[http://bullhorn.github.io/Custom-Objects](http://bullhorn.github.io/Custom-Objects) | | |
| customPayRate1-10 | BigDecimal | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customText1-40 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customTextBlock1-5 | String (2147483647) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| dateAdded | Timestamp (5) | Indicates when this Placement was created in the Bullhorn system. | X | |
| dateBegin | Timestamp | Date when the Candidate will begin work. | X | |
| dateClientEffective | Timestamp | Date when a pending change to the client bill rate will take effect. | | |
| dateEffective | Timestamp | Date when a pending change to the Candidate's pay rate will take effect. | | |
| dateEnd | Timestamp | Date when the job will end. For a permanent placement, this is null. | | |
| daysGuaranteed | Integer | Number of days the Candidate is guaranteed for this job. If the Candidate leaves the job before working this many days, the ClientCompany may not have to pay its fee; see daysProRated. Used for Permanent placements. | X | |
| dateLastModified | Timestamp | Date on which the Placement was last modified. | | |
| daysProRated | Integer | Indicates how many days the Candidate must work before the Client Corporation will be expected to pay a pro-rated portion of the fee. Used for Permanent placements. For example, if daysGuaranteed = 90 and daysProRated = 30, then if the Candidate works 29 days no fee is due, but if the Candidate works 30-89 days the Client Corporation must pay a percentage of the fee, and if the Candidate works 90 days or more, the full fee is due. | X | |
| durationWeeks | Double | Duration of the job in weeks. You can use this property in addition to dateEnd. | X | |
| employeeType | String (30) | Type of employee. For example, W2, 1099, Employee, Contractor, and so forth. | | |
| expiringCredentials | Integer | Number of credentials on requirements of this placement that are expiring within the next 30 days or already expired. | | |
| employmentType | String (30) | Employment type. | X | X |
| fee | Double | Fee (expressed as a decimal) that the company will receive for this placement. | X | |
| hoursOfOperation | String (100) | Hours during which the employee will work. | | |
| hoursPerDay | Double | Number of hours per day that the employee will work. | X | |
| housingAmenities | To-many association | **Not supported in this release.** Amenities available as part of the housing arrangement for this Placement, if applicable. | | |
| housingManagerID | Integer | Id of the corporate user serving as manager of the housing arrangements, if applicable. | | |
| housingStatus | String (30) | Status of the Placement Housing, if applicable. | | |
| incompleteRequirements | Integer | Number of requirements on this placements that are incomplete. | | |
| invoiceGroupID | Integer | **Not supported in this release.** Id of the InvoiceGroup object associated with this Placement. | | |
| invoiceGroupName | String (100) | Name of the invoice group associated with this Placement. | | |
| invoiceID | Integer | **Not supported in this release.** Id of the Invoice object associated with this Placement. This field is used for Permanent placements since only a single invoice is needed. | | |
| invoiceItems | To-many association | **Not supported in this release.** Invoice Items associated with this Placement. | | |
| jobOrder | To-one association | JobOrder associated with this Placement. Cannot be changed after this record is created. | X | |
| jobSubmission | To-one association | JobSubmission associated with this Placement. | | |
| markupPercentage | Double | markupPercentage = (clientBillRate - payRate) / payRate. Multiply by 100 to get actual percentage. | | |
| notes | To-many association | Notes associated with this Placement. | | |
| optionsPackage | String (2147483647) | Text description of the stock options package associated with this Placement. | | |
| otExemption | Boolean | Indicates whether the employee is eligible for hours over 40 to automatically be classified as Overtime. Boolean: 0 = Eligible, 1 = Exempt. | | |
| otherHourlyFee | Double | Additional hourly fees, if any. | | |
| otherHourlyFeeComments | String (2147483647) | Free text field for comments on additional hourly fees. | | |
| overtimeMarkupPercentage | Double | overtimeMarkupPercentage = (clientOvertimeRate - overtimeRate) / overtimeRate. Multiply by 100 to get actual percentage. | | |
| overtimeRate | Double | Hourly rate at which the employee will be paid for overtime work. | | |
| payRate | BigDecimal | Rate at which the employee will be paid during regular business hours. This may or may not be used depending on the job type. | X | |
| pendingChangeRequests | Integer | Number of change requests with a status of submitted. | | |
| placementCertifications | To-many association | PlacementCertifications associated with this Placement. | | |
| recruitingManagerPercentGrossMargin | Double | Percentage of the total gross margin that the recruiting manager will receive. | X | |
| referralFee | BigDecimal | Referral fee associated with this Placement, if any. Only used with external Candidate source. | X | |
| referralFeeType | String (20) | Configurable list of fee types associated with the referralFee. Only used with external Candidate source. | X | |
| reportedMargin | Double | Hourly margin in dollars, calculated using burden and other costs. | | |
| reportTo | String (100) | Name/title of the person to whom this position will report. | | |
| salary | BigDecimal | Salary that the employee will receive. This may be either a yearly or hourly salary. See salaryUnit. The default value is 0. | X | |
| salaryUnit | String (20) | Indicates whether the salary is per year or per hour. | X | |
| salesManagerPercentGrossMargin | Double | Percentage of the total gross margin that the sales manager will receive. | X | |
| shift | To-one association | Shift associated with this Placement, if applicable. |
| statementClientContact | To-one association | ClientContact who should receive statements associated with this Placement. | | |
| status | String (30) | Status of the Placement. For example, Approved, Completed, Terminated, and so forth. The default value is “Placed”. | X | |
| surveys | Survey | **Not supported in this release.** Surveys associated with this Placement. | | |
| tasks | To-many association | Tasks associated with this Placement. | | |
| taxRate | Double | Percentage at which this Placement will be taxed. | | |
| taxState | String (50) | Name of the US State that is the tax state for this Placement. | | |
| terminationReason | String (100) | If the Placement has a status of "Terminated," this field indicates the reason for termination. | | |
| timeUnits | TimeUnit | TimeUnit associated with this Placement. | | |
| timeCard | TimeCard | **Not supported in this release.** Timecards associated with this Placement. | | |
| timecardExpenses | TimecardExpense | **Not supported in this release.** Expenses incurred in relation to this Placement, for which the employee wishes to be reimbursed. | | |
| timecardTimes | TimecardTime | **Not supported in this release.** Timecard entries associated with this Placement. | | |
| workersCompensationRateID | Integer (100) | **Not supported in this release.** Id of the WorkersCompensationRate associated with this Placement. | | |
| workWeekStart | Integer | Day of the week on which the work week begins for this Placement. 1 = Sunday, 2 = Monday, and so forth. | | |
| venderClientCorporation | To-one association | Umbrella company associated with this Placement. | | |