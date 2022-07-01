# Pay and Bill - PlacementBillRuleset

An effective-dated entity that represents all the rules on a Placement.
PlacementBillRuleset is the flattened entity. When making PUT and POST calls
to PlacementBillRuleset, the child entity, TimeLaborEvalRules,
can be passed as well with all associated data.

CRUD Access - CREATE, READ, UPDATE, DELETE

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
            <th>PlacementBillRuleset fields</th>
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
            <td>isDeleted</td>
            <td>Boolean</td>
            <td><p><span>Whether entity is deleted.</span></p>
<p><span> <span>The default value is false.</span> </span></p></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To-one association</td>
            <td>CorporateUser.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>placement</td>
            <td>To-one association</td>
            <td>Placement.</td>
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
        <tr class="odd">
            <td>versionID</td>
            <td>Integer</td>
            <td>Unique Identifier for the current version.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>versions</td>
            <td>To-many association</td>
            <td>PlacementBillRulesetVersion.</td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>
