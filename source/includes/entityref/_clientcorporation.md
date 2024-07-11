# ClientCorporation

Represents a company that is a client of a company; for example, a company with jobs to fill.

The ClientCorporation entity supports the massUpdate operations.

| **ClientCorporation field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| address | Address | ClientCorporation's main  address:<ul><li>address1</li><li>address2</li><li>city</li><li>state</li><li>zip</li><li>countryID: options:<ul><li>value: 1</li><li>value: 2</li></ul></ul>Use the following REST call to get the list of countryIDs and labels:<br>/meta/ClientContact?fields=address(countryID)  | X | |
| annualRevenue | BigDecimal | ClientCorporation's annual revenue in millions of U.S. dollars. | X | |
| billingAddress | AddressWithout-Country | Address that contains the address to which bills should be sent for this ClientCorporation. address1, address2, city, state, zip | | |
| billingContact | String (100) | Name of the person to whom bills should be sent. | | |
| billingFrequency | String (20) | Frequency with which bills should be sent to the ClientCorporation: for example, Weekly, Bi-Weekly, Semi-Monthly, Monthly. | | |
| billingPhone | String (20) | Phone number of the billing contact person. | | |
| businessSectorList | String (2147483647) | Comma-separated list of BusinessSectors in which the ClientCorporation operates. See field map data for a list of possible values. | | |
| childClientCorporations | To-many association | ClientCorporations that are children of this one. | | |
| clientCorporationCertifications | To-many association | **Not supported in this release.** ClientCorporationCertifications associated with this corporation. | | |
| clientContacts | To-many association | ClientContacts who work at this ClientCorporation. | | |
| companyDescription | String (2147483647) | Text description of the company. | | |
| companyURL | String (100) | Company's website URL. May use http:// but not required. | | |
| competitors | String (2147483647) | Company's major competitors. | | |
| culture | String (2147483647) | Text description of the corporate culture. | | |
| customDate1-3 | Timestamp | Configurable date fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customFloat1-3 | Double | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customInt1-3 | Integer | Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customObject1s to 35s | CustomObject | Fields to which custom objects can be assigned. For more information about custom objects, see the Bullhorn Resource Center and the following article on using the REST API with custom objects:<br>[http://bullhorn.github.io/Custom-Objects](http://bullhorn.github.io/Custom-Objects) | | |
| customText1-20 | String (100) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| customTextBlock1-5 | String (2147483647) | Configurable text fields that can be used to store custom data depending on the needs of a particular deployment. | | |
| dateAdded | Timestamp | Date on which this record was created in the Bullhorn system. | X | X |
| dateFounded | Timestamp | Date on which the ClientCorporation was founded. | | |
| dateLastModified | Timestamp | Date on which the ClientCorporation was last modified. | X | X |
| department | To-one association | Department in the ClientCorporation that has primary responsibility for this client (for example, a regional office). Default value is primary department of user who adds the ClientCorporation. | | |
| externalID | String (30) | External identifier for the record, used for migrations and back-office Integration. | | |
| exemptionStatus | ClientCorporationTaxExemptionStatusLookup | Tax exemption status for the ClientCorporation. Options are: 1=Exempt, 2=Non-Exempt, 3=Self-Pay | | |
| feeArrangement | Double | Fee, expressed as a percentage, that this ClientCorporation will pay for each Placement. | X | |
| funding | String (2147483647) | Current funding status of the ClientCorporation. | | |
| industryList | String (2147483647) | Comma-separated list of industries in which the company operates. See field map data for the list used by a particular company. | | |
| invoiceFormat | String (50) | Configurable field to be passed to a back-office system to indicate how to group invoices for this company (Per Placement, Per Billing Contact, and so forth.) | | |
| invoiceGroups | To-many association | **Not supported in this release.** Invoice groups associated with this ClientCorporation. | | |
| invoices | To-many association | **Not supported in this release.** Invoices associated with this corporation. | | |
| leads | To-many association | Leads associated with this ClientCorporation. | | |
| name | String (100) | Name of the company. | X | |
| notes | String (2147483647) | Free text field for entering any comments or notes about the company. | | |
| numEmployees | Integer | Total number of people employed by the company. | X | |
| numOffices | Integer | Total number of offices for the ClientCorporation. | X | |
| owners | To-many association | Owners of the ClientContacts for this ClientCorporation. | | X |
| ownerShip | String (30) | Status of the ClientCorporation's current ownership (for example, Public, Private). | | |
| parentClientCorporation | To-one association | ClientCorporation that is a parent of this one. | | |
| phone | String (20) | Main phone number for the ClientCorporation. | | |
| rateCards | To-many association | **Not supported in this release.** Rate cards associated with this ClientCorporation. | | |
| revenue | String (2147483647) | Estimated annual revenue in millions for the company. | | |
| requirements | To-many association | Certifications that Candidates should have. | | |
| status | String (30) | Status of the business relationship with this company; for example, Prospect, Active, and so forth. | X | |
| taxRate | Double | Tax rate for the company expressed in percentage: for example, 28%. Passed to a back-office system if applicable. | | |
| tickerSymbol | String (20) | Stock market ticker symbol for the company. | | |
| workWeekStart | Integer | Day of the week on which the work week starts for this company. 1=Sunday, 2=Monday, and so forth. | | |