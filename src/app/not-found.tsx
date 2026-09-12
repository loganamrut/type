import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-20 text-center max-w-md mx-auto space-y-4">
      <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block">
        404 / Not Found
      </span>

      <h1 className="text-2xl font-bold tracking-tight text-zinc-950">
        Typeface Not Found
      </h1>

      <p className="text-xs text-zinc-500 leading-relaxed">
        The requested page or specimen could not be located.
      </p>

      <div className="pt-2 flex items-center justify-center gap-2">
        <Link
          href="/"
          className="px-3.5 py-1.5 bg-zinc-950 text-white font-medium text-xs rounded hover:opacity-90 transition-opacity"
        >
          Typeface Generator
        </Link>
        <Link
          href="/font-pairing-generator"
          className="px-3.5 py-1.5 bg-white border border-zinc-200 text-zinc-800 font-medium text-xs rounded hover:bg-zinc-50 transition-colors"
        >
          Font Pairing
        </Link>
      </div>
    </div>
  );
}
