import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { treks } from "@/data/treks";

const featuredTreks = [
  {
    name: "Hampta Pass",
    tagline: "Where two valleys meet",
    altitude: "4,270m",
    slug: "hampta-pass",
  },
  {
    name: "Pin Parvati",
    tagline: "The crossing that transforms",
    altitude: "5,319m",
    slug: "pin-parvati-pass",
  },
  {
    name: "Kinnaur Kailash",
    tagline: "Pilgrimage to the sacred peak",
    altitude: "6,050m",
    slug: "kinnaur-kailash-parikrama",
  },
  {
    name: "Triund",
    tagline: "Gateway to the Dhauladhars",
    altitude: "2,875m",
    slug: "triund",
  },
];

export const TreksMotionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 bg-pine-deep overflow-hidden"
    >
      {/* Diagonal Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      {/* Trail Path SVG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          className="absolute w-full h-full opacity-30"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M-10,90 Q20,70 35,50 Q50,30 65,35 Q80,40 110,20"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="0.15"
            strokeDasharray="1 1"
            style={{ pathLength }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground tracking-tight mb-4">
            Trails that change you
          </h2>
          <p className="font-body text-primary-foreground/60 text-lg max-w-xl">
            Not every journey needs a summit. Some find meaning in the walking itself.
          </p>
        </motion.div>

        {/* Treks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredTreks.map((trek, index) => (
            <motion.div
              key={trek.slug}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/trek/${trek.slug}`}
                className="group block border-l-2 border-primary-foreground/10 hover:border-accent pl-6 py-4 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-display text-2xl md:text-3xl text-primary-foreground group-hover:text-accent transition-colors">
                    {trek.name}
                  </h3>
                  <span className="font-body text-sm text-primary-foreground/40">
                    {trek.altitude}
                  </span>
                </div>
                <p className="font-body text-primary-foreground/60 italic">
                  {trek.tagline}
                </p>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="h-px bg-accent/50 mt-4"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/treks"
            className="inline-flex items-center gap-3 font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
          >
            <span>View all treks</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
