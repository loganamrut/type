'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, Shield, Check, X, ChevronDown, ChevronUp } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [consentStatus, setConsentStatus] = useState<'granted' | 'denied' | null>(null);

  useEffect(() => {
    // Check existing stored consent
    try {
      const stored = localStorage.getItem('typefacegen_consent');
      if (stored === 'granted' || stored === 'denied') {
        setConsentStatus(stored as 'granted' | 'denied');
        setIsVisible(false);
      } else {
        // Show banner after brief delay for optimal UX
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      setIsVisible(true);
    }

    // Global event listener to reopen cookie settings anytime from footer
    const handleOpenSettings = () => {
      setIsVisible(true);
      setShowDetails(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const updateConsent = (status: 'granted' | 'denied') => {
    try {
      localStorage.setItem('typefacegen_consent', status);
    } catch (e) {}

    setConsentStatus(status);
    setIsVisible(false);

    // Update Google Consent Mode v2
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        analytics_storage: status,
      });

      if (status === 'granted') {
        (window as any).gtag('event', 'cookie_consent_granted', {
          event_category: 'Privacy',
          event_label: 'User Accepted Analytics Cookies',
        });
      }
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie and Privacy Preferences"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-white border border-zinc-200 rounded-xl shadow-2xl p-4 sm:p-5 text-zinc-950 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded bg-zinc-100 text-zinc-900">
              <Cookie className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-xs sm:text-sm tracking-tight text-zinc-950">
              Cookie &amp; Privacy Preferences
            </h3>
          </div>
          {consentStatus && (
            <button
              onClick={() => setIsVisible(false)}
              className="text-zinc-400 hover:text-zinc-700 p-1 rounded transition-colors"
              aria-label="Close cookie settings"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Description */}
        <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed">
          TypefaceGen uses essential local storage for your UI preferences and anonymous Google Analytics (GA4)
          to measure performance. Your custom typed copy remains 100% private in your browser memory.
        </p>

        {/* Collapsible Cookie Breakdown */}
        {showDetails && (
          <div className="pt-2 border-t border-zinc-100 space-y-2 text-[11px] text-zinc-600">
            <div className="p-2.5 rounded bg-zinc-50 border border-zinc-100 space-y-1">
              <div className="flex items-center justify-between font-medium text-zinc-950">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-emerald-600" />
                  Strictly Necessary (Local Storage)
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">Always Active</span>
              </div>
              <p className="text-zinc-500 text-[10px]">
                Stores your bookmarked favorites, side-by-side comparison queue, and editor controls.
              </p>
            </div>

            <div className="p-2.5 rounded bg-zinc-50 border border-zinc-100 space-y-1">
              <div className="flex items-center justify-between font-medium text-zinc-950">
                <span>Performance &amp; Analytics (GA4)</span>
                <span className="text-[10px] text-zinc-500 font-mono">Optional</span>
              </div>
              <p className="text-zinc-500 text-[10px]">
                Anonymous visitor counts and pageview timings with IP anonymization (Measurement ID: G-HT87NWEHNT).
              </p>
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="pt-1 flex flex-wrap items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="text-[11px] text-zinc-500 hover:text-zinc-950 flex items-center gap-1 transition-colors font-medium underline underline-offset-2"
          >
            {showDetails ? (
              <>
                Less details <ChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                Cookie details <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => updateConsent('denied')}
              className="px-3 py-1.5 rounded text-xs font-medium text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 transition-colors"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={() => updateConsent('granted')}
              className="px-3.5 py-1.5 rounded text-xs font-medium text-white bg-zinc-950 hover:bg-zinc-800 transition-colors shadow-sm"
            >
              Accept All
            </button>
          </div>
        </div>

        {/* Privacy Policy Link */}
        <div className="text-[10px] text-zinc-400 text-center">
          Read our{' '}
          <Link href="/privacy" className="underline hover:text-zinc-700">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/terms" className="underline hover:text-zinc-700">
            Terms of Service
          </Link>
          .
        </div>
      </div>
    </aside>
  );
}
