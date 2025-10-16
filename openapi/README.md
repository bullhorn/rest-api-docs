# Bullhorn Middle Office API - OpenAPI Specification

This directory contains the OpenAPI 3.0.3 specification for the Bullhorn Middle Office API, documenting service endpoints for managing the billing lifecycle from placement configuration through invoicing.

## Overview

The Bullhorn Middle Office suite consists of three integrated systems:

- **Pay Bill System** (91 entities): Manages billing, invoicing, rate cards, general ledger integration, and revenue recognition
- **Time and Labor System** (7 entities): Handles time entry, expense reporting, and approval workflows
- **Back to Employer System** (7 entities): Manages placement configuration, certifications, onboarding, and shift scheduling

This OpenAPI specification focuses on the **Pay Bill System**, specifically the BillableCharge workflow and service endpoints.

## Documentation

### View the Documentation

The generated interactive documentation is available at:
- **ReDoc**: `../build/redoc.html` (Open in browser)
- **Preview**: Run `npm run preview` for live preview during development

### Generate Documentation

```bash
# Install dependencies (if not already done)
npm install

# Generate static ReDoc HTML documentation
npm run docs:redoc

# Preview documentation with live reload
npm run preview
```

The generated documentation will be created at `../build/redoc.html` and can be opened directly in a web browser.

## File Structure

```
openapi/
├── openapi.yaml                          # Main OpenAPI specification entry point
├── components/
│   ├── parameters/
│   │   └── common.yaml                   # Shared parameters (BhRestToken, IDs)
│   ├── schemas/
│   │   ├── common.yaml                   # Common schemas (EntityReference, responses)
│   │   ├── BillableChargeCreateRequest.yaml
│   │   ├── BillableChargeUpdateRequest.yaml
│   │   ├── BillMaster.yaml               # Bill master transaction schema
│   │   └── CustomerRequiredField.yaml
│   └── responses/
│       └── errors.yaml                   # Standard error responses
├── paths/
│   └── services/
│       └── BillableCharge.yaml           # All 6 BillableCharge endpoints
├── package.json                          # npm scripts and dependencies
├── .spectral.yaml                        # OpenAPI validation rules
└── README.md                             # This file
```

## Available Endpoints

### BillableCharge Service Endpoints

1. **PUT /services/BillableCharge** - Create a new BillableCharge
2. **POST /services/BillableCharge/{billableChargeId}** - Update an existing BillableCharge
3. **POST /services/BillableCharge/markAsReady** - Mark charges as ready to bill
4. **POST /services/BillableCharge/markUnbillable** - Mark charges as unbillable
5. **PUT /services/BillableCharge/updateHoldStatus** - Place charges on hold or release hold
6. **POST /services/BillableCharge/clearNeedsReviewAndMarkAsReady** - Clear review flag and mark ready

## BillableCharge Workflow

The BillableCharge entity progresses through the following statuses:

1. **NotReadyToBill** (ID: 1) - Initial state for new charges
2. **ReadyToBill** (ID: 2) - Validated and ready for invoicing
3. **Processing** (ID: 3) - Currently being processed into invoices
4. **NeedsReview** (ID: 4) - Requires manual review
5. **Invoicing** (ID: 5) - Associated with invoice statement (not finalized)
6. **Invoiced** (ID: 6) - Successfully invoiced to client
7. **Unbillable** (ID: 7) - Marked as non-billable
8. **ProcessingFailed** (ID: 8) - Failed during processing
9. **OnHold** (ID: 9) - Temporarily paused from billing

**Status Priority** (highest to lowest): OnHold > ProcessingFailed > Processing > NeedsReview > Invoiced/Unbillable > ReadyToBill > NotReadyToBill

## Validation

Validate the OpenAPI specification against OpenAPI 3.0 standards:

```bash
# Validate the specification
npm run validate

# Bundle all files into a single specification
npm run bundle
```

The validation uses Spectral with the recommended OAS ruleset.

## SDK Generation

Generate client SDKs in multiple languages:

```bash
# TypeScript (axios-based)
npm run sdk:typescript

# Python
npm run sdk:python

# Java
npm run sdk:java

# C#
npm run sdk:csharp
```

Generated SDKs will be created in the `../sdks/{language}` directory.

## Authentication

The API uses OAuth 2.0 followed by a session-based token system:

1. Obtain an OAuth 2.0 access token through the OAuth flow
2. Call `/login` with the access token to receive a `BhRestToken`
3. Include `BhRestToken` in all subsequent API requests via:
   - **HTTP Header** (recommended): `BhRestToken: <token>`
   - Query Parameter: `?BhRestToken=<token>`
   - Cookie: Automatically set by login endpoint

## Base URL Structure

All API requests follow this pattern:

```
https://rest{swimlane}.bullhornstaffing.com/rest-services/{corpToken}/{endpoint}
```

Where:
- `{swimlane}` - Your data center swimlane number (e.g., '9', '22', or empty for default)
- `{corpToken}` - Corporation token from login response (e.g., 'e999')

## Business Rules

### Creating BillableCharges

- **Description is required**: Identifies the charge
- **Placement OR BillingProfile required**: At least one must be provided
  - If only placement is provided, it must have an associated billing profile
- **BillMasters required**: At least one transaction record must be included

### Updating BillableCharges

- Cannot update charges in `Invoiced`, `Processing`, or certain locked statuses
- New transactions can be added via the update endpoint
- Customer required fields can be modified before invoicing

### Marking Charges Ready

- **Entitlement**: Mark Billable Charge Ready
- Only charges in `NotReadyToBill` status are eligible
- All transactions must pass validation
- Sets `readyToBillOverride` flag

### Marking Charges Unbillable

- **Entitlement**: Mark Billable Charge Unbillable
- Cannot mark already invoiced charges as unbillable
- Typically irreversible - transactions excluded from revenue

### Hold Status Management

- **Entitlement**: Edit Billable Charge
- Prevents invoicing even if transactions are approved
- Can be placed/released with optional comments
- Cannot place invoiced charges on hold

### Clearing Review Flags

- **Entitlements**: Mark Billable Charge Ready, View Billable Charge, Edit Billable Charge
- Only for charges in `NeedsReview` status
- Re-runs validation before marking ready
- Used after correcting flagged issues

## Example Usage

### Create a BillableCharge

```bash
curl -X PUT \
  https://rest9.bullhornstaffing.com/rest-services/e999/services/BillableCharge \
  -H 'BhRestToken: a1b2c3d4-e5f6-47h8-89j0-k1l2m3n4o5p6' \
  -H 'Content-Type: application/json' \
  -d '{
    "description": "Weekly billing for placement",
    "periodEndDate": "2024-04-27",
    "placement": { "id": 272 },
    "billMasters": [{
      "quantity": 40.0,
      "transactionDate": "2024-04-27",
      "amount": 2000.0,
      "earnCode": { "id": 5 },
      "rate": 50.0
    }]
  }'
```

### Mark Charges as Ready

```bash
curl -X POST \
  'https://rest9.bullhornstaffing.com/rest-services/e999/services/BillableCharge/markAsReady?billableChargeIds=12345,12346,12347' \
  -H 'BhRestToken: a1b2c3d4-e5f6-47h8-89j0-k1l2m3n4o5p6'
```

### Place Charges on Hold

```bash
curl -X PUT \
  https://rest9.bullhornstaffing.com/rest-services/e999/services/BillableCharge/updateHoldStatus \
  -H 'BhRestToken: a1b2c3d4-e5f6-47h8-89j0-k1l2m3n4o5p6' \
  -H 'Content-Type: application/json' \
  -d '{
    "billableChargeIds": [12345, 12346],
    "onHold": true,
    "comments": "Pending rate verification with client"
  }'
```

## Error Responses

All endpoints return standardized error responses:

- **400 Bad Request**: Invalid request parameters or body
- **401 Unauthorized**: Invalid or expired session token
- **403 Forbidden**: Insufficient permissions for operation
- **404 Not Found**: Requested entity does not exist
- **429 Rate Limited**: Too many requests
- **500 Internal Server Error**: Unexpected server error

Example error response:

```json
{
  "errorCode": "MISSING_REQUIRED_FIELD",
  "errorMessage": "Required field 'description' is missing",
  "errorMessageKey": "errors.entity.missingRequired",
  "errors": [
    {
      "field": "description",
      "message": "This field is required"
    }
  ]
}
```

## Development

### Requirements

- Node.js 14+
- npm 6+

### Setup

```bash
# Install dependencies
npm install

# Validate specification
npm run validate

# Preview documentation locally
npm run preview

# Generate documentation
npm run docs:redoc
```

### Making Changes

1. Edit the relevant YAML files in `components/`, `paths/`, or the main `openapi.yaml`
2. Validate changes: `npm run validate`
3. Preview changes: `npm run preview`
4. Generate updated docs: `npm run docs:redoc`
5. Commit both source files and generated documentation

## Resources

- [OpenAPI Specification 3.0.3](https://swagger.io/specification/)
- [ReDoc Documentation](https://redocly.com/docs/redoc/)
- [Spectral Linter](https://stoplight.io/open-source/spectral)
- [OpenAPI Generator](https://openapi-generator.tech/)
- [Bullhorn REST API Docs](https://bullhorn.github.io/rest-api-docs)

## Related Documentation

- **Main REST API Documentation**: See `../source/` for comprehensive API reference
- **Entity Reference**: `../source/includes/entityref/paybill/` for Pay Bill entities
- **Service Endpoints**: `../source/includes/_services.md` for all service endpoints
- **Middle Office Overview**: See f/test branch for detailed Middle Office documentation

## Support

For questions or issues with the Middle Office API:

- Review the generated ReDoc documentation at `../build/redoc.html`
- Check the main REST API documentation at `../source/`
- Contact Bullhorn API Support

## License

Proprietary - Bullhorn, Inc.
