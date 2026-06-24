# Pay and Bill - PayBillCycle

Defines a recurring time period or schedule over which time, pay, bill, and invoice transactions are processed, establishing the cadence on which placements are evaluated and money is calculated and disbursed.

CRUD Access - CREATE, READ, UPDATE

Entitlements - Add Pay & Bill Cycle, View Pay & Bill Cycle, Edit Pay & Bill Cycle

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
            <th>PayBillCycle fields</th>
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
            <td>billEvalEnabled</td>
            <td>Boolean</td>
            <td>Controls whether bill (client charge) evaluation runs on this cycle. When true, billable charges are generated for placements assigned to the cycle. Defaults to false.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billingCalendar</td>
            <td>To-one association</td>
            <td>The Calendar that supplies the billing period boundaries (start and end dates) for this cycle. Set when the cycle is created and cannot be changed afterward.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billingCalendarFrequencyLookup</td>
            <td>To-one association</td>
            <td>The CalendarFrequencyLookup describing how often the billing calendar recurs, such as weekly, bi-weekly, semi-monthly, or monthly.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date on which this cycle was created in the Bullhorn system.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date on which this cycle was last updated.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>invoiceCycleEnabled</td>
            <td>Boolean</td>
            <td>Controls whether invoice generation runs on this cycle. Defaults to true.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>label</td>
            <td>String (100)</td>
            <td>Human-readable name that identifies the cycle to back-office users, for example "Weekly" or "Bi-Weekly Salaried".</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payEvalEnabled</td>
            <td>Boolean</td>
            <td>Controls whether pay evaluation runs on this cycle. When true, payable charges are generated for workers assigned to the cycle. Defaults to false.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timesheetEnabled</td>
            <td>Boolean</td>
            <td>Controls whether timesheets are generated and collected on this cycle. Defaults to false.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>

PayBillCycle is back-office configuration. It is set up by payroll and billing administrators and attached to placements to determine the cadence at which time, pay, bill, and invoice processing run. It sits upstream of the transactional records in the Pay and Bill lifecycle: the cycle's calendar and toggles govern when timesheets are collected and when those approved hours flow into BillMaster and PayMaster records, which in turn drive InvoiceStatements and payroll exports.

The four `*Enabled` toggles are independent. A single cycle can drive any combination of timesheet collection, pay evaluation, bill evaluation, and invoicing — for example, a pay-only cycle would have `payEvalEnabled` true while `billEvalEnabled` and `invoiceCycleEnabled` are false.

Common gotchas for integrators: `billingCalendar` is immutable after creation, so the billing schedule must be correct on the initial CREATE. The entity supports CREATE, READ, and UPDATE only — there is no REST DELETE operation and no `isDeleted` soft-delete field, so cycles are not removed through the API.
