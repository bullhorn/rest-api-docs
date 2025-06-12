# JobOrderScreenerQuestion

The Job Order Screener Question entity enables users to associate Screener Questions with Jobs. 

When a user adds a screener question to a job, the association is stored, along with a user defined sort order field for display purposes.

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
            <th>JobOrderScreenerQuestion fields</th>
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
            <td>jobOrder</td>
            <td>To-one association</td>
            <td>JobOrder default fields: 
                <li>id</li>
                <li>title</li>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>screenerQuestion</td>
            <td>To-one association</td>
            <td>Screener Question associated with this record.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>sortOrder</td>
            <td>Integer</td>
            <td>In a list of screener questions associated with a job, sortOrder determines the location of the screener question in the list.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>