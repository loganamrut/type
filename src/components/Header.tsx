'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const generatorLinks = [
  { href: '/heading-font-generator', label: 'Heading Fonts' },
  { href: '/body-font-generator', label: 'Body Fonts' },
  { href: '/google-font-generator', label: 'Google Fonts' },
  { href: '/bold-font-generator', label: 'Bold Fonts' },
  { href: '/elegant-font-generator', label: 'Elegant Fonts' },
  { href: '/modern-font-generator', label: 'Modern Fonts' },
  { href: '/minimalist-font-generator', label: 'Minimalist Fonts' },
  { href: '/vintage-font-generator', label: 'Vintage Fonts' },
  { href: '/ui-font-generator', label: 'UI Fonts' },
  { href: '/poster-font-generator', label: 'Poster Fonts' },
  { href: '/font-generator-for-social-media', label: 'Social Media Fonts' },
  { href: '/font-combination-generator', label: 'Font Combinations' },
  { href: '/variable-font-generator', label: 'Variable Fonts' },
  { href: '/typeface-for-print', label: 'For Print' },
  { href: '/typeface-for-presentations', label: 'For Presentations' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [moreOpen, setMoreOpen] = useState<boolean>(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState<boolean>(false);

  const navLinks = [
    { href: '/', label: 'Generator' },
    { href: '/font-pairing-generator', label: 'Pairing' },
    { href: '/font-tester', label: 'Tester' },
    { href: '/typography-generator', label: 'Type Scale' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Minimalist Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-mono font-bold text-sm tracking-tight px-1.5 py-0.5 bg-zinc-950 text-white rounded">
            Tg
          </span>
          <span className="font-bold text-base tracking-tight text-zinc-950">
            TypefaceGen
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-sm" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-zinc-950 font-semibold border-b border-zinc-950'
                    : 'text-zinc-500 hover:text-zinc-950'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* More Generators Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className={`flex items-center gap-1 transition-colors py-1 ${
                moreOpen || generatorLinks.some(l => l.href === pathname)
                  ? 'text-zinc-950 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-950'
              }`}
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              More
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
            </button>

            {moreOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-zinc-200 rounded-lg shadow-lg py-2 z-50">
                <div className="px-3 pb-1.5 pt-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    All Generators
                  </span>
                </div>
                <div className="grid grid-cols-1">
                  {generatorLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`px-3 py-1.5 text-xs transition-colors ${
                          isActive
                            ? 'bg-zinc-50 text-zinc-950 font-semibold'
                            : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950'
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button (44×44px touch target) */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center text-zinc-700 hover:text-zinc-950 active:bg-zinc-100 rounded-md transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white px-4 py-3 space-y-1 shadow-sm animate-in fade-in slide-in-from-top-1 duration-150">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`min-h-[44px] flex items-center px-3 text-sm rounded-md transition-colors ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile Categories */}
          <div className="pt-2 border-t border-zinc-100 mt-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 px-3 block mb-1">
              Type Styles
            </span>
            <div className="grid grid-cols-2 gap-1 text-xs text-zinc-600 px-3">
              {[
                { href: '/serif-typeface-generator', label: 'Serif' },
                { href: '/sans-serif-typeface-generator', label: 'Sans-Serif' },
                { href: '/display-typeface-generator', label: 'Display' },
                { href: '/monospace-typeface-generator', label: 'Monospace' },
                { href: '/script-typeface-generator', label: 'Script' },
              ].map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 hover:text-zinc-950 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile More Generators Accordion */}
          <div className="pt-2 border-t border-zinc-100 mt-1">
            <button
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-mono uppercase tracking-wider text-zinc-400"
            >
              More Generators
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileMoreOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileMoreOpen && (
              <div className="grid grid-cols-2 gap-1 text-xs text-zinc-600 px-3 pb-2">
                {generatorLinks.map(l => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-1.5 transition-colors ${pathname === l.href ? 'text-zinc-950 font-semibold' : 'hover:text-zinc-950'}`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
