// Safe LocalStorage Wrapper with in-memory fallback

class SafeStorage {
  private memory = new Map<string, string>();

  getItem<T>(key: string, defaultValue: T): T {
    if (typeof window === 'undefined') return defaultValue;
    try {
      const value = localStorage.getItem(key);
      if (value === null) return defaultValue;
      return JSON.parse(value) as T;
    } catch {
      const memVal = this.memory.get(key);
      if (memVal !== undefined) {
        try {
          return JSON.parse(memVal) as T;
        } catch {
          return defaultValue;
        }
      }
      return defaultValue;
    }
  }

  setItem<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
      this.memory.set(key, serialized);
    } catch {
      try {
        this.memory.set(key, JSON.stringify(value));
      } catch {
        // storage disabled or quota exceeded
      }
    }
  }

  removeItem(key: string): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(key);
      this.memory.delete(key);
    } catch {
      this.memory.delete(key);
    }
  }
}

export const safeStorage = new SafeStorage();

export const STORAGE_KEYS = {
  FAVORITES: 'typefacegen_favorites',
  COMPARE_LIST: 'typefacegen_compare_list',
  SAVED_PAIRINGS: 'typefacegen_saved_pairings',
  RECENT_FONTS: 'typefacegen_recent_fonts',
  THEME_PREFERENCE: 'typefacegen_theme',
};
