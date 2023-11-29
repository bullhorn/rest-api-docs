# PlacementShiftSet

Represents a Placement Shift Set. Allows Shift Definitions to be linked to specific Placements

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
            <th>PlacementShiftSet fields</th>
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
            <td>versionID</td>
            <td>Integer</td>
            <td>Id of the associated PlacementShiftSetVersion</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>versions</td>
            <td>To-many association</td>
            <td>PlacementShiftSetVersions associated to PlacementShiftSet</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>Placement</td>
            <td>To-one Association</td>
            <td>Placement associated to PlacementShiftSet.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To-one Association</td>
            <td>CorporateUser who is the owner of this entity. The default value is user who created the entity.
                <p>Default fields:</p>
                    <ul><li>id</li>
                    <li>firstName</li>
                    <li>firstName</li>
                </ul>
            </td>
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
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>rootMigrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>versionMigrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td><br/></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>viewableStartDate</td>
            <td>Date</td>
            <td>Date when the PlacementShiftSet will become viewable.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>shifts</td>
            <td>To-many association</td>
            <td>Shifts associated with the PlacementShiftSet.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
