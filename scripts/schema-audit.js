const fs = require('fs');
const path = require('path');

const routes = [
  { name: 'Home', file: 'index.html', requiredTypes: ['Organization', 'WebSite', 'WebPage', 'WebApplication', 'BreadcrumbList', 'FAQPage', 'HowTo', 'ItemList'] },
  { name: 'Font Pairing', file: 'font-pairing-generator/index.html', requiredTypes: ['Organization', 'WebSite', 'WebPage', 'WebApplication', 'BreadcrumbList', 'FAQPage', 'HowTo'] },
  { name: 'Font Tester', file: 'font-tester/index.html', requiredTypes: ['Organization', 'WebSite', 'WebPage', 'WebApplication', 'BreadcrumbList', 'FAQPage', 'HowTo'] },
  { name: 'Typography Generator', file: 'typography-generator/index.html', requiredTypes: ['Organization', 'WebSite', 'WebPage', 'WebApplication', 'BreadcrumbList', 'FAQPage', 'HowTo'] },
  { name: 'Serif Typefaces', file: 'serif-typeface-generator/index.html', requiredTypes: ['Organization', 'WebSite', 'WebPage', 'WebApplication', 'BreadcrumbList', 'FAQPage', 'ItemList'] },
  { name: 'Sans-Serif Typefaces', file: 'sans-serif-typeface-generator/index.html', requiredTypes: ['Organization', 'WebSite', 'WebPage', 'WebApplication', 'BreadcrumbList', 'FAQPage', 'ItemList'] },
  { name: 'Display Typefaces', file: 'display-typeface-generator/index.html', requiredTypes: ['Organization', 'WebSite', 'WebPage', 'WebApplication', 'BreadcrumbList', 'FAQPage', 'ItemList'] },
  { name: 'Monospace Typefaces', file: 'monospace-typeface-generator/index.html', requiredTypes: ['Organization', 'WebSite', 'WebPage', 'WebApplication', 'BreadcrumbList', 'FAQPage', 'ItemList'] },
  { name: 'Script Typefaces', file: 'script-typeface-generator/index.html', requiredTypes: ['Organization', 'WebSite', 'WebPage', 'WebApplication', 'BreadcrumbList', 'FAQPage', 'ItemList'] },
  { name: 'Typeface for Logos', file: 'typeface-for-logos/index.html', requiredTypes: ['Organization', 'WebSite', 'WebPage', 'WebApplication', 'BreadcrumbList', 'FAQPage', 'ItemList'] },
  { name: 'Typeface for Websites', file: 'typeface-for-websites/index.html', requiredTypes: ['Organization', 'WebSite', 'WebPage', 'WebApplication', 'BreadcrumbList', 'FAQPage', 'ItemList'] },
  { name: 'About', file: 'about/index.html', requiredTypes: ['Organization', 'WebSite', 'AboutPage', 'BreadcrumbList'] },
  { name: 'Privacy', file: 'privacy/index.html', requiredTypes: ['Organization', 'WebSite', 'WebPage', 'BreadcrumbList'] },
  { name: 'Terms', file: 'terms/index.html', requiredTypes: ['Organization', 'WebSite', 'WebPage', 'BreadcrumbList'] },
];

const outDir = path.join(__dirname, '..', 'out');
let totalFailures = 0;

console.log('=== COMPREHENSIVE SCHEMA.ORG & GOOGLE RICH RESULTS AUDIT ===\n');

for (const r of routes) {
  const filePath = path.join(outDir, r.file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing static HTML file: ${r.file}`);
    totalFailures++;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf-8');
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!match) {
    console.error(`❌ No JSON-LD script found in ${r.file}`);
    totalFailures++;
    continue;
  }

  try {
    const json = JSON.parse(match[1]);
    if (json['@context'] !== 'https://schema.org') {
      console.error(`❌ Invalid @context in ${r.file}: ${json['@context']}`);
      totalFailures++;
    }

    if (!Array.isArray(json['@graph'])) {
      console.error(`❌ @graph is not an array in ${r.file}`);
      totalFailures++;
    }

    const typesInGraph = json['@graph'].flatMap(item => Array.isArray(item['@type']) ? item['@type'] : [item['@type']]);
    const missingTypes = r.requiredTypes.filter(t => !typesInGraph.includes(t));

    if (missingTypes.length > 0) {
      console.error(`⚠️  ${r.name} (${r.file}) is missing required schema types: ${missingTypes.join(', ')}`);
      totalFailures++;
    } else {
      console.log(`✅ ${r.name} (${r.file}) passed!`);
      console.log(`   Found ${json['@graph'].length} connected entities: ${typesInGraph.join(', ')}`);
    }
  } catch (err) {
    console.error(`❌ Failed to parse JSON-LD in ${r.file}: ${err.message}`);
    totalFailures++;
  }
}

console.log(`\n=== AUDIT FINISHED: ${totalFailures} schema errors detected ===`);
if (totalFailures > 0) process.exit(1);
