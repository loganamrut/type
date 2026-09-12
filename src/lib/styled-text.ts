// Unicode Styled Text Converter & Rich Text Clipboard Helper
// Allows copying styled fonts that work anywhere (social media, bios, docs, chat) like font generators do.

export type StyleVariant =
  | 'serif-bold'
  | 'serif-italic'
  | 'serif-bold-italic'
  | 'sans'
  | 'sans-bold'
  | 'sans-italic'
  | 'sans-bold-italic'
  | 'monospace'
  | 'script'
  | 'script-bold'
  | 'double-struck'
  | 'fraktur'
  | 'small-caps';

const CHAR_MAPS: Record<StyleVariant, { upper: number; lower: number; num?: number; exceptions?: Record<string, string> }> = {
  'serif-bold': { upper: 0x1d400, lower: 0x1d41a, num: 0x1d7ce },
  'serif-italic': {
    upper: 0x1d434,
    lower: 0x1d44e,
    exceptions: { h: '\u{210E}' }, // Planck constant exception in Unicode
  },
  'serif-bold-italic': { upper: 0x1d468, lower: 0x1d482 },
  sans: { upper: 0x1d5a0, lower: 0x1d5ba, num: 0x1d7e2 },
  'sans-bold': { upper: 0x1d5d4, lower: 0x1d5ee, num: 0x1d7ec },
  'sans-italic': { upper: 0x1d608, lower: 0x1d622 },
  'sans-bold-italic': { upper: 0x1d63c, lower: 0x1d656 },
  monospace: { upper: 0x1d670, lower: 0x1d68a, num: 0x1d7f6 },
  'script-bold': { upper: 0x1d4d0, lower: 0x1d4ea },
  script: {
    upper: 0x1d49c,
    lower: 0x1d4b6,
    exceptions: {
      B: '\u{212C}',
      E: '\u{2130}',
      F: '\u{2131}',
      H: '\u{210B}',
      I: '\u{2110}',
      L: '\u{2112}',
      M: '\u{2133}',
      R: '\u{211B}',
      e: '\u{212F}',
      g: '\u{210A}',
      o: '\u{2134}',
    },
  },
  'double-struck': {
    upper: 0x1d538,
    lower: 0x1d552,
    num: 0x1d7d8,
    exceptions: {
      C: '\u{2102}',
      H: '\u{210D}',
      N: '\u{2115}',
      P: '\u{2119}',
      Q: '\u{211A}',
      R: '\u{211D}',
      Z: '\u{2124}',
    },
  },
  fraktur: {
    upper: 0x1d504,
    lower: 0x1d51e,
    exceptions: {
      C: '\u{212D}',
      H: '\u{210C}',
      I: '\u{2111}',
      R: '\u{211C}',
      Z: '\u{2128}',
    },
  },
  'small-caps': {
    upper: 0,
    lower: 0,
    exceptions: {
      a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ',
      k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ',
      u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ',
      A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ғ', G: 'ɢ', H: 'ʜ', I: 'ɪ', J: 'ᴊ',
      K: 'ᴋ', L: 'ʟ', M: 'ᴍ', N: 'ɴ', O: 'ᴏ', P: 'ᴘ', Q: 'ǫ', R: 'ʀ', S: 's', T: 'ᴛ',
      U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x', Y: 'ʏ', Z: 'ᴢ',
    },
  },
};

/**
 * Converts standard ASCII text into styled Unicode characters matching a specific typeface style.
 */
export function convertToStyledText(text: string, variant: StyleVariant): string {
  if (!text) return '';
  const map = CHAR_MAPS[variant];
  if (!map) return text;

  let result = '';
  for (const char of text) {
    // Check specific exceptions first
    if (map.exceptions && map.exceptions[char]) {
      result += map.exceptions[char];
      continue;
    }

    const code = char.charCodeAt(0);

    // Uppercase A-Z
    if (code >= 65 && code <= 90) {
      if (map.upper > 0) {
        result += String.fromCodePoint(map.upper + (code - 65));
      } else {
        result += char;
      }
      continue;
    }

    // Lowercase a-z
    if (code >= 97 && code <= 122) {
      if (map.lower > 0) {
        result += String.fromCodePoint(map.lower + (code - 97));
      } else {
        result += char;
      }
      continue;
    }

    // Numerals 0-9
    if (code >= 48 && code <= 57) {
      if (map.num && map.num > 0) {
        result += String.fromCodePoint(map.num + (code - 48));
      } else {
        result += char;
      }
      continue;
    }

    // Preserve whitespace, symbols, emojis as-is
    result += char;
  }

  return result;
}

/**
 * Automatically chooses the best matching styled font variant based on typeface metadata and weight.
 */
export function getMatchingStyleVariant(
  category: string,
  weight: number,
  typefaceId: string
): StyleVariant {
  const isBold = weight >= 600;

  // 1. Gothic & Blackletter / Medieval fonts -> Fraktur Unicode
  if (
    typefaceId === 'unifrakturmaguntia' ||
    typefaceId === 'unifrakturcook' ||
    typefaceId === 'pirata-one' ||
    typefaceId === 'grenze-gotisch' ||
    typefaceId === 'medievalsharp'
  ) {
    return 'fraktur';
  }

  // 2. Small Caps fonts
  if (
    typefaceId === 'cinzel' ||
    typefaceId === 'cinzel-decorative' ||
    typefaceId === 'cormorant-sc' ||
    typefaceId === 'spectral-sc' ||
    typefaceId === 'alegreya-sc' ||
    typefaceId === 'playfair-display-sc' ||
    typefaceId === 'bruno-ace-sc'
  ) {
    return 'small-caps';
  }

  // 3. Double-struck / Outline / Multi-line / Neon fonts
  if (
    typefaceId === 'bodoni-moda' ||
    typefaceId === 'monoton' ||
    typefaceId === 'bungee-inline' ||
    typefaceId === 'bungee-shade' ||
    typefaceId === 'righteous' ||
    typefaceId === 'syne' ||
    typefaceId === 'rubik-vinyl' ||
    typefaceId === 'megrim'
  ) {
    return 'double-struck';
  }

  // 4. Monospaced, Typewriter, and Pixel fonts
  if (
    category === 'monospace' ||
    typefaceId === 'press-start-2p' ||
    typefaceId === 'silkscreen' ||
    typefaceId === 'special-elite' ||
    typefaceId === 'major-mono-display'
  ) {
    return 'monospace';
  }

  // 5. Script & Handwriting
  if (category === 'script' || category === 'handwriting') {
    return isBold ? 'script-bold' : 'script';
  }

  // 6. Serif
  if (category === 'serif') {
    return isBold ? 'serif-bold' : 'serif-italic';
  }

  // 7. Slab Serif
  if (category === 'slab-serif') {
    return 'serif-bold';
  }

  // 8. Display & Poster
  if (category === 'display') {
    if (typefaceId === 'fraunces') return 'serif-bold-italic';
    if (typefaceId === 'abril-fatface' || typefaceId === 'ultra' || typefaceId === 'alfa-slab-one' || typefaceId === 'rye' || typefaceId === 'vast-shadow') {
      return 'serif-bold';
    }
    return 'sans-bold';
  }

  // 9. Tech & Gaming
  if (category === 'tech') {
    return isBold ? 'sans-bold-italic' : 'sans-bold';
  }

  // 10. Sans-serif default
  return isBold ? 'sans-bold' : 'sans';
}

/**
 * Fallback clipboard copy using document.execCommand for older browsers,
 * iOS Safari in-app webviews (Instagram, TikTok, FB), and non-secure contexts.
 */
export function fallbackCopyTextToClipboard(text: string): boolean {
  if (typeof document === 'undefined') return false;

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Position fixed and off-screen to avoid scrolling
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '-9999px';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.style.opacity = '0';
    textArea.setAttribute('readonly', '');

    // iOS Safari selection quirk
    textArea.contentEditable = 'true';
    document.body.appendChild(textArea);

    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      const range = document.createRange();
      range.selectNodeContents(textArea);
      const sel = window.getSelection();
      if (sel) {
        sel.removeAllRanges();
        sel.addRange(range);
      }
      textArea.setSelectionRange(0, 999999);
    } else {
      textArea.select();
    }

    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}

/**
 * Universal plain text copy with modern async clipboard API and instant execCommand fallback.
 */
export async function copyTextToClipboard(text: string): Promise<boolean> {
  if (!text) return false;

  // 1. Try modern navigator.clipboard
  if (typeof window !== 'undefined' && navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Proceed to fallback
    }
  }

  // 2. Fallback to execCommand
  return fallbackCopyTextToClipboard(text);
}

/**
 * Copies styled text to clipboard with dual payload:
 * 1. Plain text gets Unicode styled characters (pastes styled into Twitter, Instagram, WhatsApp, Discord, TikTok, etc.)
 * 2. HTML gets rich text styling (pastes with exact font, weight, and size into Google Docs, Word, Apple Notes, Slack, etc.)
 * Works across desktop, iOS Safari, Android Chrome, and in-app webviews with automatic fallback chain.
 */
export async function copyStyledTextToClipboard(
  text: string,
  variant: StyleVariant,
  richMetadata?: { fontFamily: string; fontWeight: number; fontSize: number; lineHeight?: number }
): Promise<boolean> {
  const styledUnicode = convertToStyledText(text, variant);

  // 1. Try modern rich HTML ClipboardItem (Chrome, Edge, Safari 13.1+)
  if (typeof window !== 'undefined' && navigator.clipboard && window.isSecureContext) {
    try {
      if (typeof window.ClipboardItem !== 'undefined' && richMetadata) {
        const plainBlob = new Blob([styledUnicode], { type: 'text/plain' });
        const htmlContent = `<span style="font-family: ${richMetadata.fontFamily}; font-weight: ${richMetadata.fontWeight}; font-size: ${richMetadata.fontSize}px; line-height: ${richMetadata.lineHeight || 1.4};">${text}</span>`;
        const htmlBlob = new Blob([htmlContent], { type: 'text/html' });

        await navigator.clipboard.write([
          new ClipboardItem({
            'text/plain': plainBlob,
            'text/html': htmlBlob,
          }),
        ]);
        return true;
      }
    } catch {
      // Fall through to plain text clipboard API
    }

    try {
      await navigator.clipboard.writeText(styledUnicode);
      return true;
    } catch {
      // Fall through to execCommand
    }
  }

  // 2. Bulletproof fallback for older browsers, webviews, and insecure origins
  return fallbackCopyTextToClipboard(styledUnicode);
}
