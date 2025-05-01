# Pay and Bill - UnbilledRevenueDistributionBatch

Groups unbilled revenue records into a single batch for systematic processing, enabling a streamlined transition from accrued revenue to invoicing.

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th>UnbilledRevenueDistributionBatch fields</th>
<th>Type</th>
<th>Description</th>
<th>Not null</th>
<th>Read-only</th>
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
<td>batchStatus</td>
<td><p>To-one association</p></td>
<td><p>The associated BatchStatusLookup representing the status of the batch.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>billableCharges</td>
<td><p>To-many association</p></td>
<td><p>The BillableCharges associated to this batch.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul>
<p> </p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>canvasReport</td>
<td><p>To-one association</p></td>
<td><p>CanvasReport associated with this batch.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Timestamp representing when this batch was added.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Timestamp representing when this batch was last modified.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>owner</td>
<td>To-one association</td>
<td><p>The owner of this batch.</p>
<p>Default Fields:</p>
<ul>
<li>id</li>
<li>firstName</li>
<li>lastName</li>
</ul></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>unbilledRevenueDistributions</td>
<td>To-many association</td>
<td><p>The UnbilledRevenueDistributions that are associated with this batch.</p>
<p>Default Fields:</p>
<ul>
<li>id</li>
</ul></td>
<td> </td>
<td>X</td>
</tr>
</tbody>
</table>


