# Pay Bill Entity Migration Progress

## Summary

**Migration Status**: 20 of 104 Pay Bill entities completed (19%)

**Date**: 2025-10-17

**Objective**: Migrate all 104 Pay Bill entities from Slate markdown documentation to OpenAPI 3.0.3 specification with comprehensive field documentation.

---

## Completed Entities (20)

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

## Remaining Entities (84)

### High Priority Entities (15)

#### Core Transaction Entities
- [ ] **BillMasterTransaction** - Individual transaction audit trail (30+ fields)
- [ ] **BillMasterTransactionDiscountDetail** - Applied discount details
- [ ] **BillMasterTransactionSurchargeDetail** - Applied surcharge details
- [ ] **BillMasterTransactionSalesTaxDetail** - Applied tax details

#### Batch & Sync Entities
- [ ] **BillingSyncBatch** - Time & expense import batch tracking
- [ ] **BillMasterSyncBatch** - BillMaster sync batch tracking
- [ ] **UnbilledRevenueDistributionBatch** - GL distribution batch tracking
- [ ] **InvoiceStatementBatch** - Invoice generation batch tracking
- [ ] **BillMasterTransactionDistributionBatch** - Revenue distribution batches

#### Location & Profile Entities
- [ ] **Location** - Work location for tax calculation
- [ ] **LocationVersion** - Effective-dated location configurations
- [ ] **BillingProfile** - Billing configuration profiles
- [ ] **BillingProfileVersion** - Effective-dated billing configurations

#### Payment & Invoice Entities
- [ ] **InvoicePayment** - Payment records applied to invoices
- [ ] **InvoiceStatementLineItem** - Invoice line items grouping transactions

### Specialized Tax Entities (10)
- [ ] CitySalesTaxRate
- [ ] CountySalesTaxRate
- [ ] DistrictSalesTaxRate
- [ ] StateSalesTaxRate
- [ ] OtherSalesTaxRate
- [ ] BillMasterTransactionSalesTaxRate
- [ ] InvoiceStatementLineItemSalesTaxRate
- [ ] InvoiceStatementSalesTaxRate
- [ ] SalesTaxRateVersion
- [ ] TaxJurisdictionTypeLookup

### Rate Card Supporting Entities (6)
- [ ] PlacementRateCardLineGroup
- [ ] PlacementRateCardLine
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

### Immediate Priorities (Phase 2)
1. **BillMasterTransaction** - Core transaction entity (highest priority)
2. **Batch entities** (4) - BillingSyncBatch, BillMasterSyncBatch, distribution batches
3. **Location entities** (2) - Location, LocationVersion for tax calculation
4. **Invoice entities** (2) - InvoicePayment, InvoiceStatementLineItem
5. **BillingProfile entities** (2) - BillingProfile, BillingProfileVersion

### Medium Priority (Phase 3)
- Transaction detail entities (3)
- Rate card line entities (6)
- Calendar instance entities (4)
- Lookup entities (15)

### Lower Priority (Phase 4)
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
**Completed**: 20 (19%)
**Remaining**: 84 (81%)

**Documentation Lines Written**: ~3,500 lines of comprehensive YAML

**Fields Documented**:
- EarnCodeEntity: 40+ fields
- InvoiceTermEntity: 44 fields
- SalesTaxRateEntity: 26 fields
- CustomerRequiredFieldMetaEntity: 20+ fields
- BillableCharge (tag): 51 fields
- BillMaster (tag): 22 fields
- **Total**: 200+ fields with detailed descriptions

**Categories Created**: 25+ logical field groupings across entities

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

### 2025-10-17
- Created 20 OpenAPI entity schemas with comprehensive field documentation
- Enhanced BillableCharge tag description (51 fields)
- Enhanced BillMaster tag description (22 fields)
- Created entity query endpoints for BillableCharge
- Documented ~200+ fields with detailed descriptions and usage examples
- Established consistent patterns for effective-dated entities, GL segments, associations
