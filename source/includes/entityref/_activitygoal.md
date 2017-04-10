# ActivityGoal

Read-only view of activity goals established for sales personnel in the organization.

 

<table>
<thead>
<tr class="header">
<th><strong>ActivityGoal field</strong></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
<th><strong>Not null</strong></th>
<th><strong>Read-only</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>id</td>
<td>Integer</td>
<td>Unique identifier for this entity.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>user</td>
<td>To-many association</td>
<td><p>User for whom this activity goal was created.</p>
<p>Entity - CorporateUser; id - Integer; firstName - String; lastName - String;</p></td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>department</td>
<td>To-one association</td>
<td><p>Department of user for whom this activity goal was created.</p>
<p>Entity: CorporationDepartment; id - Integer;</p></td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>activityType</td>
<td>String</td>
<td>Type of goal for record.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>startDate</td>
<td>String</td>
<td>The first day of the time period in which this activity goal is in effect, in the format: &quot;YYYY-MM-DD&quot;.</td>
<td></td>
<td>X</td>
</tr>
<tr class="even">
<td>endDate</td>
<td>String</td>
<td>The last day of time period in which this activity goal is in effect, in the format: &quot;YYYY-MM-DD&quot;.</td>
<td></td>
<td>X</td>
</tr>
<tr class="odd">
<td>goal</td>
<td>Integer</td>
<td>Target goal for activity type.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>actual</td>
<td>Integer</td>
<td>Current count of activity type data for goal.</td>
<td></td>
<td>X</td>
</tr>
<tr class="odd">
<td>periodName</td>
<td>String</td>
<td>Time period for activity goal. (Weekly/Monthly).</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>percentAttained</td>
<td>Integer</td>
<td>The whole percentage attained to date, equal to the attained value divided by the goal value multiplied by 100.</td>
<td></td>
<td>X</td>
</tr>
</tbody>
</table>

### ActivityGoalConfiguration

Lets a user configure an activity goal for use in conjunction with the activity goals feature.

<table>
<thead>
<tr class="header">
<th><strong>ActivityGoalConfiguration field</strong></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
<th><strong>Not null</strong></th>
<th><strong>Read-only</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>id</td>
<td>Integer</td>
<td>Unique Identifier for this entity.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>codeIdentifier</td>
<td>String</td>
<td>Field that determines if a goal is an ActivityGoal or RecordBasedGoal.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>The last time record was modified.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>Description</td>
<td>String</td>
<td>Goal description.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>goalPeriodId</td>
<td>Integer</td>
<td>Id of goal time period.</td>
<td>X </td>
<td></td>
</tr>
<tr class="even">
<td>goalTypeId</td>
<td>Integer</td>
<td>Id of goal type.</td>
<td>X </td>
<td>X</td>
</tr>
<tr class="odd">
<td>isDeleted</td>
<td>Boolean</td>
<td>Whether or not activity goal is deleted.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>name</td>
<td>String</td>
<td>Name of goal.</td>
<td>X </td>
<td></td>
</tr>
<tr class="odd">
<td>pulseConfigurationValues</td>
<td>To-many association</td>
<td>Values against which goal is tracked.</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
