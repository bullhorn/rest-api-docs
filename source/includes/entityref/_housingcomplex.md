# HousingComplex

Represents a housing complex that a ClientCorporation uses when providing housing for certain types of employees.

 

<table>
<thead>
<tr class="header">
<th><strong>HousingComplex field</strong></th>
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
<td>address</td>
<td>Address</td>
<td><p>HousingComplex address:</p>
<ul>
<li><p>address1</p></li>
<li><p>address2</p></li>
<li><p>city</p></li>
<li><p>state</p></li>
<li><p>zip</p></li>
<li><p>countryID:</p></li>
</ul>
<blockquote>
<p>options:<br />
value: 1<br />
value: 2</p>
</blockquote>
<p>/meta/HousingComplex?<br />
fields=address(countryID)</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>billingContactID</td>
<td>Integer</td>
<td>The Bullhorn ClientContact ID of the billing contact person for this housing complex.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>comments</td>
<td>String</td>
<td>Free-text comments about this housing complex.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>complexManagerID</td>
<td>Integer</td>
<td>The Bullhorn ClientContact ID of the housing complex manager.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>complexOwnerID</td>
<td>Integer</td>
<td>The Bullhorn ClientContact ID of the housing complex owner. </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>contactName</td>
<td>String (100)</td>
<td>Name of the contact person for the housing complex, generally a facilities manager or superintendent.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customContactID1 to 3</td>
<td>Integer</td>
<td>Configurable fields for identifying additional ClientContacts who have roles related to this housing complex.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customDate1 to 3</td>
<td>Timestamp</td>
<td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customFloat1 to 3</td>
<td>Double</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>customInt1 to 3</td>
<td>Integer</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customText1 to 5</td>
<td>String (100)</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customTextBlock1 to 5</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>The date on which this record was created in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>fax</td>
<td>String (20)</td>
<td>Fax number for the housing complex.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether this record has been marked as deleted in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>name</td>
<td>String (100)</td>
<td>Name of the housing complex.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>owner</td>
<td>Integer</td>
<td>CorporateUser who is the owner of this housing complex.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>phone</td>
<td>String (20)</td>
<td>Primary phone number of the housing complex.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>whitelistClientCorporations</td>
<td>To-many association</td>
<td>Set of ClientCorporations to use this housing complex.</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>