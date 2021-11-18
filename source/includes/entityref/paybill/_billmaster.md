# Pay and Bill - BillMaster

Represents a BillMaster record.

CRUD Access - READ, UPDATE.

Entitlements - View Bill Master, Edit Billable Charge

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
            <th>BillMaster fields</th>
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
            <td>billMasterTransactions</td>
            <td>To-many association</td>
            <td><p>Associated BillMasterTransactions.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billableCharge</td>
            <td>To-one association</td>
            <td><p>Associated BillableCharge.</p>
                <p>Default fields:</p>
                    <ul>
                        <li>id</li>
                    </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingCalendarInstance</td>
            <td>To-one association</td>
            <td>CalendarInstance - list of associated billing calendar instances.
            <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>label</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billingSyncBatch</td>
            <td>To-one association</td>
            <td><p>Associated BillingSyncBatch.</p>
                <p>Default fields:</p>
                <ul>
                <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingSyncBatchFileAttachments</td>
            <td>To-many association</td>
            <td>BillingSyncBatchFileAttachment - list of files associated with the record.
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billMasterStatus</td>
            <td>To-one association</td>
            <td>BillMasterStatus. Options are:
                <ul>
                    <li>1 = Syncing</li>
                    <li>2 = Sync Failed</li>
                    <li>3 = Synced</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>canInvoice</td>
            <td>Boolean</td>
            <td>Indicates whether can invoice.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>chargeTypeLookup</td>
            <td>To-one association</td>
            <td>ChargeTypeLookup - options are Timesheet or Expense Report.</td>
            <td>X</td>
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
            <td>earnCode</td>
            <td>To-one association</td>
            <td><p>Associated EarnCode.</p>
                <p>Default fields:</p>
                    <ul>
                    <li>id</li>
                    <li>externalID</li>
                    <li>title</li>
                    </ul>
            </td>
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
            <td>location</td>
            <td>To-one association</td>
            <td>Location.
                <p>Default fields:</p>
                <ul>
                        <li>id</li>
                        <li>clientCorporation</li>
                        <li>candidate</li>
                        <li>title</li>
                        <li>effectiveDate</li>
                        <li>effecitveEndDate</li>
                        <li>versionID</li>
                        <li>externalID</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To-one association</td>
            <td>CorporateUser.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>payBillCycle</td>
            <td>To-one association</td>
            <td>PayBillCycle - this is the associated billing cycle. 
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>transactionDate</td>
            <td>Date</td>
            <td><p>Transaction date.</p></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>transactionStatus</td>
            <td>To-one association</td>
            <td>TransactionStatus. Options are:
                <ul>
                    <li>1 = Pending</li>
                    <li>2 = Submitted</li>
                    <li>3 = Payment Approved</li>
                    <li>4 = Approved</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>discountRates</td>
            <td>To-many association</td>
            <td>
                <p>Associated Discount Rate(s).</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>title</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                    <li>versionID</li>
                    <li>rate</li>
                    <li>amount</li>
                    <li>discountTypeLookup</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>surchargeRates</td>
            <td>To-many association</td>
            <td>
                <p>Associated Surcharge Rate(s).</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>title</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                    <li>versionID</li>
                    <li>rate</li>
                    <li>amount</li>
                    <li>type</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>


     
        
