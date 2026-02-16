import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, MapPin, Mountain, Home, Sparkles, 
  LayoutGrid, List, ArrowUpDown,
  Clock, TrendingUp, X, Command
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { SearchFilters } from "@/components/search/SearchFilters";
import { SearchResultCard } from "@/components/search/SearchResultCard";
import { SearchSuggestions } from "@/components/search/SearchSuggestions";
import { useSearch } from "@/hooks/useSearch";
import { useRecentSearches } from "@/hooks/useRecentSearches";
import { SITE_CONFIG, getBreadcrumbSchema } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.08 },
  }),
};

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [isFocused, setIsFocused] = useState(false);
  const { recentSearches, addSearch } = useRecentSearches();
  
  const {
    query, setQuery,
    category, setCategory,
    difficultyFilter, setDifficultyFilter,
    districtFilter, setDistrictFilter,
    results, resultsByType, clearFilters,
  } = useSearch();

  useEffect(() => {
    if (initialQuery && !query) setQuery(initialQuery);
  }, [initialQuery, query, setQuery]);

  useEffect(() => {
    if (query) {
      setSearchParams({ q: query }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  }, [query, setSearchParams]);

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

  const sortedResults = useCallback(() => {
    const sorted = [...results];
    switch (sortBy) {
      case "name-asc": return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc": return sorted.sort((a, b) => b.title.localeCompare(a.title));
      default: return sorted;
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
    if (query.trim()) addSearch(query.trim());
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Search", url: `${SITE_CONFIG.url}/search` },
  ]);

  const finalResults = sortedResults();

  const stats = [
    { icon: MapPin, label: "Districts", count: 12 },
    { icon: Mountain, label: "Treks", count: 12 },
    { icon: Home, label: "Homestays", count: 14 },
    { icon: Sparkles, label: "Hidden Gems", count: 25 },
  ];

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
        {/* ─── Hero Section ─── */}
        <section className="relative overflow-hidden bg-[#3c431e]">
          {/* Grain texture overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }} />
          
          {/* Gradient accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="container mx-auto px-4 pt-14 pb-16 md:pt-20 md:pb-20 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              {/* Title */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="text-white/50 text-xs md:text-sm font-body tracking-[0.25em] uppercase mb-4"
              >
                Discover your next adventure
              </motion.p>
              
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-[1.1]"
              >
                Search Himachal
              </motion.h1>
              
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-base md:text-lg text-white/60 font-body max-w-lg mx-auto mb-10"
              >
                63+ destinations, treks, homestays & hidden gems — all in one place
              </motion.p>
              
              {/* ─── Search Bar ─── */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="max-w-2xl mx-auto"
              >
                <div className={cn(
                  "relative rounded-2xl transition-all duration-500",
                  isFocused 
                    ? "shadow-[0_20px_60px_-12px_rgba(0,0,0,0.4)] scale-[1.01]" 
                    : "shadow-[0_8px_30px_-8px_rgba(0,0,0,0.3)]"
                )}>
                  {/* Glow ring on focus */}
                  <div className={cn(
                    "absolute -inset-[2px] rounded-[18px] transition-opacity duration-500",
                    "bg-gradient-to-r from-white/20 via-white/10 to-white/20",
                    isFocused ? "opacity-100" : "opacity-0"
                  )} />
                  
                  <div className="relative">
                    <Search className={cn(
                      "absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 z-10 transition-colors duration-300",
                      isFocused ? "text-[#3c431e]" : "text-muted-foreground/70"
                    )} />
                    <input
                      data-search-input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      autoFocus
                      placeholder="Search for Spiti Valley, Triund trek, homestays..."
                      className={cn(
                        "w-full pl-14 pr-24 py-5 text-base md:text-lg h-[60px] md:h-16 rounded-2xl",
                        "bg-white text-foreground placeholder:text-muted-foreground/50",
                        "border-0 outline-none",
                        "font-body transition-all duration-300"
                      )}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      {query && (
                        <motion.button
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          onClick={() => setQuery("")}
                          className="p-1.5 rounded-full hover:bg-secondary/80 transition-colors"
                        >
                          <X className="w-4 h-4 text-muted-foreground" />
                        </motion.button>
                      )}
                      <kbd className="hidden md:inline-flex items-center gap-0.5 px-2 py-1 rounded-md bg-secondary/80 text-muted-foreground/70 text-[11px] font-mono border border-border/50">
                        <Command className="w-3 h-3" />K
                      </kbd>
                    </div>
                  </div>
                </div>

                {/* Quick Actions below search */}
                <AnimatePresence mode="wait">
                  {!query && (
                    <motion.div 
                      key={recentSearches.length > 0 ? "recent" : "suggested"}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="flex items-center gap-2 mt-5 flex-wrap justify-center"
                    >
                      <span className="text-white/40 text-xs flex items-center gap-1.5 font-body">
                        {recentSearches.length > 0 
                          ? <><Clock className="w-3 h-3" /> Recent</>
                          : <><TrendingUp className="w-3 h-3" /> Popular</>
                        }
                      </span>
                      {(recentSearches.length > 0 
                        ? recentSearches.slice(0, 4).map(r => r.query)
                        : ["Spiti Valley", "Triund Trek", "Tirthan Valley", "Kasol"]
                      ).map((term, i) => (
                        <motion.button
                          key={term}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + i * 0.04 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleSearchClick(term)}
                          className="px-3.5 py-1.5 rounded-full text-xs font-body bg-white/[0.08] text-white/70 hover:bg-white/[0.15] hover:text-white transition-all duration-200 border border-white/[0.08] backdrop-blur-sm"
                        >
                          {term}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="flex items-center justify-center gap-4 md:gap-8 mt-10 flex-wrap"
              >
                {stats.map(({ icon: Icon, label, count }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/[0.08] flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-white/50" />
                    </div>
                    <div className="text-left">
                      <span className="text-white font-display font-bold text-sm leading-none">{count}</span>
                      <span className="text-white/40 text-xs font-body ml-1">{label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Content Area ─── */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Toolbar */}
          <AnimatePresence>
            {hasActiveSearch && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8 overflow-hidden"
              >
                {/* Filters */}
                <div className="mb-5">
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
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center justify-between gap-4 py-3 px-5 rounded-xl bg-secondary/40 border border-border/30"
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      <p className="text-sm font-body text-muted-foreground">
                        <span className="font-semibold text-foreground">{finalResults.length}</span> result{finalResults.length !== 1 ? 's' : ''}
                        {query && <> for "<span className="font-semibold text-foreground">{query}</span>"</>}
                      </p>
                      
                      <div className="hidden sm:flex items-center gap-1.5">
                        {[
                          { count: resultCounts.destinations, icon: MapPin },
                          { count: resultCounts.treks, icon: Mountain },
                          { count: resultCounts.homestays, icon: Home },
                          { count: resultCounts.hiddenGems, icon: Sparkles },
                        ].filter(b => b.count > 0).map(({ count, icon: Icon }, i) => (
                          <Badge key={i} variant="outline" className="text-[11px] gap-1 font-normal py-0.5 px-2 border-border/50">
                            <Icon className="w-3 h-3 text-muted-foreground" /> {count}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2.5">
                      <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                        <SelectTrigger className="w-[130px] h-8 text-xs rounded-lg bg-background border-border/50">
                          <ArrowUpDown className="w-3 h-3 mr-1 text-muted-foreground" />
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-background border shadow-xl rounded-lg">
                          <SelectItem value="relevance">Relevance</SelectItem>
                          <SelectItem value="name-asc">Name A–Z</SelectItem>
                          <SelectItem value="name-desc">Name Z–A</SelectItem>
                        </SelectContent>
                      </Select>

                      <div className="flex items-center rounded-lg border border-border/50 bg-background overflow-hidden">
                        <button
                          onClick={() => setViewMode("list")}
                          className={cn(
                            "p-1.5 transition-all duration-200",
                            viewMode === "list" 
                              ? "bg-[#3c431e] text-white" 
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                          )}
                          aria-label="List view"
                        >
                          <List className="w-3.5 h-3.5" />
                        </button>
                        <div className="w-px h-4 bg-border/50" />
                        <button
                          onClick={() => setViewMode("grid")}
                          className={cn(
                            "p-1.5 transition-all duration-200",
                            viewMode === "grid" 
                              ? "bg-[#3c431e] text-white" 
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                          )}
                          aria-label="Grid view"
                        >
                          <LayoutGrid className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ─── Results ─── */}
          {hasActiveSearch ? (
            <AnimatePresence mode="wait">
              {finalResults.length === 0 ? (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-20"
                >
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-secondary/50 flex items-center justify-center"
                  >
                    <Search className="w-8 h-8 text-muted-foreground/50" />
                  </motion.div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    No results found
                  </h3>
                  <p className="text-muted-foreground font-body max-w-md mx-auto mb-10">
                    {query 
                      ? `Nothing matching "${query}" — try different keywords or adjust your filters.`
                      : "Try adjusting your filters to see more results."
                    }
                  </p>
                  <div className="mt-8 text-left">
                    <SearchSuggestions onSearchClick={handleSearchClick} />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={`results-${viewMode}-${sortBy}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SearchSuggestions onSearchClick={handleSearchClick} />
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;
