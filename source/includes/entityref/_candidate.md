# Candidate

Represents a person seeking a job.

The Candidate entity supports the [massUpdate](#get-massupdate) operations.

<table>
<thead>
<tr class="header">
<th><p><strong>Candidate</strong></p>
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
<td><p>Candidate address:</p>
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
<p>/meta/Candidate?<br />
fields=address(countryID)</p></td>
<td></td>
<td> </td>
</tr>
<tr class="odd">
<td>businessSectors</td>
<td>To-many association</td>
<td>Ids of BusinessSectors with which Candidate is associated.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>candidateSource</td>
<td>To-one association</td>
<td>Source of the Candidate.</td>
<td> </td>
<td>  X</td>
</tr>
<tr class="odd">
<td>category</td>
<td>To-one association</td>
<td><p>Candidate's primary Category.</p>
<p>The default value is the Other Area(s) category for the user’s private label or the first Category.</p>
<p> </p>
<p><strong>Note:</strong> This property refers to the original category assigned to the Candidate. To retrieve or update categories for the Candidate, you should use the categories associations (see below).</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>categories</td>
<td>To-many association</td>
<td>Categories assigned to Candidate.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>certifications</td>
<td>String</td>
<td>Candidate's certifications.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>comments</td>
<td>String</td>
<td>Free-text comments on Candidate.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>companyName</td>
<td>String (100)</td>
<td>Name of company where the Candidate currently works.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>companyURL</td>
<td>String (100)</td>
<td>Candidate's personal URL.</td>
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
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
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
<td>customObject1s to 10s</td>
<td>CustomObject</td>
<td>Fields to which custom objects can be assigned. For more information about custom objects, see the Bullhorn Resource Center and the following article on using the REST API with custom objects:<br />
<a href="http://developer.bullhorn.com/articles/customobjects" class="uri">http://developer.bullhorn.com/articles/customobjects</a></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>customText1 to 20</td>
<td>String (100)</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customTextBlock1 to 5</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateAdded</td>
<td>Timestamp</td>
<td>Date on which this record was created in the Bullhorn system.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>dateAvailable</td>
<td>Timestamp</td>
<td>Date on which Candidate will be available to begin work.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateAvailableEnd</td>
<td>Timestamp</td>
<td>Date on which Candidate's availability will end, if applicable.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>dateI9Expiration</td>
<td>Timestamp</td>
<td>Date on which the Candidate's I9 form will expire.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dateLastComment</td>
<td>Timestamp</td>
<td>Date of the most recent Note referencing Candidate.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date the Candidate was last modified.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>dateNextCall</td>
<td>Timestamp</td>
<td>Date when the Candidate should next be called.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>dateOfBirth</td>
<td>Timestamp</td>
<td>Candidate's date of birth.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>dayRate</td>
<td>BigDecimal</td>
<td>Candidate's desired per-day pay rate.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>dayRateLow</td>
<td>BigDecimal</td>
<td>Lowest per-day rate the Candidate will accept.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>degreeList</td>
<td>String</td>
<td>List of Candidate's educational degrees. Field on the edit screen, not the field in People Template.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>description</td>
<td>String</td>
<td>Text field, usually used to contain the Candidate's resume.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>desiredLocations</td>
<td>String</td>
<td>Locations where Candidate would like to work.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>disability</td>
<td>String (1)</td>
<td>Indicates whether Candidate has a disability. Allowable values can be configured using field maps. Default values are U (Unknown), Y (Yes), and N (No).</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>educationDegree</td>
<td>String</td>
<td>Candidate's highest level of education.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>email</td>
<td>String (100)</td>
<td>Candidate's email address.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>email2</td>
<td>String (100)</td>
<td>Additional email address.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>email3</td>
<td>String (100)</td>
<td>Additional email address.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>employeeType</td>
<td>String (30)</td>
<td>Candidate's employee type: for example 1099 or W2.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>employmentPreference</td>
<td>String (200)</td>
<td>Indicates type of employment the Candidate would prefer: for example, permanent, part-time, and so forth.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>ethnicity</td>
<td>String (50)</td>
<td>Candidate's ethnicity.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>experience</td>
<td>Integer</td>
<td>Number of years of experience that the Candidate has.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>externalID</td>
<td>String (50)</td>
<td>Used for records migrated in from other systems; often used for the Candidate's external/backoffice Id.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>fax</td>
<td>String (20)</td>
<td>Candidate's fax number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>fax2</td>
<td>String (20)</td>
<td>Additional fax number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>fax3</td>
<td>String (20)</td>
<td>Additional fax number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p>federalAddtional</p>
<p>WitholdingsAmount</p></td>
<td>BigDecimal</td>
<td>Number of federal withholdings the Candidate has selected on his or her W-2 tax form.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>federalExemptions</td>
<td>Integer</td>
<td>Number of federal exemptions the Candidate has indicated on his or her W-2 tax form.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>federalFilingStatus</td>
<td>String</td>
<td>Candidate's federal tax filing status.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>firstName</td>
<td>String (50)</td>
<td>Candidate's first name.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>gender</td>
<td>String (6)</td>
<td>Candidate's gender.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>hourlyRate</td>
<td>BigDecimal</td>
<td>Candidate's desired hourly pay rate.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>hourlyRateLow</td>
<td>BigDecimal</td>
<td>Lowest hourly pay rate the Candidate will accept.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>i9OnFile</td>
<td>Integer</td>
<td>Indicates whether Candidate's I-9 form has already been filled out and is on file.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>interviews</td>
<td>To-many association</td>
<td><p>Interviews for Candidate.</p>
<p>This field is populated when you create Appointments where Appointment.candidate is this Candidate and Appointment.type is “Interview”.</p></td>
<td></td>
<td>X</td>
</tr>
<tr class="even">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether this record is marked as deleted in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>isEditable</td>
<td>Boolean</td>
<td>Indicates whether Candidate can edit his or her profile information; applicable to Candidate/Client login.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>lastName</td>
<td>String (50)</td>
<td>Candidate's last name.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>leads</td>
<td>To-many association</td>
<td>Leads associated with this Candidate.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>linkedPerson</td>
<td>To-one association</td>
<td><p>If person represented by Candidate is also a ClientContact, this field includes the following ClientContact fields:</p>
<p>id</p>
<p>_subtype</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p>localAddtional</p>
<p>WitholdingsAmount</p></td>
<td>BigDecimal</td>
<td>Number of local withholdings the Candidate has selected on his or her W-2 tax form.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>localExemptions</td>
<td>Integer</td>
<td>Number of local exemptions Candidate has indicated on his or her W-2 tax form.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>localFilingStatus</td>
<td>String</td>
<td>Candidate's local tax filing status.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>localTaxCode</td>
<td>String</td>
<td>Candidate's local tax code (if local taxes apply); not required.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>massMailOptOut</td>
<td>Boolean</td>
<td>Indicates whether Candidate has chosen not to be included in mass emails through the Bullhorn system.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>middleName</td>
<td>String (50)</td>
<td>Candidate's middle name.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>mobile</td>
<td>String (20)</td>
<td>Candidate's mobile (cell) telephone number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>name</td>
<td>String</td>
<td>Candidate's full name. If setting firstname or lastname, you must also set this field; it does not populate automatically.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>namePrefix</td>
<td>String (5)</td>
<td>Candidate's name prefix, for example Dr., Ms., Mr., and so forth.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>nameSuffix</td>
<td>String (5)</td>
<td>Candidate's name suffix, for example Jr.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>nickName</td>
<td>String</td>
<td>Candidate's nickname.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>numCategories</td>
<td>Integer</td>
<td>Number of Category objects associated with Candidate.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>numOwners</td>
<td>Integer</td>
<td>Number of CorporateUsers that are listed as owner of Candidate.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>occupation</td>
<td>String (50)</td>
<td>Candidate's current occupation or job title.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>owner</td>
<td>To-one association</td>
<td><p>CorporateUser who is the primary owner of Candidate.</p>
<p>The default value is user who creates the Candidate.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>pager</td>
<td>String (20)</td>
<td>Candidate's pager number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>paperWorkOnFile</td>
<td>String</td>
<td>Configurable field that tracks whether the Candidate's tax paperwork has been received.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>password</td>
<td>String</td>
<td><p>Candidate’s password.</p>
<p>The default value is a randomly generated string.</p></td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>phone</td>
<td>String (20)</td>
<td>Candidate's home telephone number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>phone2</td>
<td>String (20)</td>
<td>Candidate's telephone number at work.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>phone3</td>
<td>String (20)</td>
<td>Alternate telephone number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>placements</td>
<td>To-many association</td>
<td><p>Placements for Candidate.</p>
<p>This field is populated when you create Placements where Placement.candidate is this Candidate.</p></td>
<td></td>
<td>X</td>
</tr>
<tr class="odd">
<td>preferredContact</td>
<td>String (15)</td>
<td>Candidate's preferred method of contact (for example, phone, email, and so forth.)</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>primarySkills</td>
<td>To-many association</td>
<td>Skills that are listed as primary Skills for Candidate.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>recentClientList</td>
<td>String</td>
<td>List of ClientCorporations for which Candidate has worked.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>referredBy</td>
<td>String (50)</td>
<td>Name of person who referred Candidate.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>referredByPerson</td>
<td>To-one association</td>
<td>Person who referred Candidate, if applicable.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>salary</td>
<td>BigDecimal</td>
<td>Candidate's desired yearly salary.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>salaryLow</td>
<td>BigDecimal</td>
<td>Lowest yearly salary the Candidate will accept.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>secondaryAddress</td>
<td>Address</td>
<td><p>Candidate's work address:</p>
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
<p>/meta/Candidate?<br />
fields=address(countryID)</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>secondaryOwners</td>
<td>To-many association</td>
<td>CorporateUsers who are additional owners of Candidate.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>secondarySkills</td>
<td>Skill</td>
<td>Skills that are listed as secondary skills for Candidate.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>sendouts</td>
<td>To-many association</td>
<td><p>Sendouts for Candidate.</p>
<p>This field is populated when you create Sendouts where the Sendout.candidate is this Candidate.</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>skillSet</td>
<td>String</td>
<td>Text description of Candidate's skills.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>smsOptIn</td>
<td>Boolean</td>
<td>Indicates whether Candidate has granted permission to be sent messages via SMS.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>source</td>
<td>String (200)</td>
<td>Candidate source: for example, Advertisement, Client Referral, LinkedIn, Monster.com, and so forth. Allowable values can be configured using field maps.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>specialties</td>
<td>To-many association</td>
<td><p>Candidate’s specialty skills.</p>
<p>This field is populated when you associate a Specialty with this Candidate in <a href="#create-to-many-associations">a to-many association</a> operation.</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>ssn</td>
<td>String (18)</td>
<td>Candidate's Social Security Number. Check field map for proper format.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p>stateAddtional</p>
<p>WitholdingsAmount</p></td>
<td>BigDecimal</td>
<td>Number of state withholdings Candidate has selected on his or her W-2 tax form.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>stateExemptions</td>
<td>Integer</td>
<td>Number of state exemptions Candidate has indicated on W-2 tax form.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>stateFilingStatus</td>
<td>String</td>
<td>Candidate's state tax filing status.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>status</td>
<td>String (100)</td>
<td>Candidate status with company: for example, New Lead, Active, Offer Pending, Placed, and so forth. Allowable values can be configured using field maps.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>submissions</td>
<td>To-many association</td>
<td><p>JobSubmissions for Candidate.</p>
<p>This field is populated when you create JobSubmissions where JobSubmission.candidate is this Candidate.</p></td>
<td></td>
<td>X</td>
</tr>
<tr class="even">
<td>tasks</td>
<td>To-many association</td>
<td>Tasks associated with Candidate.<br />
<br />
This field is populated when you create Tasks where Task.candidate is this Candidate.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>taxID</td>
<td>String (18)</td>
<td>Id that Candidate uses for tax purposes if not SSN.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>taxState</td>
<td>String</td>
<td>State in which Candidate pays taxes.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>timeZoneOffsetEST</td>
<td>Integer</td>
<td>Indicates the number of hours by which the Candidate's time zone differs from Eastern Standard Time. For example, Pacific Standard Time is -3, three hours earlier than Eastern.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>travelLimit</td>
<td>Integer</td>
<td>Maximum distance Candidate is willing to travel.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>type</td>
<td>String (100)</td>
<td>Candidate type: for example, Active, Passive, and so forth.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>userDateAdded</td>
<td>Timestamp</td>
<td>Date the record was added to the system.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>username</td>
<td>String</td>
<td><p>Candidate’s username for logging in to Bullhorn.</p>
<p>The default value is _[random number]</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>veteran</td>
<td>String (1)</td>
<td>Indicates whether Candidate is a veteran: Y for yes, N for no, or U for unknown.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>webResponse</td>
<td>To-many association</td>
<td>Web responses for Candidate.<br />
<br />
This field is populated when you create JobSubmissions where JobSubmission.candidate is this Candidate and JobSubmission.status is “New Lead”.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>willRelocate</td>
<td>Boolean</td>
<td>Indicates whether Candidate is willing to relocate for a position.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>workAuthorized</td>
<td>Boolean</td>
<td>Indicates whether Candidate is authorized to work in the U.S.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>workPhone</td>
<td>String (20)</td>
<td>Candidate's telephone number at work.</td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>

#### Candidate confidential fields

By default, candidate fields listed in the ‘Confidential Fields’ private label attribute are returned with the value “\*\*CONFIDENTIAL\*\*”. However, confidential fields can also be included in the ‘Candidate Viewable Confidential Fields’ private label attribute. Only users with the ‘View Candidate Viewable Confidential Fields’ user action entitlement can view candidate viewable confidential fields.

User who have both the ‘View Candidate Viewable Confidential Fields’ and ‘Edit Confidential Fields’ user action entitlements can edit candidate viewable confidential fields.