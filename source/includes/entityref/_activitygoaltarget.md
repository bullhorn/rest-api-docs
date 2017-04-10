# ActivityGoalTarget

Lets a user assign an activity goal to a user.

<table>
<thead>
<tr class="header">
<th><strong>ActivityGoalTarget field</strong></th>
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
<td>activityGoalConfiguration</td>
<td>To-one association</td>
<td>The activity goal configuration assigned to user.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>goal</td>
<td>Integer</td>
<td>The amount of activity that user is trying to hit.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>periodName</td>
<td>String</td>
<td>Time period for activity goal. (Weekly/Monthly).</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>user</td>
<td>To_one association</td>
<td>User to which activity goal is assigned.</td>
<td>X </td>
<td></td>
</tr>
</tbody>
</table>