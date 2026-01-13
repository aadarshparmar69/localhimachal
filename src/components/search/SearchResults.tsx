import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { SearchResult } from "@/hooks/useSearch";
import { SearchResultCard } from "./SearchResultCard";
import { SearchSuggestions } from "./SearchSuggestions";

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  isFiltered: boolean;
  onSearchClick?: (term: string) => void;
}

export const SearchResults = ({ results, query, isFiltered, onSearchClick }: SearchResultsProps) => {
  // Show suggestions when no query and no filters
  if (!query && !isFiltered) {
    return <SearchSuggestions onSearchClick={onSearchClick} />;
  }

  // No results found
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
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          {query 
            ? `We couldn't find anything matching "${query}". Try adjusting your search or filters.`
            : "Try adjusting your filters to see more results."
          }
        </p>
        
        {/* Show suggestions even when no results */}
        <div className="mt-12 text-left">
          <SearchSuggestions onSearchClick={onSearchClick} />
        </div>
      </motion.div>
    );
  }

  // Show results
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={query + results.length}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Found <span className="font-semibold text-foreground">{results.length}</span> result{results.length !== 1 ? 's' : ''}
            {query && <> for "<span className="font-semibold text-foreground">{query}</span>"</>}
          </p>
        </div>
        
        <div className="grid gap-4">
          {results.map((result, index) => (
            <SearchResultCard 
              key={`${result.type}-${result.id}`} 
              result={result} 
              index={index} 
              query={query}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
