const http = require('http');

const routes = [
  '/',
  '/font-pairing-generator',
  '/font-tester',
  '/typography-generator',
  '/serif-typeface-generator',
  '/sans-serif-typeface-generator',
  '/display-typeface-generator',
  '/monospace-typeface-generator',
  '/script-typeface-generator',
  '/typeface-for-logos',
  '/typeface-for-websites',
  '/about',
  '/privacy',
  '/terms',
  '/sitemap.xml',
  '/robots.txt',
  '/favicon.svg',
  '/og-image.png',
  '/site.webmanifest',
];

async function fetchRoute(route) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:3009${route}`, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve({ route, statusCode: res.statusCode, body: data, headers: res.headers });
      });
    });
    req.on('error', (err) => {
      resolve({ route, statusCode: 'ERR', error: err.message });
    });
  });
}

async function run() {
  console.log('=== TYPEFACEGEN COMPLETE SEO & GSC ARCHITECTURE AUDIT ===\n');
  let failures = 0;

  for (const r of routes) {
    const res = await fetchRoute(r);
    if (res.statusCode !== 200) {
      console.error(`❌ [${res.statusCode}] ${r} - Failed`);
      failures++;
      continue;
    }

    if (r.endsWith('.xml') || r.endsWith('.txt') || r.endsWith('.svg') || r.endsWith('.png') || r.endsWith('.webmanifest')) {
      console.log(`✅ [${res.statusCode}] ${r} (${res.headers['content-type'] || 'binary'})`);
      if (r === '/robots.txt') {
        const hasSitemap = res.body.includes('sitemap.xml');
        const hasAllow = res.body.includes('Allow: /');
        console.log(`   Robots valid: sitemap=${hasSitemap}, allow=${hasAllow}`);
      }
      if (r === '/sitemap.xml') {
        const urlCount = (res.body.match(/<url>/g) || []).length;
        console.log(`   Sitemap valid: contains ${urlCount} indexed URLs`);
      }
      continue;
    }

    // HTML audit
    const titleMatch = res.body.match(/<title>([^<]*)<\/title>/);
    const title = titleMatch ? titleMatch[1] : 'MISSING';

    const descMatch = res.body.match(/<meta name="description" content="([^"]*)"/);
    const desc = descMatch ? descMatch[1] : 'MISSING';

    const canonicalMatch = res.body.match(/<link rel="canonical" href="([^"]*)"/);
    const canonical = canonicalMatch ? canonicalMatch[1] : 'MISSING';

    const h1Matches = res.body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    const h1Count = h1Matches.length;

    const jsonLdMatches = res.body.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || [];
    const jsonLdCount = jsonLdMatches.length;

    const hasOgTitle = res.body.includes('property="og:title"');
    const hasTwitterCard = res.body.includes('name="twitter:card"');

    const issues = [];
    if (title === 'MISSING') issues.push('missing title');
    if (desc === 'MISSING') issues.push('missing description');
    if (canonical === 'MISSING') issues.push('missing canonical');
    if (h1Count !== 1) issues.push(`H1 count = ${h1Count}`);
    if (jsonLdCount === 0) issues.push('missing JSON-LD');
    if (!hasOgTitle) issues.push('missing og:title');
    if (!hasTwitterCard) issues.push('missing twitter:card');

    if (issues.length > 0) {
      console.error(`⚠️  [${res.statusCode}] ${r}: ISSUES: ${issues.join(', ')}`);
      failures++;
    } else {
      console.log(`✅ [${res.statusCode}] ${r}`);
      console.log(`   Title: "${title.slice(0, 60)}${title.length > 60 ? '...' : ''}" (${title.length} chars)`);
      console.log(`   Canonical: ${canonical}`);
      console.log(`   H1 Count: ${h1Count}, JSON-LD Scripts: ${jsonLdCount}`);
    }
  }

  console.log(`\n=== AUDIT COMPLETE: ${failures} errors detected ===`);
}

run();
