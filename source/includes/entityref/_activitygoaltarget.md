# ActivityGoalTarget

Lets a user assign an activity goal to a user.

| **ActivityGoalTarget field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique Identifier for this entity. | X | X |
| activityGoalConfiguration | To-one association | The activity goal configuration assigned to user. | X | |
| goal | Integer | The amount of activity that user is trying to hit. | X | |
| periodName | String | Time period for activity goal. (Weekly/Monthly). | X | |
| user | To-one association | User to which activity goal is assigned. | X  | | |
