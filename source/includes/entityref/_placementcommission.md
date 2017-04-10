# PlacementCommission

Represents a commission payment that is paid upon successful placement of a Candidate in a job. Each PlacementCommission instance is associated with exactly one Placement instance; a Placement may have multiple PlacementCommissions associated with it.

<table>
<thead>
<tr class="header">
<th><strong>PlacementCommission field</strong></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
<th><strong>Not null </strong></th>
<th><strong>Read-only</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>id</td>
<td>Integer</td>
<td>Unique identifier for this entity.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>comments</td>
<td>String</td>
<td>Free-text comments on this commission.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>commissionPercentage</td>
<td>Double</td>
<td>The commission amount, expressed as a percentage: for example, 0.05 = 5%. Saved as decimal.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date on which this record was created in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date on which the PlacementCommission was last modified.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>externalRecipient</td>
<td>String (100)</td>
<td>If the person who should receive the commission does not have a Bullhorn id, this field indicates that person's name.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>flatPayout</td>
<td>Double</td>
<td>The commission expressed as a flat sum.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>grossMarginPercentage</td>
<td>Double</td>
<td>The percentage of the total gross margin for the Placement that the commission recipient will receive.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>hourlyPayout</td>
<td>Double</td>
<td>The commission expressed as an hourly rate (e.g., $1.00 for each hour worked by the employee).</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>placement</td>
<td>To-one association</td>
<td>Placement to which this commission pertains.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>role</td>
<td>String (50)</td>
<td>The commission recipient's role for the Placement (Sales, Recruiting, and so forth).</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>status</td>
<td>String (30)</td>
<td>Status of this commission.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>user</td>
<td>To-one association</td>
<td>User who will receive the commission, if applicable.</td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>