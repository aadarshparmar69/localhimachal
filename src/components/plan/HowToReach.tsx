import { motion, useReducedMotion, useInView } from "framer-motion";
import { Plane, Train, Car, Bus, Clock, AlertTriangle, MapPin } from "lucide-react";
import { useRef } from "react";

const transportModes = [
  {
    icon: Plane,
    title: "By Air",
    description: "The fastest way to reach, but limited airport options within Himachal.",
    color: "bg-sky-500/10 text-sky-600",
    options: [
      {
        name: "Chandigarh Airport (IXC)",
        distance: "Main gateway to Himachal",
        details: "Well-connected to Delhi, Mumbai, Bangalore. From here, Shimla is 4 hours, Manali is 8 hours by road.",
        recommended: true
      },
      {
        name: "Kullu-Bhuntar Airport (KUU)",
        distance: "Closest to Manali & Kasol",
        details: "Limited flights from Delhi. Weather-dependent operations. Often cancelled in monsoon/winter.",
        recommended: false
      },
      {
        name: "Kangra-Gaggal Airport (DHM)",
        distance: "Gateway to Dharamshala",
        details: "Flights from Delhi. 30 mins to Dharamshala. Small airport with limited frequency.",
        recommended: false
      }
    ],
    proTip: "Fly to Chandigarh for reliability. Kullu and Kangra airports have frequent cancellations."
  },
  {
    icon: Train,
    title: "By Train",
    description: "Scenic and budget-friendly, but Himachal has no major railway stations inside.",
    color: "bg-emerald-500/10 text-emerald-600",
    options: [
      {
        name: "Chandigarh Railway Station",
        distance: "Best for Shimla, Kullu, Manali",
        details: "Major trains from Delhi, Mumbai, Kolkata. From here, take bus or taxi into Himachal.",
        recommended: true
      },
      {
        name: "Kalka Railway Station",
        distance: "For the Toy Train experience",
        details: "Take the UNESCO heritage Kalka-Shimla toy train (5-6 hours, stunning views).",
        recommended: true
      },
      {
        name: "Pathankot Railway Station",
        distance: "Gateway to Kangra, Chamba",
        details: "Good for Dharamshala, Dalhousie, and Chamba. Connects to northern Himachal.",
        recommended: false
      },
      {
        name: "Una Railway Station",
        distance: "Closest to Himachal border",
        details: "Small station but useful for Hamirpur and lower Himachal regions.",
        recommended: false
      }
    ],
    proTip: "Book the Kalka-Shimla toy train in advance. It's a bucket-list experience."
  },
  {
    icon: Bus,
    title: "By Bus",
    description: "The most connected option. HRTC and Volvo buses run from major cities.",
    color: "bg-amber-500/10 text-amber-600",
    options: [
      {
        name: "Delhi → Manali",
        distance: "12-14 hours",
        details: "Overnight Volvo buses from ISBT Kashmere Gate. Book HRTC or private operators like Himachal Tourism.",
        recommended: true
      },
      {
        name: "Delhi → Shimla",
        distance: "8-10 hours",
        details: "Regular buses throughout the day. Volvo semi-sleeper recommended for comfort.",
        recommended: true
      },
      {
        name: "Delhi → Dharamshala",
        distance: "10-12 hours",
        details: "Overnight buses available. Can also go via Chandigarh for a break.",
        recommended: false
      },
      {
        name: "Chandigarh → Various",
        distance: "Varies",
        details: "ISBT Sector 43 has buses to all major Himachal destinations. Frequent departures.",
        recommended: false
      }
    ],
    proTip: "HRTC Volvo buses are comfortable and reliable. Book at hrtchp.com or redBus."
  },
  {
    icon: Car,
    title: "By Road (Self-Drive)",
    description: "Maximum flexibility, but mountain driving requires experience and preparation.",
    color: "bg-purple-500/10 text-purple-600",
    options: [
      {
        name: "Delhi → Shimla via Chandigarh",
        distance: "350 km, 7-8 hours",
        details: "Well-maintained NH. Best for first-time Himachal drivers. Avoid night driving.",
        recommended: true
      },
      {
        name: "Delhi → Manali via Mandi",
        distance: "530 km, 10-12 hours",
        details: "Good roads till Mandi, then mountain terrain. Break journey at Chandigarh or Mandi.",
        recommended: true
      },
      {
        name: "Manali → Leh via Rohtang",
        distance: "475 km, 2 days",
        details: "High-altitude adventure route. Only open June-September. 4x4 essential.",
        recommended: false
      },
      {
        name: "Shimla → Spiti via Kinnaur",
        distance: "420 km, 2-3 days",
        details: "Scenic but challenging. Road conditions vary. Best with experienced driver.",
        recommended: false
      }
    ],
    proTip: "Rent a car with driver for remote areas. Self-drive is stressful on narrow mountain roads."
  }
];

const seasonalClosures = [
  { route: "Rohtang Pass", closure: "November – April", note: "Atal Tunnel open year-round" },
  { route: "Kunzum Pass", closure: "October – May", note: "Spiti cut off from Manali side" },
  { route: "Khardung La", closure: "Varies", note: "Check before planning Ladakh extension" },
  { route: "Sach Pass", closure: "October – June", note: "Chamba-Pangi route" }
];

export const HowToReach = () => {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
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
            Getting There
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6"
          >
            How to Reach Himachal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-body text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Multiple routes lead to the mountains. Choose based on your time, budget, 
            and how much of the journey you want to be part of the experience.
          </motion.p>
        </motion.div>

        {/* Transport Modes */}
        <motion.div 
          className="space-y-8 md:space-y-12 mb-16 md:mb-20"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {transportModes.map((mode, index) => (
            <motion.div
              key={mode.title}
              variants={prefersReducedMotion ? undefined : cardVariants}
              className="bg-card rounded-2xl md:rounded-3xl shadow-card overflow-hidden"
            >
              {/* Mode Header */}
              <motion.div 
                className="p-6 md:p-8 border-b border-border"
                whileHover={prefersReducedMotion ? undefined : { backgroundColor: "rgba(0,0,0,0.02)" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <motion.div 
                    className={`flex-shrink-0 w-14 h-14 rounded-xl ${mode.color} flex items-center justify-center`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <mode.icon className="w-7 h-7" />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-1">
                      {mode.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {mode.description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Options Grid */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {mode.options.map((option, optIndex) => (
                    <motion.div
                      key={optIndex}
                      className={`p-4 rounded-xl border ${
                        option.recommended 
                          ? 'border-primary/30 bg-primary/5' 
                          : 'border-border bg-secondary/30'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * optIndex, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -4 }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-display text-base font-semibold text-foreground">
                          {option.name}
                        </h4>
                        {option.recommended && (
                          <motion.span 
                            className="px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded-full"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            Recommended
                          </motion.span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="font-body text-xs text-muted-foreground">
                          {option.distance}
                        </span>
                      </div>
                      <p className="font-body text-sm text-muted-foreground">
                        {option.details}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Pro Tip */}
                <motion.div 
                  className="p-4 bg-primary/5 rounded-xl border border-primary/20"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <p className="font-body text-sm text-foreground">
                    <span className="font-semibold">Pro Tip: </span>
                    {mode.proTip}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Seasonal Closures */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-destructive/10 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-destructive/20"
        >
          <motion.div 
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AlertTriangle className="w-6 h-6 text-destructive" />
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Seasonal Road Closures
            </h3>
          </motion.div>
          <p className="font-body text-sm text-muted-foreground mb-6">
            High passes in Himachal close during winter due to heavy snowfall. Plan accordingly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {seasonalClosures.map((item, index) => (
              <motion.div 
                key={index} 
                className="p-4 bg-background rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-destructive" />
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    {item.route}
                  </h4>
                </div>
                <p className="font-body text-xs text-destructive font-medium mb-1">
                  Closed: {item.closure}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {item.note}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
