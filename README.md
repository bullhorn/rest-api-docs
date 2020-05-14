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
