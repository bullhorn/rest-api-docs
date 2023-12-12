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
        <tr class="odd">
            <td>approvedPlacementRateCardChangeRequests</td>
            <td>Integer</td>
            <td></td>
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
        <tr class="odd">
            <td>billingProfile</td>
            <td>To-one association</td>
            <td>BillingProfile</td>
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
            <td>branch</td>
            <td>To-one association</td>
            <td>Branch</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>canEnterTime</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
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
        <tr class="even">
            <td>clientContact</td>
            <td>To-one association</td>
            <td>ClientContact</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>ClientCorporation</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>clientCorporationLine</td>
            <td>To-one association</td>
            <td>AgreementLine</td>
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
        <tr class="odd">
            <td>completed</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>correlatedCustomDate1</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomDate2</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>correlatedCustomDate3</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomFloat1</td>
            <td>Double</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>correlatedCustomFloat2</td>
            <td>Double</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomFloat3</td>
            <td>Double</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>correlatedCustomInt1</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomInt2</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>correlatedCustomInt3</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomText1</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>correlatedCustomText10</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomText2</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>correlatedCustomText3</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomText4</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>correlatedCustomText5</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomText6</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>correlatedCustomText7</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomText8</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>correlatedCustomText9</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomTextBlock1</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>correlatedCustomTextBlock2</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>correlatedCustomTextBlock3</td>
            <td>String (2147483647)</td>
            <td></td>
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
        <tr class="odd">
            <td>credentialSpecialistUserID</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customBillRate1</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customBillRate10</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customBillRate2</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customBillRate3</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customBillRate4</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customBillRate5</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customBillRate6</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customBillRate7</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customBillRate8</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customBillRate9</td>
            <td>BigDecimal</td>
            <td></td>
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
            <td>customEncryptedText1</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customEncryptedText10</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customEncryptedText2</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customEncryptedText3</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customEncryptedText4</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customEncryptedText5</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customEncryptedText6</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customEncryptedText7</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customEncryptedText8</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customEncryptedText9</td>
            <td>String (2147483647)</td>
            <td></td>
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
            <td>customObject1s</td>
            <td>To-many association</td>
            <td>PlacementCustomObjectInstance1</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customObject2s</td>
            <td>To-many association</td>
            <td>PlacementCustomObjectInstance2</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customObject3s</td>
            <td>To-many association</td>
            <td>PlacementCustomObjectInstance3</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customPayRate1</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customPayRate10</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customPayRate2</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customPayRate3</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customPayRate4</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customPayRate5</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customPayRate6</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customPayRate7</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customPayRate8</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customPayRate9</td>
            <td>BigDecimal</td>
            <td></td>
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
            <td>Timestamp</td>
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
            <td>Indicates how many days the Candidate must work before the Client Corporation will be expected to pay a pro-rated portion of the fee. Used for Permanent placements. For example, if daysGuaranteed = 90 and daysProRated = 30, then if the Candidate works 29 days no fee is due, but if the Candidate works 30-89 days the Client Corporation must pay a percentage of the fee, and if the Candidate works 90 days or more, the full fee is due.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>documentDeadline</td>
            <td>Date</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>draftPlacementRateCardChangeRequests</td>
            <td>Integer</td>
            <td></td>
            <td></td>
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
            <td>estaffGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>estimatedEndDate</td>
            <td>Date</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>exemptionStatus</td>
            <td>To-one association</td>
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
        <tr class="even">
            <td>expiringRequirements</td>
            <td>Integer</td>
            <td></td>
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
            <td>fileAttachments</td>
            <td>To-many association</td>
            <td>PlacementFileAttachment</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>flatFee</td>
            <td>Double</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment1</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment1</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment2</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment2</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment3</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment3</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment4</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment4</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment5</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment5</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerServiceCode</td>
            <td>To-one association</td>
            <td>GeneralLedgerServiceCode</td>
            <td></td>
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
            <td>inProgress</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>incomplete</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>incompleteRequirements</td>
            <td>Integer</td>
            <td>Number of requirements on this placements that are incomplete.</td>
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
        <tr class="odd">
            <td>isMultirate</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isWorkFromHome</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>jobCode</td>
            <td>To-one association</td>
            <td>JobCode</td>
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
        <tr class="odd">
            <td>lastApprovedPlacementChangeRequest</td>
            <td>To-one association</td>
            <td>PlacementChangeRequest</td>
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td>X</td>
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
            <td>Indicates whether the employee is eligible for hours over 40 to automatically be classified as Overtime. Boolean: 0 = Eligible, 1 = Exempt.</td>
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
            <td></td>
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
        <tr class="even">
            <td>owners</td>
            <td>To-many association</td>
            <td>CorporateUser</td>
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
        <tr class="even">
            <td>pendingPlacementRateCardChangeRequests</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>placementCertifications</td>
            <td>To-many association</td>
            <td>PlacementCertifications associated with this Placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>placementDocumentDeadline</td>
            <td>Date</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placementHistories</td>
            <td>To-many association</td>
            <td>PlacementHistory</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>placementRateCardID</td>
            <td>Integer</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>placementRateCardStatus</td>
            <td>To-one association</td>
            <td>PlacementRateCardStatusLookup</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>positionCode</td>
            <td>String (100)</td>
            <td>Indicates a code for the position. Used in payroll integrations.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>projectCodeList</td>
            <td>String (255)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>quitJob</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>readyForReviewPlacementRateCardChangeRequests</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td>X</td>
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
        <tr class="odd">
            <td>rejectedPlacementRateCardChangeRequests</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td>X</td>
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
            <td>requestRevisionPlacementRateCardChangeRequests</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>requirementCompleted</td>
            <td>Double</td>
            <td></td>
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
            <td>To-many association</td>
            <td>TimeUnit associated with this Placement.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timesheetCycle</td>
            <td>To-one association</td>
            <td>TimesheetCycle</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>totalRequirements</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>updated</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>userHousingComplexUnits</td>
            <td>To-many association</td>
            <td>UserHousingComplexUnit</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>vendorClientCorporation</td>
            <td>To-one association</td>
            <td>ClientCorporation</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>workWeekStart</td>
            <td>Integer</td>
            <td>Day of the week on which the work week begins for this Placement. 1 = Sunday, 2 = Monday, and so forth.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>workersCompensationRate</td>
            <td>To-one association</td>
            <td>WorkersComp</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
