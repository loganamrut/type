'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'What is a typeface generator?',
    answer:
      'A typeface generator is an interactive web typography tool that allows designers, developers, and writers to enter custom text and preview, test, compare, and pair typefaces in real time. Rather than relying on static images or generic character maps, a typeface generator dynamically applies font weights, sizes, line heights, and letter spacing to evaluate typographic rhythm, readability, and optical balance.',
  },
  {
    question: 'What is the difference between a typeface and a font?',
    answer:
      'In typographic terminology, a typeface (or font family) is the overarching visual design and creative identity of lettering—such as Helvetica, Garamond, or Inter. A font is the specific digital file or physical implementation of that design at a designated weight, style, and size—such as Inter Bold 14pt. In modern digital practice, people often use the terms interchangeably.',
  },
  {
    question: 'Can I use TypefaceGen for free?',
    answer:
      'Yes, TypefaceGen is 100% free. There are no paywalls, accounts, logins, or hidden subscription tiers. All typography tools—including the live text preview generator, font pairing engine, side-by-side font tester, and modular type scale calculator—are freely accessible.',
  },
  {
    question: 'How do I preview a typeface with my own custom text?',
    answer:
      'Simply click into the text input area at the top of the Typeface Generator, type or paste your desired copy, and every font specimen card updates instantly across the grid. You can also adjust font size, weight, tracking, and line height.',
  },
  {
    question: 'How do I compare two or more typefaces side-by-side?',
    answer:
      'Click the "Compare" icon on any typeface card to add it to the comparison drawer. You can select between 2 to 4 typefaces to inspect them simultaneously with synchronized custom preview text.',
  },
  {
    question: 'What is font pairing and how do I choose fonts that work well together?',
    answer:
      'Font pairing couples two or more distinct typefaces—usually one for headings and one for body text—to establish a clear visual hierarchy and balanced contrast. Best practices include pairing high-contrast serifs with neutral sans-serifs (like Playfair Display + Inter), and matching optical x-heights.',
  },
  {
    question: 'What is the difference between Serif, Sans-Serif, and Display typefaces?',
    answer:
      'Serif typefaces feature finishing feet (serifs) at the ends of letter stems, traditionally associated with book printing and editorial longevity. Sans-serif typefaces omit decorative feet, offering clean, minimalist geometries optimized for digital screens. Display typefaces are expressive, high-impact designs meant to be viewed at large headline sizes (32px and above).',
  },
  {
    question: 'Can I use these typefaces for commercial projects?',
    answer:
      'Yes, all typefaces curated in TypefaceGen are published under permissive open-source licenses—predominantly the SIL Open Font License (OFL 1.1) or the Apache License 2.0. These licenses grant rights for commercial use in websites, logos, and print.',
  },
  {
    question: 'Does TypefaceGen create downloadable raw .ttf or .otf font files from scratch?',
    answer:
      'No. TypefaceGen is an online Typeface Preview Generator and Typography Studio. It generates live visual typography previews, modular type scales, pairing harmonies, and exportable CSS/Tailwind code using authentic open-source web fonts.',
  },
  {
    question: 'Does TypefaceGen store or track the text I type into the generator?',
    answer:
      'No. TypefaceGen is built on a strict zero-tracking, privacy-first client-side architecture. All text typed into the editor stays entirely within your local browser memory.',
  },
];

export function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

  const toggleIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="w-full my-12 max-w-3xl mx-auto space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-bold tracking-tight text-zinc-950">
          Frequently Asked Questions
        </h2>
        <p className="text-xs text-zinc-500">
          Clear answers on typefaces, font pairing, licensing, and tools.
        </p>
      </div>

      <div className="divide-y divide-zinc-200 border-y border-zinc-200">
        {FAQS_DATA.map((faq, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <div key={idx} className="py-3.5">
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full text-left flex items-center justify-between gap-4 py-1 hover:text-zinc-600 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-sm text-zinc-950">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-zinc-950' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="pt-2 text-xs text-zinc-600 leading-relaxed pr-6">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
