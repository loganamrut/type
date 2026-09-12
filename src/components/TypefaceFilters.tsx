'use client';

import React from 'react';
import { Search, Star, Sparkles, X } from 'lucide-react';
import { TypefaceCategory, TypefaceUseCase } from '@/lib/types';
import { CATEGORIES_METADATA, USE_CASES_METADATA } from '@/lib/fonts-data';

interface TypefaceFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: TypefaceCategory;
  onCategoryChange: (category: TypefaceCategory) => void;
  selectedUseCase: TypefaceUseCase | 'all';
  onUseCaseChange: (useCase: TypefaceUseCase | 'all') => void;
  variableOnly: boolean;
  onVariableOnlyChange: (val: boolean) => void;
  favoritesOnly: boolean;
  onFavoritesOnlyChange: (val: boolean) => void;
  sortBy: 'popularity' | 'name' | 'category';
  onSortByChange: (sort: 'popularity' | 'name' | 'category') => void;
  totalCount: number;
  filteredCount: number;
  onResetFilters: () => void;
}

export function TypefaceFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedUseCase,
  onUseCaseChange,
  variableOnly,
  onVariableOnlyChange,
  favoritesOnly,
  onFavoritesOnlyChange,
  sortBy,
  onSortByChange,
  totalCount,
  filteredCount,
  onResetFilters,
}: TypefaceFiltersProps) {
  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'all' ||
    selectedUseCase !== 'all' ||
    variableOnly ||
    favoritesOnly;

  return (
    <div className="w-full space-y-3">
      {/* Search Input & Toggles */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search typefaces by name, author, or tag (e.g. Inter, Editorial, Code)..."
            className="w-full pl-9 pr-8 py-2 bg-white border border-zinc-200 rounded-md text-sm placeholder:text-zinc-400 text-zinc-950 focus:outline-none focus:border-zinc-950 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-950"
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Action Toggles & Sort Dropdown (Responsive wrap for mobile) */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start flex-wrap">
          <button
            onClick={() => onFavoritesOnlyChange(!favoritesOnly)}
            className={`min-h-[36px] px-3 py-1.5 rounded-md text-xs font-medium border transition-colors flex items-center gap-1.5 active:scale-95 ${
              favoritesOnly
                ? 'bg-zinc-950 text-white border-zinc-950'
                : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${favoritesOnly ? 'fill-current' : ''}`} />
            <span>Favorites</span>
          </button>

          <button
            onClick={() => onVariableOnlyChange(!variableOnly)}
            className={`min-h-[36px] px-3 py-1.5 rounded-md text-xs font-medium border transition-colors flex items-center gap-1.5 active:scale-95 ${
              variableOnly
                ? 'bg-zinc-950 text-white border-zinc-950'
                : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Variable</span>
          </button>

          <select
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value as any)}
            className="min-h-[36px] px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs text-zinc-800 focus:outline-none focus:border-zinc-950"
            aria-label="Sort typefaces"
          >
            <option value="popularity">Popular</option>
            <option value="name">Name (A-Z)</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>

      {/* Category Pills Bar (Smooth mobile touch scrolling) */}
      <div className="scroll-touch-x flex items-center gap-1.5 pb-1">
        {CATEGORIES_METADATA.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id as TypefaceCategory)}
            className={`min-h-[32px] px-3 py-1 rounded-full text-xs transition-colors whitespace-nowrap active:scale-95 ${
              selectedCategory === cat.id
                ? 'bg-zinc-950 text-white font-medium'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Use Case Bar & Result Counts */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-zinc-100 text-xs text-zinc-500">
        <div className="scroll-touch-x flex items-center gap-1 py-1 max-w-full">
          <span className="text-[11px] font-mono text-zinc-400 uppercase mr-1 shrink-0">For:</span>
          <button
            onClick={() => onUseCaseChange('all')}
            className={`min-h-[28px] px-2.5 py-0.5 rounded text-[11px] transition-colors whitespace-nowrap active:scale-95 ${
              selectedUseCase === 'all'
                ? 'bg-zinc-950 text-white font-medium'
                : 'text-zinc-500 hover:text-zinc-950'
            }`}
          >
            All
          </button>
          {USE_CASES_METADATA.map((uc) => (
            <button
              key={uc.id}
              onClick={() => onUseCaseChange(uc.id as TypefaceUseCase)}
              className={`min-h-[28px] px-2.5 py-0.5 rounded text-[11px] transition-colors whitespace-nowrap active:scale-95 ${
                selectedUseCase === uc.id
                  ? 'bg-zinc-950 text-white font-medium'
                : 'text-zinc-500 hover:text-zinc-950'
              }`}
            >
              {uc.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-zinc-400 ml-auto">
          <span>
            <strong className="text-zinc-950 font-normal">{filteredCount}</strong> of {totalCount} typefaces
          </span>
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="text-xs text-zinc-950 underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
