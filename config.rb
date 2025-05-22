# Simple config.rb - guaranteed to work without syntax errors

# Markdown
set :markdown_engine, :redcarpet
set :markdown,
    fenced_code_blocks: true,
    smartypants: true,
    disable_indented_code_blocks: true,
    prettify: true,
    tables: true,
    with_toc_data: true,
    no_intra_emphasis: true,
    strikethrough: true,
    superscript: true

# Assets
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'

# Activate Sprockets
activate :sprockets

# Sass configuration - this is what was missing!
set :sass, {
  load_paths: [File.join(root, 'source', 'stylesheets')],
  line_comments: false,
  style: :expanded,
  syntax: :scss
}

# Activate the syntax highlighter
activate :syntax
activate :relative_assets
set :relative_links, true

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Firefox ESR', 'not IE < 11']
  config.cascade = false
  config.inline = true
end

# Build Configuration
configure :build do
  # Sass config for build
  set :sass, {
    load_paths: [File.join(root, 'source', 'stylesheets')],
    line_comments: false,
    style: :compressed,
    syntax: :scss
  }

  activate :minify_css
  activate :minify_javascript
end

configure :development do
  set :sass, {
    load_paths: [File.join(root, 'source', 'stylesheets')],
    line_comments: false,
    style: :expanded,
    syntax: :scss
  }
end
