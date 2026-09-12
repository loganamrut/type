import { TypeScalePreset, TypeScaleStep } from './types';

export const TYPE_SCALE_PRESETS: TypeScalePreset[] = [
  {
    id: 'minor-second',
    name: 'Minor Second',
    ratio: 1.067,
    description: 'Subtle, understated scale with very tight size hierarchy.',
    commonUse: 'Dense web applications, financial dashboards, complex data tables.',
  },
  {
    id: 'major-second',
    name: 'Major Second',
    ratio: 1.125,
    description: 'Modest contrast scale preserving high vertical screen density.',
    commonUse: 'SaaS interfaces, admin panels, technical documentation.',
  },
  {
    id: 'minor-third',
    name: 'Minor Third',
    ratio: 1.200,
    description: 'Classic web standard. Balanced hierarchy suitable for desktop and mobile.',
    commonUse: 'General marketing sites, modern blogs, product landing pages.',
  },
  {
    id: 'major-third',
    name: 'Major Third',
    ratio: 1.250,
    description: 'Harmonious musical ratio offering confident, noticeable contrast.',
    commonUse: 'Content publishing, editorial websites, corporate platforms.',
  },
  {
    id: 'perfect-fourth',
    name: 'Perfect Fourth',
    ratio: 1.333,
    description: 'High impact scale providing distinct, commanding headings.',
    commonUse: 'Creative portfolios, design agencies, tech marketing sites.',
  },
  {
    id: 'augmented-fourth',
    name: 'Augmented Fourth',
    ratio: 1.414,
    description: 'Dynamic √2 proportion offering sharp jump between text and titles.',
    commonUse: 'Poster-style web design, brand campaigns, media hubs.',
  },
  {
    id: 'perfect-fifth',
    name: 'Perfect Fifth',
    ratio: 1.500,
    description: 'Dramatic, bold scale creating cinematic contrast between headers and copy.',
    commonUse: 'Luxury branding, editorial headlines, visual storytelling.',
  },
  {
    id: 'golden-ratio',
    name: 'Golden Ratio (Phi)',
    ratio: 1.618,
    description: 'Extreme organic mathematical contrast derived from divine proportions.',
    commonUse: 'Monumental art exhibitions, high-fashion launches, architectural sites.',
  },
];

export function computeTypeScale(baseSizePx: number = 16, ratio: number = 1.25): TypeScaleStep[] {
  const steps = [
    { name: 'Display Heading', token: 'display', power: 4, sampleText: 'The Future of Typography' },
    { name: 'Heading 1', token: 'h1', power: 3, sampleText: 'Harmonious Type Hierarchy' },
    { name: 'Heading 2', token: 'h2', power: 2, sampleText: 'Structural Contrast and Rhythm' },
    { name: 'Heading 3', token: 'h3', power: 1, sampleText: 'Legibility Across Screen Resolutions' },
    { name: 'Body / Base', token: 'base', power: 0, sampleText: 'Good typography builds trust and makes reading effortless.' },
    { name: 'Small / Secondary', token: 'small', power: -1, sampleText: 'Captions, author bylines, and secondary metadata notations.' },
    { name: 'Caption / Micro', token: 'micro', power: -2, sampleText: 'Legal disclosures, footnotes, and fine print.' },
  ];

  return steps.map((s) => {
    const px = Math.round(baseSizePx * Math.pow(ratio, s.power) * 10) / 10;
    const rem = Math.round((px / 16) * 1000) / 1000;
    const lineHeight = s.power >= 2 ? 1.15 : s.power === 1 ? 1.3 : 1.55;
    const letterSpacing = s.power >= 3 ? -0.02 : s.power >= 1 ? -0.01 : 0;

    return {
      name: s.name,
      token: s.token,
      rem,
      px,
      lineHeight,
      letterSpacing,
      sampleText: s.sampleText,
    };
  });
}

export function generateTailwindTypeConfig(steps: TypeScaleStep[]): string {
  const obj: Record<string, [string, { lineHeight: string; letterSpacing: string }]> = {};
  steps.forEach((s) => {
    obj[s.token] = [`${s.rem}rem`, { lineHeight: `${s.lineHeight}`, letterSpacing: `${s.letterSpacing}em` }];
  });
  return `// tailwind.config.js - extended fontSize tokens
module.exports = {
  theme: {
    extend: {
      fontSize: ${JSON.stringify(obj, null, 2)}
    }
  }
};`;
}

export function generateCSSTypeVariables(steps: TypeScaleStep[]): string {
  const lines = steps.map((s) => `  --font-size-${s.token}: ${s.rem}rem; /* ${s.px}px */`);
  return `:root {\n${lines.join('\n')}\n}`;
}
