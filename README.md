# Bullhorn Rest API Docs

These docs use [Slate](https://github.com/slatedocs/slate) to convert markdown files into the [Bullhorn Rest API Docs Site](http://bullhorn.github.io/rest-api-docs).

## Prerequisites

You're going to need:

- **Ruby 2.7+** (we recommend using rbenv or RVM)
- **Bundler** - `gem install bundler`

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

This documentation site is built with:

- **Middleman 4.6** - Static site generator
- **Sass/SCSS** - For styling with variables and mixins
- **Ruby 3.0** - Runtime environment
- **Sprockets** - Asset pipeline for CSS/JS compilation

## Development Notes

- SCSS files are compiled automatically by Sprockets
- The site uses a responsive design that works on desktop and mobile
- Syntax highlighting is provided by Rouge
- Search functionality is built-in for easy navigation

## Troubleshooting

### Common Issues

- **Bundle install fails**: Make sure you have Ruby 2.7+ installed
- **Middleman server won't start**: Check that all dependencies are installed with `bundle install`
- **CSS not loading**: Ensure SCSS files are properly named and located in `source/stylesheets/`

### Getting Help

For more information about Slate, see the [official Slate documentation](https://github.com/slatedocs/slate).
