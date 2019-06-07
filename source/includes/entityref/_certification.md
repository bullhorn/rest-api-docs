# Certification

This entity represents a certification that a Candidate has.

| **Certification field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| description | String (2147483647)  | Free-text description of this certification. | | |
| name | String (100) | Name of this certification. | X | |
| expirationDateOptional | Timestamp | Expiration for the certification |  |  |
| categoryID | int | The Category this certification is linked to |  |  |
| specialtyID | int | The Specialty this certification is linked to |  |  |
| state | String(100) | The state where this certification is valid |  |  |
| country | String(100) | The country where this certification is valid |  |  |
| customText1-10 | String(100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. |  |  |
| customTextBlock1-5 | String(2147483647) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. |  |  |
| customDate1-3 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. |  |  |
| customFloat1-3 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. |  |  |
| customInt1-3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. |  |  |
