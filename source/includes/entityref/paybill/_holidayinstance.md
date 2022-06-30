# HolidayInstance

Entity that represents a Holiday Instance record.

CRUD Access - READ.

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
            <th>HolidayInstance fields</th>
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
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date the entity was added.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date the entity was last modified.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>endAt</td>
            <td>Timestamp</td>
            <td>Date/time when the holiday instance will end.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>holiday</td>
            <td>To-one association</td>
            <td>Holiday associated with the holiday instance.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>modifyingUser</td>
            <td>To-one association</td>
            <td>CorporateUser</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>startAt</td>
            <td>Timestamp</td>
            <td>Date/time when the holiday instance will start.</td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>
