import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { districts } from "@/data/districts";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const ExplorePage = () => {
  return (
    <>
      <Helmet>
        <title>Explore Himachal Pradesh - All 12 Districts | Local Himachal</title>
        <meta name="description" content="Explore all 12 districts of Himachal Pradesh. From Kinnaur to Kangra, discover hidden gems, local culture, and authentic experiences in each region." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://i0.wp.com/lahimalaya.com/wp-content/uploads/2020/03/Mountain-Peaks.jpg?fit=1920%2C1280&ssl=1"
              alt="Himachal Mountains"
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
                Explore Himachal
              </h1>
              <p className="font-body text-base sm:text-lg text-primary-foreground/80 mb-6 md:mb-8 leading-relaxed">
                Twelve unique districts, each with its own character, culture, and hidden treasures. 
                From the high-altitude deserts of Spiti to the lush valleys of Kullu, 
                discover the diversity that makes Himachal special.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-primary-foreground/70 font-body text-xs sm:text-sm">
                <span>12 Districts</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/50" />
                <span>100+ Hidden Places</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/50 hidden sm:block" />
                <span className="hidden sm:inline">Endless Stories</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Districts Grid */}
        <section className="py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {districts.map((district, index) => (
                <motion.div
                  key={district.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Link
                    to={`/district/${district.slug}`}
                    className="group block bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-card active:scale-[0.98] md:hover:shadow-elevated transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={district.image}
                        alt={district.name}
                        className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <h2 className="font-display text-xl sm:text-2xl font-semibold text-primary-foreground mb-1">
                          {district.name}
                        </h2>
                        <p className="font-body text-xs sm:text-sm text-primary-foreground/80 italic line-clamp-1">
                          "{district.tagline}"
                        </p>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <p className="font-body text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                        {district.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground font-body">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="truncate">{district.altitude}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="truncate">{district.bestTime}</span>
                          </div>
                        </div>
                        <span className="flex items-center gap-1 text-primary font-body font-medium text-sm md:group-hover:gap-2 transition-all">
                          Explore
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ExplorePage;
