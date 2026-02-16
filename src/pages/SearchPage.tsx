import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, MapPin, Mountain, Home, Sparkles, 
  LayoutGrid, List, SlidersHorizontal, ArrowUpDown,
  Clock, TrendingUp, X, Command
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { SearchInput } from "@/components/search/SearchInput";
import { SearchFilters } from "@/components/search/SearchFilters";
import { SearchResults } from "@/components/search/SearchResults";
import { SearchResultCard } from "@/components/search/SearchResultCard";
import { SearchSuggestions } from "@/components/search/SearchSuggestions";
import { useSearch, SearchResult } from "@/hooks/useSearch";
import { useRecentSearches } from "@/hooks/useRecentSearches";
import { SITE_CONFIG, getBreadcrumbSchema } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type SortOption = "relevance" | "name-asc" | "name-desc";
type ViewMode = "list" | "grid";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const { recentSearches, addSearch } = useRecentSearches();
  
  const {
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
  } = useSearch();

  // Sync URL param with search state
  useEffect(() => {
    if (initialQuery && !query) {
      setQuery(initialQuery);
    }
  }, [initialQuery, query, setQuery]);

  // Update URL when query changes
  useEffect(() => {
    if (query) {
      setSearchParams({ q: query }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  }, [query, setSearchParams]);

  // Global keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        document.querySelector<HTMLInputElement>('[data-search-input]')?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Sort results
  const sortedResults = useCallback(() => {
    const sorted = [...results];
    switch (sortBy) {
      case "name-asc":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return sorted;
    }
  }, [results, sortBy]);

  const resultCounts = {
    all: results.length,
    destinations: resultsByType.districts.length,
    treks: resultsByType.treks.length,
    homestays: resultsByType.homestays.length,
    hiddenGems: resultsByType.hiddenGems.length,
  };

  const hasFilters = difficultyFilter !== null || districtFilter !== null;
  const hasActiveSearch = query || hasFilters || category !== "all";

  const handleSearchClick = (term: string) => {
    setQuery(term);
    addSearch(term);
  };

  const handleSearchSubmit = () => {
    if (query.trim()) {
      addSearch(query.trim());
    }
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Search", url: `${SITE_CONFIG.url}/search` },
  ]);

  const finalResults = sortedResults();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Search Himachal Pradesh | Destinations, Treks & Homestays | Local Himachal"
        description="Search and discover destinations, treks, homestays, and hidden gems across Himachal Pradesh. Find your perfect Himalayan adventure with advanced filters."
        keywords="search Himachal Pradesh, find treks Himachal, homestay search, hidden gems search, Himachal destinations"
        url="/search"
        schemas={[breadcrumbSchema]}
      />
      
      <Navbar />
      
      <main>
        {/* Hero Section - Brand Green Background */}
        <div className="bg-[#3c431e] relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }} />
          </div>

          <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3">
                Explore Himachal Pradesh
              </h1>
              <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-8">
                Search across {12 + 12 + 14 + 25}+ destinations, treks, homestays, and hidden gems
              </p>
              
              {/* Search Input */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                  <input
                    data-search-input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                    autoFocus
                    placeholder="Search for Spiti Valley, Triund trek, homestays..."
                    className={cn(
                      "w-full pl-14 pr-28 py-5 text-lg h-16 rounded-2xl",
                      "bg-white text-foreground placeholder:text-muted-foreground/60",
                      "border-2 border-transparent",
                      "focus:outline-none focus:ring-4 focus:ring-white/20 focus:border-white/30",
                      "shadow-2xl shadow-black/20",
                      "transition-all duration-300"
                    )}
                  />
                  {/* Keyboard shortcut hint */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    {query && (
                      <button
                        onClick={() => setQuery("")}
                        className="p-1.5 rounded-full hover:bg-secondary transition-colors"
                      >
                        <X className="w-4 h-4 text-muted-foreground" />
                      </button>
                    )}
                    <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary text-muted-foreground text-xs font-mono border border-border">
                      <Command className="w-3 h-3" />K
                    </kbd>
                  </div>
                </div>

                {/* Recent Searches - below search */}
                {!query && recentSearches.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mt-4 flex-wrap justify-center"
                  >
                    <span className="text-white/50 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Recent:
                    </span>
                    {recentSearches.slice(0, 4).map((recent) => (
                      <button
                        key={recent.query}
                        onClick={() => handleSearchClick(recent.query)}
                        className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all border border-white/10"
                      >
                        {recent.query}
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Quick category links */}
                {!query && recentSearches.length === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2 mt-4 flex-wrap justify-center"
                  >
                    <span className="text-white/50 text-xs flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Try:
                    </span>
                    {["Spiti Valley", "Triund Trek", "Tirthan Valley", "Kasol"].map((term) => (
                      <button
                        key={term}
                        onClick={() => handleSearchClick(term)}
                        className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all border border-white/10"
                      >
                        {term}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Stats Bar */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-6 mt-8 flex-wrap"
              >
                {[
                  { icon: MapPin, label: "Districts", count: 12 },
                  { icon: Mountain, label: "Treks", count: 12 },
                  { icon: Home, label: "Homestays", count: 14 },
                  { icon: Sparkles, label: "Hidden Gems", count: 25 },
                ].map(({ icon: Icon, label, count }) => (
                  <div key={label} className="flex items-center gap-2 text-white/60">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">
                      <span className="text-white font-semibold">{count}</span> {label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-10">
          {/* Toolbar - Only when there's active search */}
          {hasActiveSearch && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              {/* Filters */}
              <div className="mb-4">
                <SearchFilters
                  category={category}
                  onCategoryChange={setCategory}
                  difficultyFilter={difficultyFilter}
                  onDifficultyChange={(v) => setDifficultyFilter(v === "all-difficulties" ? null : v)}
                  districtFilter={districtFilter}
                  onDistrictChange={(v) => setDistrictFilter(v === "all-districts" ? null : v)}
                  onClearFilters={clearFilters}
                  resultCounts={resultCounts}
                />
              </div>

              {/* Results toolbar */}
              {finalResults.length > 0 && (
                <div className="flex items-center justify-between gap-4 py-3 px-4 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{finalResults.length}</span> result{finalResults.length !== 1 ? 's' : ''}
                      {query && <> for "<span className="font-semibold text-foreground">{query}</span>"</>}
                    </p>
                    
                    {/* Type badges */}
                    <div className="hidden sm:flex items-center gap-1.5">
                      {resultCounts.destinations > 0 && (
                        <Badge variant="outline" className="text-xs gap-1 font-normal">
                          <MapPin className="w-3 h-3" /> {resultCounts.destinations}
                        </Badge>
                      )}
                      {resultCounts.treks > 0 && (
                        <Badge variant="outline" className="text-xs gap-1 font-normal">
                          <Mountain className="w-3 h-3" /> {resultCounts.treks}
                        </Badge>
                      )}
                      {resultCounts.homestays > 0 && (
                        <Badge variant="outline" className="text-xs gap-1 font-normal">
                          <Home className="w-3 h-3" /> {resultCounts.homestays}
                        </Badge>
                      )}
                      {resultCounts.hiddenGems > 0 && (
                        <Badge variant="outline" className="text-xs gap-1 font-normal">
                          <Sparkles className="w-3 h-3" /> {resultCounts.hiddenGems}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* Sort */}
                    <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                      <SelectTrigger className="w-[140px] h-9 text-xs rounded-lg bg-background">
                        <ArrowUpDown className="w-3 h-3 mr-1.5" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-background border shadow-lg">
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="name-asc">Name A–Z</SelectItem>
                        <SelectItem value="name-desc">Name Z–A</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* View Toggle */}
                    <div className="flex items-center rounded-lg border border-border bg-background overflow-hidden">
                      <button
                        onClick={() => setViewMode("list")}
                        className={cn(
                          "p-2 transition-colors",
                          viewMode === "list" ? "bg-[#3c431e] text-white" : "text-muted-foreground hover:text-foreground"
                        )}
                        aria-label="List view"
                      >
                        <List className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode("grid")}
                        className={cn(
                          "p-2 transition-colors",
                          viewMode === "grid" ? "bg-[#3c431e] text-white" : "text-muted-foreground hover:text-foreground"
                        )}
                        aria-label="Grid view"
                      >
                        <LayoutGrid className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Results */}
          {hasActiveSearch ? (
            <AnimatePresence mode="wait">
              {finalResults.length === 0 ? (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                    <Search className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No results found
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    {query 
                      ? `We couldn't find anything matching "${query}". Try adjusting your search or filters.`
                      : "Try adjusting your filters to see more results."
                    }
                  </p>
                  <div className="mt-12 text-left">
                    <SearchSuggestions onSearchClick={handleSearchClick} />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={`results-${viewMode}-${sortBy}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {finalResults.map((result, index) => (
                        <SearchResultCard 
                          key={`${result.type}-${result.id}`} 
                          result={result} 
                          index={index} 
                          query={query}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {finalResults.map((result, index) => (
                        <SearchResultCard 
                          key={`${result.type}-${result.id}`} 
                          result={result} 
                          index={index} 
                          query={query}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            <SearchSuggestions onSearchClick={handleSearchClick} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;
