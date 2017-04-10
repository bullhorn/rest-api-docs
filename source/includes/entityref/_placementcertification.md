# PlacementCertification

This entity represents the required certification for a Placement.

<table>
<thead>
<tr class="header">
<th><p><strong>PlacementCertification</strong></p>
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
<td>CandidateCertification</td>
<td>To-one association</td>
<td>CandidateCertification that fulfills this PlacementCertification.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>certification</td>
<td>To-one association</td>
<td>The certification that is required.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>The date on which this record was created in the Bullhorn system.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>placement</td>
<td>To-one association</td>
<td>Placement that this PlacementCertification is for.</td>
<td>X</td>
<td></td>
</tr>
</tbody>
</table>