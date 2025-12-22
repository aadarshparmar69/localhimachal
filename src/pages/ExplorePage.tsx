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

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1920&q=80"
              alt="Himachal Mountains"
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
                Explore Himachal
              </h1>
              <p className="font-body text-lg text-primary-foreground/80 mb-8">
                Twelve unique districts, each with its own character, culture, and hidden treasures. 
                From the high-altitude deserts of Spiti to the lush valleys of Kullu, 
                discover the diversity that makes Himachal special.
              </p>
              <div className="flex items-center gap-6 text-primary-foreground/70 font-body text-sm">
                <span>12 Districts</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/50" />
                <span>100+ Hidden Places</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/50" />
                <span>Endless Stories</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Districts Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {districts.map((district, index) => (
                <motion.div
                  key={district.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/district/${district.slug}`}
                    className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={district.image}
                        alt={district.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h2 className="font-display text-2xl font-semibold text-primary-foreground mb-1">
                          {district.name}
                        </h2>
                        <p className="font-body text-sm text-primary-foreground/80 italic">
                          "{district.tagline}"
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="font-body text-muted-foreground mb-4 line-clamp-2">
                        {district.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground font-body">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{district.altitude}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{district.bestTime}</span>
                          </div>
                        </div>
                        <span className="flex items-center gap-1 text-primary font-body font-medium text-sm group-hover:gap-2 transition-all">
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
