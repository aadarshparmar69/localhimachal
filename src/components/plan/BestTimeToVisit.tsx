import { motion, useReducedMotion } from "framer-motion";
import { Sun, CloudRain, Leaf, Snowflake, Users, Camera, AlertTriangle, Check } from "lucide-react";

const seasons = [
  {
    name: "Summer",
    months: "March – June",
    icon: Sun,
    gradient: "from-amber-500/20 to-orange-500/10",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-600",
    bestFor: ["High-altitude trekkers", "Adventure seekers", "Photography enthusiasts", "First-time visitors"],
    whatToExpect: [
      "Pleasant weather in most regions (15°C–30°C)",
      "Snow melting opens high passes",
      "Apple blossoms in Kinnaur and Kullu",
      "Perfect visibility for mountain views",
      "Peak tourist season in popular spots"
    ],
    whatToAvoid: [
      "Last two weeks of June (pre-monsoon heat)",
      "Overcrowded spots like Manali Mall Road",
      "Booking last-minute in peak season"
    ],
    proTip: "May is ideal for Spiti Valley as roads open and weather is stable."
  },
  {
    name: "Monsoon",
    months: "July – September",
    icon: CloudRain,
    gradient: "from-emerald-500/20 to-teal-500/10",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-600",
    bestFor: ["Budget travelers", "Solitude seekers", "Photographers (waterfalls)", "Spiritual travelers"],
    whatToExpect: [
      "Heavy rainfall in lower Himalayas",
      "Lush green landscapes everywhere",
      "Waterfalls at their peak",
      "Fewer tourists, lower prices",
      "Manimahesh Yatra pilgrimage"
    ],
    whatToAvoid: [
      "Kinnaur-Spiti route (landslide prone)",
      "Remote treks (unpredictable weather)",
      "Driving on mountain roads at night"
    ],
    proTip: "Dharamshala and Bir are relatively safer and stunning in monsoon."
  },
  {
    name: "Autumn",
    months: "October – November",
    icon: Leaf,
    gradient: "from-orange-500/20 to-red-500/10",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-600",
    bestFor: ["Photographers", "Culture enthusiasts", "Trekkers", "Apple lovers"],
    whatToExpect: [
      "Crystal clear skies and views",
      "Comfortable temperatures (5°C–20°C)",
      "Kullu Dussehra festival",
      "Apple harvest season",
      "Post-monsoon stable weather"
    ],
    whatToAvoid: [
      "Late November (cold sets in)",
      "High passes closing by month-end",
      "Underestimating night temperatures"
    ],
    proTip: "October is arguably the best month to visit Himachal overall."
  },
  {
    name: "Winter",
    months: "December – February",
    icon: Snowflake,
    gradient: "from-sky-500/20 to-blue-500/10",
    borderColor: "border-sky-500/30",
    iconColor: "text-sky-600",
    bestFor: ["Snow lovers", "Skiers", "Honeymooners", "Offbeat explorers"],
    whatToExpect: [
      "Heavy snowfall in upper regions",
      "Shimla, Manali, Dalhousie snow-covered",
      "Skiing at Solang and Kufri",
      "Hot springs become magical",
      "Spiti accessible via Shimla only"
    ],
    whatToAvoid: [
      "Rohtang Pass (closed)",
      "Driving without snow chains",
      "Remote villages (road closures)"
    ],
    proTip: "Visit Kasol or Tirthan Valley for snow without extreme crowds."
  }
];

export const BestTimeToVisit = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="seasons" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            When to Visit
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Best Time to Visit Himachal
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each season transforms Himachal into a different world. Understanding the seasons 
            helps you choose what you'll experience — from blooming orchards to snow-covered peaks.
          </p>
        </motion.div>

        {/* Season Cards */}
        <div className="space-y-8 md:space-y-12">
          {seasons.map((season, index) => (
            <motion.div
              key={season.name}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative bg-gradient-to-br ${season.gradient} rounded-2xl md:rounded-3xl p-6 md:p-10 border ${season.borderColor} overflow-hidden`}
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-background/50 to-transparent rounded-bl-full opacity-50" />
              
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
                {/* Header */}
                <div className="lg:col-span-3">
                  <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-background shadow-soft mb-4`}>
                    <season.icon className={`w-7 h-7 md:w-8 md:h-8 ${season.iconColor}`} />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                    {season.name}
                  </h3>
                  <p className="font-body text-base text-muted-foreground">
                    {season.months}
                  </p>
                </div>

                {/* Best For */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-4 h-4 text-primary" />
                    <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wide">
                      Best For
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {season.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to Expect */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 mb-4">
                    <Camera className="w-4 h-4 text-primary" />
                    <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wide">
                      What to Expect
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {season.whatToExpect.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to Avoid + Pro Tip */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                    <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wide">
                      What to Avoid
                    </h4>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {season.whatToAvoid.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-4 bg-background/80 rounded-xl border border-border/50">
                    <p className="font-body text-sm text-foreground">
                      <span className="font-semibold">Pro Tip: </span>
                      {season.proTip}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
