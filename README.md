# Bullhorn Rest API Docs

This repository contains two complementary documentation systems:

1. **Slate Documentation** - Comprehensive REST API reference using markdown
2. **OpenAPI Documentation** - Interactive Middle Office API specification with ReDoc

Both are deployed together to the [Bullhorn Rest API Docs Site](http://bullhorn.github.io/rest-api-docs).

## Prerequisites

You're going to need:

- **Ruby 2.7+** (we recommend using rbenv or RVM)
- **Bundler** - `gem install bundler`
- **Node.js 16+** and **npm** (for OpenAPI documentation)

## Getting Started

### Setup & Installation

```bash
# Install dependencies
bundle install

# Start the local development server
bundle exec middleman server
```

You can now see the docs at http://localhost:4567

### Using Docker (Alternative)

```bash
# Build the Docker image
docker-compose build

# Run the development server
docker-compose up
```

## Unified Build Commands (Recommended)

Build both Slate and OpenAPI documentation with a single command:

```bash
# Install all dependencies (Ruby gems + Node packages)
npm run install:all
# This runs: bundle install && npm install && cd openapi && npm install

# Build both documentation systems
npm run build
# Outputs to: build/index.html (Slate) + build/redoc.html (OpenAPI)

# Development mode - run both servers simultaneously
npm run dev
# Slate: http://localhost:4567
# OpenAPI: http://localhost:8080

# Build individual systems
npm run build:slate      # Just Slate/Middleman
npm run build:openapi    # Just OpenAPI/ReDoc

# Validate OpenAPI spec
npm run validate

# Clean build directory
npm run clean
```

**Note**: If you already have Ruby gems installed (via `bundle install`), you can skip `npm run install:all` and just run `npm install` at the root.

### Individual Build Commands (Alternative)

You can still use the individual build systems directly:

**Slate Documentation:**
```bash
bundle exec middleman build
bundle exec middleman server
```

**OpenAPI Documentation:**
```bash
cd openapi
npm run docs:redoc
npm run preview
```

## Generating Documentation

- Import `Code Generation.postman_collection.json` to Postman
- Fill out the script parameters under the 'Pre-request scripts' tab as follows:
    - If documentation has already been generated for your entity, copy and paste the full file contents as the `currentDocumentation` parameter
    - If generating documentation for a new entity, fill out the `originalEntity` parameter with the name of the entity (no spaces)
    - For either of the above cases, if the entity belongs to a specific mission, fill out the `originalEntityMission` parameter with the mission name

- Send the request
- View your Postman console (`View -> Show Postman Console`, or `Ctrl+Alt+C` on Windows) and copy the new documentation
- Paste the new documentation in the corresponding file in this repository

## Deployment

To deploy to GitHub Pages:

```bash
# Build and deploy the site
bundle exec rake publish
```

This will build the static site and push it to the `gh-pages` branch.

## Architecture

This documentation site is built with two complementary systems:

### Slate Documentation
- **Middleman 4.6** - Static site generator
- **Sass/SCSS** - For styling with variables and mixins
- **Ruby 3.0** - Runtime environment
- **Sprockets** - Asset pipeline for CSS/JS compilation

### OpenAPI Documentation
- **OpenAPI 3.0.3** - API specification standard
- **ReDoc** - Interactive API documentation renderer
- **Spectral** - OpenAPI linting and validation
- **Redocly CLI** - Documentation build tooling

## Development Notes

- SCSS files are compiled automatically by Sprockets
- The site uses a responsive design that works on desktop and mobile
- Syntax highlighting is provided by Rouge
- Search functionality is built-in for easy navigation

### Running Development Servers

For the best development experience, run both servers:

```bash
# Terminal 1 - Slate documentation server
bundle exec middleman server
# Visit: http://localhost:4567

# Terminal 2 - Build OpenAPI docs first (copies to source/)
npm run build:openapi

# Now the "Middle Office API" button will work in Slate dev server
```

**Note**: The OpenAPI docs (`redoc.html`) are automatically copied to `source/` during build so they're available to the Middleman dev server. This file is gitignored.

## Troubleshooting

### Common Issues

- **Bundle install fails**: Make sure you have Ruby 2.7+ installed
- **Middleman server won't start**: Check that all dependencies are installed with `bundle install`
- **CSS not loading**: Ensure SCSS files are properly named and located in `source/stylesheets/`

### Getting Help

For more information about Slate, see the [official Slate documentation](https://github.com/slatedocs/slate).
