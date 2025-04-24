# Pay and Bill - InvoiceTermVersion

Represents a version entity for the [InvoiceTerm](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-invoiceterm) effective-dated entity.

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
            <td>currencyUnit</td>
            <td>To-one association</td>
            <td>CurrencyUnit.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customDate1-3</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customFloat1-3</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customInt1-3</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customText1-20</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customTextBlock1-3</td>
            <td>String (2147483647)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>description</td>
            <td>String (255)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>effectiveDate</td>
            <td>Date</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>externalID</td>
            <td>String (100)</td>
            <td>Customer defined identifier.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>fileTypesForInvoicing</td>
            <td>To-many association</td>
            <td>BillingSyncBatchFileTypeLookup - Indicates what types of attachments should be included in Invoice Statement PDF. </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerAccountsReceivable</td>
            <td>To-one association</td>
            <td>GeneralLedgerAccountsReceivable - General Ledger Account (with isAccountsReceivable = 'true') associated with this InvoiceTerm.</td>
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
            <td>reports</td>
            <td>To-many association</td>
            <td>Report - Report containing custom sql scripts used for flexible invoicing</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>String (100)</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>title</td>
            <td>String (100)</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>waitForTimecards</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>
