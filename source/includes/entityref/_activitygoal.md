# ActivityGoal

Read-only view of activity goals established for sales personnel in the organization.

| **ActivityGoal field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| user | To-many association | User for whom this activity goal was created. Entity - CorporateUser; id - Integer; firstName - String; lastName - String | X | X |
| department | To-one association | Department of user for whom this activity goal was created. Entity: CorporationDepartment; id - Integer | | |
| activityType | String | Type of goal for record. | X | X |
| startDate | String | The first day of the time period in which this activity goal is in effect, in the format: "YYYY-MM-DD". | X | |
| endDate | String | The last day of time period in which this activity goal is in effect, in the format: "YYYY-MM-DD". | X | |
| goal | Integer | Target goal for activity type. | X | |
| actual | Integer | Current count of activity type data for goal. | X | |
| periodName | String | Time period for activity goal. (Weekly/Monthly). | X | X |
| percentAttained | Integer | The whole percentage attained to date, equal to the attained value divided by the goal value multiplied by 100. | X | |