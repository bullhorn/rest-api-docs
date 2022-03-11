# Shift

Represents a Shift Definition. Allows for setup of default start and end times at the clientCorporation level. 

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
            <th>Shift fields</th>
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
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>ClientCorporation associated to the Shift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date when this record was last modified in the Bullhorn system.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dayOfWeek</td>
            <td>Integer</td>
            <td>Day of week associated to Shift.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>endTime</td>
            <td>Timestamp</td>
            <td>End time designated to the Shift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>htmlColorCode</td>
            <td>String (50)</td>
            <td>Html color of the Shift.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isDefault</td>
            <td>Boolean</td>
            <td>Indicates if this is a default Shift for the ClientCorporation.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Indicates whether this record has been marked as deleted in the Bullhorn system.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>lastModifyingUser</td>
            <td>To-one association</td>
            <td>User that last modified the Shift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td>Unused.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>name</td>
            <td>String (150)</td>
            <td>Name of the Shift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>shortName</td>
            <td>String (150)</td>
            <td>Short name for the Shift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>startTime</td>
            <td>Timestamp</td>
            <td>Start time designated to the Shift.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>type</td>
            <td>String (150)</td>
            <td>Type of the Shift.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
