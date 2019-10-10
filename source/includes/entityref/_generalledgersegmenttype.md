# Pay and Bill - GeneralLedgerSegmentType

Represents a general ledger segment for assignment to Placement, BillableCharge, and PayableCharge.

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
<th>GeneralLedgerSegmentType fields</th>
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
<td>description</td>
<td>String (100)</td>
<td>Description.</td>
<td> X</td>
<td> X</td>
</tr>
<tr class="odd">
<td><span>segmentType</span></td>
<td><span>String (100)</span></td>
<td><span>Segment type.</span></td>
<td>X</td>
<td>X</td>
</tr>
</tbody>
</table>


