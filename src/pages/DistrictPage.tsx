import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getEnrichedDistrictBySlug } from "@/data/districtsEnriched";
import { getTreksByDistrict } from "@/data/treks";
import { homestays } from "@/data/homestays";
import { getHiddenGemsByDistrict } from "@/data/hiddenGems";
import { 
  MapPin, Calendar, Mountain, ArrowLeft, ArrowRight, Home, Route, 
  ChevronRight, Utensils, Music, CheckCircle, XCircle, Sun, Gem,
  Users, TreePine
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, QuoteFadeIn } from "@/components/animations/ScrollReveal";

const DistrictPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const district = getEnrichedDistrictBySlug(slug || "");
  const districtTreks = getTreksByDistrict(slug || "");
  const districtHomestays = homestays.filter(h => h.district.toLowerCase().includes(slug?.toLowerCase() || ""));
  const districtHiddenGems = getHiddenGemsByDistrict(slug || "");

  if (!district) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-display text-2xl sm:text-4xl font-semibold text-foreground mb-4">
              District Not Found
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

  return (
    <>
      <Helmet>
        <title>{district.seoTitle}</title>
        <meta name="description" content={district.seoDescription} />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section - Mobile optimized */}
        <section className="relative h-[60vh] sm:h-[70vh] min-h-[400px] sm:min-h-[500px] overflow-hidden">
          <img
            src={district.image}
            alt={district.name}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground font-body text-sm mb-4 sm:mb-6 transition-colors min-h-[44px]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Districts
                </Link>
                <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-semibold text-primary-foreground mb-2 sm:mb-4">
                  {district.name}
                </h1>
                <p className="font-display text-lg sm:text-xl md:text-2xl text-accent italic mb-4 sm:mb-6">
                  "{district.tagline}"
                </p>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-primary-foreground/80 font-body text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{district.altitude}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Best: {district.bestTime}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cinematic Intro */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                {district.cinematicIntro.split('\n\n').map((para, i) => (
                  <p key={i} className="font-body text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                    {para}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Main Content Grid - Mobile stacked */}
        <section className="py-12 sm:py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10 sm:space-y-16">
                {/* Geography */}
                <ScrollReveal>
                  <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <TreePine className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                        Geography & Landscape
                      </h2>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      {district.geography.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {district.geography.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="px-2 sm:px-3 py-1 text-xs sm:text-sm">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Hidden Gems */}
                <ScrollReveal>
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                          <Gem className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                        </div>
                        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                          Hidden Gems
                        </h2>
                      </div>
                      {districtHiddenGems.length > 0 && (
                        <Link to="/hidden-gems" className="text-primary text-xs sm:text-sm font-medium flex items-center gap-1 min-h-[44px]">
                          View All <ChevronRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                    <div className="grid gap-3 sm:gap-4">
                      {district.hiddenGems.map((gem, i) => (
                        <div key={i} className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-soft border-l-4 border-amber-500/50">
                          <h3 className="font-display font-semibold text-foreground mb-2 text-sm sm:text-base">{gem.name}</h3>
                          <p className="font-body text-xs sm:text-sm text-muted-foreground">{gem.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Culture */}
                <ScrollReveal>
                  <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                        Culture & Village Life
                      </h2>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      {district.culture.overview}
                    </p>
                    <ul className="space-y-2">
                      {district.culture.traditions.map((tradition, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {tradition}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Food */}
                <ScrollReveal>
                  <div>
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                      </div>
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                        Local Food
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-soft">
                        <h3 className="font-display font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Everyday</h3>
                        <ul className="space-y-2">
                          {district.food.everyday.map((item, i) => (
                            <li key={i} className="text-xs sm:text-sm text-muted-foreground">• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-soft">
                        <h3 className="font-display font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Festive</h3>
                        <ul className="space-y-2">
                          {district.food.festive.map((item, i) => (
                            <li key={i} className="text-xs sm:text-sm text-muted-foreground">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {district.food.note && (
                      <p className="mt-4 text-xs sm:text-sm italic text-muted-foreground">{district.food.note}</p>
                    )}
                  </div>
                </ScrollReveal>

                {/* Festivals */}
                <ScrollReveal>
                  <div>
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <Music className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                      </div>
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                        Festivals & Traditions
                      </h2>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      {district.festivals.map((festival, i) => (
                        <div key={i} className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-soft">
                          <h3 className="font-display font-semibold text-foreground mb-2 text-sm sm:text-base">{festival.name}</h3>
                          <p className="font-body text-xs sm:text-sm text-muted-foreground">{festival.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Do's & Don'ts */}
                <ScrollReveal>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-green-500/5 border border-green-500/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
                      <h3 className="font-display font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" /> Do's
                      </h3>
                      <ul className="space-y-2">
                        {district.dosDonts.dos.map((item, i) => (
                          <li key={i} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-green-600">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-500/5 border border-red-500/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
                      <h3 className="font-display font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" /> Don'ts
                      </h3>
                      <ul className="space-y-2">
                        {district.dosDonts.donts.map((item, i) => (
                          <li key={i} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-red-600">✗</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Why It Matters */}
                <ScrollReveal>
                  <QuoteFadeIn 
                    quote={district.whyItMatters}
                    className="border-l-4 border-primary pl-4 sm:pl-6"
                  />
                </ScrollReveal>
              </div>

              {/* Sidebar - Stacks on mobile */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
                  {/* Quick Info */}
                  <ScrollReveal>
                    <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-card">
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                        Quick Info
                      </h3>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-start gap-3">
                          <Mountain className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-body text-xs sm:text-sm text-muted-foreground">Altitude</div>
                            <div className="font-body font-medium text-foreground text-sm sm:text-base">{district.altitude}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-body text-xs sm:text-sm text-muted-foreground">Best Time</div>
                            <div className="font-body font-medium text-foreground text-sm sm:text-base">{district.seasonalAccess.bestMonths}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Seasonal Access */}
                  <ScrollReveal>
                    <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-card">
                      <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /> Seasonal Guide
                      </h3>
                      <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                        <div><span className="font-medium">Spring:</span> <span className="text-muted-foreground">{district.seasonalAccess.spring}</span></div>
                        <div><span className="font-medium">Summer:</span> <span className="text-muted-foreground">{district.seasonalAccess.summer}</span></div>
                        <div><span className="font-medium">Monsoon:</span> <span className="text-muted-foreground">{district.seasonalAccess.monsoon}</span></div>
                        <div><span className="font-medium">Autumn:</span> <span className="text-muted-foreground">{district.seasonalAccess.autumn}</span></div>
                        <div><span className="font-medium">Winter:</span> <span className="text-muted-foreground">{district.seasonalAccess.winter}</span></div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Plan CTA */}
                  <ScrollReveal>
                    <div className="bg-primary rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-primary-foreground mb-2 sm:mb-3">
                        Plan Your Visit
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-primary-foreground/80 mb-4 sm:mb-6">
                        Get personalized recommendations for {district.name}.
                      </p>
                      <Link to="/plan">
                        <Button variant="hero" className="w-full min-h-[44px]">
                          Start Planning
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treks & Homestays */}
        {(districtTreks.length > 0 || districtHomestays.length > 0) && (
          <section className="py-12 sm:py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {districtTreks.length > 0 && (
                <ScrollReveal>
                  <div className="mb-8 sm:mb-12">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                        Treks in {district.name}
                      </h3>
                      <Link to="/treks" className="text-primary font-medium text-xs sm:text-sm flex items-center gap-1 min-h-[44px]">
                        View All <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {districtTreks.slice(0, 3).map((trek) => (
                        <Link key={trek.id} to={`/trek/${trek.slug}`} className="group">
                          <div className="bg-card rounded-lg sm:rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                            <div className="relative h-36 sm:h-40">
                              <img
                                src={trek.image}
                                alt={trek.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                              />
                            </div>
                            <div className="p-3 sm:p-4">
                              <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                                {trek.name}
                              </h4>
                              <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">
                                {trek.difficulty} • {trek.duration}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {districtHomestays.length > 0 && (
                <ScrollReveal>
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                        Homestays in {district.name}
                      </h3>
                      <Link to="/homestays" className="text-primary font-medium text-xs sm:text-sm flex items-center gap-1 min-h-[44px]">
                        View All <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {districtHomestays.slice(0, 3).map((homestay) => (
                        <Link key={homestay.id} to={`/homestay/${homestay.slug}`} className="group">
                          <div className="bg-card rounded-lg sm:rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                            <div className="relative h-36 sm:h-40">
                              <img
                                src={homestay.image}
                                alt={homestay.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                              />
                            </div>
                            <div className="p-3 sm:p-4">
                              <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                                {homestay.name}
                              </h4>
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
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default DistrictPage;