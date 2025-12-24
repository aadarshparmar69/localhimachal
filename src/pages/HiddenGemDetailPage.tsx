import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  MapPin, Mountain, Calendar, Clock, ArrowLeft, 
  Compass, AlertTriangle, Home, Check, X, ChevronRight,
  Navigation
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, ParallaxImage, QuoteFadeIn } from "@/components/animations/ScrollReveal";
import { getHiddenGemBySlug, getHiddenGemsByDistrict, HiddenGem } from "@/data/hiddenGems";
import { cn } from "@/lib/utils";

const difficultyColors = {
  Easy: "bg-green-500/20 text-green-700 border-green-500/30",
  Moderate: "bg-amber-500/20 text-amber-700 border-amber-500/30",
  Challenging: "bg-red-500/20 text-red-700 border-red-500/30"
};

export default function HiddenGemDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const gem = slug ? getHiddenGemBySlug(slug) : undefined;

  if (!gem) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Place Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              This hidden gem doesn't exist in our records.
            </p>
            <Link to="/hidden-gems">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Hidden Gems
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedGems = getHiddenGemsByDistrict(gem.districtSlug)
    .filter(g => g.id !== gem.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{gem.seoTitle}</title>
        <meta name="description" content={gem.seoDescription} />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <ParallaxImage
            src={gem.image}
            alt={gem.name}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 lg:px-8 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight className="w-4 h-4" />
                  <Link to="/hidden-gems" className="hover:text-white transition-colors">Hidden Gems</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">{gem.name}</span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <Badge className={cn("border", difficultyColors[gem.difficulty])}>
                    {gem.difficulty} Access
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                    <MapPin className="w-3 h-3 mr-1" />
                    {gem.district}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                    <Mountain className="w-3 h-3 mr-1" />
                    {gem.altitude}
                  </Badge>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {gem.name}
                </h1>
                
                <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                  {gem.shortDescription}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="py-6 border-b border-border/50 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Best Time</p>
                  <p className="text-sm font-medium">{gem.bestTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Altitude</p>
                  <p className="text-sm font-medium">{gem.altitude}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Category</p>
                  <p className="text-sm font-medium capitalize">{gem.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Difficulty</p>
                  <p className="text-sm font-medium">{gem.difficulty}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Poetic Quote */}
              <ScrollReveal>
                <QuoteFadeIn 
                  quote={gem.poeticQuote}
                  className="border-l-4 border-primary pl-6"
                />
              </ScrollReveal>

              {/* Emotional Opening */}
              <ScrollReveal>
                <div className="prose prose-lg max-w-none">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    The Experience
                  </h2>
                  {gem.emotionalOpening.split('\n\n').map((para, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Location & Landscape */}
              <ScrollReveal>
                <div className="bg-card border border-border/50 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Navigation className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Location & Landscape
                    </h2>
                  </div>
                  {gem.locationDescription.split('\n\n').map((para, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Why It's Hidden */}
              <ScrollReveal>
                <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <Mountain className="w-6 h-6 text-amber-600" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Why It Remains Hidden
                    </h2>
                  </div>
                  {gem.whyHidden.split('\n\n').map((para, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Village Life */}
              <ScrollReveal>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Life on the Ground
                  </h2>
                  {gem.villageLife.split('\n\n').map((para, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Best Time Detailed */}
              <ScrollReveal>
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Best Time to Visit
                    </h2>
                  </div>
                  {gem.bestTimeDetailed.split('\n\n').map((para, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* How to Reach */}
              <ScrollReveal>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    How to Reach
                  </h2>
                  {gem.howToReach.split('\n\n').map((para, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Things to Do */}
              <ScrollReveal>
                <div className="bg-card border border-border/50 rounded-2xl p-8">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Things to Do (Slow Travel)
                  </h2>
                  <ul className="space-y-3">
                    {gem.thingsToDo.map((thing, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{thing}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Stay Options */}
              <ScrollReveal>
                <div className="bg-card border border-border/50 rounded-2xl p-6 sticky top-32">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="w-5 h-5 text-primary" />
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Where to Stay
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">
                    {gem.stayOptions}
                  </p>

                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      Responsible Travel
                    </h4>
                    <ul className="space-y-2">
                      {gem.responsibleTravel.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border pt-6 mt-6">
                    <Link to={`/district/${gem.districtSlug}`}>
                      <Button variant="outline" className="w-full">
                        <MapPin className="w-4 h-4 mr-2" />
                        Explore {gem.district} District
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Related Places */}
        {relatedGems.length > 0 && (
          <section className="py-16 bg-secondary/30 border-t border-border/50">
            <div className="container mx-auto px-4 lg:px-8">
              <ScrollReveal>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  More Hidden Gems in {gem.district}
                </h2>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedGems.map(related => (
                  <ScrollReveal key={related.id}>
                    <Link to={`/hidden-gems/${related.slug}`}>
                      <motion.div
                        whileHover={{ y: -8 }}
                        className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-500"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={related.image}
                            alt={related.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <h3 className="font-display text-lg font-bold text-white">
                              {related.name}
                            </h3>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {related.shortDescription}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
