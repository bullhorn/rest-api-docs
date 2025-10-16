# Novo Elements Theme for OpenAPI Documentation

This document describes the Novo Elements design system integration with the Bullhorn Middle Office API documentation.

## Overview

The OpenAPI documentation now uses Bullhorn's **Novo Elements** design system colors and typography, providing a consistent brand experience across all Bullhorn products.

## Files

### Configuration
- **`redocly.yaml`** - Redocly configuration with display options
- **`novo-theme.css`** - Complete Novo Elements color scheme and styling
- **`inject-theme.js`** - Script to inject theme CSS into generated HTML

### Build Process
The theme is automatically applied when running:
```bash
npm run docs:redoc:dev
```

This command:
1. Builds ReDoc HTML from OpenAPI spec
2. Injects Novo Elements CSS theme
3. Outputs to `../source/redoc.html`

## Novo Elements Colors Used

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Ocean Blue | `#4a89dc` | Primary brand color, links, GET requests |
| Grass Green | `#8cc152` | Success states, POST requests |
| Sunflower | `#f6b042` | Warning states, PUT requests |
| Grapefruit | `#da4453` | Error states, DELETE requests |
| Lavender | `#967adc` | PATCH requests |

### Text Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Dark Gray | `#3d464d` | Primary text |
| Muted Gray | `#70777f` | Secondary text |
| Gray | `#9e9e9e` | Disabled/light text |

### Background Colors
| Color | Hex | Usage |
|-------|-----|-------|
| White | `#ffffff` | Main background |
| Off-White | `#f7f7f7` | Content panels |
| Charcoal | `#282828` | Code blocks |
| Sand | `#f4f4f4` | Muted sections |

### Border Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Light | `#dbdbdb` | Default borders |
| Stone | `#bebebe` | Emphasized borders |

## Typography

The theme uses **Roboto** font family (loaded from Google Fonts):
- **Regular (400)** - Body text
- **Semibold (600)** - Headings, buttons, labels
- **Bold (700)** - Emphasis

Code blocks use:
- **Consolas, Menlo, Monaco, 'Lucida Console'** monospace fonts

## HTTP Method Colors

The documentation uses Novo semantic colors for HTTP methods:

| Method | Color | Name |
|--------|-------|------|
| GET | `#4a89dc` | Ocean Blue |
| POST | `#8cc152` | Grass Green |
| PUT | `#f6b042` | Sunflower |
| DELETE | `#da4453` | Grapefruit |
| PATCH | `#967adc` | Lavender |
| HEAD | `#707070` | Slate |
| OPTIONS | `#9e9e9e` | Gray |

## Viewing the Documentation

### Local Development Server
Start the Middleman server to view the documentation:
```bash
bundle exec middleman server
```

Then visit: **http://localhost:4567/redoc.html**

### Direct File Access
The generated HTML is standalone and can be opened directly:
```bash
open source/redoc.html
# or
start source/redoc.html
```

## Rebuilding with Theme

To rebuild the documentation with the Novo theme:
```bash
cd openapi
npm run docs:redoc:dev
```

This command:
1. Validates the configuration (no errors expected)
2. Builds ReDoc HTML (574 KB base)
3. Injects Novo theme CSS (~14 KB)
4. Final output: ~588 KB

## Customization

### Modifying Colors
Edit `openapi/novo-theme.css` and rebuild:
```css
:root {
  --color-primary: #4a89dc;  /* Change primary color */
  /* ... other color variables ... */
}
```

### Modifying Layout
Edit `openapi/redocly.yaml`:
```yaml
theme:
  openapi:
    layout: three-panel  # or 'stacked'
    sortRequiredPropsFirst: true
```

## Source

Color palette extracted from:
- **Novo Elements Design System**: https://github.com/bullhorn/novo-elements
- **Package**: novo-design-tokens@latest
- **Documentation**: https://bullhorn.github.io/novo-elements/

## Build Output

Recent build results:
```
🎉 bundled successfully in: ../source/redoc.html (588 KiB)
✓ Successfully injected Novo Elements theme into ReDoc HTML
```

## Validation

The OpenAPI spec validates cleanly:
```bash
npm run validate
# 0 errors, 3 warnings (safe to ignore)
```

## Additional Resources

- **OpenAPI Spec**: `openapi/openapi.yaml`
- **Entity Schemas**: `openapi/components/schemas/`
- **Service Paths**: `openapi/paths/services/`
- **Entity Paths**: `openapi/paths/entity/`
- **Spectral Config**: `openapi/.spectral.yaml`

---

**Last Updated**: October 16, 2025
**Version**: 1.0.0
**Maintained By**: Bullhorn REST API Documentation Team
