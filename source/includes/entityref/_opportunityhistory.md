# OpportunityHistory

Read-only entity that represents the history of certain fields of an Opportunity.

<table>
<thead>
<tr class="header">
<th><p><strong>OpportunityHistory</strong></p>
<p><strong>field</strong></p></th>
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
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date this OpportunityHistory was added.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>dealValue</td>
<td>BigDecimal</td>
<td>Deal value of the associated Opportunity at the time this OpportunityHistory was created.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>effectiveDate</td>
<td>Timestamp</td>
<td>Date the status change comes into effect for the associated Opportunity.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>modifyingUser</td>
<td>To-one association</td>
<td>CorporateUser who modified the Opportunity associated with this OpportunityHistory.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>opportunity</td>
<td>To-one association</td>
<td>Opportunity associated with this OpportunityHistory.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>status</td>
<td>String</td>
<td>Status of the associated Opportunity at the time this OpportunityHistory was created.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>weightedDealValue</td>
<td>BigDecimal</td>
<td>Weighted deal value of the associated Opportunity at the time this OpportunityHistory was created.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>winProbabilityPercent</td>
<td>Double</td>
<td>Probability of winning the associated Opportunity at the time this OpportunityHistory was created.</td>
<td> </td>
<td>X</td>
</tr>
</tbody>
</table>