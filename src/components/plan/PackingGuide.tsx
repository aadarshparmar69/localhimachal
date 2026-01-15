import { motion, useReducedMotion, useInView } from "framer-motion";
import { 
  Shirt, Pill, Smartphone, FileText, Backpack, 
  Check, Lightbulb
} from "lucide-react";
import { useRef } from "react";

const packingCategories = [
  {
    icon: Shirt,
    title: "Clothing",
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    advice: "Layering is everything in Himachal. Temperatures can swing 20°C between morning and afternoon.",
    items: [
      { name: "Thermal inner layers", note: "Essential above 3,000m" },
      { name: "Fleece or wool mid-layer", note: "Lightweight but warm" },
      { name: "Waterproof jacket with hood", note: "Gore-Tex or similar" },
      { name: "Quick-dry trekking pants", note: "Avoid jeans — they're cold when wet" },
      { name: "Comfortable hiking boots", note: "Broken in before trip" },
      { name: "Warm socks (wool blend)", note: "Pack 3-4 pairs" },
      { name: "Beanie and gloves", note: "Even in summer for high altitudes" },
      { name: "Sunglasses (UV protected)", note: "Snow glare is intense" },
      { name: "Scarf or buff", note: "Dust protection on roads" }
    ]
  },
  {
    icon: Backpack,
    title: "Travel Essentials",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    advice: "Pack light but smart. You'll often carry your own bag on treks and bumpy jeep rides.",
    items: [
      { name: "Headlamp/flashlight", note: "Power cuts are common" },
      { name: "Reusable water bottle", note: "Stay hydrated, reduce plastic" },
      { name: "Daypack (20-30L)", note: "For day hikes and excursions" },
      { name: "Sleeping bag liner", note: "Homestays may have basic bedding" },
      { name: "Dry bags/zip-lock pouches", note: "Protect electronics from rain" },
      { name: "Multi-tool or Swiss knife", note: "Endless uses" },
      { name: "Duct tape (small roll)", note: "Fixes almost anything" },
      { name: "Sunscreen SPF 50+", note: "Reapply every 2 hours at altitude" },
      { name: "Lip balm with SPF", note: "Lips crack easily in dry cold" }
    ]
  },
  {
    icon: Pill,
    title: "Health & Medicine",
    color: "bg-red-500/10 text-red-600 border-red-500/20",
    advice: "Medical facilities are limited in remote areas. Carry what you might need.",
    items: [
      { name: "Personal prescription medicines", note: "Enough for trip + buffer" },
      { name: "Altitude sickness medicine", note: "Diamox (consult doctor)" },
      { name: "Pain relievers", note: "Paracetamol, Ibuprofen" },
      { name: "Anti-diarrhea medicine", note: "Loperamide, ORS packets" },
      { name: "Motion sickness pills", note: "Essential for mountain roads" },
      { name: "Band-aids and antiseptic", note: "Basic wound care" },
      { name: "Electrolyte sachets", note: "Prevent dehydration" },
      { name: "Insect repellent", note: "Mosquitoes in lower valleys" },
      { name: "Eye drops", note: "Dust and dry air relief" }
    ]
  },
  {
    icon: Smartphone,
    title: "Tech & Gadgets",
    color: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    advice: "Keep devices charged and protected. Power supply is unreliable in remote areas.",
    items: [
      { name: "High-capacity power bank", note: "20,000mAh minimum" },
      { name: "Universal travel adapter", note: "Indian sockets vary" },
      { name: "Offline maps downloaded", note: "Google Maps, Maps.me" },
      { name: "Camera with extra batteries", note: "Cold drains batteries fast" },
      { name: "Memory cards (backup)", note: "You'll take more photos than expected" },
      { name: "Portable charger for camera", note: "If applicable" },
      { name: "Kindle or e-reader", note: "For power-cut evenings" },
      { name: "Bluetooth speaker (small)", note: "Optional, but nice at camps" }
    ]
  },
  {
    icon: FileText,
    title: "Documents",
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    advice: "Keep physical copies. Digital backups fail when there's no network.",
    items: [
      { name: "Government ID (Aadhar/Passport)", note: "Required at checkpoints" },
      { name: "Photocopies of all IDs", note: "Carry separately from originals" },
      { name: "Inner Line Permits", note: "Required for Kinnaur, Spiti, Lahaul" },
      { name: "Hotel/homestay confirmations", note: "Printed or screenshot" },
      { name: "Emergency contacts list", note: "Handwritten backup" },
      { name: "Travel insurance documents", note: "With emergency numbers" },
      { name: "Vehicle documents", note: "If self-driving" },
      { name: "Vaccination certificate", note: "If required" }
    ]
  }
];

export const PackingGuide = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      filter: "blur(12px)",
      scale: 0.96
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] as const
      } 
    }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
          >
            Pack Smart
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6"
          >
            Complete Packing Guide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-body text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            The right gear makes all the difference in the mountains. This isn't a checklist — 
            it's practical advice from experience.
          </motion.p>
        </motion.div>

        {/* Packing Categories */}
        <motion.div 
          className="space-y-8 md:space-y-12"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {packingCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={prefersReducedMotion ? undefined : cardVariants}
              className="bg-card rounded-2xl md:rounded-3xl shadow-card overflow-hidden"
            >
              {/* Category Header */}
              <motion.div 
                className="p-6 md:p-8 border-b border-border"
                whileHover={prefersReducedMotion ? undefined : { backgroundColor: "rgba(0,0,0,0.02)" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <motion.div 
                    className={`flex-shrink-0 w-14 h-14 rounded-xl ${category.color} border flex items-center justify-center`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <category.icon className="w-7 h-7" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="font-body text-sm text-muted-foreground">
                        {category.advice}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Items Grid */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * itemIndex, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4 }}
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-body text-sm font-medium text-foreground">
                          {item.name}
                        </p>
                        <p className="font-body text-xs text-muted-foreground">
                          {item.note}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
