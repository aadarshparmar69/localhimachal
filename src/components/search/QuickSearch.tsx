import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, MapPin, Mountain, Home, Sparkles, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useSearch, SearchResult } from "@/hooks/useSearch";

interface QuickSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const typeIcons = {
  district: MapPin,
  trek: Mountain,
  homestay: Home,
  "hidden-gem": Sparkles,
};

const typeLabels = {
  district: "District",
  trek: "Trek",
  homestay: "Homestay",
  "hidden-gem": "Hidden Gem",
};

export const QuickSearch = ({ open, onOpenChange }: QuickSearchProps) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const { query, setQuery, results } = useSearch();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Focus input when dialog opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [open, setQuery]);

  // Reset selection when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const maxIndex = Math.min(results.length - 1, 7);
    
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, maxIndex));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        } else if (query) {
          navigate(`/search?q=${encodeURIComponent(query)}`);
          onOpenChange(false);
        }
        break;
      case "Escape":
        onOpenChange(false);
        break;
    }
  };

  const handleSelect = (result: SearchResult) => {
    if (result.url.startsWith("http")) {
      window.open(result.url, "_blank");
    } else {
      navigate(result.url);
    }
    onOpenChange(false);
  };

  const displayResults = results.slice(0, 8);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 gap-0 overflow-hidden bg-background/95 backdrop-blur-xl border-border/50">
        <VisuallyHidden>
          <DialogTitle>Search Himachal Pradesh</DialogTitle>
        </VisuallyHidden>
        
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50">
          <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <Input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search destinations, treks, homestays..."
            className="flex-1 border-0 shadow-none focus-visible:ring-0 text-base placeholder:text-muted-foreground/60 bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-full hover:bg-secondary transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          <AnimatePresence mode="wait">
            {query && displayResults.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-2"
              >
                {displayResults.map((result, index) => {
                  const Icon = typeIcons[result.type];
                  const isSelected = index === selectedIndex;

                  return (
                    <motion.button
                      key={`${result.type}-${result.id}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      onClick={() => handleSelect(result)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`
                        w-full flex items-center gap-4 px-4 py-3 text-left
                        transition-colors duration-150
                        ${isSelected ? "bg-primary/10" : "hover:bg-secondary/50"}
                      `}
                    >
                      <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-secondary">
                        <img
                          src={result.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground truncate">
                            {result.title}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Icon className="w-3 h-3" />
                            {typeLabels[result.type]}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {result.subtitle}
                        </p>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-opacity ${isSelected ? "opacity-100 text-primary" : "opacity-0"}`} />
                    </motion.button>
                  );
                })}
                
                {results.length > 8 && (
                  <button
                    onClick={() => {
                      navigate(`/search?q=${encodeURIComponent(query)}`);
                      onOpenChange(false);
                    }}
                    className="w-full px-4 py-3 text-sm text-primary font-medium hover:bg-secondary/50 transition-colors flex items-center justify-center gap-2"
                  >
                    View all {results.length} results
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </motion.div>
            ) : query ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center text-muted-foreground"
              >
                <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p>No results found for "{query}"</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-8 px-4"
              >
                <p className="text-sm text-muted-foreground mb-4">Try searching for:</p>
                <div className="flex flex-wrap gap-2">
                  {["Spiti Valley", "Triund Trek", "Jibhi", "Homestays", "Kinnaur"].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 rounded-full bg-secondary text-sm hover:bg-secondary/80 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground bg-secondary/30">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-background border text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-background border text-[10px]">↓</kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-background border text-[10px]">↵</kbd>
              to select
            </span>
          </div>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-background border text-[10px]">esc</kbd>
            to close
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};
