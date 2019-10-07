# Pay and Bill - GeneralLedgerAccount

Represents a general ledger account for use with billing information, including earn codes and invoice terms.

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
<th><p><strong>GeneralLedgerAccount</strong> fields</p></th>
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
<td>externalAccountNumber</td>
<td><span>Integer</span></td>
<td><p><span>External account number.</span></p></td>
<td> X</td>
<td> </td>
</tr>
<tr class="odd">
<td>externalAccountName</td>
<td><p><span>String (100)</span></p></td>
<td><p><span>External account n</span>ame.</p></td>
<td> X</td>
<td> </td>
</tr>
<tr class="even">
<td>externalAccountType</td>
<td><p><span>String (100)</span></p></td>
<td><p><span>External account </span> <span>type.</span></p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>externalAccountDetailType</td>
<td><p><span>String (100)</span></p></td>
<td><p><span>External account detail </span> <span>type.</span></p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>isAccountsReceivable</td>
<td><p>Boolean</p></td>
<td><p>Is <span>accounts receivable </span>account.</p>
<p>The default value is false.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>isActive</td>
<td><p>Boolean</p>
<p> </p></td>
<td><p>Is active account.</p>
<p>The default value is true.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>isBill</td>
<td><p>Boolean</p></td>
<td><p>Is bill account.</p>
<p><span>The default value is false.</span></p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>isDeleted</td>
<td><p>Boolean</p></td>
<td><p><span>Whether entity is deleted.</span></p>
<p><span> <span>The default value is false.</span> </span></p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>isPay</td>
<td><p>Boolean</p></td>
<td><p>Is pay account.</p>
<p><span>The default value is false.</span></p></td>
<td>X</td>
<td> </td>
</tr>
</tbody>
</table>


