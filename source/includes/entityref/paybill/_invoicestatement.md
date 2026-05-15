# Pay and Bill - InvoiceStatement

Represents a generated invoice document sent to a client corporation, summarizing billable charges for a specific billing period. InvoiceStatement is the central pay-and-bill entity: it aggregates line items, taxes, discounts, and surcharges into a total amount owed, and tracks the full lifecycle from draft through finalization, delivery, and payment.

CRUD Access - READ, UPDATE

Entitlements - View Any Invoice Statement, Edit Any Invoice Statement

<table>
    <colgroup>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
    </colgroup>
    <thead>
        <tr class="header">
            <th>InvoiceStatement fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
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
            <td>amountPaid</td>
            <td>BigDecimal</td>
            <td>Total amount paid against this invoice statement.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>bccRecipients</td>
            <td>To-many association</td>
            <td>
                <p>Person records to BCC when this invoice statement is emailed.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>billingAddress</td>
            <td>Address</td>
            <td>Invoice billing address (address1, address2, city, state, zip, countryID).</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>billingAttention</td>
            <td>String (200)</td>
            <td>Attention line on the invoice, typically the name of the client contact to whom the invoice is addressed.</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>billingClientContact</td>
            <td>To-one association</td>
            <td>
                <p>The client contact designated as the billing contact for this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>billingCorporateUser</td>
            <td>To-one association</td>
            <td>
                <p>The internal corporate user responsible for billing on this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>billingPeriodEndDate</td>
            <td>DateTime</td>
            <td>End date of the billing period covered by this invoice statement.</td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>billingProfile</td>
            <td>To-one association</td>
            <td>
                <p>The billing profile that governs the formatting and delivery rules for this invoice statement. Set at creation time; cannot be changed after creation.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>billingProfileCorrelatedCustomText1 to 10</td>
            <td>String (200)</td>
            <td>Configurable text fields correlated from the billing profile. Cannot be edited after finalization.</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>billingProfileCorrelatedCustomTextBlock1 to 3</td>
            <td>String (32000)</td>
            <td>Configurable large text fields correlated from the billing profile. Cannot be edited after finalization.</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>billingScheduleID</td>
            <td>Integer</td>
            <td>ID of the billing schedule that generated this invoice statement.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billableCharges</td>
            <td>To-many association</td>
            <td>
                <p>BillableCharge records included on this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>candidates</td>
            <td>To-many association</td>
            <td>
                <p>Candidate records associated with this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>ccRecipients</td>
            <td>To-many association</td>
            <td>
                <p>Person records to CC when this invoice statement is emailed.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>
                <p>The client corporation being invoiced. Set at creation time and cannot be changed.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>creditedByInvoiceStatement</td>
            <td>To-one association</td>
            <td>
                <p>The credit invoice statement that credited this invoice statement. Populated only when this invoice has been credited.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>creditOfInvoiceStatement</td>
            <td>To-one association</td>
            <td>
                <p>The original invoice statement that this invoice statement credits. Populated only when this is a credit invoice.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>currencyUnit</td>
            <td>To-one association</td>
            <td>
                <p>The currency in which this invoice statement is denominated.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date and time when this invoice statement was created.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date and time when this invoice statement was last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>deliveryMethodLookup</td>
            <td>To-one association</td>
            <td>
                <p>The delivery method (e.g., email, print) for this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>deliveryStatus</td>
            <td>To-one association</td>
            <td>
                <p>Current delivery status of this invoice statement (e.g., Not Applicable, Sent, Failed).</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>discountAmount</td>
            <td>BigDecimal</td>
            <td>Total calculated discount amount applied to this invoice statement. System-calculated.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>discountTotal</td>
            <td>BigDecimal</td>
            <td>Sum of all discount line item totals on this invoice statement. System-calculated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>discounts</td>
            <td>To-many association</td>
            <td>
                <p>InvoiceStatementDiscount records associated with this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>dueDate</td>
            <td>DateTime</td>
            <td>Payment due date, calculated from invoiceStatementDate plus paymentTerms (number of days). System-calculated; updated whenever invoiceStatementDate or paymentTerms changes.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>effectiveDate</td>
            <td>DateTime</td>
            <td>The effective date of the invoice statement, set at creation time.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>emailErrorReason</td>
            <td>String (100)</td>
            <td>Reason recorded when email delivery of this invoice statement fails.</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>fileTypesForInvoicing</td>
            <td>To-many association</td>
            <td>
                <p>BillingSyncBatchFileTypeLookup records indicating which billing sync batch file types are associated with this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>finalizedSubtotal</td>
            <td>BigDecimal</td>
            <td>Subtotal amount captured at the time this invoice statement was finalized. Null until finalization completes. System-calculated.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>finalizedTotal</td>
            <td>BigDecimal</td>
            <td>Total amount captured at the time this invoice statement was finalized. Null until finalization completes. System-calculated.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>generalLedgerExportStatusLookup</td>
            <td>To-one association</td>
            <td>
                <p>Current general ledger export status for this invoice statement (e.g., Not Ready to Export, Exported).</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>invoiceStatementDate</td>
            <td>DateTime</td>
            <td>The invoice date shown on the invoice statement document. Also used as the base date for calculating dueDate.</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>invoiceStatementDistributionBatch</td>
            <td>To-one association</td>
            <td>
                <p>The distribution batch this invoice statement belongs to, if any.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>invoiceStatementExports</td>
            <td>To-many association</td>
            <td>
                <p>InvoiceStatementExport file attachment records for this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>invoiceStatementExportsBatches</td>
            <td>To-many association</td>
            <td>
                <p>InvoiceStatementExportBatch records grouping the exports for this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>invoiceStatementFinalizedDate</td>
            <td>DateTime</td>
            <td>Date and time when this invoice statement was finalized. Set automatically by the finalization process.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>invoiceStatementLineDistributions</td>
            <td>To-many association</td>
            <td>
                <p>InvoiceStatementLineDistribution records associated with this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>invoiceStatementMessageTemplate</td>
            <td>To-one association</td>
            <td>
                <p>The message template used when emailing this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>invoiceStatementNumber</td>
            <td>String (100)</td>
            <td>Human-readable invoice number assigned to this invoice statement. Set by the system on finalization; can be updated if the invoiceStatementIsFinalizedStatus entitlement allows it.</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>invoiceStatementOrigin</td>
            <td>String (100)</td>
            <td>Indicates how the invoice statement was created (e.g., "System Generated"). Set at creation time and cannot be changed.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>invoiceStatementPaidStatus</td>
            <td>To-one association</td>
            <td>
                <p>Paid status of this invoice statement (e.g., Unpaid, Partial, Paid). Updated automatically as payments are recorded.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>invoiceStatementTemplate</td>
            <td>To-one association</td>
            <td>
                <p>The template used to render the invoice statement document.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>invoiceStatementType</td>
            <td>To-one association</td>
            <td>
                <p>Type of invoice statement (e.g., Original, Credit). Defaults to Original; set at creation time.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>invoiceTerm</td>
            <td>To-one association</td>
            <td>
                <p>The invoice term associated with this invoice statement. Set at creation time and cannot be changed.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isCredited</td>
            <td>Boolean</td>
            <td>Indicates whether this invoice statement has been credited. System-maintained.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Indicates whether this invoice statement has been soft-deleted. Soft-deleted records are excluded from query results by default; include <code>isDeleted:true</code> in your query filter to retrieve them.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isFinalized</td>
            <td>Boolean</td>
            <td>Indicates whether this invoice statement has been finalized. Once finalized, most fields become read-only. Finalization is triggered through the finalization service, not by directly setting this field.</td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>isReinstated</td>
            <td>Boolean</td>
            <td>Indicates whether this invoice statement has been reinstated after being voided. System-maintained.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>lineItemTotal</td>
            <td>BigDecimal</td>
            <td>Sum of all line item subtotals on this invoice statement, before taxes, discounts, and surcharges. System-calculated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>lineItems</td>
            <td>To-many association</td>
            <td>
                <p>InvoiceStatementLineItem records that make up the body of this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>outstandingBalance</td>
            <td>BigDecimal</td>
            <td>Remaining unpaid balance on this invoice statement (total minus amountPaid). System-calculated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To-one association</td>
            <td>
                <p>The corporate user who owns this invoice statement. Defaults to the user who created it.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>paymentCount</td>
            <td>Integer</td>
            <td>Number of payments recorded against this invoice statement. System-calculated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>paymentTerms</td>
            <td>String (200)</td>
            <td>Number of days after invoiceStatementDate that payment is due. Used to calculate dueDate. Must be a numeric string (e.g., "30" for net 30). Cannot be edited after finalization.</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>placements</td>
            <td>To-many association</td>
            <td>
                <p>Placement records associated with this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>previousBalance</td>
            <td>BigDecimal</td>
            <td>Previous outstanding balance carried forward from prior invoices, if any. Cannot be edited after finalization.</td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>purchaseOrderNumber</td>
            <td>String (200)</td>
            <td>Client purchase order number associated with this invoice statement. Cannot be edited after finalization.</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>rawInvoiceStatementNumber</td>
            <td>Integer</td>
            <td>The raw sequential numeric invoice statement number assigned at finalization, before any prefix, suffix, or formatting is applied. System-assigned; read-only.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>rebillFromInvoices</td>
            <td>To-many association</td>
            <td>
                <p>InvoiceStatement records that this invoice statement was rebilled from.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>rebillNumberFromInvoiceStatement</td>
            <td>To-one association</td>
            <td>
                <p>The invoice statement whose number is used as the base for this rebill's invoice number.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>rebillSuffix</td>
            <td>String (10)</td>
            <td>Suffix appended to the invoice number for rebill invoices (e.g., "-R1").</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>rebillToInvoices</td>
            <td>To-many association</td>
            <td>
                <p>InvoiceStatement records that are rebills of this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>remitInstructions</td>
            <td>String (200)</td>
            <td>Payment remittance instructions printed on the invoice statement. Cannot be edited after finalization is in progress.</td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>splitBys</td>
            <td>To-many association</td>
            <td>
                <p>InvoiceStatementSplitBy records defining how this invoice statement is split across dimensions (e.g., by department). Cannot be edited after finalization is in progress.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>status</td>
            <td>To-one association</td>
            <td>
                <p>Workflow status of this invoice statement (e.g., Draft, Ready, Finalized, Voided). Transitions are restricted by the invoiceStatementIsFinalizedStatus field checker.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>subtotal</td>
            <td>BigDecimal</td>
            <td>Invoice subtotal: lineItemTotal minus discountTotal plus surchargeTotal. System-calculated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>surchargeAmount</td>
            <td>BigDecimal</td>
            <td>Total calculated surcharge amount applied to this invoice statement. System-calculated.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>surchargeTotal</td>
            <td>BigDecimal</td>
            <td>Sum of all surcharge line item totals on this invoice statement. System-calculated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>surcharges</td>
            <td>To-many association</td>
            <td>
                <p>InvoiceStatementSurcharge records associated with this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>taxAmount</td>
            <td>BigDecimal</td>
            <td>Total calculated tax amount applied to this invoice statement. System-calculated.</td>
            <td><br/></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>taxTotal</td>
            <td>BigDecimal</td>
            <td>Sum of all tax line item totals on this invoice statement. System-calculated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>taxes</td>
            <td>To-many association</td>
            <td>
                <p>InvoiceStatementTax records associated with this invoice statement.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="even">
            <td>toRecipients</td>
            <td>To-many association</td>
            <td>
                <p>Person records in the To field when this invoice statement is emailed.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td><br/></td>
            <td><br/></td>
        </tr>
        <tr class="odd">
            <td>total</td>
            <td>BigDecimal</td>
            <td>Total amount due on this invoice statement: subtotal plus taxTotal (minus any tax already included in subtotal). System-calculated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>

## Lifecycle and workflow notes

InvoiceStatement records move through a status lifecycle: Draft → Ready → Finalized (or Voided/Reinstated). Finalization is an irreversible, asynchronous operation triggered via the finalization service endpoint — setting `isFinalized` directly via REST PUT is not supported. Once an invoice is finalized:

- Most scalar fields (billing address, billing period, payment terms, etc.) become read-only.
- To correct a finalized invoice, a credit invoice statement must be created (the new entity's `creditOfInvoiceStatement` will point back to the original).
- Rebilling creates a new invoice from the credited one; `rebillFromInvoices` and `rebillToInvoices` track that chain.

**Key integrator gotchas:**

- `isDeleted` is the soft-delete flag. Deleted invoice statements are excluded from query results by default; add `isDeleted:true` (or `isDeleted:false`) to your `where` clause when you need to control visibility explicitly.
- `invoiceStatementNumber` is null until finalization — do not treat it as a stable identifier; use `id` instead.
- `dueDate` is calculated automatically from `invoiceStatementDate` + `paymentTerms`. Setting `dueDate` directly via PUT is rejected.
- `paymentTerms` must be a numeric string representing the number of days (e.g., `"30"`). Non-numeric values will cause an error.
- `billingProfileCorrelatedCustomText` fields are copied from the billing profile at invoice creation. Changes to the billing profile after invoice creation do not propagate automatically.
- `amountPaid`, `outstandingBalance`, and `paymentCount` are updated by the payment recording process, not directly writable.
- This entity requires the **WFR** (Workforce Ready / Pay and Bill) OAuth feature on your API credentials.
