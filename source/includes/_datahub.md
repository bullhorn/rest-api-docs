# Data Hub Reference Guide

Bullhorn Data Hub is a flexible data structure to store data for reporting, and analytics across Bullhorn, Marketplace Partner and external sources. This reference guide provides information about each API operation and supported entity type. Below is a list of Data Hub entities, which are:

### EdsSourceSystem
Represents the external system sending data.

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
            <th>SourceSystem field</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="odd">
            <td>name</td>
            <td>String(64)</td>
            <td>Name of the source system.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>display</td>
            <td>String(64)</td>
            <td>How the source system will be displayed.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>

### EdsEntityType
Represents a category of data in the Source System.

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
            <th>EntityType field</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="odd">
            <td>sourceSystem</td>
            <td>To-one association</td>
            <td>Source system associated with entity type.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>name</td>
            <td>String(64)</td>
            <td>Name of the entity type.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>display</td>
            <td>String(64)</td>
            <td>How the entity type will be displayed.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isPrivate</td>
            <td>Boolean</td>
            <td>Determines whether an entity type is private or not.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>

### EdsEntityTypeSchemaVersion
Represents the structure of data for an Entity Type.

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
            <th>EntityTypeSchemaVersion field</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>entityType</td>
            <td>To-one association</td>
            <td>Entity type associated with schema version.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>schema</td>
            <td>String</td>
            <td>Add text</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>description</td>
            <td>String</td>
            <td>Description of the schema version.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>name</td>
            <td>String(64)</td>
            <td>Name of the schema version.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>

### EdsData
Represents an individual data entry identified by Entity Type ID and Source ID.

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
            <th>EdsData field</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>sourceSystem</td>
            <td>To-one association</td>
            <td>Entity type associated with data record.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>entityType</td>
            <td>String</td>
            <td>Add text</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>schemaVersion</td>
            <td>String</td>
            <td>Description of the schema version.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>name</td>
            <td>String(64)</td>
            <td>Name of the schema version.</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>
