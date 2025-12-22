import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { homestays } from "@/data/homestays";
import { districts } from "@/data/districts";
import { MapPin, Users, Utensils, Calendar, Filter, ArrowRight } from "lucide-react";
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

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-cedar-brown overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=1920&q=80"
              alt="Himachali Homestay"
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
                Village Homestays
              </h1>
              <p className="font-body text-lg text-primary-foreground/80 mb-8">
                Experience authentic Himachali hospitality. Wake up to mountain views, 
                share meals with local families, and become part of village life.
              </p>
              <div className="flex items-center gap-6 text-primary-foreground/70 font-body text-sm">
                <span>{homestays.length} Homestays</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/50" />
                <span>Traditional Homes</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/50" />
                <span>Home-cooked Meals</span>
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
                <span className="font-body text-sm">Filter by District:</span>
              </div>
              
              {/* District Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedDistrict("All")}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-body font-medium transition-all",
                    selectedDistrict === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  All
                </button>
                {districts.slice(0, 5).map((district) => (
                  <button
                    key={district.slug}
                    onClick={() => setSelectedDistrict(district.slug)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-body font-medium transition-all",
                      selectedDistrict === district.slug
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                  >
                    {district.name}
                  </button>
                ))}
              </div>

              <span className="ml-auto font-body text-sm text-muted-foreground">
                {filteredHomestays.length} homestays found
              </span>
            </div>
          </div>
        </section>

        {/* Homestays Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredHomestays.map((homestay, index) => (
                <motion.div
                  key={homestay.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/homestay/${homestay.slug}`}
                    className="group flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
                  >
                    <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img
                        src={homestay.image}
                        alt={homestay.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-body font-medium text-foreground">
                        {homestay.priceRange}
                      </div>
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-body mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{homestay.village}, {homestay.district.charAt(0).toUpperCase() + homestay.district.slice(1)}</span>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                          {homestay.name}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                          {homestay.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-body mb-4">
                          <Users className="w-4 h-4" />
                          <span>Host: {homestay.hostFamily}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {homestay.facilities.slice(0, 3).map((facility) => (
                          <span
                            key={facility}
                            className="px-2 py-1 rounded-lg bg-secondary text-xs font-body text-secondary-foreground"
                          >
                            {facility}
                          </span>
                        ))}
                        {homestay.facilities.length > 3 && (
                          <span className="px-2 py-1 rounded-lg bg-secondary text-xs font-body text-secondary-foreground">
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
              <div className="text-center py-16">
                <p className="font-body text-muted-foreground mb-4">
                  No homestays found in this district yet.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSelectedDistrict("All")}
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
