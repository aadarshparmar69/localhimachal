import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { treks } from "@/data/treks";
import { districts } from "@/data/districts";
import { Clock, Mountain, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SEOHead } from "@/components/SEOHead";
import { PAGE_SEO, SITE_CONFIG, getBreadcrumbSchema } from "@/lib/seo";

const difficultyColors = {
  Easy: "bg-primary/10 text-primary border-primary/20",
  Moderate: "bg-accent/10 text-accent border-accent/20",
  Hard: "bg-destructive/10 text-destructive border-destructive/20",
};

const TreksPage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("All");

  const filteredTreks = treks.filter((trek) => {
    const difficultyMatch = selectedDifficulty === "All" || trek.difficulty === selectedDifficulty;
    const districtMatch = selectedDistrict === "All" || trek.district === selectedDistrict;
    return difficultyMatch && districtMatch;
  });

  const difficulties = ["All", "Easy", "Moderate", "Hard"];

  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Treks", url: `${SITE_CONFIG.url}/treks` }
  ];

  return (
    <>
      <SEOHead
        title={PAGE_SEO.treks.title}
        description={PAGE_SEO.treks.description}
        keywords={PAGE_SEO.treks.keywords}
        url="/treks"
        schemas={[getBreadcrumbSchema(breadcrumbs)]}
      />

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://madtrek.com/wp-content/uploads/2023/04/Inderhar-Pass-Trek-Pic.webp"
              alt="Trekking in Himachal"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4 md:mb-6 leading-tight">
                Himalayan Treks
              </h1>
              <p className="font-body text-base sm:text-lg text-primary-foreground/80 mb-6 md:mb-8 leading-relaxed">
                From gentle forest walks to challenging high-altitude expeditions, 
                find your perfect trail in the mountains of Himachal Pradesh.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-primary-foreground/70 font-body text-xs sm:text-sm">
                <span>{treks.length} Treks</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/50" />
                <span>All Difficulty Levels</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/50 hidden sm:block" />
                <span className="hidden sm:inline">Expert Guides</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-16 md:top-20 z-30 bg-background/95 backdrop-blur-xl border-b border-border py-3 md:py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Filter className="w-4 h-4 flex-shrink-0" />
                <span className="font-body text-xs md:text-sm">Filters:</span>
              </div>
              
              {/* Difficulty Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={cn(
                      "px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-body font-medium transition-all flex-shrink-0 min-h-[36px] touch-manipulation",
                      selectedDifficulty === difficulty
                        ? "bg-[#3c431e] text-white"
                        : "bg-secondary text-secondary-foreground active:bg-secondary/80 md:hover:bg-secondary/80"
                    )}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>

              {/* District Filter */}
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="px-3 md:px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-body text-xs md:text-sm border-0 focus:ring-2 focus:ring-primary min-h-[36px] touch-manipulation"
              >
                <option value="All">All Districts</option>
                {districts.map((district) => (
                  <option key={district.slug} value={district.slug}>
                    {district.name}
                  </option>
                ))}
              </select>

              <span className="font-body text-xs md:text-sm text-muted-foreground md:ml-auto">
                {filteredTreks.length} treks found
              </span>
            </div>
          </div>
        </section>

        {/* Treks Grid */}
        <section className="py-10 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredTreks.map((trek, index) => (
                <motion.div
                  key={trek.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Link
                    to={`/trek/${trek.slug}`}
                    className="group block bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-card active:scale-[0.98] md:hover:shadow-elevated transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={trek.image}
                        alt={trek.name}
                        className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 md:top-4 left-3 md:left-4">
                        <span className={cn(
                          "px-2.5 md:px-3 py-1 rounded-full text-xs font-body font-medium border",
                          difficultyColors[trek.difficulty]
                        )}>
                          {trek.difficulty}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="font-display text-lg md:text-xl font-semibold text-card-foreground mb-2 md:group-hover:text-primary transition-colors">
                        {trek.name}
                      </h3>
                      <p className="font-body text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2">
                        {trek.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground font-body">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                          <span>{trek.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Mountain className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                          <span>{trek.altitude}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                          <span>{trek.bestSeason}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredTreks.length === 0 && (
              <div className="text-center py-12 md:py-16">
                <p className="font-body text-muted-foreground mb-4">
                  No treks found matching your filters.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedDifficulty("All");
                    setSelectedDistrict("All");
                  }}
                  className="min-h-[44px] touch-manipulation"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TreksPage;
