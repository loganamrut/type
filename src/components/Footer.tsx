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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-2">
            <Link href="/" className="font-bold text-sm text-zinc-950 tracking-tight">
              TypefaceGen
            </Link>
            <p className="text-zinc-600 leading-relaxed max-w-xs">
              Minimalist online typeface generator, pairing engine, and typography scale tool.
            </p>
            <p className="text-zinc-500 text-[11px]">
              Privacy-conscious typography tools.
            </p>
          </div>

          {/* Core Tools */}
          <div className="space-y-2">
            <h3 className="font-semibold text-zinc-950 uppercase tracking-wider text-[11px]">
              Tools
            </h3>
            <ul className="space-y-0.5 text-zinc-600">
              <li><Link href="/" className="block py-1.5 hover:text-zinc-950 transition-colors">Typeface Generator</Link></li>
              <li><Link href="/font-pairing-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Font Pairing</Link></li>
              <li><Link href="/font-combination-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Font Combinations</Link></li>
              <li><Link href="/font-tester/" className="block py-1.5 hover:text-zinc-950 transition-colors">Font Tester</Link></li>
              <li><Link href="/typography-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Type Scale</Link></li>
              <li><Link href="/variable-font-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Variable Fonts</Link></li>
            </ul>
          </div>

          {/* Font Styles */}
          <div className="space-y-2">
            <h3 className="font-semibold text-zinc-950 uppercase tracking-wider text-[11px]">
              By Style
            </h3>
            <ul className="space-y-0.5 text-zinc-600">
              <li><Link href="/serif-typeface-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Serif</Link></li>
              <li><Link href="/sans-serif-typeface-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Sans-Serif</Link></li>
              <li><Link href="/display-typeface-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Display</Link></li>
              <li><Link href="/monospace-typeface-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Monospace</Link></li>
              <li><Link href="/script-typeface-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Script</Link></li>
              <li><Link href="/vintage-font-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Vintage</Link></li>
              <li><Link href="/modern-font-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Modern</Link></li>
            </ul>
          </div>

          {/* By Use Case */}
          <div className="space-y-2">
            <h3 className="font-semibold text-zinc-950 uppercase tracking-wider text-[11px]">
              By Use
            </h3>
            <ul className="space-y-0.5 text-zinc-600">
              <li><Link href="/heading-font-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Heading Fonts</Link></li>
              <li><Link href="/body-font-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Body Text Fonts</Link></li>
              <li><Link href="/google-font-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Google Fonts</Link></li>
              <li><Link href="/ui-font-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">UI Fonts</Link></li>
              <li><Link href="/bold-font-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Bold Fonts</Link></li>
              <li><Link href="/elegant-font-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Elegant Fonts</Link></li>
              <li><Link href="/minimalist-font-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Minimalist Fonts</Link></li>
              <li><Link href="/poster-font-generator/" className="block py-1.5 hover:text-zinc-950 transition-colors">Poster Fonts</Link></li>
              <li><Link href="/font-generator-for-social-media/" className="block py-1.5 hover:text-zinc-950 transition-colors">Social Media</Link></li>
              <li><Link href="/typeface-for-logos/" className="block py-1.5 hover:text-zinc-950 transition-colors">For Logos</Link></li>
              <li><Link href="/typeface-for-websites/" className="block py-1.5 hover:text-zinc-950 transition-colors">For Websites</Link></li>
              <li><Link href="/typeface-for-print/" className="block py-1.5 hover:text-zinc-950 transition-colors">For Print</Link></li>
              <li><Link href="/typeface-for-presentations/" className="block py-1.5 hover:text-zinc-950 transition-colors">Presentations</Link></li>
            </ul>
          </div>

          {/* About & Legal */}
          <div className="space-y-2">
            <h3 className="font-semibold text-zinc-950 uppercase tracking-wider text-[11px]">
              About & Legal
            </h3>
            <ul className="space-y-0.5 text-zinc-600">
              <li><Link href="/about/" className="block py-1.5 hover:text-zinc-950 transition-colors">About</Link></li>
              <li><Link href="/privacy/" className="block py-1.5 hover:text-zinc-950 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="block py-1.5 hover:text-zinc-950 transition-colors">Terms & Licensing</Link></li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenCookies}
                  className="block py-1.5 hover:text-zinc-950 transition-colors text-left w-full"
                >
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-zinc-600 text-[11px]">
          <p>&copy; {currentYear} TypefaceGen. All fonts open-source (SIL OFL 1.1 / Apache 2.0).</p>
          <p>Designed for typographers &amp; developers.</p>
        </div>
      </div>
    </footer>
  );
}
