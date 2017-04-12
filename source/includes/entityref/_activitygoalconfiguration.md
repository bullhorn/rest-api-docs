
# ActivityGoalConfiguration

Lets a user configure an activity goal for use in conjunction with the activity goals feature.
| **ActivityGoalConfiguration field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique Identifier for this entity. | X | X |
| codeIdentifier | String | Field that determines if a goal is an ActivityGoal or RecordBasedGoal. | X |
| dateLastModified | Timestamp | The last time record was modified. | X | X |
| Description | String | Goal description. | X |
| goalPeriodId | Integer | Id of goal time period. | X  |
| goalTypeId | Integer | Id of goal type. | X  | X |
| isDeleted | Boolean | Whether or not activity goal is deleted. | X |
| name | String | Name of goal. | X  |
| pulseConfigurationValues | To-many association | Values against which goal is tracked. |