# TypefaceGen - Online Typeface Generator & Typography Studio

[![Deploy to GitHub Pages](https://github.com/loganamrut/type/actions/workflows/deploy.yml/badge.svg)](https://github.com/loganamrut/type/actions/workflows/deploy.yml)

TypefaceGen is a minimal, client-side online Typeface Generator and Typography Studio engineered for designers, frontend developers, and typographers. It enables real-time previewing, testing, comparing, and pairing of 200+ curated open-source typefaces with live custom copy and instant CSS export.

## Features

- **200+ Curated Typefaces**: Google Fonts and popular open-source typefaces across Serif, Sans-Serif, Display, Monospace, and Script categories with dynamic font subset streaming.
- **Copy Styled Text**: Cross-browser, multi-tier clipboard engine that copies both styled Unicode and rich HTML formatted copy.
- **Font Pairing Generator**: Match heading and body typefaces with curated contrast pairings, lock controls, and CSS rules.
- **Font Tester & Comparator**: Side-by-side multi-column typeface comparison inspector.
- **Modular Type Scale Calculator**: Interactive typographic scale generator with Golden Ratio, Major Third, Perfect Fourth, and Tailwind configuration export.
- **Minimal Pure White Theme**: High-contrast, clean typographic aesthetic with zero dark mode distraction.
- **Hidden Expandable Controls**: Collapsed by default with live badge indicators, expanding into full typography control sliders.
- **100% Client-Side Privacy**: Zero telemetry, zero server-side storage of user text.
- **Full On-Page SEO & Google Search Console Ready**: Schema.org JSON-LD (Organization, WebSite, WebApplication, BreadcrumbList, FAQPage), valid XML sitemap, and robots.txt.

## GitHub Pages Deployment

This repository is pre-configured for automated deployment to **GitHub Pages** via GitHub Actions:

1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Every push to the `main` branch automatically triggers `.github/workflows/deploy.yml`, builds the static export (`output: 'export'`), and publishes the site to GitHub Pages.

### Custom Domain (`typefacegen.com`)

The `public/CNAME` file is set to `typefacegen.com`. To link your custom domain:
- Configure your DNS provider with GitHub Pages IP addresses (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) or `CNAME` pointing to `loganamrut.github.io`.
- In GitHub **Settings** > **Pages**, confirm `typefacegen.com` is active with Enforce HTTPS.

## Local Development

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Run TypeScript type check
npm run type-check

# Build static production export (out/ folder)
npm run build
```

## License

MIT License. Previewed typefaces are licensed under the SIL Open Font License (OFL 1.1) or Apache 2.0.
