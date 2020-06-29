# Pay and Bill - LegalBusinessEntity

Entity representing a Legal Business Entity for use in payroll integrations.

| **LegalBusinessEntity field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| countryID | Integer | The ID code representing the country associated with this legal business entity. | X | |
| dateAdded | Timestamp | The date on which the entity was created. | X | |
| defaultCurrencyUnit | To-one association | The currency unit assigned as the default for this legal business entity. | X | |
| isDeleted | Boolean | Indicates whether this record has been marked as deleted in the Bullhorn system.| X | |
| legalName | String | The long-form legal name of this legal business entity. | X | |
| legalEntityNumber | String | The string value representing the legal business number for this entity. | X | |
| shortName | String | The shortened name used to represent this legal business entity. | X | |
| statusLookup | To-one association | An associated value representing the status of this legal business entity.  A status of "Active" is a value of 1 and a status of "Inactive" is a value of 2.  | X | |
