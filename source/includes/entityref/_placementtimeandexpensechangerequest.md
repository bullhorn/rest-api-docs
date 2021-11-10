# PlacementTimeAndExpenseChangeRequest

Represents a change request that is submitted for a particular Placement regarding employee time and expense data. Placement time and expense information cannot be directly modified; a user must submit a PlacementTimeAndExpenseChangeRequest for approval. Supports create, update, and delete operations.

| **PlacementTimeAndExpenseChangeRequest field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| timeAndExpenseSource | String (1) | Indicates type of assignment.<br/> C=Clock, W=Web or V=VMS Provider. | | |
| employeeBadge | Integer | If cards are used by locations, then pass a unique badge/card number. Maps to Employee Badge field. | | |
| departmentMapping | String (100) | Used to map to a Peoplenet Department for clocks. Not used by web. | | |
| departmentAbbr | String (8) | Used to create the short department name that is displayed on clocks. | | |
| departmentName | String (30) | Used to create the long department name that is displayed on TMC, reporting, and so forth. | | |
| clientDepartmentCode | String (100) | Used to expand Peoplenet Department mapping for clocks, not used by web. | | |
| dtBillingFactor | BigDecimal | If not provided, the default is 2.00000. | | |
| inOutIndicator | String (1) | Indicates how in and out times are implemented.<br/> Blank=Default, 0=Hours per day, 1=In/Out template | | |
| proxyCPAFlag | String (1) | Enables Closed Period Adjustment for Proxy (Admin).<br/> 0 = Off, 1 =On	 | | |
| employeeCPAFlag | String (1) | Enables Closed Period Adjustment for Employee.<br/> 0 = Off, 1 = On | | |
| employeeOtType | Integer | Indicates whether or not to search for and apply pay rules to the time card.<br/> 0 = Default OT Rules, 1=No OT calculated, 2=Exempt	 | | |
| expenseApproverFName | String (20) | First name of the expense approver. | | |
| expenseApproverLName | String (20) | Last name of the expense approver. | | |
| expenseApproverEmail | String (132) | Email address name of the expense approver. | | |
| backupExpenseApproverFName | String (20) | First name of the backup expense approver. | | |
| backupExpenseApproverLName | String (20) | Last name of the backup expense approver. | | |
| backupExpenseApproverEmail | String (132) | Email address of the backup expense approver. | | |
| approvalMethod | String (32) | Indicates the method used for approval.<br/> ELEC = Email/Electronic Approval, ASAP = Fax Approver/ASAP, NAR = No Approval Required | | |
| expenseIndicator | String (1) | Indicates if this is an expense.<br/> 0 = Off, 1 = On | | |
| clockMapping | String (32) | Location code used for Clocks. | | |
| rounding | String (10) | Designates the rounding compensating adjustment to then round the whole day to the 1/4 hour, or 1/10 hour, as opposed to rounding each transaction individually. | | |
| branding | String (32) | Designates the branding. | | |
| payRules | String (50) | Pay rule type. | | |
| vmsEmployeeID | String (20) | VMS employee identification number. | | |
| vmsAssignmentNumber | String (32) | VMS assignment identification number. | | |
| vmsCostCenter | String (32) | Name of the cost center associated with this job. This cost center flows to the placement record and drives invoice grouping. | | |
| vmsRequisitionID | String (32) | VMS requisition identification number. | | |
| alternateWorkSchedule | String (50) | Used to designate alternate work schedule. | | |
| noBillExpenseApproverFirstName | String (20) | First name of the no bill expense approver. | | |
| noBillExpenseApproverLastName | String (20) | Last name of the no bill expense approver. | | |
| noBillExpenseApproverEmail | String (132) | Email address of the no bill expense approver. | | |
| backupNoBillExpenseApproverFirstName | String (20) | First name of the backup no bill expense approver. | | |
| backupNoBillExpenseApproverLastName | String (20) | Last name of the backup no bill expense approver. | | |
| backupNoBillExpenseApproverEmail | String (132) | Email address of the backup no bill expense approver. | |
| timeAndExpenseBranch | String (33) | Name or code of the time and expense branch. | | |
