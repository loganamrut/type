// Dynamic Web Font Loader with Deduplication and Zero-CLS Fallback

const loadedFonts = new Set<string>();
let preconnectAdded = false;

export function initFontPreconnect() {
  if (typeof window === 'undefined' || preconnectAdded) return;

  if (!document.querySelector('link[href="https://fonts.googleapis.com"]')) {
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);
  }

  if (!document.querySelector('link[href="https://fonts.gstatic.com"]')) {
    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);
  }

  preconnectAdded = true;
}

export function loadGoogleFont(googleFontQuery: string, fontId: string): void {
  if (typeof window === 'undefined') return;
  if (loadedFonts.has(fontId)) return;

  initFontPreconnect();

  const elementId = `font-${fontId}`;
  if (document.getElementById(elementId)) {
    loadedFonts.add(fontId);
    return;
  }

  const link = document.createElement('link');
  link.id = elementId;
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${googleFontQuery}&display=swap`;
  link.setAttribute('data-typeface-id', fontId);

  link.onload = () => {
    loadedFonts.add(fontId);
  };

  link.onerror = () => {
    // Graceful fallback - prevent breaking if network blocks fonts
    console.warn(`[TypefaceGen] Failed to load font: ${fontId}, falling back to system metrics.`);
  };

  document.head.appendChild(link);
  loadedFonts.add(fontId);
}

export function loadBatchGoogleFonts(fonts: { googleFontQuery: string; id: string }[]): void {
  if (typeof window === 'undefined' || !fonts.length) return;
  fonts.forEach((f) => loadGoogleFont(f.googleFontQuery, f.id));
}
