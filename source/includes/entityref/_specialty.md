# Specialty

Represents a specialty that can be associated with a job or held by a candidate. Specialties are associated with a parent Category entity.

| **Specialty field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| dateAdded | Timestamp | Date on which this record was created in the Bullhorn system. | X | X |
| enabled | Boolean | Indicates whether category is available for use in the Bullhorn application. | X | X |
| name | String (100) | Name of Specialty. | X | X |
| parentCategory | Integer | Category that is parent of this Specialty. | X | |