# Pay and Bill - Holiday

Represents a recorded holiday within the system, detailing key attributes (such as name and date) used for scheduling, payroll, and workflow adjustments during non-working days.

CRUD Access - READ, DELETE.

Entitlements - Manage Holidays.

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
            <th>Holiday fields</th>
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
            <td>cronExpression</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date the entity was added.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date the entity was last modified.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>description</td>
            <td>String (100)</td>
            <td>Description for this holiday.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>duration</td>
            <td>Integer</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>holidayCategoryLookup</td>
            <td>To-one association</td>
            <td>HolidayCategoryLookup the holiday is associated with.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>holidayInstances</td>
            <td>To-many association</td>
            <td>Holiday instances associated with this holiday.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>holidayStatusLookup</td>
            <td>To-one association</td>
             <td>HolidayStatusLookup options: 
                <li>Active <li>Inactive </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td><p><span>Whether entity is deleted.</span></p>
<p><span> <span>The default value is false.</span> </span></p></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isRun</td>
            <td>Boolean</td>
            <td>Whether or not the holiday rule has been run. If it has been run, the rule cannot be deleted, only set to inactive.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>label</td>
            <td>String (100)</td>
            <td>Title for the holiday.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>modifyingUser</td>
            <td>To-one association</td>
            <td>CorporateUser that modified the entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>nextOccurrence</td>
            <td>Timestamp</td>
            <td>The next holiday instance that is greater than or equal to today.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>timeLaborEvalRules</td>
            <td>To-many association</td>
            <td>TimeLaborEvalRules associated with this holiday.</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
