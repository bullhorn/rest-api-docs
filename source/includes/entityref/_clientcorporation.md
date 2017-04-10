# ClientCorporation

Represents a company that is a client of a company; for example, a company with jobs to fill.

The ClientCorporation entity supports the [massUpdate](#get-massupdate) operations.

<table>
<thead>
<tr class="header">
<th><p><strong>ClientCorporation</strong></p>
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
<td>address</td>
<td>Address</td>
<td><p>ClientCorporation's main address:</p>
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
<p>Use the following REST call to get the list of countryIDs and labels:</p>
<p>/meta/ClientCorporation?<br />
fields=address(countryID)</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>annualRevenue</td>
<td>BigDecimal</td>
<td>ClientCorporation's annual revenue in millions of U.S. dollars.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>billingAddress</td>
<td>AddressWithout-Country</td>
<td><p>Address that contains the address to which bills should be sent for this ClientCorporation.</p>
<ul>
<li><p>address1</p></li>
<li><p>address2</p></li>
<li><p>city</p></li>
<li><p>state</p></li>
<li><p>zip</p></li>
</ul></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>billingContact</td>
<td>String (100)</td>
<td>Name of the person to whom bills should be sent.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>billingFrequency</td>
<td>String (20)</td>
<td>Frequency with which bills should be sent to the ClientCorporation: for example, Weekly, Bi-Weekly, Semi-Monthly, Monthly.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>billingPhone</td>
<td>String (20)</td>
<td>Phone number of the billing contact person.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>businessSectorList</td>
<td>String</td>
<td>Comma-separated list of BusinessSectors in which the ClientCorporation operates. See field map data for a list of possible values.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>childClientCorporations</td>
<td>To-many association</td>
<td><p>ClientCorporations that are children of this one. Included ClientCorporation fields are:</p>
<p>id</p>
<p>name</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>clientCorporationCertifications</td>
<td>To-many association</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>ClientCorporationCertifications associated with this corporation.</p></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>clientContacts</td>
<td>To-many association</td>
<td><p>ClientContacts who work at this ClientCorporation. Included ClientContact fields are:</p>
<p>id</p>
<p>firstName</p>
<p>lastName</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>companyDescription</td>
<td>String</td>
<td>Text description of the company.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>companyURL</td>
<td>String (100)</td>
<td>Company's website URL. May use http:// but not required.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>competitors</td>
<td>String</td>
<td>Company's major competitors.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>culture</td>
<td>String</td>
<td>Text description of the corporate culture.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customDate1-3</td>
<td>Timestamp</td>
<td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customFloat1-3</td>
<td>Double</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customInt1-3</td>
<td>Integer</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customObject1s to 10s</td>
<td>CustomObject</td>
<td>Fields to which custom objects can be assigned. For more information about custom objects, see the Bullhorn Resource Center and the following article on using the REST API with custom objects:<br />
<a href="http://developer.bullhorn.com/articles/customobjects" class="uri">http://developer.bullhorn.com/articles/customobjects</a></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>customText1-20</td>
<td>String (100)</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customTextBlock1-5</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date on which this record was created in the Bullhorn system.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>dateFounded</td>
<td>Timestamp</td>
<td>Date on which the ClientCorporation was founded.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date on which the ClientCorporation was last modified.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>department</td>
<td>To-one association</td>
<td><p>Department in the ClientCorporation that has primary responsibility for this client (for example, a regional office).</p>
<p>Default value is primary department of user who adds the record.</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>feeArrangement</td>
<td>Double</td>
<td>Fee, expressed as a percentage, that this ClientCorporation will pay for each Placement.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>funding</td>
<td>String</td>
<td>Current funding status of the ClientCorporation.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>industryList</td>
<td>String</td>
<td>Comma-separated list of industries in which the company operates. See field map data for the list used by a particular company.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>invoiceFormat</td>
<td>String</td>
<td>Configurable field to be passed to a back-office system to indicate how to group invoices for this company (Per Placement, Per Billing Contact, and so forth.)</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>invoiceGroups</td>
<td>To-many association</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Invoice groups associated with this ClientCorporation.</p></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>invoices</td>
<td>To-many association</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Invoices associated with this corporation.</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>leads</td>
<td>To-many association</td>
<td>Leads associated with this ClientCorporation.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>name</td>
<td>String (100)</td>
<td>Name of the company.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>notes</td>
<td>String</td>
<td>Free text field for entering any comments or notes about the company.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>numEmployees</td>
<td>Integer</td>
<td>Total number of people employed by the company.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>numOffices</td>
<td>Integer</td>
<td>Total number of offices for the ClientCorporation.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>Owners</td>
<td>To-many association</td>
<td>Owners of the ClientContacts for this ClientCorporation.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>ownerShip</td>
<td>String (30)</td>
<td>Status of the ClientCorporation's current ownership (for example, Public, Private).</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>parentClientCorporation</td>
<td>To-one association</td>
<td><p>ClientCorporation that is a parent of this one. Included ClientCorporation fields are:</p>
<p>id</p>
<p>name</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>phone</td>
<td>String (20)</td>
<td>Main phone number for the ClientCorporation.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>rateCards</td>
<td>To-many association</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Rate cards associated with this ClientCorporation.</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>revenue</td>
<td>String</td>
<td>Estimated annual revenue in millions for the company.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>status</td>
<td>String (30)</td>
<td>Status of the business relationship with this company; for example, Prospect, Active, and so forth.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>taxRate</td>
<td>Double</td>
<td>Tax rate for the company expressed in percentage: for example, 28%. Passed to a back-office system if applicable.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>tickerSymbol</td>
<td>String (20)</td>
<td>Stock market ticker symbol for the company.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>workWeekStart</td>
<td>Integer</td>
<td>Day of the week on which the work week starts for this company. 1=Sunday, 2=Monday, and so forth.</td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>