const { execSync } = require('child_process');

function run(cmd) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

try {
  console.log('--- 1. BUILDING NEXT.JS STATIC EXPORT ---');
  run('npm run build');

  console.log('\n--- 2. COMMITTING AND PUSHING MAIN BRANCH ---');
  run('git add -A');
  try {
    run('git commit -m "chore: update build and static assets"');
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
