#  Pay and Bill - CalendarInstance

Entity that represents a Calendar Instance record.


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
            <th>CalendarInstance fields</th>
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
            <td>calendar</td>
            <td>To-one association</td>
            <td>Calendar</td>
            <td>X</td>
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
            <td>endDate</td>
            <td>Date</td>
            <td>End date of the calendar instance.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>label</td>
            <td>String (150)</td>
            <td>Title for the calendar instance.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>startDate</td>
            <td>Date</td>
            <td>Start date of the calendar instance.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>


     
        
