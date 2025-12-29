import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getHiddenPlaceBySlug } from "@/data/hiddenPlaces";
import { getTrekBySlug } from "@/data/treks";
import { getHomestayBySlug } from "@/data/homestays";
import { MapPin, Calendar, Mountain, ArrowLeft, Clock, AlertTriangle, Compass, Heart, Route, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, QuoteFadeIn } from "@/components/animations/ScrollReveal";

const HiddenPlacePage = () => {
  const { districtSlug, placeSlug } = useParams<{ districtSlug: string; placeSlug: string }>();
  const place = getHiddenPlaceBySlug(placeSlug || "");

  if (!place) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-display text-2xl sm:text-4xl font-semibold text-foreground mb-4">
              Place Not Found
            </h1>
            <Link to="/explore">
              <Button variant="default" className="min-h-[44px]">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Explore
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const nearbyTreks = place.nearbyTreks.map(slug => getTrekBySlug(slug)).filter(Boolean);
  const nearbyHomestays = place.nearbyHomestays.map(slug => getHomestayBySlug(slug)).filter(Boolean);

  return (
    <>
      <Helmet>
        <title>{place.name}, {place.district} - Hidden Places | Local Himachal</title>
        <meta name="description" content={`Discover ${place.name} in ${place.district}: ${place.tagline}. An off-the-beaten-path destination in Himachal Pradesh.`} />
        <meta name="keywords" content={`${place.name}, hidden places ${place.district}, offbeat Himachal, ${place.district} travel guide`} />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section - Mobile optimized */}
        <section className="relative h-[65vh] sm:h-[80vh] min-h-[450px] sm:min-h-[600px] overflow-hidden">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to={`/district/${districtSlug}`}
                  className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground font-body text-sm mb-4 sm:mb-6 transition-colors min-h-[44px]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to {place.district}
                </Link>
                <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-xs sm:text-sm font-body mb-3 sm:mb-4">
                  Hidden Place
                </div>
                <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-semibold text-primary-foreground mb-2 sm:mb-4">
                  {place.name}
                </h1>
                <p className="font-display text-lg sm:text-xl md:text-2xl text-accent italic mb-4 sm:mb-6">
                  "{place.tagline}"
                </p>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-primary-foreground/80 font-body text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{place.district}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{place.altitude}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Emotional Opening */}
              <ScrollReveal>
                <div className="prose prose-lg max-w-none mb-12 sm:mb-16">
                  {place.emotionalOpening.split('\n\n').map((para, i) => (
                    <p key={i} className={`font-body text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6 ${i === 0 ? 'first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-display first-letter:text-primary first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 first-letter:mt-1' : ''}`}>
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Location & Landscape */}
              <ScrollReveal delay={0.1}>
                <div className="mb-12 sm:mb-16">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
                      Location & Landscape
                    </h2>
                  </div>
                  {place.locationLandscape.split('\n\n').map((para, i) => (
                    <p key={i} className="font-body text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Village Life */}
              <ScrollReveal delay={0.1}>
                <div className="mb-12 sm:mb-16">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
                      Village & Local Life
                    </h2>
                  </div>
                  {place.villageLife.split('\n\n').map((para, i) => (
                    <p key={i} className="font-body text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Why Hidden */}
              <ScrollReveal delay={0.1}>
                <div className="mb-12 sm:mb-16 p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-secondary/50">
                  <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4">
                    What Makes It Hidden
                  </h2>
                  {place.whyHidden.split('\n\n').map((para, i) => (
                    <p key={i} className="font-body text-muted-foreground leading-relaxed mb-4 last:mb-0 text-sm sm:text-base">
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Practical Info Grid */}
              <ScrollReveal delay={0.1}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
                  <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-card shadow-soft">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">Best Time to Visit</h3>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-muted-foreground">{place.bestTimeToVisit}</p>
                  </div>
                  <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-card shadow-soft">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">How to Reach</h3>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-muted-foreground">{place.howToReach}</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Responsible Travel */}
              <ScrollReveal delay={0.1}>
                <div className="mb-12 sm:mb-16 p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-destructive/5 border border-destructive/20">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-destructive flex-shrink-0" />
                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                      Responsible Travel Tips
                    </h2>
                  </div>
                  {place.responsibleTravel.split('\n\n').map((para, i) => (
                    <p key={i} className="font-body text-muted-foreground leading-relaxed mb-4 last:mb-0 text-sm sm:text-base">
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Nearby Treks & Homestays */}
              {(nearbyTreks.length > 0 || nearbyHomestays.length > 0) && (
                <ScrollReveal delay={0.1}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {nearbyTreks.length > 0 && (
                      <div>
                        <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                          <Route className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          Nearby Treks
                        </h3>
                        <div className="space-y-3">
                          {nearbyTreks.map((trek) => trek && (
                            <Link
                              key={trek.id}
                              to={`/trek/${trek.slug}`}
                              className="block p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card hover:shadow-card transition-shadow min-h-[44px]"
                            >
                              <div className="font-display font-semibold text-foreground text-sm sm:text-base">{trek.name}</div>
                              <div className="font-body text-xs sm:text-sm text-muted-foreground">{trek.difficulty} • {trek.duration}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    {nearbyHomestays.length > 0 && (
                      <div>
                        <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                          <Home className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          Nearby Homestays
                        </h3>
                        <div className="space-y-3">
                          {nearbyHomestays.map((homestay) => homestay && (
                            <Link
                              key={homestay.id}
                              to={`/homestay/${homestay.slug}`}
                              className="block p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card hover:shadow-card transition-shadow min-h-[44px]"
                            >
                              <div className="font-display font-semibold text-foreground text-sm sm:text-base">{homestay.name}</div>
                              <div className="font-body text-xs sm:text-sm text-muted-foreground">{homestay.village} • {homestay.priceRange}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HiddenPlacePage;