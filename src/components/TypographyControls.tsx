'use client';

import React, { useState } from 'react';
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Maximize2,
  Smartphone,
  Tablet,
  Monitor,
  RotateCcw,
  SlidersHorizontal,
  ChevronDown,
} from 'lucide-react';
import { TypographySettings } from '@/lib/types';

interface TypographyControlsProps {
  settings: TypographySettings;
  onChange: (updated: Partial<TypographySettings>) => void;
  onReset: () => void;
  defaultExpanded?: boolean;
}

const FONT_SIZE_PRESETS = [14, 16, 20, 24, 32, 48, 64, 96];

export function TypographyControls({
  settings,
  onChange,
  onReset,
  defaultExpanded = false,
}: TypographyControlsProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="w-full bg-white border border-zinc-200 rounded-lg transition-all shadow-2xs">
      {/* Accordion Toggle Header Bar - Default Hidden/Collapsed */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-between p-3 sm:px-4 cursor-pointer select-none transition-colors hover:bg-zinc-50/50 ${
          isExpanded ? 'border-b border-zinc-100' : ''
        }`}
      >
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="w-6 h-6 rounded flex items-center justify-center bg-zinc-100 text-zinc-700 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-950">
            Typography Controls
          </span>
          <span className="text-[11px] font-mono text-zinc-600 hidden sm:inline">
            ({settings.fontSize}px · {settings.fontWeight}w · {settings.lineHeight.toFixed(2)}lh)
          </span>
        </div>

        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          {isExpanded && (
            <button
              onClick={onReset}
              className="text-xs text-zinc-600 hover:text-zinc-950 flex items-center gap-1 transition-colors px-2 py-1"
              title="Reset typography settings"
            >
              <RotateCcw className="w-3 h-3" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="min-h-[30px] px-2.5 py-1 text-xs font-medium border border-zinc-200 rounded text-zinc-700 hover:text-zinc-950 hover:border-zinc-950 bg-white transition-colors flex items-center gap-1.5 active:scale-95"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isExpanded ? 'rotate-180 text-zinc-950' : 'text-zinc-500'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Controls Body (Only shown when expanded, hidden by default) */}
      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-4 animate-in fade-in duration-150">
          {/* Sliders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Font Size */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <label htmlFor="size-slider" className="text-zinc-500 font-medium">Size</label>
            <span className="font-mono text-zinc-950">{settings.fontSize}px</span>
          </div>
          <input
            id="size-slider"
            type="range"
            min={12}
            max={96}
            step={1}
            value={settings.fontSize}
            onChange={(e) => onChange({ fontSize: Number(e.target.value) })}
            className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-950"
          />
          <div className="scroll-touch-x flex items-center gap-1 pt-1">
            {FONT_SIZE_PRESETS.map((sz) => (
              <button
                key={sz}
                onClick={() => onChange({ fontSize: sz })}
                className={`min-w-[28px] min-h-[26px] flex items-center justify-center text-[11px] px-1.5 py-0.5 rounded font-mono transition-colors active:scale-95 shrink-0 ${
                  settings.fontSize === sz
                    ? 'bg-zinc-950 text-white font-bold'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Font Weight */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <label htmlFor="weight-slider" className="text-zinc-500 font-medium">Weight</label>
            <span className="font-mono text-zinc-950">{settings.fontWeight}</span>
          </div>
          <input
            id="weight-slider"
            type="range"
            min={100}
            max={900}
            step={100}
            value={settings.fontWeight}
            onChange={(e) => onChange({ fontWeight: Number(e.target.value) })}
            className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-950"
          />
          <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
            <span>100 Thin</span>
            <span>400 Regular</span>
            <span>900 Black</span>
          </div>
        </div>

        {/* Line Height */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <label htmlFor="lineheight-slider" className="text-zinc-600 font-medium">Line Height</label>
            <span className="font-mono text-zinc-950">{settings.lineHeight.toFixed(2)}</span>
          </div>
          <input
            id="lineheight-slider"
            type="range"
            min={1.0}
            max={2.4}
            step={0.05}
            value={settings.lineHeight}
            onChange={(e) => onChange({ lineHeight: Number(e.target.value) })}
            className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-950"
          />
          <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
            <span>1.0 Tight</span>
            <span>1.5 Standard</span>
            <span>2.4 Loose</span>
          </div>
        </div>

        {/* Letter Spacing */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <label htmlFor="letterspacing-slider" className="text-zinc-600 font-medium">Tracking</label>
            <span className="font-mono text-zinc-950">
              {settings.letterSpacing > 0 ? `+${settings.letterSpacing.toFixed(2)}` : settings.letterSpacing.toFixed(2)}em
            </span>
          </div>
          <input
            id="letterspacing-slider"
            type="range"
            min={-0.05}
            max={0.3}
            step={0.01}
            value={settings.letterSpacing}
            onChange={(e) => onChange({ letterSpacing: Number(e.target.value) })}
            className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-950"
          />
          <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
            <span>-0.05</span>
            <span>0.00</span>
            <span>+0.30</span>
          </div>
        </div>
      </div>

      {/* Secondary Bar: Alignment, Case, Canvas Background, Viewport Width */}
      <div className="pt-3 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Alignment */}
        <div className="flex items-center gap-1">
          <span className="text-zinc-600 mr-1 hidden sm:inline text-[11px] uppercase">Align:</span>
          <button
            onClick={() => onChange({ textAlign: 'left' })}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors active:scale-95 ${
              settings.textAlign === 'left' ? 'bg-zinc-950 text-white' : 'text-zinc-600 hover:bg-zinc-100'
            }`}
            title="Align Left"
          >
            <AlignLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onChange({ textAlign: 'center' })}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors active:scale-95 ${
              settings.textAlign === 'center' ? 'bg-zinc-950 text-white' : 'text-zinc-600 hover:bg-zinc-100'
            }`}
            title="Align Center"
          >
            <AlignCenter className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onChange({ textAlign: 'right' })}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors active:scale-95 ${
              settings.textAlign === 'right' ? 'bg-zinc-950 text-white' : 'text-zinc-600 hover:bg-zinc-100'
            }`}
            title="Align Right"
          >
            <AlignRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onChange({ textAlign: 'justify' })}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors active:scale-95 ${
              settings.textAlign === 'justify' ? 'bg-zinc-950 text-white' : 'text-zinc-600 hover:bg-zinc-100'
            }`}
            title="Justify"
          >
            <AlignJustify className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Text Transform */}
        <div className="flex items-center gap-1">
          <span className="text-zinc-600 mr-1 hidden sm:inline text-[11px] uppercase">Case:</span>
          <button
            onClick={() => onChange({ textTransform: 'none' })}
            className={`h-8 px-2.5 rounded text-xs transition-colors flex items-center justify-center active:scale-95 ${
              settings.textTransform === 'none' ? 'bg-zinc-950 text-white font-medium' : 'text-zinc-600 hover:bg-zinc-100'
            }`}
          >
            Aa
          </button>
          <button
            onClick={() => onChange({ textTransform: 'uppercase' })}
            className={`h-8 px-2.5 rounded text-xs transition-colors flex items-center justify-center active:scale-95 ${
              settings.textTransform === 'uppercase' ? 'bg-zinc-950 text-white font-medium' : 'text-zinc-600 hover:bg-zinc-100'
            }`}
          >
            AA
          </button>
          <button
            onClick={() => onChange({ textTransform: 'lowercase' })}
            className={`h-8 px-2.5 rounded text-xs transition-colors flex items-center justify-center active:scale-95 ${
              settings.textTransform === 'lowercase' ? 'bg-zinc-950 text-white font-medium' : 'text-zinc-600 hover:bg-zinc-100'
            }`}
          >
            aa
          </button>
        </div>

        {/* Canvas Background (All White/Light Minimal Tones) */}
        <div className="flex items-center gap-1.5">
          <span className="text-zinc-600 mr-1 hidden sm:inline text-[11px] uppercase">Canvas:</span>
          <button
            onClick={() => onChange({ previewTheme: 'light' })}
            className={`w-6 h-6 rounded-full border border-zinc-300 transition-all active:scale-95 ${
              settings.previewTheme === 'light' ? 'ring-2 ring-zinc-950 ring-offset-1 scale-105' : ''
            }`}
            style={{ backgroundColor: '#ffffff' }}
            title="Pure White"
          />
          <button
            onClick={() => onChange({ previewTheme: 'dark' })}
            className={`w-6 h-6 rounded-full border border-zinc-300 transition-all active:scale-95 ${
              settings.previewTheme === 'dark' ? 'ring-2 ring-zinc-950 ring-offset-1 scale-105' : ''
            }`}
            style={{ backgroundColor: '#f9fafb' }}
            title="Clean Off-White"
          />
          <button
            onClick={() => onChange({ previewTheme: 'sepia' })}
            className={`w-6 h-6 rounded-full border border-zinc-300 transition-all active:scale-95 ${
              settings.previewTheme === 'sepia' ? 'ring-2 ring-zinc-950 ring-offset-1 scale-105' : ''
            }`}
            style={{ backgroundColor: '#f5f5f4' }}
            title="Warm Paper"
          />
          <button
            onClick={() => onChange({ previewTheme: 'contrast' })}
            className={`w-6 h-6 rounded-full border border-zinc-300 transition-all active:scale-95 ${
              settings.previewTheme === 'contrast' ? 'ring-2 ring-zinc-950 ring-offset-1 scale-105' : ''
            }`}
            style={{ backgroundColor: '#eeeeee' }}
            title="Neutral Slate"
          />
        </div>

        {/* Viewport Width */}
        <div className="flex items-center gap-1">
          <span className="text-zinc-600 mr-1 hidden sm:inline text-[11px] uppercase">Width:</span>
          <button
            onClick={() => onChange({ previewWidth: 'full' })}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors active:scale-95 ${
              settings.previewWidth === 'full' ? 'bg-zinc-950 text-white' : 'text-zinc-600 hover:bg-zinc-100'
            }`}
            title="Full Width"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onChange({ previewWidth: 'desktop' })}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors active:scale-95 ${
              settings.previewWidth === 'desktop' ? 'bg-zinc-950 text-white' : 'text-zinc-600 hover:bg-zinc-100'
            }`}
            title="Desktop"
          >
            <Monitor className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onChange({ previewWidth: 'tablet' })}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors active:scale-95 ${
              settings.previewWidth === 'tablet' ? 'bg-zinc-950 text-white' : 'text-zinc-600 hover:bg-zinc-100'
            }`}
            title="Tablet"
          >
            <Tablet className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onChange({ previewWidth: 'mobile' })}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors active:scale-95 ${
              settings.previewWidth === 'mobile' ? 'bg-zinc-950 text-white' : 'text-zinc-600 hover:bg-zinc-100'
            }`}
            title="Mobile"
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
