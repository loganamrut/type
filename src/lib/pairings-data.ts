import { TypefacePairing } from './types';

export const CURATED_PAIRINGS: TypefacePairing[] = [
  {
    id: 'editorial-chic',
    title: 'High-Fashion Editorial',
    headingFontId: 'playfair-display',
    bodyFontId: 'inter',
    vibe: 'Sophisticated, Luxurious, Timeless',
    contrastScore: 94,
    rationale:
      'Playfair Display brings romantic transitional high-contrast serifs with dramatic thin hairlines. Inter stabilizes the pairing with a neutral, hyper-legible neo-grotesque foundation, avoiding visual competition while ensuring effortless reading.',
    recommendedUse: 'Luxury lifestyle publications, modern architectural studios, premium e-commerce.',
    headingWeight: 700,
    bodyWeight: 400,
    headingSample: 'The Art of Modern Elegance',
    bodySample:
      'True sophistication lies not in ornate embellishment, but in the restraint of proportion. When high-contrast serifs dance atop neutral modern structures, the eye glides effortlessly through ideas.',
  },
  {
    id: 'brutalist-clarity',
    title: 'Contemporary Brutalist',
    headingFontId: 'bricolage-grotesque',
    bodyFontId: 'newsreader',
    vibe: 'Punchy, Expressive, Cultured',
    contrastScore: 92,
    rationale:
      'Bricolage Grotesque provides a bold, quirky European street-sign punch at large display sizes. Newsreader balances this exuberance with its literary optical-sized elegance, creating an irresistible dialogue between street art and scholarly depth.',
    recommendedUse: 'Creative agencies, independent culture magazines, design portfolios.',
    headingWeight: 800,
    bodyWeight: 400,
    headingSample: 'Radical Design Movements',
    bodySample:
      'Every major typographic renaissance began as an intentional departure from quiet consensus. By contrasting raw structural weight with delicate literary curves, an identity instantly commands attention.',
  },
  {
    id: 'modern-tech-craft',
    title: 'Silicon Precision & Warmth',
    headingFontId: 'space-grotesk',
    bodyFontId: 'merriweather',
    vibe: 'Technological, Dependable, Narrative',
    contrastScore: 89,
    rationale:
      'Space Grotesk introduces mechanical quirk and digital engineering aesthetics in headers. Merriweather softens the technical edge with sturdy, warm serif book-typography that invites the reader into in-depth essays.',
    recommendedUse: 'Developer publications, deep-tech research platforms, engineering blogs.',
    headingWeight: 700,
    bodyWeight: 300,
    headingSample: 'Architecting Distributed Systems',
    bodySample:
      'Reliability is not an accident of architecture, but the product of continuous stress-testing and deliberate redundancy. Sturdy typography mirrors this ethic with steady rhythm across every viewport.',
  },
  {
    id: 'haute-couture',
    title: 'Modern Didone Poetry',
    headingFontId: 'cormorant-garamond',
    bodyFontId: 'plus-jakarta-sans',
    vibe: 'Classical, Poetic, Avant-Garde',
    contrastScore: 95,
    rationale:
      'Cormorant Garamond delivers exquisite 16th-century Garamont proportions with razor hairlines. Plus Jakarta Sans brings fresh geometric optimism, preventing the classical serif from feeling dusty or archaic.',
    recommendedUse: 'Fine jewelry brands, high-end hospitality, boutique cosmetics, art monographs.',
    headingWeight: 600,
    bodyWeight: 400,
    headingSample: 'Curated Heritage & Legacy',
    bodySample:
      'Every master craftsman understands that proportion governs perception. When historical calligraphy meets geometric clarity, both eras elevate each other into an enduring harmony.',
  },
  {
    id: 'warm-editorial',
    title: 'Warm Humanist Narrative',
    headingFontId: 'fraunces',
    bodyFontId: 'dm-sans',
    vibe: 'Warm, Personable, Modern-Organic',
    contrastScore: 88,
    rationale:
      'Fraunces brings soft, voluptuous curves reminiscent of vintage apothecary packaging. DM Sans serves as a pristine, low-contrast geometric counterweight, keeping the layout brisk and responsive.',
    recommendedUse: 'Organic food brands, wellness platforms, coffee roasters, storytelling podcasts.',
    headingWeight: 700,
    bodyWeight: 400,
    headingSample: 'Harvested with Conscience',
    bodySample:
      'Slow agriculture reminds us that flavor cannot be accelerated. By returning to heritage grains and patient fermentation, we honor the soil that sustains human vitality.',
  },
  {
    id: 'developer-minimalism',
    title: 'Monospaced Utility & Serenity',
    headingFontId: 'outfit',
    bodyFontId: 'jetbrains-mono',
    vibe: 'Futuristic, Clean, Code-Centric',
    contrastScore: 86,
    rationale:
      'Outfit brings geometric circular purity for clean modern titles. JetBrains Mono delivers crisp monospace legibility for body, data tables, and technical manifestos.',
    recommendedUse: 'Developer tools, SaaS documentation, cryptographic protocols, Web3 products.',
    headingWeight: 700,
    bodyWeight: 400,
    headingSample: 'Deterministic State Machines',
    bodySample:
      '// Pure functional transformations ensure reproducible outcomes\nconst state = transition(previousState, event);\nassert.equal(state.isConsistent, true);',
  },
];
