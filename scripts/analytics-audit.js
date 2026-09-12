const fs = require('fs');
const path = require('path');

const routes = [
  'index.html',
  'font-pairing-generator/index.html',
  'font-tester/index.html',
  'typography-generator/index.html',
  'serif-typeface-generator/index.html',
  'sans-serif-typeface-generator/index.html',
  'display-typeface-generator/index.html',
  'monospace-typeface-generator/index.html',
  'script-typeface-generator/index.html',
  'typeface-for-logos/index.html',
  'typeface-for-websites/index.html',
  'about/index.html',
  'privacy/index.html',
  'terms/index.html',
];

const outDir = path.join(__dirname, '..', 'out');
let failed = 0;

console.log('=== GOOGLE ANALYTICS 4 & COOKIE CONSENT ARCHITECTURE AUDIT ===\n');

for (const file of routes) {
  const fullPath = path.join(outDir, file);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ File missing: ${file}`);
    failed++;
    continue;
  }

  const html = fs.readFileSync(fullPath, 'utf-8');
  const hasGtag = html.includes('googletagmanager.com/gtag/js?id=G-HT87NWEHNT');
  const hasMeasurementId = html.includes('G-HT87NWEHNT');
  const hasConsent = html.includes("gtag('consent', 'default'");
  const hasCookieButton = html.includes('Cookie Preferences');

  if (!hasGtag || !hasMeasurementId || !hasConsent || !hasCookieButton) {
    console.error(`❌ ${file} failed: gtag=${hasGtag}, id=${hasMeasurementId}, consent=${hasConsent}, cookieBtn=${hasCookieButton}`);
    failed++;
  } else {
    console.log(`✅ ${file} passed: GA4 script, Consent Mode v2, and Cookie Preferences present.`);
  }
}

console.log(`\n=== AUDIT FINISHED: ${failed} errors detected ===`);
if (failed > 0) process.exit(1);
