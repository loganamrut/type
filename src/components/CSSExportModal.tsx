'use client';

import React, { useState, useEffect } from 'react';
import { X, Copy, Check, ExternalLink } from 'lucide-react';
import { Typeface, TypographySettings } from '@/lib/types';
import { copyTextToClipboard } from '@/lib/styled-text';

interface CSSExportModalProps {
  typeface: Typeface | null;
  settings: TypographySettings;
  onClose: () => void;
}

export function CSSExportModal({ typeface, settings, onClose }: CSSExportModalProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!typeface) return null;

  const copyToClipboard = async (text: string, sectionKey: string) => {
    const success = await copyTextToClipboard(text);
    if (success) {
      setCopiedSection(sectionKey);
      setTimeout(() => setCopiedSection(null), 1500);
    }
  };

  const closestWeight = typeface.weights.reduce((prev, curr) =>
    Math.abs(curr - settings.fontWeight) < Math.abs(prev - settings.fontWeight) ? curr : prev
  );

  const cssSnippet = `/* CSS Declaration */
.my-typeface {
  font-family: ${typeface.family};
  font-weight: ${closestWeight};
  font-size: ${settings.fontSize}px;
  line-height: ${settings.lineHeight};
  letter-spacing: ${settings.letterSpacing}em;
  text-align: ${settings.textAlign};
  text-transform: ${settings.textTransform};
}`;

  const htmlEmbedSnippet = `<!-- HTML <head> Embed -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=${typeface.googleFontQuery}&display=swap" rel="stylesheet">`;

  const cssImportSnippet = `/* CSS @import */
@import url('https://fonts.googleapis.com/css2?family=${typeface.googleFontQuery}&display=swap');`;

  const tailwindSnippet = `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        '${typeface.id}': [${typeface.family}],
      },
    },
  },
};`;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs"
    >
      <div
        className="bg-white border border-zinc-200 text-zinc-950 rounded-lg max-w-xl w-full p-4 sm:p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto text-xs"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-zinc-100 pb-3">
          <div>
            <h2 id="modal-title" className="text-base font-bold text-zinc-950">
              CSS &amp; Implementation: {typeface.name}
            </h2>
            <p className="text-[11px] text-zinc-600 mt-0.5">
              Valid CSS, HTML &amp; Tailwind code ready to copy.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-950 rounded transition-colors active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* License */}
        <div className="bg-zinc-50 border border-zinc-200 rounded p-2.5 flex items-center justify-between text-[11px] text-zinc-600">
          <span>{typeface.license} · Free for commercial use</span>
          <a
            href={typeface.licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-950 font-medium hover:underline inline-flex items-center gap-1"
          >
            License <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* 1. CSS */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase text-zinc-600">1. CSS Rule</span>
            <button
              onClick={() => copyToClipboard(cssSnippet, 'css')}
              className="text-zinc-600 hover:text-zinc-950 flex items-center gap-1"
            >
              {copiedSection === 'css' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copiedSection === 'css' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="bg-zinc-50 p-3 rounded font-mono border border-zinc-200 overflow-x-auto text-zinc-800">
            <code>{cssSnippet}</code>
          </pre>
        </div>

        {/* 2. HTML Embed */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase text-zinc-600">2. HTML &lt;link&gt;</span>
            <button
              onClick={() => copyToClipboard(htmlEmbedSnippet, 'html')}
              className="text-zinc-600 hover:text-zinc-950 flex items-center gap-1"
            >
              {copiedSection === 'html' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copiedSection === 'html' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="bg-zinc-50 p-3 rounded font-mono border border-zinc-200 overflow-x-auto text-zinc-800">
            <code>{htmlEmbedSnippet}</code>
          </pre>
        </div>

        {/* 3. CSS @import */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase text-zinc-600">3. CSS @import</span>
            <button
              onClick={() => copyToClipboard(cssImportSnippet, 'import')}
              className="text-zinc-600 hover:text-zinc-950 flex items-center gap-1"
            >
              {copiedSection === 'import' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copiedSection === 'import' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="bg-zinc-50 p-3 rounded font-mono border border-zinc-200 overflow-x-auto text-zinc-800">
            <code>{cssImportSnippet}</code>
          </pre>
        </div>

        {/* 4. Tailwind */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase text-zinc-600">4. Tailwind CSS</span>
            <button
              onClick={() => copyToClipboard(tailwindSnippet, 'tailwind')}
              className="text-zinc-600 hover:text-zinc-950 flex items-center gap-1"
            >
              {copiedSection === 'tailwind' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copiedSection === 'tailwind' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="bg-zinc-50 p-3 rounded font-mono border border-zinc-200 overflow-x-auto text-zinc-800">
            <code>{tailwindSnippet}</code>
          </pre>
        </div>

        {/* Done */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 bg-zinc-950 text-white font-medium rounded text-xs hover:opacity-90 transition-opacity"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
