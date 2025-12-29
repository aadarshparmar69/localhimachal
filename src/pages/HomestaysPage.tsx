import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { homestays } from "@/data/homestays";
import { districts } from "@/data/districts";
import { MapPin, Users, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HomestaysPage = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("All");

  const filteredHomestays = homestays.filter((homestay) => {
    return selectedDistrict === "All" || homestay.district === selectedDistrict;
  });

  return (
    <>
      <Helmet>
        <title>Homestays in Himachal Pradesh - Authentic Village Stays | Local Himachal</title>
        <meta name="description" content="Experience authentic Himachali hospitality. Stay with local families in traditional homes, enjoy home-cooked meals, and live the mountain life." />
        <meta name="keywords" content="Himachal homestays, village stays, authentic accommodation, local families, Chitkul homestay, Spiti homestay" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-cedar-brown overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=1920&q=80"
              alt="Himachali Homestay"
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
                Village Homestays
              </h1>
              <p className="font-body text-base sm:text-lg text-primary-foreground/80 mb-6 md:mb-8 leading-relaxed">
                Experience authentic Himachali hospitality. Wake up to mountain views, 
                share meals with local families, and become part of village life.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-primary-foreground/70 font-body text-xs sm:text-sm">
                <span>{homestays.length} Homestays</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/50" />
                <span>Traditional Homes</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/50 hidden sm:block" />
                <span className="hidden sm:inline">Home-cooked Meals</span>
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
                <span className="font-body text-xs md:text-sm">Filter by District:</span>
              </div>
              
              {/* District Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
                <button
                  onClick={() => setSelectedDistrict("All")}
                  className={cn(
                    "px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-body font-medium transition-all flex-shrink-0 min-h-[36px] touch-manipulation",
                    selectedDistrict === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground active:bg-secondary/80 md:hover:bg-secondary/80"
                  )}
                >
                  All
                </button>
                {districts.slice(0, 5).map((district) => (
                  <button
                    key={district.slug}
                    onClick={() => setSelectedDistrict(district.slug)}
                    className={cn(
                      "px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-body font-medium transition-all flex-shrink-0 min-h-[36px] touch-manipulation",
                      selectedDistrict === district.slug
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground active:bg-secondary/80 md:hover:bg-secondary/80"
                    )}
                  >
                    {district.name}
                  </button>
                ))}
              </div>

              <span className="font-body text-xs md:text-sm text-muted-foreground md:ml-auto">
                {filteredHomestays.length} homestays found
              </span>
            </div>
          </div>
        </section>

        {/* Homestays Grid */}
        <section className="py-10 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {filteredHomestays.map((homestay, index) => (
                <motion.div
                  key={homestay.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Link
                    to={`/homestay/${homestay.slug}`}
                    className="group flex flex-col bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-card active:scale-[0.99] md:hover:shadow-elevated transition-all duration-300"
                  >
                    {/* Image - always on top for mobile */}
                    <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden">
                      <img
                        src={homestay.image}
                        alt={homestay.name}
                        className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 md:top-4 left-3 md:left-4 px-2.5 md:px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-body font-medium text-foreground">
                        {homestay.priceRange}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 md:p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-body mb-2">
                        <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="truncate">{homestay.village}, {homestay.district.charAt(0).toUpperCase() + homestay.district.slice(1)}</span>
                      </div>
                      <h3 className="font-display text-lg md:text-xl font-semibold text-card-foreground mb-2 md:group-hover:text-primary transition-colors">
                        {homestay.name}
                      </h3>
                      <p className="font-body text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2 flex-1">
                        {homestay.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-body mb-3 md:mb-4">
                        <Users className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                        <span>Host: {homestay.hostFamily}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {homestay.facilities.slice(0, 3).map((facility) => (
                          <span
                            key={facility}
                            className="px-2 py-1 rounded-md md:rounded-lg bg-secondary text-xs font-body text-secondary-foreground"
                          >
                            {facility}
                          </span>
                        ))}
                        {homestay.facilities.length > 3 && (
                          <span className="px-2 py-1 rounded-md md:rounded-lg bg-secondary text-xs font-body text-secondary-foreground">
                            +{homestay.facilities.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredHomestays.length === 0 && (
              <div className="text-center py-12 md:py-16">
                <p className="font-body text-muted-foreground mb-4">
                  No homestays found in this district yet.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSelectedDistrict("All")}
                  className="min-h-[44px] touch-manipulation"
                >
                  View All Homestays
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

export default HomestaysPage;
