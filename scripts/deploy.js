const { execSync } = require('child_process');
const path = require('path');

function run(cmd) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

try {
  console.log('--- 0. GENERATING VECTOR & COMPRESSED INFOGRAPHIC ASSETS ---');
  run('node scripts/generate-infographic.js');

  console.log('\n--- 1. BUILDING NEXT.JS STATIC EXPORT ---');
  run('npm run build');

  console.log('\n--- 1.5. INLINING CRITICAL CSS FOR 0ms RENDER-BLOCKING ---');
  run('node scripts/optimize-html.js');

  console.log('\n--- 2. COMMITTING AND PUSHING MAIN BRANCH ---');
  run('git add -A');
  try {
    run('git commit -m "feat(seo): add How It Works wide infographic, Google Image Sitemap, ImageObject schema, and on-page jump navigation"');
  } catch (e) {
    console.log('No new changes to commit on main.');
  }
  run('git push origin main');

  console.log('\n--- 3. DEPLOYING TO GH-PAGES BRANCH ---');
  run('(cd out && rm -rf .git && git init -b gh-pages && git config user.name "loganamrut" && git config user.email "loganamrut@users.noreply.github.com" && git add -A && git commit -m "deploy: static export for GitHub Pages" && git remote add origin $(git -C .. config --get remote.origin.url) && git push -f origin gh-pages && rm -rf .git)');

  console.log('\n✅ DEPLOYMENT COMPLETE! Pushed to main and gh-pages branches.');
} catch (err) {
  console.error('\n❌ Deployment failed:', err.message);
  process.exit(1);
}
