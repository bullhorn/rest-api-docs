# General GET request options

You can use the following API commands to retrieve data:

-   /entity
-   /query
-   /meta
-   /search

These calls share some common parameters and behavior.

## Entity fields

Each entity is composed of a distinct set of fields, or properties. When retrieving entities, you specify which fields to return in a query parameter named fields. The following types of values are supported in the fields parameter:

#### All fields

fields=\*

**Note:** Other than for /meta/{entityType}, the fields=\* syntax is now deprecated because of negative performance impact. Calls using this syntax will be blocked.

Use the /meta/{entityType} call with fields=\* to see the full entity model, including association fields.

#### Entity ids

All entities have a field named id, which is the primary key of the entity:

fields=id,owner(id),categories(id)

When selecting to-one and to-many association fields, id is automatically included if no subfield is specified:

fields=owner,categories

Is the same as:

fields=owner(id),categories(id)

#### Comma-separated list of fields

fields=id,name,address,owner,categories

#### Nested, to select sub-fields of composite, to-one and to-many associations( )

fields=id,name,address(city,zip),owner(corporation(name)),categories(name)

**Note:** For nested to-many associations for which the user does not have read entitlements, only data for predefined fields is returned. The other fields are returned with a value of “null”. The following entity fields are predefined:

-   Candidate: id, firstName, lastName

-   Contact: id, firstName, lastName

-   Job: id, Job Title

-   ClientCorporation: id, Name

-   Placement: id

#### Number of to-many entities to return \[count\]

fields=categories\[3\],jobSubmissions\[5\](dateAdded,jobOrder(name))

**Note:** The default count of to-many entities is 5. The maximum count is 10; if you specify a count greater than 15, a message at the end of the response indicates you have specified too many items.

#### Filter to-many entities with a sub-where clause

Use the following syntax to filter the to-many entities that are returned in a response. All three parts of the syntax are optional. The where-filter is delimited by curly braces.

fields=*fieldName*\[count\](sub-fields**){where-filter}**

Examples:

search/JobOrder?fields=id,businessSectors\[3\](name,id){name='Insurance'}

search/Candidate?fields=id,lastName,primarySkills(name,id){name IN (Java, 'SAP')}

#### To-many fields can only appear at the top level with no nesting

Bad: fields=categories(children)

Bad: fields=owner(categories)

**Note:** The only exception to this is PlacementRateCard's placementRateCardLineGroup and placementRateCardLine & JobOrderRateCard's jobOrderRateCardLineGroup and jobOrderRateCardLine fields.

Acceptable: fields=placementRateCardLineGroup(placementRateCardLine(*))

## Entity metadata

You can include metadata, data that describes the structure of returned entity data, in responses that the REST API returns.

The following two tables describe the entity and entity property metadata types.

\* Fields that are returned only if meta=full.

| Entity metadata | Description                                                                        |
|----------------------|-----------------------------------------------------------------------------------------|
| entity               | Entity name; for example, Candidate, JobOrder.                                          |
| label                | Entity display label from the private label attribute "EntityTitleXxx"; may be missing. |
| fields               | Array of property metadata (see table below).                                           |


<table>
<thead>
<tr class="header">
<th><h4 id="entity-property-metadata">Entity property metadata</h4></th>
<th><h4 id="description-1">Description</h4></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>name</td>
<td>Property name; for example, firstName.</td>
</tr>
<tr class="even">
<td>Label</td>
<td>Property display label from fieldmap; may be missing.</td>
</tr>
<tr class="odd">
<td>type</td>
<td>Property type, one of ID, SCALAR, COMPOSITE, TO_ONE, or TO_MANY.</td>
</tr>
<tr class="even">
<td>dataType</td>
<td>Property data type: Integer, BigDecimal, Double, String, Boolean, Timestamp, byte[], Address, Address1, AddressWithoutCountry (these are composite types), and LoginRestrictions.</td>
</tr>
<tr class="odd">
<td>maxLength</td>
<td>Only present when dataType=&quot;String&quot;. The maximum authorized length for this String field.</td>
</tr>
<tr class="even">
<td>dataSpecialization</td>
<td>Finer definition of dataType. For example, dateType=Timestamp and dataSpecialization=DATE one of NUMERIC, INTEGER, FLOAT, MONEY, PERCENTAGE, PHONE, SSN, HTML, DATE, TIME, DATETIME, COLOR, SYSTEM, or VIRTUAL; may be missing.</td>
</tr>
<tr class="odd">
<td>* optional</td>
<td>Is the property value optional (specified by Hibernate, typically means database nullability); also see <strong>required</strong>.</td>
</tr>
<tr class="even">
<td>* required</td>
<td>Is the property value required (specified by fieldmap); also see <strong>optional</strong>.</td>
</tr>
<tr class="odd">
<td>* readonly</td>
<td>Is the property hidden (specified by fieldmap).</td>
</tr>
<tr class="even">
<td>* multiValue</td>
<td>Is the property multi-valued (specified by fieldmap); dataType must be String.</td>
</tr>
<tr class="odd">
<td>* inputType</td>
<td>Suggested input type: CHECKBOX, RADIO, TEXTAREA, or SELECT; may be missing.</td>
</tr>
<tr class="even">
<td>* optionsType</td>
<td>For inputType SELECT only; for example, Country. may be missing.</td>
</tr>
<tr class="odd">
<td>* optionsUrl</td>
<td>If optionsType is present, where to get the list of options (displays and values).</td>
</tr>
<tr class="even">
<td>options</td>
<td>The hard-coded options from fieldMap in an array of value/label pairs; may be missing.</td>
</tr>
<tr class="odd">
<td>* defaultValue</td>
<td>Value type depends on dataType and dataSpecialization: may be missing.<br />
If the defaultValue is not translatable, For example, cannot parse string to a date; it is ignored. If multiValue, returns as array.</td>
</tr>
<tr class="even">
<td>fields</td>
<td>Array of sub-fields property meta for COMPOSITE type.</td>
</tr>
<tr class="odd">
<td>associatedEntity</td>
<td>Entity metadata for TO_ONE and TO_MANY type.</td>
</tr>
</tbody>
</table>

### Bullhorn fieldmap edit types and REST metadata

The following table lists each Bullhorn fieldmap edit type and the corresponding dataSpecialization, inputType, and optionsType metadata values for the REST API.

<table>
<thead>
<tr class="header">
<th><h4 id="edit-type">Edit type</h4></th>
<th><h4 id="dataspecialization">DataSpecialization</h4></th>
<th><h4 id="inputtype">InputType</h4></th>
<th><h4 id="optionstype">OptionsType</h4></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Color</td>
<td>COLOR</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>Date</td>
<td>DATE</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>Time</td>
<td>TIME</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>Date/Time</td>
<td>DATETIME</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>Float</td>
<td>FLOAT</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>Integer</td>
<td>INTEGER</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>Money</td>
<td>MONEY</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>Numeric</td>
<td>NUMERIC</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>Percentage</td>
<td>PERCENTAGE</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>Phone Number</td>
<td>PHONE</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>Text SSN</td>
<td>SSN</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>DHTMLEditor</td>
<td>HTML</td>
<td></td>
<td> </td>
</tr>
<tr class="odd">
<td>DHTMLEditor - No Toolbar</td>
<td>HTML</td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>Check Box</td>
<td> </td>
<td>CHECKBOX</td>
<td> </td>
</tr>
<tr class="odd">
<td>Radio</td>
<td> </td>
<td>RADIO</td>
<td> </td>
</tr>
<tr class="even">
<td>Select</td>
<td> </td>
<td>SELECT</td>
<td> </td>
</tr>
<tr class="odd">
<td>Text</td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>Text Block</td>
<td> </td>
<td>TEXTAREA</td>
<td> </td>
</tr>
<tr class="odd">
<td>Text Block Large</td>
<td> </td>
<td>TEXTAREA</td>
<td> </td>
</tr>
<tr class="even">
<td>Drop Down</td>
<td> </td>
<td>SELECT</td>
<td> </td>
</tr>
<tr class="odd">
<td>Mini Picker</td>
<td> </td>
<td>SELECT</td>
<td> </td>
</tr>
<tr class="even">
<td>Mini Picker - Text Block</td>
<td> </td>
<td>SELECT</td>
<td> </td>
</tr>
<tr class="odd">
<td>Xxx - Drop Down</td>
<td> </td>
<td>SELECT</td>
<td>Country<br />
State</td>
</tr>
<tr class="even">
<td>Xxx - Mini Picker</td>
<td> </td>
<td>SELECT</td>
<td>Country<br />
State</td>
</tr>
<tr class="odd">
<td><p>Picker:[OptionsType]</p>
<p>Stores data as an INT value unless it is a multi-picker, which stores a comma-separated list of Integers in a string field.</p></td>
<td> </td>
<td>SELECT</td>
<td>BillRateCategory<br />
BusinessSector<br />
Candidate<br />
Category<br />
Certification<br />
Client<br />
ClientCorporation<br />
HousingAmenity<br />
HousingComplex<br />
HousingComplexUnit<br />
CorporateUser (Internal)<br />
JobOrder (Job Posting)<br />
Person (People)<br />
Shift<br />
Skill (Skills)<br />
Specialty<br />
WorkersComp</td>
</tr>
<tr class="even">
<td><p>Picker:Text:[OptionsType]</p>
<p>Stores data as a text value unless it is a multi-picker, which stores a comma-separated list of string values.</p></td>
<td> </td>
<td>SELECT</td>
<td>BusinessSectorText<br />
CandidateText<br />
CategoryText<br />
CertificationText<br />
ClientText<br />
ClientCorporationText<br />
HousingComplexText<br />
HousingComplexUnitText<br />
CorporateUserText (Internal)<br />
JobOrderText (Job Posting)<br />
PersonText (People)<br />
ShiftText<br />
SkillText (Skills)<br />
SpecialtyText<br />
StateText</td>
</tr>
<tr class="odd">
<td>Custom Component</td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>Custom External Control</td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>Section Header</td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr class="even">
<td>System</td>
<td>SYSTEM</td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>Virtual</td>
<td>VIRTUAL</td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>
