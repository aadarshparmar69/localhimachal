import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Mountain, Compass, Filter, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { hiddenGems, hiddenGemCategories, HiddenGem } from "@/data/hiddenGems";
import { cn } from "@/lib/utils";
const difficultyColors = {
  Easy: "bg-green-500/20 text-green-700 border-green-500/30",
  Moderate: "bg-amber-500/20 text-amber-700 border-amber-500/30",
  Challenging: "bg-red-500/20 text-red-700 border-red-500/30"
};
const categoryIcons: Record<string, string> = {
  valley: "🏔️",
  village: "🏘️",
  lake: "💧",
  pass: "⛰️",
  meadow: "🌿",
  waterfall: "💦",
  trek: "🥾"
};
export default function HiddenGemsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const filteredGems = hiddenGems.filter(gem => {
    if (selectedCategory && gem.category !== selectedCategory) return false;
    if (selectedDifficulty && gem.difficulty !== selectedDifficulty) return false;
    return true;
  });

  // Group gems by region for display
  const gemsByRegion: Record<string, HiddenGem[]> = {};
  filteredGems.forEach(gem => {
    const region = gem.district;
    if (!gemsByRegion[region]) {
      gemsByRegion[region] = [];
    }
    gemsByRegion[region].push(gem);
  });
  return <>
      <Helmet>
        <title>Hidden Gems of Himachal Pradesh | Offbeat Destinations | Local Himachal</title>
        <meta name="description" content="Discover Himachal's best-kept secrets - remote valleys, sacred lakes, ancient villages, and mountain passes that remain untouched by mass tourism." />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-12 md:pt-16 pb-12 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent bg-stone-100" />
          <div className="absolute top-20 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="outline" className="mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium border-primary/30 text-primary">
                  <Mountain className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                  Beyond Tourist Trails
                </Badge>
                
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 tracking-tight leading-tight">
                  Hidden Gems of
                  <span className="text-primary block mt-1 md:mt-2">Himachal Pradesh</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 px-2">
                  Some places remain special because they resist easy access. These are the valleys, villages, and mountain passes where life moves at its own pace.
                </p>

                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl md:rounded-2xl p-4 md:p-6 max-w-2xl mx-auto">
                  <p className="text-sm md:text-base text-muted-foreground italic">
                    "What makes a place truly hidden is not distance, but the way it asks to be approached—slowly, respectfully, and with genuine intention."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Filters */}
        <section className="py-4 md:py-8 border-y border-border/50 bg-secondary/30 sticky top-16 md:top-20 z-30 backdrop-blur-xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium text-muted-foreground">Filter by:</span>
              </div>
              
              {/* Category filters - horizontal scroll on mobile */}
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
                <Button variant={selectedCategory === null ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(null)} className={cn("text-xs flex-shrink-0 min-h-[36px] touch-manipulation", selectedCategory === null && "bg-[#3c431e] text-white hover:bg-[#3c431e]/90")}>
                  All Places
                </Button>
                {hiddenGemCategories.map(cat => <Button key={cat.id} variant={selectedCategory === cat.id ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(cat.id)} className={cn("text-xs flex-shrink-0 min-h-[36px] touch-manipulation", selectedCategory === cat.id && "bg-[#3c431e] text-white hover:bg-[#3c431e]/90")}>
                    {cat.icon} {cat.name}
                  </Button>)}
              </div>

              {/* Difficulty filters */}
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
                <Button variant={selectedDifficulty === null ? "default" : "outline"} size="sm" onClick={() => setSelectedDifficulty(null)} className={cn("text-xs flex-shrink-0 min-h-[36px] touch-manipulation", selectedDifficulty === null && "bg-[#3c431e] text-white hover:bg-[#3c431e]/90")}>
                  Any Difficulty
                </Button>
                {["Easy", "Moderate", "Challenging"].map(diff => <Button key={diff} variant={selectedDifficulty === diff ? "default" : "outline"} size="sm" onClick={() => setSelectedDifficulty(diff)} className={cn("text-xs flex-shrink-0 min-h-[36px] touch-manipulation", selectedDifficulty === diff && "bg-[#3c431e] text-white hover:bg-[#3c431e]/90")}>
                    {diff}
                  </Button>)}
              </div>
            </div>
          </div>
        </section>

        {/* Results count */}
        <section className="py-4 md:py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs md:text-sm text-muted-foreground text-center">
              Showing <span className="font-semibold text-foreground">{filteredGems.length}</span> hidden destinations
            </p>
          </div>
        </section>

        {/* Hidden Gems Grid by Region */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {Object.entries(gemsByRegion).map(([region, gems]) => <ScrollReveal key={region}>
                <div className="mb-12 md:mb-16">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">{region} Region</h2>
                      <p className="text-xs md:text-sm text-muted-foreground">{gems.length} hidden {gems.length === 1 ? 'destination' : 'destinations'}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {gems.map(gem => <Link key={gem.id} to={`/hidden-gems/${gem.slug}`}>
                        <motion.div whileTap={{
                    scale: 0.98
                  }} className="group bg-card border border-border/50 rounded-xl md:rounded-2xl overflow-hidden active:shadow-elevated md:hover:shadow-elevated md:hover:border-primary/30 transition-all duration-300">
                          {/* Image */}
                          <div className="relative h-40 sm:h-48 overflow-hidden">
                            <img src={gem.image} alt={gem.name} className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105" loading="lazy" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            
                            {/* Category badge */}
                            <div className="absolute top-3 md:top-4 left-3 md:left-4">
                              <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs">
                                {categoryIcons[gem.category]} {gem.category}
                              </Badge>
                            </div>

                            {/* Difficulty badge */}
                            <div className="absolute top-3 md:top-4 right-3 md:right-4">
                              <Badge className={cn("border text-xs", difficultyColors[gem.difficulty])}>
                                {gem.difficulty}
                              </Badge>
                            </div>

                            {/* Name overlay */}
                            <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                              <h3 className="font-display text-lg md:text-xl font-bold text-white mb-1">
                                {gem.name}
                              </h3>
                              <div className="flex items-center gap-2 text-white/80 text-xs md:text-sm">
                                <MapPin className="w-3 h-3" />
                                <span>{gem.district}</span>
                                <span className="mx-1">•</span>
                                <span>{gem.altitude}</span>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-4 md:p-5">
                            <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                              {gem.shortDescription}
                            </p>

                            <p className="text-xs italic text-primary/80 mb-3 md:mb-4 line-clamp-2">
                              "{gem.poeticQuote}"
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Compass className="w-3 h-3" />
                                <span>{gem.bestTime}</span>
                              </div>
                              
                              <div className="flex items-center gap-1 text-primary text-xs md:text-sm font-medium md:group-hover:gap-2 transition-all">
                                <span>Explore</span>
                                <ChevronRight className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </Link>)}
                  </div>
                </div>
              </ScrollReveal>)}
          </div>
        </section>

        {/* Responsible Travel Note */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
                  Travel Responsibly
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  These places remain special because they have avoided overexposure. When you visit, you become part of their story. Travel slowly, respect local customs, and remember that some moments are meant to be experienced, not broadcasted.
                </p>
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                  <Badge variant="outline" className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">Support Local Homestays</Badge>
                  <Badge variant="outline" className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">Carry Back All Waste</Badge>
                  <Badge variant="outline" className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">Respect Sacred Sites</Badge>
                  <Badge variant="outline" className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">Travel Slowly</Badge>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>;
}