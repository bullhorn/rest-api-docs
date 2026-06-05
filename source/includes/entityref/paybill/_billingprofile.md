# Pay and Bill - BillingProfile

An [effective-dated entity](../index.html#effective-dated-entity) that represents a billing contract attached to a ClientCorporation, defining where invoices are sent, who receives them, how they are delivered, and which invoice terms apply.

Displays the current version unless you specify the `effectiveOn` query parameter (BillingProfileVersion.effectiveDate <= today AND BillingProfileVersion.effectiveEndDate >= today). A BillingProfile may have multiple versions representing changes to billing instructions over time; each change creates a new BillingProfileVersion rather than modifying the existing one.

The BillingProfile entity supports the CREATE, READ, UPDATE, and DELETE operations.

Entitlements - Add Billing Profile, View Current and Future Billing Profile and Version, Add Billing Profile Version, Manage Current Billing Profile Version, Manage Future Billing Profile Version, Manage Historical Billing Profile Version, Delete Billing Profile and Version.

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
            <th>BillingProfile fields</th>
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
                <p>Person recipients added to the BCC line of invoice statement emails generated from this profile.</p>
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
            <td>Attention line used on the billing address for invoice correspondence.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingClientCorporation</td>
            <td>To-one association</td>
            <td>
                <p>ClientCorporation that is the billing entity — the corporation to which invoices are directed. This may differ from the owning <code>clientCorporation</code> in inter-company billing scenarios.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billingContact</td>
            <td>To-one association</td>
            <td>
                <p>ClientContact at the billing entity who should receive invoices.</p>
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
                <p>CorporateUser (internal staff) responsible for managing billing for this profile.</p>
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
            <td>billingLocation</td>
            <td>To-one association</td>
            <td>
                <p>Location that provides the billing address for invoice statements.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>ccRecipients</td>
            <td>To-many association</td>
            <td>
                <p>Person recipients added to the CC line of invoice statement emails generated from this profile.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>
                <p>ClientCorporation that owns (created) this BillingProfile. In most deployments this is the same corporation as <code>billingClientCorporation</code>; it differs only in inter-company billing setups.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>name</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customDate1 to 3</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customFloat1 to 3</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customInt1 to 3</td>
            <td>Integer</td>
            <td>Configurable integer fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customText1 to 20</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customTextBlock1 to 3</td>
            <td>String (2147483647)</td>
            <td>Configurable large text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date and time when this entity was created.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date and time when this entity was last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>deliveryMethodLookup</td>
            <td>To-one association</td>
            <td>
                <p>SpecializedOptionsLookup defining how invoice statements are delivered (e.g., email, print, portal).</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>description</td>
            <td>String (2147483647)</td>
            <td>Free-text description of this billing profile. Promoted from the current active BillingProfileVersion.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>effectiveDate</td>
            <td>Date</td>
            <td>Date on which the current BillingProfileVersion became active.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td>Date on which the current BillingProfileVersion expires. Calculated by the system when a newer version is created.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>externalID</td>
            <td>String (100)</td>
            <td>External identifier for use in integrations. Promoted from the current active BillingProfileVersion.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>invoiceStatementMessageTemplate</td>
            <td>To-one association</td>
            <td>
                <p>InvoiceStatementMessageTemplate that defines the email body template used when sending invoice statements.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>invoiceTerm</td>
            <td>To-one association</td>
            <td>
                <p>InvoiceTerm that defines the payment conditions (due date rules, discounts, penalties) applied to invoice statements generated under this profile.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Indicates whether this BillingProfile has been soft-deleted. Deleted profiles are excluded from active billing workflows. Filter on <code>isDeleted=false</code> to retrieve only active profiles.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To-one association</td>
            <td>
                <p>CorporateUser who owns this BillingProfile. Defaults to the user who created the record.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>firstName</li>
                    <li>lastName</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>status</td>
            <td>String (100)</td>
            <td>System-managed lifecycle status of the current version. Reflects the effective-date state of the active BillingProfileVersion.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>title</td>
            <td>String (100)</td>
            <td>Display name for this BillingProfile. Promoted from the current active BillingProfileVersion.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>toRecipients</td>
            <td>To-many association</td>
            <td>
                <p>Person recipients on the TO line of invoice statement emails generated from this profile.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>versionID</td>
            <td>Integer</td>
            <td>ID of the currently active BillingProfileVersion record. Managed by the system; use the <code>versions</code> association or query BillingProfileVersion directly to enumerate all versions.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>versions</td>
            <td>To-many association</td>
            <td>
                <p>All BillingProfileVersion records associated with this BillingProfile, ordered by effectiveDate ascending.</p>
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

## Effective-dating and versioning

BillingProfile is an effective-dated entity. Each change to billing instructions (delivery method, invoice terms, email recipients, billing contact, etc.) creates a new BillingProfileVersion rather than overwriting the current one. This preserves a full audit trail of all billing instructions over time.

When querying a BillingProfile without an `effectiveOn` parameter, the API returns the version whose `effectiveDate` is on or before today and whose `effectiveEndDate` is on or after today. To retrieve a profile as it was on a past or future date, pass `effectiveOn=YYYY-MM-DD` as a query parameter.

To create a new version for an existing BillingProfile, POST to `/BillingProfileVersion` with the `billingProfile` association set to the parent BillingProfile `id`. The system will automatically calculate and update the `effectiveEndDate` of the previous version.

## Relationships to other entities

BillingProfile is a central billing contract entity referenced by several downstream entities:

- **Placement** — a to-one `billingProfile` field links the Placement to the billing instructions in effect for that engagement.
- **JobOrder** — a to-one `billingProfile` field pre-populates billing instructions when a Placement is created from the JobOrder.
- **BillableCharge** — a to-one `billingProfile` field on the charge record drives invoice grouping and delivery.
- **InvoiceStatement** — generated invoice statements are addressed and distributed according to the BillingProfile in effect at the time of invoice creation.

## Common integration gotchas

- **isDeleted filtering**: BillingProfile supports soft-delete. Always include `isDeleted=false` in query `where` clauses unless you intentionally need to surface archived profiles.
- **Version vs. root fields**: Fields such as `title`, `status`, `billingAttention`, `description`, and `externalID` are promoted from the current active version and are read-only at the BillingProfile level. To change these, create a new BillingProfileVersion.
- **billingClientCorporation vs. clientCorporation**: `clientCorporation` is the Bullhorn corp that owns the profile; `billingClientCorporation` is the entity that actually receives invoices. These differ in inter-company billing setups.
- **Recipient associations** (`toRecipients`, `ccRecipients`, `bccRecipients`): Stored in the join table `BH_BillingProfileVersionEmailAddress` keyed by `billingProfileVersionID`. Changes to recipients require creating a new version or updating the current BillingProfileVersion.
