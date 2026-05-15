# Pay Bill Entity Migration Progress

## Summary

**Migration Status**: 37 of 104 Pay Bill entities completed (36%)

**Date**: 2025-10-17 (Updated: Session 3)

**Objective**: Migrate all 104 Pay Bill entities from Slate markdown documentation to OpenAPI 3.0.3 specification with comprehensive field documentation.

---

## Completed Entities (37)

### Core Workflow Entities (4)
✅ **EarnCodeEntity** - 40+ fields including GL segments, custom fields, audit fields
✅ **TransactionTypeEntity** - Transaction categorization (New, Adjustment, Reversal, Unbillable)
✅ **TransactionStatusEntity** - Workflow states (Pending, Submitted, Payment Approved, Approved)
✅ **TransactionOriginEntity** - Source tracking (Manual, BillingSync, System)

**Location**: `openapi/components/schemas/`

### Customer Required Field Entities (3)
✅ **CustomerRequiredFieldMetaEntity** - 20+ fields for client-specific custom fields
✅ **CustomerRequiredFieldOptionEntity** - Dropdown options for picker-type fields
✅ **CustomerRequiredFieldValueTypeLookupEntity** - Value types (Text, Custom Picker, Purchase Order)

**Location**: `openapi/components/schemas/`

### Invoice Term Entity (1)
✅ **InvoiceTermEntity** - 44 comprehensive fields including:
- Billing configuration (invoiceOn, invoiceGroupBy)
- Payment terms and billing frequency
- Approval requirements
- Discount and surcharge rates
- Custom fields and audit trails

**Location**: `openapi/components/schemas/InvoiceTermEntity.yaml`

### Financial Adjustment Entities (2)
✅ **DiscountRateEntity** - Percentage/fixed-amount reductions with effective dating
✅ **SurchargeRateEntity** - Additional charges with effective dating

**Features**: Both are effective-dated entities with version management

**Location**: `openapi/components/schemas/`

### Calendar & Period Entities (2)
✅ **CalendarEntity** - Billing/payroll cycles with recurring patterns
✅ **AccountingPeriodEntity** - Financial periods for GL posting

**Location**: `openapi/components/schemas/`

### General Ledger Entities (3)
✅ **GeneralLedgerAccountEntity** - GL accounts for double-entry accounting
✅ **GeneralLedgerSegmentEntity** - Chart of Accounts dimensions (Class, Division, Department, Location, Country)
✅ **GeneralLedgerServiceCodeEntity** - Service/product codes for GL categorization

**Location**: `openapi/components/schemas/`

### Rate Card Entities (3)
✅ **PlacementRateCardEntity** - Master record for rate agreements on placements
✅ **JobOrderRateCardEntity** - Rate details template for job orders
✅ **ClientCorporationRateAgreementCardEntity** - Master agreement record with clients

**Features**: All are effective-dated flattened entities with version management

**Location**: `openapi/components/schemas/`

### Sales Tax Entities (2)
✅ **SalesTaxRateEntity** - 26 fields including:
- Rate configuration (rate, amount, taxType)
- Jurisdiction details (jurisdictionName, jurisdictionType)
- Version management (effectiveDate, effectiveEndDate, versionID)
- GL integration (5 GL segments, GL account, GL service code)

✅ **SalesTaxGroupEntity** - 18 fields including:
- Geographic matching (zipcode, zipPlus4 ranges, stateID)
- Jurisdiction rates (state, county, city, district, other)
- Calculated total rate
- Tax on margin configuration

**Location**: `openapi/components/schemas/`

### Batch Processing Entities (2)
✅ **BillingSyncBatchEntity** - 11 fields including:
- Batch tracking (externalID, timeOfExternalEvent, periodEndDate)
- Status tracking (batchStatus lookup)
- Transaction origin
- Collections (billMasters, payMasters, attachments)
- Owner and audit fields

✅ **BillMasterTransactionDistributionBatchEntity** - 7 fields including:
- Accounting date for revenue recognition
- Batch status tracking (Pending, Processing, Completed, Failed, Cancelled)
- Owner reference
- Transaction and charge collections
- Audit timestamps

**Features**: Critical for batch operations, immutability tracking, and revenue recognition workflows

**Location**: `openapi/components/schemas/`

### Transaction Detail Entities (3)
✅ **BillMasterTransactionDiscountDetailEntity** - 9 fields including:
- Denormalized discount rate snapshot
- Calculation priority and display flags
- Tax calculation treatment (ignoreForSalesTaxCalculations)
- GL export tracking (sentToAccountsReceivable)
- Association back to discount rates

✅ **BillMasterTransactionSurchargeDetailEntity** - 7 fields including:
- Denormalized surcharge rate snapshot
- Rate/amount configuration
- Surcharge type (fixed amount vs. percentage)
- Association back to surcharge rates

✅ **BillMasterTransactionSalesTaxDetailEntity** - 5 fields including:
- Denormalized sales tax rate snapshot
- Jurisdiction name and tax rate
- Multi-jurisdiction support (state, county, city, district)
- Association back to all sales tax rates

**Features**: Denormalization pattern for immutability - preserves exact configuration at invoicing time even if source rates change

**Location**: `openapi/components/schemas/`

### Additional Batch Processing Entities (1)
✅ **UnbilledRevenueDistributionBatchEntity** - 8 fields including:
- Batch status tracking (Pending, Processing, Completed, Failed, Cancelled)
- BillableCharge and UnbilledRevenueDistribution collections
- CanvasReport integration for reporting
- Owner and audit timestamps

**Features**: Tracks GL distribution record generation for revenue recognition before invoicing

**Location**: `openapi/components/schemas/`

### Transaction-to-Rate Association Entities (3)
✅ **BillMasterTransactionDiscountRateEntity** - 11 fields including:
- Association between transaction and discount rate
- Base amount and calculated discount amount
- Adjustment sequence number for deterministic ordering
- Discount rate version tracking (effectiveDate, versionID)
- Reversal support for corrections

✅ **BillMasterTransactionSurchargeRateEntity** - 11 fields including:
- Association between transaction and surcharge rate
- Base amount and calculated surcharge amount
- Adjustment sequence number
- Surcharge rate version tracking
- Reversal support

✅ **BillMasterTransactionSalesTaxRateEntity** - 12 fields including:
- Association between transaction and sales tax rate
- Base amount (taxable amount) and calculated tax amount
- Adjustment sequence number
- Sales tax rate version tracking with jurisdiction
- Taxable margin for margin-based tax calculation
- Reversal support

**Features**: Junction entities linking transactions to rates with calculated amounts and version tracking

**Location**: `openapi/components/schemas/`

### Specialized Sales Tax Rate Entities (5)
✅ **StateSalesTaxRateEntity** - Extends SalesTaxRate filtered by jurisdictionType = "State"
✅ **CountySalesTaxRateEntity** - Extends SalesTaxRate filtered by jurisdictionType = "County"
✅ **CitySalesTaxRateEntity** - Extends SalesTaxRate filtered by jurisdictionType = "City"
✅ **DistrictSalesTaxRateEntity** - Extends SalesTaxRate filtered by jurisdictionType = "District"
✅ **OtherSalesTaxRateEntity** - Extends SalesTaxRate filtered by jurisdictionType = "Other"

**Features**: Specialized views of SalesTaxRate for jurisdiction-specific querying and configuration

**Location**: `openapi/components/schemas/`

### Rate Card Line Entities (2)
✅ **PlacementRateCardLineGroupEntity** - 8 fields including:
- EarnCodeGroup association (defines which earn codes are included)
- Base vs. custom group indicator (isBase flag)
- Parent PlacementRateCard and version references
- Collection of PlacementRateCardLines
- External ID for integration

✅ **PlacementRateCardLineEntity** - 15 fields including:
- Bill rate, pay rate, and markup calculations
- Bill and pay multipliers (for OT, DT premium rates)
- Markup percent and markup value (margin calculations)
- EarnCode association (REG, OT, DT, etc.)
- Alias for client-facing display
- Currency units (bill and pay)
- Taxable margin for margin-based tax calculation
- Auto-calculation support for interdependent rate fields

**Features**: Complete rate card structure with automatic markup calculations and premium rate multipliers

**Location**: `openapi/components/schemas/`

---

## Enhanced Documentation (2)

### BillableCharge Entities Tag
✅ **Comprehensive Field Documentation** - 51 fields organized into 15 categories:
- Core Identification (4)
- Workflow & Status (4)
- Financial (3)
- Associations - Primary (3)
- Associations - Context (7)
- Entry Type & Time Tracking (4)
- Billing Configuration (2)
- Transaction Status (2)
- General Ledger Integration (7)
- Accounting Periods (3)
- Transaction Collections (5)
- Invoice & Distribution (2)
- Calendar & Cycles (2)
- Integration & Sync (1)
- Audit (3)

**Location**: `openapi/openapi.yaml` lines 504-602

### Transaction Entities Tag - BillMaster
✅ **Comprehensive Field Documentation** - 22 fields organized into 10 categories:
- Core Identification (2)
- Associations - Parent (1)
- Associations - Configuration (4)
- Billing Calendar (1)
- Sync & Import (2)
- Transaction Collections (1)
- Customer Required Fields (1)
- Financial Adjustments (2)
- Flags (1)
- Status (2)
- Audit (4)

**Location**: `openapi/openapi.yaml` lines 680-757

### BillableCharge Entity Endpoints
✅ **GET /entity/BillableCharge/{id}** - Retrieve single charge with field selection
✅ **GET /query/BillableCharge** - Search charges with Lucene-style queries

**Location**: `openapi/paths/entity/BillableCharge.yaml`

---

## Remaining Entities (67)

### High Priority Entities (4)

#### Core Transaction Entities
✅ **BillMasterTransaction** - Individual transaction audit trail (30+ fields) - COMPLETED
✅ **BillMasterTransactionDiscountDetail** - Applied discount details - COMPLETED
✅ **BillMasterTransactionSurchargeDetail** - Applied surcharge details - COMPLETED
✅ **BillMasterTransactionSalesTaxDetail** - Applied tax details - COMPLETED
✅ **BillMasterTransactionDiscountRate** - Transaction-to-discount association - COMPLETED
✅ **BillMasterTransactionSurchargeRate** - Transaction-to-surcharge association - COMPLETED
✅ **BillMasterTransactionSalesTaxRate** - Transaction-to-tax association - COMPLETED

#### Batch & Sync Entities
✅ **BillingSyncBatch** - Time & expense import batch tracking - COMPLETED
- [ ] **BillMasterSyncBatch** - BillMaster sync batch tracking
✅ **UnbilledRevenueDistributionBatch** - GL distribution batch tracking - COMPLETED
- [ ] **InvoiceStatementBatch** - Invoice generation batch tracking (no Slate docs found)
✅ **BillMasterTransactionDistributionBatch** - Revenue distribution batches - COMPLETED

#### Location & Profile Entities
- [ ] **Location** - Work location for tax calculation (no Slate docs found)
- [ ] **LocationVersion** - Effective-dated location configurations (no Slate docs found)
- [ ] **BillingProfile** - Billing configuration profiles (no Slate docs found)
- [ ] **BillingProfileVersion** - Effective-dated billing configurations (no Slate docs found)

#### Payment & Invoice Entities
- [ ] **InvoicePayment** - Payment records applied to invoices (no Slate docs found)
✅ **InvoiceStatementLineItem** - Invoice line items grouping transactions - COMPLETED

### Specialized Tax Entities (5)
✅ **CitySalesTaxRate** - City-level tax rates - COMPLETED
✅ **CountySalesTaxRate** - County-level tax rates - COMPLETED
✅ **DistrictSalesTaxRate** - Special district tax rates - COMPLETED
✅ **StateSalesTaxRate** - State-level tax rates - COMPLETED
✅ **OtherSalesTaxRate** - Miscellaneous jurisdiction tax rates - COMPLETED
- [ ] InvoiceStatementLineItemSalesTaxRate
- [ ] InvoiceStatementSalesTaxRate
- [ ] SalesTaxRateVersion
- [ ] TaxJurisdictionTypeLookup

### Rate Card Supporting Entities (4)
✅ **PlacementRateCardLineGroup** - Placement rate line groups - COMPLETED
✅ **PlacementRateCardLine** - Placement rate lines with bill/pay rates - COMPLETED
- [ ] JobOrderRateCardLineGroup
- [ ] JobOrderRateCardLine
- [ ] ClientCorporationRateAgreementCardLineGroup
- [ ] ClientCorporationRateAgreementCardLine

### Invoice Supporting Entities (6)
- [ ] InvoiceStatementDiscount
- [ ] InvoiceStatementSurcharge
- [ ] InvoiceStatementTax
- [ ] InvoiceStatementExportBatch
- [ ] InvoiceStatementEmailBatch
- [ ] InvoiceStatementTemplate

### Lookup Entities (15)
- [ ] BillableChargeStatusLookup
- [ ] ChargeTypeLookup
- [ ] DiscountTypeLookup
- [ ] EntryTypeLookup
- [ ] GeneralLedgerExportStatusLookup
- [ ] InvoiceStatementDeliveryStatusLookup
- [ ] InvoiceStatementPaidStatusLookup
- [ ] InvoiceStatementStatusLookup
- [ ] SalesTaxRateSourceLookup
- [ ] SalesTaxRateTypeLookup
- [ ] TaxStatusLookup
- [ ] TaxTypeLookup
- [ ] TransactionStatusLookup (already created but needs integration)
- [ ] TransactionTypeLookup (already created but needs integration)
- [ ] TransactionOriginLookup (already created but needs integration)

### Billing Cycle & Calendar Entities (4)
- [ ] PayBillCycle
- [ ] CalendarInstance
- [ ] BillingCalendarInstance
- [ ] CalendarFrequencyLookup

### Summary & Aggregate Entities (8)
- [ ] BillableChargeBillableTransaction - Links charges to transactions
- [ ] BillableChargeSummaryTransaction - Pre-aggregated transaction views
- [ ] BillableChargeUnbillableTransaction - Unbillable transaction tracking
- [ ] InvoiceStatementLineItemVersion - Line item history
- [ ] PlacementTimeAndExpenseBranch - Branch-level tracking
- [ ] BillMasterCustomerRequiredField - CRF values on BillMaster
- [ ] LocationVersionTaxGroup - Location-to-tax-group mapping
- [ ] GeneralLedgerSegmentType - GL segment type definitions

### Miscellaneous Entities (20)
- [ ] ApprovalTaskComponent
- [ ] BillableChargeStatusDescription
- [ ] BillingCalendar
- [ ] BillingClientContact
- [ ] BillingClientCorporation
- [ ] BillingCorporateUser
- [ ] BillingSyncBatchFileAttachment
- [ ] CertificationRequirement
- [ ] ClientCorporationRateAgreementCardVersion
- [ ] DistributionConfiguration
- [ ] ExternalSalesTaxRate
- [ ] GeneralLedgerExportStatusDescription
- [ ] InvoiceRemittanceInstruction
- [ ] PayBillCycleVersion
- [ ] PaymentTerms
- [ ] PlacementRateCardVersion
- [ ] SalesTaxRateGroup
- [ ] TimesheetEntryApproval
- [ ] UnbilledRevenueCharge
- [ ] UnbilledRevenueGeneralLedgerExportStatus

---

## Key Accomplishments

### 1. Comprehensive Field Documentation
Every migrated entity includes:
- Full field list with types and descriptions
- Required/Read-only flags
- Default values where applicable
- Behavioral characteristics (calculated fields, immutability rules)
- Usage examples for to-many associations
- Cross-references to related entities and workflows
- Examples with realistic data

### 2. Tag Description Enhancement
Updated OpenAPI tag descriptions from brief "Key Fields" summaries to comprehensive field documentation:
- **BillableCharge**: 51 fields → full documentation with categories
- **BillMaster**: 22 fields → full documentation with categories

This ensures users see complete entity documentation on the overview pages, not just in endpoint schemas.

### 3. Effective-Dated Entity Pattern
Established consistent pattern for versioned entities:
- effectiveDate: When version becomes active
- effectiveEndDate: When version expires (auto-set)
- versionID: Unique version identifier
- versions: Collection of all versions across time
- rootExternalID: External ID consistent across versions
- rootMigrateGUID: Migration tracking GUID

### 4. Association Documentation Pattern
Standardized documentation for relationships:
- **To-one associations**: Entity reference with default fields listed
- **To-many associations**: Collection with total count, usage examples
- **Flattened entities**: Note that child entities can be included in PUT/POST

### 5. GL Integration Pattern
Consistent GL segment documentation (5 segments + account + service code):
- generalLedgerSegment1 (Class)
- generalLedgerSegment2 (Division)
- generalLedgerSegment3 (Department)
- generalLedgerSegment4 (Country)
- generalLedgerSegment5 (Location)

---

## Migration Approach

### Entity Selection Criteria
Prioritized entities based on:
1. **Core workflow entities** - Used in every billing transaction
2. **Configuration entities** - Required for system setup
3. **Financial entities** - Critical for invoice generation
4. **Integration entities** - GL and tax calculation
5. **Reference entities** - Rate cards and terms

### Documentation Standards
Each entity includes:
- Complete field inventory from Slate markdown tables
- Enhanced descriptions explaining:
  - Field purpose and business meaning
  - When/how the field is set
  - Calculated vs. user-entered fields
  - Immutability rules and lifecycle states
  - Integration points with other entities
- CRUD access level and required entitlements
- Related workflows with cross-references
- Realistic examples with contextual data

### Quality Checks
- Cross-referenced Slate markdown and OpenAPI schemas
- Verified field completeness against source documentation
- Ensured consistent formatting and categorization
- Validated YAML syntax
- Tested documentation rendering in Redocly (port 8080)

---

## Next Steps

### Immediate Priorities (Phase 3)
1. **BillMasterSyncBatch** - BillMaster-specific sync batch tracking
2. **Lookup entities** (15) - Status, type, and configuration lookups
3. **Rate card line entities** (6) - PlacementRateCardLine, JobOrderRateCardLine, etc.
4. **Calendar instance entities** (4) - CalendarInstance, BillingCalendarInstance, etc.
5. **Specialized tax rate entities** (5) - City, County, District, State, Other tax rates

### Medium Priority (Phase 4)
- Rate card line entities (6)
- Calendar instance entities (4)
- Lookup entities (15)

### Lower Priority (Phase 5)
- Specialized tax rate subtypes (5)
- Summary/aggregate entities (8)
- Invoice supporting entities (6)
- Miscellaneous entities (20)

---

## Technical Notes

### OpenAPI Structure
```
rest-api-docs/
├── openapi/
│   ├── openapi.yaml (main spec, tag descriptions)
│   ├── components/
│   │   ├── schemas/ (entity definitions)
│   │   │   ├── EarnCodeEntity.yaml
│   │   │   ├── InvoiceTermEntity.yaml
│   │   │   └── ... (18 more)
│   │   ├── parameters/
│   │   └── responses/
│   └── paths/
│       ├── services/ (service endpoints)
│       └── entity/ (entity query endpoints)
└── source/
    └── includes/
        └── entityref/
            └── paybill/ (104 Slate markdown files)
```

### Documentation Viewing
- **OpenAPI/Redocly**: http://localhost:8080 (run `npm run dev:openapi`)
- **Slate (legacy)**: http://localhost:4567 (run `bundle exec middleman server`)

### File Conventions
- Entity schemas: `{EntityName}Entity.yaml`
- Lookup entities: `{Name}Lookup` suffix
- Version entities: `{EntityName}Version` suffix
- Effective-dated: Include versionID, effectiveDate, effectiveEndDate

---

## Statistics

**Total Entities**: 104
**Completed**: 37 (36%)
**Remaining**: 67 (64%)

**Documentation Lines Written**: ~8,000 lines of comprehensive YAML

**Fields Documented**:
- EarnCodeEntity: 40+ fields
- InvoiceTermEntity: 44 fields
- SalesTaxRateEntity: 26 fields
- CustomerRequiredFieldMetaEntity: 20+ fields
- BillableCharge (tag): 51 fields
- BillMaster (tag): 22 fields
- BillMasterTransaction: 30 fields
- BillingSyncBatch: 11 fields
- BillMasterTransactionDistributionBatch: 7 fields
- BillMasterTransactionDiscountDetail: 9 fields
- BillMasterTransactionSurchargeDetail: 7 fields
- BillMasterTransactionSalesTaxDetail: 5 fields
- UnbilledRevenueDistributionBatch: 8 fields
- BillMasterTransactionDiscountRate: 11 fields
- BillMasterTransactionSurchargeRate: 11 fields
- BillMasterTransactionSalesTaxRate: 12 fields
- PlacementRateCardLineGroup: 8 fields
- PlacementRateCardLine: 15 fields
- **Total**: 337+ fields with detailed descriptions

**Categories Created**: 35+ logical field groupings across entities

---

## Key Learnings

### User Feedback Integration
- **Initial approach**: Selected "key fields" only → User requested ALL fields
- **Resolution**: Cross-reference both Slate docs AND core-services code
- **Impact**: Every entity now includes complete field inventory

### Tag Description Discovery
- **Initial misunderstanding**: Updated endpoint schemas only
- **User clarification**: Wanted comprehensive docs in tag description pages
- **Resolution**: Moved detailed field lists into openapi.yaml tag descriptions
- **Result**: Users now see full entity documentation on overview pages

### Effective-Dated Pattern
- **Challenge**: Version management across time
- **Solution**: Consistent pattern with effectiveDate, effectiveEndDate, versionID
- **Benefit**: Clear documentation of rate changes and historical tracking

---

## Changelog

### 2025-10-17 (Session 1)
- Created 20 OpenAPI entity schemas with comprehensive field documentation
- Enhanced BillableCharge tag description (51 fields)
- Enhanced BillMaster tag description (22 fields)
- Created entity query endpoints for BillableCharge
- Documented ~200+ fields with detailed descriptions and usage examples
- Established consistent patterns for effective-dated entities, GL segments, associations

### 2025-10-17 (Session 2) - Phase 2 Batch & Transaction Details
- Created 6 additional entity schemas (26 total, 25% complete)
- **Batch Processing Entities** (2):
  - BillingSyncBatchEntity (11 fields) - Time/expense import tracking
  - BillMasterTransactionDistributionBatchEntity (7 fields) - Revenue recognition batches
- **Transaction Detail Entities** (3):
  - BillMasterTransactionDiscountDetailEntity (9 fields) - Denormalized discount snapshots
  - BillMasterTransactionSurchargeDetailEntity (7 fields) - Denormalized surcharge snapshots
  - BillMasterTransactionSalesTaxDetailEntity (5 fields) - Denormalized tax rate snapshots
- Verified BillMasterTransactionEntity and InvoiceStatementLineItemEntity already complete from Session 1
- Established denormalization pattern for financial detail entities ensuring immutability
- Documented 70+ additional fields (270+ total)
- Identified entities without Slate documentation (InvoiceStatementBatch, InvoicePayment, Location, BillingProfile variants)

### 2025-10-17 (Session 3) - Phase 3 Transaction Associations, Tax Rates & Rate Cards
- Created 11 additional entity schemas (37 total, 36% complete)
- **Additional Batch Processing** (1):
  - UnbilledRevenueDistributionBatchEntity (8 fields) - GL distribution record tracking
- **Transaction-to-Rate Associations** (3):
  - BillMasterTransactionDiscountRateEntity (11 fields) - Transaction-discount junction with amounts
  - BillMasterTransactionSurchargeRateEntity (11 fields) - Transaction-surcharge junction with amounts
  - BillMasterTransactionSalesTaxRateEntity (12 fields) - Transaction-tax junction with amounts
- **Specialized Tax Rate Entities** (5):
  - StateSalesTaxRateEntity, CountySalesTaxRateEntity, CitySalesTaxRateEntity, DistrictSalesTaxRateEntity, OtherSalesTaxRateEntity
  - All extend SalesTaxRateEntity using allOf pattern for jurisdiction-specific filtering
- **Rate Card Line Entities** (2):
  - PlacementRateCardLineGroupEntity (8 fields) - Groups rate lines by earn code group
  - PlacementRateCardLineEntity (15 fields) - Bill/pay rates with automatic markup calculations
- Established association entity pattern linking transactions to rates with calculated amounts
- Documented adjustment sequence numbers for deterministic calculation ordering
- Documented reversal support for corrections and cancellations
- Documented rate card calculation patterns (bill rate, pay rate, markup relationships)
- Documented multiplier support for premium rates (OT, DT)
- Documented 67+ additional fields (337+ total)
