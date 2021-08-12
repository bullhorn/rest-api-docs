# Pay and Bill - JobOrderRateCardLineGroup

Represents a group of rates on a Job Order


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
            <th>JobOrderRateCardLineGroup fields</th>
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
            <td>earnCodeGroup</td>
            <td>To-one association</td>
            <td>Earn Code Group for all of the rates
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>externalID</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isBase</td>
            <td>Boolean</td>
            <td>This is the list of default rates for the rate card.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>jobOrderRateCard</td>
            <td>To-one association</td>
            <td>JobOrderRateCard
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>jobOrderRateCardLines</td>
            <td>To-many association</td>
            <td>JobOrderRateCardLine - (No more than there are EarnCodes for the given EarnCodeGroup)
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>jobOrderRateCardVersion</td>
            <td>To-one association</td>
            <td>JobOrderRateCardVersion
                <p>Default fields:</p>
                <ul>
                    <li>id</li>
                    <li>effectiveDate</li>
                    <li>effectiveEndDate</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>

