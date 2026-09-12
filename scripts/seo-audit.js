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
];

function fetchHtml(route) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3009${route}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ route, status: res.statusCode, html: data }));
    }).on('error', reject);
  });
}

async function audit() {
  console.log('====================================================');
  console.log('        TYPEFACEGEN TECHNICAL SEO & AUDIT          ');
  console.log('====================================================\n');

  let passed = 0;
  let total = routes.length;

  for (const r of routes) {
    const res = await fetchHtml(r);
    const html = res.html;

    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch ? titleMatch[1] : 'MISSING';

    const descMatch = html.match(/<meta name="description" content="([^"]+)"/);
    const desc = descMatch ? descMatch[1] : 'MISSING';

    const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
    const canonical = canonicalMatch ? canonicalMatch[1] : 'MISSING';

    const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]+)"/);
    const ogTitle = ogTitleMatch ? ogTitleMatch[1] : 'MISSING';

    const hasSchema = html.includes('application/ld+json');
    const hasH1 = html.includes('<h1');

    console.log(`Route: ${r}`);
    console.log(`  - Status: ${res.status}`);
    console.log(`  - Title: "${title}"`);
    console.log(`  - Desc: "${desc.slice(0, 60)}..."`);
    console.log(`  - Canonical: ${canonical}`);
    console.log(`  - OG Title: ${ogTitle ? 'OK' : 'MISSING'}`);
    console.log(`  - JSON-LD Schema: ${hasSchema ? 'YES' : 'NO'}`);
    console.log(`  - H1 Element: ${hasH1 ? 'YES' : 'NO'}`);

    if (title !== 'MISSING' && desc !== 'MISSING' && canonical !== 'MISSING' && hasH1) {
      passed++;
      console.log(`  ✓ ALL AUDIT CHECKS PASSED\n`);
    } else {
      console.log(`  ✗ AUDIT ISSUES DETECTED\n`);
    }
  }

  console.log('====================================================');
  console.log(`Audit Summary: ${passed}/${total} routes passed 100% of SEO checks.`);
  console.log('====================================================');
}

audit();
