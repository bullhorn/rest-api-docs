# PlacementChangeRequest

Represents a change request that is submitted for a particular Placement. Placements cannot be directly modified; a user must submit a PlacementChangeRequest for approval. Supports create, update, and delete operations.

| **PlacementChangeRequest field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| approvingUser | To-one association | Id of user who approved the change. | | |
| benefitGroup | String | Indicates the benefits group that is selected for this placement. | | |
| billingClientContact | To-one association | ClientContact in charge of processing bills for this Placement. | | |
| billingFrequency | String (20) | Frequency with which the client company will be billed for this position, initially copied from the associated ClientCorporation but can be modified on the Placement. | | |
| bonusPackage | String (2147483647) | Text description of the bonus package for this Placement. | | |
| clientBillRate | Double | Hourly rate at which the client company will be billed for work done during regular business hours. | | |
| clientOvertimeRate | Double | Hourly rate at which the client company will be billed for overtime. | | |
| comments | String (2147483647) | Free text field for any comments on this record. | | |
| correlatedCustomDate1-3 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| correlatedCustomFloat1-3 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| correlatedCustomInt1-3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| correlatedCustomText1-10 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| correlatedCustomTextBlock1-3 | String (2147483647) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| costCenter | String (100) | Text field for Client Cost Center. Drives invoice grouping (placements with the same cost center for the same client will be grouped together). | | |
| customBillRate1-10 | BigDecimal | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customDate1-3 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1-3 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customInt1-3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment | | |
| customPayRate1-10 | BigDecimal | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customText1-40 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customTextBlock1-5 | String (2147483647) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| dateAdded | Timestamp | Date on which this entity was created. | X | X |
| dateApproved | Timestamp | Date on which this change was approved. | | |
| dateBegin | Timestamp | Date on which Candidate will begin work. | X | |
| dateClientEffective | Timestamp | Date on which a pending change to the ClientCorporation bill rate will take effect. | | |
| dateEffective | Timestamp | Date on which a pending change to the Candidate's pay rate will take effect. | | |
| dateEnd | Timestamp | Date on which the job will end. For a permanent placement, this will be null. | | |
| dateLastModified | Timestamp | Date on which the PlacementChangeRequest was last modified. | X | X |
| daysGuaranteed | Integer | Number of days Candidate is guaranteed for this job. If Candidate leaves the job before working this many days, the ClientCorporation may not have to pay its fee; see daysProRated. Used for Permanent placements. | X | |
| daysProRated | Integer | Indicates how many days the Candidate must work before the ClientCorporation will be expected to pay a pro-rated portion of the fee. Used for Permanent placements. For example, if daysGuaranteed = 90 and daysProRated = 30, then if the Candidate works 29 days no fee is due, but if the Candidate works 30-89 days the ClientCorporation must pay a percentage of the fee, and if the Candidate works 90 days or more, the full fee is due. | X | |
| durationWeeks | Double | Duration of the job in weeks. This field can be used in addition to dateEnd. | X | |
| employmentStartDate | Timestamp | Indicates the date on which paid employment begins for this placement. Can be different from placement start date. Used for payroll integrations. | | |
| employeeType | String (30) | Type of employee: for example W2, 1099, Employee, Contractor, and so forth. | |
| employmentType | String (30) | Employment type, initially copied from the associated JobOrder but can be modified on the Placement. | X | |
| fee | Double | Fee (expressed as a decimal) that the company will receive for this placement. | X | |
| hoursOfOperation | String (100) | Hours during which the employee will work. | | |
| hoursPerDay | Double | Number of hours per day that the employee will work. | X | |
| housingManagerID | Integer | Id of CorporateUser serving as manager of the housing arrangements, if applicable. | | |
| housingStatus | String (30) | Status of the Placement Housing, if applicable. | | |
| optionsPackage | String (2147483647) | Text description of the stock options package associated with this Placement. | | |
| otExemption | Integer | Indicates whether the employee is eligible for hours over 40 to automatically be classified as Overtime. Boolean 0 = Eligible, 1 = Exempt. | | |
| otherHourlyFee | Double | Additional hourly fees, if any. | | |
| otherHourlyFeeComments | String (2147483647) | Free text field for comments on additional hourly fees. | | |
| overtimeRate | Double | Hourly rate at which the employee will be paid for overtime work. | | |
| payGroup | String | Indicates the frequency with which the placement is paid. Used for payroll integrations. | | |
| payRate | BigDecimal | Rate at which the employee will be paid during regular business hours. This may or may not be used depending on the job type. | X | |
| payrollEmployeeType | String | Indicates the type of employee for payroll purposes. | | |
| placement | To-one association | Placement to which this change request applies. | X | |
| positionCode | String | Indicates a code for the position. Used in payroll integrations. | | |
| recruitingManagerPercentGrossMargin | Double | Percentage of total gross margin that the recruiting manager will receive. | X | |
| referralFee | BigDecimal | Referral fee associated with this Placement, if any. Only used with external Candidate source. | | |
| referralFeeType | String (20) | Configurable list of fee types associated with referralFee. Only used with external Candidate source. | | |
| reportTo | String (100) | Name/title of the person to whom this position will report. | | |
| requestCustomDate1-3 | Timestamp | Configurable date fields. | | |
| requestCustomFloat1-3 | Double | Configurable numeric fields. | | |
| requestCustomInt1-3 | Integer | Configurable numeric fields. | | |
| requestCustomText1-20 | String (30) | Configurable text fields. | | |
| requestCustomTextBlock1-5 | String (2147483647) | Configurable text fields. | | |
| requestingUser | To-one association | CorporateUser who initiated this change request. | X | |
| requestStatus | String (40) | Status of change request. | X | |
| requestType | String (50) | Configurable. Type of request. | X | |
| salary | BigDecimal | Salary that employee will receive. This may be either a yearly or hourly salary. See salaryUnit. | X | |
| salaryUnit | String (20) | Indicates whether the salary is per year or per hour. | X | |
| salesManager-PercentGrossMargin | Double | Percentage of the total gross margin that the sales manager will receive. | X | |
| statementClientContact | To-one association | ClientContact who should receive statements associated with this Placement. | | |
| status | String (100) | Status of Placement: for example, Approved, Completed, Terminated, and so forth. | X | |
| terminationReason | String (100) | Status of Placement: for example, Approved, Completed, Terminated, and so forth. | | |
| vendorClientCorporation | To-one association | Vendor ClientCorporation associated with change request. | | |
| workersCompRateID | Integer | **Not supported in this release.** Id of the WorkersCompensationRate object associated with this Placement. | | |
| workWeekStart | Integer | Day of the week on which the work week begins for this Placement. 1 = Sunday, 2 = Monday, and so forth. | | |
