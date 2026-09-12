'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { SlidersHorizontal, Shuffle, Grid, List } from 'lucide-react';
import { Typeface, TypefaceCategory, TypefaceUseCase, TypographySettings } from '@/lib/types';
import { TYPEFACES } from '@/lib/fonts-data';
import { TextEditor } from './TextEditor';
import { TypographyControls } from './TypographyControls';
import { TypefaceFilters } from './TypefaceFilters';
import { TypefaceCard } from './TypefaceCard';
import { TypefaceComparison } from './TypefaceComparison';
import { CSSExportModal } from './CSSExportModal';
import { safeStorage, STORAGE_KEYS } from '@/lib/storage';

interface TypefaceGeneratorProps {
  initialCategory?: TypefaceCategory;
  initialUseCase?: TypefaceUseCase | 'all';
  hideHeroTitle?: boolean;
}

const DEFAULT_TYPOGRAPHY_SETTINGS: TypographySettings = {
  text: 'The quick brown fox jumps over the lazy dog.',
  fontSize: 24,
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: 0,
  textAlign: 'left',
  textTransform: 'none',
  previewTheme: 'light',
  previewWidth: 'full',
};

export function TypefaceGenerator({
  initialCategory = 'all',
  initialUseCase = 'all',
  hideHeroTitle = false,
}: TypefaceGeneratorProps) {
  const [settings, setSettings] = useState<TypographySettings>(DEFAULT_TYPOGRAPHY_SETTINGS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TypefaceCategory>(initialCategory);
  const [selectedUseCase, setSelectedUseCase] = useState<TypefaceUseCase | 'all'>(initialUseCase);
  const [variableOnly, setVariableOnly] = useState(false);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'popularity' | 'name' | 'category'>('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Favorites & Compare State
  const [favorites, setFavorites] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showComparisonDrawer, setShowComparisonDrawer] = useState(false);
  const [activeCSSModalTypeface, setActiveCSSModalTypeface] = useState<Typeface | null>(null);

  // Pagination limit
  const [displayLimit, setDisplayLimit] = useState(36);

  useEffect(() => {
    const savedFavs = safeStorage.getItem<string[]>(STORAGE_KEYS.FAVORITES, []);
    setFavorites(savedFavs);
    const savedCompare = safeStorage.getItem<string[]>(STORAGE_KEYS.COMPARE_LIST, []);
    setCompareList(savedCompare);
  }, []);

  const handleToggleFavorite = (id: string) => {
    let next: string[];
    if (favorites.includes(id)) {
      next = favorites.filter((f) => f !== id);
    } else {
      next = [...favorites, id];
    }
    setFavorites(next);
    safeStorage.setItem(STORAGE_KEYS.FAVORITES, next);
  };

  const handleToggleCompare = (id: string) => {
    let next: string[];
    if (compareList.includes(id)) {
      next = compareList.filter((c) => c !== id);
    } else {
      if (compareList.length >= 4) {
        // Smoothly cycle out the oldest comparison font
        next = [...compareList.slice(1), id];
      } else {
        next = [...compareList, id];
      }
      setShowComparisonDrawer(true);
    }
    setCompareList(next);
    safeStorage.setItem(STORAGE_KEYS.COMPARE_LIST, next);
  };

  const handleUpdateSettings = (updated: Partial<TypographySettings>) => {
    setSettings((prev) => ({ ...prev, ...updated }));
  };

  const handleResetSettings = () => {
    setSettings(DEFAULT_TYPOGRAPHY_SETTINGS);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedUseCase('all');
    setVariableOnly(false);
    setFavoritesOnly(false);
    setSortBy('popularity');
  };

  const handleRandomTypeface = () => {
    const randomItem = TYPEFACES[Math.floor(Math.random() * TYPEFACES.length)];
    setSearchQuery(randomItem.name);
  };

  const filteredTypefaces = useMemo(() => {
    return TYPEFACES.filter((tf) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = tf.name.toLowerCase().includes(q);
        const matchAuthor = tf.author.toLowerCase().includes(q);
        const matchCategory = tf.category.toLowerCase().includes(q);
        const matchTags = tf.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchName && !matchAuthor && !matchCategory && !matchTags) {
          return false;
        }
      }

      if (selectedCategory !== 'all') {
        const isScriptMatch = selectedCategory === 'script' && (tf.category === 'script' || tf.category === 'handwriting');
        if (!isScriptMatch && tf.category !== selectedCategory) {
          return false;
        }
      }

      if (selectedUseCase !== 'all' && !tf.useCases.includes(selectedUseCase)) {
        return false;
      }

      if (variableOnly && !tf.isVariable) {
        return false;
      }

      if (favoritesOnly && !favorites.includes(tf.id)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      return b.popularity - a.popularity;
    });
  }, [searchQuery, selectedCategory, selectedUseCase, variableOnly, favoritesOnly, favorites, sortBy]);

  const displayedTypefaces = filteredTypefaces.slice(0, displayLimit);

  const previewWidthClass = {
    full: 'w-full',
    desktop: 'max-w-[1100px] mx-auto',
    tablet: 'max-w-[768px] mx-auto',
    mobile: 'max-w-[390px] mx-auto',
  }[settings.previewWidth];

  return (
    <section className="w-full space-y-6">
      {/* Above the fold Primary Hero */}
      {!hideHeroTitle && (
        <div className="text-center max-w-2xl mx-auto pt-4 pb-2 space-y-2">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Typeface Generator
          </h1>
          <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
            Explore, preview and compare typefaces instantly. Enter your text and see how it looks
            across different typography styles.
          </p>
        </div>
      )}

      {/* Main Text Editor */}
      <TextEditor
        value={settings.text}
        onChange={(text) => handleUpdateSettings({ text })}
      />

      {/* Global Typography Controls */}
      <TypographyControls
        settings={settings}
        onChange={handleUpdateSettings}
        onReset={handleResetSettings}
      />

      {/* Search & Filters */}
      <TypefaceFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedUseCase={selectedUseCase}
        onUseCaseChange={setSelectedUseCase}
        variableOnly={variableOnly}
        onVariableOnlyChange={setVariableOnly}
        favoritesOnly={favoritesOnly}
        onFavoritesOnlyChange={setFavoritesOnly}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        totalCount={TYPEFACES.length}
        filteredCount={filteredTypefaces.length}
        onResetFilters={handleResetFilters}
      />

      {/* View Mode & Compare bar */}
      <div className="flex items-center justify-between pt-1 border-b border-zinc-100 pb-2 text-xs">
        <button
          onClick={handleRandomTypeface}
          className="text-zinc-500 hover:text-zinc-950 flex items-center gap-1.5 transition-colors"
          title="Preview random typeface"
        >
          <Shuffle className="w-3.5 h-3.5" />
          <span>Random Typeface</span>
        </button>

        <div className="flex items-center gap-2">
          {compareList.length > 0 && (
            <button
              onClick={() => setShowComparisonDrawer(!showComparisonDrawer)}
              className="min-h-[32px] text-xs font-medium px-2.5 py-1 rounded bg-zinc-950 text-white flex items-center gap-1 transition-opacity hover:opacity-90 active:scale-95"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>
                {showComparisonDrawer ? 'Hide Compare' : `Compare (${compareList.length})`}
              </span>
            </button>
          )}

          <div className="flex items-center border border-zinc-200 rounded overflow-hidden bg-white">
            <button
              onClick={() => setViewMode('grid')}
              className={`w-8 h-8 flex items-center justify-center transition-colors active:scale-95 ${
                viewMode === 'grid' ? 'bg-zinc-950 text-white' : 'text-zinc-400 hover:text-zinc-950'
              }`}
              title="Grid View"
              aria-label="Grid View"
            >
              <Grid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`w-8 h-8 flex items-center justify-center transition-colors active:scale-95 ${
                viewMode === 'list' ? 'bg-zinc-950 text-white' : 'text-zinc-400 hover:text-zinc-950'
              }`}
              title="List View"
              aria-label="List View"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Active Comparison Drawer */}
      {showComparisonDrawer && compareList.length > 0 && (
        <TypefaceComparison
          initialFontIds={compareList}
          onClose={() => setShowComparisonDrawer(false)}
        />
      )}

      {/* Responsive Viewport Wrapper */}
      <div className={`transition-all duration-300 ${previewWidthClass}`}>
        {displayedTypefaces.length === 0 ? (
          <div className="text-center py-16 px-4 border border-dashed border-zinc-200 rounded-lg bg-white">
            <p className="text-sm font-medium text-zinc-950 mb-1">
              No typefaces match your selected criteria.
            </p>
            <p className="text-xs text-zinc-400 mb-3">
              Try clearing filters or adjusting your search keyword.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-3.5 py-1.5 bg-zinc-950 text-white text-xs font-medium rounded hover:opacity-90 transition-opacity"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className={`grid gap-4 ${
              viewMode === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
            }`}
          >
            {displayedTypefaces.map((typeface) => (
              <TypefaceCard
                key={typeface.id}
                typeface={typeface}
                settings={settings}
                isFavorite={favorites.includes(typeface.id)}
                isInCompare={compareList.includes(typeface.id)}
                onToggleFavorite={handleToggleFavorite}
                onToggleCompare={handleToggleCompare}
                onOpenCSS={(tf) => setActiveCSSModalTypeface(tf)}
              />
            ))}
          </div>
        )}

        {filteredTypefaces.length > displayLimit && (
          <div className="text-center pt-8">
            <button
              onClick={() => setDisplayLimit((prev) => prev + 36)}
              className="px-5 py-2 bg-white text-zinc-950 hover:bg-zinc-50 font-medium text-xs rounded border border-zinc-200 transition-colors"
            >
              Show More Typefaces ({filteredTypefaces.length - displayLimit} remaining)
            </button>
          </div>
        )}
      </div>

      {/* CSS Modal */}
      <CSSExportModal
        typeface={activeCSSModalTypeface}
        settings={settings}
        onClose={() => setActiveCSSModalTypeface(null)}
      />
    </section>
  );
}
