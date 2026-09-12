export type TypefaceCategory =
  | 'all'
  | 'serif'
  | 'sans-serif'
  | 'slab-serif'
  | 'monospace'
  | 'display'
  | 'handwriting'
  | 'script'
  | 'geometric'
  | 'humanist'
  | 'editorial'
  | 'luxury'
  | 'retro'
  | 'tech';

export type TypefaceUseCase =
  | 'logo'
  | 'website'
  | 'ui'
  | 'editorial'
  | 'resume'
  | 'poster'
  | 'presentation'
  | 'social-media'
  | 'code'
  | 'branding'
  | 'tech'
  | 'gaming';

export interface VariableAxis {
  tag: string;
  name: string;
  min: number;
  max: number;
  default: number;
  step?: number;
}

export interface Typeface {
  id: string;
  name: string;
  family: string;
  category: Exclude<TypefaceCategory, 'all'>;
  subcategories: string[];
  weights: number[];
  styles: ('normal' | 'italic')[];
  isVariable: boolean;
  variableAxes?: VariableAxis[];
  source: 'google-fonts' | 'open-source';
  license: string;
  licenseUrl: string;
  author: string;
  description: string;
  tags: string[];
  popularity: number;
  suggestedPairings: string[];
  useCases: TypefaceUseCase[];
  fallback: string;
  googleFontQuery: string;
}

export interface TypographySettings {
  text: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number; // in em
  textAlign: 'left' | 'center' | 'right' | 'justify';
  textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  previewTheme: 'light' | 'dark' | 'sepia' | 'contrast';
  previewWidth: 'full' | 'desktop' | 'tablet' | 'mobile';
}

export interface TypefacePairing {
  id: string;
  title: string;
  headingFontId: string;
  bodyFontId: string;
  vibe: string;
  contrastScore: number;
  rationale: string;
  recommendedUse: string;
  headingWeight: number;
  bodyWeight: number;
  headingSample: string;
  bodySample: string;
}

export interface TypeScaleStep {
  name: string;
  token: string;
  rem: number;
  px: number;
  lineHeight: number;
  letterSpacing: number;
  sampleText: string;
}

export interface TypeScalePreset {
  id: string;
  name: string;
  ratio: number;
  description: string;
  commonUse: string;
}
