# PlacementTimeAndExpense

 Placement time and expense data. Placement time and expense information cannot be directly modified; a user must submit a PlacementTimeAndExpenseChangeRequest for approval. Supports read operations.

| **PlacementTimeAndExpense field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| alternateWorkSchedule | String (50) | Used to designate alternate work schedule. | | |
| approvalMethod | String (32) | Indicates the method used for approval.<br/> ELEC = Email/Electronic Approval, ASAP = Fax Approver/ASAP, NAR = No Approval Required | | |
| backupExpenseApproverEmail | String (132) | Email address of the backup expense approver. | | |
| backupExpenseApproverFName | String (20) | First name of the backup expense approver. | | |
| backupExpenseApproverLName | String (20) | Last name of the backup expense approver. | | |
| backupNoBillExpenseApproverEmail | String (132) | Email address of the backup no bill expense approver. | |
| backupNoBillExpenseApproverFirstName | String (20) | First name of the backup no bill expense approver. | | |
| backupNoBillExpenseApproverLastName | String (20) | Last name of the backup no bill expense approver. | | |
| branding | String (32) | Designates the branding. | | |
| clientDepartmentCode | String (100) | Used to expand Peoplenet Department mapping for clocks, not used by web. | | |
| clockMapping | String (32) | Location code used for Clocks. | | |
| departmentAbbr | String (8) | Used to create the short department name that is displayed on clocks. | | |
| departmentMapping | String (100) | Used to map to a Peoplenet Department for clocks. Not used by web. | | |
| departmentName | String (30) | Used to create the long department name that is displayed on TMC, reporting, and so forth. | | |
| dtBillingFactor | BigDecimal | If not provided, the default is 2.00000. | | |
| employeeBadge | Integer | If cards are used by locations, then pass a unique badge/card number. Maps to Employee Badge field. | | |
| employeeCPAFlag | String (1) | Enables Closed Period Adjustment for Employee.<br/> 0 = Off, 1 = On | | |
| employeeOtType | Integer | Indicates whether or not to search for and apply pay rules to the time card.<br/> 0 = Default OT Rules, 1=No OT calculated, 2=Exempt	 | | |
| expenseApproverEmail | String (132) | Email address name of the expense approver. | | |
| expenseApproverFName | String (20) | First name of the expense approver. | | |
| expenseApproverLName | String (20) | Last name of the expense approver. | | |
| expenseIndicator | String (1) | Indicates if this is an expense.<br/> 0 = Off, 1 = On | | |
| inOutIndicator | String (1) | Indicates how in and out times are implemented.<br/> Blank=Default, 0=Hours per day, 1=In/Out template | | |
| noBillExpenseApproverEmail | String (132) | Email address of the no bill expense approver. | | |
| noBillExpenseApproverFirstName | String (20) | First name of the no bill expense approver. | | |
| noBillExpenseApproverLastName | String (20) | Last name of the no bill expense approver. | | |
| payRules | String (50) | Pay rule type. | | |
| proxyCPAFlag | String (1) | Enables Closed Period Adjustment for Proxy (Admin).<br/> 0 = Off, 1 =On	 | | |
| rounding | String (10) | Designates the rounding compensating adjustment to then round the whole day to the 1/4 hour, or 1/10 hour, as opposed to rounding each transaction individually. | | |
| timeAndExpenseBranch | String (33) | Name or code of the time and expense branch. | | |
| timeAndExpenseSource | String (1) | Indicates type of assignment.<br/> C=Clock, W=Web or V=VMS Provider. | | |
| timeAndLaborEnabledDate | Timestamp | Date when placement is to be evaluated through the Time and Labor Engine. | | |
| vmsAssignmentNumber | String (32) | VMS assignment identification number. | | |
| vmsCostCenter | String (32) | Name of the cost center associated with this job. This cost center flows to the placement record and drives invoice grouping. | | |
| vmsEmployeeID | String (20) | VMS employee identification number. | | |
| vmsRequisitionID | String (32) | VMS requisition identification number. | | |