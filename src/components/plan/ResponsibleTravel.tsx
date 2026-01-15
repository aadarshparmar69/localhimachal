import { motion, useReducedMotion, useInView } from "framer-motion";
import { 
  Heart, Trash2, Camera, Users, Mountain, Leaf,
  Check, X
} from "lucide-react";
import { useRef } from "react";

const principles = [
  {
    icon: Trash2,
    title: "Leave No Trace",
    description: "The mountains are not a dumping ground. What you bring in, you take out.",
    dos: [
      "Carry reusable bags for all your waste",
      "Pick up litter even if it's not yours",
      "Use biodegradable products when possible",
      "Dispose of waste properly in towns"
    ],
    donts: [
      "Throw wrappers, bottles, or cigarette butts",
      "Burn plastic — it releases toxins",
      "Leave food waste on trails",
      "Use single-use plastics unnecessarily"
    ]
  },
  {
    icon: Users,
    title: "Respect Local Communities",
    description: "Villages are homes, not tourist attractions. Treat residents with the dignity they deserve.",
    dos: [
      "Ask permission before photographing people",
      "Learn basic greetings in Hindi or local dialect",
      "Support local businesses over chains",
      "Dress modestly, especially near temples"
    ],
    donts: [
      "Barge into private homes or kitchens",
      "Play loud music in quiet villages",
      "Bargain aggressively with local vendors",
      "Treat locals as exotic photo subjects"
    ]
  },
  {
    icon: Mountain,
    title: "Tread Lightly on Trails",
    description: "Trails are fragile ecosystems. Your footprint matters — literally.",
    dos: [
      "Stick to marked trails",
      "Camp only in designated areas",
      "Use existing fire rings if fires are allowed",
      "Respect wildlife from a distance"
    ],
    donts: [
      "Create new shortcuts or trails",
      "Collect plants, rocks, or artifacts",
      "Feed wild animals",
      "Make excessive noise in forests"
    ]
  },
  {
    icon: Camera,
    title: "Photograph Responsibly",
    description: "Capture memories, not controversy. Some moments are not meant for Instagram.",
    dos: [
      "Ask before photographing people or rituals",
      "Respect 'no photography' signs",
      "Share locations responsibly on social media",
      "Credit local guides and hosts"
    ],
    donts: [
      "Use drones without permission",
      "Photograph military areas or installations",
      "Share exact locations of fragile sites",
      "Prioritize content over experience"
    ]
  },
  {
    icon: Leaf,
    title: "Support Sustainable Tourism",
    description: "Your choices shape the future of these places. Choose wisely.",
    dos: [
      "Stay in locally-owned homestays",
      "Hire local guides for treks",
      "Buy handicrafts directly from artisans",
      "Eat at local dhabas over chain restaurants"
    ],
    donts: [
      "Support resorts that harm the environment",
      "Use tour operators with poor practices",
      "Buy wildlife products or souvenirs",
      "Waste water or electricity"
    ]
  }
];

export const ResponsibleTravel = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      filter: "blur(10px)",
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] as const
      } 
    }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div 
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Heart className="w-5 h-5 text-primary-foreground/60" />
          </motion.div>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4"
          >
            Travel With Intention
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-foreground mb-6"
          >
            Responsible & Local Travel
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-body text-base md:text-lg text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed"
          >
            These mountains have sustained communities for millennia. 
            As travelers, we have a responsibility to protect what we came to experience.
          </motion.p>
        </motion.div>

        {/* Principles Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              variants={prefersReducedMotion ? undefined : cardVariants}
              whileHover={prefersReducedMotion ? undefined : { 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-foreground/10"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <principle.icon className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground">
                  {principle.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-body text-sm text-primary-foreground/70 mb-6 leading-relaxed">
                {principle.description}
              </p>

              {/* Do's */}
              <div className="mb-4">
                <h4 className="font-body text-xs uppercase tracking-wider text-primary-foreground/50 mb-3">
                  Do
                </h4>
                <ul className="space-y-2">
                  {principle.dos.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-2 font-body text-sm text-primary-foreground/90"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div>
                <h4 className="font-body text-xs uppercase tracking-wider text-primary-foreground/50 mb-3">
                  Don't
                </h4>
                <ul className="space-y-2">
                  {principle.donts.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-2 font-body text-sm text-primary-foreground/90"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.2, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 md:mt-20 text-center max-w-2xl mx-auto"
        >
          <motion.p 
            className="font-display text-xl md:text-2xl text-primary-foreground/90 italic leading-relaxed"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            "Take only memories, leave only footprints — and even those, tread lightly."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
