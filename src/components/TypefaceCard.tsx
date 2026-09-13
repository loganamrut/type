'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Heart, Code2, Copy, Check, SlidersHorizontal } from 'lucide-react';
import { Typeface, TypographySettings } from '@/lib/types';
import { loadGoogleFont } from '@/lib/font-loader';
import { getMatchingStyleVariant, copyStyledTextToClipboard, copyTextToClipboard } from '@/lib/styled-text';

interface TypefaceCardProps {
  typeface: Typeface;
  settings: TypographySettings;
  isFavorite: boolean;
  isInCompare: boolean;
  onToggleFavorite: (id: string) => void;
  onToggleCompare: (id: string) => void;
  onOpenCSS: (typeface: Typeface) => void;
}

export function TypefaceCard({
  typeface,
  settings,
  isFavorite,
  isInCompare,
  onToggleFavorite,
  onToggleCompare,
  onOpenCSS,
}: TypefaceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadGoogleFont(typeface.googleFontQuery, typeface.id);
            setFontLoaded(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '80px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [typeface.googleFontQuery, typeface.id]);

  const closestWeight = typeface.weights.reduce((prev, curr) =>
    Math.abs(curr - settings.fontWeight) < Math.abs(prev - settings.fontWeight) ? curr : prev
  );

  const handleCopyCSS = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const cssString = `font-family: ${typeface.family};
font-weight: ${closestWeight};
font-size: ${settings.fontSize}px;
line-height: ${settings.lineHeight};
letter-spacing: ${settings.letterSpacing}em;`;

    const success = await copyTextToClipboard(cssString);
    if (success) {
      setCopiedCSS(true);
      setTimeout(() => setCopiedCSS(false), 1500);
    }
  };

  const handleCopyText = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const textToCopy = settings.text || 'Your text here';
    const variant = getMatchingStyleVariant(typeface.category, closestWeight, typeface.id);

    const success = await copyStyledTextToClipboard(textToCopy, variant, {
      fontFamily: typeface.family,
      fontWeight: closestWeight,
      fontSize: settings.fontSize,
      lineHeight: settings.lineHeight,
    });
    if (success) {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 1800);
    }
  };

  // Minimal Canvas Theme styling (all pure white/light minimal backgrounds)
  const canvasBgStyle = {
    light: '#ffffff',
    dark: '#f9fafb',
    sepia: '#f5f5f4',
    contrast: '#eeeeee',
  }[settings.previewTheme] || '#ffffff';

  return (
    <article
      ref={cardRef}
      style={{ backgroundColor: canvasBgStyle }}
      className="group rounded-lg border border-zinc-200 p-4 sm:p-5 transition-colors hover:border-zinc-400 flex flex-col justify-between"
    >
      {/* Header: Name, Badges, Actions (Fully responsive flex-wrap) */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3 border-b border-zinc-100 pb-2.5">
        <div className="min-w-0 flex-1 space-y-0.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="font-bold text-sm tracking-tight text-zinc-950 truncate max-w-full">
              {typeface.name}
            </h3>
            {typeface.isVariable && (
              <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-zinc-100 text-zinc-700 shrink-0">
                var
              </span>
            )}
            <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-zinc-100 text-zinc-700 capitalize shrink-0">
              {typeface.category}
            </span>
          </div>
          <p className="text-[11px] text-zinc-600 truncate">
            {typeface.author} · {typeface.weights.length} weights
          </p>
        </div>

        {/* Action buttons & Prominent Copy Button with mobile-friendly touch targets */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Prominent Copy Text button */}
          <button
            onClick={handleCopyText}
            className={`h-7 px-2.5 rounded text-xs font-medium border transition-colors flex items-center gap-1 active:scale-95 ${
              copiedText
                ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                : 'bg-white border-zinc-200 text-zinc-700 hover:border-zinc-950 hover:bg-zinc-50'
            }`}
            title="Copy styled font text to paste anywhere (social media, docs, bios)"
          >
            {copiedText ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>{copiedText ? 'Copied!' : 'Copy'}</span>
          </button>

          {/* Favorite */}
          <button
            onClick={() => onToggleFavorite(typeface.id)}
            className={`w-7 h-7 flex items-center justify-center rounded border border-transparent transition-colors ${
              isFavorite ? 'text-rose-500 fill-rose-500' : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
            }`}
            title="Favorite"
            aria-label="Favorite"
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          {/* Compare */}
          <button
            onClick={() => onToggleCompare(typeface.id)}
            className={`w-7 h-7 flex items-center justify-center rounded border text-xs transition-colors ${
              isInCompare ? 'bg-zinc-950 text-white border-zinc-950' : 'border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
            }`}
            title="Compare side-by-side"
            aria-label="Compare"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>

          {/* Get CSS Modal */}
          <button
            onClick={() => onOpenCSS(typeface)}
            className="w-7 h-7 flex items-center justify-center rounded border border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 transition-colors"
            title="Get CSS & embed code"
            aria-label="Get CSS"
          >
            <Code2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Preview Body with unbreakable overflow protection */}
      <div
        className="typeface-preview-box my-auto py-2 w-full select-text text-zinc-950 break-words"
        style={{
          fontFamily: fontLoaded ? typeface.family : typeface.fallback,
          fontSize: `${settings.fontSize}px`,
          fontWeight: closestWeight,
          lineHeight: settings.lineHeight,
          letterSpacing: `${settings.letterSpacing}em`,
          textAlign: settings.textAlign,
          textTransform: settings.textTransform,
          overflowWrap: 'anywhere',
          wordBreak: 'break-word',
        }}
      >
        {settings.text || 'Your text here'}
      </div>

      {/* Footer toolbar: Copy CSS button, Copy text, and link */}
      <div className="pt-3 mt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-600">
        <div className="flex items-center gap-2">
          {/* Copy CSS Button */}
          <button
            onClick={handleCopyCSS}
            className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors flex items-center gap-1 ${
              copiedCSS
                ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-zinc-100'
            }`}
            title="Copy CSS rules"
          >
            {copiedCSS ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>{copiedCSS ? 'CSS Copied!' : 'Copy CSS'}</span>
          </button>

          <Link
            href={`/font-tester?font=${typeface.id}`}
            className="text-[11px] text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Specimen &rarr;
          </Link>
        </div>

        <span className="font-mono text-[11px] text-zinc-600">
          {closestWeight}w
        </span>
      </div>
    </article>
  );
}
