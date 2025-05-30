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

# Create proxy pages for CSS files to ensure they have .css extensions
proxy '/stylesheets/screen.css', '/stylesheets/screen'
proxy '/stylesheets/print.css', '/stylesheets/print'

# Activate the syntax highlighter
activate :syntax
activate :relative_assets
set :relative_links, true

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Firefox ESR', 'not IE < 11']
  config.cascade  = false
  config.inline   = true
end

# Build Configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  # activate :asset_hash
  # activate :gzip
end
