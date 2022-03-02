# Pay and Bill - Calendar

Entity that represents a Calendar record.


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
            <th>Calendar fields</th>
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
            <td>calendarFrequencyLookup</td>
            <td>To-one association</td>
            <td>CalendarFrequencyLookup</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isCustom</td>
            <td>Boolean</td>
            <td>Designates a customer generated calendar</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>label</td>
            <td>String (100)</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>offset</td>
            <td>Integer</td>
            <td>Beginning day for a calendar frequency pattern</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>startDate</td>
            <td>Date</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>



     
        
