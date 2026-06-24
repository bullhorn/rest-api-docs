# Bullhorn Rest API Docs

These docs use [Slate](https://github.com/slatedocs/slate) to convert markdown files into the [Bullhorn Rest API Docs Site](http://bullhorn.github.io/rest-api-docs).

## Updating the docs with Claude

Entity and operation reference pages can be created and updated with the **`rest-api-docs`** Claude plugin (in the [`claude-resources`](https://bhsource.bullhorn.com/DEV_WORKSPACE/claude-resources/-/blob/main/plugins/general/rest-api-docs/README.md) repo / Bullhorn Claude marketplace). It verifies fields, types, and required/read-only flags against the entity code and `/meta`, preserves the load-bearing table format, and drafts the CHANGELOG entry for you.

The full path from a code change to the live site at [bullhorn.github.io/rest-api-docs](http://bullhorn.github.io/rest-api-docs) is five steps:

### 1. Update documentation

#### A. Manually update

Make required changes in the repo

#### B. Run the skill

In Claude Code / Cowork (with this repo and the entity-source repo available):

```
/rest-api-docs:update-api-doc <Entity or operation>   # e.g. Timesheet, or "search"
```

The skill edits the entity or operation page under `source/includes/`, registers any brand-new page in `source/entityref.html.md`, and drafts the CHANGELOG entry. It stops there — branching, the PR, and publishing are manual. Review the diff and the skill's handoff summary before continuing.

### 2. Create a branch

Branch off `dev` (PRs target `dev` — never `master`, per `CONTRIBUTING.md`). Name the branch after the Jira ticket:

```bash
git checkout dev && git pull
git checkout -b f/BH-XXXXX          # e.g. f/BH-101708
git add source/includes/...
git commit -m "<entity>: <change>"  # e.g. "timesheet: units BigDecimal + amount field"
git push -u origin f/BH-XXXXX
```

### 3. Open the pull request

Open a PR on GitHub from your branch **into `dev`**. Use the same `<entity>: <change>` title, link the Jira ticket, and paste the skill's handoff summary (source citations + breaking notes) into the description so reviewers can verify against code.

### 4. Merge once approved

After review approval, merge the PR into `dev`. Resolve any CHANGELOG conflicts by keeping both entries under the current release section.

### 5. Publish via Jenkins

Trigger the publisher job — it builds the Slate site and deploys it to the `gh-pages` branch that serves the public docs site:

**[API_Documentation_publisher](https://bosjenkins.bullhorn.com/job/Dev-Practice/job/API_Documentation_publisher/)** (`bosjenkins.bullhorn.com` → `Dev-Practice` → `API_Documentation_publisher`)

Run "Build Now", wait for the job to go green, then confirm the change is live. The published site lags the merge until this job runs — **merging alone does not publish.**

> Local preview (optional): `bundle install && bundle exec middleman server` serves the site at `localhost:4567` so you can eyeball tables and anchors before opening the PR.

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
