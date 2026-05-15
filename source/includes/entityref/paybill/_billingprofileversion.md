# Pay and Bill - BillingProfileVersion

Represents a version entity for the [BillingProfile](../entityref.html#pay-and-bill-billingprofile) effective-dated entity. Each BillingProfileVersion captures the billing instructions (recipients, delivery method, invoice terms, billing contact) that were in effect during a specific date range.

CRUD Access - READ.

Entitlements - View Current and Future Billing Profile and Version, Manage Current Billing Profile Version, Manage Future Billing Profile Version, Manage Historical Billing Profile Version.

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
            <th>BillingProfileVersion fields</th>
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
            <td>bccRecipients</td>
            <td>To-many association</td>
            <td>
                <p>Person recipients on the BCC line of invoice emails sent for this version.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billingAttention</td>
            <td>String (255)</td>
            <td>Attention line used on the billing address during this version's effective period.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billingClientCorporation</td>
            <td>To-one association</td>
            <td>
                <p>ClientCorporation that receives invoices during this version's effective period.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billingContact</td>
            <td>To-one association</td>
            <td>
                <p>ClientContact at the billing entity who receives invoices during this version's effective period.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>firstName</li>
                    <li>lastName</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billingCorporateUser</td>
            <td>To-one association</td>
            <td>
                <p>CorporateUser responsible for billing during this version's effective period.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>firstName</li>
                    <li>lastName</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>ccRecipients</td>
            <td>To-many association</td>
            <td>
                <p>Person recipients on the CC line of invoice emails sent for this version.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
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
            <td>customFloat1 to 3</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customInt1 to 3</td>
            <td>Integer</td>
            <td>Configurable integer fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customText1 to 20</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customTextBlock1 to 3</td>
            <td>String (2147483647)</td>
            <td>Configurable large text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date and time when this version was created.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date and time when this version was last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>deliveryMethod</td>
            <td>String (100)</td>
            <td>Delivery method for invoice statements during this version's effective period (e.g., email, print, portal). Read from the system-managed lookup; to change the method, update <code>deliveryMethodLookup</code> on the parent BillingProfile.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>description</td>
            <td>String (2147483647)</td>
            <td>Free-text description of this billing profile version.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>effectiveDate</td>
            <td>Date</td>
            <td>Date on which this version becomes active. Must be unique per BillingProfile (no two versions may share the same effectiveDate).</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td>Date on which this version expires. Calculated and set by the system when a newer version is created; do not set manually.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>externalID</td>
            <td>String (100)</td>
            <td>External identifier for use in integrations.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>invoiceStatementMessageTemplate</td>
            <td>To-one association</td>
            <td>
                <p>InvoiceStatementMessageTemplate applied during this version's effective period.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isFirst</td>
            <td>Boolean</td>
            <td>Indicates whether this is the first (original) version of the parent BillingProfile. Set by the system on creation of the BillingProfile.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>String (100)</td>
            <td>System-managed lifecycle status reflecting whether this version is current, future, or historical relative to today's date.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>title</td>
            <td>String (100)</td>
            <td>Display name for this version of the BillingProfile.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>toRecipients</td>
            <td>To-many association</td>
            <td>
                <p>Person recipients on the TO line of invoice emails sent for this version.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

<aside class="notice">
BillingProfileVersion is a read-only entity via the REST API. To add or modify versions, POST to <code>/BillingProfileVersion</code> with the parent <code>billingProfile</code> association, or manage versions through the parent BillingProfile entity. The system automatically recalculates <code>effectiveEndDate</code> for all affected versions when a new version is inserted.
</aside>
