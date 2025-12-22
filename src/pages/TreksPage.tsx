import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { treks, Trek } from "@/data/treks";
import { districts } from "@/data/districts";
import { Clock, Mountain, Calendar, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

  return (
    <>
      <Helmet>
        <title>Treks in Himachal Pradesh - Complete Trekking Guide | Local Himachal</title>
        <meta name="description" content="Discover the best treks in Himachal Pradesh. From easy Triund to challenging Pin Parvati Pass. Complete guide with difficulty levels, duration, and best seasons." />
        <meta name="keywords" content="Himachal treks, trekking Himachal Pradesh, Hampta Pass, Triund trek, Spiti treks, adventure Himachal" />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=80"
              alt="Trekking in Himachal"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground mb-6">
                Himalayan Treks
              </h1>
              <p className="font-body text-lg text-primary-foreground/80 mb-8">
                From gentle forest walks to challenging high-altitude expeditions, 
                find your perfect trail in the mountains of Himachal Pradesh.
              </p>
              <div className="flex items-center gap-6 text-primary-foreground/70 font-body text-sm">
                <span>{treks.length} Treks</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/50" />
                <span>All Difficulty Levels</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/50" />
                <span>Expert Guides</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-xl border-b border-border py-4">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Filter className="w-4 h-4" />
                <span className="font-body text-sm">Filters:</span>
              </div>
              
              {/* Difficulty Filter */}
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-body font-medium transition-all",
                      selectedDifficulty === difficulty
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
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
                className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-body text-sm border-0 focus:ring-2 focus:ring-primary"
              >
                <option value="All">All Districts</option>
                {districts.map((district) => (
                  <option key={district.slug} value={district.slug}>
                    {district.name}
                  </option>
                ))}
              </select>

              <span className="ml-auto font-body text-sm text-muted-foreground">
                {filteredTreks.length} treks found
              </span>
            </div>
          </div>
        </section>

        {/* Treks Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreks.map((trek, index) => (
                <motion.div
                  key={trek.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/trek/${trek.slug}`}
                    className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={trek.image}
                        alt={trek.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={cn(
                          "px-3 py-1 rounded-full text-xs font-body font-medium border",
                          difficultyColors[trek.difficulty]
                        )}>
                          {trek.difficulty}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                        {trek.name}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                        {trek.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-body">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{trek.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Mountain className="w-4 h-4" />
                          <span>{trek.altitude}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{trek.bestSeason}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredTreks.length === 0 && (
              <div className="text-center py-16">
                <p className="font-body text-muted-foreground mb-4">
                  No treks found matching your filters.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedDifficulty("All");
                    setSelectedDistrict("All");
                  }}
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
