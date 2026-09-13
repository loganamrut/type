'use client';

import React, { useState } from 'react';
import { Copy, Check, Code2 } from 'lucide-react';
import {
  TYPE_SCALE_PRESETS,
  computeTypeScale,
  generateTailwindTypeConfig,
  generateCSSTypeVariables,
} from '@/lib/scales';
import { TYPEFACES } from '@/lib/fonts-data';
import { loadGoogleFont } from '@/lib/font-loader';
import { copyTextToClipboard } from '@/lib/styled-text';

interface TypeScaleToolProps {
  isStandalonePage?: boolean;
}

export function TypeScaleTool({ isStandalonePage = false }: TypeScaleToolProps) {
  const [baseSize, setBaseSize] = useState<number>(16);
  const [selectedRatioId, setSelectedRatioId] = useState<string>('major-third');
  const [selectedFontId, setSelectedFontId] = useState<string>('inter');
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedTailwind, setCopiedTailwind] = useState(false);
  const [copiedStepToken, setCopiedStepToken] = useState<string | null>(null);

  const activePreset =
    TYPE_SCALE_PRESETS.find((p) => p.id === selectedRatioId) || TYPE_SCALE_PRESETS[3];
  const activeFont = TYPEFACES.find((t) => t.id === selectedFontId) || TYPEFACES[0];

  React.useEffect(() => {
    loadGoogleFont(activeFont.googleFontQuery, activeFont.id);
  }, [activeFont]);

  const steps = computeTypeScale(baseSize, activePreset.ratio);

  const handleCopyCSS = async () => {
    const success = await copyTextToClipboard(generateCSSTypeVariables(steps));
    if (success) {
      setCopiedCSS(true);
      setTimeout(() => setCopiedCSS(false), 1500);
    }
  };

  const handleCopyTailwind = async () => {
    const success = await copyTextToClipboard(generateTailwindTypeConfig(steps));
    if (success) {
      setCopiedTailwind(true);
      setTimeout(() => setCopiedTailwind(false), 1500);
    }
  };

  return (
    <div className={`w-full bg-white border border-zinc-200 rounded-lg p-5 sm:p-6 space-y-6 ${isStandalonePage ? '' : 'my-8'}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-zinc-100 pb-3">
        <div>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950">
            Modular Typography Scale Generator
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">
            Calculate proportional type scales and export CSS/Tailwind tokens.
          </p>
        </div>

        <div className="flex items-center gap-1.5 self-stretch sm:self-auto flex-wrap">
          <button
            onClick={handleCopyCSS}
            className="px-2.5 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 rounded transition-colors flex items-center gap-1"
          >
            {copiedCSS ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>{copiedCSS ? 'Copied' : 'CSS Variables'}</span>
          </button>
          <button
            onClick={handleCopyTailwind}
            className="px-3 py-1.5 text-xs font-medium bg-zinc-950 text-white rounded hover:opacity-90 transition-opacity flex items-center gap-1"
          >
            {copiedTailwind ? <Check className="w-3 h-3 text-emerald-400" /> : <Code2 className="w-3 h-3" />}
            <span>{copiedTailwind ? 'Copied' : 'Tailwind Config'}</span>
          </button>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-zinc-50 p-3.5 rounded border border-zinc-200 text-xs">
        {/* Base Size */}
        <div className="space-y-1">
          <div className="flex justify-between">
            <label htmlFor="scale-base-size" className="text-zinc-500">Base Size</label>
            <span className="font-mono text-zinc-950">{baseSize}px (1.000rem)</span>
          </div>
          <input
            id="scale-base-size"
            type="range"
            min={12}
            max={24}
            step={1}
            value={baseSize}
            onChange={(e) => setBaseSize(Number(e.target.value))}
            className="w-full h-1 bg-zinc-200 rounded appearance-none cursor-pointer accent-zinc-950"
          />
        </div>

        {/* Modular Ratio Selector */}
        <div className="space-y-1">
          <label htmlFor="scale-ratio-select" className="text-zinc-500 block">
            Ratio: <strong className="text-zinc-950 font-medium">{activePreset.ratio}</strong>
          </label>
          <select
            id="scale-ratio-select"
            value={selectedRatioId}
            onChange={(e) => setSelectedRatioId(e.target.value)}
            className="w-full bg-white border border-zinc-200 rounded px-2.5 py-1.5 text-xs text-zinc-800 focus:outline-none"
          >
            {TYPE_SCALE_PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.ratio})
              </option>
            ))}
          </select>
        </div>

        {/* Typeface preview */}
        <div className="space-y-1">
          <label htmlFor="scale-typeface-select" className="text-zinc-500 block">
            Preview Typeface
          </label>
          <select
            id="scale-typeface-select"
            value={selectedFontId}
            onChange={(e) => setSelectedFontId(e.target.value)}
            className="w-full bg-white border border-zinc-200 rounded px-2.5 py-1.5 text-xs text-zinc-800 focus:outline-none"
          >
            {TYPEFACES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Scale Hierarchy List */}
      <div className="space-y-3">
        {steps.map((step) => (
          <div
            key={step.token}
            className="p-3.5 rounded border border-zinc-200 bg-white flex flex-col md:flex-row items-start md:items-baseline justify-between gap-3"
          >
            <div className="shrink-0 w-full md:w-52 space-y-0.5 border-b md:border-b-0 md:border-r border-zinc-100 pb-1.5 md:pb-0 md:pr-3 text-xs">
              <div className="flex items-center justify-between md:justify-start gap-1.5">
                <span className="font-semibold text-zinc-950">
                  {step.name}
                </span>
                <code className="text-[10px] font-mono text-zinc-600">
                  .{step.token}
                </code>
              </div>
              <div className="text-[11px] font-mono text-zinc-600">
                {step.rem}rem · {step.px}px
              </div>
            </div>

            <div
              className="flex-1 select-text text-zinc-950 break-words overflow-hidden"
              style={{
                fontFamily: activeFont.family,
                fontSize: `${step.px}px`,
                lineHeight: step.lineHeight,
                letterSpacing: `${step.letterSpacing}em`,
                fontWeight: step.token.startsWith('h') || step.token === 'display' ? 700 : 400,
                overflowWrap: 'anywhere',
                wordBreak: 'break-word',
              }}
            >
              {step.sampleText}
            </div>

            {/* Quick Copy Step CSS */}
            <div className="shrink-0 self-end md:self-center">
              <button
                onClick={async () => {
                  const rule = `font-size: ${step.rem}rem; /* ${step.px}px */\nline-height: ${step.lineHeight};\nletter-spacing: ${step.letterSpacing}em;`;
                  const success = await copyTextToClipboard(rule);
                  if (success) {
                    setCopiedStepToken(step.token);
                    setTimeout(() => setCopiedStepToken(null), 1500);
                  }
                }}
                className={`px-2.5 py-1 text-[11px] font-medium border rounded transition-colors flex items-center gap-1 active:scale-95 ${
                  copiedStepToken === step.token
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                    : 'border-zinc-200 text-zinc-600 hover:border-zinc-950 hover:text-zinc-950'
                }`}
                title={`Copy CSS rule for .${step.token}`}
              >
                {copiedStepToken === step.token ? (
                  <Check className="w-3 h-3 text-emerald-600" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
                <span>{copiedStepToken === step.token ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
