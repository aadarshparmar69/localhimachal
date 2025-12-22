import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getTrekBySlug } from "@/data/treks";
import { getHomestaysByDistrict } from "@/data/homestays";
import { MapPin, Calendar, Mountain, ArrowLeft, Clock, AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const TrekDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const trek = getTrekBySlug(slug || "");
  
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
    Hard: "bg-red-500/20 text-red-700"
  };

  return (
    <>
      <Helmet>
        <title>{trek.name} Trek - Complete Guide | Local Himachal</title>
        <meta name="description" content={`${trek.name}: ${trek.description} Difficulty: ${trek.difficulty}, Duration: ${trek.duration}, Best Season: ${trek.bestSeason}`} />
        <meta name="keywords" content={`${trek.name} trek, trekking in ${trek.district}, Himachal treks, ${trek.difficulty} treks Himachal`} />
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
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-body mb-4 ${difficultyColor[trek.difficulty]}`}>
                  {trek.difficulty} Trek
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
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <div className="prose prose-lg max-w-none mb-12">
                    <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                      About This Trek
                    </h2>
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      {trek.description}
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <div className="mb-12">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Trek Highlights
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {trek.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-accent font-display font-semibold">{i + 1}</span>
                          </div>
                          <span className="font-body text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {nearbyHomestays.length > 0 && (
                  <ScrollReveal delay={0.2}>
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
                        <span className={`px-2 py-0.5 rounded-full text-xs font-body ${difficultyColor[trek.difficulty]}`}>{trek.difficulty}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-body text-muted-foreground">Best Season</span>
                        <span className="font-body font-medium text-foreground">{trek.bestSeason}</span>
                      </div>
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
