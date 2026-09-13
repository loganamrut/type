'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeftRight, Shuffle, Copy, Check, Lock, Unlock } from 'lucide-react';
import { CURATED_PAIRINGS } from '@/lib/pairings-data';
import { TYPEFACES } from '@/lib/fonts-data';
import { loadBatchGoogleFonts } from '@/lib/font-loader';
import { copyTextToClipboard } from '@/lib/styled-text';

interface TypefacePairingProps {
  isStandalonePage?: boolean;
}

export function TypefacePairing({ isStandalonePage = false }: TypefacePairingProps) {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [headingFontId, setHeadingFontId] = useState('playfair-display');
  const [bodyFontId, setBodyFontId] = useState('inter');
  const [headingText, setHeadingText] = useState('The Art of Modern Elegance');
  const [bodyText, setBodyText] = useState(
    'True sophistication lies not in ornate embellishment, but in the restraint of proportion. When high-contrast serifs dance atop neutral modern structures, the eye glides effortlessly through ideas.'
  );
  const [headingLocked, setHeadingLocked] = useState(false);
  const [bodyLocked, setBodyLocked] = useState(false);
  const [copiedPairing, setCopiedPairing] = useState(false);

  const headingTypeface = TYPEFACES.find((t) => t.id === headingFontId) || TYPEFACES[0];
  const bodyTypeface = TYPEFACES.find((t) => t.id === bodyFontId) || TYPEFACES[1];

  useEffect(() => {
    loadBatchGoogleFonts([headingTypeface, bodyTypeface]);
  }, [headingTypeface, bodyTypeface]);

  const activePairing = CURATED_PAIRINGS.find(
    (p) => p.headingFontId === headingFontId && p.bodyFontId === bodyFontId
  ) || {
    id: 'custom',
    title: `${headingTypeface.name} + ${bodyTypeface.name}`,
    headingFontId,
    bodyFontId,
    vibe: `${headingTypeface.category} & ${bodyTypeface.category}`,
    contrastScore: 88,
    rationale: `Pairing a ${headingTypeface.category} typeface (${headingTypeface.name}) for titling with a readable ${bodyTypeface.category} (${bodyTypeface.name}) for long-form body text establishes a natural visual hierarchy and clear cognitive distinction.`,
    recommendedUse: 'Web applications, editorial landing pages, and marketing platforms.',
    headingWeight: headingTypeface.weights[headingTypeface.weights.length - 2] || 700,
    bodyWeight: 400,
    headingSample: headingText,
    bodySample: bodyText,
  };

  const handleNextPairing = () => {
    const nextIdx = (currentPairIndex + 1) % CURATED_PAIRINGS.length;
    setCurrentPairIndex(nextIdx);
    const pair = CURATED_PAIRINGS[nextIdx];
    if (!headingLocked) {
      setHeadingFontId(pair.headingFontId);
      setHeadingText(pair.headingSample);
    }
    if (!bodyLocked) {
      setBodyFontId(pair.bodyFontId);
      setBodyText(pair.bodySample);
    }
  };

  const handleSwap = () => {
    const prevHeading = headingFontId;
    const prevBody = bodyFontId;
    setHeadingFontId(prevBody);
    setBodyFontId(prevHeading);
  };

  const handleRandomize = () => {
    if (!headingLocked) {
      const randomHeading = TYPEFACES[Math.floor(Math.random() * TYPEFACES.length)].id;
      setHeadingFontId(randomHeading);
    }
    if (!bodyLocked) {
      const randomBody = TYPEFACES[Math.floor(Math.random() * TYPEFACES.length)].id;
      setBodyFontId(randomBody);
    }
  };

  const handleCopyPairingCSS = async () => {
    const css = `/* Typeface Pairing: ${headingTypeface.name} (Heading) + ${bodyTypeface.name} (Body) */

h1, h2, h3, h4, h5, h6 {
  font-family: ${headingTypeface.family};
  font-weight: 700;
  line-height: 1.2;
}

body, p {
  font-family: ${bodyTypeface.family};
  font-weight: 400;
  line-height: 1.6;
}`;

    const success = await copyTextToClipboard(css);
    if (success) {
      setCopiedPairing(true);
      setTimeout(() => setCopiedPairing(false), 1500);
    }
  };

  return (
    <div className={`w-full bg-white border border-zinc-200 rounded-lg p-5 sm:p-6 space-y-6 ${isStandalonePage ? '' : 'my-8'}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-zinc-100 pb-3">
        <div>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950">
            Typeface Pairing Generator
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">
            Test heading and body combinations with objective typographic contrast.
          </p>
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto flex-wrap">
          <button
            onClick={handleSwap}
            className="min-h-[34px] px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 rounded transition-colors flex items-center gap-1.5 active:scale-95"
            title="Swap heading and body fonts"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Swap</span>
          </button>
          <button
            onClick={handleRandomize}
            className="min-h-[34px] px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 rounded transition-colors flex items-center gap-1.5 active:scale-95"
            title="Randomize combination"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Randomize</span>
          </button>
          <button
            onClick={handleNextPairing}
            className="min-h-[34px] px-3.5 py-1.5 text-xs font-medium bg-zinc-950 text-white rounded hover:opacity-90 transition-opacity active:scale-95"
          >
            Next Pairing &rarr;
          </button>
        </div>
      </div>

      {/* Font Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Heading Font Select */}
        <div className="p-3 bg-zinc-50 rounded border border-zinc-200 space-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="heading-font-select" className="text-[11px] font-mono uppercase text-zinc-500">
              Heading (H1–H3)
            </label>
            <button
              onClick={() => setHeadingLocked(!headingLocked)}
              className="text-[11px] text-zinc-500 hover:text-zinc-950 flex items-center gap-1"
            >
              {headingLocked ? <Lock className="w-3 h-3 text-zinc-950" /> : <Unlock className="w-3 h-3" />}
              <span>{headingLocked ? 'Locked' : 'Lock'}</span>
            </button>
          </div>
          <select
            id="heading-font-select"
            value={headingFontId}
            onChange={(e) => setHeadingFontId(e.target.value)}
            className="w-full bg-white border border-zinc-200 rounded px-2.5 py-1.5 text-sm font-semibold text-zinc-950 focus:outline-none"
          >
            {TYPEFACES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} ({t.category})
              </option>
            ))}
          </select>
        </div>

        {/* Body Font Select */}
        <div className="p-3 bg-zinc-50 rounded border border-zinc-200 space-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="body-font-select" className="text-[11px] font-mono uppercase text-zinc-500">
              Body Copy
            </label>
            <button
              onClick={() => setBodyLocked(!bodyLocked)}
              className="text-[11px] text-zinc-500 hover:text-zinc-950 flex items-center gap-1"
            >
              {bodyLocked ? <Lock className="w-3 h-3 text-zinc-950" /> : <Unlock className="w-3 h-3" />}
              <span>{bodyLocked ? 'Locked' : 'Lock'}</span>
            </button>
          </div>
          <select
            id="body-font-select"
            value={bodyFontId}
            onChange={(e) => setBodyFontId(e.target.value)}
            className="w-full bg-white border border-zinc-200 rounded px-2.5 py-1.5 text-sm font-semibold text-zinc-950 focus:outline-none"
          >
            {TYPEFACES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} ({t.category})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Live Specimen Preview */}
      <div className="bg-white border border-zinc-200 rounded-lg p-6 space-y-4">
        <div>
          <label htmlFor="pairing-heading-input" className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 block mb-1">
            {headingTypeface.name} (700)
          </label>
          <input
            id="pairing-heading-input"
            aria-label="Heading text preview"
            type="text"
            value={headingText}
            onChange={(e) => setHeadingText(e.target.value)}
            style={{
              fontFamily: headingTypeface.family,
              fontWeight: 700,
            }}
            className="w-full text-2xl sm:text-4xl font-bold bg-transparent border-b border-transparent hover:border-zinc-200 focus:border-zinc-950 focus:outline-none text-zinc-950"
          />
        </div>

        <div>
          <label htmlFor="pairing-body-input" className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 block mb-1">
            {bodyTypeface.name} (400)
          </label>
          <textarea
            id="pairing-body-input"
            aria-label="Body text preview"
            rows={3}
            value={bodyText}
            onChange={(e) => setBodyText(e.target.value)}
            style={{
              fontFamily: bodyTypeface.family,
              fontWeight: 400,
              lineHeight: 1.6,
            }}
            className="w-full text-sm sm:text-base bg-transparent border-b border-transparent hover:border-zinc-200 focus:border-zinc-950 focus:outline-none text-zinc-800 resize-none"
          />
        </div>
      </div>

      {/* Rationale & Copy CSS */}
      <div className="p-4 bg-zinc-50 border border-zinc-200 rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="space-y-0.5 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-950">Rationale:</span>
            <span className="text-zinc-500 font-mono text-[11px]">{activePairing.vibe}</span>
          </div>
          <p className="text-zinc-500 leading-relaxed">
            {activePairing.rationale}
          </p>
        </div>

        <button
          onClick={handleCopyPairingCSS}
          className="px-3 py-1.5 bg-zinc-950 text-white rounded text-xs font-medium hover:opacity-90 transition-opacity flex items-center gap-1 shrink-0"
        >
          {copiedPairing ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copiedPairing ? 'Copied' : 'Copy CSS'}</span>
        </button>
      </div>
    </div>
  );
}
