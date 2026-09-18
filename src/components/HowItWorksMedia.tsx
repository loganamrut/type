'use client';

import React, { useState } from 'react';
import { Play, Image as ImageIcon, Sparkles } from 'lucide-react';

export function HowItWorksMedia() {
  const [activeMedia, setActiveMedia] = useState<'video' | 'infographic'>('video');

  return (
    <div className="space-y-4">
      {/* Media Type Toggle Controls */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center p-1 bg-zinc-100 rounded-lg border border-zinc-200 text-xs">
          <button
            type="button"
            onClick={() => setActiveMedia('video')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md transition-all ${
              activeMedia === 'video'
                ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                : 'text-zinc-600 hover:text-zinc-950'
            }`}
            aria-pressed={activeMedia === 'video'}
          >
            <Play className="w-3.5 h-3.5 fill-current text-emerald-600" />
            Video Walkthrough (0:20)
          </button>
          <button
            type="button"
            onClick={() => setActiveMedia('infographic')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md transition-all ${
              activeMedia === 'infographic'
                ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                : 'text-zinc-600 hover:text-zinc-950'
            }`}
            aria-pressed={activeMedia === 'infographic'}
          >
            <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
            Infographic Diagram
          </button>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Universal MP4 / WebM • Closed Captions • 0ms Delay</span>
        </div>
      </div>

      {/* 1. Video Walkthrough Player (Accessible, Universal HTML5) */}
      <div className={activeMedia === 'video' ? 'block' : 'hidden'}>
        <figure id="how-it-works-video" className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 shadow-sm">
          <div className="relative aspect-video w-full bg-black">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/how-typeface-generator-works.png"
              width={1200}
              height={676}
              className="w-full h-full object-contain"
              aria-label="How the Online Typeface Generator Works Video Walkthrough"
            >
              <source src="/videos/how-typeface-generator-works.mp4" type="video/mp4" />
              <source src="/videos/how-typeface-generator-works.webm" type="video/webm" />
              <track
                kind="captions"
                src="/videos/how-typeface-generator-works.vtt"
                srcLang="en"
                label="English Captions"
                default
              />
              Your browser does not support HTML5 video.
            </video>
          </div>
          <figcaption className="p-3 bg-white border-t border-zinc-200 text-center text-xs text-zinc-600 font-medium">
            Video: Step-by-step walkthrough demonstrating how to test custom copy, compare 200+ typefaces, adjust typography metrics, and export production CSS.
          </figcaption>
        </figure>
      </div>

      {/* 2. Wide Infographic Graphic (Semantic HTML5 Picture) */}
      <div className={activeMedia === 'infographic' ? 'block' : 'hidden'}>
        <figure className="overflow-hidden rounded-xl border border-zinc-200 bg-white p-2 sm:p-4 shadow-sm">
          <picture>
            <source srcSet="/images/how-typeface-generator-works.webp" type="image/webp" />
            <source srcSet="/images/how-typeface-generator-works.png" type="image/png" />
            <img
              src="/images/how-typeface-generator-works.png"
              alt="How Typeface Generator Works - Step-by-step workflow to preview, compare, customize typography metrics, and export web fonts online"
              width={1200}
              height={675}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-lg"
            />
          </picture>
          <figcaption className="mt-3 text-center text-xs text-zinc-500 font-medium">
            Figure 1: Visual breakdown of the TypefaceGen workflow—live text synchronization, typeface filtering, typographic metric tuning, and CSS export.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
