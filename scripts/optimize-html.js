const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getHtmlFiles(fullPath, files);
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

const outDir = path.join(__dirname, '..', 'out');
if (!fs.existsSync(outDir)) {
  console.log('out directory not found!');
  process.exit(1);
}

const htmlFiles = getHtmlFiles(outDir);
console.log(`Found ${htmlFiles.length} HTML files to optimize.`);

// Cache CSS contents
const cssCache = {};

let optimizedCount = 0;
for (const htmlPath of htmlFiles) {
  let html = fs.readFileSync(htmlPath, 'utf8');

  // Find all CSS link tags
  // <link rel="stylesheet" href="/_next/static/chunks/2zmn42vo2001p.css" data-precedence="next"/>
  const cssLinkRegex = /<link\s+rel=["']stylesheet["']\s+href=["'](\/_next\/static\/chunks\/[^"']+\.css)["'][^>]*\/?>/gi;

  let modified = false;
  html = html.replace(cssLinkRegex, (match, cssHref) => {
    const localCssPath = path.join(outDir, cssHref);
    if (!cssCache[localCssPath]) {
      if (fs.existsSync(localCssPath)) {
        cssCache[localCssPath] = fs.readFileSync(localCssPath, 'utf8');
      } else {
        console.warn(`CSS file not found at: ${localCssPath}`);
        return match; // Keep original if file not found
      }
    }

    modified = true;
    // Inline the critical CSS directly
    return `<style id="inlined-critical-css">${cssCache[localCssPath]}</style>`;
  });

  if (modified) {
    fs.writeFileSync(htmlPath, html, 'utf8');
    optimizedCount++;
  }
}

console.log(`✅ Successfully inlined critical CSS across ${optimizedCount} pages!`);
