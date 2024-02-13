# options

## <span class="tag">GET</span> /options

``` shell
curl https://rest{{swimlane#}.bullhornstaffing.com/rest-services/e999/options

# Example Response
{
  "data" : [ {
    "optionsType" : "BillRateCategory",
    "optionsUrl" : "https://rest.bullhorn.com/rest-services/e999/options/BillRateCategory"
  }, {
    "optionsType" : "BusinessSector",
    "optionsUrl" : "https://rest.bullhorn.com/rest-services/e999/options/BusinessSector"
  }, {
    "optionsType" : "BusinessSectorText",
    "optionsUrl" : "https://rest.bullhorn.com/rest-services/e999/options/BusinessSectorText"
  }, {
    "optionsType" : "Candidate",
    "optionsUrl" : "https://rest.bullhorn.com/rest-services/e999/options/Candidate"
  }, {
    "optionsType" : "CandidateText",
    "optionsUrl" : "https://rest.bullhorn.com/rest-services/e999/options/CandidateText"
  },
...
]
```

Gets the list of supported option types (value/label pairs) for list-based entities. 

### HTTP Request

`{corpToken}/options`

Parameter | Required | Description
------ | -------- | -----
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.


## <span class="tag">GET</span> /options/{optionsType}

``` shell
curl https://rest{{swimlane#}.bullhornstaffing.com/rest-services/e999/options/Country

# Example Response
{
{"data": [
      {
      "value": 2378,
      "label": "- None Specified -"
   },
      {
      "value": 2185,
      "label": "Afghanistan"
   },
...
          ]
    }
}
```

Gets the list of value/label pairs (options) for a list-based entity. If the option is of type text, a list of input value/label pairs is returned where the label is set to the input value.

### HTTP Request

`{corpToken}/options//{optionType}`

or:

`{corpToken}/options//{optionType}/value1,*}`

Parameter | Required | Description
------ | -------- | -----
filter | no | Filter on the label, prefix with an asterisk (*)  to find word begins. For example, filter=foo returns all options where label starts with "foo", such as "Fool". filter=*foo returns all options where any word in the label starts with "foo", such as "A Fool". Some labels are composed of two or more parts. For example, a name is composed of firstname and lastname separated by a space. In these cases, filtering is based on each part of the label. For example, filter=Ba, will find any part of a label that starts with Ba. Therefore, the results could include "Bailey Hutchinson" as well as "Sam Bailey".
type-specific parameters | no | Some option types accept additional parameters. For example, State has an optional "country" parameter. 
count | no | Limit on the number of entities to return. If the set of matched results is larger than count, caps the returned results at size count. The default count is 20. The maximum count is 300; if you specify a count greater than 300, a message at the end of the response indicates you have specified too many items.
start | no | From the set of matched results, return item numbers start through (start + count).
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

### Option Types List

| Option type | Description |
|------------------|------------------|
| BillRateCategory | Same as Category where type = 'Bill Rate' |
| BusinessSector / BusinessSectorText | BusinessSector id and name / name and name |
| Candidate / CandidateText | Candidate id and firstName + lastName / firstName + lastName, and firstName + lastName |
| Category / CategoryText | Category id and name / name and name; Extra params: optional "type" to restrict categories of type |
| Certification / CertificationText | Certification id and name / name and name |
| Client / ClientText (alias ClientContact / ClientContactText) | ClientContact id and firstName + lastName / firstName + lastName and firstName + lastName |
| ClientCorporation / ClientCorporationText | ClientCorporation id and name / name and name |
| CorporateUser / CorporateUserText | CorporateUser id and firstName + lastName / firstName + lastName and firstName + lastName |
| CorporationDepartment | CorporationDepartment id and name |
| Country | Country id and name |
| HousingAmenity | HousingComplexAmenity id and amenityName / amenityName and amenityName |
| HousingComplex /HousingComplexText | HousingComplex id and name / name and name |
| HousingComplexUnit /HousingComplexUnitText | HousingComplexUnit id and name / name and name |
| JobOrder / JobOrderText | JobOrder id and title / title and title |
| Lead | Lead id and firstName + lastName |
| Opportunity | Opportunity id and title |
| Placement | Placement id and candidate.firstName candidate.lastName - jobOrder.title |
| Person / PersonText | Person id and firstName + lastName / firstName + lastName and firstName + lastName |
| Shift / ShiftText | Shift id and name / name and name |
| Skill / SkillText | Skill id and name / name, and name |  
| Specialty / SpecialtyText | Specialty id and name / name, and name |
| State / StateText | State id and name / name and name; extra parameters: optional "country" to restrict to states within that country, two-character ISO country code. |
| NorthAmericaState | State id and name (hard-coded) |
| WorkersComp | WorkersCompensation id and name / name and name |

