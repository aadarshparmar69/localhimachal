import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getEnrichedDistrictBySlug } from "@/data/districtsEnriched";
import { getTreksByDistrict } from "@/data/treks";
import { getHomestaysByDistrict } from "@/data/homestays";
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
  const districtHomestays = getHomestaysByDistrict(slug || "");
  const districtHiddenGems = getHiddenGemsByDistrict(slug || "");

  if (!district) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl font-semibold text-foreground mb-4">
              District Not Found
            </h1>
            <Link to="/explore">
              <Button variant="default">
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

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src={district.image}
            alt={district.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 lg:px-8 pb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground font-body text-sm mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Districts
                </Link>
                <h1 className="font-display text-5xl md:text-7xl font-semibold text-primary-foreground mb-4">
                  {district.name}
                </h1>
                <p className="font-display text-xl md:text-2xl text-accent italic mb-6">
                  "{district.tagline}"
                </p>
                <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80 font-body">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-5 h-5" />
                    <span>{district.altitude}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Best: {district.bestTime}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cinematic Intro */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                {district.cinematicIntro.split('\n\n').map((para, i) => (
                  <p key={i} className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                    {para}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-16">
                {/* Geography */}
                <ScrollReveal>
                  <div className="bg-card rounded-2xl p-8 shadow-soft">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <TreePine className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="font-display text-2xl font-semibold text-foreground">
                        Geography & Landscape
                      </h2>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">
                      {district.geography.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {district.geography.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="px-3 py-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Hidden Gems */}
                <ScrollReveal>
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                          <Gem className="w-6 h-6 text-amber-600" />
                        </div>
                        <h2 className="font-display text-2xl font-semibold text-foreground">
                          Hidden Gems
                        </h2>
                      </div>
                      {districtHiddenGems.length > 0 && (
                        <Link to="/hidden-gems" className="text-primary text-sm font-medium flex items-center gap-1">
                          View All <ChevronRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                    <div className="grid gap-4">
                      {district.hiddenGems.map((gem, i) => (
                        <div key={i} className="bg-card rounded-xl p-6 shadow-soft border-l-4 border-amber-500/50">
                          <h3 className="font-display font-semibold text-foreground mb-2">{gem.name}</h3>
                          <p className="font-body text-sm text-muted-foreground">{gem.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Culture */}
                <ScrollReveal>
                  <div className="bg-card rounded-2xl p-8 shadow-soft">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="font-display text-2xl font-semibold text-foreground">
                        Culture & Village Life
                      </h2>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">
                      {district.culture.overview}
                    </p>
                    <ul className="space-y-2">
                      {district.culture.traditions.map((tradition, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
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
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <Utensils className="w-6 h-6 text-green-600" />
                      </div>
                      <h2 className="font-display text-2xl font-semibold text-foreground">
                        Local Food
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-card rounded-xl p-6 shadow-soft">
                        <h3 className="font-display font-semibold text-foreground mb-4">Everyday</h3>
                        <ul className="space-y-2">
                          {district.food.everyday.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-card rounded-xl p-6 shadow-soft">
                        <h3 className="font-display font-semibold text-foreground mb-4">Festive</h3>
                        <ul className="space-y-2">
                          {district.food.festive.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {district.food.note && (
                      <p className="mt-4 text-sm italic text-muted-foreground">{district.food.note}</p>
                    )}
                  </div>
                </ScrollReveal>

                {/* Festivals */}
                <ScrollReveal>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                        <Music className="w-6 h-6 text-purple-600" />
                      </div>
                      <h2 className="font-display text-2xl font-semibold text-foreground">
                        Festivals & Traditions
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {district.festivals.map((festival, i) => (
                        <div key={i} className="bg-card rounded-xl p-6 shadow-soft">
                          <h3 className="font-display font-semibold text-foreground mb-2">{festival.name}</h3>
                          <p className="font-body text-sm text-muted-foreground">{festival.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Do's & Don'ts */}
                <ScrollReveal>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                      <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" /> Do's
                      </h3>
                      <ul className="space-y-2">
                        {district.dosDonts.dos.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-green-600">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                      <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-600" /> Don'ts
                      </h3>
                      <ul className="space-y-2">
                        {district.dosDonts.donts.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
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
                    className="border-l-4 border-primary pl-6"
                  />
                </ScrollReveal>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Quick Info */}
                  <ScrollReveal>
                    <div className="bg-card rounded-2xl p-6 shadow-card">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                        Quick Info
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Mountain className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <div className="font-body text-sm text-muted-foreground">Altitude</div>
                            <div className="font-body font-medium text-foreground">{district.altitude}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <div className="font-body text-sm text-muted-foreground">Best Time</div>
                            <div className="font-body font-medium text-foreground">{district.seasonalAccess.bestMonths}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Seasonal Access */}
                  <ScrollReveal>
                    <div className="bg-card rounded-2xl p-6 shadow-card">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Sun className="w-5 h-5 text-primary" /> Seasonal Guide
                      </h3>
                      <div className="space-y-3 text-sm">
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
                    <div className="bg-primary rounded-2xl p-6">
                      <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                        Plan Your Visit
                      </h3>
                      <p className="font-body text-sm text-primary-foreground/80 mb-6">
                        Get personalized recommendations for {district.name}.
                      </p>
                      <Link to="/plan">
                        <Button variant="hero" className="w-full">
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
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              {districtTreks.length > 0 && (
                <ScrollReveal>
                  <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        Treks in {district.name}
                      </h3>
                      <Link to="/treks" className="text-primary font-medium text-sm flex items-center gap-1">
                        View All <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {districtTreks.slice(0, 4).map((trek) => (
                        <Link key={trek.id} to={`/trek/${trek.slug}`} className="group flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft hover:shadow-card transition-all">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={trek.image} alt={trek.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors truncate">{trek.name}</h4>
                            <p className="font-body text-sm text-muted-foreground">{trek.difficulty} • {trek.duration}</p>
                          </div>
                          <Route className="w-5 h-5 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {districtHomestays.length > 0 && (
                <ScrollReveal>
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        Homestays in {district.name}
                      </h3>
                      <Link to="/homestays" className="text-primary font-medium text-sm flex items-center gap-1">
                        View All <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {districtHomestays.slice(0, 4).map((homestay) => (
                        <div key={homestay.id} className="group flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={homestay.image} alt={homestay.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-display font-semibold text-foreground truncate">{homestay.name}</h4>
                            <p className="font-body text-sm text-muted-foreground">{homestay.village} • {homestay.priceRange}</p>
                          </div>
                          <Home className="w-5 h-5 text-muted-foreground" />
                        </div>
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
