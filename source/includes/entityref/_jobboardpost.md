# JobBoardPost

Represents a view into a JobOrder entity with information typically used in public job boards. JobBoardPost is a read-only entity.

| **JobBoardPost field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| address | Address | Address of the hiring company; when the record is created in the Bullhorn application, this data is pulled from the client contact record. |  X | |
| benefits | String | Text description of benefits offered with this job. |  X | |
| bonusPackage | String | Text description of the bonus package offered with this job. |  X | |
| categories | To-many association | IDs of Categories associated with this job. |  X | |
| dateAdded | Timestamp | Date when this record was created in the Bullhorn system. | X | |
| dateEnd | Timestamp | Date when the job will end (if applicable). |  X | |
| dateLastPublished | Timestamp | Date when this record was last published to the 'Corporate' Job Board. | X | |
| employmentType | String (200) | Type of employment offered: for example, contract, permanent, and so forth. Determines which of the five job types are used. | X |  X |
| isPublic | Boolean | Controls whether a job appears on the Bullhorn job board (if in use). Only 3 values allows, -1, 0, 1. |  X | |
| isOpen | Boolean | Indicates whether the job is open. | X  | |
| payRate | BigDecimal | Pay rate offered with this job. |  X | |
| publicDescription | String (200000) | Description of this job for use on public job boards. | X | |
| publishedCategory | To-one association | The category that was last selected when publishing the job. Included Category fields are: id, name |  X | |
| publishedZip | String (18) | Published Zip Code of the job location. | X  | |
| responseUser | To-one association | ID of CorporateUser to whom submissions should be sent. |  X | |
| salary | BigDecimal | Salary offered for this job. |  X | |
| salaryUnit | String (12) | Salary unit represented by the range (e.g. per hour, yearly). |  X | |
| startDate | Timestamp | Desired start date for the position. | X | X |
| title | String (100) | Job title. |  X | |
| travelRequirements | String (50) | Text description of the amount of travel required for this job. |  X | |
| willRelocate | Boolean | Indicates whether the hiring company will provide relocation assistance. |  X | |
| willSponsor | Boolean | Indicates whether the hiring company is willing to sponsor an employee on a work visa. |  X | |
| yearsRequired | Integer | Number of years of experience required for the job. |  X | |