import { useState, useMemo, useCallback } from "react";
import { treks, Trek } from "@/data/treks";
import { homestays, Homestay } from "@/data/homestays";
import { districts, District } from "@/data/districts";
import { hiddenGems, HiddenGem } from "@/data/hiddenGems";

export type SearchCategory = "all" | "destinations" | "treks" | "homestays" | "hidden-gems";

export interface SearchResult {
  id: string;
  type: "district" | "trek" | "homestay" | "hidden-gem";
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
  difficulty?: string;
  district?: string;
  score?: number;
}

// Normalize text for comparison
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[–—-]/g, " ")
    .replace(/['']/g, "'");
};

// Calculate fuzzy match score
const fuzzyMatch = (text: string, query: string): number => {
  const normalizedText = normalizeText(text);
  const normalizedQuery = normalizeText(query);
  
  if (!normalizedQuery) return 0;
  
  // Exact match
  if (normalizedText === normalizedQuery) return 100;
  
  // Starts with query
  if (normalizedText.startsWith(normalizedQuery)) return 90;
  
  // Contains exact query
  if (normalizedText.includes(normalizedQuery)) return 75;
  
  // Word-level matching
  const queryWords = normalizedQuery.split(" ").filter(w => w.length > 0);
  const textWords = normalizedText.split(" ").filter(w => w.length > 0);
  
  let wordMatchScore = 0;
  let matchedWords = 0;
  
  for (const qWord of queryWords) {
    for (const tWord of textWords) {
      // Exact word match
      if (tWord === qWord) {
        matchedWords++;
        wordMatchScore += 20;
        break;
      }
      // Word starts with query word
      if (tWord.startsWith(qWord)) {
        matchedWords++;
        wordMatchScore += 15;
        break;
      }
      // Word contains query word
      if (tWord.includes(qWord)) {
        matchedWords++;
        wordMatchScore += 10;
        break;
      }
      // Query word contains text word (partial match)
      if (qWord.includes(tWord) && tWord.length >= 3) {
        matchedWords++;
        wordMatchScore += 8;
        break;
      }
    }
  }
  
  // If all query words matched, bonus points
  if (matchedWords === queryWords.length && queryWords.length > 0) {
    wordMatchScore += 25;
  }
  
  // Character-level fuzzy matching for typos
  if (wordMatchScore === 0 && normalizedQuery.length >= 3) {
    let charMatches = 0;
    let queryIndex = 0;
    
    for (let i = 0; i < normalizedText.length && queryIndex < normalizedQuery.length; i++) {
      if (normalizedText[i] === normalizedQuery[queryIndex]) {
        charMatches++;
        queryIndex++;
      }
    }
    
    const charMatchRatio = charMatches / normalizedQuery.length;
    if (charMatchRatio >= 0.7) {
      wordMatchScore = Math.floor(charMatchRatio * 30);
    }
  }
  
  return wordMatchScore;
};

// Calculate best match score across multiple fields
const calculateScore = (fields: string[], query: string, weights: number[] = []): number => {
  let maxScore = 0;
  
  fields.forEach((field, index) => {
    if (!field) return;
    const weight = weights[index] || 1;
    const score = fuzzyMatch(field, query) * weight;
    maxScore = Math.max(maxScore, score);
  });
  
  return maxScore;
};

const searchDistricts = (query: string): SearchResult[] => {
  return districts
    .map(d => {
      const score = calculateScore(
        [d.name, d.tagline, d.slug, ...d.famousFor, d.description],
        query,
        [2, 1.5, 1.8, 1.3, 1.3, 1.3, 1.3, 1]
      );
      return { item: d, score };
    })
    .filter(({ score }) => score > 10)
    .sort((a, b) => b.score - a.score)
    .map(({ item, score }) => ({
      id: item.id,
      type: "district" as const,
      title: item.name,
      subtitle: item.tagline,
      description: item.description,
      image: item.image,
      url: `/district/${item.slug}`,
      tags: item.famousFor.slice(0, 3),
      district: item.name,
      score,
    }));
};

const searchTreks = (query: string): SearchResult[] => {
  return treks
    .map(t => {
      const score = calculateScore(
        [t.name, t.slug, t.district, t.difficulty, ...t.highlights, t.description],
        query,
        [2, 1.8, 1.5, 1, 1.2, 1.2, 1.2, 0.8]
      );
      return { item: t, score };
    })
    .filter(({ score }) => score > 10)
    .sort((a, b) => b.score - a.score)
    .map(({ item, score }) => ({
      id: item.id,
      type: "trek" as const,
      title: item.name,
      subtitle: `${item.difficulty} • ${item.duration} • ${item.altitude}`,
      description: item.description,
      image: item.image,
      url: `/trek/${item.slug}`,
      tags: item.highlights.slice(0, 3),
      difficulty: item.difficulty,
      district: item.district,
      score,
    }));
};

const searchHomestays = (query: string): SearchResult[] => {
  return homestays
    .map(h => {
      const score = calculateScore(
        [h.name, h.village, h.district, h.description],
        query,
        [2, 1.5, 1.3, 0.8]
      );
      return { item: h, score };
    })
    .filter(({ score }) => score > 10)
    .sort((a, b) => b.score - a.score)
    .map(({ item, score }) => ({
      id: item.id,
      type: "homestay" as const,
      title: item.name,
      subtitle: `${item.village}, ${item.district}`,
      description: item.description,
      image: item.image,
      url: item.externalLink,
      tags: [item.priceRange, item.village],
      district: item.district,
      score,
    }));
};

const searchHiddenGems = (query: string): SearchResult[] => {
  return hiddenGems
    .map(g => {
      const score = calculateScore(
        [g.name, g.slug, g.district, g.category, g.difficulty, g.shortDescription],
        query,
        [2, 1.8, 1.5, 1.3, 1, 0.8]
      );
      return { item: g, score };
    })
    .filter(({ score }) => score > 10)
    .sort((a, b) => b.score - a.score)
    .map(({ item, score }) => ({
      id: item.id,
      type: "hidden-gem" as const,
      title: item.name,
      subtitle: `${item.district} • ${item.altitude}`,
      description: item.shortDescription,
      image: item.image,
      url: `/hidden-gems/${item.slug}`,
      tags: [item.category, item.difficulty, item.bestTime],
      difficulty: item.difficulty,
      district: item.district,
      score,
    }));
};

export const useSearch = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<SearchCategory>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);
  const [districtFilter, setDistrictFilter] = useState<string | null>(null);

  const results = useMemo(() => {
    if (!query.trim() && !difficultyFilter && !districtFilter) {
      return [];
    }

    let allResults: SearchResult[] = [];
    const searchQuery = query.trim() || "";

    if (category === "all" || category === "destinations") {
      const districtResults = searchQuery ? searchDistricts(searchQuery) : 
        districts.map(d => ({
          id: d.id,
          type: "district" as const,
          title: d.name,
          subtitle: d.tagline,
          description: d.description,
          image: d.image,
          url: `/district/${d.slug}`,
          tags: d.famousFor.slice(0, 3),
          district: d.name,
          score: 0,
        }));
      allResults = [...allResults, ...districtResults];
    }

    if (category === "all" || category === "treks") {
      const trekResults = searchQuery ? searchTreks(searchQuery) :
        treks.map(t => ({
          id: t.id,
          type: "trek" as const,
          title: t.name,
          subtitle: `${t.difficulty} • ${t.duration} • ${t.altitude}`,
          description: t.description,
          image: t.image,
          url: `/trek/${t.slug}`,
          tags: t.highlights.slice(0, 3),
          difficulty: t.difficulty,
          district: t.district,
          score: 0,
        }));
      allResults = [...allResults, ...trekResults];
    }

    if (category === "all" || category === "homestays") {
      const homestayResults = searchQuery ? searchHomestays(searchQuery) :
        homestays.map(h => ({
          id: h.id,
          type: "homestay" as const,
          title: h.name,
          subtitle: `${h.village}, ${h.district}`,
          description: h.description,
          image: h.image,
          url: h.externalLink,
          tags: [h.priceRange, h.village],
          district: h.district,
          score: 0,
        }));
      allResults = [...allResults, ...homestayResults];
    }

    if (category === "all" || category === "hidden-gems") {
      const gemResults = searchQuery ? searchHiddenGems(searchQuery) :
        hiddenGems.map(g => ({
          id: g.id,
          type: "hidden-gem" as const,
          title: g.name,
          subtitle: `${g.district} • ${g.altitude}`,
          description: g.shortDescription,
          image: g.image,
          url: `/hidden-gems/${g.slug}`,
          tags: [g.category, g.difficulty, g.bestTime],
          difficulty: g.difficulty,
          district: g.district,
          score: 0,
        }));
      allResults = [...allResults, ...gemResults];
    }

    // Apply filters
    if (difficultyFilter) {
      allResults = allResults.filter(r => 
        r.difficulty?.toLowerCase() === difficultyFilter.toLowerCase()
      );
    }

    if (districtFilter) {
      allResults = allResults.filter(r => 
        r.district?.toLowerCase().includes(districtFilter.toLowerCase())
      );
    }

    // Sort by score if searching
    if (searchQuery) {
      allResults.sort((a, b) => (b.score || 0) - (a.score || 0));
    }

    return allResults;
  }, [query, category, difficultyFilter, districtFilter]);

  const resultsByType = useMemo(() => {
    return {
      districts: results.filter(r => r.type === "district"),
      treks: results.filter(r => r.type === "trek"),
      homestays: results.filter(r => r.type === "homestay"),
      hiddenGems: results.filter(r => r.type === "hidden-gem"),
    };
  }, [results]);

  const clearFilters = useCallback(() => {
    setQuery("");
    setCategory("all");
    setDifficultyFilter(null);
    setDistrictFilter(null);
  }, []);

  return {
    query,
    setQuery,
    category,
    setCategory,
    difficultyFilter,
    setDifficultyFilter,
    districtFilter,
    setDistrictFilter,
    results,
    resultsByType,
    clearFilters,
    totalResults: results.length,
  };
};

// Quick search for header - simpler version
export const useQuickSearch = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim() || query.length < 2) {
      return [];
    }

    const searchQuery = query.trim();
    
    const districtResults = searchDistricts(searchQuery);
    const trekResults = searchTreks(searchQuery);
    const homestayResults = searchHomestays(searchQuery);
    const gemResults = searchHiddenGems(searchQuery);

    // Combine and sort all results by score
    const allResults = [
      ...districtResults,
      ...trekResults,
      ...homestayResults,
      ...gemResults,
    ].sort((a, b) => (b.score || 0) - (a.score || 0));

    // Return top 8 results
    return allResults.slice(0, 8);
  }, [query]);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  return {
    query,
    setQuery,
    results,
    isOpen,
    setIsOpen,
    close,
  };
};
