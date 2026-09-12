import { Typeface, TypefaceCategory, TypefaceUseCase } from './types';

export const TYPEFACES: Typeface[] = [
  {
    "id": "inter",
    "name": "Inter",
    "family": "'Inter', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "humanist",
      "tech",
      "ui"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 100,
        "max": 900,
        "default": 400,
        "step": 1
      },
      {
        "tag": "opsz",
        "name": "Optical Size",
        "min": 14,
        "max": 32,
        "default": 14,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Rasmus Andersson",
    "description": "A carefully crafted variable neo-grotesque sans-serif designed for high legibility on digital computer screens.",
    "tags": [
      "ui",
      "modern",
      "clean",
      "versatile",
      "neutral",
      "screen-optimized"
    ],
    "popularity": 99,
    "suggestedPairings": [
      "playfair-display",
      "newsreader",
      "merriweather",
      "cormorant-garamond"
    ],
    "useCases": [
      "website",
      "ui",
      "resume",
      "presentation",
      "branding"
    ],
    "fallback": "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif",
    "googleFontQuery": "Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900"
  },
  {
    "id": "plus-jakarta-sans",
    "name": "Plus Jakarta Sans",
    "family": "'Plus Jakarta Sans', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "modern",
      "tech"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 200,
        "max": 800,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Gumpita Rahayu (Tokotype)",
    "description": "A fresh, geometric neo-grotesque typeface inspired by clean modernist forms with contemporary tech aesthetics.",
    "tags": [
      "modern",
      "clean",
      "tech",
      "geometric",
      "branding"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "fraunces",
      "cormorant-garamond",
      "spectral",
      "lora"
    ],
    "useCases": [
      "website",
      "ui",
      "logo",
      "branding",
      "presentation"
    ],
    "fallback": "system-ui, -apple-system, sans-serif",
    "googleFontQuery": "Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800"
  },
  {
    "id": "dm-sans",
    "name": "DM Sans",
    "family": "'DM Sans', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "minimal",
      "modern"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 100,
        "max": 900,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Colophon Foundry",
    "description": "Low-contrast geometric sans-serif designed for clarity and legibility in sub-headings and user interface text.",
    "tags": [
      "minimal",
      "clean",
      "geometric",
      "subtle",
      "modern"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "playfair-display",
      "fraunces",
      "libre-baskerville",
      "merriweather"
    ],
    "useCases": [
      "website",
      "ui",
      "resume",
      "editorial"
    ],
    "fallback": "Helvetica, Arial, sans-serif",
    "googleFontQuery": "DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000"
  },
  {
    "id": "outfit",
    "name": "Outfit",
    "family": "'Outfit', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "minimal",
      "modern"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 100,
        "max": 900,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Rodrigo Fuenzalida",
    "description": "A contemporary geometric sans-serif inspired by the sleek identity of the Outfit.io design ecosystem.",
    "tags": [
      "geometric",
      "sleek",
      "contemporary",
      "headline",
      "branding"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "newsreader",
      "merriweather",
      "spectral"
    ],
    "useCases": [
      "logo",
      "website",
      "poster",
      "presentation",
      "social-media"
    ],
    "fallback": "system-ui, sans-serif",
    "googleFontQuery": "Outfit:wght@100..900"
  },
  {
    "id": "space-grotesk",
    "name": "Space Grotesk",
    "family": "'Space Grotesk', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "tech",
      "geometric",
      "retro"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 300,
        "max": 700,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Florian Karsten",
    "description": "A proportional sans-serif variant based on Colophon’s Space Mono, retaining distinct idiosyncratic mechanical quirks.",
    "tags": [
      "tech",
      "quirky",
      "developer",
      "brutalist",
      "modern"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "newsreader",
      "lora",
      "spectral",
      "inter"
    ],
    "useCases": [
      "website",
      "tech",
      "poster",
      "logo",
      "branding"
    ],
    "fallback": "Helvetica, Arial, sans-serif",
    "googleFontQuery": "Space+Grotesk:wght@300..700"
  },
  {
    "id": "montserrat",
    "name": "Montserrat",
    "family": "'Montserrat', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "retro",
      "modern"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 100,
        "max": 900,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Julieta Ulanovsky",
    "description": "Inspired by the historic signage and urban typography of the Montserrat neighborhood in Buenos Aires.",
    "tags": [
      "geometric",
      "urban",
      "bold",
      "versatile",
      "headline"
    ],
    "popularity": 96,
    "suggestedPairings": [
      "merriweather",
      "cormorant-garamond",
      "lora",
      "roboto-slab"
    ],
    "useCases": [
      "logo",
      "website",
      "poster",
      "presentation",
      "resume"
    ],
    "fallback": "Arial, Helvetica, sans-serif",
    "googleFontQuery": "Montserrat:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "roboto",
    "name": "Roboto",
    "family": "'Roboto', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "humanist",
      "tech",
      "ui"
    ],
    "weights": [
      100,
      300,
      400,
      500,
      700,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "Apache License 2.0",
    "licenseUrl": "https://www.apache.org/licenses/LICENSE-2.0",
    "author": "Christian Robertson",
    "description": "Google’s neo-grotesque workhorse featuring dual nature: mechanical skeleton combined with friendly open curves.",
    "tags": [
      "neutral",
      "workhorse",
      "ui",
      "clean",
      "standard"
    ],
    "popularity": 97,
    "suggestedPairings": [
      "roboto-slab",
      "playfair-display",
      "merriweather"
    ],
    "useCases": [
      "website",
      "ui",
      "resume",
      "presentation"
    ],
    "fallback": "system-ui, -apple-system, sans-serif",
    "googleFontQuery": "Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900"
  },
  {
    "id": "manrope",
    "name": "Manrope",
    "family": "'Manrope', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "modern",
      "humanist"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 200,
        "max": 800,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Mikhail Sharanda",
    "description": "Modern open-source neo-grotesque crossover font with clean geometric structures and humanist open counters.",
    "tags": [
      "modern",
      "geometric",
      "balanced",
      "tech",
      "neutral"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "fraunces",
      "newsreader",
      "spectral"
    ],
    "useCases": [
      "website",
      "ui",
      "branding",
      "resume"
    ],
    "fallback": "system-ui, sans-serif",
    "googleFontQuery": "Manrope:wght@200..800"
  },
  {
    "id": "work-sans",
    "name": "Work Sans",
    "family": "'Work Sans', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "humanist",
      "editorial",
      "modern"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 100,
        "max": 900,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Wei Huang",
    "description": "Based loosely on early Grotesques with optimized letterforms tuned for medium-sized text on screens and paper.",
    "tags": [
      "editorial",
      "grotesque",
      "humanist",
      "workhorse"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "cormorant-garamond",
      "bitter",
      "playfair-display"
    ],
    "useCases": [
      "editorial",
      "website",
      "resume",
      "presentation"
    ],
    "fallback": "system-ui, sans-serif",
    "googleFontQuery": "Work+Sans:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "poppins",
    "name": "Poppins",
    "family": "'Poppins', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "modern"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Indian Type Foundry",
    "description": "Geometric sans-serif with pure circular curves and monolinear stems, supporting both Devanagari and Latin.",
    "tags": [
      "geometric",
      "friendly",
      "round",
      "modern",
      "clean"
    ],
    "popularity": 95,
    "suggestedPairings": [
      "playfair-display",
      "merriweather",
      "roboto-slab"
    ],
    "useCases": [
      "website",
      "logo",
      "social-media",
      "presentation"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
  },
  {
    "id": "epilogue",
    "name": "Epilogue",
    "family": "'Epilogue', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "editorial",
      "humanist",
      "modern"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 100,
        "max": 900,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Tyler Finck (Etcetera Type Co)",
    "description": "A variable sans-serif with distinctive proportion and rhythmic cadence, making messages feel intentional and strong.",
    "tags": [
      "bold",
      "editorial",
      "cadence",
      "personality"
    ],
    "popularity": 82,
    "suggestedPairings": [
      "fraunces",
      "newsreader",
      "spectral"
    ],
    "useCases": [
      "editorial",
      "branding",
      "website",
      "poster"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Epilogue:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "playfair-display",
    "name": "Playfair Display",
    "family": "'Playfair Display', serif",
    "category": "serif",
    "subcategories": [
      "editorial",
      "luxury",
      "display"
    ],
    "weights": [
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 400,
        "max": 900,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Claus Eggers Sørensen",
    "description": "High-contrast transitional serif influenced by Enlightenment-era letterforms and broad-nib European pens.",
    "tags": [
      "luxury",
      "elegant",
      "high-contrast",
      "editorial",
      "headline"
    ],
    "popularity": 98,
    "suggestedPairings": [
      "inter",
      "dm-sans",
      "plus-jakarta-sans",
      "montserrat"
    ],
    "useCases": [
      "logo",
      "editorial",
      "website",
      "poster",
      "branding"
    ],
    "fallback": "Georgia, \"Times New Roman\", serif",
    "googleFontQuery": "Playfair+Display:ital,wght@0,400..900;1,400..900"
  },
  {
    "id": "merriweather",
    "name": "Merriweather",
    "family": "'Merriweather', serif",
    "category": "serif",
    "subcategories": [
      "editorial",
      "humanist"
    ],
    "weights": [
      300,
      400,
      700,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Sorkin Type Co",
    "description": "Engineered specifically for long-form reading on screens, featuring large x-height, mild diagonal stress, and sturdy serifs.",
    "tags": [
      "reading",
      "sturdy",
      "editorial",
      "warm",
      "book"
    ],
    "popularity": 95,
    "suggestedPairings": [
      "inter",
      "montserrat",
      "outfit",
      "space-grotesk"
    ],
    "useCases": [
      "editorial",
      "website",
      "resume",
      "presentation"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900"
  },
  {
    "id": "cormorant-garamond",
    "name": "Cormorant Garamond",
    "family": "'Cormorant Garamond', serif",
    "category": "serif",
    "subcategories": [
      "luxury",
      "editorial",
      "humanist"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Christian Thalmann (Catharsis Fonts)",
    "description": "Masterfully drawn homage to Claude Garamont’s 16th-century masterpieces, featuring razor-thin hairlines and exquisite poise.",
    "tags": [
      "luxury",
      "classical",
      "exquisite",
      "haute-couture",
      "refined"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "plus-jakarta-sans",
      "inter",
      "dm-sans",
      "montserrat"
    ],
    "useCases": [
      "logo",
      "editorial",
      "branding",
      "poster",
      "social-media"
    ],
    "fallback": "\"Garamond\", \"Times New Roman\", serif",
    "googleFontQuery": "Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700"
  },
  {
    "id": "newsreader",
    "name": "Newsreader",
    "family": "'Newsreader', serif",
    "category": "serif",
    "subcategories": [
      "editorial",
      "humanist"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 200,
        "max": 800,
        "default": 400,
        "step": 1
      },
      {
        "tag": "opsz",
        "name": "Optical Size",
        "min": 6,
        "max": 72,
        "default": 16,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Production Type",
    "description": "An optical-size variable serif crafted expressly for continuous editorial reading across digital media.",
    "tags": [
      "editorial",
      "literary",
      "optical-size",
      "journalistic"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "space-grotesk",
      "inter",
      "outfit",
      "jetbrains-mono"
    ],
    "useCases": [
      "editorial",
      "website",
      "resume",
      "branding"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800"
  },
  {
    "id": "spectral",
    "name": "Spectral",
    "family": "'Spectral', serif",
    "category": "serif",
    "subcategories": [
      "editorial",
      "humanist"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Production Type",
    "description": "Commissioned by Google for dense text environments, offering a crisp, contemporary French publishing sensibility.",
    "tags": [
      "publishing",
      "scholarly",
      "balanced",
      "crisp"
    ],
    "popularity": 86,
    "suggestedPairings": [
      "plus-jakarta-sans",
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "editorial",
      "website",
      "resume",
      "presentation"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800"
  },
  {
    "id": "lora",
    "name": "Lora",
    "family": "'Lora', serif",
    "category": "serif",
    "subcategories": [
      "editorial",
      "humanist"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 400,
        "max": 700,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Cyreal",
    "description": "Contemporary serif with roots in calligraphy, distinguished by its subtle brush stroke contrast and warm narrative flow.",
    "tags": [
      "calligraphic",
      "warm",
      "editorial",
      "storytelling"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "roboto",
      "montserrat",
      "inter",
      "open-sans"
    ],
    "useCases": [
      "editorial",
      "website",
      "resume",
      "branding"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Lora:ital,wght@0,400..700;1,400..700"
  },
  {
    "id": "cinzel",
    "name": "Cinzel",
    "family": "'Cinzel', serif",
    "category": "serif",
    "subcategories": [
      "luxury",
      "display",
      "retro"
    ],
    "weights": [
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 400,
        "max": 900,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Natanael Gama",
    "description": "Inspired by first-century Roman inscriptions and classical proportions, ideal for regal titles and luxury marks.",
    "tags": [
      "monumental",
      "classical",
      "roman",
      "luxury",
      "cinematic"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "inter",
      "dm-sans",
      "plus-jakarta-sans"
    ],
    "useCases": [
      "logo",
      "branding",
      "poster",
      "presentation"
    ],
    "fallback": "\"Times New Roman\", serif",
    "googleFontQuery": "Cinzel:wght@400..900"
  },
  {
    "id": "bodoni-moda",
    "name": "Bodoni Moda",
    "family": "'Bodoni Moda', serif",
    "category": "serif",
    "subcategories": [
      "luxury",
      "editorial",
      "display"
    ],
    "weights": [
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 400,
        "max": 900,
        "default": 400,
        "step": 1
      },
      {
        "tag": "opsz",
        "name": "Optical Size",
        "min": 6,
        "max": 96,
        "default": 48,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Omnibus-Type",
    "description": "Dramatic Didone classification serif with razor hairlines, vertical stress, and extreme high-contrast grandeur.",
    "tags": [
      "haute-couture",
      "fashion",
      "magazine",
      "dramatic",
      "luxury"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "inter",
      "manrope",
      "space-grotesk"
    ],
    "useCases": [
      "logo",
      "editorial",
      "branding",
      "poster"
    ],
    "fallback": "\"Didot\", \"Bodoni MT\", serif",
    "googleFontQuery": "Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900"
  },
  {
    "id": "libre-baskerville",
    "name": "Libre Baskerville",
    "family": "'Libre Baskerville', serif",
    "category": "serif",
    "subcategories": [
      "editorial",
      "retro"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Impallari Type",
    "description": "Web font optimized for reading on screens based on John Baskerville’s celebrated 1757 English transitional serif.",
    "tags": [
      "classical",
      "english",
      "bookish",
      "academic"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "montserrat",
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "editorial",
      "website",
      "resume"
    ],
    "fallback": "Baskerville, Georgia, serif",
    "googleFontQuery": "Libre+Baskerville:ital,wght@0,400;0,700;1,400"
  },
  {
    "id": "bricolage-grotesque",
    "name": "Bricolage Grotesque",
    "family": "'Bricolage Grotesque', sans-serif",
    "category": "display",
    "subcategories": [
      "editorial",
      "retro",
      "modern"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 200,
        "max": 800,
        "default": 700,
        "step": 1
      },
      {
        "tag": "opsz",
        "name": "Optical Size",
        "min": 12,
        "max": 96,
        "default": 48,
        "step": 1
      },
      {
        "tag": "wdth",
        "name": "Width",
        "min": 75,
        "max": 100,
        "default": 100,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Mathieu Triay",
    "description": "Expressive collision between French architectural signage, 1970s British dry transfer, and raw brutalist grotesque geometry.",
    "tags": [
      "brutalist",
      "expressive",
      "trendy",
      "editorial",
      "punchy"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "newsreader",
      "inter",
      "merriweather",
      "spectral"
    ],
    "useCases": [
      "poster",
      "logo",
      "branding",
      "website",
      "social-media"
    ],
    "fallback": "Impact, Arial Black, sans-serif",
    "googleFontQuery": "Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800"
  },
  {
    "id": "fraunces",
    "name": "Fraunces",
    "family": "'Fraunces', serif",
    "category": "display",
    "subcategories": [
      "editorial",
      "retro",
      "luxury"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 100,
        "max": 900,
        "default": 600,
        "step": 1
      },
      {
        "tag": "opsz",
        "name": "Optical Size",
        "min": 9,
        "max": 144,
        "default": 72,
        "step": 1
      },
      {
        "tag": "SOFT",
        "name": "Softness",
        "min": 0,
        "max": 100,
        "default": 50,
        "step": 1
      },
      {
        "tag": "WONK",
        "name": "Wonkiness",
        "min": 0,
        "max": 1,
        "default": 0,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Phaedra Charles & Flavia Zimbardi (Undercase Type)",
    "description": "Quirky, voluptuous Old Style serif inspired by vintage packaging and mid-century art typography with variable softness.",
    "tags": [
      "voluptuous",
      "warm",
      "editorial",
      "vintage",
      "personality"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "plus-jakarta-sans",
      "inter",
      "jetbrains-mono",
      "dm-sans"
    ],
    "useCases": [
      "editorial",
      "branding",
      "logo",
      "poster",
      "website"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,100..900,0..100,0..1;1,9..144,100..900,0..100,0..1"
  },
  {
    "id": "syne",
    "name": "Syne",
    "family": "'Syne', sans-serif",
    "category": "display",
    "subcategories": [
      "geometric",
      "modern",
      "tech"
    ],
    "weights": [
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 400,
        "max": 800,
        "default": 700,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Bonjour Monde & Lucas Descroix",
    "description": "Explorative art-center typeface with extreme wide weights that transition from polite sans to radical visual sculpture.",
    "tags": [
      "radical",
      "avant-garde",
      "wide",
      "artistic",
      "futuristic"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "inter",
      "spectral",
      "space-mono"
    ],
    "useCases": [
      "poster",
      "logo",
      "branding",
      "social-media"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Syne:wght@400..800"
  },
  {
    "id": "abril-fatface",
    "name": "Abril Fatface",
    "family": "'Abril Fatface', serif",
    "category": "display",
    "subcategories": [
      "editorial",
      "luxury",
      "retro"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "TypeTogether",
    "description": "Modern revival of 19th-century heavy advertising titling posters across Britain and France with sweeping serif flourishes.",
    "tags": [
      "fatface",
      "theatrical",
      "poster",
      "vintage",
      "bold"
    ],
    "popularity": 85,
    "suggestedPairings": [
      "roboto",
      "dm-sans",
      "inter"
    ],
    "useCases": [
      "poster",
      "logo",
      "editorial",
      "branding"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Abril+Fatface"
  },
  {
    "id": "righteous",
    "name": "Righteous",
    "family": "'Righteous', display",
    "category": "display",
    "subcategories": [
      "retro",
      "geometric",
      "tech"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Astigmatic",
    "description": "Inspired by the all-capital letterforms of the Art Deco era and visual language of 1930s futuristic posters.",
    "tags": [
      "art-deco",
      "retro",
      "geometric",
      "gaming",
      "bold"
    ],
    "popularity": 84,
    "suggestedPairings": [
      "roboto",
      "open-sans",
      "inter"
    ],
    "useCases": [
      "gaming",
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Righteous"
  },
  {
    "id": "unbounded",
    "name": "Unbounded",
    "family": "'Unbounded', sans-serif",
    "category": "display",
    "subcategories": [
      "tech",
      "geometric",
      "modern"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 200,
        "max": 900,
        "default": 700,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Dinamo & NaN",
    "description": "Single-tier expansive wide typeface engineered for Web3, global digital identity, and hyper-modern brand displays.",
    "tags": [
      "wide",
      "web3",
      "ultramodern",
      "tech",
      "powerful"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "inter",
      "jetbrains-mono",
      "dm-sans"
    ],
    "useCases": [
      "branding",
      "logo",
      "poster",
      "tech"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Unbounded:wght@200..900"
  },
  {
    "id": "roboto-slab",
    "name": "Roboto Slab",
    "family": "'Roboto Slab', serif",
    "category": "slab-serif",
    "subcategories": [
      "editorial",
      "tech",
      "modern"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 100,
        "max": 900,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "Apache License 2.0",
    "licenseUrl": "https://www.apache.org/licenses/LICENSE-2.0",
    "author": "Christian Robertson",
    "description": "Geometric slab serif with mechanical rhythm and friendly open curves, blending technical confidence with readability.",
    "tags": [
      "slab",
      "editorial",
      "technical",
      "robust",
      "clean"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "roboto",
      "inter",
      "montserrat"
    ],
    "useCases": [
      "website",
      "editorial",
      "presentation",
      "resume"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Roboto+Slab:wght@100..900"
  },
  {
    "id": "zilla-slab",
    "name": "Zilla Slab",
    "family": "'Zilla Slab', serif",
    "category": "slab-serif",
    "subcategories": [
      "tech",
      "modern",
      "editorial"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Typotheque (Peter Biľak)",
    "description": "Commissioned for Mozilla’s brand identity, providing an open, industrial, dependable open-source slab serif.",
    "tags": [
      "open-source",
      "industrial",
      "dependable",
      "tech"
    ],
    "popularity": 83,
    "suggestedPairings": [
      "inter",
      "open-sans",
      "fira-code"
    ],
    "useCases": [
      "branding",
      "website",
      "poster",
      "editorial"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700"
  },
  {
    "id": "arvo",
    "name": "Arvo",
    "family": "'Arvo', serif",
    "category": "slab-serif",
    "subcategories": [
      "geometric",
      "retro"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Anton Koovit",
    "description": "Geometric slab-serif typeface suitable for both digital screens and print publication, balancing monolinear clarity.",
    "tags": [
      "geometric",
      "monolinear",
      "sturdy",
      "retro"
    ],
    "popularity": 85,
    "suggestedPairings": [
      "open-sans",
      "inter",
      "roboto"
    ],
    "useCases": [
      "poster",
      "editorial",
      "website"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Arvo:ital,wght@0,400;0,700;1,400;1,700"
  },
  {
    "id": "jetbrains-mono",
    "name": "JetBrains Mono",
    "family": "'JetBrains Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "tech",
      "modern"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 100,
        "max": 800,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "JetBrains (Philipp Nurullin)",
    "description": "Developer typeface engineered for developers, featuring heightened lowercase letters, distinctive oval forms, and programming ligatures.",
    "tags": [
      "code",
      "developer",
      "ligatures",
      "precise",
      "tech"
    ],
    "popularity": 96,
    "suggestedPairings": [
      "inter",
      "newsreader",
      "fraunces",
      "plus-jakarta-sans"
    ],
    "useCases": [
      "code",
      "website",
      "tech",
      "presentation"
    ],
    "fallback": "\"SF Mono\", Menlo, Consolas, monospace",
    "googleFontQuery": "JetBrains+Mono:ital,wght@0,100..800;1,100..800"
  },
  {
    "id": "space-mono",
    "name": "Space Mono",
    "family": "'Space Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "retro",
      "tech",
      "geometric"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Colophon Foundry",
    "description": "Original fixed-width grotesque developed for editorial use in headlines and branding, reflecting 1960s computing and science fiction.",
    "tags": [
      "sci-fi",
      "brutalist",
      "editorial",
      "vintage-tech"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "dm-sans",
      "playfair-display",
      "inter"
    ],
    "useCases": [
      "branding",
      "poster",
      "website",
      "tech"
    ],
    "fallback": "\"Courier New\", monospace",
    "googleFontQuery": "Space+Mono:ital,wght@0,400;0,700;1,400;1,700"
  },
  {
    "id": "fira-code",
    "name": "Fira Code",
    "family": "'Fira Code', monospace",
    "category": "monospace",
    "subcategories": [
      "tech"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 300,
        "max": 700,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Nikita Prokopov",
    "description": "Fixed-width font with programming ligature extensions designed to visually simplify multi-character symbols like arrow operators and inequalities.",
    "tags": [
      "code",
      "ligatures",
      "clean",
      "terminal"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "inter",
      "roboto",
      "merriweather"
    ],
    "useCases": [
      "code",
      "website",
      "tech"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Fira+Code:wght@300..700"
  },
  {
    "id": "ibm-plex-mono",
    "name": "IBM Plex Mono",
    "family": "'IBM Plex Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "tech",
      "humanist"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Mike Abbink & Bold Monday",
    "description": "Corporate monospace family developed for IBM, capturing human-machine harmony with balanced proportions and mechanical precision.",
    "tags": [
      "industrial",
      "corporate",
      "precision",
      "classic"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "inter",
      "plus-jakarta-sans",
      "merriweather"
    ],
    "useCases": [
      "code",
      "website",
      "resume",
      "editorial"
    ],
    "fallback": "\"Courier New\", monospace",
    "googleFontQuery": "IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700"
  },
  {
    "id": "caveat",
    "name": "Caveat",
    "family": "'Caveat', cursive",
    "category": "handwriting",
    "subcategories": [
      "script",
      "humanist"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 400,
        "max": 700,
        "default": 500,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Pablo Impallari",
    "description": "Handwriting style designed for personal notes, signature accents, and welcoming conversational annotations.",
    "tags": [
      "handwritten",
      "casual",
      "warm",
      "friendly",
      "marker"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "inter",
      "dm-sans",
      "montserrat"
    ],
    "useCases": [
      "social-media",
      "branding",
      "poster",
      "website"
    ],
    "fallback": "cursive, sans-serif",
    "googleFontQuery": "Caveat:wght@400..700"
  },
  {
    "id": "dancing-script",
    "name": "Dancing Script",
    "family": "'Dancing Script', cursive",
    "category": "script",
    "subcategories": [
      "handwriting",
      "retro"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 400,
        "max": 700,
        "default": 600,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Pablo Impallari",
    "description": "Lively casual script where letters bounce gently with varying sizes and spontaneous cap flourishes inspired by 1950s casual lettering.",
    "tags": [
      "bouncy",
      "casual",
      "lively",
      "friendly"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "roboto",
      "montserrat",
      "lora"
    ],
    "useCases": [
      "branding",
      "logo",
      "social-media",
      "poster"
    ],
    "fallback": "cursive, serif",
    "googleFontQuery": "Dancing+Script:wght@400..700"
  },
  {
    "id": "pacifico",
    "name": "Pacifico",
    "family": "'Pacifico', cursive",
    "category": "script",
    "subcategories": [
      "retro",
      "display"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "Fun, surf-inspired brush script evoking 1950s American surf and road-trip culture, ideal for badges and vibrant headings.",
    "tags": [
      "brush",
      "retro",
      "surf",
      "cheerful",
      "nostalgic"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "roboto",
      "open-sans",
      "montserrat"
    ],
    "useCases": [
      "logo",
      "social-media",
      "poster",
      "branding"
    ],
    "fallback": "cursive, sans-serif",
    "googleFontQuery": "Pacifico"
  },
  {
    "id": "great-vibes",
    "name": "Great Vibes",
    "family": "'Great Vibes', cursive",
    "category": "script",
    "subcategories": [
      "luxury",
      "editorial"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "TypeSETit (Robert E. Leuschke)",
    "description": "Flowing connecting formal calligraphy script with flowing ascenders and descenders, tailored for celebratory stationery and invitations.",
    "tags": [
      "calligraphy",
      "invitation",
      "wedding",
      "formal",
      "graceful"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "cormorant-garamond",
      "montserrat",
      "inter"
    ],
    "useCases": [
      "logo",
      "branding",
      "social-media"
    ],
    "fallback": "cursive, serif",
    "googleFontQuery": "Great+Vibes"
  },
  {
    "id": "open-sans",
    "name": "Open Sans",
    "family": "'Open Sans', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "humanist",
      "neutral",
      "screen-optimized"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 300,
        "max": 800,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Steve Matteson",
    "description": "A humanist sans-serif designed with an upright feel, open forms, and friendly legibility optimized across print and mobile interfaces.",
    "tags": [
      "humanist",
      "clean",
      "legible",
      "versatile",
      "web"
    ],
    "popularity": 99,
    "suggestedPairings": [
      "playfair-display",
      "lora",
      "merriweather"
    ],
    "useCases": [
      "website",
      "ui",
      "editorial",
      "resume"
    ],
    "fallback": "system-ui, -apple-system, sans-serif",
    "googleFontQuery": "Open+Sans:ital,wght@0,300..800;1,300..800"
  },
  {
    "id": "lato",
    "name": "Lato",
    "family": "'Lato', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "humanist",
      "warm",
      "corporate"
    ],
    "weights": [
      100,
      300,
      400,
      700,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Łukasz Dziedzic",
    "description": "A warm yet stable sans-serif with semi-rounded proportions that convey friendliness at small sizes and elegance at large sizes.",
    "tags": [
      "corporate",
      "warm",
      "friendly",
      "business"
    ],
    "popularity": 98,
    "suggestedPairings": [
      "merriweather",
      "playfair-display"
    ],
    "useCases": [
      "website",
      "presentation",
      "branding",
      "resume"
    ],
    "fallback": "system-ui, sans-serif",
    "googleFontQuery": "Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900"
  },
  {
    "id": "oswald",
    "name": "Oswald",
    "family": "'Oswald', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "condensed",
      "geometric",
      "headline"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "variableAxes": [
      {
        "tag": "wght",
        "name": "Weight",
        "min": 200,
        "max": 700,
        "default": 400,
        "step": 1
      }
    ],
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "A reworking of the classic gothic sans-serif typeface style, designed to be freely used across the internet on web browsers.",
    "tags": [
      "condensed",
      "headline",
      "impact",
      "poster"
    ],
    "popularity": 97,
    "suggestedPairings": [
      "lora",
      "eb-garamond"
    ],
    "useCases": [
      "poster",
      "website",
      "logo",
      "social-media"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Oswald:wght@200..700"
  },
  {
    "id": "source-sans-3",
    "name": "Source Sans 3",
    "family": "'Source Sans 3', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "humanist",
      "ui",
      "technical"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Paul D. Hunt (Adobe)",
    "description": "Adobe's first open-source typeface family, engineered specifically for user interfaces and clear data representation.",
    "tags": [
      "clean",
      "adobe",
      "ui",
      "modern"
    ],
    "popularity": 95,
    "suggestedPairings": [
      "source-serif-4",
      "merriweather"
    ],
    "useCases": [
      "ui",
      "website",
      "code",
      "presentation"
    ],
    "fallback": "system-ui, sans-serif",
    "googleFontQuery": "Source+Sans+3:ital,wght@0,200..900;1,200..900"
  },
  {
    "id": "nunito",
    "name": "Nunito",
    "family": "'Nunito', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "rounded",
      "friendly",
      "playful"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams & Jacques Le Bailly",
    "description": "A well-balanced, rounded terminal sans-serif with a warm and approachable aesthetic popular in mobile apps and modern UI.",
    "tags": [
      "rounded",
      "friendly",
      "mobile",
      "soft"
    ],
    "popularity": 96,
    "suggestedPairings": [
      "playfair-display",
      "alegreya"
    ],
    "useCases": [
      "ui",
      "website",
      "branding",
      "social-media"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Nunito:ital,wght@0,200..1000;1,200..1000"
  },
  {
    "id": "nunito-sans",
    "name": "Nunito Sans",
    "family": "'Nunito Sans', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "humanist",
      "neutral",
      "ui"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams & Jacques Le Bailly",
    "description": "The sharp-cornered companion to Nunito, providing high-speed text legibility with a comprehensive variable weight axis.",
    "tags": [
      "ui",
      "clean",
      "versatile",
      "modern"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "cormorant-garamond",
      "spectral"
    ],
    "useCases": [
      "ui",
      "website",
      "editorial",
      "resume"
    ],
    "fallback": "system-ui, sans-serif",
    "googleFontQuery": "Nunito+Sans:ital,wght@0,200..1000;1,200..1000"
  },
  {
    "id": "raleway",
    "name": "Raleway",
    "family": "'Raleway', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "elegant",
      "display"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Matt McInerney",
    "description": "An elegant geometric sans-serif known for its signature crossing \"W\", lightweight display forms, and high-fashion feel.",
    "tags": [
      "elegant",
      "geometric",
      "fashion",
      "clean"
    ],
    "popularity": 96,
    "suggestedPairings": [
      "merriweather",
      "lora"
    ],
    "useCases": [
      "branding",
      "website",
      "presentation",
      "poster"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Raleway:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "ubuntu",
    "name": "Ubuntu",
    "family": "'Ubuntu', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "humanist",
      "tech",
      "distinct"
    ],
    "weights": [
      300,
      400,
      500,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "Ubuntu Font License 1.0",
    "licenseUrl": "https://ubuntu.com/legal/font-licence",
    "author": "Dalton Maag",
    "description": "The iconic open-source humanist font developed for Canonical’s Ubuntu OS, recognized worldwide for its contemporary tech clarity.",
    "tags": [
      "tech",
      "linux",
      "modern",
      "distinctive"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "ubuntu-mono",
      "lora"
    ],
    "useCases": [
      "tech",
      "ui",
      "website"
    ],
    "fallback": "system-ui, sans-serif",
    "googleFontQuery": "Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700"
  },
  {
    "id": "rubik",
    "name": "Rubik",
    "family": "'Rubik', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "rounded",
      "friendly"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Hubert & Fischer",
    "description": "A rounded geometric sans-serif designed for the Rubik’s Cube exhibition, offering heavy display weights and friendly vibes.",
    "tags": [
      "rounded",
      "bold",
      "friendly",
      "modern"
    ],
    "popularity": 95,
    "suggestedPairings": [
      "karla",
      "merriweather"
    ],
    "useCases": [
      "logo",
      "ui",
      "social-media",
      "branding"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Rubik:ital,wght@0,300..900;1,300..900"
  },
  {
    "id": "barlow",
    "name": "Barlow",
    "family": "'Barlow', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "grotesque",
      "industrial",
      "california"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Jeremy Tribby",
    "description": "A slightly rounded, low-contrast grotesque inspired by California public signage and license plates.",
    "tags": [
      "industrial",
      "signage",
      "clean",
      "retro"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "fraunces",
      "lora"
    ],
    "useCases": [
      "poster",
      "website",
      "branding",
      "ui"
    ],
    "fallback": "system-ui, sans-serif",
    "googleFontQuery": "Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
  },
  {
    "id": "barlow-condensed",
    "name": "Barlow Condensed",
    "family": "'Barlow Condensed', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "condensed",
      "industrial",
      "headline"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Jeremy Tribby",
    "description": "The condensed sister of Barlow, designed for space-efficient punchy titles and highway-scale typography.",
    "tags": [
      "condensed",
      "headline",
      "poster"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "barlow",
      "merriweather"
    ],
    "useCases": [
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
  },
  {
    "id": "quicksand",
    "name": "Quicksand",
    "family": "'Quicksand', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "rounded",
      "geometric",
      "aesthetic"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Andrew Paglinawan",
    "description": "A display sans-serif with rounded terminals and clear geometric bones, widely used across friendly startups and aesthetic creators.",
    "tags": [
      "rounded",
      "aesthetic",
      "friendly",
      "cute"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "eb-garamond",
      "lora"
    ],
    "useCases": [
      "branding",
      "social-media",
      "website",
      "logo"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Quicksand:wght@300..700"
  },
  {
    "id": "heebo",
    "name": "Heebo",
    "family": "'Heebo', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "neo-grotesque",
      "neutral",
      "screen-optimized"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Oded Ezer",
    "description": "A Hebrew and Latin companion font based on the crisp geometries of Roboto with excellent screen fidelity.",
    "tags": [
      "neutral",
      "clean",
      "swiss",
      "ui"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "playfair-display",
      "spectral"
    ],
    "useCases": [
      "ui",
      "website",
      "code"
    ],
    "fallback": "system-ui, sans-serif",
    "googleFontQuery": "Heebo:wght@100..900"
  },
  {
    "id": "overpass",
    "name": "Overpass",
    "family": "'Overpass', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "highway",
      "grotesque",
      "tech"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Delve Withrington (Red Hat)",
    "description": "Inspired by the FHWA series of fonts used for American road signs, Overpass delivers instant recognition at any scale.",
    "tags": [
      "highway",
      "redhat",
      "tech",
      "bold"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "overpass-mono",
      "lora"
    ],
    "useCases": [
      "ui",
      "website",
      "tech",
      "poster"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Overpass:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "titillium-web",
    "name": "Titillium Web",
    "family": "'Titillium Web', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "tech",
      "geometric",
      "italian"
    ],
    "weights": [
      200,
      300,
      400,
      600,
      700,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Accademia di Belle Arti di Urbino",
    "description": "A tech-forward, squarish sans-serif born out of a master design program in Italy, beloved in engineering and cyber interfaces.",
    "tags": [
      "tech",
      "cyberpunk",
      "engineering",
      "gaming"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "roboto-mono",
      "bitter"
    ],
    "useCases": [
      "tech",
      "gaming",
      "ui",
      "website"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700"
  },
  {
    "id": "assistant",
    "name": "Assistant",
    "family": "'Assistant', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "humanist",
      "clean",
      "legible"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Ben Nathan",
    "description": "A Hebrew and Latin typeface based on the modernist sans tradition, exceptionally comfortable for long reading on mobile screens.",
    "tags": [
      "clean",
      "editorial",
      "modern",
      "humanist"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "playfair-display",
      "newsreader"
    ],
    "useCases": [
      "website",
      "editorial",
      "ui"
    ],
    "fallback": "system-ui, sans-serif",
    "googleFontQuery": "Assistant:wght@200..800"
  },
  {
    "id": "public-sans",
    "name": "Public Sans",
    "family": "'Public Sans', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "neutral",
      "governmental",
      "accessible"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "USWDS (United States Web Design System)",
    "description": "An open-source, neutral, accessible typeface designed specifically for the United States government websites and public digital tools.",
    "tags": [
      "government",
      "accessibility",
      "neutral",
      "clean"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "merriweather",
      "cormorant-garamond"
    ],
    "useCases": [
      "website",
      "ui",
      "presentation",
      "resume"
    ],
    "fallback": "system-ui, sans-serif",
    "googleFontQuery": "Public+Sans:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "figtree",
    "name": "Figtree",
    "family": "'Figtree', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "friendly",
      "modern"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Erik Kennedy",
    "description": "A clean geometric sans-serif designed by UX designer Erik Kennedy, featuring cheerful proportions and crisp screen rendering.",
    "tags": [
      "modern",
      "friendly",
      "ui",
      "geometric"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "fraunces",
      "newsreader"
    ],
    "useCases": [
      "ui",
      "website",
      "branding",
      "presentation"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Figtree:ital,wght@0,300..900;1,300..900"
  },
  {
    "id": "urbanist",
    "name": "Urbanist",
    "family": "'Urbanist', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "minimal",
      "modern"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Corey Hu",
    "description": "A low-contrast, geometric sans-serif typeface inspired by modern urban architecture and Swiss typography minimalism.",
    "tags": [
      "architectural",
      "minimal",
      "geometric",
      "modern"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "bodoni-moda",
      "playfair-display"
    ],
    "useCases": [
      "branding",
      "website",
      "logo",
      "ui"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Urbanist:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "lexend",
    "name": "Lexend",
    "family": "'Lexend', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "dyslexia-friendly",
      "readable",
      "educational"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Thomas Jockin",
    "description": "Empirically proven to improve reading fluency and comprehension across readers of all proficiencies.",
    "tags": [
      "accessibility",
      "educational",
      "reading",
      "clean"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "merriweather",
      "lora"
    ],
    "useCases": [
      "website",
      "editorial",
      "ui",
      "presentation"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Lexend:wght@100..900"
  },
  {
    "id": "lexend-deca",
    "name": "Lexend Deca",
    "family": "'Lexend Deca', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "expanded",
      "readable",
      "modern"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Thomas Jockin",
    "description": "The standard tracking variant of the Lexend series, ideal for crystal-clear interface button labels and titles.",
    "tags": [
      "readable",
      "ui",
      "modern",
      "clean"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "newsreader",
      "spectral"
    ],
    "useCases": [
      "ui",
      "website",
      "branding"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Lexend+Deca:wght@100..900"
  },
  {
    "id": "instrument-sans",
    "name": "Instrument Sans",
    "family": "'Instrument Sans', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "neo-grotesque",
      "contemporary",
      "tech"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Instrument & Rodrigo Fuenzalida",
    "description": "A contemporary variable neo-grotesque with refined proportions and mechanical warmth engineered for software tools.",
    "tags": [
      "design-system",
      "tech",
      "modern",
      "minimal"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "instrument-serif",
      "playfair-display"
    ],
    "useCases": [
      "ui",
      "website",
      "branding",
      "tech"
    ],
    "fallback": "system-ui, sans-serif",
    "googleFontQuery": "Instrument+Sans:ital,wght@0,400..700;1,400..700"
  },
  {
    "id": "albert-sans",
    "name": "Albert Sans",
    "family": "'Albert Sans', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "scandinavian",
      "modern"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Andreas Rasmussen",
    "description": "A modern geometric sans inspired by Scandinavian typography characteristics of the early 20th century.",
    "tags": [
      "scandinavian",
      "clean",
      "geometric",
      "nordic"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "cormorant-garamond",
      "lora"
    ],
    "useCases": [
      "website",
      "branding",
      "presentation"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Albert+Sans:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "sora",
    "name": "Sora",
    "family": "'Sora', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "cyber",
      "ui"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Barnbrook & Jonathan Barnbrook",
    "description": "Designed for low-resolution interfaces and handheld crypto hardware, featuring high visual impact and futuristic charm.",
    "tags": [
      "futuristic",
      "crypto",
      "fintech",
      "modern"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "jetbrains-mono",
      "syne"
    ],
    "useCases": [
      "tech",
      "gaming",
      "website",
      "branding"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Sora:wght@100..800"
  },
  {
    "id": "spline-sans",
    "name": "Spline Sans",
    "family": "'Spline Sans', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "tech",
      "ui",
      "creative"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Eben Sorkin & Mirko Velimirovic",
    "description": "Commissioned for the 3D design software Spline, crafted for user interface readability and vector graphics alignment.",
    "tags": [
      "3d",
      "ui",
      "tech",
      "clean"
    ],
    "popularity": 86,
    "suggestedPairings": [
      "space-mono",
      "unbounded"
    ],
    "useCases": [
      "ui",
      "tech",
      "website"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Spline+Sans:wght@300..700"
  },
  {
    "id": "be-vietnam-pro",
    "name": "Be Vietnam Pro",
    "family": "'Be Vietnam Pro', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "contemporary",
      "neo-grotesque",
      "multilingual"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Lam Bao (Tiệm Phông)",
    "description": "A neo-grotesque designed with Vietnamese diacritics in mind, delivering outstanding contemporary tech layout balance.",
    "tags": [
      "tech",
      "vietnamese",
      "clean",
      "international"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "playfair-display",
      "lora"
    ],
    "useCases": [
      "website",
      "ui",
      "branding"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
  },
  {
    "id": "red-hat-display",
    "name": "Red Hat Display",
    "family": "'Red Hat Display', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "enterprise",
      "brand"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "MCKL (Jeremy Mickel)",
    "description": "The open-source headline typeface of Red Hat, blending humanist warmth with authoritative corporate presence.",
    "tags": [
      "enterprise",
      "redhat",
      "headline",
      "tech"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "red-hat-text",
      "red-hat-mono"
    ],
    "useCases": [
      "branding",
      "presentation",
      "website"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Red+Hat+Display:ital,wght@0,300..900;1,300..900"
  },
  {
    "id": "red-hat-text",
    "name": "Red Hat Text",
    "family": "'Red Hat Text', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "body",
      "legible",
      "enterprise"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "MCKL (Jeremy Mickel)",
    "description": "Designed in tandem with Red Hat Display, specifically calibrated for dense documentation, prose, and dashboards.",
    "tags": [
      "reading",
      "enterprise",
      "ui",
      "documentation"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "red-hat-display",
      "merriweather"
    ],
    "useCases": [
      "website",
      "editorial",
      "ui"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Red+Hat+Text:ital,wght@0,300..700;1,300..700"
  },
  {
    "id": "jost",
    "name": "Jost",
    "family": "'Jost', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "futura-inspired",
      "bauhaus"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Owen Earl",
    "description": "An open-source geometric sans inspired by 1920s German Bauhaus master Paul Renner and Futura.",
    "tags": [
      "bauhaus",
      "futura",
      "geometric",
      "retro"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "playfair-display",
      "cormorant-garamond"
    ],
    "useCases": [
      "branding",
      "logo",
      "website",
      "poster"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Jost:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "cabin",
    "name": "Cabin",
    "family": "'Cabin', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "humanist",
      "clean",
      "modern"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Pablo Impallari",
    "description": "A humanist sans-serif inspired by Edward Johnston and Eric Gill typefaces, incorporating modernist optical corrections.",
    "tags": [
      "humanist",
      "clean",
      "friendly",
      "editorial"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "bitter",
      "lora"
    ],
    "useCases": [
      "website",
      "ui",
      "presentation"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Cabin:ital,wght@0,400..700;1,400..700"
  },
  {
    "id": "archivo",
    "name": "Archivo",
    "family": "'Archivo', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "grotesque",
      "nineteenth-century",
      "bold"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Omnibus-Type",
    "description": "An omni-purpose grotesque reminiscent of late nineteenth-century American types, built for high-performance publishing.",
    "tags": [
      "grotesque",
      "bold",
      "editorial",
      "poster"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "spectral",
      "newsreader"
    ],
    "useCases": [
      "editorial",
      "poster",
      "website"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Archivo:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "archivo-narrow",
    "name": "Archivo Narrow",
    "family": "'Archivo Narrow', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "condensed",
      "headline",
      "grotesque"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Omnibus-Type",
    "description": "The condensed sister of Archivo, perfect for tight news banners, tables, and powerful lead headlines.",
    "tags": [
      "condensed",
      "headline",
      "compact"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "lora",
      "merriweather"
    ],
    "useCases": [
      "editorial",
      "poster",
      "website"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Archivo+Narrow:ital,wght@0,400..700;1,400..700"
  },
  {
    "id": "inter-tight",
    "name": "Inter Tight",
    "family": "'Inter Tight', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "compact",
      "screen-optimized",
      "ui"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Rasmus Andersson",
    "description": "A tighter horizontal tracking version of the celebrated Inter typeface family, ideal for high-density UI components.",
    "tags": [
      "ui",
      "compact",
      "modern",
      "clean"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "playfair-display",
      "merriweather"
    ],
    "useCases": [
      "ui",
      "website",
      "tech"
    ],
    "fallback": "system-ui, sans-serif",
    "googleFontQuery": "Inter+Tight:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "onest",
    "name": "Onest",
    "family": "'Onest', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "moldova",
      "modern"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Dmitry Voloshin & Simpals",
    "description": "The first official typeface for Moldova, engineered for openness, supreme readability, and effortless screen layout.",
    "tags": [
      "geometric",
      "modern",
      "clean",
      "open"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "cormorant-garamond",
      "bitter"
    ],
    "useCases": [
      "website",
      "ui",
      "presentation"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Onest:wght@100..900"
  },
  {
    "id": "chivo",
    "name": "Chivo",
    "family": "'Chivo', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "grotesque",
      "headline",
      "contemporary"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Héctor Gatti",
    "description": "A grotesque typeface with great elegance and strength, ideal for punchy titles, magazine covers, and digital branding.",
    "tags": [
      "grotesque",
      "editorial",
      "contemporary",
      "strong"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "spectral",
      "cardo"
    ],
    "useCases": [
      "editorial",
      "poster",
      "website",
      "branding"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Chivo:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "hanken-grotesk",
    "name": "Hanken Grotesk",
    "family": "'Hanken Grotesk', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "neo-grotesque",
      "geometric",
      "display"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Alfredo Marco Pradil",
    "description": "Inspired by early 20th-century European sans-serifs, providing versatile optical balance from thin hairlines to extra bold black.",
    "tags": [
      "neo-grotesque",
      "versatile",
      "modern",
      "clean"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "newsreader",
      "merriweather"
    ],
    "useCases": [
      "branding",
      "website",
      "ui",
      "logo"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Hanken+Grotesk:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "karla",
    "name": "Karla",
    "family": "'Karla', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "grotesque",
      "quirky",
      "humanist"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Jonny Pinhorn",
    "description": "A quirky and charismatic grotesque typeface that brings playful warmth and distinctive character to modern web design.",
    "tags": [
      "quirky",
      "friendly",
      "editorial",
      "modern"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "cormorant-garamond",
      "lora"
    ],
    "useCases": [
      "website",
      "branding",
      "editorial"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Karla:ital,wght@0,200..800;1,200..800"
  },
  {
    "id": "maven-pro",
    "name": "Maven Pro",
    "family": "'Maven Pro', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "rounded",
      "modern",
      "flowing"
    ],
    "weights": [
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Joe Prince",
    "description": "A sans-serif typeface with unique curvature and high vertical terminals, distinguished for web navigation and modern identity.",
    "tags": [
      "flowing",
      "rounded",
      "modern",
      "tech"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "lora",
      "playfair-display"
    ],
    "useCases": [
      "logo",
      "branding",
      "website"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Maven+Pro:wght@400..900"
  },
  {
    "id": "asap",
    "name": "Asap",
    "family": "'Asap', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "rounded",
      "omni-width",
      "screen"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Omnibus-Type",
    "description": "Short for \"As Soon As Possible\", designed so that changing font weights preserves identical line lengths.",
    "tags": [
      "smart",
      "ui",
      "rounded",
      "clean"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "merriweather",
      "bitter"
    ],
    "useCases": [
      "ui",
      "website",
      "presentation"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Asap:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "mukta",
    "name": "Mukta",
    "family": "'Mukta', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "humanist",
      "multilingual",
      "modern"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Ek Type",
    "description": "A contemporary Unicode Devanagari and Latin typeface family engineered for Indian newspapers and high-density portals.",
    "tags": [
      "devanagari",
      "humanist",
      "international",
      "clean"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "lora",
      "eb-garamond"
    ],
    "useCases": [
      "website",
      "editorial",
      "ui"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Mukta:wght@200;300;400;500;600;700;800"
  },
  {
    "id": "pt-sans",
    "name": "PT Sans",
    "family": "'PT Sans', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "humanist",
      "national",
      "clean"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "ParaType",
    "description": "Developed for the Public Types of the Russian Federation, combining Russian graphic heritage with modern Western design.",
    "tags": [
      "cyrillic",
      "humanist",
      "universal",
      "reliable"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "pt-serif",
      "lora"
    ],
    "useCases": [
      "editorial",
      "website",
      "presentation"
    ],
    "fallback": "system-ui, sans-serif",
    "googleFontQuery": "PT+Sans:ital,wght@0,400;0,700;1,400;1,700"
  },
  {
    "id": "fira-sans",
    "name": "Fira Sans",
    "family": "'Fira Sans', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "humanist",
      "mozilla",
      "tech"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Carrois Apostrophe & Erik Spiekermann",
    "description": "Commissioned by Mozilla for Firefox OS, designed by legendary typographer Erik Spiekermann for exceptional small-screen clarity.",
    "tags": [
      "mozilla",
      "spiekermann",
      "tech",
      "ui"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "fira-code",
      "merriweather"
    ],
    "useCases": [
      "tech",
      "ui",
      "website",
      "code"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
  },
  {
    "id": "catamaran",
    "name": "Catamaran",
    "family": "'Catamaran', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "humanist",
      "tamil",
      "refined"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Pothana2000",
    "description": "A 9-weight Tamil and Latin typeface family with organic humanist brush details and balanced counter spaces.",
    "tags": [
      "tamil",
      "humanist",
      "clean",
      "multilingual"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "playfair-display",
      "spectral"
    ],
    "useCases": [
      "website",
      "editorial",
      "branding"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Catamaran:wght@100..900"
  },
  {
    "id": "signika",
    "name": "Signika",
    "family": "'Signika', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "wayfinding",
      "signage",
      "clear"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Anna Giedryś",
    "description": "A signage typeface with a gentle, friendly character designed specifically for wayfinding and high-visibility public direction.",
    "tags": [
      "signage",
      "wayfinding",
      "clear",
      "legible"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "merriweather",
      "playfair-display"
    ],
    "useCases": [
      "poster",
      "website",
      "ui"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Signika:wght@300..700"
  },
  {
    "id": "questrial",
    "name": "Questrial",
    "family": "'Questrial', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "minimal",
      "modern"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Joe Prince",
    "description": "A circle-based geometric sans-serif that echoes early Swiss modernism while staying fresh for web interfaces.",
    "tags": [
      "geometric",
      "circle",
      "modern",
      "clean"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "playfair-display",
      "lora"
    ],
    "useCases": [
      "branding",
      "website",
      "logo",
      "presentation"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Questrial&display=swap"
  },
  {
    "id": "pt-serif",
    "name": "PT Serif",
    "family": "'PT Serif', serif",
    "category": "serif",
    "subcategories": [
      "transitional",
      "editorial",
      "academic"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "ParaType",
    "description": "A transitional serif typeface featuring high legibility, robust serifs, and exceptional rendering in dense academic texts.",
    "tags": [
      "academic",
      "book",
      "editorial",
      "reliable"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "pt-sans",
      "inter"
    ],
    "useCases": [
      "editorial",
      "resume",
      "website"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "PT+Serif:ital,wght@0,400;0,700;1,400;1,700"
  },
  {
    "id": "roboto-serif",
    "name": "Roboto Serif",
    "family": "'Roboto Serif', serif",
    "category": "serif",
    "subcategories": [
      "variable",
      "optical-size",
      "modern"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Commercial Type & Greg Shutters",
    "description": "A variable serif designed to match Roboto, offering optical size adjustments from tiny footnotes to gigantic billboard display.",
    "tags": [
      "commercial-type",
      "variable",
      "editorial",
      "google"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "roboto",
      "roboto-mono"
    ],
    "useCases": [
      "editorial",
      "website",
      "ui",
      "presentation"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900"
  },
  {
    "id": "noto-serif",
    "name": "Noto Serif",
    "family": "'Noto Serif', serif",
    "category": "serif",
    "subcategories": [
      "universal",
      "transitional",
      "reading"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Google",
    "description": "Part of Google’s global Noto family created to eliminate \"tofu\" blank boxes across all world alphabets and scripts.",
    "tags": [
      "noto",
      "universal",
      "book",
      "reliable"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "noto-sans",
      "inter"
    ],
    "useCases": [
      "editorial",
      "website",
      "presentation"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Noto+Serif:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "libre-bodoni",
    "name": "Libre Bodoni",
    "family": "'Libre Bodoni', serif",
    "category": "serif",
    "subcategories": [
      "didone",
      "high-fashion",
      "luxury"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Pablo Impallari",
    "description": "A faithful digital revival of 19th-century Giambattista Bodoni types, bringing high contrast and high couture luxury to the web.",
    "tags": [
      "luxury",
      "fashion",
      "bodoni",
      "couture"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "montserrat",
      "raleway"
    ],
    "useCases": [
      "logo",
      "branding",
      "editorial",
      "poster"
    ],
    "fallback": "\"Didot\", \"Bodoni MT\", serif",
    "googleFontQuery": "Libre+Bodoni:ital,wght@0,400..700;1,400..700"
  },
  {
    "id": "eb-garamond",
    "name": "EB Garamond",
    "family": "'EB Garamond', serif",
    "category": "serif",
    "subcategories": [
      "old-style",
      "humanist",
      "literary"
    ],
    "weights": [
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Georg Duffner",
    "description": "An open-source masterpiece reviving Claude Garamont’s 1592 specimens, regarded by typographers as one of the finest book fonts.",
    "tags": [
      "garamond",
      "classic",
      "literature",
      "renaissance"
    ],
    "popularity": 96,
    "suggestedPairings": [
      "inter",
      "karla",
      "montserrat"
    ],
    "useCases": [
      "editorial",
      "website",
      "resume",
      "branding"
    ],
    "fallback": "Garamond, \"Baskerville\", serif",
    "googleFontQuery": "EB+Garamond:ital,wght@0,400..800;1,400..800"
  },
  {
    "id": "frank-ruhl-libre",
    "name": "Frank Ruhl Libre",
    "family": "'Frank Ruhl Libre', serif",
    "category": "serif",
    "subcategories": [
      "transitional",
      "hebrew",
      "literary"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Yanek Iontef",
    "description": "The definitive classic Hebrew and Latin book face, prized for dignified warmth and elegant stroke dynamics.",
    "tags": [
      "literary",
      "hebrew",
      "classic",
      "noble"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "assistant",
      "plus-jakarta-sans"
    ],
    "useCases": [
      "editorial",
      "website",
      "branding"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Frank+Ruhl+Libre:wght@300..900"
  },
  {
    "id": "crimson-text",
    "name": "Crimson Text",
    "family": "'Crimson Text', serif",
    "category": "serif",
    "subcategories": [
      "old-style",
      "garalde",
      "book"
    ],
    "weights": [
      400,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Sebastian Kosch",
    "description": "Inspired by the work of masters Jan Tschichold and Claude Garamont, optimized specifically for comfortable book typography.",
    "tags": [
      "book",
      "academic",
      "classic",
      "gentle"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "work-sans",
      "inter"
    ],
    "useCases": [
      "editorial",
      "resume",
      "website"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700"
  },
  {
    "id": "crimson-pro",
    "name": "Crimson Pro",
    "family": "'Crimson Pro', serif",
    "category": "serif",
    "subcategories": [
      "old-style",
      "variable",
      "reading"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Jacques Le Bailly",
    "description": "The modern variable successor to Crimson Text, featuring full optical sizing and rich weight axes for long-form publishing.",
    "tags": [
      "variable",
      "book",
      "refined",
      "literature"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "dm-sans",
      "inter"
    ],
    "useCases": [
      "editorial",
      "website",
      "resume"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Crimson+Pro:ital,wght@0,200..900;1,200..900"
  },
  {
    "id": "domine",
    "name": "Domine",
    "family": "'Domine', serif",
    "category": "serif",
    "subcategories": [
      "transitional",
      "web-first",
      "editorial"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Impallari Type",
    "description": "Engineered specifically for web reading, with large x-height and sturdy brackets that perform exceptionally on Retina screens.",
    "tags": [
      "web-reading",
      "sturdy",
      "editorial",
      "modern"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "open-sans",
      "karla"
    ],
    "useCases": [
      "website",
      "editorial",
      "presentation"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Domine:wght@400..700"
  },
  {
    "id": "bitter",
    "name": "Bitter",
    "family": "'Bitter', serif",
    "category": "serif",
    "subcategories": [
      "slab",
      "contemporary",
      "screen"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Sol Matas",
    "description": "A contemporary slab-serif designed from the ground up for comfortable reading on computers and handheld screens.",
    "tags": [
      "slab-serif",
      "editorial",
      "screen-reading",
      "sturdy"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "cabin",
      "source-sans-3"
    ],
    "useCases": [
      "editorial",
      "website",
      "presentation"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Bitter:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "dm-serif-display",
    "name": "DM Serif Display",
    "family": "'DM Serif Display', serif",
    "category": "serif",
    "subcategories": [
      "transitional",
      "headline",
      "dramatic"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Colophon Foundry",
    "description": "A high-contrast transitional serif with sharp bracketed terminals, designed for high-impact headlines and posters.",
    "tags": [
      "colophon",
      "headline",
      "dramatic",
      "editorial"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "dm-sans",
      "inter"
    ],
    "useCases": [
      "branding",
      "logo",
      "editorial",
      "poster"
    ],
    "fallback": "\"Times New Roman\", serif",
    "googleFontQuery": "DM+Serif+Display:ital@0;1"
  },
  {
    "id": "dm-serif-text",
    "name": "DM Serif Text",
    "family": "'DM Serif Text', serif",
    "category": "serif",
    "subcategories": [
      "transitional",
      "body",
      "colophon"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Colophon Foundry",
    "description": "The body text counterpart to DM Serif Display, featuring moderate contrast calibrated for medium reading lengths.",
    "tags": [
      "colophon",
      "reading",
      "transitional",
      "clean"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "dm-sans",
      "poppins"
    ],
    "useCases": [
      "editorial",
      "website",
      "resume"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "DM+Serif+Text:ital@0;1"
  },
  {
    "id": "marcellus",
    "name": "Marcellus",
    "family": "'Marcellus', serif",
    "category": "serif",
    "subcategories": [
      "flared",
      "roman",
      "classical"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Astigmatic",
    "description": "Inspired by classical Roman inscriptions and Celtic stone carvings, Marcellus exudes timeless majesty and cultural authority.",
    "tags": [
      "roman",
      "classical",
      "inscriptional",
      "luxury"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "lato",
      "montserrat"
    ],
    "useCases": [
      "branding",
      "logo",
      "poster",
      "editorial"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Marcellus&display=swap"
  },
  {
    "id": "cinzel-decorative",
    "name": "Cinzel Decorative",
    "family": "'Cinzel Decorative', serif",
    "category": "serif",
    "subcategories": [
      "roman",
      "flourished",
      "cinematic"
    ],
    "weights": [
      400,
      700,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Natanael Gama",
    "description": "An ornamental display version of Cinzel featuring elegant swashes, ornate terminals, and grand Roman capitals.",
    "tags": [
      "ornamental",
      "swash",
      "cinematic",
      "epic"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "cinzel",
      "inter"
    ],
    "useCases": [
      "logo",
      "poster",
      "gaming",
      "branding"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Cinzel+Decorative:wght@400;700;900"
  },
  {
    "id": "cormorant",
    "name": "Cormorant",
    "family": "'Cormorant', serif",
    "category": "serif",
    "subcategories": [
      "garamond",
      "delicate",
      "editorial"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Christian Thalmann",
    "description": "The core family of the Cormorant project, known for breathtakingly fine hairline details and Renaissance proportions.",
    "tags": [
      "renaissance",
      "delicate",
      "luxury",
      "poetry"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "proza-libre",
      "montserrat"
    ],
    "useCases": [
      "editorial",
      "branding",
      "website"
    ],
    "fallback": "Garamond, serif",
    "googleFontQuery": "Cormorant:ital,wght@0,300..700;1,300..700"
  },
  {
    "id": "cormorant-infant",
    "name": "Cormorant Infant",
    "family": "'Cormorant Infant', serif",
    "category": "serif",
    "subcategories": [
      "literary",
      "educational",
      "refined"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Christian Thalmann",
    "description": "Features single-story \"a\" and \"g\" letterforms, merging classical elegance with early reading accessibility.",
    "tags": [
      "literary",
      "single-story",
      "elegant",
      "reading"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "inter",
      "lato"
    ],
    "useCases": [
      "editorial",
      "branding",
      "presentation"
    ],
    "fallback": "Garamond, serif",
    "googleFontQuery": "Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700"
  },
  {
    "id": "cormorant-sc",
    "name": "Cormorant SC",
    "family": "'Cormorant SC', serif",
    "category": "serif",
    "subcategories": [
      "small-caps",
      "monumental",
      "classical"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Christian Thalmann",
    "description": "True small capitals for Cormorant, creating sophisticated header badges, diplomas, and luxury labels.",
    "tags": [
      "small-caps",
      "monumental",
      "badges",
      "luxury"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "logo",
      "branding",
      "editorial"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Cormorant+SC:wght@300;400;500;600;700"
  },
  {
    "id": "vollkorn",
    "name": "Vollkorn",
    "family": "'Vollkorn', serif",
    "category": "serif",
    "subcategories": [
      "book",
      "german",
      "sturdy"
    ],
    "weights": [
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Friedrich Althausen",
    "description": "Translating to \"whole grain\" in German, Vollkorn is intended to be a quiet, reliable everyday typeface for books and prose.",
    "tags": [
      "german",
      "book",
      "sturdy",
      "reliable"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "lato",
      "inter"
    ],
    "useCases": [
      "editorial",
      "website",
      "resume"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Vollkorn:ital,wght@0,400..900;1,400..900"
  },
  {
    "id": "rozha-one",
    "name": "Rozha One",
    "family": "'Rozha One', serif",
    "category": "serif",
    "subcategories": [
      "didone",
      "high-contrast",
      "headline"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Indian Type Foundry",
    "description": "An opulent didone with extreme stroke contrast between razor-thin hairlines and immense heavy stems, popular in fashion magazines.",
    "tags": [
      "fashion",
      "didone",
      "extreme-contrast",
      "vogue"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "montserrat",
      "poppins"
    ],
    "useCases": [
      "logo",
      "poster",
      "social-media",
      "branding"
    ],
    "fallback": "\"Didot\", serif",
    "googleFontQuery": "Rozha+One&display=swap"
  },
  {
    "id": "cardo",
    "name": "Cardo",
    "family": "'Cardo', serif",
    "category": "serif",
    "subcategories": [
      "renaissance",
      "humanist",
      "scholarly"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "David Perry",
    "description": "Designed specifically for classicists, biblical scholars, and medievalists who need extensive Greek, Hebrew, and Latin ligature support.",
    "tags": [
      "scholarly",
      "renaissance",
      "classical",
      "latin"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "karla",
      "inter"
    ],
    "useCases": [
      "editorial",
      "website",
      "presentation"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Cardo:ital,wght@0,400;0,700;1,400"
  },
  {
    "id": "faustina",
    "name": "Faustina",
    "family": "'Faustina', serif",
    "category": "serif",
    "subcategories": [
      "editorial",
      "newspaper",
      "legible"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Omnibus-Type",
    "description": "A contemporary serif engineered for journalism, editorial magazines, and newspapers with high-speed recognition.",
    "tags": [
      "newspaper",
      "journalism",
      "editorial",
      "fast"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "archivo",
      "chivo"
    ],
    "useCases": [
      "editorial",
      "website",
      "resume"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Faustina:ital,wght@0,300..800;1,300..800"
  },
  {
    "id": "besley",
    "name": "Besley",
    "family": "'Besley', serif",
    "category": "serif",
    "subcategories": [
      "clarendon",
      "sturdy",
      "victorian"
    ],
    "weights": [
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Indestructible Type (Owen Earl)",
    "description": "A revival of the first patented typeface design in history: Robert Besley’s 1845 Clarendon serif.",
    "tags": [
      "clarendon",
      "victorian",
      "sturdy",
      "historic"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "jost",
      "inter"
    ],
    "useCases": [
      "branding",
      "poster",
      "editorial"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Besley:ital,wght@0,400..900;1,400..900"
  },
  {
    "id": "bellefair",
    "name": "Bellefair",
    "family": "'Bellefair', serif",
    "category": "serif",
    "subcategories": [
      "editorial",
      "tall",
      "delicate"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Shinntype & Nick Shinn",
    "description": "A tall, delicate display serif with high ascenders and narrow proportions, beloved for luxury menus and boutique websites.",
    "tags": [
      "boutique",
      "luxury",
      "tall",
      "fashion"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "barlow",
      "montserrat"
    ],
    "useCases": [
      "branding",
      "poster",
      "logo",
      "editorial"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Bellefair&display=swap"
  },
  {
    "id": "gilda-display",
    "name": "Gilda Display",
    "family": "'Gilda Display', serif",
    "category": "serif",
    "subcategories": [
      "didone",
      "fashion",
      "editorial"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Eduardo Tunni",
    "description": "A classic didone typeface with ball terminals, high contrast, and a glamorous editorial aesthetic.",
    "tags": [
      "didone",
      "glamour",
      "luxury",
      "editorial"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "lato",
      "poppins"
    ],
    "useCases": [
      "branding",
      "poster",
      "social-media"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Gilda+Display&display=swap"
  },
  {
    "id": "oranienbaum",
    "name": "Oranienbaum",
    "family": "'Oranienbaum', serif",
    "category": "serif",
    "subcategories": [
      "antiqua",
      "high-contrast",
      "russian"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Oleg Pospelov",
    "description": "A modern antiqua inspired by early 20th-century Russian lettering with dramatic stroke contrasts.",
    "tags": [
      "antiqua",
      "russian",
      "editorial",
      "dramatic"
    ],
    "popularity": 86,
    "suggestedPairings": [
      "open-sans",
      "inter"
    ],
    "useCases": [
      "branding",
      "poster",
      "logo"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Oranienbaum&display=swap"
  },
  {
    "id": "spectral-sc",
    "name": "Spectral SC",
    "family": "'Spectral SC', serif",
    "category": "serif",
    "subcategories": [
      "small-caps",
      "screen-first",
      "production-type"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Production Type",
    "description": "Small caps variant of the screen-first Spectral family, providing immaculate typographic refinement.",
    "tags": [
      "small-caps",
      "production-type",
      "screen",
      "elegant"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "spectral",
      "inter"
    ],
    "useCases": [
      "editorial",
      "branding",
      "resume"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Spectral+SC:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800"
  },
  {
    "id": "forum",
    "name": "Forum",
    "family": "'Forum', serif",
    "category": "serif",
    "subcategories": [
      "roman",
      "archaic",
      "classical"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Denis Masharov",
    "description": "An antiqua with classic Roman proportions, monumental capitals, and subtle hand-chiseled glyph contours.",
    "tags": [
      "chiseled",
      "roman",
      "archaic",
      "luxury"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "montserrat",
      "raleway"
    ],
    "useCases": [
      "logo",
      "branding",
      "poster",
      "editorial"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Forum&display=swap"
  },
  {
    "id": "amiri",
    "name": "Amiri",
    "family": "'Amiri', serif",
    "category": "serif",
    "subcategories": [
      "naskh",
      "arabic",
      "calligraphic"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Khaled Hosny",
    "description": "A classical Arabic and Latin typeface reviving the Naskh calligraphy tradition of Bulaq Press books.",
    "tags": [
      "arabic",
      "calligraphic",
      "classic",
      "naskh"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "inter",
      "lato"
    ],
    "useCases": [
      "editorial",
      "website",
      "branding"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Amiri:ital,wght@0,400;0,700;1,400;1,700"
  },
  {
    "id": "alice",
    "name": "Alice",
    "family": "'Alice', serif",
    "category": "serif",
    "subcategories": [
      "quaint",
      "victorian",
      "storytelling"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Ksenia Erulevich",
    "description": "Inspired by Lewis Carroll’s Alice in Wonderland, featuring quaint bookish curves and whimsical storytelling charm.",
    "tags": [
      "whimsical",
      "storytelling",
      "fairytale",
      "book"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "open-sans",
      "quicksand"
    ],
    "useCases": [
      "branding",
      "social-media",
      "editorial"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Alice&display=swap"
  },
  {
    "id": "sorts-mill-goudy",
    "name": "Sorts Mill Goudy",
    "family": "'Sorts Mill Goudy', serif",
    "category": "serif",
    "subcategories": [
      "goudy",
      "old-style",
      "american"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Barry Schwartz",
    "description": "A digital revival of Frederic Goudy’s Goudy Old Style, one of the most beloved American serif typefaces ever created.",
    "tags": [
      "goudy",
      "american",
      "classic",
      "warm"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "lato",
      "work-sans"
    ],
    "useCases": [
      "editorial",
      "resume",
      "website"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Sorts+Mill+Goudy:ital@0;1"
  },
  {
    "id": "quattrocento",
    "name": "Quattrocento",
    "family": "'Quattrocento', serif",
    "category": "serif",
    "subcategories": [
      "roman",
      "monumental",
      "classical"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Pablo Impallari",
    "description": "A classic, elegant and sober typeface named after 15th-century Italian Renaissance art and architecture.",
    "tags": [
      "renaissance",
      "classical",
      "monumental",
      "noble"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "quattrocento-sans",
      "montserrat"
    ],
    "useCases": [
      "logo",
      "branding",
      "editorial"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Quattrocento:wght@400;700"
  },
  {
    "id": "abhaya-libre",
    "name": "Abhaya Libre",
    "family": "'Abhaya Libre', serif",
    "category": "serif",
    "subcategories": [
      "sinhala",
      "transitional",
      "refined"
    ],
    "weights": [
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Pushpananda Ekanayake",
    "description": "The digital interpretation of the most widely used Sinhala typeface, paired with clean Didone-inspired Latin glyphs.",
    "tags": [
      "sinhala",
      "refined",
      "international",
      "clean"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "editorial",
      "website",
      "branding"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Abhaya+Libre:wght@400;500;600;700;800"
  },
  {
    "id": "alegreya",
    "name": "Alegreya",
    "family": "'Alegreya', serif",
    "category": "serif",
    "subcategories": [
      "dynamic",
      "literary",
      "contemporary"
    ],
    "weights": [
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Juan Pablo del Peral (Huerta Tipográfica)",
    "description": "Voted one of the top typefaces of the decade by ATypI, designed for long literature reading with rhythmic, organic cadence.",
    "tags": [
      "award-winning",
      "literature",
      "rhythmic",
      "humanist"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "alegreya-sans",
      "inter"
    ],
    "useCases": [
      "editorial",
      "website",
      "presentation",
      "resume"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Alegreya:ital,wght@0,400..900;1,400..900"
  },
  {
    "id": "alegreya-sc",
    "name": "Alegreya SC",
    "family": "'Alegreya SC', serif",
    "category": "serif",
    "subcategories": [
      "small-caps",
      "literary",
      "elegant"
    ],
    "weights": [
      400,
      500,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Juan Pablo del Peral",
    "description": "The dedicated small caps companion to Alegreya, delivering seamless classical harmony to chapter headings and logos.",
    "tags": [
      "small-caps",
      "classical",
      "literary",
      "refined"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "alegreya",
      "inter"
    ],
    "useCases": [
      "logo",
      "editorial",
      "branding"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Alegreya+SC:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400;1,500;1,700;1,800;1,900"
  },
  {
    "id": "prata",
    "name": "Prata",
    "family": "'Prata', serif",
    "category": "serif",
    "subcategories": [
      "didone",
      "luxury",
      "teardrop"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Cyreal",
    "description": "An elegant Didone typeface with teardrop terminals and soft shapes that impart warmth to luxury branding and lifestyle editorial.",
    "tags": [
      "teardrop",
      "luxury",
      "lifestyle",
      "couture"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "montserrat",
      "lato"
    ],
    "useCases": [
      "logo",
      "branding",
      "editorial",
      "social-media"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Prata&display=swap"
  },
  {
    "id": "playfair-display-sc",
    "name": "Playfair Display SC",
    "family": "'Playfair Display SC', serif",
    "category": "serif",
    "subcategories": [
      "small-caps",
      "high-fashion",
      "headline"
    ],
    "weights": [
      400,
      700,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Claus Eggers Sørensen",
    "description": "Small caps rendering of the world-renowned Playfair Display, ideal for dramatic high-fashion title badges and headers.",
    "tags": [
      "small-caps",
      "fashion",
      "vogue",
      "luxury"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "playfair-display",
      "inter"
    ],
    "useCases": [
      "logo",
      "branding",
      "poster"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900"
  },
  {
    "id": "nanum-myeongjo",
    "name": "Nanum Myeongjo",
    "family": "'Nanum Myeongjo', serif",
    "category": "serif",
    "subcategories": [
      "korean",
      "myeongjo",
      "classic"
    ],
    "weights": [
      400,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Sandoll Communications",
    "description": "The standard Korean Myeongjo typeface with refined stroke transitions and high editorial dignity.",
    "tags": [
      "korean",
      "editorial",
      "classic",
      "international"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "noto-sans-kr",
      "inter"
    ],
    "useCases": [
      "editorial",
      "website",
      "branding"
    ],
    "fallback": "serif",
    "googleFontQuery": "Nanum+Myeongjo:wght@400;700;800"
  },
  {
    "id": "yrsa",
    "name": "Yrsa",
    "family": "'Yrsa', serif",
    "category": "serif",
    "subcategories": [
      "editorial",
      "rosetta",
      "contemporary"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Rosetta Type Foundry",
    "description": "Designed by Rosetta for high-end digital publishing, delivering impeccable rhythm and compact line economy.",
    "tags": [
      "rosetta",
      "contemporary",
      "editorial",
      "clean"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "editorial",
      "website",
      "presentation"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Yrsa:ital,wght@0,300..700;1,300..700"
  },
  {
    "id": "rasa",
    "name": "Rasa",
    "family": "'Rasa', serif",
    "category": "serif",
    "subcategories": [
      "gujarati",
      "contemporary",
      "editorial"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Rosetta Type Foundry",
    "description": "The Gujarati companion to Yrsa, bringing contemporary elegance to South Asian digital literature.",
    "tags": [
      "gujarati",
      "editorial",
      "contemporary",
      "international"
    ],
    "popularity": 86,
    "suggestedPairings": [
      "inter",
      "karla"
    ],
    "useCases": [
      "editorial",
      "website",
      "branding"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Rasa:ital,wght@0,300..700;1,300..700"
  },
  {
    "id": "sacramento",
    "name": "Sacramento",
    "family": "'Sacramento', cursive",
    "category": "script",
    "subcategories": [
      "monoline",
      "retro",
      "casual"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Astigmatic",
    "description": "A monoline semi-connected script inspired by hand-lettering artists of 1950s and 1960s brochure typography.",
    "tags": [
      "aesthetic",
      "cursive",
      "vintage",
      "instagram",
      "bio"
    ],
    "popularity": 96,
    "suggestedPairings": [
      "montserrat",
      "lato"
    ],
    "useCases": [
      "social-media",
      "logo",
      "branding",
      "poster"
    ],
    "fallback": "'Brush Script MT', cursive",
    "googleFontQuery": "Sacramento&display=swap"
  },
  {
    "id": "satisfy",
    "name": "Satisfy",
    "family": "'Satisfy', cursive",
    "category": "script",
    "subcategories": [
      "brush",
      "casual",
      "connected"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Sideshow",
    "description": "A timeless brush script that radiates effortless confidence, widely used in food packaging, cafes, and Instagram creators.",
    "tags": [
      "brush",
      "cursive",
      "instagram",
      "cafe",
      "packaging"
    ],
    "popularity": 95,
    "suggestedPairings": [
      "open-sans",
      "inter"
    ],
    "useCases": [
      "branding",
      "logo",
      "social-media",
      "poster"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Satisfy&display=swap"
  },
  {
    "id": "alex-brush",
    "name": "Alex Brush",
    "family": "'Alex Brush', cursive",
    "category": "script",
    "subcategories": [
      "calligraphy",
      "flowing",
      "wedding"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "TypeSETit (Robert E. Leuschke)",
    "description": "A flowing, connected brush script with dramatic ascenders and descenders, an all-time classic for wedding stationery.",
    "tags": [
      "wedding",
      "calligraphy",
      "luxury",
      "elegant",
      "cursive"
    ],
    "popularity": 96,
    "suggestedPairings": [
      "cormorant-garamond",
      "montserrat"
    ],
    "useCases": [
      "branding",
      "social-media",
      "logo",
      "poster"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Alex+Brush&display=swap"
  },
  {
    "id": "parisienne",
    "name": "Parisienne",
    "family": "'Parisienne', cursive",
    "category": "script",
    "subcategories": [
      "french",
      "casual",
      "chic"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Astigmatic",
    "description": "A casual connected script with an unmistakably French flair and bouncy rhythm that makes titles look effortlessly chic.",
    "tags": [
      "french",
      "chic",
      "aesthetic",
      "cursive",
      "fashion"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "raleway",
      "playfair-display"
    ],
    "useCases": [
      "social-media",
      "branding",
      "logo"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Parisienne&display=swap"
  },
  {
    "id": "cookie",
    "name": "Cookie",
    "family": "'Cookie', cursive",
    "category": "script",
    "subcategories": [
      "brush",
      "1950s",
      "sweet"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Ania Kruk",
    "description": "A script based on 1950s vintage advertisement pin-up lettering with sweet, approachable handwriting curls.",
    "tags": [
      "vintage",
      "sweet",
      "bakery",
      "cursive",
      "cute"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "quicksand",
      "nunito"
    ],
    "useCases": [
      "logo",
      "social-media",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Cookie&display=swap"
  },
  {
    "id": "yellowtail",
    "name": "Yellowtail",
    "family": "'Yellowtail', cursive",
    "category": "script",
    "subcategories": [
      "flat-brush",
      "retro",
      "sign-painter"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Astigmatic",
    "description": "An old-school flat brush script reminiscent of 1930s sign painting fonts like Kaufmann and Gillies Gothic.",
    "tags": [
      "sign-painter",
      "retro",
      "diner",
      "baseball",
      "bold"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "oswald",
      "lato"
    ],
    "useCases": [
      "logo",
      "poster",
      "branding",
      "social-media"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Yellowtail&display=swap"
  },
  {
    "id": "allura",
    "name": "Allura",
    "family": "'Allura', cursive",
    "category": "script",
    "subcategories": [
      "calligraphy",
      "feminine",
      "stylized"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "TypeSETit (Robert E. Leuschke)",
    "description": "A stylized handwritten script with soft flourishes and legible letterforms, universally loved for signatures and cards.",
    "tags": [
      "signature",
      "calligraphy",
      "feminine",
      "delicate"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "lora",
      "montserrat"
    ],
    "useCases": [
      "social-media",
      "logo",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Allura&display=swap"
  },
  {
    "id": "tangerine",
    "name": "Tangerine",
    "family": "'Tangerine', cursive",
    "category": "script",
    "subcategories": [
      "italic",
      "chancery",
      "tall"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Toshi Omagari",
    "description": "Inspired by 16th and 17th century chancery italic hands with remarkably tall ascenders and extreme slant.",
    "tags": [
      "chancery",
      "calligraphy",
      "delicate",
      "poetry"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "eb-garamond",
      "cormorant-garamond"
    ],
    "useCases": [
      "social-media",
      "editorial",
      "poster"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Tangerine:wght@400;700"
  },
  {
    "id": "kaushan-script",
    "name": "Kaushan Script",
    "family": "'Kaushan Script', cursive",
    "category": "script",
    "subcategories": [
      "brush",
      "dynamic",
      "urban"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Impallari Type",
    "description": "Feels as if written rapidly with an inked calligraphy brush, featuring vibrant unpolished energy and strong readability.",
    "tags": [
      "urban",
      "brush",
      "energy",
      "t-shirt",
      "poster"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "montserrat",
      "open-sans"
    ],
    "useCases": [
      "poster",
      "logo",
      "social-media",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Kaushan+Script&display=swap"
  },
  {
    "id": "bad-script",
    "name": "Bad Script",
    "family": "'Bad Script', cursive",
    "category": "script",
    "subcategories": [
      "casual",
      "handwriting",
      "organic"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Gaslight",
    "description": "A playful casual handwriting font designed using a tablet stylus, resembling real natural penmanship.",
    "tags": [
      "handwriting",
      "notes",
      "casual",
      "organic"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "pt-sans",
      "inter"
    ],
    "useCases": [
      "social-media",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Bad+Script&display=swap"
  },
  {
    "id": "marck-script",
    "name": "Marck Script",
    "family": "'Marck Script', cursive",
    "category": "script",
    "subcategories": [
      "felt-pen",
      "smooth",
      "natural"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Marck Fogel",
    "description": "Based on the handwriting of Denis Masharov using a felt-tip pen, providing fluid readability in both English and Cyrillic.",
    "tags": [
      "felt-pen",
      "signature",
      "clean",
      "cursive"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "lora",
      "roboto"
    ],
    "useCases": [
      "social-media",
      "branding",
      "editorial"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Marck+Script&display=swap"
  },
  {
    "id": "reenie-beanie",
    "name": "Reenie Beanie",
    "family": "'Reenie Beanie', cursive",
    "category": "script",
    "subcategories": [
      "ballpoint",
      "doodle",
      "informal"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "James Grieshaber",
    "description": "A playful ballpoint pen handwriting typeface that looks like authentic scribbled notes in a student notebook.",
    "tags": [
      "doodle",
      "scribble",
      "notes",
      "informal",
      "handwritten"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "cabin",
      "karla"
    ],
    "useCases": [
      "social-media",
      "poster",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Reenie+Beanie&display=swap"
  },
  {
    "id": "homemade-apple",
    "name": "Homemade Apple",
    "family": "'Homemade Apple', cursive",
    "category": "script",
    "subcategories": [
      "monoline",
      "pencil",
      "recipe"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "Apache License 2.0",
    "licenseUrl": "http://www.apache.org/licenses/LICENSE-2.0",
    "author": "Font Diner",
    "description": "A charming handwritten script that mimics cursive recipe cards written down by mom or grandmother.",
    "tags": [
      "recipe",
      "pencil",
      "authentic",
      "nostalgic"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "merriweather",
      "lato"
    ],
    "useCases": [
      "social-media",
      "branding",
      "logo"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Homemade+Apple&display=swap"
  },
  {
    "id": "cedarville-cursive",
    "name": "Cedarville Cursive",
    "family": "'Cedarville Cursive', cursive",
    "category": "script",
    "subcategories": [
      "cursive",
      "authentic",
      "school"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Kimberly Geswein",
    "description": "An authentic everyday script with natural variations that feels genuine and warm across creative posts.",
    "tags": [
      "school",
      "teacher",
      "warm",
      "cursive"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "open-sans",
      "roboto"
    ],
    "useCases": [
      "social-media",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Cedarville+Cursive&display=swap"
  },
  {
    "id": "covered-by-your-grace",
    "name": "Covered By Your Grace",
    "family": "'Covered By Your Grace', cursive",
    "category": "script",
    "subcategories": [
      "handwritten",
      "casual",
      "notes"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Kimberly Geswein",
    "description": "A tall, unpretentious handwriting font that brings authentic human touch to graphic designs and quotes.",
    "tags": [
      "handwritten",
      "quotes",
      "casual",
      "aesthetic"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "social-media",
      "poster",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Covered+By+Your+Grace&display=swap"
  },
  {
    "id": "shadows-into-light",
    "name": "Shadows Into Light",
    "family": "'Shadows Into Light', cursive",
    "category": "script",
    "subcategories": [
      "neat",
      "handwriting",
      "clean"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Kimberly Geswein",
    "description": "A neat, feminine handwriting font with rounded curves and clean aesthetics, widely used in quotes and bullet journals.",
    "tags": [
      "journal",
      "aesthetic",
      "bullet-journal",
      "feminine"
    ],
    "popularity": 95,
    "suggestedPairings": [
      "inter",
      "lato"
    ],
    "useCases": [
      "social-media",
      "branding",
      "logo"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Shadows+Into+Light&display=swap"
  },
  {
    "id": "shadows-into-light-two",
    "name": "Shadows Into Light Two",
    "family": "'Shadows Into Light Two', cursive",
    "category": "script",
    "subcategories": [
      "handwriting",
      "balanced",
      "quotes"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Kimberly Geswein",
    "description": "An updated, re-spaced version of the beloved Shadows Into Light font with refined clarity.",
    "tags": [
      "quotes",
      "neat",
      "aesthetic",
      "handwritten"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "roboto",
      "montserrat"
    ],
    "useCases": [
      "social-media",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Shadows+Into+Light+Two&display=swap"
  },
  {
    "id": "indie-flower",
    "name": "Indie Flower",
    "family": "'Indie Flower', cursive",
    "category": "script",
    "subcategories": [
      "bubbly",
      "carefree",
      "handwritten"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Kimberly Geswein",
    "description": "A carefree and open handwriting font with soft rounded edges, one of the most downloaded creative fonts in history.",
    "tags": [
      "carefree",
      "happy",
      "flowers",
      "quotes",
      "cute"
    ],
    "popularity": 97,
    "suggestedPairings": [
      "open-sans",
      "quicksand"
    ],
    "useCases": [
      "social-media",
      "branding",
      "logo",
      "poster"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Indie+Flower&display=swap"
  },
  {
    "id": "permanent-marker",
    "name": "Permanent Marker",
    "family": "'Permanent Marker', cursive",
    "category": "script",
    "subcategories": [
      "sharpie",
      "street",
      "bold"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "Apache License 2.0",
    "licenseUrl": "http://www.apache.org/licenses/LICENSE-2.0",
    "author": "Font Diner",
    "description": "Recreates the raw, energetic look and feel of drawing on cardboard or posterboard with a heavy black permanent marker.",
    "tags": [
      "sharpie",
      "street",
      "graffiti",
      "bold",
      "marker"
    ],
    "popularity": 97,
    "suggestedPairings": [
      "oswald",
      "roboto"
    ],
    "useCases": [
      "poster",
      "social-media",
      "logo",
      "gaming"
    ],
    "fallback": "Impact, cursive",
    "googleFontQuery": "Permanent+Marker&display=swap"
  },
  {
    "id": "gloria-hallelujah",
    "name": "Gloria Hallelujah",
    "family": "'Gloria Hallelujah', cursive",
    "category": "script",
    "subcategories": [
      "comic",
      "fun",
      "handwritten"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Kimberly Geswein",
    "description": "Drawn based on the playful Korean-style student handwriting of a school friend, full of youthful joy.",
    "tags": [
      "youth",
      "fun",
      "student",
      "playful"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "nunito",
      "inter"
    ],
    "useCases": [
      "social-media",
      "poster",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Gloria+Hallelujah&display=swap"
  },
  {
    "id": "amatic-sc",
    "name": "Amatic SC",
    "family": "'Amatic SC', cursive",
    "category": "script",
    "subcategories": [
      "condensed",
      "indie",
      "all-caps"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "A simple but effective hand-drawn all-caps display font with organic, quirky narrow letterforms, huge on Pinterest and Etsy.",
    "tags": [
      "indie",
      "pinterest",
      "etsy",
      "hand-drawn",
      "all-caps"
    ],
    "popularity": 98,
    "suggestedPairings": [
      "josefin-sans",
      "open-sans"
    ],
    "useCases": [
      "poster",
      "social-media",
      "logo",
      "branding"
    ],
    "fallback": "cursive, sans-serif",
    "googleFontQuery": "Amatic+SC:wght@400;700"
  },
  {
    "id": "rock-salt",
    "name": "Rock Salt",
    "family": "'Rock Salt', cursive",
    "category": "script",
    "subcategories": [
      "grunge",
      "felt-marker",
      "edgy"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "Apache License 2.0",
    "licenseUrl": "http://www.apache.org/licenses/LICENSE-2.0",
    "author": "Sideshow",
    "description": "Drawn with a dried-out felt tip marker on rough paper, packing rock-and-roll attitude and edgy scratchiness.",
    "tags": [
      "rock",
      "grunge",
      "edgy",
      "marker",
      "album-cover"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "roboto",
      "montserrat"
    ],
    "useCases": [
      "poster",
      "social-media",
      "logo",
      "gaming"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Rock+Salt&display=swap"
  },
  {
    "id": "kalam",
    "name": "Kalam",
    "family": "'Kalam', cursive",
    "category": "script",
    "subcategories": [
      "devanagari",
      "ballpoint",
      "smooth"
    ],
    "weights": [
      300,
      400,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Indian Type Foundry",
    "description": "A handwriting font derived from Hindi ballpoint handwriting, featuring organic curves and vibrant personality.",
    "tags": [
      "devanagari",
      "ballpoint",
      "authentic",
      "friendly"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "poppins",
      "inter"
    ],
    "useCases": [
      "social-media",
      "branding",
      "logo"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Kalam:wght@300;400;700"
  },
  {
    "id": "caveat-brush",
    "name": "Caveat Brush",
    "family": "'Caveat Brush', cursive",
    "category": "script",
    "subcategories": [
      "brush",
      "heavy",
      "casual"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Impallari Type",
    "description": "The heavier, brush-drawn companion to Caveat, providing juicy stroke weights for headlines and social banners.",
    "tags": [
      "brush",
      "bold",
      "social",
      "casual"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "social-media",
      "poster",
      "logo"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Caveat+Brush&display=swap"
  },
  {
    "id": "just-another-hand",
    "name": "Just Another Hand",
    "family": "'Just Another Hand', cursive",
    "category": "script",
    "subcategories": [
      "narrow",
      "quick",
      "sketch"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "Apache License 2.0",
    "licenseUrl": "http://www.apache.org/licenses/LICENSE-2.0",
    "author": "Astigmatic",
    "description": "Drawn rapidly with a No. 2 pencil on yellow legal paper, offering a very narrow, rapid scribbled feel.",
    "tags": [
      "sketch",
      "pencil",
      "fast",
      "narrow"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "lato",
      "roboto"
    ],
    "useCases": [
      "social-media",
      "poster"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Just+Another+Hand&display=swap"
  },
  {
    "id": "nanum-pen-script",
    "name": "Nanum Pen Script",
    "family": "'Nanum Pen Script', cursive",
    "category": "script",
    "subcategories": [
      "korean",
      "pen",
      "gentle"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Sandoll Communications",
    "description": "A warm and inviting Korean & Latin pen script that looks like handwritten notes in a personal travel journal.",
    "tags": [
      "pen",
      "travel",
      "journal",
      "gentle"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "inter",
      "open-sans"
    ],
    "useCases": [
      "social-media",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Nanum+Pen+Script&display=swap"
  },
  {
    "id": "patrick-hand",
    "name": "Patrick Hand",
    "family": "'Patrick Hand', cursive",
    "category": "script",
    "subcategories": [
      "comic",
      "felt-pen",
      "friendly"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Patrick Wagesreiter",
    "description": "Based on the designer’s own handwriting, developed with high consistency for graphic novels, comics, and UI callouts.",
    "tags": [
      "comic",
      "callout",
      "friendly",
      "felt-pen"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "montserrat",
      "inter"
    ],
    "useCases": [
      "social-media",
      "poster",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Patrick+Hand&display=swap"
  },
  {
    "id": "gochi-hand",
    "name": "Gochi Hand",
    "family": "'Gochi Hand', cursive",
    "category": "script",
    "subcategories": [
      "teenage",
      "doodle",
      "spontaneous"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Huerta Tipográfica",
    "description": "Inspired by teenage girl handwriting, Gochi Hand expresses spontaneous enthusiasm and playful doodling.",
    "tags": [
      "teenage",
      "spontaneous",
      "doodle",
      "enthusiastic"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "quicksand",
      "nunito"
    ],
    "useCases": [
      "social-media",
      "poster"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Gochi+Hand&display=swap"
  },
  {
    "id": "dekko",
    "name": "Dekko",
    "family": "'Dekko', cursive",
    "category": "script",
    "subcategories": [
      "clean",
      "marker",
      "humanist"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Sorkin Type",
    "description": "A friendly marker handwriting font supporting Latin and Devanagari scripts with rounded, welcoming strokes.",
    "tags": [
      "marker",
      "friendly",
      "devanagari",
      "clean"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "social-media",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Dekko&display=swap"
  },
  {
    "id": "neucha",
    "name": "Neucha",
    "family": "'Neucha', cursive",
    "category": "script",
    "subcategories": [
      "whimsical",
      "handwritten",
      "cyrillic"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Denis Masharov",
    "description": "A whimsical handwritten font dedicated to the designer’s beloved grandmother, full of warmth and nostalgia.",
    "tags": [
      "nostalgia",
      "whimsical",
      "warmth",
      "cyrillic"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "roboto",
      "pt-sans"
    ],
    "useCases": [
      "social-media",
      "poster",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Neucha&display=swap"
  },
  {
    "id": "nothing-you-could-do",
    "name": "Nothing You Could Do",
    "family": "'Nothing You Could Do', cursive",
    "category": "script",
    "subcategories": [
      "photographer",
      "watermark",
      "cursive"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Kimberly Geswein",
    "description": "A breezy, natural cursive handwriting font favored by photographers for watermarks and signatures.",
    "tags": [
      "watermark",
      "signature",
      "photography",
      "cursive"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "montserrat",
      "lato"
    ],
    "useCases": [
      "social-media",
      "logo",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Nothing+You+Could+Do&display=swap"
  },
  {
    "id": "fondamento",
    "name": "Fondamento",
    "family": "'Fondamento', cursive",
    "category": "script",
    "subcategories": [
      "foundational",
      "calligraphic",
      "historic"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Astigmatic",
    "description": "Based on the Foundational Hand taught by master calligrapher Edward Johnston, balancing discipline and artistic flow.",
    "tags": [
      "foundational",
      "calligraphy",
      "johnston",
      "historical"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "cormorant-garamond",
      "lato"
    ],
    "useCases": [
      "editorial",
      "branding",
      "social-media"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Fondamento:ital@0;1"
  },
  {
    "id": "berkshire-swash",
    "name": "Berkshire Swash",
    "family": "'Berkshire Swash', cursive",
    "category": "script",
    "subcategories": [
      "swash",
      "ornate",
      "storybook"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Astigmatic",
    "description": "An alluring semi-sweet swash script with bold flourishes that evoke storybooks, bakeries, and holiday greetings.",
    "tags": [
      "swash",
      "storybook",
      "fairytale",
      "ornate",
      "holiday"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "playfair-display",
      "montserrat"
    ],
    "useCases": [
      "logo",
      "branding",
      "social-media",
      "poster"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Berkshire+Swash&display=swap"
  },
  {
    "id": "rochester",
    "name": "Rochester",
    "family": "'Rochester', cursive",
    "category": "script",
    "subcategories": [
      "victorian",
      "calligraphic",
      "formal"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "Apache License 2.0",
    "licenseUrl": "http://www.apache.org/licenses/LICENSE-2.0",
    "author": "Sideshow",
    "description": "Inspired by early Victorian and Art Deco calligraphic letterforms, adding aristocratic grace to invitations.",
    "tags": [
      "victorian",
      "aristocratic",
      "invitation",
      "calligraphy"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "cormorant-garamond",
      "lato"
    ],
    "useCases": [
      "branding",
      "logo",
      "social-media"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Rochester&display=swap"
  },
  {
    "id": "italianno",
    "name": "Italianno",
    "family": "'Italianno', cursive",
    "category": "script",
    "subcategories": [
      "calligraphy",
      "high-slant",
      "formal"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "TypeSETit (Robert E. Leuschke)",
    "description": "An elegant formal calligraphy script with a severe slant and exquisite Italian flourish loops.",
    "tags": [
      "formal",
      "italian",
      "invitation",
      "flourish"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "cormorant-garamond",
      "montserrat"
    ],
    "useCases": [
      "social-media",
      "branding",
      "logo"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Italianno&display=swap"
  },
  {
    "id": "pinyon-script",
    "name": "Pinyon Script",
    "family": "'Pinyon Script', cursive",
    "category": "script",
    "subcategories": [
      "romantic",
      "french",
      "calligraphy"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Nicole Fally",
    "description": "A romantic script with round, refined French flourishes, evoking royalty, perfume flacons, and vintage ballrooms.",
    "tags": [
      "romantic",
      "perfume",
      "french",
      "vintage",
      "luxury"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "bodoni-moda",
      "raleway"
    ],
    "useCases": [
      "logo",
      "branding",
      "social-media"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Pinyon+Script&display=swap"
  },
  {
    "id": "monsieur-la-doulaise",
    "name": "Monsieur La Doulaise",
    "family": "'Monsieur La Doulaise', cursive",
    "category": "script",
    "subcategories": [
      "ornate",
      "swashes",
      "historical"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Sudtipos",
    "description": "Part of the Charles Bluemlein script collection from the 1930s, saturated with intricate calligraphic loops.",
    "tags": [
      "ornate",
      "intricate",
      "signature",
      "vintage"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "playfair-display",
      "montserrat"
    ],
    "useCases": [
      "logo",
      "branding",
      "social-media"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Monsieur+La+Doulaise&display=swap"
  },
  {
    "id": "herr-von-muellerhoff",
    "name": "Herr Von Muellerhoff",
    "family": "'Herr Von Muellerhoff', cursive",
    "category": "script",
    "subcategories": [
      "delicate",
      "swashes",
      "historic"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Sudtipos",
    "description": "Intricately flourished 1930s lettering with wispy hairlines that mimic historic royal documents and seals.",
    "tags": [
      "historic",
      "royal",
      "wispy",
      "calligraphy"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "eb-garamond",
      "lato"
    ],
    "useCases": [
      "logo",
      "branding",
      "social-media"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Herr+Von+Muellerhoff&display=swap"
  },
  {
    "id": "mrs-saint-delafield",
    "name": "Mrs Saint Delafield",
    "family": "'Mrs Saint Delafield', cursive",
    "category": "script",
    "subcategories": [
      "sophisticated",
      "flowing",
      "letters"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Sudtipos",
    "description": "A sophisticated handwriting typeface capturing the elegance of epistolary love letters from the early 20th century.",
    "tags": [
      "love-letters",
      "epistolary",
      "elegant",
      "cursive"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "cormorant-garamond",
      "montserrat"
    ],
    "useCases": [
      "social-media",
      "branding",
      "logo"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Mrs+Saint+Delafield&display=swap"
  },
  {
    "id": "rouge-script",
    "name": "Rouge Script",
    "family": "'Rouge Script', cursive",
    "category": "script",
    "subcategories": [
      "fashion",
      "soft",
      "glamorous"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Sabrina Mariela Lopez",
    "description": "A glamorous script designed for fashion magazines, cosmetics packaging, and lipstick branding.",
    "tags": [
      "cosmetics",
      "lipstick",
      "glamour",
      "fashion",
      "feminine"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "bodoni-moda",
      "inter"
    ],
    "useCases": [
      "branding",
      "logo",
      "social-media"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Rouge+Script&display=swap"
  },
  {
    "id": "whisper",
    "name": "Whisper",
    "family": "'Whisper', cursive",
    "category": "script",
    "subcategories": [
      "modern-calligraphy",
      "delicate",
      "breezy"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Robert Leuschke",
    "description": "A light, breezy modern calligraphy font with delicate connections that whispers warmth and sophistication.",
    "tags": [
      "modern-calligraphy",
      "whisper",
      "delicate",
      "aesthetic"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "outfit",
      "newsreader"
    ],
    "useCases": [
      "social-media",
      "branding",
      "logo"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Whisper&display=swap"
  },
  {
    "id": "qwigley",
    "name": "Qwigley",
    "family": "'Qwigley', cursive",
    "category": "script",
    "subcategories": [
      "contemporary",
      "calligraphic",
      "dramatic"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "TypeSETit (Robert E. Leuschke)",
    "description": "An award-winning contemporary script with exuberant flourishing loops that dance across the baseline.",
    "tags": [
      "dancing",
      "flourish",
      "contemporary",
      "luxury"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "montserrat",
      "cormorant-garamond"
    ],
    "useCases": [
      "social-media",
      "logo",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Qwigley&display=swap"
  },
  {
    "id": "meddon",
    "name": "Meddon",
    "family": "'Meddon', cursive",
    "category": "script",
    "subcategories": [
      "quill",
      "charter",
      "historic"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "Based on an authentic handwritten 18th-century legal document from a small village in Hampshire, England.",
    "tags": [
      "quill",
      "manuscript",
      "parchment",
      "historic"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "eb-garamond",
      "lora"
    ],
    "useCases": [
      "branding",
      "poster",
      "social-media"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Meddon&display=swap"
  },
  {
    "id": "ruthie",
    "name": "Ruthie",
    "family": "'Ruthie', cursive",
    "category": "script",
    "subcategories": [
      "ornate",
      "calligraphic",
      "delicate"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "TypeSETit (Robert E. Leuschke)",
    "description": "Features stylized flourishes and decorative caps that create an airy, floating aesthetic on social bios.",
    "tags": [
      "flourishes",
      "delicate",
      "bios",
      "instagram",
      "cute"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "montserrat",
      "inter"
    ],
    "useCases": [
      "social-media",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Ruthie&display=swap"
  },
  {
    "id": "clicker-script",
    "name": "Clicker Script",
    "family": "'Clicker Script', cursive",
    "category": "script",
    "subcategories": [
      "monoline",
      "bouncy",
      "playful"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Astigmatic",
    "description": "A bouncy, casual monoline script font with rhythm and cheer, perfect for greeting cards and friendly apps.",
    "tags": [
      "bouncy",
      "monoline",
      "casual",
      "playful"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "poppins",
      "quicksand"
    ],
    "useCases": [
      "social-media",
      "branding",
      "logo"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Clicker+Script&display=swap"
  },
  {
    "id": "bebas-neue",
    "name": "Bebas Neue",
    "family": "'Bebas Neue', sans-serif",
    "category": "display",
    "subcategories": [
      "all-caps",
      "condensed",
      "headline"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Ryoichi Tsunekawa (Dharma Type)",
    "description": "The \"Helvetica of free fonts\". An all-caps display font with pure condensed geometry, famous worldwide for YouTube thumbnails and posters.",
    "tags": [
      "all-caps",
      "condensed",
      "youtube",
      "poster",
      "headline",
      "impact"
    ],
    "popularity": 99,
    "suggestedPairings": [
      "montserrat",
      "inter",
      "roboto"
    ],
    "useCases": [
      "poster",
      "logo",
      "social-media",
      "website",
      "gaming"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Bebas+Neue&display=swap"
  },
  {
    "id": "anton",
    "name": "Anton",
    "family": "'Anton', sans-serif",
    "category": "display",
    "subcategories": [
      "grotesque",
      "heavy",
      "headline"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "A reworking of a traditional advertising grotesque typeface tuned specifically for punchy digital headlines and meme text.",
    "tags": [
      "headline",
      "meme",
      "heavy",
      "advertising",
      "impact"
    ],
    "popularity": 97,
    "suggestedPairings": [
      "roboto",
      "open-sans"
    ],
    "useCases": [
      "poster",
      "social-media",
      "logo",
      "gaming"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Anton&display=swap"
  },
  {
    "id": "black-han-sans",
    "name": "Black Han Sans",
    "family": "'Black Han Sans', sans-serif",
    "category": "display",
    "subcategories": [
      "heavy",
      "korean",
      "block"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Woowa Brothers",
    "description": "A gigantic block sans-serif designed by Korea’s top delivery app Woowa Brothers, delivering massive weight and punch.",
    "tags": [
      "block",
      "heavy",
      "korean",
      "bold",
      "punchy"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "inter",
      "roboto"
    ],
    "useCases": [
      "poster",
      "social-media",
      "gaming",
      "logo"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Black+Han+Sans&display=swap"
  },
  {
    "id": "bangers",
    "name": "Bangers",
    "family": "'Bangers', cursive",
    "category": "display",
    "subcategories": [
      "comic",
      "superhero",
      "bold"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "The definitive comic book superhero lettering font, styled after mid-20th century Silver Age comic titles.",
    "tags": [
      "comic",
      "superhero",
      "marvel",
      "punchy",
      "gaming"
    ],
    "popularity": 96,
    "suggestedPairings": [
      "montserrat",
      "open-sans"
    ],
    "useCases": [
      "poster",
      "social-media",
      "gaming",
      "logo"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Bangers&display=swap"
  },
  {
    "id": "faster-one",
    "name": "Faster One",
    "family": "'Faster One', display",
    "category": "display",
    "subcategories": [
      "racing",
      "horizontal-stripes",
      "speed"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Eduardo Tunni",
    "description": "Designed with horizontal racing stripes to convey breakneck velocity, high speed, and motorsport excitement.",
    "tags": [
      "racing",
      "speed",
      "stripes",
      "motorsport",
      "gaming"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "exo-2",
      "roboto"
    ],
    "useCases": [
      "gaming",
      "logo",
      "poster",
      "social-media"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Faster+One&display=swap"
  },
  {
    "id": "bungee",
    "name": "Bungee",
    "family": "'Bungee', sans-serif",
    "category": "display",
    "subcategories": [
      "urban",
      "vertical",
      "signage"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "David Jonathan Ross",
    "description": "Celebrates the urban signage of the American commercial streetscape, engineered to run horizontally or vertically.",
    "tags": [
      "urban",
      "signage",
      "all-caps",
      "bold",
      "retro"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "inter",
      "roboto-mono"
    ],
    "useCases": [
      "logo",
      "poster",
      "gaming",
      "branding"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Bungee&display=swap"
  },
  {
    "id": "bungee-shade",
    "name": "Bungee Shade",
    "family": "'Bungee Shade', display",
    "category": "display",
    "subcategories": [
      "3d",
      "shadow",
      "retro"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "David Jonathan Ross",
    "description": "Features a bold retro cross-hatch drop shadow effect that pops off posters and digital screens.",
    "tags": [
      "3d",
      "shadow",
      "retro",
      "cool",
      "fancy"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "logo",
      "poster",
      "social-media",
      "gaming"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Bungee+Shade&display=swap"
  },
  {
    "id": "bungee-inline",
    "name": "Bungee Inline",
    "family": "'Bungee Inline', display",
    "category": "display",
    "subcategories": [
      "neon",
      "inline",
      "arcade"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "David Jonathan Ross",
    "description": "An inline variant that evokes glowing neon diner signs and 1980s retro arcade marquees.",
    "tags": [
      "neon",
      "inline",
      "arcade",
      "retro",
      "80s"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "space-mono",
      "inter"
    ],
    "useCases": [
      "logo",
      "poster",
      "social-media",
      "gaming"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Bungee+Inline&display=swap"
  },
  {
    "id": "press-start-2p",
    "name": "Press Start 2P",
    "family": "'Press Start 2P', monospace",
    "category": "display",
    "subcategories": [
      "pixel",
      "8-bit",
      "arcade"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "CodeMan38",
    "description": "The definitive 8-bit arcade pixel font, modeled faithfully on 1980s Namco and Nintendo arcade games.",
    "tags": [
      "pixel",
      "8-bit",
      "retro",
      "gaming",
      "arcade",
      "nintendo"
    ],
    "popularity": 98,
    "suggestedPairings": [
      "vt323",
      "jetbrains-mono"
    ],
    "useCases": [
      "gaming",
      "logo",
      "social-media",
      "tech"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Press+Start+2P&display=swap"
  },
  {
    "id": "silkscreen",
    "name": "Silkscreen",
    "family": "'Silkscreen', monospace",
    "category": "display",
    "subcategories": [
      "pixel",
      "tiny",
      "minimal"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Jason Kottke",
    "description": "A classic 5-pixel high typography designed in 1999 for pixel screens, now an iconic aesthetic font worldwide.",
    "tags": [
      "pixel",
      "y2k",
      "aesthetic",
      "retro",
      "gaming"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "inter",
      "fira-code"
    ],
    "useCases": [
      "gaming",
      "tech",
      "social-media",
      "logo"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Silkscreen:wght@400;700"
  },
  {
    "id": "monoton",
    "name": "Monoton",
    "family": "'Monoton', cursive",
    "category": "display",
    "subcategories": [
      "multi-line",
      "disco",
      "art-deco"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "A contemporary multi-line display font inspired by 1970s disco album sleeves and 1930s Art Deco chrome lettering.",
    "tags": [
      "disco",
      "70s",
      "multi-line",
      "neon",
      "futuristic"
    ],
    "popularity": 95,
    "suggestedPairings": [
      "montserrat",
      "inter"
    ],
    "useCases": [
      "logo",
      "poster",
      "branding",
      "social-media"
    ],
    "fallback": "cursive, sans-serif",
    "googleFontQuery": "Monoton&display=swap"
  },
  {
    "id": "shrikhand",
    "name": "Shrikhand",
    "family": "'Shrikhand', cursive",
    "category": "display",
    "subcategories": [
      "gujarati",
      "bold",
      "curvaceous"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Jonny Pinhorn",
    "description": "A bold, curvaceous display typeface inspired by hand-painted truck lettering and movie posters on the streets of Gujarat.",
    "tags": [
      "bold",
      "retro",
      "curvaceous",
      "food",
      "truck-art"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "poppins",
      "karla"
    ],
    "useCases": [
      "logo",
      "poster",
      "social-media",
      "branding"
    ],
    "fallback": "cursive, sans-serif",
    "googleFontQuery": "Shrikhand&display=swap"
  },
  {
    "id": "ultra",
    "name": "Ultra",
    "family": "'Ultra', serif",
    "category": "display",
    "subcategories": [
      "wood-type",
      "fat-face",
      "ultra-bold"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "Apache License 2.0",
    "licenseUrl": "http://www.apache.org/licenses/LICENSE-2.0",
    "author": "Astigmatic",
    "description": "An ultra-bold slab serif reminiscent of 19th-century Clarendon and Egyptian wood types, loaded with heavy impact.",
    "tags": [
      "fat-face",
      "heavy",
      "poster",
      "wood-type",
      "bold"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "open-sans",
      "lato"
    ],
    "useCases": [
      "poster",
      "logo",
      "social-media",
      "branding"
    ],
    "fallback": "Impact, serif",
    "googleFontQuery": "Ultra&display=swap"
  },
  {
    "id": "titan-one",
    "name": "Titan One",
    "family": "'Titan One', cursive",
    "category": "display",
    "subcategories": [
      "bubbly",
      "chubby",
      "fun"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Rodrigo Fuenzalida",
    "description": "A cheerful, chubby display font with rounded balloon strokes, beloved in kids’ entertainment and candy branding.",
    "tags": [
      "bubbly",
      "chubby",
      "candy",
      "kids",
      "happy"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "quicksand",
      "nunito"
    ],
    "useCases": [
      "logo",
      "social-media",
      "poster",
      "branding"
    ],
    "fallback": "Impact, cursive",
    "googleFontQuery": "Titan+One&display=swap"
  },
  {
    "id": "alfa-slab-one",
    "name": "Alfa Slab One",
    "family": "'Alfa Slab One', serif",
    "category": "display",
    "subcategories": [
      "egyptian",
      "heavy-slab",
      "athletic"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "JM Solé",
    "description": "A contemporary take on the Six-lines Pica Egyptian serif from 1821, with extreme slab serifs and authoritative weight.",
    "tags": [
      "slab",
      "egyptian",
      "heavy",
      "athletic",
      "bold"
    ],
    "popularity": 95,
    "suggestedPairings": [
      "roboto",
      "open-sans"
    ],
    "useCases": [
      "poster",
      "logo",
      "branding",
      "social-media"
    ],
    "fallback": "Impact, serif",
    "googleFontQuery": "Alfa+Slab+One&display=swap"
  },
  {
    "id": "creepster",
    "name": "Creepster",
    "family": "'Creepster', cursive",
    "category": "display",
    "subcategories": [
      "horror",
      "halloween",
      "slimy"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "Apache License 2.0",
    "licenseUrl": "http://www.apache.org/licenses/LICENSE-2.0",
    "author": "Sideshow",
    "description": "The undisputed king of horror fonts, dripping with 1950s B-movie zombie gore and Halloween frights.",
    "tags": [
      "horror",
      "halloween",
      "spooky",
      "zombie",
      "bloody"
    ],
    "popularity": 96,
    "suggestedPairings": [
      "roboto",
      "montserrat"
    ],
    "useCases": [
      "poster",
      "social-media",
      "gaming",
      "logo"
    ],
    "fallback": "Impact, cursive",
    "googleFontQuery": "Creepster&display=swap"
  },
  {
    "id": "special-elite",
    "name": "Special Elite",
    "family": "'Special Elite', monospace",
    "category": "display",
    "subcategories": [
      "typewriter",
      "grunge",
      "vintage"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "Apache License 2.0",
    "licenseUrl": "http://www.apache.org/licenses/LICENSE-2.0",
    "author": "Astigmatic",
    "description": "Scanned directly from a 1925 Remington portable typewriter, capturing authentic ribbon smudge and inked keystroke imperfection.",
    "tags": [
      "typewriter",
      "grunge",
      "vintage",
      "detective",
      "classified"
    ],
    "popularity": 95,
    "suggestedPairings": [
      "courier-prime",
      "merriweather"
    ],
    "useCases": [
      "poster",
      "social-media",
      "editorial",
      "branding"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Special+Elite&display=swap"
  },
  {
    "id": "rye",
    "name": "Rye",
    "family": "'Rye', serif",
    "category": "display",
    "subcategories": [
      "wild-west",
      "western",
      "saloon"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Nicole Fally",
    "description": "An authentic Wild West poster font with bifurcated spur serifs, wood-grain heritage, and cowboy saloon energy.",
    "tags": [
      "western",
      "wild-west",
      "cowboy",
      "saloon",
      "spurs"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "open-sans",
      "roboto"
    ],
    "useCases": [
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "serif",
    "googleFontQuery": "Rye&display=swap"
  },
  {
    "id": "sancreek",
    "name": "Sancreek",
    "family": "'Sancreek', cursive",
    "category": "display",
    "subcategories": [
      "circus",
      "western",
      "wood-type"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "A split-serif wood type that echoes Victorian circus broadsides, vintage traveling fairs, and frontier signs.",
    "tags": [
      "circus",
      "vintage",
      "carnival",
      "victorian"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "lato",
      "merriweather"
    ],
    "useCases": [
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "serif",
    "googleFontQuery": "Sancreek&display=swap"
  },
  {
    "id": "shojumaru",
    "name": "Shojumaru",
    "family": "'Shojumaru', cursive",
    "category": "display",
    "subcategories": [
      "asian-inspired",
      "brush-cut",
      "origami"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Astigmatic",
    "description": "Inspired by Japanese calligraphy and origami folds, blending Eastern martial arts spirit with Western alphabet forms.",
    "tags": [
      "japanese",
      "asian",
      "origami",
      "samurai",
      "martial-arts"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "montserrat",
      "inter"
    ],
    "useCases": [
      "gaming",
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Shojumaru&display=swap"
  },
  {
    "id": "ribeye",
    "name": "Ribeye",
    "family": "'Ribeye', cursive",
    "category": "display",
    "subcategories": [
      "tattoo",
      "cartoon",
      "fun"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Astigmatic",
    "description": "A whimsical cartoon tattoo script combining sailor flash art tattoos with playful diner signs.",
    "tags": [
      "tattoo",
      "sailor",
      "cartoon",
      "whimsical"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "quicksand",
      "nunito"
    ],
    "useCases": [
      "social-media",
      "logo",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Ribeye&display=swap"
  },
  {
    "id": "ribeye-marrow",
    "name": "Ribeye Marrow",
    "family": "'Ribeye Marrow', cursive",
    "category": "display",
    "subcategories": [
      "inline",
      "tattoo",
      "decorative"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Astigmatic",
    "description": "The inline engraved counterpart to Ribeye, adding detailed tattoo-flash line work.",
    "tags": [
      "inline",
      "tattoo",
      "engraved",
      "decorative"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "inter",
      "lato"
    ],
    "useCases": [
      "social-media",
      "logo",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Ribeye+Marrow&display=swap"
  },
  {
    "id": "smokum",
    "name": "Smokum",
    "family": "'Smokum', cursive",
    "category": "display",
    "subcategories": [
      "western",
      "saloon",
      "wood-block"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "Apache License 2.0",
    "licenseUrl": "http://www.apache.org/licenses/LICENSE-2.0",
    "author": "Astigmatic",
    "description": "A rugged Western slab serif with slab boots, built for wanted posters and cowboy whiskey labels.",
    "tags": [
      "western",
      "whiskey",
      "cowboy",
      "rugged",
      "wanted-poster"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "roboto",
      "open-sans"
    ],
    "useCases": [
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "serif",
    "googleFontQuery": "Smokum&display=swap"
  },
  {
    "id": "trade-winds",
    "name": "Trade Winds",
    "family": "'Trade Winds', cursive",
    "category": "display",
    "subcategories": [
      "pirate",
      "island",
      "windswept"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Sideshow",
    "description": "Evoking pirate treasure maps, Caribbean trade galleons, and tropical Polynesian rum shacks.",
    "tags": [
      "pirate",
      "treasure",
      "island",
      "windswept",
      "caribbean"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "montserrat",
      "lato"
    ],
    "useCases": [
      "gaming",
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Trade+Winds&display=swap"
  },
  {
    "id": "fredericka-the-great",
    "name": "Fredericka the Great",
    "family": "'Fredericka the Great', cursive",
    "category": "display",
    "subcategories": [
      "sketch",
      "chalkboard",
      "vintage"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Tart Workshop",
    "description": "A hand-sketched chalkboard serif filled with intricate cross-hatching and vintage coffeehouse charm.",
    "tags": [
      "chalkboard",
      "sketch",
      "coffeehouse",
      "hand-drawn"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "open-sans",
      "quicksand"
    ],
    "useCases": [
      "poster",
      "social-media",
      "branding"
    ],
    "fallback": "serif",
    "googleFontQuery": "Fredericka+the+Great&display=swap"
  },
  {
    "id": "caesar-dressing",
    "name": "Caesar Dressing",
    "family": "'Caesar Dressing', cursive",
    "category": "display",
    "subcategories": [
      "ancient",
      "roman",
      "chiseled"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Open Window",
    "description": "A playful stone-carved display font resembling ancient Roman stone tablets with imperfect handmade chiseling.",
    "tags": [
      "ancient",
      "stone",
      "chiseled",
      "roman",
      "mythology"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "inter",
      "roboto"
    ],
    "useCases": [
      "gaming",
      "poster",
      "social-media",
      "logo"
    ],
    "fallback": "serif",
    "googleFontQuery": "Caesar+Dressing&display=swap"
  },
  {
    "id": "londrina-solid",
    "name": "Londrina Solid",
    "family": "'Londrina Solid', cursive",
    "category": "display",
    "subcategories": [
      "urban",
      "poster",
      "brazilian"
    ],
    "weights": [
      100,
      300,
      400,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Marcelo Magalhães",
    "description": "Inspired by hand-cut street flyers and urban graffiti posters in the Brazilian city of Londrina.",
    "tags": [
      "street",
      "brazil",
      "poster",
      "playful",
      "chubby"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "montserrat",
      "poppins"
    ],
    "useCases": [
      "poster",
      "logo",
      "social-media",
      "branding"
    ],
    "fallback": "Impact, cursive",
    "googleFontQuery": "Londrina+Solid:wght@100;300;400;900"
  },
  {
    "id": "londrina-shadow",
    "name": "Londrina Shadow",
    "family": "'Londrina Shadow', cursive",
    "category": "display",
    "subcategories": [
      "shadow",
      "3d",
      "street"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Marcelo Magalhães",
    "description": "The outline drop-shadow variant of Londrina, giving flat titles instant 3-dimensional street cred.",
    "tags": [
      "shadow",
      "3d",
      "street-art",
      "playful"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "Impact, cursive",
    "googleFontQuery": "Londrina+Shadow&display=swap"
  },
  {
    "id": "londrina-sketch",
    "name": "Londrina Sketch",
    "family": "'Londrina Sketch', cursive",
    "category": "display",
    "subcategories": [
      "sketch",
      "cross-hatch",
      "hand-drawn"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Marcelo Magalhães",
    "description": "A wireframe cross-hatched sketched display font that looks like colored pencil doodles on cardboard.",
    "tags": [
      "sketch",
      "cross-hatch",
      "pencil",
      "craft"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "lato",
      "quicksand"
    ],
    "useCases": [
      "social-media",
      "poster",
      "branding"
    ],
    "fallback": "cursive",
    "googleFontQuery": "Londrina+Sketch&display=swap"
  },
  {
    "id": "ruslan-display",
    "name": "Ruslan Display",
    "family": "'Ruslan Display', cursive",
    "category": "display",
    "subcategories": [
      "cyrillic",
      "gothic",
      "slavic"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Denis Masharov",
    "description": "Derived from ancient Slavic semi-uncial calligraphy, offering regal fantasy and historical myth appeal.",
    "tags": [
      "slavic",
      "fantasy",
      "calligraphy",
      "ancient",
      "regal"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "eb-garamond",
      "pt-serif"
    ],
    "useCases": [
      "gaming",
      "poster",
      "logo",
      "branding"
    ],
    "fallback": "serif",
    "googleFontQuery": "Ruslan+Display&display=swap"
  },
  {
    "id": "vast-shadow",
    "name": "Vast Shadow",
    "family": "'Vast Shadow', serif",
    "category": "display",
    "subcategories": [
      "victorian",
      "drop-shadow",
      "saloon"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Nicole Fally",
    "description": "A Victorian slab serif with a deep solid drop shadow that provides a solid, nostalgic presence.",
    "tags": [
      "victorian",
      "shadow",
      "saloon",
      "vintage"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "open-sans",
      "merriweather"
    ],
    "useCases": [
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "serif",
    "googleFontQuery": "Vast+Shadow&display=swap"
  },
  {
    "id": "megrim",
    "name": "Megrim",
    "family": "'Megrim', cursive",
    "category": "display",
    "subcategories": [
      "wireframe",
      "y2k",
      "experimental"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Daniel Johnson",
    "description": "An experimental geometric wireframe font composed of overlapping thin line segments and circles, icon of early 2000s cyber aesthetics.",
    "tags": [
      "y2k",
      "cyber",
      "experimental",
      "wireframe",
      "futuristic"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "space-mono",
      "inter"
    ],
    "useCases": [
      "gaming",
      "logo",
      "social-media",
      "tech"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Megrim&display=swap"
  },
  {
    "id": "plaster",
    "name": "Plaster",
    "family": "'Plaster', display",
    "category": "display",
    "subcategories": [
      "stencil",
      "cubist",
      "abstract"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Eben Sorkin",
    "description": "An aggressive low-resolution cubist stencil font built out of pure geometric angled blocks.",
    "tags": [
      "cubist",
      "stencil",
      "abstract",
      "brutalist"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "poster",
      "logo",
      "branding",
      "gaming"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Plaster&display=swap"
  },
  {
    "id": "squada-one",
    "name": "Squada One",
    "family": "'Squada One', cursive",
    "category": "display",
    "subcategories": [
      "condensed",
      "squarish",
      "athletic"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Joe Prince",
    "description": "A square-jawed, athletic condensed display font designed for sports jersey numbers, stadium banners, and gaming titles.",
    "tags": [
      "athletic",
      "sports",
      "condensed",
      "squarish",
      "bold"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "open-sans",
      "inter"
    ],
    "useCases": [
      "gaming",
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Squada+One&display=swap"
  },
  {
    "id": "major-mono-display",
    "name": "Major Mono Display",
    "family": "'Major Mono Display', monospace",
    "category": "display",
    "subcategories": [
      "experimental",
      "abstract",
      "minimal"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Emila Biernacka",
    "description": "A playful monospaced geometric display font with an unconventional mix of uppercase and lowercase geometric constructions.",
    "tags": [
      "experimental",
      "avant-garde",
      "abstract",
      "aesthetic",
      "minimal"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "inter",
      "space-mono"
    ],
    "useCases": [
      "branding",
      "logo",
      "social-media",
      "tech"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Major+Mono+Display&display=swap"
  },
  {
    "id": "rubik-glitch",
    "name": "Rubik Glitch",
    "family": "'Rubik Glitch', display",
    "category": "display",
    "subcategories": [
      "glitch",
      "cyberpunk",
      "vhs"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Philipp Nurullin",
    "description": "Digital video static and horizontal artifact displacement baked into the geometry of the Rubik typeface.",
    "tags": [
      "glitch",
      "cyberpunk",
      "vhs",
      "hacker",
      "distorted"
    ],
    "popularity": 95,
    "suggestedPairings": [
      "jetbrains-mono",
      "inter"
    ],
    "useCases": [
      "gaming",
      "logo",
      "social-media",
      "poster"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Rubik+Glitch&display=swap"
  },
  {
    "id": "rubik-vinyl",
    "name": "Rubik Vinyl",
    "family": "'Rubik Vinyl', display",
    "category": "display",
    "subcategories": [
      "grooves",
      "retro",
      "album"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Philipp Nurullin",
    "description": "Rendered with concentric circular micro-grooves that mimic the vinyl surface of classic LP records.",
    "tags": [
      "vinyl",
      "grooves",
      "retro",
      "music",
      "lp"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "dm-sans",
      "inter"
    ],
    "useCases": [
      "logo",
      "poster",
      "social-media"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Rubik+Vinyl&display=swap"
  },
  {
    "id": "rubik-wet-paint",
    "name": "Rubik Wet Paint",
    "family": "'Rubik Wet Paint', display",
    "category": "display",
    "subcategories": [
      "dripping",
      "street",
      "graffiti"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Philipp Nurullin",
    "description": "Features dripping fresh enamel paint pooling at the bottom terminals of every letter.",
    "tags": [
      "dripping",
      "paint",
      "street-art",
      "fresh",
      "gooey"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "montserrat",
      "poppins"
    ],
    "useCases": [
      "poster",
      "social-media",
      "gaming",
      "logo"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Rubik+Wet+Paint&display=swap"
  },
  {
    "id": "rubik-distressed",
    "name": "Rubik Distressed",
    "family": "'Rubik Distressed', display",
    "category": "display",
    "subcategories": [
      "distressed",
      "stamp",
      "industrial"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Philipp Nurullin",
    "description": "A weathered, eroded rubber stamp texture etched into bold geometric typography.",
    "tags": [
      "eroded",
      "stamp",
      "grunge",
      "industrial"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "roboto-mono",
      "inter"
    ],
    "useCases": [
      "poster",
      "gaming",
      "social-media"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Rubik+Distressed&display=swap"
  },
  {
    "id": "rubik-bubbles",
    "name": "Rubik Bubbles",
    "family": "'Rubik Bubbles', display",
    "category": "display",
    "subcategories": [
      "bubbles",
      "cute",
      "inflated"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Philipp Nurullin",
    "description": "Inflated like soap bubbles with circular specular highlights, bringing infectious cuteness to titles.",
    "tags": [
      "bubbles",
      "cute",
      "soap",
      "inflated",
      "happy"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "quicksand",
      "nunito"
    ],
    "useCases": [
      "social-media",
      "logo",
      "poster",
      "branding"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Rubik+Bubbles&display=swap"
  },
  {
    "id": "source-code-pro",
    "name": "Source Code Pro",
    "family": "'Source Code Pro', monospace",
    "category": "monospace",
    "subcategories": [
      "coding",
      "adobe",
      "terminal"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Paul D. Hunt (Adobe)",
    "description": "Adobe's open-source monospaced typeface family created expressly for software developers, code editors, and terminals.",
    "tags": [
      "adobe",
      "code",
      "terminal",
      "programmer",
      "clean"
    ],
    "popularity": 97,
    "suggestedPairings": [
      "source-sans-3",
      "source-serif-4"
    ],
    "useCases": [
      "code",
      "tech",
      "website",
      "ui"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Source+Code+Pro:ital,wght@0,200..900;1,200..900"
  },
  {
    "id": "roboto-mono",
    "name": "Roboto Mono",
    "family": "'Roboto Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "google",
      "clean",
      "terminal"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "Apache License 2.0",
    "licenseUrl": "http://www.apache.org/licenses/LICENSE-2.0",
    "author": "Christian Robertson (Google)",
    "description": "The monospaced companion to Google’s Roboto, engineered for reading code and technical logs with mathematical precision.",
    "tags": [
      "google",
      "code",
      "precise",
      "android",
      "clean"
    ],
    "popularity": 98,
    "suggestedPairings": [
      "roboto",
      "roboto-serif"
    ],
    "useCases": [
      "code",
      "tech",
      "ui",
      "website"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Roboto+Mono:ital,wght@0,100..700;1,100..700"
  },
  {
    "id": "inconsolata",
    "name": "Inconsolata",
    "family": "'Inconsolata', monospace",
    "category": "monospace",
    "subcategories": [
      "humanist",
      "code",
      "proportional-spacing"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Raph Levien",
    "description": "A humanist monospaced font inspired by classic Consolas and Avenir, prized for sublime aesthetics and screen legibility.",
    "tags": [
      "humanist",
      "programmer",
      "sublime",
      "code"
    ],
    "popularity": 96,
    "suggestedPairings": [
      "inter",
      "lora"
    ],
    "useCases": [
      "code",
      "tech",
      "website",
      "ui"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Inconsolata:wght@200..900"
  },
  {
    "id": "ubuntu-mono",
    "name": "Ubuntu Mono",
    "family": "'Ubuntu Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "linux",
      "terminal",
      "canonical"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "Ubuntu Font License 1.0",
    "licenseUrl": "https://ubuntu.com/legal/font-licence",
    "author": "Dalton Maag",
    "description": "The terminal font of Ubuntu Linux, recognizable in developer workstations and command-line interfaces everywhere.",
    "tags": [
      "linux",
      "terminal",
      "ubuntu",
      "code"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "ubuntu",
      "inter"
    ],
    "useCases": [
      "code",
      "tech",
      "website"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700"
  },
  {
    "id": "courier-prime",
    "name": "Courier Prime",
    "family": "'Courier Prime', monospace",
    "category": "monospace",
    "subcategories": [
      "screenplay",
      "hollywood",
      "classic"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Quote-Unquote Apps (Alan Dague-Greene)",
    "description": "Commissioned specifically for screenwriters to replace standard Courier, offering heavier weight and pristine Hollywood page formatting.",
    "tags": [
      "screenplay",
      "hollywood",
      "script",
      "typewriter",
      "cinema"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "merriweather",
      "inter"
    ],
    "useCases": [
      "editorial",
      "code",
      "presentation",
      "resume"
    ],
    "fallback": "\"Courier New\", Courier, monospace",
    "googleFontQuery": "Courier+Prime:ital,wght@0,400;0,700;1,400;1,700"
  },
  {
    "id": "anonymous-pro",
    "name": "Anonymous Pro",
    "family": "'Anonymous Pro', monospace",
    "category": "monospace",
    "subcategories": [
      "coding",
      "distinguishable",
      "crisp"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Mark Simonson",
    "description": "Designed specifically for coding, with slashed zeros and distinct glyph disambiguation for I, l, and 1.",
    "tags": [
      "code",
      "clarity",
      "programmer",
      "terminal"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "proxima-nova",
      "inter"
    ],
    "useCases": [
      "code",
      "tech",
      "website"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700"
  },
  {
    "id": "overpass-mono",
    "name": "Overpass Mono",
    "family": "'Overpass Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "signage",
      "technical",
      "redhat"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Delve Withrington (Red Hat)",
    "description": "The monospaced companion to Overpass, derived from the rigorous geometry of US highway signage specifications.",
    "tags": [
      "signage",
      "highway",
      "code",
      "redhat"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "overpass",
      "lora"
    ],
    "useCases": [
      "code",
      "tech",
      "website"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Overpass+Mono:wght@300..700"
  },
  {
    "id": "red-hat-mono",
    "name": "Red Hat Mono",
    "family": "'Red Hat Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "enterprise",
      "sysadmin",
      "cloud"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "MCKL (Jeremy Mickel)",
    "description": "Engineered for cloud dashboards, server monitoring logs, and open-source infrastructure tools.",
    "tags": [
      "cloud",
      "sysadmin",
      "terminal",
      "clean"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "red-hat-display",
      "red-hat-text"
    ],
    "useCases": [
      "code",
      "tech",
      "ui"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Red+Hat+Mono:ital,wght@0,300..700;1,300..700"
  },
  {
    "id": "martian-mono",
    "name": "Martian Mono",
    "family": "'Martian Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "brutalist",
      "futuristic",
      "dense"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Evil Martians",
    "description": "A brutalist monospaced font with heavy ink traps and square geometry created by digital product studio Evil Martians.",
    "tags": [
      "brutalist",
      "ink-traps",
      "cyberpunk",
      "modern-code"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "space-grotesk",
      "unbounded"
    ],
    "useCases": [
      "code",
      "tech",
      "branding",
      "gaming"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Martian+Mono:wght@100..800"
  },
  {
    "id": "share-tech-mono",
    "name": "Share Tech Mono",
    "family": "'Share Tech Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "cyber",
      "hud",
      "terminal"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Carrois Apostrophe",
    "description": "A sci-fi monospaced font used in head-up displays (HUD), hacker consoles, and cybersecurity interfaces.",
    "tags": [
      "cyber",
      "hud",
      "hacker",
      "sci-fi",
      "terminal"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "share-tech",
      "orbitron"
    ],
    "useCases": [
      "gaming",
      "code",
      "tech",
      "poster"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Share+Tech+Mono&display=swap"
  },
  {
    "id": "nova-mono",
    "name": "Nova Mono",
    "family": "'Nova Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "futuristic",
      "stylized",
      "scifi"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Wojciech Kalinowski",
    "description": "A stylized monospace font with retro-futuristic cuts and uncial curves, perfect for electronic music and cyberpunk games.",
    "tags": [
      "cyberpunk",
      "stylized",
      "electronic",
      "scifi"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "audiowide",
      "exo-2"
    ],
    "useCases": [
      "gaming",
      "tech",
      "logo",
      "poster"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Nova+Mono&display=swap"
  },
  {
    "id": "syne-mono",
    "name": "Syne Mono",
    "family": "'Syne Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "quirky",
      "artistic",
      "contemporary"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Bonjour Monde",
    "description": "The monospaced sibling of Syne, retaining its bohemian artistic quirkiness inside a fixed-width grid.",
    "tags": [
      "bohemian",
      "artistic",
      "quirky",
      "experimental"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "syne",
      "inter"
    ],
    "useCases": [
      "branding",
      "tech",
      "website",
      "poster"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Syne+Mono&display=swap"
  },
  {
    "id": "vt323",
    "name": "VT323",
    "family": "'VT323', monospace",
    "category": "monospace",
    "subcategories": [
      "crt",
      "dec-vt220",
      "phosphor"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Peter Hull",
    "description": "Recreates the green phosphor character glyphs of the legendary 1980s DEC VT220 terminal screen.",
    "tags": [
      "terminal",
      "dec-vt220",
      "green-screen",
      "retro",
      "matrix"
    ],
    "popularity": 96,
    "suggestedPairings": [
      "press-start-2p",
      "jetbrains-mono"
    ],
    "useCases": [
      "gaming",
      "tech",
      "social-media",
      "code"
    ],
    "fallback": "monospace",
    "googleFontQuery": "VT323&display=swap"
  },
  {
    "id": "cutive-mono",
    "name": "Cutive Mono",
    "family": "'Cutive Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "typewriter",
      "bookish",
      "mechanical"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "Based on the classic typeface of mechanical typewriters, offering clear, literary typewriter charm.",
    "tags": [
      "typewriter",
      "bookish",
      "retro",
      "literature"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "cutive",
      "merriweather"
    ],
    "useCases": [
      "editorial",
      "code",
      "social-media"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Cutive+Mono&display=swap"
  },
  {
    "id": "fantasque-sans-mono",
    "name": "Fantasque Sans Mono",
    "family": "'Fantasque Sans Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "quirky",
      "looping-k",
      "friendly"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Jany Belluz",
    "description": "A programmer font with a whimsical handwriting flair and signature looping lowercase \"k\".",
    "tags": [
      "quirky",
      "looping",
      "code",
      "friendly"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "inter",
      "quicksand"
    ],
    "useCases": [
      "code",
      "tech",
      "branding"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Fantasque+Sans+Mono:ital,wght@0,400;0,700;1,400;1,700"
  },
  {
    "id": "oxygen-mono",
    "name": "Oxygen Mono",
    "family": "'Oxygen Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "kde",
      "linux",
      "clean"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "Created for the KDE desktop project on Linux, designed for clean desktop terminal rendering and scripting.",
    "tags": [
      "kde",
      "linux",
      "clean",
      "code"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "oxygen",
      "inter"
    ],
    "useCases": [
      "code",
      "tech",
      "ui"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Oxygen+Mono&display=swap"
  },
  {
    "id": "chivo-mono",
    "name": "Chivo Mono",
    "family": "'Chivo Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "grotesque",
      "variable",
      "contemporary"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Héctor Gatti",
    "description": "The variable monospaced sister of Chivo, delivering high-impact industrial structure inside strict columns.",
    "tags": [
      "grotesque",
      "industrial",
      "variable",
      "code"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "chivo",
      "inter"
    ],
    "useCases": [
      "code",
      "tech",
      "ui",
      "editorial"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Chivo+Mono:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "fragment-mono",
    "name": "Fragment Mono",
    "family": "'Fragment Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "swiss",
      "helvetica-relative",
      "neutral"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Helvetica relative",
    "description": "A monospaced design closely tied to Swiss neo-grotesque traditions, providing neutral tabular layouts.",
    "tags": [
      "swiss",
      "neutral",
      "code",
      "clean"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "code",
      "tech",
      "ui"
    ],
    "fallback": "monospace",
    "googleFontQuery": "Fragment+Mono:ital@0;1"
  },
  {
    "id": "pt-mono",
    "name": "PT Mono",
    "family": "'PT Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "tabular",
      "cyrillic",
      "forms"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "ParaType",
    "description": "Designed for financial reports, government tax forms, and digital code where tabular alignment is paramount.",
    "tags": [
      "financial",
      "forms",
      "cyrillic",
      "code"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "pt-sans",
      "pt-serif"
    ],
    "useCases": [
      "code",
      "tech",
      "editorial"
    ],
    "fallback": "monospace",
    "googleFontQuery": "PT+Mono&display=swap"
  },
  {
    "id": "b612-mono",
    "name": "B612 Mono",
    "family": "'B612 Mono', monospace",
    "category": "monospace",
    "subcategories": [
      "aeronautics",
      "airbus",
      "cockpit"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Airbus & Intactile Design",
    "description": "Commissioned by aerospace giant Airbus for aircraft cockpit flight management computers, engineered for life-or-death legibility.",
    "tags": [
      "airbus",
      "cockpit",
      "aviation",
      "hyper-legible"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "b612",
      "inter"
    ],
    "useCases": [
      "code",
      "tech",
      "ui"
    ],
    "fallback": "monospace",
    "googleFontQuery": "B612+Mono:ital,wght@0,400;0,700;1,400;1,700"
  },
  {
    "id": "orbitron",
    "name": "Orbitron",
    "family": "'Orbitron', sans-serif",
    "category": "tech",
    "subcategories": [
      "sci-fi",
      "geometric",
      "display"
    ],
    "weights": [
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Matt McInerney",
    "description": "A geometric sci-fi typeface created as an alternative to Eurostile, embodying spacecraft consoles and futuristic interfaces.",
    "tags": [
      "sci-fi",
      "spacecraft",
      "eurostile",
      "gaming",
      "tech"
    ],
    "popularity": 98,
    "suggestedPairings": [
      "roboto",
      "jetbrains-mono"
    ],
    "useCases": [
      "gaming",
      "tech",
      "logo",
      "poster"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Orbitron:wght@400..900"
  },
  {
    "id": "audiowide",
    "name": "Audiowide",
    "family": "'Audiowide', cursive",
    "category": "tech",
    "subcategories": [
      "techno",
      "wide",
      "electronic"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Astigmatic",
    "description": "A wide-stance technological sans-serif that channels high-end stereo equipment, synthesizer control panels, and cyber racers.",
    "tags": [
      "techno",
      "electronic",
      "wide",
      "synthesizer",
      "gaming"
    ],
    "popularity": 95,
    "suggestedPairings": [
      "exo-2",
      "inter"
    ],
    "useCases": [
      "gaming",
      "tech",
      "logo",
      "social-media"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Audiowide&display=swap"
  },
  {
    "id": "michroma",
    "name": "Michroma",
    "family": "'Michroma', sans-serif",
    "category": "tech",
    "subcategories": [
      "microgramma",
      "wide",
      "aerospace"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "An open-source tribute to Aldo Novarese’s 1952 Microgramma, legendary for its squarish mid-century aerospace aesthetic.",
    "tags": [
      "microgramma",
      "aerospace",
      "squarish",
      "mid-century-modern"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "open-sans",
      "inter"
    ],
    "useCases": [
      "tech",
      "gaming",
      "logo",
      "branding"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Michroma&display=swap"
  },
  {
    "id": "exo-2",
    "name": "Exo 2",
    "family": "'Exo 2', sans-serif",
    "category": "tech",
    "subcategories": [
      "geometric",
      "futuristic",
      "contemporary"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Natanael Gama",
    "description": "A complete redesign of the popular Exo font with organic curves and futuristic technological structure.",
    "tags": [
      "futuristic",
      "versatile",
      "tech",
      "gaming",
      "ui"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "inter",
      "roboto-mono"
    ],
    "useCases": [
      "tech",
      "gaming",
      "ui",
      "website"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Exo+2:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "exo",
    "name": "Exo",
    "family": "'Exo', sans-serif",
    "category": "tech",
    "subcategories": [
      "geometric",
      "tech",
      "dynamic"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Natanael Gama",
    "description": "The pioneering futuristic geometric typeface funded by Kickstarter that catalyzed modern tech typography on the web.",
    "tags": [
      "kickstarter",
      "futuristic",
      "tech",
      "dynamic"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "open-sans",
      "lato"
    ],
    "useCases": [
      "tech",
      "gaming",
      "branding"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Exo:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "rajdhani",
    "name": "Rajdhani",
    "family": "'Rajdhani', sans-serif",
    "category": "tech",
    "subcategories": [
      "modular",
      "squarish",
      "mecha"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Indian Type Foundry",
    "description": "A squarish modular typeface widely used in esports broadcasting, mecha anime, and sci-fi video game interfaces.",
    "tags": [
      "esports",
      "mecha",
      "squarish",
      "gaming",
      "scifi"
    ],
    "popularity": 96,
    "suggestedPairings": [
      "inter",
      "roboto"
    ],
    "useCases": [
      "gaming",
      "tech",
      "poster",
      "logo"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Rajdhani:wght@300;400;500;600;700"
  },
  {
    "id": "chakra-petch",
    "name": "Chakra Petch",
    "family": "'Chakra Petch', sans-serif",
    "category": "tech",
    "subcategories": [
      "chamfered",
      "industrial",
      "thai"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Cadson Demak",
    "description": "Square chamfered angles that evoke military hardware, robotics chassis, and high-tech instrumentation.",
    "tags": [
      "robotics",
      "chamfered",
      "military",
      "gaming"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "gaming",
      "tech",
      "poster",
      "logo"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700"
  },
  {
    "id": "electrolize",
    "name": "Electrolize",
    "family": "'Electrolize', sans-serif",
    "category": "tech",
    "subcategories": [
      "circuit",
      "electronic",
      "minimal"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Gaslight",
    "description": "A minimal techno sans with soft rounded exterior corners and razor-sharp interior counters, resembling printed circuit boards.",
    "tags": [
      "pcb",
      "circuit",
      "minimal",
      "electronic",
      "tech"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "roboto",
      "montserrat"
    ],
    "useCases": [
      "tech",
      "gaming",
      "logo",
      "website"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Electrolize&display=swap"
  },
  {
    "id": "syncopate",
    "name": "Syncopate",
    "family": "'Syncopate', sans-serif",
    "category": "tech",
    "subcategories": [
      "extended",
      "wide",
      "monumental"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "Apache License 2.0",
    "licenseUrl": "http://www.apache.org/licenses/LICENSE-2.0",
    "author": "Astigmatic",
    "description": "An ultra-wide, low-profile geometric display font that conveys architectural grandeur and luxury tech.",
    "tags": [
      "ultra-wide",
      "extended",
      "cinematic",
      "luxury-tech"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "inter",
      "lato"
    ],
    "useCases": [
      "logo",
      "poster",
      "branding",
      "social-media"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Syncopate:wght@400;700"
  },
  {
    "id": "jura",
    "name": "Jura",
    "family": "'Jura', sans-serif",
    "category": "tech",
    "subcategories": [
      "kaypro",
      "curved-stems",
      "scifi"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Daniel Johnson",
    "description": "Distinguished by curved terminal flourishes on square sans-serif bones, echoing 1980s Kaypro microcomputer screens.",
    "tags": [
      "microcomputer",
      "curved",
      "scifi",
      "distinct"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "inter",
      "source-sans-3"
    ],
    "useCases": [
      "tech",
      "gaming",
      "website"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Jura:wght@300..700"
  },
  {
    "id": "saira",
    "name": "Saira",
    "family": "'Saira', sans-serif",
    "category": "tech",
    "subcategories": [
      "versatile",
      "esports",
      "mechanical"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Hector Gatti",
    "description": "A massive 9-weight technological font family designed for esports overlays, automotive dashboards, and stadium jumbotrons.",
    "tags": [
      "esports",
      "automotive",
      "stadium",
      "bold"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "inter",
      "roboto-mono"
    ],
    "useCases": [
      "gaming",
      "poster",
      "tech",
      "branding"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Saira:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "saira-condensed",
    "name": "Saira Condensed",
    "family": "'Saira Condensed', sans-serif",
    "category": "tech",
    "subcategories": [
      "condensed",
      "esports",
      "hud"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Hector Gatti",
    "description": "The compact narrow sister of Saira, providing maximum density and punch for livestream tickers and game scoreboards.",
    "tags": [
      "scoreboard",
      "condensed",
      "gaming",
      "compact"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "gaming",
      "poster",
      "social-media"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Saira+Condensed:wght@100..900"
  },
  {
    "id": "saira-stencil-one",
    "name": "Saira Stencil One",
    "family": "'Saira Stencil One', display",
    "category": "tech",
    "subcategories": [
      "stencil",
      "military",
      "sci-fi"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Hector Gatti",
    "description": "A heavy sci-fi military stencil font that looks spray-painted onto futuristic spacecraft hulls and ammo crates.",
    "tags": [
      "stencil",
      "spacecraft",
      "military",
      "industrial",
      "gaming"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "saira",
      "inter"
    ],
    "useCases": [
      "gaming",
      "poster",
      "logo"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Saira+Stencil+One&display=swap"
  },
  {
    "id": "bruno-ace",
    "name": "Bruno Ace",
    "family": "'Bruno Ace', cursive",
    "category": "tech",
    "subcategories": [
      "motorsport",
      "speed",
      "automotive"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Astigmatic",
    "description": "Engineered with aerodynamic curves inspired by Formula 1 liveries, supercar emblems, and drone technology.",
    "tags": [
      "aerodynamic",
      "supercar",
      "f1",
      "drone",
      "automotive"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "inter",
      "roboto"
    ],
    "useCases": [
      "gaming",
      "logo",
      "tech",
      "poster"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Bruno+Ace&display=swap"
  },
  {
    "id": "bruno-ace-sc",
    "name": "Bruno Ace SC",
    "family": "'Bruno Ace SC', cursive",
    "category": "tech",
    "subcategories": [
      "small-caps",
      "motorsport",
      "racing"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Astigmatic",
    "description": "The small-caps variant of Bruno Ace, designed for bold automotive badges and esports clan logos.",
    "tags": [
      "small-caps",
      "racing",
      "badges",
      "clan",
      "gaming"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "gaming",
      "logo",
      "poster"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Bruno+Ace+SC&display=swap"
  },
  {
    "id": "russo-one",
    "name": "Russo One",
    "family": "'Russo One', sans-serif",
    "category": "tech",
    "subcategories": [
      "block",
      "slavic-futurism",
      "monumental"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Jovanny Lemonad",
    "description": "Heavy Soviet constructivist-inspired typography tuned for modern digital gaming banners and rock music album art.",
    "tags": [
      "constructivist",
      "heavy",
      "soviet",
      "gaming",
      "poster"
    ],
    "popularity": 95,
    "suggestedPairings": [
      "roboto",
      "montserrat"
    ],
    "useCases": [
      "gaming",
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Russo+One&display=swap"
  },
  {
    "id": "zen-dots",
    "name": "Zen Dots",
    "family": "'Zen Dots', cursive",
    "category": "tech",
    "subcategories": [
      "cyberpunk",
      "tokyo",
      "futuristic"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Yoshimichi Ohira",
    "description": "A cyberpunk display font capturing the neon energy, anime cyber-mecha, and digital signage of Tokyo nights.",
    "tags": [
      "tokyo",
      "neon",
      "anime",
      "cyberpunk",
      "mecha"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "inter",
      "fira-code"
    ],
    "useCases": [
      "gaming",
      "logo",
      "poster",
      "social-media"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Zen+Dots&display=swap"
  },
  {
    "id": "black-ops-one",
    "name": "Black Ops One",
    "family": "'Black Ops One', cursive",
    "category": "tech",
    "subcategories": [
      "military",
      "stencil",
      "heavy"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "James Grieshaber",
    "description": "Inspired by military stencil lettering on ammunition boxes, tank plating, and tactical spec-ops gear.",
    "tags": [
      "tactical",
      "military",
      "spec-ops",
      "call-of-duty",
      "stencil"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "roboto-mono",
      "oswald"
    ],
    "useCases": [
      "gaming",
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Black+Ops+One&display=swap"
  },
  {
    "id": "wallpoet",
    "name": "Wallpoet",
    "family": "'Wallpoet', cursive",
    "category": "tech",
    "subcategories": [
      "stencil",
      "urban",
      "rebel"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Craft Studio",
    "description": "A blocky graffiti stencil typeface that represents dissident political slogans and urban street murals.",
    "tags": [
      "stencil",
      "graffiti",
      "rebel",
      "urban"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "inter",
      "roboto"
    ],
    "useCases": [
      "gaming",
      "poster",
      "logo"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Wallpoet&display=swap"
  },
  {
    "id": "goldman",
    "name": "Goldman",
    "family": "'Goldman', cursive",
    "category": "tech",
    "subcategories": [
      "sci-fi",
      "chamfered",
      "clean"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Jaikishan Patel",
    "description": "A clean chamfered sci-fi font that pairs sleek futuristic aerodynamics with supreme character readability.",
    "tags": [
      "sleek",
      "scifi",
      "aerodynamic",
      "gaming"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "gaming",
      "tech",
      "logo",
      "poster"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Goldman:wght@400;700"
  },
  {
    "id": "rokkitt",
    "name": "Rokkitt",
    "family": "'Rokkitt', serif",
    "category": "slab-serif",
    "subcategories": [
      "geometric-slab",
      "display",
      "newspaper"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "A geometric slab serif designed for display headlines and newspaper banners, inspired by 1930s Litho Antique types.",
    "tags": [
      "geometric-slab",
      "newspaper",
      "bold",
      "sturdy"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "open-sans",
      "inter"
    ],
    "useCases": [
      "editorial",
      "poster",
      "website",
      "branding"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Rokkitt:ital,wght@0,100..900;1,100..900"
  },
  {
    "id": "crete-round",
    "name": "Crete Round",
    "family": "'Crete Round', serif",
    "category": "slab-serif",
    "subcategories": [
      "soft-slab",
      "warm",
      "editorial"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "TypeTogether (Veronika Burian)",
    "description": "A warm slab serif with rounded serifs and teardrop terminals, conveying warmth, hospitality, and editorial authority.",
    "tags": [
      "warm",
      "hospitality",
      "editorial",
      "teardrop"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "lato",
      "inter"
    ],
    "useCases": [
      "editorial",
      "website",
      "branding"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Crete+Round:ital@0;1"
  },
  {
    "id": "josefin-slab",
    "name": "Josefin Slab",
    "family": "'Josefin Slab', serif",
    "category": "slab-serif",
    "subcategories": [
      "geometric",
      "1930s",
      "scandinavian"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Santiago Orozco",
    "description": "A geometric slab serif inspired by 1930s Scandinavian furniture and typography, featuring light hairlines and thin slabs.",
    "tags": [
      "scandinavian",
      "geometric",
      "vintage",
      "elegant"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "josefin-sans",
      "lato"
    ],
    "useCases": [
      "branding",
      "website",
      "poster",
      "logo"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Josefin+Slab:ital,wght@0,100..700;1,100..700"
  },
  {
    "id": "biorhyme",
    "name": "BioRhyme",
    "family": "'BioRhyme', serif",
    "category": "slab-serif",
    "subcategories": [
      "wide",
      "slab",
      "quirky"
    ],
    "weights": [
      200,
      300,
      400,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Aoife Mooney",
    "description": "An open-source wide slab serif with distinctive Latin proportions, large apertures, and strong rhythmic punch.",
    "tags": [
      "wide",
      "quirky",
      "expressive",
      "editorial"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "editorial",
      "branding",
      "website"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "BioRhyme:wght@200;300;400;700;800"
  },
  {
    "id": "biorhyme-expanded",
    "name": "BioRhyme Expanded",
    "family": "'BioRhyme Expanded', serif",
    "category": "slab-serif",
    "subcategories": [
      "ultra-wide",
      "display",
      "slab"
    ],
    "weights": [
      200,
      300,
      400,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Aoife Mooney",
    "description": "The ultra-wide extended sister of BioRhyme, perfect for massive poster headlines and indie branding.",
    "tags": [
      "ultra-wide",
      "display",
      "indie",
      "poster"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "inter",
      "karla"
    ],
    "useCases": [
      "poster",
      "logo",
      "branding"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "BioRhyme+Expanded:wght@200;300;400;700;800"
  },
  {
    "id": "podkova",
    "name": "Podkova",
    "family": "'Podkova', serif",
    "category": "slab-serif",
    "subcategories": [
      "horseshoe",
      "russian",
      "monoline"
    ],
    "weights": [
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Ilya Romanov",
    "description": "Named after the Russian word for \"horseshoe\", characterized by distinctive rounded serifs resembling horseshoe ends.",
    "tags": [
      "horseshoe",
      "monoline",
      "distinctive",
      "cyrillic"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "inter",
      "open-sans"
    ],
    "useCases": [
      "branding",
      "poster",
      "website"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Podkova:wght@400..800"
  },
  {
    "id": "cutive",
    "name": "Cutive",
    "family": "'Cutive', serif",
    "category": "slab-serif",
    "subcategories": [
      "typewriter",
      "proportional",
      "literary"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "A proportional slab serif based on classic typewriter forms like the IBM Selectric, retaining mechanical authorial dignity.",
    "tags": [
      "typewriter",
      "ibm-selectric",
      "mechanical",
      "book"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "cutive-mono",
      "merriweather"
    ],
    "useCases": [
      "editorial",
      "website",
      "resume"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Cutive&display=swap"
  },
  {
    "id": "glegoo",
    "name": "Glegoo",
    "family": "'Glegoo', serif",
    "category": "slab-serif",
    "subcategories": [
      "modern-egyptian",
      "balanced",
      "screen"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Eduardo Tunni",
    "description": "A modern Egyptian slab serif designed with precise counter spaces and clean terminals for digital news publishing.",
    "tags": [
      "egyptian",
      "screen",
      "news",
      "balanced"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "lato",
      "roboto"
    ],
    "useCases": [
      "website",
      "editorial",
      "presentation"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Glegoo:wght@400;700"
  },
  {
    "id": "sanchez",
    "name": "Sanchez",
    "family": "'Sanchez', serif",
    "category": "slab-serif",
    "subcategories": [
      "square-slab",
      "friendly",
      "latin"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Daniel Hernandez (LatinoType)",
    "description": "A square slab serif with soft rounded corners that give it a warm, earthy South American personality.",
    "tags": [
      "latinotype",
      "earthy",
      "friendly",
      "square-slab"
    ],
    "popularity": 90,
    "suggestedPairings": [
      "montserrat",
      "open-sans"
    ],
    "useCases": [
      "branding",
      "website",
      "logo"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Sanchez:ital@0;1"
  },
  {
    "id": "bree-serif",
    "name": "Bree Serif",
    "family": "'Bree Serif', serif",
    "category": "slab-serif",
    "subcategories": [
      "upright-italic",
      "friendly",
      "branding"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "TypeTogether (Veronika Burian & José Scaglione)",
    "description": "The serif companion to TypeTogether’s award-winning Bree, distinguished by uninhibited upright italic charm.",
    "tags": [
      "upright-italic",
      "award-winning",
      "branding",
      "friendly"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "branding",
      "logo",
      "website"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Bree+Serif&display=swap"
  },
  {
    "id": "patua-one",
    "name": "Patua One",
    "family": "'Patua One', serif",
    "category": "slab-serif",
    "subcategories": [
      "curved-slab",
      "warm",
      "editorial"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "LatinoType",
    "description": "A slab serif with curved serifs that enhance visual flow and readability in magazine subheadings and titles.",
    "tags": [
      "curved-slab",
      "magazine",
      "warm",
      "latinotype"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "open-sans",
      "lato"
    ],
    "useCases": [
      "editorial",
      "branding",
      "website"
    ],
    "fallback": "Georgia, serif",
    "googleFontQuery": "Patua+One&display=swap"
  },
  {
    "id": "antonio",
    "name": "Antonio",
    "family": "'Antonio', sans-serif",
    "category": "display",
    "subcategories": [
      "condensed",
      "advertising",
      "bold"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "A reworking of a classic advertising and packaging grotesque, reworked for bold digital billboard displays.",
    "tags": [
      "condensed",
      "advertising",
      "packaging",
      "headline"
    ],
    "popularity": 91,
    "suggestedPairings": [
      "lora",
      "inter"
    ],
    "useCases": [
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Antonio:wght@100..700"
  },
  {
    "id": "poiret-one",
    "name": "Poiret One",
    "family": "'Poiret One', cursive",
    "category": "display",
    "subcategories": [
      "art-deco",
      "minimal",
      "geometric"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Denis Masharov",
    "description": "A delicate Art Deco geometric display font inspired by constructivism and high-fashion Parisian couture.",
    "tags": [
      "art-deco",
      "paris",
      "couture",
      "delicate",
      "minimal"
    ],
    "popularity": 95,
    "suggestedPairings": [
      "montserrat",
      "cormorant-garamond"
    ],
    "useCases": [
      "logo",
      "branding",
      "poster",
      "social-media"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Poiret+One&display=swap"
  },
  {
    "id": "montserrat-alternates",
    "name": "Montserrat Alternates",
    "family": "'Montserrat Alternates', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "quirky",
      "stylized"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Julieta Ulanovsky",
    "description": "The alternative glyph cut of Montserrat with rounded, playful letterforms on characters like \"a\" and \"g\".",
    "tags": [
      "quirky-geometric",
      "stylish",
      "modern",
      "branding"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "montserrat",
      "lora"
    ],
    "useCases": [
      "branding",
      "logo",
      "website",
      "poster"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
  },
  {
    "id": "josefin-sans",
    "name": "Josefin Sans",
    "family": "'Josefin Sans', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "geometric",
      "vintage",
      "fashion"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal",
      "italic"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Santiago Orozco",
    "description": "Inspired by 1920s geometric san-serif designs like Kabel and Futura, featuring an elegant low x-height.",
    "tags": [
      "1920s",
      "geometric",
      "fashion",
      "vintage"
    ],
    "popularity": 96,
    "suggestedPairings": [
      "playfair-display",
      "lora"
    ],
    "useCases": [
      "branding",
      "logo",
      "website",
      "presentation"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Josefin+Sans:ital,wght@0,100..700;1,100..700"
  },
  {
    "id": "tenor-sans",
    "name": "Tenor Sans",
    "family": "'Tenor Sans', sans-serif",
    "category": "sans-serif",
    "subcategories": [
      "high-fashion",
      "editorial",
      "flared"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Denis Masharov",
    "description": "A flared sans-serif designed for fashion and beauty branding, evoking Vogue magazine covers and runway elegance.",
    "tags": [
      "fashion",
      "vogue",
      "beauty",
      "flared",
      "runway"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "bodoni-moda",
      "inter"
    ],
    "useCases": [
      "logo",
      "branding",
      "editorial",
      "social-media"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Tenor+Sans&display=swap"
  },
  {
    "id": "federo",
    "name": "Federo",
    "family": "'Federo', sans-serif",
    "category": "display",
    "subcategories": [
      "art-nouveau",
      "slender",
      "display"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Olexa Volochay",
    "description": "A slender display sans inspired by 1909 Viennese Secession and Art Nouveau master Jakob Erbar.",
    "tags": [
      "art-nouveau",
      "slender",
      "vienna",
      "historic"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "cormorant-garamond",
      "lato"
    ],
    "useCases": [
      "logo",
      "poster",
      "branding"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Federo&display=swap"
  },
  {
    "id": "pompiere",
    "name": "Pompiere",
    "family": "'Pompiere', cursive",
    "category": "display",
    "subcategories": [
      "tall",
      "slender",
      "italian"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Karolina Lach",
    "description": "A condensed, tall Italian display font inspired by handmade lettering in classic New York Little Italy restaurants.",
    "tags": [
      "italian",
      "tall",
      "restaurant",
      "slender"
    ],
    "popularity": 88,
    "suggestedPairings": [
      "montserrat",
      "lora"
    ],
    "useCases": [
      "branding",
      "logo",
      "social-media"
    ],
    "fallback": "cursive, sans-serif",
    "googleFontQuery": "Pompiere&display=swap"
  },
  {
    "id": "gruppo",
    "name": "Gruppo",
    "family": "'Gruppo', cursive",
    "category": "display",
    "subcategories": [
      "minimalist",
      "thin-line",
      "futuristic"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "A minimalist thin-line display font with open rounded arcs and futuristic simplicity.",
    "tags": [
      "minimalist",
      "thin",
      "futuristic",
      "clean"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "logo",
      "tech",
      "branding"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Gruppo&display=swap"
  },
  {
    "id": "six-caps",
    "name": "Six Caps",
    "family": "'Six Caps', sans-serif",
    "category": "display",
    "subcategories": [
      "hyper-condensed",
      "headline",
      "grotesque"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Vernon Adams",
    "description": "A hyper-condensed all-caps display font designed for gigantic vertical banners and narrow magazine spines.",
    "tags": [
      "hyper-condensed",
      "tall",
      "headline",
      "spine"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "lora",
      "open-sans"
    ],
    "useCases": [
      "poster",
      "editorial",
      "logo"
    ],
    "fallback": "Impact, sans-serif",
    "googleFontQuery": "Six+Caps&display=swap"
  },
  {
    "id": "wire-one",
    "name": "Wire One",
    "family": "'Wire One', sans-serif",
    "category": "display",
    "subcategories": [
      "monoline",
      "ultra-condensed",
      "wire"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Alexey Kryukov",
    "description": "A razor-thin monoline wire font with extreme condensation that resembles neon wire bending art.",
    "tags": [
      "wire",
      "neon",
      "ultra-condensed",
      "monoline"
    ],
    "popularity": 87,
    "suggestedPairings": [
      "montserrat",
      "inter"
    ],
    "useCases": [
      "logo",
      "poster",
      "branding"
    ],
    "fallback": "sans-serif",
    "googleFontQuery": "Wire+One&display=swap"
  },
  {
    "id": "cormorant-upright",
    "name": "Cormorant Upright",
    "family": "'Cormorant Upright', serif",
    "category": "serif",
    "subcategories": [
      "upright-italic",
      "renaissance",
      "calligraphic"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Christian Thalmann",
    "description": "A unique hybrid font pairing italic letter shapes with completely vertical, non-slanted stems.",
    "tags": [
      "upright-italic",
      "unique",
      "renaissance",
      "poetry"
    ],
    "popularity": 89,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "editorial",
      "branding",
      "logo"
    ],
    "fallback": "Garamond, serif",
    "googleFontQuery": "Cormorant+Upright:wght@300;400;500;600;700"
  },
  {
    "id": "unifrakturmaguntia",
    "name": "UnifrakturMaguntia",
    "family": "'UnifrakturMaguntia', cursive",
    "category": "display",
    "subcategories": [
      "blackletter",
      "gothic",
      "fraktur"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "J. 'Mach' Wust",
    "description": "The definitive Blackletter / Fraktur font on Google Fonts, modeled on Mainz Gutenberg types and gothic cathedral architecture.",
    "tags": [
      "blackletter",
      "gothic",
      "fraktur",
      "tattoo",
      "medieval",
      "heavy-metal"
    ],
    "popularity": 97,
    "suggestedPairings": [
      "eb-garamond",
      "inter"
    ],
    "useCases": [
      "logo",
      "poster",
      "gaming",
      "social-media"
    ],
    "fallback": "serif",
    "googleFontQuery": "UnifrakturMaguntia&display=swap"
  },
  {
    "id": "unifrakturcook",
    "name": "UnifrakturCook",
    "family": "'UnifrakturCook', cursive",
    "category": "display",
    "subcategories": [
      "blackletter",
      "chancery",
      "gothic"
    ],
    "weights": [
      700
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "J. 'Mach' Wust",
    "description": "A bold, chancery-style gothic blackletter designed by Peter Wiegel, packing extreme medieval drama and tattoo energy.",
    "tags": [
      "blackletter",
      "tattoo",
      "medieval",
      "gothic",
      "bold"
    ],
    "popularity": 95,
    "suggestedPairings": [
      "cormorant-garamond",
      "montserrat"
    ],
    "useCases": [
      "logo",
      "poster",
      "gaming",
      "social-media"
    ],
    "fallback": "serif",
    "googleFontQuery": "UnifrakturCook:wght@700"
  },
  {
    "id": "pirata-one",
    "name": "Pirata One",
    "family": "'Pirata One', cursive",
    "category": "display",
    "subcategories": [
      "gothic",
      "pirate",
      "blackletter"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Rodrigo Fuenzalida & Nicolas Silva",
    "description": "A gothic display font with condensed silhouetted proportions designed for pirate adventure tales, dark fantasy, and metal bands.",
    "tags": [
      "pirate",
      "gothic",
      "metal",
      "dark-fantasy",
      "tattoo"
    ],
    "popularity": 93,
    "suggestedPairings": [
      "inter",
      "dm-sans"
    ],
    "useCases": [
      "gaming",
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "serif",
    "googleFontQuery": "Pirata+One&display=swap"
  },
  {
    "id": "grenze-gotisch",
    "name": "Grenze Gotisch",
    "family": "'Grenze Gotisch', cursive",
    "category": "display",
    "subcategories": [
      "contemporary-blackletter",
      "german",
      "variable"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "isVariable": true,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Omnibus-Type",
    "description": "A revolutionary contemporary variable Blackletter that transitions smoothly from delicate modern hairlines to intense Gothic heavy.",
    "tags": [
      "modern-blackletter",
      "variable",
      "gothic",
      "fashion"
    ],
    "popularity": 94,
    "suggestedPairings": [
      "inter",
      "syne"
    ],
    "useCases": [
      "branding",
      "poster",
      "social-media",
      "logo"
    ],
    "fallback": "serif",
    "googleFontQuery": "Grenze+Gotisch:wght@100..900"
  },
  {
    "id": "medievalsharp",
    "name": "MedievalSharp",
    "family": "'MedievalSharp', cursive",
    "category": "display",
    "subcategories": [
      "medieval",
      "fantasy",
      "calligraphy"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "isVariable": false,
    "source": "google-fonts",
    "license": "SIL Open Font License 1.1",
    "licenseUrl": "https://scripts.sil.org/OFL",
    "author": "Wojciech Kalinowski",
    "description": "A fantasy Gothic font designed for tabletop role-playing games (D&D), medieval chronicles, and enchanted kingdom tales.",
    "tags": [
      "dnd",
      "fantasy",
      "medieval",
      "rpg",
      "chronicle"
    ],
    "popularity": 92,
    "suggestedPairings": [
      "cardo",
      "inter"
    ],
    "useCases": [
      "gaming",
      "poster",
      "logo",
      "social-media"
    ],
    "fallback": "serif",
    "googleFontQuery": "MedievalSharp&display=swap"
  }
];

export const CATEGORIES_METADATA: { id: TypefaceCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'sans-serif', label: 'Sans-Serif' },
  { id: 'serif', label: 'Serif' },
  { id: 'script', label: 'Script' },
  { id: 'display', label: 'Display' },
  { id: 'monospace', label: 'Monospace' },
  { id: 'slab-serif', label: 'Slab-Serif' },
  { id: 'tech', label: 'Tech & Gaming' },
];

export const USE_CASES_METADATA: { id: TypefaceUseCase; label: string }[] = [
  { id: 'social-media', label: 'Social & Bios' },
  { id: 'website', label: 'Websites' },
  { id: 'ui', label: 'UI & Apps' },
  { id: 'logo', label: 'Logos' },
  { id: 'branding', label: 'Branding' },
  { id: 'poster', label: 'Posters' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'code', label: 'Coding' },
  { id: 'gaming', label: 'Gaming' },
  { id: 'resume', label: 'Resumes' },
];
