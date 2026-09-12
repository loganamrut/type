const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, '..', 'public');

// 1. High-resolution, pixel-perfect 512x512 SVG
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <!-- Minimal Dark Rounded Squircle Base -->
  <rect width="512" height="512" rx="112" fill="#09090b"/>
  <rect x="2" y="2" width="508" height="508" rx="110" stroke="#27272a" stroke-width="4" fill="none"/>
  
  <!-- Architectural Typographic 'Tg' Monogram (pure vector paths for 100% device independence) -->
  <g fill="#ffffff">
    <!-- Capital T with balanced typographic proportions -->
    <path d="M96 144 h188 v44 h-22 v-14 h-48 v180 h36 v28 h-118 v-28 h36 v-180 h-48 v14 h-24 z"/>
    
    <!-- Modern Geometric 'g' with ear and loop, nested with the T stem -->
    <!-- Eyed circle of g -->
    <path fill-rule="evenodd" clip-rule="evenodd" d="M336 216 c-42 0 -72 30 -72 72 c0 44 30 74 72 74 c22 0 40 -8 52 -22 v18 c0 32 -16 48 -46 48 c-18 0 -34 -8 -40 -20 l-30 18 c14 26 40 38 72 38 c54 0 82 -30 82 -82 v-160 h-38 v16 c-12 -14 -30 -22 -52 -22 z m38 72 c0 26 -16 42 -38 42 c-22 0 -38 -16 -38 -42 c0 -24 16 -40 38 -40 c22 0 38 16 38 40 z"/>
  </g>
</svg>
`;

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);
console.log('✅ Created public/favicon.svg (512x512 vector)');

// 2. Generate PNGs using native macOS `sips`
function generatePng(size, filename) {
  const targetPath = path.join(publicDir, filename);
  // Convert SVG to PNG at native size first
  execSync(`sips -s format png "${path.join(publicDir, 'favicon.svg')}" --out "${targetPath}" 2>/dev/null`);
  // Resize to target dimensions
  execSync(`sips -z ${size} ${size} "${targetPath}" 2>/dev/null`);
  console.log(`✅ Generated ${filename} (${size}x${size})`);
}

generatePng(512, 'android-chrome-512x512.png');
generatePng(192, 'android-chrome-192x192.png');
generatePng(180, 'apple-touch-icon.png');
generatePng(180, 'apple-touch-icon-precomposed.png');
generatePng(48, 'favicon-48x48.png');
generatePng(32, 'favicon-32x32.png');
generatePng(16, 'favicon-16x16.png');

// 3. Construct multi-resolution ICO file (16x16, 32x32, 48x48)
function createIco(sizes, outputPath) {
  const images = sizes.map(size => {
    const pngPath = path.join(publicDir, `favicon-${size}x${size}.png`);
    const buffer = fs.readFileSync(pngPath);
    return { size, buffer };
  });

  const headerLength = 6;
  const directoryEntryLength = 16;
  const totalHeaderAndDirLength = headerLength + (directoryEntryLength * images.length);

  let currentOffset = totalHeaderAndDirLength;
  const entries = [];

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.size, 0); // width (0 = 256)
    entry.writeUInt8(img.size, 1); // height
    entry.writeUInt8(0, 2);        // color palette
    entry.writeUInt8(0, 3);        // reserved
    entry.writeUInt16LE(1, 4);     // color planes
    entry.writeUInt16LE(32, 6);    // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // size of image data
    entry.writeUInt32LE(currentOffset, 12);    // offset of image data
    entries.push(entry);
    currentOffset += img.buffer.length;
  }

  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // image type (1 = icon)
  icoHeader.writeUInt16LE(images.length, 4); // number of images

  const icoBuffer = Buffer.concat([icoHeader, ...entries, ...images.map(img => img.buffer)]);
  fs.writeFileSync(outputPath, icoBuffer);
  console.log(`✅ Generated multi-size favicon.ico (${sizes.join('x, ')}x) at ${outputPath}`);
}

createIco([16, 32, 48], path.join(publicDir, 'favicon.ico'));
console.log('\n🎉 ALL SEO & BROWSER FAVICONS GENERATED SUCCESSFULLY!');
