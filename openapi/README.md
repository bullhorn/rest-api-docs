# Bullhorn REST API - OpenAPI Specification

This directory contains the OpenAPI 3.0.3 specification for the Bullhorn REST API, starting with the BillableCharge service endpoints.

## Directory Structure

```
openapi/
├── openapi.yaml                          # Main OpenAPI specification file
├── components/
│   ├── schemas/                          # Data models and schemas
│   │   ├── BillableCharge.yaml           # Full BillableCharge entity schema
│   │   ├── BillableChargeCreateRequest.yaml
│   │   ├── BillableChargeUpdateRequest.yaml
│   │   ├── BillMaster.yaml               # Bill master transaction schema
│   │   ├── CustomerRequiredField.yaml    # Customer required fields schema
│   │   └── common.yaml                   # Reusable common schemas
│   ├── parameters/
│   │   └── common.yaml                   # Reusable parameters (BhRestToken, etc.)
│   └── responses/
│       └── errors.yaml                   # Standard error responses
└── paths/
    └── services/
        └── BillableCharge.yaml           # BillableCharge endpoint definitions
```

## Getting Started

### Prerequisites

- Node.js 16+ (for tooling)
- npm or yarn

### Installation

Install OpenAPI tools:

```bash
# Install Swagger UI CLI
npm install -g swagger-ui-cli

# Install OpenAPI validator (Spectral)
npm install -g @stoplight/spectral-cli

# Install ReDoc CLI (alternative documentation generator)
npm install -g @redocly/cli

# Install OpenAPI Generator (for SDK generation)
npm install -g @openapitools/openapi-generator-cli
```

## Usage

### 1. View Interactive Documentation

#### Using Swagger UI

Generate interactive API documentation:

```bash
# From the openapi directory
swagger-ui-cli bundle openapi.yaml -o ../build/swagger-ui

# Then open build/swagger-ui/index.html in your browser
```

Or serve it locally:

```bash
npx serve build/swagger-ui
# Opens at http://localhost:3000
```

#### Using ReDoc

```bash
redocly build-docs openapi.yaml -o ../build/redoc.html

# Then open build/redoc.html in your browser
```

### 2. Validate the Specification

Validate that the OpenAPI spec is correct:

```bash
spectral lint openapi.yaml --ruleset .spectral.yaml
```

### 3. Generate Client SDKs

Generate client libraries in various languages:

#### TypeScript/JavaScript

```bash
openapi-generator-cli generate \
  -i openapi.yaml \
  -g typescript-axios \
  -o ../sdks/typescript \
  --additional-properties=npmName=bullhorn-api-client
```

#### Python

```bash
openapi-generator-cli generate \
  -i openapi.yaml \
  -g python \
  -o ../sdks/python \
  --additional-properties=packageName=bullhorn_api
```

#### Java

```bash
openapi-generator-cli generate \
  -i openapi.yaml \
  -g java \
  -o ../sdks/java \
  --additional-properties=groupId=com.bullhorn,artifactId=rest-api-client
```

#### C#

```bash
openapi-generator-cli generate \
  -i openapi.yaml \
  -g csharp \
  -o ../sdks/csharp \
  --additional-properties=packageName=Bullhorn.RestApi
```

### 4. Import into Tools

#### Postman

1. Open Postman
2. Click **Import**
3. Select `openapi/openapi.yaml`
4. Postman will generate a complete collection with all endpoints

#### Insomnia

1. Open Insomnia
2. Click **Create** → **Import From** → **File**
3. Select `openapi/openapi.yaml`

#### VS Code / IntelliJ

Most modern IDEs have OpenAPI/Swagger plugins that provide:
- Autocomplete for API requests
- Inline documentation
- Schema validation
- Request/response examples

## Key Features

### BillableCharge Service

The current specification covers the BillableCharge service with two endpoints:

1. **PUT /services/BillableCharge** - Create a new billable charge
2. **POST /services/BillableCharge/{billableChargeId}** - Update existing billable charge

### Schema Highlights

- **Complete validation rules**: Required fields, data types, formats
- **Nested objects**: BillMaster and CustomerRequiredField schemas
- **Business logic documentation**: Placement XOR BillingProfile requirements
- **Comprehensive examples**: Multiple real-world scenarios for each endpoint
- **Error responses**: All standard HTTP error codes with examples

## Validation Rules

The specification includes OpenAPI 3.0 schema validation:

### Create BillableCharge

- ✅ `description` - Required, string
- ✅ `periodEndDate` - Required, date format (YYYY-MM-DD)
- ✅ `placement` OR `billingProfile` - At least one required
- ✅ `billMasters` - Required, array with at least 1 item

### BillMaster

- ✅ `quantity` - Required, number >= 0
- ✅ `transactionDate` - Required, date format
- ✅ `amount` - Required, number >= 0
- ✅ `rate` - Required, number >= 0
- ✅ `earnCode` - Required, entity reference

### CustomerRequiredField

- ✅ `customerRequiredFieldMeta` - Required
- ✅ One of: `customerRequiredFieldOption` OR `textValue`

## Testing

You can test the API using the generated Swagger UI:

1. Generate Swagger UI (see above)
2. Click "Authorize" and enter your BhRestToken
3. Try out endpoints directly from the browser
4. View request/response examples

## Extending the Specification

To add more endpoints:

1. Create schema files in `components/schemas/`
2. Create path files in `paths/`
3. Reference them in `openapi.yaml`
4. Validate with Spectral
5. Regenerate documentation

### Example: Adding a New Service

```yaml
# In openapi.yaml
paths:
  /services/NewService:
    $ref: './paths/services/NewService.yaml#/createNewService'
```

## Continuous Integration

### GitHub Actions Example

```yaml
# .github/workflows/validate-openapi.yml
name: Validate OpenAPI

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Spectral
        run: npm install -g @stoplight/spectral-cli

      - name: Validate OpenAPI Spec
        run: |
          cd openapi
          spectral lint openapi.yaml
```

## Benefits

### For Developers

- ✅ Auto-generated SDKs in 40+ languages
- ✅ Interactive documentation with "try it out" functionality
- ✅ Type safety and autocomplete in IDEs
- ✅ Consistent API contract
- ✅ Reduced integration time

### For API Maintainers

- ✅ Single source of truth for API documentation
- ✅ Automated validation in CI/CD
- ✅ Version control for API changes
- ✅ Breaking change detection
- ✅ Easier collaboration with consumers

### For QA/Testing

- ✅ Contract testing with Pact, Dredd, or Postman
- ✅ Automated mock servers for development
- ✅ Schema validation for responses
- ✅ Example requests for all scenarios

## Troubleshooting

### Validation Errors

If you get validation errors:

```bash
spectral lint openapi.yaml --verbose
```

Common issues:
- Missing required fields in schema definitions
- Incorrect `$ref` paths
- Invalid OpenAPI 3.0 syntax

### Reference Resolution

If refs aren't resolving:
- Ensure paths are relative to the file location
- Check that referenced files exist
- Verify YAML syntax (indentation, colons)

## Resources

- [OpenAPI Specification 3.0.3](https://spec.openapis.org/oas/v3.0.3)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)
- [ReDoc](https://redocly.com/redoc/)
- [OpenAPI Generator](https://openapi-generator.tech/)
- [Spectral Linter](https://stoplight.io/open-source/spectral)

## Next Steps

1. ✅ **Validate the spec**: `spectral lint openapi.yaml`
2. ✅ **Generate documentation**: Create Swagger UI
3. ✅ **Test endpoints**: Use interactive docs
4. ⬜ **Extend coverage**: Add more service endpoints
5. ⬜ **Generate SDKs**: Create client libraries
6. ⬜ **Integrate with CI/CD**: Automate validation

## Contributing

When adding new endpoints:

1. Follow the existing schema structure
2. Include comprehensive examples
3. Document business rules
4. Add validation rules
5. Include error responses
6. Test with Spectral validation

## License

Proprietary - Bullhorn, Inc.
