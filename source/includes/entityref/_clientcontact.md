# ClientContact

Represents a contact person who works at a ClientCorporation. A ClientContact can be any person at the ClientCorporation whom you wish to track in the Bullhorn system: a hiring manager, HR staffer, executive, or other employee. Note that a Candidate may become a Client Contact after being placed in a job; or a ClientContact may become a Candidate after deciding to look for another position.

The ClientContact entity supports the [massUpdate](#get-massupdate) operations.

<table>
<thead>
<tr class="header">
<th><p><strong>ClientContact</strong></p>
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
<td><p>Contact's address:</p>
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
<p>/meta/ClientContact?<br />
fields=address(countryID)</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>businessSectors</td>
<td>To-many association</td>
<td>Ids of BusinessSectors in which the Contact operates.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>category</td>
<td>To-one association</td>
<td><p>Contact's primary Category.</p>
<p>The default value is the Other Area(s) category for the user’s private label or the first Category.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>categories</td>
<td>To-many association</td>
<td>Ids of the Categories associated with the Contact. Note that the categoryId property is used to store the contact's primary Category, while this association hold that Category and any other Categories to which the Contact belongs.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>certifications</td>
<td>String</td>
<td>Contact's certifications.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>clientCorporation</td>
<td>To-one association</td>
<td>ClientCorporation for which the Contact works.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>comments</td>
<td>String</td>
<td>Free-text comments on this Contact.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customDate1-3</td>
<td>Timestamp</td>
<td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customFloat1-3</td>
<td>Double</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>customInt1-3</td>
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
<td>customText1-20</td>
<td>String (100)</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>customTextBlock1-5</td>
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
<td> </td>
</tr>
<tr class="even">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date on which the ClientContact was last modified.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>dateLastVisit</td>
<td>Timestamp</td>
<td>Date of ClientContact’s last visit.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>description</td>
<td>String</td>
<td>Large text field for additional information about the contact.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>desiredCategories</td>
<td>String</td>
<td>Categories that the ClientContact wants Candidates to belong to.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>desiredSkills</td>
<td>String</td>
<td>Skills that the ClientContact wants his or her Candidates to have.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>desiredSpecialties</td>
<td>String</td>
<td>Specialties that the ClientContact wants his or her Candidates to have.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>division</td>
<td>String (40)</td>
<td>Department that the Contact is associated with.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>email</td>
<td>String (60)</td>
<td>ClientContact's primary (work) email address.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>email2</td>
<td>String (100)</td>
<td>Additional email address. Typically used for the ClientContact’s home or personal email.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>email3</td>
<td>String (100)</td>
<td>Additional email address.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>externalID</td>
<td>String (30)</td>
<td>External identifier for the record, used for migrations and back-office Integration.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>fax</td>
<td>String (20)</td>
<td>ClientContact's primary (work) fax number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>fax2</td>
<td>String (20)</td>
<td>Additional fax number. Typically used for the contact's home or personal fax.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>fax3</td>
<td>String (20)</td>
<td>Additional fax number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>firstName</td>
<td>String (50)</td>
<td>ClientContact's first name.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>isDayLightSavings</td>
<td>Boolean</td>
<td>Indicates whether the ClientContact's location is using Daylight Saving Time.</td>
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
<td>lastName</td>
<td>String (50)</td>
<td>ClientContact's last name.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>leads</td>
<td>To-many association</td>
<td>Leads associated with this ClientContact.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>linkedPerson</td>
<td><p>Person</p>
<p>(superclass of Candidate and ClientContact)</p></td>
<td><p>If the person represented by this ClientContact is also a Candidate, this field includes the following Candidate fields:</p>
<p>id</p>
<p>_subtype</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>massMailOptOut</td>
<td>Boolean</td>
<td>Indicates whether the Contact has chosen not to be included in mass emails through the Bullhorn system.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>middleName</td>
<td>String (50)</td>
<td>ClientContact's middle name.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>mobile</td>
<td>String (20)</td>
<td>ClientContact's mobile (cellular) telephone number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>name</td>
<td>String</td>
<td><p>ClientContact's full name. Should be a combination of the firstName and lastName fields separated by a space.</p>
<p><strong>Notes:</strong> If you create a ClientContact with no value in the name field, users will have no way to select that ClientContact in the Bullhorn staffing application.</p>
<p>If you create or modify a ClientContact name that is not a combination of the firstName and lastName fields, the name will be overwritten when a user saves the ClientContact in the Bullhorn staffing application. The name will change to a combination of the firstName and lastName fields.</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>namePrefix</td>
<td>String (5)</td>
<td>ClientContact's name prefix, for example Dr., Ms, Mr., and so forth.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>nameSuffix</td>
<td>String (5)</td>
<td>ClientContact's name suffix, for example Jr.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>nickName</td>
<td>String</td>
<td>ClientContact's nickname.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>numEmployees</td>
<td>Integer</td>
<td>Number of employees who report to this Contact.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>occupation</td>
<td>String (50)</td>
<td>ClientContact's job title.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>office</td>
<td>String (40)</td>
<td>For companies with multiple locations, this field can be used to indicate which office this contact works out of.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>owner</td>
<td>To-one association</td>
<td><p>CorporateUser who is the owner of this Contact record.</p>
<p>The default value is user who creates the ClientContact.</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>pager</td>
<td>String (20)</td>
<td>ClientContact's pager number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>password</td>
<td>String</td>
<td><p>ClientContact's password for logging in to Bullhorn.</p>
<p>The default value is a randomly generated string.</p></td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>phone</td>
<td>String (20)</td>
<td>ClientContact's primary (work) telephone number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>phone2</td>
<td>String (20)</td>
<td>Alternate phone number. Typically used for the contact's home phone number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>phone3</td>
<td>String (20)</td>
<td>Alternate phone number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>preferredContact</td>
<td>String (15)</td>
<td>Contact's preferred method of contact (For example, phone, email, and so forth.)</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>referredByPerson</td>
<td>Person</td>
<td>Person who referred this ClientContact.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>reportToPerson</td>
<td>Person</td>
<td>Person to whom this ClientContact reports.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>secondaryAddress</td>
<td>Address</td>
<td><p>ClientContact's secondary (home) address:</p>
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
<p>/meta/ClientContact?<br />
fields=address(countryID)</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>secondaryOwners</td>
<td>To-many association</td>
<td>Ids of internal users who are secondary owners of this Contact. Note that the owner property is used to store the ClientContact’s primary owner, while this association hold that person and any other owners of the Contact.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>skills</td>
<td>To-many association</td>
<td>Ids of Skills that the ClientContact wants Candidates to have.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>smsOptIn</td>
<td>Boolean</td>
<td>Indicates whether the ClientContact has granted permission to be sent messages via SMS.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>source</td>
<td>String (200)</td>
<td>Source from which this ClientContact was found.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>status</td>
<td>String (30)</td>
<td>Status of the contact; for example, New Lead, Active, Prospect, and so forth. Possible values can be configured using field maps.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>timeZoneOffsetEST</td>
<td>Integer</td>
<td>Indicates the number of hours by which the ClientContact's time zone differs from Eastern Standard Time. For example, Pacific Standard Time is -3, three hours earlier than Eastern.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>type</td>
<td>String (30)</td>
<td>Describes the type of ClientContact (for example, Primary, Secondary, Target, Gatekeeper). Possible values can be configured using field maps.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>username</td>
<td>String</td>
<td><p>ClientContact's username for logging in to Bullhorn.</p>
<p>The default value is _[random number]</p></td>
<td>X </td>
<td> </td>
</tr>
</tbody>
</table>