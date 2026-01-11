import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "local-himachal-recent-searches";
const MAX_RECENT_SEARCHES = 5;

export interface RecentSearch {
  query: string;
  timestamp: number;
}

export const useRecentSearches = () => {
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as RecentSearch[];
        setRecentSearches(parsed);
      }
    } catch (error) {
      console.error("Failed to load recent searches:", error);
    }
  }, []);

  // Save to localStorage
  const saveToStorage = useCallback((searches: RecentSearch[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(searches));
    } catch (error) {
      console.error("Failed to save recent searches:", error);
    }
  }, []);

  // Add a new search
  const addSearch = useCallback((query: string) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery || trimmedQuery.length < 2) return;

    setRecentSearches((prev) => {
      // Remove existing entry with same query
      const filtered = prev.filter(
        (s) => s.query.toLowerCase() !== trimmedQuery.toLowerCase()
      );

      // Add new entry at the beginning
      const updated = [
        { query: trimmedQuery, timestamp: Date.now() },
        ...filtered,
      ].slice(0, MAX_RECENT_SEARCHES);

      saveToStorage(updated);
      return updated;
    });
  }, [saveToStorage]);

  // Remove a specific search
  const removeSearch = useCallback((query: string) => {
    setRecentSearches((prev) => {
      const updated = prev.filter(
        (s) => s.query.toLowerCase() !== query.toLowerCase()
      );
      saveToStorage(updated);
      return updated;
    });
  }, [saveToStorage]);

  // Clear all recent searches
  const clearAll = useCallback(() => {
    setRecentSearches([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Failed to clear recent searches:", error);
    }
  }, []);

  return {
    recentSearches,
    addSearch,
    removeSearch,
    clearAll,
  };
};
