# Pay and Bill - InvoiceTerm

Entity that represents a customer invoice terms record.


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
            <th>InvoiceTerm fields</th>
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
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billableChargeHoldStatusLookup</td>
            <td>To-one association</td>
             <td><p>BillableChargeHoldStatusLookup - this is the default billable charge hold status lookup for the InvoiceTerm.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>ClientCorporation.</td>
            <td>X</td>
            <td>X</td>
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
            <td></td>
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
            <td>discountRates</td>
            <td>To-many association</td>
            <td>DiscountRate.</td>
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>fileTypesForInvoicing</td>
            <td>To-many association</td>
            <td>BillingSyncBatchFileTypeLookup.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerAccountsReceivable</td>
            <td>To-one association</td>
            <td>GeneralLedgerAccountsReceivable.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>invoiceApprovedTimecardsRequired</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
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
            <td>InvoiceStatementTemplate.</td>
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
            <td>isDeleted</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isFirst</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>owner</td>
            <td>To-one association</td>
            <td>CorporateUser.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>payBillCycle</td>
            <td>To-one association</td>
            <td>PayBillCycle.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>paymentTerms</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>purchaseOrderRequired</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
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
            <td>surchargeRates</td>
            <td>To-many association</td>
            <td>SurchargeRate.</td>
            <td></td>
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
            <td>versionID</td>
            <td>Integer</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>versions</td>
            <td>To-many association</td>
            <td>InvoiceTermVersion.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>waitForTimecards</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>


     
        
