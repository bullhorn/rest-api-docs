# Placement

Represents a successfully filled job; for example, a placement of a candidate in a job. Each Placement record corresponds to a single JobOrder and a single Candidate, although a JobOrder may have multiple Placements associated with it. For example, a company could hire several people for the same position. The Placement entity supports the massupdate operations.


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
            <th>Placement fields</th>
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
            <td>Appointments associated with this Placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>approvedChangeRequests</td>
            <td>Integer</td>
            <td>Number of change requests with a status of approved.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>approvingClientContact</td>
            <td>To-one association</td>
            <td>ClientContact who can approve the timecard, if used. Included fields are id, firstName, lastName.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>backupApprovingClientContact</td>
            <td>To-one association</td>
            <td>Another ClientContact who can approve the timecard, if used. Included fields are: id, firstName, lastName</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>benefitGroup</td>
            <td>String (100)</td>
            <td>Indicates the benefits group that is selected for this placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billingClientContact</td>
            <td>To-one association</td>
            <td>ClientContact in charge of processing bills for this Placement.&#xA0;</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billingFrequency</td>
            <td>String (20)</td>
            <td>Frequency with which the client company will be billed for this position, initially copied from the associated ClientCorporation record but can be modified on the Placement record.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>bonusPackage</td>
            <td>String (2147483647)</td>
            <td>Text description of the bonus package for this placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>candidate</td>
            <td>To-one association</td>
            <td>Candidate who was placed. Cannot be changed after this record is created. Included fields are id, firstName, lastName.</td>
            <td></td>
            <td>X</td>
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
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>clientOvertimeRate</td>
            <td>Double</td>
            <td>Hourly rate at which the client company will be billed for overtime.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>clientRating</td>
            <td>Integer</td>
            <td>Score from BH Automation Client Rating Tool.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>comments</td>
            <td>String (2147483647)</td>
            <td>Text field for entering any comments about the Placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>commissions</td>
            <td>To-many association</td>
            <td>Ids of PlacementCommissions associated with this Placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>correlatedCustomDate1-3</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomFloat1-3</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>correlatedCustomInt1-3</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomText1-10</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomTextBlock1-3</td>
            <td>String (2147483647)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>costCenter</td>
            <td>String (100)</td>
            <td>Text field for Client Cost Center. Drives invoice grouping (placements with the same cost center for the same client will be grouped together).</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customBillRate1-10</td>
            <td>BigDecimal</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customDate1-13</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customEncryptedText1-10</td>
            <td>String (2147483647)</td>
            <td>Configurable encrypted text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customFloat1-23</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customInt1-23</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customObject1s to 10s</td>
            <td>CustomObject</td>
            <td>Fields to which custom objects can be assigned. For more information about custom objects, see the Bullhorn Resource Center and the following article on using the REST API with custom objects:
            <br><a href="https://bullhorn.github.io/Custom-Objects/">https://bullhorn.github.io/Custom-Objects</a></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customPayRate1-10</td>
            <td>BigDecimal</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customText1-60</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customTextBlock1-10</td>
            <td>String (2147483647)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp (5)</td>
            <td>Indicates when this Placement was created in the Bullhorn system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateBegin</td>
            <td>Timestamp</td>
            <td>Date when the Candidate will begin work.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateClientEffective</td>
            <td>Timestamp</td>
            <td>Date when a pending change to the client bill rate will take effect.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateEffective</td>
            <td>Timestamp</td>
            <td>Date when a pending change to the Candidate&#x2019;s pay rate will take effect.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateEnd</td>
            <td>Timestamp</td>
            <td>Date when the job will end. For a permanent placement, this is null.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date on which the Placement was last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>daysGuaranteed</td>
            <td>Integer</td>
            <td>Number of days the Candidate is guaranteed for this job. If the Candidate leaves the job before working this many days, the ClientCompany may not have to pay its fee; see daysProRated. Used for Permanent placements.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>daysProRated</td>
            <td>Integer</td>
            <td>Indicates how many days the Candidate must work before the Client Corporation will be expected to pay a prorated portion of the fee. Used for Permanent placements. For example, if daysGuaranteed = 90 and daysProRated = 30, then if the Candidate works 29 days no fee is due, but if the Candidate works 30-89 days the Client Corporation must pay a percentage of the fee, and if the Candidate works 90 days or more, the full fee is due.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>durationWeeks</td>
            <td>Double</td>
            <td>Duration of the job in weeks. You can use this property in addition to dateEnd.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>employeeType</td>
            <td>String (30)</td>
            <td>Type of employee. For example, W2, 1099, Employee, Contractor, and so forth.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>employmentStartDate</td>
            <td>Timestamp</td>
            <td>Indicates Date on which paid employment begins for this placement. Can be different from placement start date. Used for payroll integrations.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>employmentType</td>
            <td>String (200)</td>
            <td>Employment type.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>exemptionStatus</td>
            <td>PlacementTaxExemptionStatusLookup</td>
            <td>Tax exemption status for the Placement. Options are: 1=Exempt, 2=Non-Exempt, 3=Self-Pay</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>expiringCredentials</td>
            <td>Integer</td>
            <td>Number of credentials on requirements of this placement that are expiring within the next 30 days or already expired.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>fee</td>
            <td>Double</td>
            <td>Fee (expressed as a decimal) that the company will receive for this placement.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>hoursOfOperation</td>
            <td>String (100)</td>
            <td>Hours during which the employee will work.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>hoursPerDay</td>
            <td>Double</td>
            <td>Number of hours per day that the employee will work.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>housingAmenities</td>
            <td>To-many association</td>
            <td><strong>Not supported in this release.</strong> Amenities available as part of the housing arrangement for this Placement, if applicable.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>housingManagerID</td>
            <td>Integer</td>
            <td>Id of the corporate user serving as manager of the housing arrangements, if applicable.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>housingStatus</td>
            <td>String (30)</td>
            <td>Status of the Placement Housing, if applicable.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>incompleteRequirements</td>
            <td>Integer</td>
            <td>Number of requirements on this placement that are incomplete.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoiceGroupID</td>
            <td>Integer</td>
            <td><strong>Not supported in this release.</strong> Id of the InvoiceGroup object associated with this Placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoiceGroupName</td>
            <td>String (100)</td>
            <td>Name of the invoice group associated with this Placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoiceID</td>
            <td>Integer</td>
            <td><strong>Not supported in this release.</strong> Id of the Invoice object associated with this Placement. This field is used for Permanent placements since only a single invoice is needed.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoiceItems</td>
            <td>To-many association</td>
            <td><strong>Not supported in this release.</strong> Invoice Items associated with this Placement.</td>
            <td></td>
            <td></td>
        </tr>
            <tr class="odd">
            <td>isWorkFromHome</td>
            <td>Boolean</td>
            <td>Work from Home sourced from the associated JobOrder record. Can be changed if not set on JobOrder.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobLocation</td>
            <td>To-one association</td>
            <td>Location sourced from the associated JobOrder record.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jobOrder</td>
            <td>To-one association</td>
            <td>JobOrder associated with this Placement. Cannot be changed after this record is created.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>jobSubmission</td>
            <td>To-one association</td>
            <td>JobSubmission associated with this Placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>lastBteSyncDate</td>
            <td>Timestamp</td>
            <td>Pay and Bill corporations only: Used to store the date and time of the last known sync a Bullhorn placement was synced into Bullhorn Time & Expense. This field should only appear if a corporation is WFR enabled and PeopleNet Front Office Integration enabled.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>location</td>
            <td>To-one association</td>
            <td>Location sourced from the ClientCorporation record associated to this Placement by way of the Location entity.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>markUpPercentage</td>
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
            <td>onboardingDocumentReceivedCount</td>
            <td>Integer</td>
            <td>Number of eStaff onboarding documents that have been received by the Candidate.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>onboardingDocumentSentCount</td>
            <td>Integer</td>
            <td>Number of eStaff onboarding documents that have been sent and completed by the Candidate.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>onboardingPercentComplete</td>
            <td>Integer</td>
            <td>Percentage of eStaff onboarding documents that a Candidate has completed.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>onboardingReceivedSent</td>
            <td>COMPOSITE</td>
            <td>
            Readonly composite field that contains:
            <ul>
               <li>onboardingDocumentReceivedCount</li>
               <li>onboardingDocumentSentCount</li>
            </ul>
            Use this to only view these fields.<br>To update, update the fields directly.
         </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>onboardingStatus</td>
            <td>String (100)</td>
            <td>Candidate&#x2019;s eStaff onboarding status.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>optionsPackage</td>
            <td>String (2147483647)</td>
            <td>Text description of the stock options package associated with this Placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>otExemption</td>
            <td>Integer</td>
            <td>Indicates whether the employee is eligible for hours over 40 to automatically be classified as Overtime. 0 = Eligible, 1 = Exempt.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>otherHourlyFee</td>
            <td>Double</td>
            <td>Additional hourly fees, if any.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>otherHourlyFeeComments</td>
            <td>String (2147483647)</td>
            <td>Free text field for comments on additional hourly fees.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>overtimeMarkUpPercentage</td>
            <td>Double</td>
            <td>overtimeMarkupPercentage = (clientOvertimeRate - overtimeRate) / overtimeRate. Multiply by 100 to get actual percentage.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>overtimeRate</td>
            <td>Double</td>
            <td>Hourly rate at which the employee will be paid for overtime work.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>owner</td>
            <td>To-one association</td>
            <td>CorporateUser who owns the JobOrder. The default value is the user who creates the JobOrder and is also the default owner of Placement records created from this JobOrder. The field name in ATS for owner is listed in field maps as jobUserID.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payGroup</td>
            <td>String (255)</td>
            <td>Indicates the frequency with which the placement is paid. Used for payroll integrations.</td>
            <td></td>
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
            <td>payrollEmployeeType</td>
            <td>To-one association</td>
            <td>Indicates the type of employee for payroll purposes.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payrollSyncStatus</td>
            <td>To-one association</td>
            <td>Indicates whether the Placement has successfully synced to payroll provider. Used for payroll integrations.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>pendingChangeRequests</td>
            <td>Integer</td>
            <td>Number of change requests with a status of submitted.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placementCertifications</td>
            <td>To-many association</td>
            <td>PlacementCertifications associated with this Placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>positionCode</td>
            <td>String (100)</td>
            <td>Indicates a code for the position. Used in payroll integrations.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>recruitingManagerPercentGrossMargin</td>
            <td>Double</td>
            <td>Percentage of the total gross margin that the recruiting manager will receive.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>referralFee</td>
            <td>BigDecimal</td>
            <td>Referral fee associated with this Placement, if any. Only used with external Candidate source.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>referralFeeType</td>
            <td>String (20)</td>
            <td>Configurable list of fee types associated with the referralFee. Only used with external Candidate source.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>reportTo</td>
            <td>String (100)</td>
            <td>Name/title of the person to whom this position will report.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>reportedMargin</td>
            <td>Double</td>
            <td>Hourly margin in dollars, calculated using burden and other costs.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>salary</td>
            <td>BigDecimal</td>
            <td>Salary that the employee will receive. This may be either a yearly or hourly salary. See salaryUnit. The default value is 0.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>salaryUnit</td>
            <td>String (20)</td>
            <td>Indicates whether the salary is per year or per hour.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>salesManagerPercentGrossMargin</td>
            <td>Double</td>
            <td>Percentage of the total gross margin that the sales manager will receive.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>shift</td>
            <td>To-one association</td>
            <td>Shift associated with this Placement, if applicable.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>statementClientContact</td>
            <td>To-one association</td>
            <td>ClientContact who should receive statements associated with this Placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>String (30)</td>
            <td>Status of the Placement. For example, Approved, Completed, Terminated, and so forth. The default value is &#x201C;Placed&#x201D;.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>surveys</td>
            <td>Survey</td>
            <td><strong>Not supported in this release.</strong> Surveys associated with this Placement.</td>
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
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>taxState</td>
            <td>String (50)</td>
            <td>Name of the US State that is the tax state for this Placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>terminationReason</td>
            <td>String (100)</td>
            <td>If the Placement has a status of &#x201C;Terminated,&#x201D; this field indicates the reason for termination.</td>
            <td></td>
            <td></td>
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
            <td><strong>Not supported in this release.</strong> Timecards associated with this Placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timecardExpenses</td>
            <td>TimecardExpense</td>
            <td><strong>Not supported in this release.</strong> Expenses incurred in relation to this Placement, for which the employee wishes to be reimbursed.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timecardTimes</td>
            <td>TimecardTime</td>
            <td><strong>Not supported in this release.</strong> Timecard entries associated with this Placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>workWeekStart</td>
            <td>Integer</td>
            <td>Day of the week on which the work week begins for this Placement. 1 = Sunday, 2 = Monday, and so forth.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>vendorClientCorporation</td>
            <td>To-one association</td>
            <td>Umbrella company associated with this Placement.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
