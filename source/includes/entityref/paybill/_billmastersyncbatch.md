# Pay and Bill - BillMasterSyncBatch

Read-only entity that represents a BillMasterSyncBatch.

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
        <th>BillMasterSyncBatch fields</th>
        <th>Type</th>
        <th>Description</th>
        <th>Not null</th>
        <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="odd">
            <td>id</td>
            <td>Integer</td>
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
        <td>batchStatus</td>
            <td><p>To-one association</p></td>
            <td>
                <p>The associated BatchStatusLookup representing the status of the batch.</p>
                <p>Default fields:</p>
                <ul>
                <li>id</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billMasters</td>
            <td><p>To-many association</p></td>
            <td>
                <p>Associated list of BillMasters.</p>
                <p>Default fields:</p>
                <ul>
                <li>id</li>
                </ul>
            </td>
            <td> </td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Timestamp representing when this batch was added</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Timestamp representing when this batch was last modified</td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>


