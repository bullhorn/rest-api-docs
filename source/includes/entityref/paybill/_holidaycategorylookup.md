# Pay and Bill - HolidayCategoryLookup

Acts as a reference table that categorizes [Holidays](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-holiday)—such as federal, religious, or company-specific—to ensure consistent classification and application of holiday rules.

CRUD Access - CREATE, READ, UPDATE, DELETE.

Entitlements - Manage Holidays.

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
            <th>HolidayCategoryLookup fields</th>
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
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>description</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>holidays</td>
            <td>To-many association</td>
            <td>Holidays the entity is associated with.</td>
            <td></td>
            <td>X</td>
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
            <td>isHidden</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isSystem</td>
            <td>Boolean</td>
            <td></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>label</td>
            <td>String (100)</td>
            <td>Title for the holiday category.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>modifiedByUser</td>
            <td>To-one association</td>
            <td>CorporateUser that modified the entity.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>shouldShowInPicker</td>
            <td>Boolean</td>
            <td>Whether or not the holiday category should be viewable in category picker.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>
