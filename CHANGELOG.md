# Changelog

## Version 2.0.0

*May 22, 2025*

Major update to modernize the documentation system and improve compatibility with current technologies.

**Features:**
- Updated to Middleman 4.4+ for improved performance and features
- Added Docker support for easier development environment setup
- Added support for Ruby 2.7+ and 3.0+
- Improved GitHub Pages deployment process with middleman-gh-pages gem
- Enhanced Markdown rendering with newer Redcarpet version
- Modernized Jenkins pipeline for improved CI/CD

**Fixes:**
- Resolved Ruby version compatibility issues
- Updated dependencies to address security vulnerabilities
- Fixed deployment script for modern GitHub Pages
- Improved CSS minification and asset handling
- Enhanced syntax highlighting with Rouge 3.28+

**Changes:**
- Replaced custom deploy script with Rake-based deployment (optional)
- Updated documentation generation with better error handling
- Improved configuration for mobile responsiveness
- Enhanced code syntax highlighting

## Version 1.3.2

*February 3, 2016*

A small bugfix for slightly incorrect background colors on code samples in some cases.

## Version 1.3.1

*January 31, 2016*

A small bugfix for incorrect whitespace in code blocks.

## Version 1.3

*January 27, 2016*

We've upgraded Middleman and a number of other dependencies, which should fix quite a few bugs.

Instead of `rake build` and `rake deploy`, you should now run `bundle exec middleman build --clean` to build your server, and `./deploy.sh` to deploy it to Github Pages.

## Version 1.2

*June 20, 2015*

**Fixes:**

- Remove crash on invalid languages
- Update Tocify to scroll to the highlighted header in the Table of Contents
- Fix variable leak and update search algorithms
- Update Python examples to be valid Python
- Update gems
- More misc. bugfixes of Javascript errors
- Add Dockerfile
- Remove unused gems
- Optimize images, fonts, and generated asset files
- Add chinese font support
- Remove RedCarpet header ID patch
- Update language tabs to not disturb existing query strings

## Version 1.1

*July 27, 2014*

**Fixes:**

- Finally, a fix for the redcarpet upgrade bug

## Version 1.0

*July 2, 2014*

[View Issues](https://github.com/tripit/slate/issues?milestone=1&state=closed)

**Features:**

- Responsive designs for phones and tablets
- Started tagging versions

**Fixes:**

- Fixed 'unrecognized expression' error
- Fixed #undefined hash bug
- Fixed bug where the current language tab would be unselected
- Fixed bug where tocify wouldn't highlight the current section while searching
- Fixed bug where ids of header tags would have special characters that caused problems
- Updated layout so that pages with disabled search wouldn't load search.js
- Cleaned up Javascript
