import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getDistrictBySlug } from "@/data/districts";
import { getTreksByDistrict } from "@/data/treks";
import { getHomestaysByDistrict } from "@/data/homestays";
import { MapPin, Calendar, Mountain, ArrowLeft, ArrowRight, Home, Route, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DistrictPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const district = getDistrictBySlug(slug || "");
  const districtTreks = getTreksByDistrict(slug || "");
  const districtHomestays = getHomestaysByDistrict(slug || "");

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
        <title>{district.name} - Complete Travel Guide | Local Himachal</title>
        <meta name="description" content={`Discover ${district.name}: ${district.description} Best time to visit: ${district.bestTime}. Find hidden places, treks, homestays, and local culture.`} />
        <meta name="keywords" content={`${district.name} travel guide, ${district.name} tourism, ${district.famousFor.join(', ')}, Himachal Pradesh`} />
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

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="prose prose-lg max-w-none"
                >
                  <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                    About {district.name}
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-8">
                    {district.description}
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Nestled in the heart of Himachal Pradesh, {district.name} is a land where ancient traditions 
                    blend seamlessly with breathtaking natural beauty. The region has been a crossroads of 
                    cultures for centuries, with influences from Tibet, the plains of India, and its own 
                    indigenous traditions creating a unique tapestry of life.
                  </p>
                </motion.div>

                {/* Famous For */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Famous For
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {district.famousFor.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-body"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Treks */}
                {districtTreks.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        Treks in {district.name}
                      </h3>
                      <Link
                        to="/treks"
                        className="text-primary font-body font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        View All
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {districtTreks.slice(0, 4).map((trek) => (
                        <Link
                          key={trek.id}
                          to={`/trek/${trek.slug}`}
                          className="group flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft hover:shadow-card transition-all"
                        >
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={trek.image}
                              alt={trek.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                              {trek.name}
                            </h4>
                            <p className="font-body text-sm text-muted-foreground">
                              {trek.difficulty} • {trek.duration}
                            </p>
                          </div>
                          <Route className="w-5 h-5 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Homestays */}
                {districtHomestays.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        Homestays in {district.name}
                      </h3>
                      <Link
                        to="/homestays"
                        className="text-primary font-body font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        View All
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {districtHomestays.slice(0, 4).map((homestay) => (
                        <Link
                          key={homestay.id}
                          to={`/homestay/${homestay.slug}`}
                          className="group flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft hover:shadow-card transition-all"
                        >
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={homestay.image}
                              alt={homestay.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                              {homestay.name}
                            </h4>
                            <p className="font-body text-sm text-muted-foreground">
                              {homestay.village} • {homestay.priceRange}
                            </p>
                          </div>
                          <Home className="w-5 h-5 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-2xl p-6 shadow-card mb-6"
                  >
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                      Quick Info
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mountain className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-body text-sm text-muted-foreground">Altitude Range</div>
                          <div className="font-body font-medium text-foreground">{district.altitude}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-body text-sm text-muted-foreground">Best Time to Visit</div>
                          <div className="font-body font-medium text-foreground">{district.bestTime}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-body text-sm text-muted-foreground">Location</div>
                          <div className="font-body font-medium text-foreground">Himachal Pradesh, India</div>
                        </div>
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
                      Plan Your Visit
                    </h3>
                    <p className="font-body text-sm text-primary-foreground/80 mb-6">
                      Get personalized recommendations, packing tips, and local insights for your trip to {district.name}.
                    </p>
                    <Link to="/plan">
                      <Button variant="hero" className="w-full">
                        Start Planning
                        <ArrowRight className="w-4 h-4 ml-2" />
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

export default DistrictPage;
