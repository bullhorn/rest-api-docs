# Category

This entity represents a category in which a Candidate or JobOrder can be placed. A category that has a value for parentCategoryId greater than zero is  is a specialty.

| **Category field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| dateAdded | Timestamp | Date on which record was created in the Bullhorn system. | X | X |
| description | String (255) | Free-text description of this category. |  | |
| enabled | Boolean | Indicates whether category is available for use in the Bullhorn system. | X | X |
| name | String (100) | Name of the category. | X | X |
| occupation | String (50) | Occupation. | X | |
| skills | To-many association | Ids of the Skills associated with this Category. | | |
| specialties | To-many association | Ids of the Specialties that are children of this Category. | | |
| type | String (20) | Bill Rate Category, Skills Checklist Category, and so forth. | X | |
