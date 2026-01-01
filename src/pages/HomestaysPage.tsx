import { motion, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { homestays } from "@/data/homestays";
import { MapPin, ExternalLink, Home } from "lucide-react";

const HomestaysPage = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Homestays in Himachal Pradesh - Authentic Village Stays | Local Himachal</title>
        <meta name="description" content="Experience authentic Himachali hospitality. Stay with local families in traditional homes, enjoy home-cooked meals, and live the mountain life." />
        <meta name="keywords" content="Himachal homestays, village stays, authentic accommodation, local families, Spiti homestay, Tirthan homestay" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-cedar-brown overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://assets.cntraveller.in/photos/60ba23f4f27d46df614fc8e0/master/w_1600%2Cc_limit/Nabakov-Cottage-866x578.jpg"
              alt="Himachali Homestay"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-cedar-brown/60 to-cedar-brown" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Home className="w-5 h-5 text-primary-foreground/70" />
                <span className="text-sm tracking-[0.2em] uppercase text-primary-foreground/70 font-body">
                  Stay Local
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4 md:mb-6 leading-tight">
                Village Homestays
              </h1>
              <p className="font-body text-base sm:text-lg text-primary-foreground/80 mb-6 md:mb-8 leading-relaxed max-w-2xl">
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

        {/* Homestays Grid */}
        <section className="py-10 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {homestays.map((homestay) => (
                <motion.a
                  key={homestay.id}
                  href={homestay.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="group flex flex-col bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={homestay.image}
                      alt={homestay.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-body font-medium text-foreground">
                      {homestay.priceRange}
                    </div>
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-3.5 h-3.5 text-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 md:p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-body mb-2">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{homestay.village}, {homestay.district}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {homestay.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                      {homestay.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-xs font-medium text-primary font-body">
                        View Stay
                      </span>
                      <ExternalLink className="w-4 h-4 text-primary transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Note Section */}
        <section className="py-10 md:py-14 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                All homestay links redirect to external booking platforms. 
                Prices and availability may vary. We recommend contacting the host directly for the best experience.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomestaysPage;
