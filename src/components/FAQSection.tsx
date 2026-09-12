'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { FAQS_DATA, type FAQItem } from '@/lib/faqs-data';

export { FAQS_DATA, type FAQItem };

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
