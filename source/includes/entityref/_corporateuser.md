# CorporateUser

Represents an Internal user at your organization. CorporateUser is read-only. 

<table>
<thead>
<tr class="header">
<th><p><strong>CorporateUser</strong></p>
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
<td>customDate1 to 3</td>
<td>Timestamp</td>
<td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>customFloat1 to 3</td>
<td>Double</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>customInt1 to 3</td>
<td>Integer</td>
<td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>customText1 to 20</td>
<td>String</td>
<td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>dateLastComment</td>
<td>Timestamp</td>
<td>Date on which CorporateUser’s last comment was made.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>departments</td>
<td>To-many association</td>
<td>Ids of departments to which the CorporateUser belongs.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>address</td>
<td>Address</td>
<td><p>CorporateUser’s main address:</p>
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
<p>/meta/CorporateUser?<br />
fields=address(countryID)</p></td>
<td>X</td>
<td> </td>
</tr>
<tr class="odd">
<td>email</td>
<td>String (100)</td>
<td>Primary email address.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>email2</td>
<td>String (100)</td>
<td>Additional email address 2.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>email3</td>
<td>String (100)</td>
<td>Additional email address 3.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>emailNotify</td>
<td>Boolean</td>
<td>Indicates whether the user has chosen to be notified via pop-up in the Bullhorn application when a new email message arrives.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>emailSignature</td>
<td>String</td>
<td>Contents of the user's email signature.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>enabled</td>
<td>Boolean</td>
<td>Indicates whether the user may log in to the Bullhorn application.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>externalEmail</td>
<td>String</td>
<td>User’s external (non-Bullhorn) email address. Used for forwarding</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>firstName</td>
<td>String</td>
<td>First name of the CorporateUser.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>inboundEmailEnabled</td>
<td>Boolean</td>
<td>Indicates whether the user can receive email through the Bullhorn application.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>isDayLightSavingsTime</td>
<td>Boolean</td>
<td>Indicates whether it is daylight savings time.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>isDeleted</td>
<td>Boolean</td>
<td>Indicates whether CorporateUser is deleted.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>isLockedOut</td>
<td>Boolean</td>
<td>Indicates whether the CorporateUser is locked out.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>isOutboundFaxEnabled</td>
<td>Boolean</td>
<td>Indicates whether the user has permission to send faxes.</td>
<td> </td>
<td>X</td>
</tr>
<tr class="even">
<td>jobAssignments</td>
<td>To-many association</td>
<td><p>JobOrders that have been assigned to this CorporateUser. Included JobOrder fields are:</p>
<p>id</p>
<p>title</p></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>loginRestrictions</td>
<td>LoginRestrictions</td>
<td>A group of available login restrictions, including time, date, and IP address.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>massMailOptOut</td>
<td>Boolean</td>
<td>Indicates whether the CorporateUser opted out of mass mailings.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>middleName</td>
<td>String (50)</td>
<td>Middle name of the CorporateUser.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>mobile</td>
<td>String (20)</td>
<td>Mobile phone number of the CorporateUser.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>name</td>
<td>String (100)</td>
<td>Name of the CorporateUser.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>namePrefix</td>
<td>String (5)</td>
<td>Name prefix of the CorporateUser.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>nameSuffix</td>
<td>String (5)</td>
<td>Name suffix of the CorporateUser.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>nickName</td>
<td>String (50)</td>
<td>Nickname of the CorporateUser.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>occupation</td>
<td>String (50)</td>
<td>Occupation of the CorporateUser.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>pager</td>
<td>String (20)</td>
<td>Pager number of the CorporateUser.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>password</td>
<td>String</td>
<td>CorporateUser’s password for logging in to Bullhorn.</td>
<td>X</td>
<td></td>
</tr>
<tr class="even">
<td>phone to phone3</td>
<td>String (20)</td>
<td>Phone number of the CorporateUser.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>smsOptIn</td>
<td>Boolean</td>
<td>Indicates whether the CorporateUser has granted permission to be sent messages via SMS.</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>taskAssignments</td>
<td>Task</td>
<td><p>Not supported in this release.</p>
<p>Tasks that have been assigned to this CorporateUser, including those owned by the user.</p></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>timeZoneOffsetEST</td>
<td>Integer</td>
<td>Indicates the number of hours by which the CorporateUser’s time zone differs from Eastern Standard Time. For example, Pacific Standard Time is -3, three hours earlier than Eastern.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>username</td>
<td>String (100)</td>
<td>CorporateUser’s username for logging in to Bullhorn.</td>
<td>X</td>
<td></td>
</tr>
</tbody>
</table>