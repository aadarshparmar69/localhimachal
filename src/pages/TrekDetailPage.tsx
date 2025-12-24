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
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl font-semibold text-foreground mb-4">
              Trek Not Found
            </h1>
            <Link to="/treks">
              <Button variant="default">
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

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={trek.image}
            alt={trek.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 lg:px-8 pb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link
                  to="/treks"
                  className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground font-body text-sm mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Treks
                </Link>
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-body mb-4 ${difficultyColor[trekEnriched?.overview.category || trek.difficulty]}`}>
                  {trekEnriched?.overview.category || trek.difficulty} Trek
                </div>
                <h1 className="font-display text-5xl md:text-7xl font-semibold text-primary-foreground mb-6">
                  {trek.name}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80 font-body">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{trek.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-5 h-5" />
                    <span>{trek.altitude}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{trek.bestSeason}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="capitalize">{trek.district}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                
                {/* Overview & Significance */}
                <ScrollReveal>
                  <div className="prose prose-lg max-w-none">
                    <h2 className="font-display text-3xl font-semibold text-foreground mb-6 flex items-center gap-3">
                      <Star className="w-7 h-7 text-primary" />
                      Trek Overview & Significance
                    </h2>
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      {trekEnriched?.overview.significance || trek.description}
                    </p>
                  </div>
                </ScrollReveal>

                {/* Route & Trail Description */}
                {trekEnriched && (
                  <ScrollReveal delay={0.1}>
                    <div className="bg-card rounded-2xl p-8 shadow-soft">
                      <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                        <Route className="w-6 h-6 text-primary" />
                        Location, Route & Trail Description
                      </h2>
                      <div className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-secondary/50 rounded-xl p-4">
                            <span className="text-sm text-muted-foreground font-body">Starting Point</span>
                            <p className="font-body font-medium text-foreground">{trekEnriched.route.startPoint}</p>
                          </div>
                          <div className="bg-secondary/50 rounded-xl p-4">
                            <span className="text-sm text-muted-foreground font-body">Ending Point</span>
                            <p className="font-body font-medium text-foreground">{trekEnriched.route.endPoint}</p>
                          </div>
                        </div>
                        <div className="bg-secondary/50 rounded-xl p-4">
                          <span className="text-sm text-muted-foreground font-body">Major Camps</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {trekEnriched.route.majorCamps.map((camp, i) => (
                              <span key={i} className="px-3 py-1 bg-background rounded-full text-sm font-body text-foreground">
                                {camp}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="font-body text-muted-foreground leading-relaxed">
                          {trekEnriched.route.terrainDescription}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Best Time to Trek */}
                {trekEnriched && (
                  <ScrollReveal delay={0.15}>
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                      <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                        <Thermometer className="w-6 h-6 text-primary" />
                        Best Time to Attempt the Trek
                      </h2>
                      <div className="space-y-4">
                        <div className="bg-background/80 rounded-xl p-4">
                          <span className="text-sm text-primary font-body font-medium">Ideal Months</span>
                          <p className="font-body font-semibold text-foreground text-lg">{trekEnriched.bestTime.idealMonths}</p>
                        </div>
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2">Weather Patterns</h4>
                          <p className="font-body text-muted-foreground leading-relaxed">
                            {trekEnriched.bestTime.weatherPatterns}
                          </p>
                        </div>
                        <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                            <span className="font-body font-medium text-red-700">Seasons to Avoid</span>
                          </div>
                          <p className="font-body text-red-700/80">
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
                    <div className="bg-card rounded-2xl p-8 shadow-soft">
                      <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                        <Mountain className="w-6 h-6 text-primary" />
                        Trek Difficulty, Distance & Altitude
                      </h2>
                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-secondary/50 rounded-xl p-4">
                          <span className="text-sm text-muted-foreground font-body">Total Distance</span>
                          <p className="font-body font-semibold text-foreground">{trekEnriched.difficulty.totalDistance}</p>
                        </div>
                        <div className="bg-secondary/50 rounded-xl p-4">
                          <span className="text-sm text-muted-foreground font-body">Maximum Altitude</span>
                          <p className="font-body font-semibold text-foreground">{trekEnriched.difficulty.maxAltitude}</p>
                        </div>
                        <div className="bg-secondary/50 rounded-xl p-4">
                          <span className="text-sm text-muted-foreground font-body">Daily Walking Hours</span>
                          <p className="font-body font-semibold text-foreground">{trekEnriched.difficulty.dailyWalkingHours}</p>
                        </div>
                        <div className={`rounded-xl p-4 ${difficultyColor[trekEnriched.overview.category]}`}>
                          <span className="text-sm opacity-80 font-body">Difficulty Level</span>
                          <p className="font-body font-semibold">{trekEnriched.overview.category}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            Fitness Requirements
                          </h4>
                          <p className="font-body text-muted-foreground leading-relaxed">
                            {trekEnriched.difficulty.fitnessRequirements}
                          </p>
                        </div>
                        <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            <span className="font-body font-medium text-amber-700">Who Should Avoid</span>
                          </div>
                          <p className="font-body text-amber-700/80">
                            {trekEnriched.difficulty.whoShouldAvoid}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Highlights & Unique Experiences */}
                <ScrollReveal delay={0.25}>
                  <div className="bg-card rounded-2xl p-8 shadow-soft">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                      <Heart className="w-6 h-6 text-primary" />
                      Highlights & Unique Experiences
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {(trekEnriched?.highlights.landscapes || trek.highlights).map((highlight, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-accent font-display font-semibold">{i + 1}</span>
                          </div>
                          <span className="font-body text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    {trekEnriched && (
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2">Cultural Significance</h4>
                          <p className="font-body text-muted-foreground leading-relaxed">
                            {trekEnriched.highlights.culturalSignificance}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2">What Makes This Trek Special</h4>
                          <p className="font-body text-muted-foreground leading-relaxed">
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
                    <div className="bg-card rounded-2xl p-8 shadow-soft">
                      <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                        <Tent className="w-6 h-6 text-primary" />
                        Food, Accommodation & Water Availability
                      </h2>
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Tent className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-body font-medium text-foreground mb-1">Stay Options</h4>
                            <p className="font-body text-muted-foreground leading-relaxed">
                              {trekEnriched.accommodation.stayOptions}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Utensils className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-body font-medium text-foreground mb-1">Food Arrangements</h4>
                            <p className="font-body text-muted-foreground leading-relaxed">
                              {trekEnriched.accommodation.foodArrangements}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Droplets className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-body font-medium text-foreground mb-1">Water Sources</h4>
                            <p className="font-body text-muted-foreground leading-relaxed">
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
                    <div className="bg-card rounded-2xl p-8 shadow-soft">
                      <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                        <Shield className="w-6 h-6 text-primary" />
                        Permits, Guides & Safety Considerations
                      </h2>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                          <div className={`px-3 py-1 rounded-full text-sm font-body ${trekEnriched.permits.required ? 'bg-amber-500/20 text-amber-700' : 'bg-green-500/20 text-green-700'}`}>
                            {trekEnriched.permits.required ? 'Permit Required' : 'No Permit Required'}
                          </div>
                          <p className="font-body text-muted-foreground flex-1">
                            {trekEnriched.permits.details}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2">Guide Necessity</h4>
                          <p className="font-body text-muted-foreground leading-relaxed">
                            {trekEnriched.permits.guideNecessity}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2">Safety Considerations</h4>
                          <p className="font-body text-muted-foreground leading-relaxed">
                            {trekEnriched.permits.safetyConsiderations}
                          </p>
                        </div>
                        <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                            <span className="font-body font-medium text-red-700">Common Mistakes to Avoid</span>
                          </div>
                          <p className="font-body text-red-700/80">
                            {trekEnriched.permits.commonMistakes}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Packing Essentials */}
                {trekEnriched && (
                  <ScrollReveal delay={0.4}>
                    <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl p-8">
                      <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                        <Backpack className="w-6 h-6 text-primary" />
                        Packing Essentials
                      </h2>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2">Clothing Layers</h4>
                          <p className="font-body text-muted-foreground leading-relaxed">
                            {trekEnriched.packing.clothing}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2">Footwear</h4>
                          <p className="font-body text-muted-foreground leading-relaxed">
                            {trekEnriched.packing.footwear}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2">Safety & Medical Essentials</h4>
                          <p className="font-body text-muted-foreground leading-relaxed">
                            {trekEnriched.packing.essentials}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Responsible Trekking */}
                {trekEnriched && (
                  <ScrollReveal delay={0.45}>
                    <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
                      <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                        <Leaf className="w-6 h-6 text-green-600" />
                        Responsible Trekking & Cultural Respect
                      </h2>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2">Environmental Responsibility</h4>
                          <p className="font-body text-muted-foreground leading-relaxed">
                            {trekEnriched.responsibleTrekking.environmental}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2">Cultural Respect</h4>
                          <p className="font-body text-muted-foreground leading-relaxed">
                            {trekEnriched.responsibleTrekking.culturalRespect}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-body font-medium text-foreground mb-2">Leave No Trace</h4>
                          <p className="font-body text-muted-foreground leading-relaxed">
                            {trekEnriched.responsibleTrekking.leaveNoTrace}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Closing Statement */}
                <ScrollReveal delay={0.5}>
                  <div className="bg-primary/5 rounded-2xl p-8 text-center">
                    <p className="font-display text-xl text-foreground italic">
                      {trek.name} demands preparation, patience, and respect for the mountains—offering in return an experience that stays long after the trail ends.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Nearby Homestays */}
                {nearbyHomestays.length > 0 && (
                  <ScrollReveal delay={0.55}>
                    <div className="mb-12">
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                        <Home className="w-6 h-6 text-primary" />
                        Nearby Homestays
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {nearbyHomestays.slice(0, 4).map((homestay) => (
                          <Link
                            key={homestay.id}
                            to={`/homestay/${homestay.slug}`}
                            className="block p-4 rounded-xl bg-card shadow-soft hover:shadow-card transition-all"
                          >
                            <div className="font-display font-semibold text-foreground">{homestay.name}</div>
                            <div className="font-body text-sm text-muted-foreground">{homestay.village} • {homestay.priceRange}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-2xl p-6 shadow-card"
                  >
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                      Quick Info
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-body text-muted-foreground">Duration</span>
                        <span className="font-body font-medium text-foreground">{trek.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-body text-muted-foreground">Max Altitude</span>
                        <span className="font-body font-medium text-foreground">{trek.altitude}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-body text-muted-foreground">Difficulty</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-body ${difficultyColor[trekEnriched?.overview.category || trek.difficulty]}`}>
                          {trekEnriched?.overview.category || trek.difficulty}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-body text-muted-foreground">Best Season</span>
                        <span className="font-body font-medium text-foreground">{trek.bestSeason}</span>
                      </div>
                      {trekEnriched && (
                        <>
                          <div className="flex justify-between">
                            <span className="font-body text-muted-foreground">Distance</span>
                            <span className="font-body font-medium text-foreground text-right text-sm">{trekEnriched.difficulty.totalDistance.split(' over')[0]}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-body text-muted-foreground">Permit</span>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-body ${trekEnriched.permits.required ? 'bg-amber-500/20 text-amber-700' : 'bg-green-500/20 text-green-700'}`}>
                              {trekEnriched.permits.required ? 'Required' : 'Not Required'}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-primary rounded-2xl p-6"
                  >
                    <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                      Plan This Trek
                    </h3>
                    <p className="font-body text-sm text-primary-foreground/80 mb-6">
                      Get personalized recommendations and local guide contacts.
                    </p>
                    <Link to="/plan">
                      <Button variant="hero" className="w-full">
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