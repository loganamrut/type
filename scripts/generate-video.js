const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const ffmpegPath = require('ffmpeg-static');
const { execSync } = require('child_process');

const TOTAL_FRAMES = 240; // 20 seconds at 12 fps
const FPS = 12;
const WIDTH = 1200;
const HEIGHT = 676;

// Helper to escape XML
function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderFrame(frameIdx) {
  const time = frameIdx / FPS; // 0.0 to 20.0 seconds

  // Determine active step (1 to 4)
  let activeStep = 1;
  let stepLabel = 'Step 1: Input Custom Copy';
  if (time >= 3.0 && time < 7.5) {
    activeStep = 1;
    stepLabel = 'Step 1: Enter Live Custom Copy';
  } else if (time >= 7.5 && time < 12.0) {
    activeStep = 2;
    stepLabel = 'Step 2: Filter & Compare Typefaces';
  } else if (time >= 12.0 && time < 16.5) {
    activeStep = 3;
    stepLabel = 'Step 3: Adjust Typographic Metrics';
  } else if (time >= 16.5) {
    activeStep = 4;
    stepLabel = 'Step 4: Export Production CSS Code';
  }

  // Animation parameters
  // 1. Text typing effect for Step 1
  const fullText = 'Modern Typography Studio';
  let typedText = 'Your text here';
  if (time >= 3.0 && time < 7.5) {
    const progress = Math.min(1, Math.max(0, (time - 3.2) / 3.0));
    const charsToShow = Math.floor(progress * fullText.length);
    typedText = fullText.slice(0, charsToShow);
  } else if (time >= 7.5) {
    typedText = fullText;
  }
  const cursorBlink = Math.floor(time * 3) % 2 === 0;

  // 2. Filter selection for Step 2
  let selectedFilter = 'All';
  let activeFont = 'Inter';
  let fontCategory = 'SANS-SERIF';
  if (time >= 7.5 && time < 9.0) {
    selectedFilter = 'Serif';
    activeFont = 'Playfair Display';
    fontCategory = 'SERIF';
  } else if (time >= 9.0 && time < 10.5) {
    selectedFilter = 'Sans';
    activeFont = 'Inter';
    fontCategory = 'SANS';
  } else if (time >= 10.5) {
    selectedFilter = 'Mono';
    activeFont = 'JetBrains Mono';
    fontCategory = 'MONO';
  }

  // 3. Metric sliders for Step 3
  let fontSize = 32;
  let fontWeight = 400;
  let lineHeight = 1.2;
  let letterSpacing = '0.00em';
  let sliderSizeWidth = 100;
  let sliderWeightWidth = 80;

  if (time >= 12.0 && time < 16.5) {
    const p = Math.min(1, Math.max(0, (time - 12.2) / 3.5));
    fontSize = Math.round(20 + p * 28); // 20px -> 48px
    fontWeight = p > 0.5 ? 700 : 500;
    lineHeight = (1.2 + p * 0.3).toFixed(1);
    letterSpacing = (-p * 0.03).toFixed(2) + 'em';
    sliderSizeWidth = Math.round(50 + p * 120);
    sliderWeightWidth = Math.round(40 + p * 130);
  } else if (time >= 16.5) {
    fontSize = 48;
    fontWeight = 700;
    lineHeight = '1.5';
    letterSpacing = '-0.03em';
    sliderSizeWidth = 170;
    sliderWeightWidth = 170;
  }

  // 4. Code copy toast for Step 4
  const isCopied = time >= 18.0;

  // Timeline progress percentage (0 to 100)
  const timelinePct = Math.min(100, Math.round((time / 20.0) * 100));

  return `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="card-shadow" x="-5%" y="-5%" width="110%" height="115%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#09090b" flood-opacity="0.06" />
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#09090b" flood-opacity="0.04" />
    </filter>
  </defs>

  <!-- Clean Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#ffffff"/>
  <!-- Sub-canvas -->
  <rect x="16" y="16" width="1168" height="643" rx="16" fill="#fafafa" stroke="#e4e4e7" stroke-width="1.5"/>

  <!-- Top Video Status Bar -->
  <g transform="translate(48, 32)">
    <rect width="180" height="28" rx="14" fill="#09090b"/>
    <circle cx="16" cy="14" r="4.5" fill="#ef4444"/>
    <text x="28" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#ffffff" letter-spacing="0.08em">VIDEO WALKTHROUGH</text>
  </g>

  <!-- Step Status Indicator Pill -->
  <g transform="translate(470, 32)">
    <rect width="260" height="28" rx="14" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1"/>
    <circle cx="16" cy="14" r="4" fill="#10b981"/>
    <text x="28" y="18" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="600" fill="#27272a">${escapeXml(stepLabel)}</text>
  </g>

  <!-- Timer Pill -->
  <g transform="translate(1016, 32)">
    <rect width="136" height="28" rx="6" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
    <text x="68" y="18" font-family="SFMono-Regular, Menlo, monospace" font-size="11" font-weight="600" fill="#71717a" text-anchor="middle">
      00:${String(Math.floor(time)).padStart(2, '0')} / 00:20
    </text>
  </g>

  <!-- Main Headline -->
  <text x="600" y="96" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800" fill="#09090b" text-anchor="middle" letter-spacing="-0.03em">
    How the Online Typeface Generator Works
  </text>
  <text x="600" y="122" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="400" fill="#71717a" text-anchor="middle">
    Live interactive workflow demonstration: preview, compare, customize metrics, and export CSS.
  </text>

  <!-- Horizontal Timeline Connector Line -->
  <line x1="180" y1="168" x2="1020" y2="168" stroke="#e4e4e7" stroke-width="2"/>
  <line x1="180" y1="168" x2="${180 + (timelinePct / 100) * 840}" y2="168" stroke="#09090b" stroke-width="2"/>

  <!-- STEP 1 NODE -->
  <g transform="translate(170, 148)">
    <circle cx="20" cy="20" r="18" fill="${activeStep === 1 ? '#09090b' : '#ffffff'}" stroke="${activeStep === 1 ? '#09090b' : '#d4d4d8'}" stroke-width="2.5"/>
    <text x="20" y="25" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="${activeStep === 1 ? '#ffffff' : '#71717a'}" text-anchor="middle">1</text>
    <text x="20" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="${activeStep === 1 ? '700' : '500'}" fill="${activeStep === 1 ? '#09090b' : '#71717a'}" text-anchor="middle">Input Text</text>
  </g>

  <!-- STEP 2 NODE -->
  <g transform="translate(440, 148)">
    <circle cx="20" cy="20" r="18" fill="${activeStep === 2 ? '#09090b' : '#ffffff'}" stroke="${activeStep === 2 ? '#09090b' : '#d4d4d8'}" stroke-width="2.5"/>
    <text x="20" y="25" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="${activeStep === 2 ? '#ffffff' : '#71717a'}" text-anchor="middle">2</text>
    <text x="20" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="${activeStep === 2 ? '700' : '500'}" fill="${activeStep === 2 ? '#09090b' : '#71717a'}" text-anchor="middle">Filter Fonts</text>
  </g>

  <!-- STEP 3 NODE -->
  <g transform="translate(710, 148)">
    <circle cx="20" cy="20" r="18" fill="${activeStep === 3 ? '#09090b' : '#ffffff'}" stroke="${activeStep === 3 ? '#09090b' : '#d4d4d8'}" stroke-width="2.5"/>
    <text x="20" y="25" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="${activeStep === 3 ? '#ffffff' : '#71717a'}" text-anchor="middle">3</text>
    <text x="20" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="${activeStep === 3 ? '700' : '500'}" fill="${activeStep === 3 ? '#09090b' : '#71717a'}" text-anchor="middle">Tune Metrics</text>
  </g>

  <!-- STEP 4 NODE -->
  <g transform="translate(980, 148)">
    <circle cx="20" cy="20" r="18" fill="${activeStep === 4 ? '#09090b' : '#ffffff'}" stroke="${activeStep === 4 ? '#09090b' : '#d4d4d8'}" stroke-width="2.5"/>
    <text x="20" y="25" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="${activeStep === 4 ? '#ffffff' : '#71717a'}" text-anchor="middle">4</text>
    <text x="20" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="${activeStep === 4 ? '700' : '500'}" fill="${activeStep === 4 ? '#09090b' : '#71717a'}" text-anchor="middle">Export CSS</text>
  </g>

  <!-- DYNAMIC ACTIVE STAGE DISPLAY (CENTER SHOWCASE) -->
  <g transform="translate(48, 222)" filter="url(#card-shadow)">
    <rect width="1104" height="350" rx="14" fill="#ffffff" stroke="${activeStep === 4 ? '#27272a' : '#e4e4e7'}" stroke-width="1.5"/>

    ${
      activeStep === 1
        ? `
      <!-- STAGE 1: LIVE INPUT INTERACTION -->
      <g transform="translate(40, 36)">
        <rect width="120" height="24" rx="4" fill="#09090b"/>
        <text x="60" y="16" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">STEP 1 / INPUT</text>

        <text x="0" y="56" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="800" fill="#09090b">Enter Your Custom Headline or Copy</text>
        <text x="0" y="78" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#71717a">Type any text in the live reactivity bar. All open-source typefaces update immediately.</text>

        <!-- Mock Input Field -->
        <g transform="translate(0, 100)">
          <rect width="600" height="60" rx="8" fill="#ffffff" stroke="#09090b" stroke-width="2"/>
          <text x="20" y="38" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="600" fill="#09090b">${escapeXml(typedText)}</text>
          ${cursorBlink ? `<line x1="${24 + typedText.length * 11}" y1="20" x2="${24 + typedText.length * 11}" y2="44" stroke="#2563eb" stroke-width="2.5"/>` : ''}
          <text x="580" y="36" font-family="SFMono-Regular, monospace" font-size="11" fill="#a1a1aa" text-anchor="end">${typedText.length} chars</text>
        </g>

        <!-- Reactive DOM status pill -->
        <g transform="translate(0, 180)">
          <rect width="280" height="36" rx="6" fill="#f4f4f5" stroke="#e4e4e7"/>
          <circle cx="18" cy="18" r="4.5" fill="#10b981"/>
          <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" font-weight="600" fill="#09090b">Reactive DOM Sync: Active (0ms)</text>
        </g>
      </g>

      <!-- Live Preview Specimen on right side -->
      <g transform="translate(690, 40)">
        <rect width="374" height="270" rx="10" fill="#fafafa" stroke="#e4e4e7" stroke-width="1.5"/>
        <text x="24" y="34" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#71717a">LIVE CARD PREVIEW</text>
        <text x="24" y="60" font-family="Georgia, serif" font-size="24" font-weight="700" fill="#09090b">Playfair Display</text>
        <text x="24" y="110" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#09090b">${escapeXml(typedText || 'Your text here')}</text>
        <text x="24" y="180" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="500" fill="#52525b">Editorial serif typeface inspired by John Baskerville.</text>
        
        <rect x="24" y="210" width="100" height="32" rx="6" fill="#09090b"/>
        <text x="74" y="230" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="600" fill="#ffffff" text-anchor="middle">Copy CSS</text>
      </g>
      `
        : activeStep === 2
        ? `
      <!-- STAGE 2: FILTER & COMPARE FONTS -->
      <g transform="translate(40, 36)">
        <rect width="130" height="24" rx="4" fill="#09090b"/>
        <text x="65" y="16" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">STEP 2 / FILTER</text>

        <text x="0" y="56" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="800" fill="#09090b">Filter &amp; Compare 200+ Open Source Fonts</text>
        <text x="0" y="78" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#71717a">Switch classifications instantly to compare visual weight, x-height, and proportions.</text>

        <!-- Filter Buttons -->
        <g transform="translate(0, 96)">
          ${['All', 'Serif', 'Sans', 'Mono'].map((f, i) => {
            const isSel = selectedFilter === f;
            return `
              <rect x="${i * 90}" width="80" height="34" rx="6" fill="${isSel ? '#09090b' : '#f4f4f5'}" stroke="${isSel ? '#09090b' : '#e4e4e7'}"/>
              <text x="${i * 90 + 40}" y="21" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="600" fill="${isSel ? '#ffffff' : '#52525b'}" text-anchor="middle">${f}</text>
            `;
          }).join('')}
        </g>

        <!-- Active Classification Specimen Details -->
        <g transform="translate(0, 150)">
          <rect width="400" height="110" rx="8" fill="#f4f4f5" stroke="#e4e4e7"/>
          <text x="16" y="28" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#71717a">CLASSIFICATION: ${fontCategory}</text>
          <text x="16" y="56" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="700" fill="#09090b">${activeFont}</text>
          <text x="16" y="84" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#52525b">Curated Google web font with full unicode character support.</text>
        </g>
      </g>

      <!-- 3 Side-by-Side Comparison Cards on Right -->
      <g transform="translate(500, 36)">
        <g transform="translate(0, 0)">
          <rect width="560" height="76" rx="8" fill="${activeFont === 'Playfair Display' ? '#ffffff' : '#fafafa'}" stroke="${activeFont === 'Playfair Display' ? '#09090b' : '#e4e4e7'}" stroke-width="${activeFont === 'Playfair Display' ? '2' : '1'}"/>
          <text x="20" y="24" font-family="Georgia, serif" font-size="12" font-weight="700" fill="#71717a">Playfair Display (Serif)</text>
          <text x="20" y="56" font-family="Georgia, serif" font-size="20" font-weight="700" fill="#09090b">Modern Typography Studio</text>
          <rect x="460" y="22" width="80" height="28" rx="4" fill="#f4f4f5"/>
          <text x="500" y="40" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="600" fill="#27272a" text-anchor="middle">SERIF</text>
        </g>

        <g transform="translate(0, 94)">
          <rect width="560" height="76" rx="8" fill="${activeFont === 'Inter' ? '#ffffff' : '#fafafa'}" stroke="${activeFont === 'Inter' ? '#09090b' : '#e4e4e7'}" stroke-width="${activeFont === 'Inter' ? '2' : '1'}"/>
          <text x="20" y="24" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="#71717a">Inter (Sans-Serif)</text>
          <text x="20" y="56" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="600" fill="#09090b">Modern Typography Studio</text>
          <rect x="460" y="22" width="80" height="28" rx="4" fill="#f4f4f5"/>
          <text x="500" y="40" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="600" fill="#27272a" text-anchor="middle">SANS</text>
        </g>

        <g transform="translate(0, 188)">
          <rect width="560" height="76" rx="8" fill="${activeFont === 'JetBrains Mono' ? '#ffffff' : '#fafafa'}" stroke="${activeFont === 'JetBrains Mono' ? '#09090b' : '#e4e4e7'}" stroke-width="${activeFont === 'JetBrains Mono' ? '2' : '1'}"/>
          <text x="20" y="24" font-family="SFMono-Regular, Menlo, monospace" font-size="12" font-weight="700" fill="#71717a">JetBrains Mono (Monospace)</text>
          <text x="20" y="56" font-family="SFMono-Regular, Menlo, monospace" font-size="18" font-weight="600" fill="#09090b">Modern Typography Studio</text>
          <rect x="460" y="22" width="80" height="28" rx="4" fill="#f4f4f5"/>
          <text x="500" y="40" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="600" fill="#27272a" text-anchor="middle">MONO</text>
        </g>
      </g>
      `
        : activeStep === 3
        ? `
      <!-- STAGE 3: TUNE TYPOGRAPHIC METRICS -->
      <g transform="translate(40, 36)">
        <rect width="130" height="24" rx="4" fill="#09090b"/>
        <text x="65" y="16" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">STEP 3 / METRICS</text>

        <text x="0" y="56" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="800" fill="#09090b">Real-Time Typographic Controls</text>
        <text x="0" y="78" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#71717a">Expand any specimen card to adjust font size, weight axis, and spacing.</text>

        <!-- Slider 1: Font Size -->
        <g transform="translate(0, 96)">
          <text x="0" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="600" fill="#09090b">Font Size</text>
          <text x="400" y="12" font-family="SFMono-Regular, monospace" font-size="12" font-weight="700" fill="#2563eb" text-anchor="end">${fontSize}px</text>
          <rect y="22" width="400" height="8" rx="4" fill="#e4e4e7"/>
          <rect y="22" width="${sliderSizeWidth}" height="8" rx="4" fill="#09090b"/>
          <circle cx="${sliderSizeWidth}" cy="26" r="10" fill="#ffffff" stroke="#09090b" stroke-width="2.5"/>
        </g>

        <!-- Slider 2: Font Weight -->
        <g transform="translate(0, 150)">
          <text x="0" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="600" fill="#09090b">Weight Axis</text>
          <text x="400" y="12" font-family="SFMono-Regular, monospace" font-size="12" font-weight="700" fill="#2563eb" text-anchor="end">${fontWeight} ${fontWeight >= 700 ? 'Bold' : 'Regular'}</text>
          <rect y="22" width="400" height="8" rx="4" fill="#e4e4e7"/>
          <rect y="22" width="${sliderWeightWidth}" height="8" rx="4" fill="#09090b"/>
          <circle cx="${sliderWeightWidth}" cy="26" r="10" fill="#ffffff" stroke="#09090b" stroke-width="2.5"/>
        </g>

        <!-- Line Height & Letter Spacing -->
        <g transform="translate(0, 204)">
          <rect width="190" height="48" rx="6" fill="#f4f4f5" stroke="#e4e4e7"/>
          <text x="12" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="600" fill="#71717a">LINE HEIGHT</text>
          <text x="12" y="38" font-family="SFMono-Regular, monospace" font-size="14" font-weight="700" fill="#09090b">${lineHeight}</text>

          <rect x="210" width="190" height="48" rx="6" fill="#f4f4f5" stroke="#e4e4e7"/>
          <text x="222" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="600" fill="#71717a">LETTER SPACING</text>
          <text x="222" y="38" font-family="SFMono-Regular, monospace" font-size="14" font-weight="700" fill="#09090b">${letterSpacing}</text>
        </g>
      </g>

      <!-- Live Reactive Typography Canvas on Right -->
      <g transform="translate(500, 36)">
        <rect width="560" height="268" rx="10" fill="#ffffff" stroke="#09090b" stroke-width="2"/>
        <text x="24" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#71717a">LIVE RENDERED SPECIMEN</text>
        <text x="24" y="70" font-family="Georgia, serif" font-size="18" font-weight="700" fill="#09090b">Playfair Display</text>
        
        <!-- Animated Headline Text -->
        <text x="24" y="140" font-family="Georgia, serif" font-size="${Math.min(42, fontSize)}" font-weight="${fontWeight}" fill="#09090b" letter-spacing="${letterSpacing}">
          Modern Typography
        </text>
        <text x="24" y="195" font-family="Georgia, serif" font-size="${Math.min(32, fontSize * 0.75)}" font-weight="${fontWeight}" fill="#52525b" letter-spacing="${letterSpacing}">
          Studio &amp; Font Tester
        </text>

        <rect x="24" y="222" width="220" height="26" rx="4" fill="#f4f4f5"/>
        <text x="34" y="239" font-family="SFMono-Regular, monospace" font-size="10" fill="#27272a">font-size: ${fontSize}px | weight: ${fontWeight}</text>
      </g>
      `
        : `
      <!-- STAGE 4: EXPORT CSS & CODE -->
      <g transform="translate(40, 36)">
        <rect width="130" height="24" rx="4" fill="#09090b"/>
        <text x="65" y="16" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">STEP 4 / EXPORT</text>

        <text x="0" y="56" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="800" fill="#09090b">Production-Ready CSS &amp; Unicode</text>
        <text x="0" y="78" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#71717a">Export clean Google Fonts @import rules, Tailwind classes, or styled Unicode text.</text>

        <!-- Copy Action Button -->
        <g transform="translate(0, 100)">
          <rect width="360" height="48" rx="8" fill="${isCopied ? '#10b981' : '#09090b'}"/>
          <path d="M24 24 L29 29 L38 20" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <text x="48" y="29" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">
            ${isCopied ? '✓ Copied CSS to Clipboard!' : 'Copy Production CSS Rules'}
          </text>
          <rect x="290" y="12" width="56" height="24" rx="4" fill="rgba(255,255,255,0.2)"/>
          <text x="318" y="28" font-family="SFMono-Regular, monospace" font-size="11" font-weight="600" fill="#ffffff" text-anchor="middle">⌘C</text>
        </g>

        <!-- Copy Unicode Text Button -->
        <g transform="translate(0, 160)">
          <rect width="360" height="44" rx="8" fill="#f4f4f5" stroke="#e4e4e7"/>
          <text x="180" y="27" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="600" fill="#09090b" text-anchor="middle">Copy Styled Unicode Text</text>
        </g>

        <!-- Success Toast Notification -->
        ${
          isCopied
            ? `
          <g transform="translate(0, 220)">
            <rect width="360" height="38" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/>
            <circle cx="20" cy="19" r="6" fill="#10b981"/>
            <path d="M17 19 L19 21 L23 17" stroke="#ffffff" stroke-width="1.8" fill="none"/>
            <text x="34" y="23" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" font-weight="600" fill="#065f46">
              CSS copied! Ready for Tailwind, Next.js &amp; HTML.
            </text>
          </g>
        `
            : ''
        }
      </g>

      <!-- Code Snippet IDE Window on Right -->
      <g transform="translate(480, 30)">
        <rect width="580" height="280" rx="10" fill="#18181b" stroke="#27272a" stroke-width="1.5"/>
        
        <!-- IDE Window Header -->
        <circle cx="22" cy="18" r="4" fill="#ef4444"/>
        <circle cx="34" cy="18" r="4" fill="#f59e0b"/>
        <circle cx="46" cy="18" r="4" fill="#10b981"/>
        <text x="290" y="22" font-family="SFMono-Regular, Menlo, monospace" font-size="11" fill="#a1a1aa" text-anchor="middle">typography.css</text>

        <!-- Code lines -->
        <g transform="translate(24, 44)" font-family="SFMono-Regular, Menlo, monospace" font-size="12">
          <text x="0" y="20" fill="#6ee7b7">@import <tspan fill="#fde047">url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700');</tspan></text>
          <text x="0" y="48" fill="#93c5fd">.heading-primary <tspan fill="#ffffff">{</tspan></text>
          <text x="20" y="74" fill="#cbd5e1">font-family: <tspan fill="#fca5a5">'Playfair Display'</tspan>, serif;</text>
          <text x="20" y="98" fill="#cbd5e1">font-size: <tspan fill="#fde047">48px</tspan>;</text>
          <text x="20" y="122" fill="#cbd5e1">font-weight: <tspan fill="#fde047">700</tspan>;</text>
          <text x="20" y="146" fill="#cbd5e1">line-height: <tspan fill="#fde047">1.5</tspan>;</text>
          <text x="20" y="170" fill="#cbd5e1">letter-spacing: <tspan fill="#fde047">-0.03em</tspan>;</text>
          <text x="0" y="196" fill="#ffffff">}</text>
        </g>
      </g>
      `
    }
  </g>

  <!-- Bottom Brand & Controls Bar -->
  <g transform="translate(48, 595)">
    <rect width="1104" height="42" rx="8" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
    <circle cx="24" cy="21" r="5" fill="#10b981"/>
    <text x="38" y="25" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="#09090b">TypefaceGen.com</text>
    <text x="150" y="25" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#71717a">
      • 200+ Open Source Web Fonts  •  Instant DOM Sync  •  100% Client-Side Private  •  Zero Latency
    </text>
    <rect x="980" y="9" width="108" height="24" rx="4" fill="#f4f4f5" stroke="#e4e4e7"/>
    <text x="1034" y="25" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="600" fill="#09090b" text-anchor="middle">TRY NOW FREE</text>
  </g>
</svg>
`;
}

// Generate WebVTT captions
const WEBVTT_CONTENT = `WEBVTT - How Typeface Generator Works Video Walkthrough

1
00:00:00.000 --> 00:00:03.000
Welcome to TypefaceGen. How the online typeface generator works in 4 simple steps.

2
00:00:03.000 --> 00:00:07.500
Step 1: Input custom copy. Type or paste text to preview across 200+ fonts with real-time DOM sync.

3
00:00:07.500 --> 00:00:12.000
Step 2: Filter and compare typefaces by category including Serif, Sans-Serif, Display, and Monospace.

4
00:00:12.000 --> 00:00:16.500
Step 3: Adjust typography metrics. Tune font size, weight axis, line height, and letter spacing live.

5
00:00:16.500 --> 00:00:20.000
Step 4: Export production CSS and styled Unicode. One-click copy for web projects and mockups.
`;

async function main() {
  const tmpDir = '/tmp/typefacegen_video_frames';
  const videosDir = path.join(__dirname, '..', 'public', 'videos');
  const publicDir = path.join(__dirname, '..', 'public');

  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
  if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir, { recursive: true });

  const force = process.argv.includes('--force');
  const mp4Exists = fs.existsSync(path.join(videosDir, 'how-typeface-generator-works.mp4'));
  const webmExists = fs.existsSync(path.join(videosDir, 'how-typeface-generator-works.webm'));
  if (!force && mp4Exists && webmExists) {
    console.log('✓ Video files already exist in public/videos/. Skipping frame generation. (Pass --force to regenerate)');
    return;
  }

  console.log(`1. Generating ${TOTAL_FRAMES} SVG frames (${TOTAL_FRAMES / FPS}s @ ${FPS}fps)...`);
  const batchSize = 24;
  for (let i = 0; i < TOTAL_FRAMES; i += batchSize) {
    const promises = [];
    for (let j = i; j < Math.min(TOTAL_FRAMES, i + batchSize); j++) {
      const svg = renderFrame(j);
      const framePath = path.join(tmpDir, `frame_${String(j).padStart(4, '0')}.png`);
      promises.push(sharp(Buffer.from(svg)).png().toFile(framePath));
    }
    await Promise.all(promises);
    process.stdout.write(`   Rendered frames ${i + 1} to ${Math.min(TOTAL_FRAMES, i + batchSize)} of ${TOTAL_FRAMES}\r`);
  }
  console.log(`\n✓ All ${TOTAL_FRAMES} frames rendered successfully.`);

  // Save poster frame (frame 0)
  const posterPath = path.join(videosDir, 'how-typeface-generator-works-poster.jpg');
  await sharp(path.join(tmpDir, 'frame_0000.png'))
    .jpeg({ quality: 90 })
    .toFile(posterPath);
  fs.copyFileSync(posterPath, path.join(publicDir, 'how-typeface-generator-works-poster.jpg'));
  console.log('✓ Wrote video poster image.');

  // Save WebVTT caption file
  const vttPath = path.join(videosDir, 'how-typeface-generator-works.vtt');
  fs.writeFileSync(vttPath, WEBVTT_CONTENT.trim());
  fs.copyFileSync(vttPath, path.join(publicDir, 'how-typeface-generator-works.vtt'));
  console.log('✓ Wrote WebVTT caption file.');

  // Encode MP4 (H.264, web-friendly, faststart)
  console.log('2. Encoding MP4 video (H.264, 1200x675)...');
  const mp4Path = path.join(videosDir, 'how-typeface-generator-works.mp4');
  if (fs.existsSync(mp4Path)) fs.unlinkSync(mp4Path);
  execSync(
    `${ffmpegPath} -y -framerate ${FPS} -i "${tmpDir}/frame_%04d.png" -c:v libx264 -profile:v high -level:v 4.0 -pix_fmt yuv420p -crf 22 -movflags +faststart "${mp4Path}"`,
    { stdio: 'inherit' }
  );
  fs.copyFileSync(mp4Path, path.join(publicDir, 'how-typeface-generator-works.mp4'));
  const mp4Size = fs.statSync(mp4Path).size;
  console.log(`✓ Wrote MP4 video: ${(mp4Size / 1024 / 1024).toFixed(2)} MB`);

  // Encode WebM (VP9, web-optimized)
  console.log('3. Encoding WebM video (VP9, 1200x675)...');
  const webmPath = path.join(videosDir, 'how-typeface-generator-works.webm');
  if (fs.existsSync(webmPath)) fs.unlinkSync(webmPath);
  execSync(
    `${ffmpegPath} -y -framerate ${FPS} -i "${tmpDir}/frame_%04d.png" -c:v libvpx-vp9 -b:v 800k -crf 30 "${webmPath}"`,
    { stdio: 'inherit' }
  );
  fs.copyFileSync(webmPath, path.join(publicDir, 'how-typeface-generator-works.webm'));
  const webmSize = fs.statSync(webmPath).size;
  console.log(`✓ Wrote WebM video: ${(webmSize / 1024 / 1024).toFixed(2)} MB`);

  console.log('✅ Video generation complete!');
}

main().catch((err) => {
  console.error('Video generation failed:', err);
  process.exit(1);
});
