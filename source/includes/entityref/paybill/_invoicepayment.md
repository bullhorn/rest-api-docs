# Pay and Bill - InvoicePayment

Represents a payment applied against an InvoiceStatement, recording the amount received, the date paid, and an optional check or reference number.

CRUD Access - CREATE, READ, UPDATE, DELETE.

Entitlements - View Invoice Payment, Add Invoice Payment, Edit Invoice Payment, Delete Invoice Payment.

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
            <th>InvoicePayment fields</th>
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
            <td>amount</td>
            <td>BigDecimal</td>
            <td>The payment amount applied to the invoice statement. Stored with precision 19, scale 6.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>checkNumber</td>
            <td>String (100)</td>
            <td>Check number or external payment reference for this payment.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customDate1 to 3</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customInt1 to 5</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customText1 to 5</td>
            <td>String (255)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date and time this record was created. Set automatically on insert.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date and time this record was last modified. Set automatically on insert and update.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>datePaid</td>
            <td>Timestamp</td>
            <td>Date and time this payment was made.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>invoiceStatementID</td>
            <td>Integer</td>
            <td>ID of the InvoiceStatement to which this payment is applied.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>

## Automatic Paid Status Recalculation

Whenever an InvoicePayment record is created, updated, or deleted, the system automatically recalculates the `invoiceStatementPaidStatus` on the parent InvoiceStatement:

- If the sum of all payment amounts for the invoice meets or exceeds the invoice total, the status is set to **Paid**.
- If the sum is greater than zero but less than the invoice total, the status is set to **Partial**.
- If there are no remaining payments, the status is set to **Unpaid**.

You do not need to update the InvoiceStatement directly when recording or adjusting payments — the paid status is derived automatically from the total of all associated InvoicePayment records.
