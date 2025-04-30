# Bullhorn Rest API Docs

These docs use [Slate](https://github.com/tripit/slate) to convert markdown files into the
 [Bullhorn Rest API Docs Site](http://bullhorn.github.io/rest-api-docs). 

### Prerequisites

You're going to need:

 - **Linux or OS X** — Windows may work, but is unsupported.
 - **Ruby, version 1.9.3 or newer**
 - **Bundler** — If Ruby is already installed, but the `bundle` command doesn't work, just run `gem install bundler` in a terminal.

### Getting Set Up

```shell
# either run this to run locally
bundle install
bundle exec middleman server

# OR run this to run with vagrant
vagrant up
```

You can now see the docs at http://localhost:4567. Whoa! That was fast!

Now that Slate is all set up your machine, you'll probably want to learn more about
 [editing Slate markdown](https://github.com/tripit/slate/wiki/Markdown-Syntax), or
 [how to publish your docs](https://github.com/tripit/slate/wiki/Deploying-Slate).


### Generating Documentation

- Import `Code Generation.postman_collection.json` to postman

- Fill out the script parameters under the 'Pre-request scripts' tab as follows:
  - If documentation has already been generated for your entity, copy and paste the full file contents as the `currentDocumentation` parameter
  - If generating documentation for a new entity, fill out the `originalEntity` parameter with the name of the entity (no spaces)
  - For either of the above cases, if the entity belongs to a specific mission, fill out the `originalEntityMission` parameter with the mission name
    - Currently only implemented by Pay/Bill, but may be expanded soon after the time of this writing

- Send the request

- View your postman console (`View -> Show Postman Console`, or `Ctrl+Alt+C` on Windows) and copy the new documentation
- Paste the new documentation in the corresponding file in this repository
