# Pay and Bill - UnbilledRevenueDistributionBatch

Represents an unbilled revenue distribution batch.

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
<td>accountingDate</td>
<td>Date</td>
<td>Date used to track when batch is booked for reporting.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
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
<tr class="even">
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
<tr class="odd">
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
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Timestamp representing when this batch was added.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Timestamp representing when this batch was last modified.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
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
<tr class="odd">
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


