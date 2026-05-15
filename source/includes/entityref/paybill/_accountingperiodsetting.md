# Pay and Bill - AccountingPeriodSetting

Represents the configuration that governs how accounting periods are automatically created and rolled forward for a Bullhorn corporation. A single AccountingPeriodSetting record defines the day of week that closes a period, the roll-forward schedule (day and time), the time zone for that schedule, and optional matching-criteria rules that allow different settings per placement or work type.

CRUD Access - READ.

Entitlements - View Accounting Period Setting

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
            <th>AccountingPeriodSetting fields</th>
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
            <td>accountingPeriodDay</td>
            <td>To-one association</td>
            <td>
                <p>DayOfWeekLookup. The day of the week on which the accounting period ends (e.g., Sunday for a Sunday-ending weekly period).</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Indicates whether this record has been soft-deleted. Always returns false; this field is not persisted to the database and exists for API-layer compatibility only.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>matchingCriteriaGroup</td>
            <td>To-one association</td>
            <td>
                <p>MatchingCriteriaGroup. Optional set of matching criteria that scope this setting to specific placements or work types. When null, this is the default setting applied to all transactions.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>rollForwardDay</td>
            <td>To-one association</td>
            <td>
                <p>DayOfWeekLookup. The day of the week on which the automated roll-forward job runs to create the next accounting period.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>rollForwardTime</td>
            <td>String</td>
            <td>The time of day (HH:mm format, 24-hour) at which the roll-forward job runs on the configured rollForwardDay, evaluated in the timeZoneLookup time zone.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>timeZoneLookup</td>
            <td>To-one association</td>
            <td>
                <p>TimeZoneGISLookup. The time zone used to evaluate the rollForwardDay and rollForwardTime, ensuring period boundaries are computed correctly for the corporation's locale.</p>
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>

## Notes

AccountingPeriodSetting is maintained by Bullhorn back-office administrators and is typically configured once during implementation. Integrations reading this entity can determine the active period schedule — for example, to predict when the next AccountingPeriod will be created or to validate that a transaction's date falls within an open period.

When `matchingCriteriaGroup` is null the record is the **default** setting. When populated, the system evaluates the matching criteria at transaction time and applies the first matching setting. Integrations that need to determine which setting applies to a given placement should resolve via the MatchingCriteriaGroup association rather than assuming the default.
