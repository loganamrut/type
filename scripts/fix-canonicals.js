/**
 * fix-canonicals.js
 * Adds trailing slashes to all canonical, OG url, and JsonLd url references
 * in every src/app/ page.tsx so they match GitHub Pages' served URLs.
 *
 * Fixes Google Search Console issue: "Page with redirect"
 * Because GitHub Pages (with trailingSlash: true) 301-redirects non-slash URLs to slash URLs,
 * canonicals without trailing slashes cause redirect chains that Google flags.
 */

const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'src', 'app');
const BASE = 'https://typefacegen.com';

// Regex patterns to fix — order matters, be specific
const PATTERNS = [
  // Fix canonical: 'https://typefacegen.com/slug' → 'https://typefacegen.com/slug/'
  // Don't double-add trailing slash (skip if already ends with /)
  {
    name: 'canonical',
    pattern: /(canonical:\s*['"])https:\/\/typefacegen\.com(\/[^/'"]+)(['"])/g,
    replacement: (match, p1, p2, p3) => `${p1}https://typefacegen.com${p2}/${p3}`,
  },
  // Fix OG url: 'https://typefacegen.com/slug'
  {
    name: 'og_url',
    pattern: /(url:\s*['"])https:\/\/typefacegen\.com(\/[^/'"]+)(['"])/g,
    replacement: (match, p1, p2, p3) => `${p1}https://typefacegen.com${p2}/${p3}`,
  },
  // Fix JsonLd url= prop: url="https://typefacegen.com/slug"
  {
    name: 'jsonld_url',
    pattern: /(url=\{['"]https:\/\/typefacegen\.com)(\/[^/'"]+)(['"])/g,
    replacement: (match, p1, p2, p3) => `${p1}${p2}/${p3}`,
  },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  let changes = [];

  PATTERNS.forEach(({ name, pattern, replacement }) => {
    const newContent = content.replace(pattern, (...args) => {
      // args: match, p1, p2, p3, offset, string
      const match = args[0];
      const result = replacement(...args);
      if (result !== match) {
        changes.push({ type: name, from: match, to: result });
        changed = true;
      }
      return result;
    });
    content = newContent;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`\n✅ Fixed: ${path.relative(process.cwd(), filePath)}`);
    changes.forEach(c => {
      console.log(`   [${c.type}] ${c.from.trim()} → ${c.to.trim()}`);
    });
  }

  return changed;
}

// Walk src/app recursively for page.tsx files
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let total = 0;
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      total += walk(fullPath);
    } else if (entry.name === 'page.tsx' || entry.name === 'layout.tsx' || entry.name === 'sitemap.ts') {
      if (processFile(fullPath)) total++;
    }
  }
  return total;
}

const totalFixed = walk(appDir);
// Also fix sitemap.ts in app dir
const sitemapPath = path.join(appDir, 'sitemap.ts');
if (fs.existsSync(sitemapPath)) processFile(sitemapPath);

console.log(`\n🎯 Done. Fixed trailing slashes in ${totalFixed} file(s).`);
console.log('   All canonical/OG URLs now match the GitHub Pages trailing-slash redirect target.');
console.log('   This resolves: "Page with redirect" in Google Search Console.');
