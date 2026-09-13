'use client';

import React, { useState, useEffect } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { Typeface } from '@/lib/types';
import { TYPEFACES } from '@/lib/fonts-data';
import { loadBatchGoogleFonts } from '@/lib/font-loader';
import { getMatchingStyleVariant, copyStyledTextToClipboard, copyTextToClipboard } from '@/lib/styled-text';

interface TypefaceComparisonProps {
  initialFontIds?: string[];
  onClose?: () => void;
  isStandalonePage?: boolean;
}

export function TypefaceComparison({
  initialFontIds = ['inter', 'playfair-display', 'jetbrains-mono'],
  onClose,
  isStandalonePage = false,
}: TypefaceComparisonProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>(initialFontIds.slice(0, 4));
  const [sampleText, setSampleText] = useState('Typographic proportion reveals structural harmony.');
  const [fontSize, setFontSize] = useState(26);
  const [syncWeight, setSyncWeight] = useState(400);
  const [inspectionMode, setInspectionMode] = useState<'text' | 'glyphs' | 'numbers'>('text');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const fontsToLoad = selectedIds
      .map((id) => TYPEFACES.find((t) => t.id === id))
      .filter((t): t is Typeface => !!t);

    loadBatchGoogleFonts(fontsToLoad);
  }, [selectedIds]);

  const removeFont = (idToRemove: string) => {
    if (selectedIds.length <= 1) return;
    setSelectedIds(selectedIds.filter((id) => id !== idToRemove));
  };

  const addFont = (newId: string) => {
    if (selectedIds.length >= 4 || selectedIds.includes(newId)) return;
    setSelectedIds([...selectedIds, newId]);
  };

  const changeFont = (index: number, newId: string) => {
    const updated = [...selectedIds];
    updated[index] = newId;
    setSelectedIds(updated);
  };

  const activeTypefaces = selectedIds
    .map((id) => TYPEFACES.find((t) => t.id === id))
    .filter((t): t is Typeface => !!t);

  const getDisplayText = () => {
    if (inspectionMode === 'glyphs') {
      return 'Aa Bb Gg Qq Rr Kk & @ ?';
    }
    if (inspectionMode === 'numbers') {
      return '0 1 2 3 4 5 6 7 8 9 $ € £ ¥';
    }
    return sampleText;
  };

  return (
    <div className={`w-full bg-white border border-zinc-200 rounded-lg p-5 sm:p-6 space-y-6 ${isStandalonePage ? '' : 'my-8'}`}>
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-zinc-100 pb-3">
        <div>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950">
            Side-by-Side Typeface Inspector
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">
            Compare 2 to 4 typefaces simultaneously. Inspect x-height, glyph curves, and optical contrast.
          </p>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-zinc-950 rounded transition-colors self-end sm:self-auto"
            title="Close comparison"
            aria-label="Close comparison"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Synchronized Toolbar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-zinc-50 p-3.5 rounded border border-zinc-200 text-xs">
        {/* Sample text */}
        <div className="md:col-span-2 space-y-1">
          <label htmlFor="comparison-text-input" className="text-zinc-700 font-medium">Text</label>
          <input
            id="comparison-text-input"
            aria-label="Comparison sample text phrase"
            type="text"
            value={sampleText}
            onChange={(e) => setSampleText(e.target.value)}
            disabled={inspectionMode !== 'text'}
            placeholder="Type comparison phrase..."
            className="w-full px-2.5 py-1.5 bg-white border border-zinc-200 rounded text-zinc-950 focus:outline-none focus:border-zinc-950 disabled:opacity-50"
          />
        </div>

        {/* Mode pills */}
        <div className="space-y-1">
          <span className="text-zinc-700 font-medium block">Mode</span>
          <div className="grid grid-cols-3 gap-1">
            <button
              onClick={() => setInspectionMode('text')}
              className={`py-1.5 rounded transition-colors ${
                inspectionMode === 'text' ? 'bg-zinc-950 text-white font-medium' : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              Text
            </button>
            <button
              onClick={() => setInspectionMode('glyphs')}
              className={`py-1.5 rounded transition-colors ${
                inspectionMode === 'glyphs' ? 'bg-zinc-950 text-white font-medium' : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              Glyphs
            </button>
            <button
              onClick={() => setInspectionMode('numbers')}
              className={`py-1.5 rounded transition-colors ${
                inspectionMode === 'numbers' ? 'bg-zinc-950 text-white font-medium' : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              Numerals
            </button>
          </div>
        </div>

        {/* Size */}
        <div className="space-y-1">
          <div className="flex justify-between">
            <label htmlFor="comparison-size-slider" className="text-zinc-700">Size</label>
            <span className="font-mono text-zinc-950">{fontSize}px</span>
          </div>
          <input
            id="comparison-size-slider"
            aria-label="Comparison font size in pixels"
            type="range"
            min={14}
            max={72}
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full h-2 bg-zinc-200 rounded appearance-none cursor-pointer accent-zinc-950"
          />
        </div>

        {/* Weight */}
        <div className="space-y-1">
          <div className="flex justify-between">
            <label htmlFor="comparison-weight-slider" className="text-zinc-700">Weight</label>
            <span className="font-mono text-zinc-950">{syncWeight}</span>
          </div>
          <input
            id="comparison-weight-slider"
            aria-label="Comparison font weight"
            type="range"
            min={100}
            max={900}
            step={100}
            value={syncWeight}
            onChange={(e) => setSyncWeight(Number(e.target.value))}
            className="w-full h-2 bg-zinc-200 rounded appearance-none cursor-pointer accent-zinc-950"
          />
        </div>

        {/* Add column */}
        <div className="flex items-end">
          {selectedIds.length < 4 ? (
            <div className="w-full">
              <label htmlFor="add-comparison-font" className="text-zinc-500 block mb-1">Add Typeface</label>
              <select
                id="add-comparison-font"
                onChange={(e) => {
                  if (e.target.value) {
                    addFont(e.target.value);
                    e.target.value = '';
                  }
                }}
                defaultValue=""
                className="w-full px-2.5 py-1.5 bg-white border border-zinc-200 rounded text-zinc-800 focus:outline-none"
              >
                <option value="" disabled>+ Add column...</option>
                {TYPEFACES.filter((t) => !selectedIds.includes(t.id)).map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <span className="text-[11px] text-zinc-600 py-1.5">Max 4 compared.</span>
          )}
        </div>
      </div>

      {/* Comparison Columns Grid */}
      <div
        className={`grid gap-4 ${
          selectedIds.length === 2
            ? 'grid-cols-1 md:grid-cols-2'
            : selectedIds.length === 3
            ? 'grid-cols-1 md:grid-cols-3'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        }`}
      >
        {activeTypefaces.map((tf, index) => {
          const closestWeight = tf.weights.reduce((prev, curr) =>
            Math.abs(curr - syncWeight) < Math.abs(prev - syncWeight) ? curr : prev
          );

          return (
            <div
              key={tf.id}
              className="bg-white border border-zinc-200 rounded p-4 flex flex-col justify-between space-y-4"
            >
              {/* Column Top */}
              <div className="border-b border-zinc-100 pb-2">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono text-zinc-600 uppercase">
                    Column {index + 1}
                  </span>
                  {selectedIds.length > 2 && (
                    <button
                      onClick={() => removeFont(tf.id)}
                      className="p-1 text-zinc-500 hover:text-red-600 rounded"
                      title="Remove column"
                      aria-label={`Remove ${tf.name} from comparison`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <select
                  value={tf.id}
                  onChange={(e) => changeFont(index, e.target.value)}
                  className="w-full font-bold text-sm bg-zinc-50 px-2 py-1 rounded border border-zinc-200 text-zinc-950 focus:outline-none"
                  aria-label={`Select typeface for column ${index + 1}`}
                >
                  {TYPEFACES.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>

                <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-zinc-600">
                  <span className="capitalize">{tf.category}</span>
                  <span>·</span>
                  <span>{closestWeight}w</span>
                </div>
              </div>

              {/* Specimen Output */}
              <div
                className="py-3 min-h-[120px] flex items-center justify-center text-center break-words select-text text-zinc-950"
                style={{
                  fontFamily: tf.family,
                  fontSize: `${fontSize}px`,
                  fontWeight: closestWeight,
                  lineHeight: 1.35,
                  overflowWrap: 'anywhere',
                  wordBreak: 'break-word',
                }}
              >
                {getDisplayText()}
              </div>

              {/* Specs & Quick Copy */}
              <div className="pt-2 border-t border-zinc-100 text-[11px] space-y-1.5 text-zinc-600">
                <div className="flex justify-between">
                  <span>Author:</span>
                  <span className="text-zinc-700 truncate max-w-[120px]">{tf.author}</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono text-zinc-600">{tf.weights.length} weights</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={async () => {
                        const textToCopy = getDisplayText();
                        const variant = getMatchingStyleVariant(tf.category, closestWeight, tf.id);
                        const success = await copyStyledTextToClipboard(textToCopy, variant, {
                          fontFamily: tf.family,
                          fontWeight: closestWeight,
                          fontSize,
                        });
                        if (success) {
                          setCopiedId(tf.id);
                          setTimeout(() => setCopiedId(null), 1800);
                        }
                      }}
                      className={`px-2 py-0.5 text-[11px] border rounded transition-colors flex items-center gap-1 active:scale-95 ${
                        copiedId === tf.id
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                          : 'border-zinc-200 text-zinc-700 hover:border-zinc-950 hover:bg-zinc-50'
                      }`}
                      title="Copy styled font (works on social media, docs, apps)"
                    >
                      {copiedId === tf.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === tf.id ? 'Copied!' : 'Copy'}</span>
                    </button>
                    <button
                      onClick={async () => {
                        const css = `font-family: ${tf.family};\nfont-weight: ${closestWeight};\nfont-size: ${fontSize}px;`;
                        const success = await copyTextToClipboard(css);
                        if (success) {
                          setCopiedId(`css-${tf.id}`);
                          setTimeout(() => setCopiedId(null), 1500);
                        }
                      }}
                      className={`px-2 py-0.5 text-[11px] border rounded transition-colors active:scale-95 ${
                        copiedId === `css-${tf.id}`
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                          : 'border-zinc-200 text-zinc-500 hover:text-zinc-950 hover:bg-zinc-50'
                      }`}
                      title="Copy CSS rules"
                    >
                      <span>{copiedId === `css-${tf.id}` ? 'CSS Copied!' : 'CSS'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
