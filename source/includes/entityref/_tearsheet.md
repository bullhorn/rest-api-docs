# Tearsheet

Represents a tearsheet. The Tearsheet entity supports the massUpdate operations.

| **Tearsheet field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | |
| candidates | To-many association | Candidates with which this Tearsheet is associated. The default fields | | |
| clientContacts | To-many association | ClientContacts with which this Tearsheet is associated. | | |
| dateAdded | Timestamp | Date on which the Tearsheet was created in the Bullhorn system. | X | |
| dateLastModified | Timestamp | Date on which the Tearsheet was last modified. | | |
| description | String | Free-text description. | | |
| isDeleted | Boolean | Indicates whether this record is marked as deleted in the Bullhorn system. | X | |
| isPrivate | Boolean | Indicates whether this is a private Tearsheet. A private Tearsheet is not visible to users other than the user who created the tearsheet. | | |
| jobOrders | To-many association | JobOrders with which this Tearsheet is associated. | | |
| name | String | Name of this Tearsheet. | X | |
| owner | To-one association | CorporateUser who is the primary owner of this Tearsheet. The default value is user who created the tearsheet. | | |
| recipients | To-many association | Ids of TearsheetRecipients with which this Tearsheet is associated. | | |