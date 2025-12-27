import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getTrekBySlug } from "@/data/treks";
import { getTrekEnrichedBySlug } from "@/data/treksEnriched";
import { getHomestaysByDistrict } from "@/data/homestays";
import { 
  MapPin, Calendar, Mountain, ArrowLeft, Clock, Home, 
  Tent, Utensils, Droplets, Shield, Backpack, Leaf, Heart,
  AlertTriangle, CheckCircle, Star, Route, Thermometer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const TrekDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const trek = getTrekBySlug(slug || "");
  const trekEnriched = getTrekEnrichedBySlug(slug || "");
  
  if (!trek) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-display text-2xl sm:text-4xl font-semibold text-foreground mb-4">
              Trek Not Found
            </h1>
            <Link to="/treks">
              <Button variant="default" className="min-h-[44px]">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Treks
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const nearbyHomestays = getHomestaysByDistrict(trek.district);

  const difficultyColor = {
    Easy: "bg-green-500/20 text-green-700",
    Moderate: "bg-amber-500/20 text-amber-700",
    Hard: "bg-red-500/20 text-red-700",
    "Very Hard": "bg-red-600/20 text-red-800"
  };

  return (
    <>
      <Helmet>
        <title>{trekEnriched?.seo.title || `${trek.name} Trek - Complete Guide | Local Himachal`}</title>
        <meta name="description" content={trekEnriched?.seo.description || `${trek.name}: ${trek.description}`} />
        <meta name="keywords" content={trekEnriched?.seo.keywords?.join(", ") || `${trek.name} trek, trekking in ${trek.district}, Himachal treks`} />
      </Helmet>

      <Navbar />

      <main className="pt-16 sm:pt-20">
        {/* Hero Section - Mobile optimized */}
        <section className="relative h-[60vh] sm:h-[70vh] min-h-[400px] sm:min-h-[500px] overflow-hidden">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            src={trek.image}
            alt={trek.name}
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
                  to="/treks"
                  className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground font-body text-sm mb-4 sm:mb-6 transition-colors min-h-[44px]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Treks
                </Link>
                <div className={`inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-body mb-3 sm:mb-4 ${difficultyColor[trekEnriched?.overview.category || trek.difficulty]}`}>
                  {trekEnriched?.overview.category || trek.difficulty} Trek
                </div>
                <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-semibold text-primary-foreground mb-4 sm:mb-6">
                  {trek.name}
                </h1>
                <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-primary-foreground/80 font-body text-xs sm:text-base">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{trek.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Mountain className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{trek.altitude}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{trek.bestSeason}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="capitalize">{trek.district}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-8 sm:space-y-12">
                
                {/* Overview & Significance */}
                <ScrollReveal>
                  <div className="prose prose-lg max-w-none">
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <Star className="w-6 h-6 sm:w-7 sm:h-7 text-primary flex-shrink-0" />
                      Trek Overview & Significance
                    </h2>
                    <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {trekEnriched?.overview.significance || trek.description}
                    </p>
                  </div>
                </ScrollReveal>

                {/* Route & Trail Description */}
                {trekEnriched && (
                  <ScrollReveal delay={0.1}>
                    <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft">
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                        <Route className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                        Location, Route & Trail
                      </h2>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                            <span className="text-xs sm:text-sm text-muted-foreground font-body">Starting Point</span>
                            <p className="font-body font-medium text-foreground text-sm sm:text-base">{trekEnriched.route.startPoint}</p>
                          </div>
                          <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                            <span className="text-xs sm:text-sm text-muted-foreground font-body">Ending Point</span>
                            <p className="font-body font-medium text-foreground text-sm sm:text-base">{trekEnriched.route.endPoint}</p>
                          </div>
                        </div>
                        <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                          <span className="text-xs sm:text-sm text-muted-foreground font-body">Major Camps</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {trekEnriched.route.majorCamps.map((camp, i) => (
                              <span key={i} className="px-2 sm:px-3 py-1 bg-background rounded-full text-xs sm:text-sm font-body text-foreground">
                                {camp}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {trekEnriched.route.terrainDescription}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Best Time to Trek */}
                {trekEnriched && (
                  <ScrollReveal delay={0.15}>
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                        <Thermometer className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                        Best Time to Trek
                      </h2>
                      <div className="space-y-4">
                        <div className="bg-background/80 rounded-lg sm:rounded-xl p-3 sm:p-4">
                          <span className="text-xs sm:text-sm text-primary font-body font-medium">Ideal Months</span>
                          <p className="font-body font-semibold text-foreground text-base sm:text-lg">{trekEnriched.bestTime.idealMonths}</p>
                        </div>
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2 text-sm sm:text-base">Weather Patterns</h4>
                          <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                            {trekEnriched.bestTime.weatherPatterns}
                          </p>
                        </div>
                        <div className="bg-red-500/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-red-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                            <span className="font-body font-medium text-red-700 text-sm sm:text-base">Seasons to Avoid</span>
                          </div>
                          <p className="font-body text-red-700/80 text-sm sm:text-base">
                            {trekEnriched.bestTime.unsafeSeasons}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Difficulty, Distance & Altitude */}
                {trekEnriched && (
                  <ScrollReveal delay={0.2}>
                    <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft">
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                        <Mountain className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                        Difficulty & Distance
                      </h2>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                          <span className="text-xs sm:text-sm text-muted-foreground font-body">Total Distance</span>
                          <p className="font-body font-semibold text-foreground text-sm sm:text-base">{trekEnriched.difficulty.totalDistance}</p>
                        </div>
                        <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                          <span className="text-xs sm:text-sm text-muted-foreground font-body">Max Altitude</span>
                          <p className="font-body font-semibold text-foreground text-sm sm:text-base">{trekEnriched.difficulty.maxAltitude}</p>
                        </div>
                        <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                          <span className="text-xs sm:text-sm text-muted-foreground font-body">Daily Walking</span>
                          <p className="font-body font-semibold text-foreground text-sm sm:text-base">{trekEnriched.difficulty.dailyWalkingHours}</p>
                        </div>
                        <div className={`rounded-lg sm:rounded-xl p-3 sm:p-4 ${difficultyColor[trekEnriched.overview.category]}`}>
                          <span className="text-xs sm:text-sm opacity-80 font-body">Difficulty</span>
                          <p className="font-body font-semibold text-sm sm:text-base">{trekEnriched.overview.category}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2 flex items-center gap-2 text-sm sm:text-base">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                            Fitness Requirements
                          </h4>
                          <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                            {trekEnriched.difficulty.fitnessRequirements}
                          </p>
                        </div>
                        <div className="bg-amber-500/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-amber-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0" />
                            <span className="font-body font-medium text-amber-700 text-sm sm:text-base">Who Should Avoid</span>
                          </div>
                          <p className="font-body text-amber-700/80 text-sm sm:text-base">
                            {trekEnriched.difficulty.whoShouldAvoid}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Highlights & Unique Experiences */}
                <ScrollReveal delay={0.25}>
                  <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft">
                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                      Highlights & Experiences
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      {(trekEnriched?.highlights.landscapes || trek.highlights).map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-secondary/50">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-accent font-display font-semibold text-xs sm:text-sm">{i + 1}</span>
                          </div>
                          <span className="font-body text-foreground text-sm sm:text-base">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    {trekEnriched && (
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2 text-sm sm:text-base">Cultural Significance</h4>
                          <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                            {trekEnriched.highlights.culturalSignificance}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2 text-sm sm:text-base">What Makes This Trek Special</h4>
                          <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                            {trekEnriched.highlights.uniqueFeatures}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>

                {/* Food, Accommodation & Water */}
                {trekEnriched && (
                  <ScrollReveal delay={0.3}>
                    <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft">
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                        <Tent className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                        Food & Accommodation
                      </h2>
                      <div className="space-y-4 sm:space-y-6">
                        <div className="flex gap-3 sm:gap-4">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Tent className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-body font-medium text-foreground mb-1 text-sm sm:text-base">Stay Options</h4>
                            <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                              {trekEnriched.accommodation.stayOptions}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3 sm:gap-4">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-body font-medium text-foreground mb-1 text-sm sm:text-base">Food Arrangements</h4>
                            <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                              {trekEnriched.accommodation.foodArrangements}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3 sm:gap-4">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-body font-medium text-foreground mb-1 text-sm sm:text-base">Water Sources</h4>
                            <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                              {trekEnriched.accommodation.waterSources}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Permits, Guides & Safety */}
                {trekEnriched && (
                  <ScrollReveal delay={0.35}>
                    <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft">
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                        <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                        Permits, Guides & Safety
                      </h2>
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2 text-sm sm:text-base">Permits Required</h4>
                          <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                            {trekEnriched.permits.permitsNeeded}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2 text-sm sm:text-base">Local Guides</h4>
                          <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                            {trekEnriched.permits.localGuides}
                          </p>
                        </div>
                        <div className="bg-red-500/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-red-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                            <span className="font-body font-medium text-red-700 text-sm sm:text-base">Safety Alerts</span>
                          </div>
                          <p className="font-body text-red-700/80 text-sm sm:text-base">
                            {trekEnriched.permits.safetyAlerts}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Packing Essentials */}
                {trekEnriched && (
                  <ScrollReveal delay={0.4}>
                    <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft">
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                        <Backpack className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                        Packing Essentials
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {trekEnriched.packing.essentials.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 sm:gap-3">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                            <span className="font-body text-foreground text-sm sm:text-base">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Responsible Trekking */}
                <ScrollReveal delay={0.45}>
                  <div className="bg-green-500/5 border border-green-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                      Responsible Trekking
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      {(trekEnriched?.responsible.guidelines || [
                        "Carry all trash back with you",
                        "Respect local customs and traditions",
                        "Stay on marked trails",
                        "Don't disturb wildlife"
                      ]).map((guideline, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="font-body text-muted-foreground text-sm sm:text-base">{guideline}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Nearby Homestays */}
                {nearbyHomestays.length > 0 && (
                  <ScrollReveal delay={0.5}>
                    <div>
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                        <Home className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                        Nearby Homestays
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {nearbyHomestays.slice(0, 4).map((homestay) => (
                          <Link key={homestay.id} to={`/homestay/${homestay.slug}`} className="group">
                            <div className="bg-card rounded-lg sm:rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                              <div className="relative h-32 sm:h-36">
                                <img
                                  src={homestay.image}
                                  alt={homestay.name}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  loading="lazy"
                                />
                              </div>
                              <div className="p-3 sm:p-4">
                                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                                  {homestay.name}
                                </h3>
                                <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">
                                  {homestay.village} • {homestay.priceRange}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )}
              </div>

              {/* Sidebar - Stacks on mobile */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
                  {/* Quick Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-card"
                  >
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                      Quick Info
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-body text-xs sm:text-sm text-muted-foreground">Duration</div>
                          <div className="font-body font-medium text-foreground text-sm sm:text-base">{trek.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mountain className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-body text-xs sm:text-sm text-muted-foreground">Altitude</div>
                          <div className="font-body font-medium text-foreground text-sm sm:text-base">{trek.altitude}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-body text-xs sm:text-sm text-muted-foreground">Difficulty</div>
                          <div className="font-body font-medium text-foreground text-sm sm:text-base">{trek.difficulty}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-body text-xs sm:text-sm text-muted-foreground">Best Season</div>
                          <div className="font-body font-medium text-foreground text-sm sm:text-base">{trek.bestSeason}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Plan CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-primary rounded-xl sm:rounded-2xl p-4 sm:p-6"
                  >
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-primary-foreground mb-2 sm:mb-3">
                      Plan This Trek
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-primary-foreground/80 mb-4 sm:mb-6">
                      Get personalized guidance for the {trek.name} trek.
                    </p>
                    <Link to="/plan">
                      <Button variant="hero" className="w-full min-h-[44px]">
                        Start Planning
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TrekDetailPage;