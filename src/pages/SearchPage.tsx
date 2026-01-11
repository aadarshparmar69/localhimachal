import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { SearchInput } from "@/components/search/SearchInput";
import { SearchFilters } from "@/components/search/SearchFilters";
import { SearchResults } from "@/components/search/SearchResults";
import { useSearch } from "@/hooks/useSearch";
import { SITE_CONFIG, getBreadcrumbSchema } from "@/lib/seo";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  
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

  const resultCounts = {
    all: results.length,
    destinations: resultsByType.districts.length,
    treks: resultsByType.treks.length,
    homestays: resultsByType.homestays.length,
    hiddenGems: resultsByType.hiddenGems.length,
  };

  const hasFilters = difficultyFilter !== null || districtFilter !== null;

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Search", url: `${SITE_CONFIG.url}/search` },
  ]);

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
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Explore Himachal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Search across destinations, treks, homestays, and hidden gems to plan your perfect journey
          </p>
          
          <div className="max-w-2xl mx-auto">
            <SearchInput
              value={query}
              onChange={setQuery}
              autoFocus
              size="large"
              placeholder="Search for Spiti, Triund trek, homestays..."
            />
          </div>
        </motion.div>

        {/* Filters */}
        <div className="mb-8">
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

        {/* Results */}
        <SearchResults
          results={results}
          query={query}
          isFiltered={hasFilters || category !== "all"}
        />
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;