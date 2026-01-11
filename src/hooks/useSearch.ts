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
}

const normalizeText = (text: string): string => {
  return text.toLowerCase().trim().replace(/\s+/g, " ");
};

const matchScore = (text: string, query: string): number => {
  const normalizedText = normalizeText(text);
  const normalizedQuery = normalizeText(query);
  
  if (normalizedText === normalizedQuery) return 100;
  if (normalizedText.startsWith(normalizedQuery)) return 80;
  if (normalizedText.includes(normalizedQuery)) return 60;
  
  // Word matching
  const queryWords = normalizedQuery.split(" ");
  const textWords = normalizedText.split(" ");
  const matchedWords = queryWords.filter(qw => 
    textWords.some(tw => tw.includes(qw) || qw.includes(tw))
  );
  
  if (matchedWords.length === queryWords.length) return 50;
  if (matchedWords.length > 0) return 30 * (matchedWords.length / queryWords.length);
  
  return 0;
};

const searchDistricts = (query: string): SearchResult[] => {
  return districts
    .map(d => ({
      item: d,
      score: Math.max(
        matchScore(d.name, query),
        matchScore(d.tagline, query),
        matchScore(d.description, query),
        ...d.famousFor.map(f => matchScore(f, query))
      )
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => ({
      id: item.id,
      type: "district" as const,
      title: item.name,
      subtitle: item.tagline,
      description: item.description,
      image: item.image,
      url: `/district/${item.slug}`,
      tags: item.famousFor.slice(0, 3),
      district: item.name,
    }));
};

const searchTreks = (query: string): SearchResult[] => {
  return treks
    .map(t => ({
      item: t,
      score: Math.max(
        matchScore(t.name, query),
        matchScore(t.description, query),
        matchScore(t.district, query),
        matchScore(t.difficulty, query),
        ...t.highlights.map(h => matchScore(h, query))
      )
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => ({
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
    }));
};

const searchHomestays = (query: string): SearchResult[] => {
  return homestays
    .map(h => ({
      item: h,
      score: Math.max(
        matchScore(h.name, query),
        matchScore(h.village, query),
        matchScore(h.district, query),
        matchScore(h.description, query)
      )
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => ({
      id: item.id,
      type: "homestay" as const,
      title: item.name,
      subtitle: `${item.village}, ${item.district}`,
      description: item.description,
      image: item.image,
      url: item.externalLink,
      tags: [item.priceRange, item.village],
      district: item.district,
    }));
};

const searchHiddenGems = (query: string): SearchResult[] => {
  return hiddenGems
    .map(g => ({
      item: g,
      score: Math.max(
        matchScore(g.name, query),
        matchScore(g.district, query),
        matchScore(g.shortDescription, query),
        matchScore(g.category, query),
        matchScore(g.difficulty, query)
      )
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => ({
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
