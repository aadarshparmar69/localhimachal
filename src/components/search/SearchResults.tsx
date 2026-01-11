import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, MapPin, Mountain, Home, Sparkles } from "lucide-react";
import { SearchResult } from "@/hooks/useSearch";
import { SearchResultCard } from "./SearchResultCard";

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  isFiltered: boolean;
}

const popularSearches = [
  { term: "Spiti Valley", icon: MapPin },
  { term: "Triund Trek", icon: Mountain },
  { term: "Jibhi", icon: Sparkles },
  { term: "Homestay Tirthan", icon: Home },
  { term: "Chandratal", icon: Mountain },
  { term: "Kinnaur", icon: MapPin },
];

export const SearchResults = ({ results, query, isFiltered }: SearchResultsProps) => {
  if (!query && !isFiltered) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <Compass className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
          Discover Himachal Pradesh
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Search for destinations, treks, homestays, and hidden gems across all 12 districts
        </p>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground mb-4">Popular searches</p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularSearches.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.term}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground text-sm transition-colors"
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  {item.term}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  }

  if (results.length === 0) {
    return (
      <motion.div
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
        <p className="text-muted-foreground max-w-md mx-auto">
          {query 
            ? `We couldn't find anything matching "${query}". Try adjusting your search or filters.`
            : "Try adjusting your filters to see more results."
          }
        </p>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={query + results.length}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-4"
      >
        <p className="text-sm text-muted-foreground">
          Found <span className="font-semibold text-foreground">{results.length}</span> result{results.length !== 1 ? 's' : ''}
          {query && <> for "<span className="font-semibold text-foreground">{query}</span>"</>}
        </p>
        
        <div className="grid gap-4">
          {results.map((result, index) => (
            <SearchResultCard key={`${result.type}-${result.id}`} result={result} index={index} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
