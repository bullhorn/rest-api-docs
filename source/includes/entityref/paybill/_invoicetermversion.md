# Pay and Bill - InvoiceTermVersion

Represents an invoice term version.


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
            <th>InvoiceTermVersion fields</th>
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
            <td>approvalRequired</td>
            <td>Boolean</td>
            <td>Indicates whether approval is required for invoices before they can be finalized.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billableChargeHoldStatusLookup</td>
            <td>To-one association</td>
            <td>BillableChargeHoldStatusLookup.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>currencyUnit</td>
            <td>To-one association</td>
            <td>CurrencyUnit.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customDate1-3</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customFloat1-3</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customInt1-3</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customText1-20</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customTextBlock1-3</td>
            <td>String (2147483647)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>description</td>
            <td>String (255)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>effectiveDate</td>
            <td>Date</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>externalID</td>
            <td>String (100)</td>
            <td>Customer defined identifier.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>fileTypesForInvoicing</td>
            <td>To-many association</td>
            <td>BillingSyncBatchFileTypeLookup - Indicates what types of attachments should be included in Invoice Statement PDF. </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerAccountsReceivable</td>
            <td>To-one association</td>
            <td>GeneralLedgerAccountsReceivable - General Ledger Account (with isAccountsReceivable = &apos;true&apos;) associated with this InvoiceTerm.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>invoiceApprovedTimecardsRequired</td>
            <td>Boolean</td>
            <td>Indicates what status the timecard should be in (Submitted or Approved) before it can be invoiced.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoiceGroupBy</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>invoiceOn</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoiceSplitBy</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>invoiceStatementTemplate</td>
            <td>To-one association</td>
            <td>InvoiceStatementTemplate - this is the invoice template that is used in generating the invoice PDF.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoiceSummarizeBy</td>
            <td>String (2147483647)</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isFirst</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>payBillCycle</td>
            <td>To-one association</td>
            <td>PayBillCycle - this is the associated billing cycle.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>paymentTerms</td>
            <td>String (100)</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>purchaseOrderRequired</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>remitInstructions</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>status</td>
            <td>String (100)</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>title</td>
            <td>String (100)</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>waitForTimecards</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>
