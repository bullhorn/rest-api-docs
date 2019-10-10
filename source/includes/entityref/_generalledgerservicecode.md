# Pay and Bill - GeneralLedgerServiceCode

Represents a general ledger service code.

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
<th>GeneralLedgerServiceCode fields</th>
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
<td><span>externalServiceCodeNumber</span></td>
<td><span>Integer</span></td>
<td><span>External service code number.</span></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td><span>externalServiceCodeName</span></td>
<td>String (100)</td>
<td><span>External service code name.</span></td>
<td> X</td>
<td> </td>
</tr>
<tr class="even">
<td><span>isActive</span></td>
<td><span>Boolean</span></td>
<td><p>Whether this Is active account.</p>
<p>The default value is true.</p></td>
<td><span>X</span></td>
<td> </td>
</tr>
<tr class="odd">
<td><span>isDeleted</span></td>
<td><span>Boolean</span></td>
<td><p>Whether entity is deleted.</p>
<p>The default value is false.</p></td>
<td>X</td>
<td><p>X</p>
<p> </p></td>
</tr>
</tbody>
</table>


