# Pay and Bill - ClientCorporationPayRulesetVersion

Represents a ClientCorporation PayRuleset version.

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
            <th>ClientCorporationPayRulesetVersion fields</th>
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
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>effectiveDate</td>
            <td>Date</td>
            <td>This is the date when the record is effective.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>effectiveEndDate</td>
            <td>Date</td>
            <td>This is the date until when the record is effective.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isFirst</td>
            <td>Boolean</td>
            <td>True if this is the first client corporation pay ruleset version.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>timeLaborEvalRules</td>
            <td>To-many association</td>
            <td>TimeLaborEvalRule.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
