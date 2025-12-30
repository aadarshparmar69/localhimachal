import { motion, useReducedMotion } from "framer-motion";
import { 
  Route, Mountain, Wifi, Banknote, ShieldCheck, ThermometerSun,
  AlertCircle, Info
} from "lucide-react";

const essentials = [
  {
    icon: Route,
    title: "Road Conditions",
    description: "Mountain roads are narrow, winding, and often unpaved. Landslides during monsoon and snow in winter can block routes for days.",
    tips: [
      "Check BRO road status before traveling to Spiti/Kinnaur",
      "Carry extra fuel — stations are sparse in remote areas",
      "Start drives early to avoid afternoon fog and darkness",
      "A 4x4 or high ground clearance vehicle is essential for places like Spiti"
    ],
    warning: "Rohtang Pass is closed December–April. Atal Tunnel is open year-round."
  },
  {
    icon: Mountain,
    title: "Altitude & Acclimatization",
    description: "Himachal ranges from 500m (Una) to 6,800m (Leo Pargial). Altitude sickness is real and can be dangerous if ignored.",
    tips: [
      "Spend 1-2 nights at intermediate altitude before going higher",
      "Stay hydrated — drink 3-4 liters of water daily",
      "Avoid alcohol and smoking at high altitudes",
      "Recognize symptoms: headache, nausea, dizziness",
      "Diamox can help, but consult a doctor first"
    ],
    warning: "If symptoms worsen, descend immediately. Don't push through."
  },
  {
    icon: Wifi,
    title: "Connectivity & Network",
    description: "Mobile networks are unreliable in remote areas. Prepare to be offline for extended periods.",
    tips: [
      "BSNL has the widest coverage in remote Himachal",
      "Jio and Airtel work well in towns but fail in valleys",
      "Download offline maps (Google Maps, Maps.me)",
      "Inform family of your itinerary before going off-grid",
      "Carry a power bank — charging points are scarce"
    ],
    warning: "In Spiti, Kinnaur, and Pangi, expect no signal for days."
  },
  {
    icon: Banknote,
    title: "Cash & ATM Availability",
    description: "Digital payments are rare in villages. ATMs exist only in district headquarters and may run out of cash.",
    tips: [
      "Withdraw enough cash before entering remote areas",
      "Keep small denominations (₹10, ₹20, ₹50, ₹100)",
      "Budget ₹1,500–3,000/day for mid-range travel",
      "Homestays often prefer cash payment",
      "Carry some emergency backup (hidden stash)"
    ],
    warning: "ATMs in Kaza, Keylong, and remote areas frequently malfunction or run dry."
  },
  {
    icon: ShieldCheck,
    title: "Safety & Preparedness",
    description: "The mountains demand respect. Weather changes rapidly, and help can be hours away.",
    tips: [
      "Never trek alone in unfamiliar terrain",
      "Carry a basic first-aid kit always",
      "Inform your accommodation of your plans",
      "Respect local advice about weather and routes",
      "Travel insurance with mountain rescue coverage is wise"
    ],
    warning: "Helicopter rescue in remote areas costs ₹2-5 lakhs. Insurance helps."
  },
  {
    icon: ThermometerSun,
    title: "Weather Reality",
    description: "Temperature swings of 20°C between day and night are common. Dress in layers, always.",
    tips: [
      "Check weather.gov.in for Himachal forecasts",
      "Pack for all seasons regardless of when you visit",
      "Mornings are cold even in summer at high altitude",
      "Afternoon sun can be intense — carry sunscreen (SPF 50+)",
      "Rain gear is essential May–September"
    ],
    warning: "Weather in mountains is unpredictable. Always have a backup plan."
  }
];

export const TripEssentials = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

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
            Before You Go
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Trip Planning Essentials
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Himachal's beauty comes with challenges. Understanding these realities 
            before you travel will make your journey safer and more enjoyable.
          </p>
        </motion.div>

        {/* Essentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {essentials.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : Math.min(index * 0.1, 0.3) }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-sm text-muted-foreground mb-5 leading-relaxed">
                {item.description}
              </p>

              {/* Tips */}
              <ul className="space-y-2.5 mb-5">
                {item.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-2.5 font-body text-sm text-foreground">
                    <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>

              {/* Warning */}
              <div className="p-4 bg-destructive/10 rounded-xl border border-destructive/20">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="font-body text-xs text-destructive leading-relaxed">
                    {item.warning}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
