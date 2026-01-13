import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X, MapPin, Mountain, Home, Sparkles, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useQuickSearch, SearchResult } from "@/hooks/useSearch";
import { useRecentSearches } from "@/hooks/useRecentSearches";
import { HighlightedText } from "@/components/search/HighlightedText";
import { cn } from "@/lib/utils";
import { trendingPlaces, popularSearchTerms } from "@/data/suggestedPlaces";

const typeIcons = {
  district: MapPin,
  trek: Mountain,
  homestay: Home,
  "hidden-gem": Sparkles,
};

const typeLabels = {
  district: "Destination",
  trek: "Trek",
  homestay: "Homestay",
  "hidden-gem": "Hidden Gem",
};

const typeColors = {
  district: "bg-emerald-500/10 text-emerald-600",
  trek: "bg-orange-500/10 text-orange-600",
  homestay: "bg-blue-500/10 text-blue-600",
  "hidden-gem": "bg-purple-500/10 text-purple-600",
};

interface HeaderSearchProps {
  variant?: "desktop" | "mobile";
  onClose?: () => void;
}

export const HeaderSearch = ({ variant = "desktop", onClose }: HeaderSearchProps) => {
  const { query, setQuery, results, isOpen, setIsOpen, close } = useQuickSearch();
  const { recentSearches, addSearch, removeSearch, clearAll } = useRecentSearches();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showRecent, setShowRecent] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
        setShowRecent(false);
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [close]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen && !showRecent && !showSuggestions) return;

      const totalItems = showRecent && !query ? recentSearches.length : results.length;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < totalItems - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : totalItems - 1
          );
          break;
        case "Enter":
          e.preventDefault();
          if (showRecent && !query && selectedIndex >= 0 && recentSearches[selectedIndex]) {
            handleRecentClick(recentSearches[selectedIndex].query);
          } else if (selectedIndex >= 0 && results[selectedIndex]) {
            handleResultClick(results[selectedIndex]);
          } else if (query.trim()) {
            addSearch(query.trim());
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);
            close();
          }
          break;
        case "Escape":
          close();
          setShowRecent(false);
          setShowSuggestions(false);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, showRecent, showSuggestions, results, recentSearches, selectedIndex, query, navigate, close, addSearch]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(-1);
  }, [results, showRecent]);

  const handleResultClick = (result: SearchResult) => {
    addSearch(query.trim());
    if (result.type === "homestay" && result.url.startsWith("http")) {
      window.open(result.url, "_blank");
    } else {
      navigate(result.url);
    }
    close();
    setShowRecent(false);
    setShowSuggestions(false);
    onClose?.();
  };

  const handleRecentClick = (recentQuery: string) => {
    setQuery(recentQuery);
    setIsOpen(true);
    setShowRecent(false);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (term: string) => {
    setQuery(term);
    setIsOpen(true);
    setShowSuggestions(false);
  };

  const handleTrendingClick = (url: string) => {
    navigate(url);
    close();
    setShowSuggestions(false);
    onClose?.();
  };

  const handleInputChange = (value: string) => {
    setQuery(value);
    if (value.length >= 2) {
      setIsOpen(true);
      setShowRecent(false);
      setShowSuggestions(false);
    } else if (value.length === 0) {
      setIsOpen(false);
    }
  };

  const handleFocus = () => {
    if (query.length >= 2) {
      setIsOpen(true);
    } else if (recentSearches.length > 0) {
      setShowRecent(true);
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
      setShowRecent(false);
    }
  };

  const showResults = isOpen && results.length > 0;
  const showNoResults = isOpen && query.length >= 2 && results.length === 0;
  const showRecentSearches = showRecent && !query && recentSearches.length > 0;
  const showQuickSuggestions = showSuggestions && !query && recentSearches.length === 0;
  const showDropdown = showResults || showNoResults || showRecentSearches || showQuickSuggestions;

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
        <Input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={handleFocus}
          placeholder="Search places, treks..."
          className={cn(
            "pl-9 pr-8 bg-white/10 border-white/20 text-white placeholder:text-white/50",
            "focus:bg-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/20",
            "transition-all duration-200",
            variant === "desktop" ? "w-48 xl:w-56 h-9" : "w-full h-11"
          )}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-3.5 h-3.5 text-white/60" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute top-full left-0 right-0 mt-2 z-[100]",
              "bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border border-border/50",
              "overflow-hidden",
              variant === "desktop" ? "min-w-[320px] -left-8" : ""
            )}
          >
            {/* Recent Searches */}
            {showRecentSearches && (
              <div className="max-h-[300px] overflow-y-auto">
                <div className="flex items-center justify-between px-4 py-2 border-b border-border/50">
                  <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    Recent Searches
                  </span>
                  <button
                    onClick={clearAll}
                    className="text-xs text-muted-foreground hover:text-destructive transition-colors"
                  >
                    Clear all
                  </button>
                </div>
                <div className="p-2">
                  {recentSearches.map((recent, index) => (
                    <motion.div
                      key={recent.query}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className={cn(
                        "flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg",
                        "hover:bg-secondary/80 cursor-pointer group",
                        selectedIndex === index && "bg-secondary"
                      )}
                    >
                      <button
                        onClick={() => handleRecentClick(recent.query)}
                        className="flex items-center gap-2 flex-1 text-left"
                      >
                        <Search className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">{recent.query}</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSearch(recent.query);
                        }}
                        className="p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-destructive/10 transition-all"
                      >
                        <X className="w-3.5 h-3.5 text-muted-foreground hover:text-destructive" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results */}
            {showResults && (
              <div className="max-h-[400px] overflow-y-auto">
                <div className="p-2">
                  {results.map((result, index) => {
                    const Icon = typeIcons[result.type];
                    return (
                      <motion.button
                        key={`${result.type}-${result.id}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        onClick={() => handleResultClick(result)}
                        className={cn(
                          "w-full flex items-start gap-3 p-3 rounded-lg text-left transition-colors",
                          "hover:bg-secondary/80",
                          selectedIndex === index && "bg-secondary"
                        )}
                      >
                        {/* Image */}
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                          <img
                            src={result.image}
                            alt={result.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className={cn(
                              "inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium uppercase",
                              typeColors[result.type]
                            )}>
                              <Icon className="w-3 h-3" />
                              {typeLabels[result.type]}
                            </span>
                          </div>
                          <h4 className="font-medium text-foreground text-sm truncate">
                            <HighlightedText text={result.title} query={query} />
                          </h4>
                          <p className="text-xs text-muted-foreground truncate">
                            <HighlightedText 
                              text={result.subtitle} 
                              query={query}
                              highlightClassName="bg-primary/10 text-primary/80 font-normal rounded-sm"
                            />
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* View All Link */}
                {query.trim() && (
                  <Link
                    to={`/search?q=${encodeURIComponent(query.trim())}`}
                    onClick={() => { 
                      addSearch(query.trim());
                      close(); 
                      setShowRecent(false);
                      onClose?.(); 
                    }}
                    className="flex items-center justify-center gap-2 p-3 border-t border-border/50 text-sm text-primary hover:bg-secondary/50 transition-colors"
                  >
                    View all results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            )}

            {/* No Results */}
            {showNoResults && (
              <div className="p-6 text-center">
                <p className="text-muted-foreground text-sm">
                  No results found for "<span className="text-foreground font-medium">{query}</span>"
                </p>
                <Link
                  to={`/search?q=${encodeURIComponent(query.trim())}`}
                  onClick={() => { 
                    addSearch(query.trim());
                    close(); 
                    setShowRecent(false);
                    setShowSuggestions(false);
                    onClose?.(); 
                  }}
                  className="inline-block mt-2 text-sm text-primary hover:underline"
                >
                  Try advanced search
                </Link>
              </div>
            )}

            {/* Quick Suggestions for New Users */}
            {showQuickSuggestions && (
              <div className="max-h-[400px] overflow-y-auto">
                {/* Popular Search Terms */}
                <div className="p-3 border-b border-border/50">
                  <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 mb-3">
                    <TrendingUp className="w-3 h-3" />
                    Popular Searches
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {popularSearchTerms.slice(0, 6).map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.button
                          key={item.term}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.03 }}
                          onClick={() => handleSuggestionClick(item.term)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground text-xs transition-colors"
                        >
                          <Icon className="w-3 h-3 text-muted-foreground" />
                          {item.term}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Trending Places */}
                <div className="p-3">
                  <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 mb-3">
                    <Sparkles className="w-3 h-3" />
                    Trending Destinations
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {trendingPlaces.slice(0, 4).map((place, index) => {
                      const Icon = typeIcons[place.type];
                      return (
                        <motion.button
                          key={place.id}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => handleTrendingClick(place.url)}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/80 transition-colors text-left"
                        >
                          <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                            <img
                              src={place.image}
                              alt={place.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{place.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{place.subtitle.split('•')[0]}</p>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Explore All */}
                <Link
                  to="/search"
                  onClick={() => { 
                    close(); 
                    setShowSuggestions(false);
                    onClose?.(); 
                  }}
                  className="flex items-center justify-center gap-2 p-3 border-t border-border/50 text-sm text-primary hover:bg-secondary/50 transition-colors"
                >
                  Explore all destinations
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
