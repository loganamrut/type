'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleOpenCookies = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('open-cookie-settings'));
    }
  };

  return (
    <footer className="w-full border-t border-zinc-200 bg-white text-zinc-950 mt-auto text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-2">
            <Link href="/" className="font-bold text-sm text-zinc-950 tracking-tight">
              TypefaceGen
            </Link>
            <p className="text-zinc-500 leading-relaxed max-w-xs">
              Minimalist online typeface generator, pairing engine, and typography scale tool.
            </p>
            <p className="text-zinc-400 text-[11px]">
              Privacy-conscious typography tools.
            </p>
          </div>

          {/* Tools */}
          <div className="space-y-2">
            <h4 className="font-semibold text-zinc-950 uppercase tracking-wider text-[11px]">
              Tools
            </h4>
            <ul className="space-y-1.5 text-zinc-600">
              <li>
                <Link href="/" className="hover:text-zinc-950 transition-colors">
                  Typeface Generator
                </Link>
              </li>
              <li>
                <Link href="/font-pairing-generator" className="hover:text-zinc-950 transition-colors">
                  Font Pairing
                </Link>
              </li>
              <li>
                <Link href="/font-tester" className="hover:text-zinc-950 transition-colors">
                  Font Tester
                </Link>
              </li>
              <li>
                <Link href="/typography-generator" className="hover:text-zinc-950 transition-colors">
                  Type Scale
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-2">
            <h4 className="font-semibold text-zinc-950 uppercase tracking-wider text-[11px]">
              Styles
            </h4>
            <ul className="space-y-1.5 text-zinc-600">
              <li>
                <Link href="/serif-typeface-generator" className="hover:text-zinc-950 transition-colors">
                  Serif
                </Link>
              </li>
              <li>
                <Link href="/sans-serif-typeface-generator" className="hover:text-zinc-950 transition-colors">
                  Sans-Serif
                </Link>
              </li>
              <li>
                <Link href="/display-typeface-generator" className="hover:text-zinc-950 transition-colors">
                  Display
                </Link>
              </li>
              <li>
                <Link href="/monospace-typeface-generator" className="hover:text-zinc-950 transition-colors">
                  Monospace
                </Link>
              </li>
              <li>
                <Link href="/script-typeface-generator" className="hover:text-zinc-950 transition-colors">
                  Script
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides & Legal */}
          <div className="space-y-2">
            <h4 className="font-semibold text-zinc-950 uppercase tracking-wider text-[11px]">
              About & Legal
            </h4>
            <ul className="space-y-1.5 text-zinc-600">
              <li>
                <Link href="/typeface-for-logos" className="hover:text-zinc-950 transition-colors">
                  For Logos
                </Link>
              </li>
              <li>
                <Link href="/typeface-for-websites" className="hover:text-zinc-950 transition-colors">
                  For Websites
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-zinc-950 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-zinc-950 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-zinc-950 transition-colors">
                  Terms & Licensing
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenCookies}
                  className="hover:text-zinc-950 transition-colors text-left"
                >
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-zinc-400 text-[11px]">
          <p>&copy; {currentYear} TypefaceGen. All fonts open-source (SIL OFL 1.1 / Apache 2.0).</p>
          <p>Designed for typographers & developers.</p>
        </div>
      </div>
    </footer>
  );
}
