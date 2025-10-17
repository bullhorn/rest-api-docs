# Pay and Bill - BillMaster

Represents the master billing record that aggregates header-level financial information and links the various billing transactions and adjustments for an invoice or billing event.

**CRUD Access**: READ, UPDATE

**Entitlements**: View Bill Master, Edit Billable Charge

**Purpose**: BillMaster records group transactions by:
- **Earn Code** - Type of work (regular hours, overtime, double-time, etc.)
- **Transaction Date** - Date work was performed or expense incurred
- **External ID** - External system identifier for integration

This grouping enables detailed rate tracking by earn code, easy identification of overtime vs. regular hours, and integration with external time & expense systems.

<table>
    <colgroup>
        <col width="20%" />
        <col width="20%" />
        <col width="60%" />
    </colgroup>
    <thead>
        <tr class="header">
            <th>BillMaster fields</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>Integer</td>
            <td><strong>Required, Read-only</strong><br/>Unique identifier for this entity.</td>
        </tr>
        <tr>
            <td>addedByUser</td>
            <td>To-one association</td>
            <td><strong>Required, Read-only</strong><br/>
            CorporateUser who added the record. Tracks which internal user created this BillMaster, typically the user who initiated the billing sync or manual charge creation.
            <p><em>Default fields: id, firstName, lastName</em></p></td>
        </tr>
        <tr>
            <td>billMasterTransactions</td>
            <td>To-many association</td>
            <td><strong>Read-only</strong><br/>
            Associated BillMasterTransactions containing the audit trail and rate information. Each transaction represents a single time/expense entry with its full lifecycle tracking including rates, amounts, adjustments, and invoice links. This is the primary relationship for accessing detailed transaction data.
            <p><em>Default fields: id</em></p>
            <p><strong>Usage</strong>: GET /entity/BillMaster/{id}/billMasterTransactions</p></td>
        </tr>
        <tr>
            <td>billableCharge</td>
            <td>To-one association</td>
            <td><strong>Read-only</strong><br/>
            Parent BillableCharge container that groups all BillMasters for a billing period. The charge manages workflow status (NotReadyToBill, ReadyToBill, Invoiced) and approval requirements. Multiple BillMasters can belong to a single BillableCharge when transactions span different earn codes or dates.
            <p><em>Default fields: id</em></p></td>
        </tr>
        <tr>
            <td>billingCalendarInstance</td>
            <td>To-one association</td>
            <td><strong>Read-only</strong><br/>
            Determines billing period and invoicing eligibility. Automatically matched based on transactionDate falling within calendar instance date range.
            <p><strong>Eligibility Rule</strong>: <code>isEligible = (billingCalendarInstance.endDate &lt; current date)</code></p>
            <p>Updatable via BillMasterSyncBatch when billing calendar changes on placement. Derived from InvoiceTerm's payBillCycle. Used extensively for period-based invoicing and eligibility calculations. Requires "viewCalendar" entitlement to read.</p>
            <p><em>Default fields: id, label</em></p></td>
        </tr>
        <tr>
            <td>billingSyncBatch</td>
            <td>To-one association</td>
            <td><strong>Read-only</strong><br/>
            Links to originating time & expense import batch. All BillMasters from same external batch share same billingSyncBatch for traceability. Enables tracking which external events created which BillMasters. Used to process corrections and updates to existing batches. Provides audit trail for external system integration. Immutable after creation.
            <p><em>Default fields: id</em></p></td>
        </tr>
        <tr>
            <td>billingSyncBatchFileAttachments</td>
            <td>To-many association</td>
            <td><strong>Read-only</strong><br/>
            BillingSyncBatchFileAttachment - Collection of import files associated with this record. When BillMasters are created via automated billing sync (importing timecard data from external systems), this tracks which import files contained the source data. Used for data lineage tracking, troubleshooting sync issues, and audit trails showing original source of billing data.
            <p><em>Default fields: id</em></p>
            <p><strong>Usage</strong>: GET /entity/BillMaster/{id}/billingSyncBatchFileAttachments</p></td>
        </tr>
        <tr>
            <td>canInvoice</td>
            <td>Boolean</td>
            <td><strong>Updatable</strong><br/>
            Controls invoicing eligibility. Set to false by invoice creation process after successful invoicing to prevent double-invoicing. Can be manually set to false to temporarily exclude specific earn codes or transaction dates from invoicing without marking as unbillable. One of the few updatable fields on BillMaster. Checked before including transactions in invoices.
            <p><em>Default: true</em></p></td>
        </tr>
        <tr>
            <td>chargeTypeLookup</td>
            <td>To-one association</td>
            <td><strong>Required, Read-only</strong><br/>
            Categorizes as Time (1), Expense (2), or Time and Expense (3). Automatically derived from EarnCode's EarnCodeGroup during creation. Immutable after creation. Used for:
            <ul>
                <li>Grouping transactions on invoices</li>
                <li>Separating time from expense reporting</li>
                <li>Validating customer required fields</li>
                <li>Determining applicable workflows</li>
            </ul>
            <p><strong>Options</strong>: Timesheet or Expense Report</p></td>
        </tr>
        <tr>
            <td>customerRequiredFields</td>
            <td>To-many association</td>
            <td><strong>Read-only</strong><br/>
            BillMasterCustomerRequiredField - Custom fields required by specific clients (e.g., project codes, cost centers, department codes, PO numbers). These fields are defined in the client's InvoiceTerm and automatically associated when BillMaster is created. Each field can be:
            <ul>
                <li><strong>Text</strong>: Free-text input (e.g., project description)</li>
                <li><strong>Custom Picker</strong>: Dropdown selection from predefined options</li>
                <li><strong>Purchase Order</strong>: PO number entry with validation</li>
            </ul>
            <p>Used for client-specific reporting, invoice line item details, and GL export segmentation.</p>
            <p><strong>Usage</strong>: GET /entity/BillMaster/{id}/customerRequiredFields</p></td>
        </tr>
        <tr>
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td><strong>Required, Read-only</strong><br/>
            Date and time when this entity was created in the Bullhorn system. System timestamp that differs from transactionDate (business date of work). Used for audit trails and tracking when billing data was received.</td>
        </tr>
        <tr>
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td><strong>Required, Read-only</strong><br/>
            Date and time when this entity was last modified. Updated automatically whenever the record changes. Used for synchronization, caching, and audit trails.</td>
        </tr>
        <tr>
            <td>earnCode</td>
            <td>To-one association</td>
            <td><strong>Read-only</strong><br/>
            Defines type of work performed (regular hours, overtime, double-time, PTO, holiday, sick, etc.). Primary grouping dimension for BillMaster records.
            <p><strong>Key Behaviors</strong>:</p>
            <ul>
                <li>Controls discount eligibility via <code>isDiscountable</code> flag - discounts can only be applied if earnCode.isDiscountable=true</li>
                <li>Determines chargeTypeLookup via EarnCodeGroup</li>
                <li>Links to rate cards for billing calculations</li>
                <li>Immutable after creation</li>
                <li>Required field used in unique constraint</li>
            </ul>
            <p><em>Default fields: id, externalID, title</em></p></td>
        </tr>
        <tr>
            <td>externalID</td>
            <td>String (100)</td>
            <td><strong>Read-only</strong><br/>
            External system identifier for integration with third-party time/expense systems. Auto-generated as <code>BH_INJECTED_ID_{billMasterID}</code> if duplicate detected. Used with unique constraint on <code>earnCodeID + transactionDate + externalID + workedShiftID</code> to prevent duplicate imports. Essential for correlating BillMasters with external timecard records.</td>
        </tr>
        <tr>
            <td>location</td>
            <td>To-one association</td>
            <td><strong>Updatable</strong><br/>
            Work location critical for sales tax calculations. Copied from Placement during BillMaster creation. Updatable via BillMasterSyncBatch when placement location changes (syncLocation=true).
            <p><strong>Sales Tax Determination</strong>:</p>
            <ul>
                <li>System matches location effective-dated version based on transactionDate</li>
                <li>Used to determine applicable tax rates via LocationVersionTaxGroups</li>
                <li>Invoice creation queries sales tax rates based on location and transactionDate falling between location's effectiveDate and effectiveEndDate</li>
            </ul>
            <p>Location changes can result in different tax rates for transactions on different dates.</p>
            <p><em>Default fields: id, clientCorporation, candidate, title, effectiveDate, effectiveEndDate, versionID, externalID</em></p></td>
        </tr>
        <tr>
            <td>owner</td>
            <td>To-one association</td>
            <td><strong>Read-only</strong><br/>
            CorporateUser owner of the record. Typically the user who created the BillableCharge parent, or assigned via ownership rules. Used for authorization checks and record access control.
            <p><em>Default fields: id, firstName, lastName</em></p></td>
        </tr>
        <tr>
            <td>payBillCycle</td>
            <td>To-one association</td>
            <td><strong>Read-only</strong><br/>
            Links to billing cycle defining billing frequency and calendar. Contains billingCalendarID used to determine billingCalendarInstance. Sourced from InvoiceTerm effective for transactionDate.
            <p><strong>Update Behavior</strong>: Updatable via BillMasterSyncBatch when invoice terms change. Used for:</p>
            <ul>
                <li>Billing period determination</li>
                <li>Calendar synchronization</li>
                <li>Coordinating payroll and billing cycles</li>
                <li>Grouping transactions by pay/bill period</li>
            </ul>
            <p>Requires "viewPayBillCycle" entitlement to read.</p>
            <p><em>Default fields: id</em></p></td>
        </tr>
        <tr>
            <td>transactionDate</td>
            <td>Date</td>
            <td><strong>Read-only</strong><br/>
            Business date when work was performed or expense incurred. Critical for effective-dated version matching - determines which versions apply:
            <ul>
                <li>BillingProfile version</li>
                <li>InvoiceTerm version</li>
                <li>DiscountRate versions</li>
                <li>SurchargeRate versions</li>
                <li>PlacementRateCard version</li>
                <li>Location version (for sales tax)</li>
            </ul>
            <p><strong>Important</strong>: Different from dateAdded (system timestamp). Part of grouping key for BillMaster records. Required field, immutable after creation. System selects configuration versions where transactionDate falls between effectiveDate and effectiveEndDate.</p></td>
        </tr>
        <tr>
            <td>transactionStatus</td>
            <td>To-one association</td>
            <td><strong>Updatable</strong><br/>
            Current approval status of the transaction. Controls workflow progression and invoicing eligibility.
            <p><strong>Status Values</strong>:</p>
            <ul>
                <li><strong>1 = Pending</strong>: Initial state, awaiting submission</li>
                <li><strong>2 = Submitted</strong>: Submitted for approval, not yet reviewed</li>
                <li><strong>3 = Payment Approved</strong>: Approved for payroll but not yet billing</li>
                <li><strong>4 = Approved</strong>: Fully approved, eligible for invoicing</li>
            </ul>
            <p>BillableCharge status calculations prioritize transactions by approval state. Only Approved (4) transactions are invoiced by default unless readyToBillOverride is used.</p></td>
        </tr>
        <tr>
            <td>discountRates</td>
            <td>To-many association</td>
            <td><strong>Updatable</strong><br/>
            Percentage or fixed-amount reductions applied to billing (volume discounts, early payment discounts, client-specific rate reductions). Copied from InvoiceTermVersion during BillMaster creation.
            <p><strong>Eligibility</strong>: Only applicable if earnCode.isDiscountable=true - system filters discounts for non-discountable earn codes.</p>
            <p><strong>Update Behavior</strong>: Updatable via BillMasterSyncBatch (syncDiscount=true) when invoice terms change. System selects rate versions where transactionDate falls between effectiveDate and effectiveEndDate.</p>
            <p><strong>Calculation</strong>: Applied in calculatePriority order during invoice calculation - each discount calculated on amount after previous discounts (compounding). Can affect tax base unless ignoreForSalesTaxCalculations=true.</p>
            <p><em>Default fields: id, title, effectiveDate, effectiveEndDate, versionID, rate, amount, discountTypeLookup</em></p>
            <p><strong>Usage</strong>: GET /entity/BillMaster/{id}/discountRates</p></td>
        </tr>
        <tr>
            <td>surchargeRates</td>
            <td>To-many association</td>
            <td><strong>Updatable</strong><br/>
            Additional charges applied to billing (shift differentials, weekend rates, hazard pay, rush fees, administrative fees). Copied from InvoiceTermVersion during BillMaster creation.
            <p><strong>Eligibility</strong>: No earn code restrictions - can be applied to any earn code type, unlike discounts.</p>
            <p><strong>Update Behavior</strong>: Updatable via BillMasterSyncBatch (syncSurcharge=true) when invoice terms change. System selects rate versions where transactionDate falls between effectiveDate and effectiveEndDate.</p>
            <p><strong>Types</strong>:</p>
            <ul>
                <li><strong>Type 1</strong>: Fixed amount per unit (e.g., $5 per hour shift differential)</li>
                <li><strong>Type 2+</strong>: Percentage of base amount (e.g., 10% weekend surcharge)</li>
            </ul>
            <p>Applied during invoice creation after base amount calculation and before tax calculations.</p>
            <p><em>Default fields: id, title, effectiveDate, effectiveEndDate, versionID, rate, amount, type</em></p>
            <p><strong>Usage</strong>: GET /entity/BillMaster/{id}/surchargeRates</p></td>
        </tr>
    </tbody>
</table>
