# ScreenerQuestion

The Screener Question entity enables users to define custom screening questions for Jobs. When a candidate applies and responds to these questions, their answers are mapped to corresponding fields on the Candidate entity, based on the user’s configuration.

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
            <th>ScreenerQuestion fields</th>
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
            <td>answerEntityType</td>
            <td>To-one association</td>
            <td>The Bullhorn entity the applicant’s response will be mapped to.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>answerFieldName</td>
            <td>String (255)</td>
            <td>The field on the answerEntityType that the applicant’s answer should be mapped to.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date on which this record was created in the Bullhorn system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date on which this record was last updated in the Bullhorn system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Indicates whether this record has been marked as deleted in the Bullhorn system. Defaults to false.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>questionText</td>
            <td>String (255)</td>
            <td>The text that applicants will see on job boards when applying to a Job.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>required</td>
            <td>Boolean</td>
            <td>Indicates if the question is required or optional. Defaults to false.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>