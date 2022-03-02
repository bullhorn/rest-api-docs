 # Pay and Bill - InvoiceTermTemplate

Represents a invoice term template

CRUD Access - CREATE, READ, UPDATE, DELETE.

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
            <th>InvoiceTermTemplate fields</th>
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
            <td>addedByUser</td>
            <td>To-one association</td>
            <td>CorporateUser</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>approvalRequired</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>currencyUnit</td>
            <td>To-one association</td>
            <td>CurrencyUnit</td>
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
            <td>String</td>
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
            <td>externalID</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>generalLedgerAccountsReceivable</td>
            <td>To-one association</td>
            <td>GeneralLedgerAccount</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoiceApprovedTimecardsRequired</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>invoiceGroupBy</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoiceOn</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>invoiceSplitBy</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoiceStatementTemplate</td>
            <td>To-one association</td>
            <td>InvoiceStatementTemplate</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>invoiceSummarizeBy</td>
            <td>String</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>migrateGUID</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>paymentTerms</td>
            <td>String (100)</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>purchaseOrderRequired</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>remitInstructions</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>templateTitle</td>
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