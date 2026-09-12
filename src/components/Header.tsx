'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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

        {/* Desktop Minimal Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Main Navigation">
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
        </nav>

        {/* Mobile Menu Button with accessible touch target (44x44px) */}
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

          <div className="pt-3 border-t border-zinc-100 mt-2 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 px-3">
              Categories
            </span>
            <div className="grid grid-cols-2 gap-1 text-xs text-zinc-600 px-3 pt-1">
              <Link
                href="/serif-typeface-generator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950"
              >
                Serif
              </Link>
              <Link
                href="/sans-serif-typeface-generator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950"
              >
                Sans-Serif
              </Link>
              <Link
                href="/display-typeface-generator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950"
              >
                Display
              </Link>
              <Link
                href="/monospace-typeface-generator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950"
              >
                Monospace
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
