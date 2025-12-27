import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Sun, Cloud, Snowflake, Leaf, 
  Backpack, CheckCircle, AlertTriangle,
  Bus, Plane, Car,
  Heart, ArrowRight
} from "lucide-react";

const seasons = [
  {
    name: "Summer",
    months: "March - June",
    icon: Sun,
    description: "Perfect for high-altitude treks and exploring Spiti. Apple blossoms in Kinnaur.",
    highlights: ["Trek to Hampta Pass", "Visit Spiti Valley", "Apple orchards bloom"],
    color: "bg-accent/10 text-accent",
  },
  {
    name: "Monsoon",
    months: "July - September",
    icon: Cloud,
    description: "Lush green valleys, but landslides common. Best for lower regions.",
    highlights: ["Vibrant greenery", "Fewer tourists", "Manimahesh Yatra"],
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Autumn",
    months: "October - November",
    icon: Leaf,
    description: "Crystal clear skies, perfect visibility. Ideal for photography.",
    highlights: ["Kullu Dussehra", "Clear mountain views", "Apple harvest"],
    color: "bg-destructive/10 text-destructive",
  },
  {
    name: "Winter",
    months: "December - February",
    icon: Snowflake,
    description: "Snow-covered landscapes. Perfect for skiing and snow experiences.",
    highlights: ["Skiing in Solang", "Snow in Shimla", "Hot springs"],
    color: "bg-sky-himalayan/30 text-foreground",
  },
];

const packingList = [
  { category: "Clothing", items: ["Layers (temperatures vary greatly)", "Waterproof jacket", "Comfortable hiking shoes", "Warm hat and gloves", "Sunglasses"] },
  { category: "Health", items: ["Altitude sickness medicine", "First aid kit", "Sunscreen (SPF 50+)", "Lip balm", "Personal medications"] },
  { category: "Essentials", items: ["Torch/flashlight", "Power bank", "Cash (ATMs are rare)", "ID and permits", "Reusable water bottle"] },
  { category: "Nice to Have", items: ["Camera", "Binoculars", "Journal", "Playing cards", "Snacks for the road"] },
];

const dosDonts = {
  dos: [
    "Respect local customs and dress modestly near temples",
    "Always carry cash – digital payments are rare",
    "Start acclimatizing before high-altitude treks",
    "Support local businesses and homestays",
    "Carry your trash back with you",
  ],
  donts: [
    "Don't touch temple offerings or religious items",
    "Don't play loud music in villages",
    "Don't trek alone in unfamiliar areas",
    "Don't litter – the mountains are sacred",
    "Don't expect luxury – embrace simplicity",
  ],
};

const PlanPage = () => {
  return (
    <>
      <Helmet>
        <title>Plan Your Himachal Trip - Complete Guide | Local Himachal</title>
        <meta name="description" content="Everything you need to plan your Himachal Pradesh trip. Best seasons, packing guide, budget tips, and responsible travel advice for an authentic experience." />
        <meta name="keywords" content="plan Himachal trip, best time visit Himachal, Himachal travel guide, packing list, responsible travel" />
      </Helmet>

      <Navbar />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary via-pine-deep to-primary overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80"
              alt="Plan your Himachal trip"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4 md:mb-6 leading-tight">
                Plan Your Trip
              </h1>
              <p className="font-body text-base sm:text-lg text-primary-foreground/80 mb-6 md:mb-8 leading-relaxed">
                Everything you need to know for an authentic Himachal experience. 
                From the best seasons to visit to responsible travel tips.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Seasons Section */}
        <section id="seasons" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4">
                Best Time to Visit
              </h2>
              <p className="font-body text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Himachal offers unique experiences in every season. Choose based on what you want to experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {seasons.map((season, index) => (
                <motion.div
                  key={season.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.3) }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-card"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl ${season.color} flex items-center justify-center mb-3 md:mb-4`}>
                    <season.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1">
                    {season.name}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                    {season.months}
                  </p>
                  <p className="font-body text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                    {season.description}
                  </p>
                  <ul className="space-y-1.5 md:space-y-2">
                    {season.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 font-body text-xs md:text-sm text-foreground">
                        <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packing Section */}
        <section id="packing" className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4">
                Packing Checklist
              </h2>
              <p className="font-body text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                The mountains demand preparation. Here's what you'll need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {packingList.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.3) }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-card"
                >
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <Backpack className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <h3 className="font-display text-base md:text-lg font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  <ul className="space-y-1.5 md:space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-body text-xs md:text-sm text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Reach */}
        <section id="reach" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4">
                How to Reach
              </h2>
              <p className="font-body text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to reach the mountains, each with its own charm.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 shadow-card text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Plane className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">By Air</h3>
                <p className="font-body text-sm md:text-base text-muted-foreground">
                  Airports at Chandigarh, Kullu (Bhuntar), and Kangra (Gaggal). 
                  Chandigarh is the main gateway with flights from major cities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 shadow-card text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Bus className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">By Bus</h3>
                <p className="font-body text-sm md:text-base text-muted-foreground">
                  HRTC and private buses from Delhi, Chandigarh, and other cities. 
                  Volvo buses offer comfortable overnight journeys.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 shadow-card text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Car className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">By Road</h3>
                <p className="font-body text-sm md:text-base text-muted-foreground">
                  Self-drive or hire a car. The mountain roads are scenic but challenging. 
                  A 4x4 is recommended for remote areas.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Responsible Travel */}
        <section id="responsible" className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-foreground mb-3 md:mb-4">
                Travel Responsibly
              </h2>
              <p className="font-body text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto">
                These mountains have given us so much. Here's how we can give back.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 rounded-xl md:rounded-2xl p-6 md:p-8"
              >
                <h3 className="font-display text-lg md:text-xl font-semibold text-primary-foreground mb-4 md:mb-6 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                  Do's
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {dosDonts.dos.map((item) => (
                    <li key={item} className="flex items-start gap-2 md:gap-3 font-body text-sm md:text-base text-primary-foreground/90">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 rounded-xl md:rounded-2xl p-6 md:p-8"
              >
                <h3 className="font-display text-lg md:text-xl font-semibold text-primary-foreground mb-4 md:mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-destructive flex-shrink-0" />
                  Don'ts
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {dosDonts.donts.map((item) => (
                    <li key={item} className="flex items-start gap-2 md:gap-3 font-body text-sm md:text-base text-primary-foreground/90">
                      <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-destructive mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4">
                Ready to Explore?
              </h2>
              <p className="font-body text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                Start your journey through the mountains. Discover hidden villages, 
                ancient temples, and the warmth of Himachali hospitality.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Link to="/explore" className="w-full sm:w-auto">
                  <Button variant="default" size="lg" className="gap-2 w-full sm:w-auto min-h-[48px] touch-manipulation">
                    Explore Districts
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/homestays" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto min-h-[48px] touch-manipulation">
                    Find Homestays
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PlanPage;
