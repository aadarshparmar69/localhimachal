import { motion, useReducedMotion } from "framer-motion";
import { 
  Heart, Trash2, Camera, Users, Mountain, Leaf,
  Check, X
} from "lucide-react";

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

  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary-foreground/60" />
          </div>
          <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">
            Travel With Intention
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
            Responsible & Local Travel
          </h2>
          <p className="font-body text-base md:text-lg text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            These mountains have sustained communities for millennia. 
            As travelers, we have a responsibility to protect what we came to experience.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : Math.min(index * 0.1, 0.3) }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-foreground/10"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <principle.icon className="w-5 h-5 text-primary-foreground" />
                </div>
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
                    <li key={i} className="flex items-start gap-2 font-body text-sm text-primary-foreground/90">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
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
                    <li key={i} className="flex items-start gap-2 font-body text-sm text-primary-foreground/90">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 md:mt-20 text-center max-w-2xl mx-auto"
        >
          <p className="font-display text-xl md:text-2xl text-primary-foreground/90 italic leading-relaxed">
            "Take only memories, leave only footprints — and even those, tread lightly."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
