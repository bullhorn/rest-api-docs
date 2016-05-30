# Meta

## <span class="tag">GET</span> /meta

``` shell
curl https://rest.bullhorn.com/rest-services/e999/meta

# Example Response
[
    {
        "entity": "Appointment",
        "metaUrl": "https://rest.bullhorn.com/rest-services/e999/meta/Appointment?fields=*"
    },
    {
        "entity": "BusinessSector",
        "metaUrl": "https://rest.bullhorn.com/rest-services/e999/meta/BusinessSector?fields=*"
    },
    {
        "entity": "Candidate",
        "metaUrl": "https://rest.bullhorn.com/rest-services/e999/meta/Candidate?fields=*"
    },
    {
        "entity": "Category",
        "metaUrl": "https://rest.bullhorn.com/rest-services/e999/meta/Category?fields=*"
    },
    {
        "entity": "ClientContact",
        "metaUrl": "https://rest.bullhorn.com/rest-services/e999/meta/ClientContact?fields=*"
    },
    {
        "entity": "ClientCorporation",
        "metaUrl": "https://rest.bullhorn.com/rest-services/e999/meta/ClientCorporation?fields=*"
    },
    ...
]
```

Calling /meta with no entity name will return the list of available entities and their respective base URLs.  

Read-only system fields ( fields with names prefixed with _ ) are not represented in entity metadata ever, even with * calls.

##  <span class="tag">GET</span> /meta/{Entity}

``` shell
curl https://rest.bullhorn.com/e999/meta/Candidate?fields=*
# Example Response
{
  "entity" : "Candidate",
  "entityMetaUrl" : "https://rest.bullhorn.com/e999/meta/Candidate?fields=*",
  "label" : "Candidate",
  "fields" : [ {
    "name" : "id",
    "type" : "ID",
    "dataType" : "Integer"
  }, {
    ...
  }]
}
```

Returns entity and property metadata for the specified entity type.

### HTTP Request

`GET [corporation-token]/meta/[entity-name]/?fields=[field-list]&meta=[ basic or full ]`

Params | Required | Description
------ | -------- | -----
fields | yes | Comma-separated list of field names.
layout | yes | Name of a configured layout. A field list, layout name or both may be specified.
meta | no | off, basic, or full. Default is off (no meta). Returns metadata that describes the structure of returned entity data. For more information, see
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or a special HTTP header. See for details on how to provide it.

<aside class="warning">Returns an HTTP 404 error if the requested entity cannot be found.</aside>

### Property Metadata

**name**

Property name; for example, firstName.

**label**

Property display label from fieldmap; may be missing.

**type**

Property type, one of ID, SCALAR, COMPOSITE, TO_ONE, or TO_MANY.

**dataType**

Property data type: Integer, BigDecimal, Double, String, Boolean, Timestamp, byte[], Address, Address1, AddressWithoutCountry (these are composite types), and LoginRestrictions (!! may change).

**maxLength**

Only present when dataType="String". The maximum authorized length for this String field.

**dataSpecialization**

Finer definition of dataType, e.g. dateType=Timestamp and dataSpecialization=DATE one of NUMERIC, INTEGER, FLOAT, MONEY, PERCENTAGE, PHONE, SSN, HTML, DATE, TIME, DATETIME, COLOR, SYSTEM, or VIRTUAL: may be absent. See .

**optional**

Is the property value optional (specified by Hibernate, typically means database nullability); also see **required**.

**required**

Is the property value required (specified by fieldmap); also see **optional**.

**readonly**

Is the property hidden (specified by fieldmap).

**multiValue**

Is the property multi-valued (specified by fieldmap); dataType must be String.

**inputType**

Suggested input type: CHECKBOX, RADIO, TEXTAREA, or SELECT; may be missing. See .

**optionsType**

For inputType SELECT only; for example, Country. may be missing. See .

**optionsUrl**

If optionsType is present, where to get the list of options (displays and values).

**options**

The hard-coded options from fieldMap in an array of value/label pairs; may be missing.

**defaultValue**

Value type depends on dataType and dataSpecialization: may be missing.   
If the defaultValue is not translatable, For example, cannot parse string to a date; it is ignored. If multiValue, returns as array.

**fields**

Array of sub-fields property meta for COMPOSITE type.

**associatedEntity**

Entity metadata for TO_ONE and TO_MANY type.
