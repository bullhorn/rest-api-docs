#!/usr/bin/env node
/**
 * Inject Novo Elements theme CSS into generated ReDoc HTML
 */
const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../source/redoc.html');
const cssPath = path.join(__dirname, 'novo-theme.css');

try {
  // Read the generated HTML
  let html = fs.readFileSync(htmlPath, 'utf8');

  // Read the theme CSS
  const css = fs.readFileSync(cssPath, 'utf8');

  // Check if theme is already injected and remove it
  if (html.includes('/* Novo Elements Theme for ReDoc */')) {
    // Remove old theme
    html = html.replace(/<style id="novo-theme">[\s\S]*?<\/style>\s*<\/head>/, '</head>');
    console.log('✓ Removed old theme, injecting updated version...');
  }

  // Inject CSS before closing </head> tag
  const styleTag = `  <style id="novo-theme">
${css}
  </style>
</head>`;

  html = html.replace('</head>', styleTag);

  // Write back the modified HTML
  fs.writeFileSync(htmlPath, html, 'utf8');

  console.log('✓ Successfully injected Novo Elements theme into ReDoc HTML');

} catch (error) {
  console.error('✗ Error injecting theme:', error.message);
  process.exit(1);
}
