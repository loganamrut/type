'use client';

import React, { useRef } from 'react';
import { Copy, Check, RotateCcw, Trash2 } from 'lucide-react';
import { copyTextToClipboard } from '@/lib/styled-text';

interface TextEditorProps {
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

const PRESET_TEXTS = [
  { label: 'Pangram', text: 'The quick brown fox jumps over the lazy dog.' },
  { label: 'Sphinx', text: 'Sphinx of black quartz, judge my vow.' },
  { label: 'Alphabet', text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz' },
  { label: 'Numerals', text: '0123456789 & $ € £ ¥ @ % # ! ?' },
  { label: 'Headline', text: 'Architectural Order in Digital Typography' },
  {
    label: 'Paragraph',
    text: 'Good typography establishes a visual hierarchy that honors the reader. By orchestrating scale, weight, and measure, text transforms into an effortless cognitive experience.',
  },
];

export function TextEditor({ value, onChange, className = '' }: TextEditorProps) {
  const [copied, setCopied] = React.useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCopy = async () => {
    const success = await copyTextToClipboard(value);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const handleClear = () => {
    onChange('');
    textareaRef.current?.focus();
  };

  const handleReset = () => {
    onChange('Your text here');
    textareaRef.current?.focus();
  };

  return (
    <div className={`w-full bg-white border border-zinc-200 rounded-lg p-4 sm:p-5 transition-all ${className}`}>
      {/* Minimal Header Toolbar */}
      <div className="flex items-center justify-between gap-2 mb-2 text-xs">
        <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-600">
          Preview Text ({value.length} chars)
        </span>

        <div className="flex items-center gap-1">
          <button
            onClick={handleCopy}
            className="px-2 py-1 text-zinc-600 hover:text-zinc-950 rounded transition-colors flex items-center gap-1"
            title="Copy text"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
          <button
            onClick={handleReset}
            className="px-2 py-1 text-zinc-600 hover:text-zinc-950 rounded transition-colors flex items-center gap-1"
            title="Reset text"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
          <button
            onClick={handleClear}
            className="px-2 py-1 text-zinc-600 hover:text-red-600 rounded transition-colors flex items-center gap-1"
            title="Clear text"
          >
            <Trash2 className="w-3 h-3" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Main Text Input */}
      <label htmlFor="typeface-input" className="sr-only">
        Type or paste custom text to preview across typefaces
      </label>
      <textarea
        id="typeface-input"
        aria-label="Type or paste custom text to preview across typefaces"
        ref={textareaRef}
        rows={2}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type or paste your text to preview across all typefaces..."
        className="w-full text-base sm:text-lg bg-zinc-50/50 border border-zinc-200 rounded-md p-3 text-zinc-950 placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:border-zinc-950 resize-y min-h-[64px] transition-colors"
      />

      {/* Minimal Preset Pills (Smooth touch scroller) */}
      <div className="mt-2.5 scroll-touch-x flex items-center gap-1.5 pb-1 text-xs text-zinc-600">
        <span className="text-[11px] font-mono text-zinc-600 mr-1 uppercase shrink-0">Sample:</span>
        {PRESET_TEXTS.map((preset) => (
          <button
            key={preset.label}
            onClick={() => onChange(preset.text)}
            className="min-h-[28px] px-2.5 py-1 rounded bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs whitespace-nowrap transition-colors active:scale-95 shrink-0"
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
}
