# Pay and Bill - GeneralLedgerSegment

Represents a general ledger segment for assignment to [Placement](https://bullhorn.github.io/rest-api-docs/entityref.html#placement), [BillableCharge](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-billablecharge), and [PayableCharge](https://bullhorn.github.io/rest-api-docs/entityref.html#pay-and-bill-payablecharge).

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
<th>GeneralLedgerSegment fields</th>
<th>Type</th>
<th>Description</th>
<th>Not null</th>
<th>Read-only</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>id</p></td>
<td><p>Integer</p></td>
<td><p>Unique identifier for this entity.</p></td>
<td><p>X</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td>externalSegmentName</td>
<td><span>String (100)</span></td>
<td><p>External <span>segment</span> <span> </span>number.</p></td>
<td> X</td>
<td> </td>
</tr>
<tr class="odd">
<td>externalSegmentNumber</td>
<td><p>String (100)</p></td>
<td><p>External <span>segment </span>name.</p></td>
<td> X</td>
<td> </td>
</tr>
<tr class="even">
<td>generalLedgerSegmentType</td>
<td><p>To-one association</p></td>
<td>GeneralLedger.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>isActive</td>
<td><p>Boolean</p></td>
<td><p>Is active account.</p>
<p>The default value is true.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>isDeleted</td>
<td><p>Boolean</p></td>
<td><p><span>Whether entity is deleted.</span></p>
<p><span>The default value is false.</span></p></td>
<td><span>X</span></td>
<td>X</td>
</tr>
</tbody>
</table>


