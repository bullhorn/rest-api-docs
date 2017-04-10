# Lead

Represents a Lead on a potential Candidate, ClientContact, or ClientCorporation. A Lead can be converted into a Candidate, ClientContact, or ClientCorporation.

<table>
<thead>
<tr class="header">
<th><p><strong>Lead</strong></p>
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
<td>Lead's address. This is an address object containing Street Address, City, State, Zip, and CountryID.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>assignedTo</td>
<td>To-many association</td>
<td>CorporateUser(s) this Lead is assigned to.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>businessSectors</td>
<td>To-many association</td>
<td>IDs of BusinessSectors in which the Lead operates.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>campaignSource</td>
<td>String</td>
<td>Campaign source of the Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>candidates</td>
<td>To-many association</td>
<td>Candidates associated with this Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>category</td>
<td>To-one association</td>
<td>Lead's primary Category.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>categories</td>
<td>To-many association</td>
<td>IDs of the Categories associated with the Lead. Note that the categoryId property is used to store the Lead's primary Category, while this association hold that Category and any other Categories to which the Lead belongs.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>clientContacts</td>
<td>To-many association</td>
<td>ClientContacts associated with this Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>clientCorporation</td>
<td>To-one association</td>
<td>ClientCorporation associated with this Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>comments</td>
<td>String</td>
<td>Free-text comments on this Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>companyName</td>
<td>String(100)</td>
<td>Name of the Lead's company (can be used if there is no ClientCorporation entity for this Lead's company).</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>companyURL</td>
<td>String(100)</td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>conversionSource</td>
<td>String(200)</td>
<td>Source of the Lead's conversion. For example, Cold Call, Monster, and so forth.</td>
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
<td> </td>
</tr>
<tr class="odd">
<td>dateLastComment</td>
<td>Timestamp</td>
<td>Date on which the last comment referencing this Lead was made.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>dateLastModified</td>
<td>Timestamp</td>
<td>Date on which the Lead was last modified.</td>
<td> </td>
<td></td>
</tr>
<tr class="odd">
<td>dateLastVisited</td>
<td>Timestamp</td>
<td>Date on which the Lead was last visited.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>description</td>
<td>String</td>
<td>Description of the Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>distributionLists</td>
<td>To-many association</td>
<td>IDs of DistributionLists associated with this Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>division</td>
<td>String (40)</td>
<td>Department that the Lead is associated with.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>email</td>
<td>String (100)</td>
<td>Lead's primary email address.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>email2</td>
<td>String (100)</td>
<td>Additional email address. Typically used for the Lead's home or personal email.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>email3</td>
<td>String(100)</td>
<td>Additional email address. Typically used for the Lead's home or personal email.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>fax</td>
<td>String(20)</td>
<td>The primary fax number for the Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>fax2</td>
<td>String(20)</td>
<td>An additional fax number for the Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>fax3</td>
<td>String(20)</td>
<td>An additional fax number for the Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>firstName</td>
<td>String (50)</td>
<td>Lead's first name.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>history</td>
<td>To-many association</td>
<td>IDs of LeadHistory entities associated with this Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>isDayLightSavingsTime</td>
<td>Boolean</td>
<td>Indicates whether the Lead's location is using Daylight Saving Time.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether this record has been marked as Deleted in the Bullhorn system.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>lastName</td>
<td>String (50)</td>
<td>Lead's last name</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>leadSource</td>
<td>String (15)</td>
<td>Source of the Lead. For example, LinkedIn, Facebook, Marketing, and so forth.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>massMailOptOut</td>
<td>Boolean</td>
<td>Indicates whether the Lead has chosen not to be included in mass emails through the Bullhorn system</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>middleName</td>
<td>String (50)</td>
<td>Lead's middle name.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>mobile</td>
<td>String (20)</td>
<td>Lead's mobile (cellular) telephone number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>name</td>
<td>String</td>
<td><p>Lead's full name. Should be a combination of the firstName and lastName fields separated by a space.</p>
<p> </p>
<p><strong>Notes:</strong> If you create a Lead with no value in the name field, users have no way to select that Lead in the Bullhorn staffing application.</p>
<p> </p>
<p>If you create or modify a Lead name that is not a combination of the firstName and lastName fields, the name will be overwritten when a user saves the Lead in the Bullhorn staffing application. The name will change to a combination of the firstName and lastName fields.</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>namePrefix</td>
<td>String (5)</td>
<td>Lead's name prefix. For example Dr., Ms, Mr., and so forth.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>nameSuffix</td>
<td>String (5)</td>
<td>Lead's name suffix. For example Jr.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>nickName</td>
<td>String(50)</td>
<td>Lead's nickname.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>notes</td>
<td>To-many association</td>
<td>IDs of Note entities associated with this Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>numEmployees</td>
<td>Integer</td>
<td>The number of employees associated with the Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>occupation</td>
<td>String(50)</td>
<td>Occupation of the Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>owner</td>
<td>To-one association</td>
<td>ID of the CorporateUser who is the owner of this Lead record.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>ownerCorporation</td>
<td>To-one association</td>
<td>Corporation ID of the Lead's owner.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>pager</td>
<td>String(20)</td>
<td>Lead's pager number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>phone</td>
<td>String (20)</td>
<td>Lead's primary telephone number.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>phone2</td>
<td>String(20)</td>
<td>Additional phone number for the Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>phone3</td>
<td>String(20)</td>
<td>Additional phone number for the Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>preferredContact</td>
<td>String(15)</td>
<td>Preferred contact method of the Lead.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>primarySkills</td>
<td>To-many association</td>
<td>Skills that are listed as the primary skills for this Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>priority</td>
<td>String(15)</td>
<td>Priority of the Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>referredByPerson</td>
<td>To-one association</td>
<td>Person who referred this Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>reportToPerson</td>
<td>To-one association</td>
<td>Person to whom this Lead reports.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>role</td>
<td>String (255)</td>
<td>Role of the Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>salary</td>
<td>BigDecimal</td>
<td>The desired salary of the Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>salaryLow</td>
<td>BigDecimal</td>
<td>The lowest yearly salary the Lead would accept.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>secondarySkills</td>
<td>To-many association</td>
<td>Skills that are listed as secondary skills for this Lead</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>skillSet</td>
<td>String</td>
<td>Text description of the Lead's skills.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>smsOptIn</td>
<td>Boolean</td>
<td>Indicates whether the Lead has granted permission to be sent messages via SMS.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>specialties</td>
<td>To-many association</td>
<td>IDs of the Specialties are associated with this Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>status</td>
<td>String (100)</td>
<td>Status of the lead; for example, New Lead, Active, Prospect, and so forth. Possible values can be configured using field maps.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="even">
<td>tearsheets</td>
<td>To-many association</td>
<td>IDs of Tearsheets associated with this Lead.</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>timeZoneOffsetEST</td>
<td>Integer</td>
<td>Indicates the number of hours by which the Lead's time zone differs from Eastern Standard Time. For example, Pacific Standard Time is -3, three hours earlier than Eastern Standard Time.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>type</td>
<td>String(30)</td>
<td>Describes the type of Lead. For example, Staffing, RFP/VOR, etc. Possible values can be configured using the field maps.</td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>willRelocate</td>
<td>Boolean</td>
<td>Indicates whether or not a Lead is willing to relocate.</td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>