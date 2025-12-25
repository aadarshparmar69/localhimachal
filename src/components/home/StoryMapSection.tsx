import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const regions = [
  {
    id: "spiti",
    name: "Spiti Valley",
    description: "The land of lamas, ancient monasteries, and stark high-altitude beauty.",
    position: { x: 65, y: 15 },
    image: "https://images.unsplash.com/photo-1581159959249-fd74c26a5b80?w=600&q=80",
    link: "/district/lahaul-spiti",
  },
  {
    id: "kinnaur",
    name: "Kinnaur",
    description: "Where the Hindustan-Tibet road winds through apple orchards and tribal villages.",
    position: { x: 75, y: 35 },
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    link: "/district/kinnaur",
  },
  {
    id: "kullu",
    name: "Kullu Valley",
    description: "The valley of gods, temples, and vibrant festivals.",
    position: { x: 45, y: 40 },
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&q=80",
    link: "/district/kullu",
  },
  {
    id: "kangra",
    name: "Kangra Valley",
    description: "Ancient tea gardens, Tibetan settlements, and the Dhauladhar range.",
    position: { x: 25, y: 35 },
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    link: "/district/kangra",
  },
  {
    id: "shimla",
    name: "Shimla Hills",
    description: "Colonial echoes, pine forests, and gateway to the inner Himalayas.",
    position: { x: 55, y: 65 },
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&q=80",
    link: "/district/shimla",
  },
];

export const StoryMapSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            A land of many worlds
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            From tropical foothills to frozen high passes, each region holds a distinct character.
          </p>
        </motion.div>

        {/* Map Container */}
        <div className="relative aspect-[16/10] md:aspect-[2/1] max-w-5xl mx-auto">
          {/* Stylized SVG Map */}
          <svg
            viewBox="0 0 100 70"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Mountain Range Silhouette */}
            <defs>
              <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Abstract State Outline */}
            <motion.path
              d="M10,50 Q20,35 30,30 Q45,25 55,20 Q70,15 85,25 Q90,35 88,45 Q85,55 75,60 Q60,65 45,62 Q30,60 20,55 Q12,52 10,50 Z"
              fill="url(#mountainGrad)"
              stroke="hsl(var(--border))"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            />

            {/* Trail Path */}
            <motion.path
              d="M20,50 Q35,40 50,35 Q65,30 80,25"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              style={{ pathLength: pathProgress }}
              filter="url(#glow)"
            />

            {/* Region Markers */}
            {regions.map((region, index) => (
              <motion.g
                key={region.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveRegion(region.id)}
                onMouseLeave={() => setActiveRegion(null)}
                className="cursor-pointer"
              >
                <circle
                  cx={region.position.x}
                  cy={region.position.y}
                  r={activeRegion === region.id ? 2.5 : 1.8}
                  fill={activeRegion === region.id ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                  className="transition-all duration-300"
                />
                {activeRegion === region.id && (
                  <motion.circle
                    cx={region.position.x}
                    cy={region.position.y}
                    r="4"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="0.2"
                    initial={{ scale: 0.5, opacity: 1 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.g>
            ))}
          </svg>

          {/* Region Labels (positioned absolutely) */}
          {regions.map((region) => (
            <motion.div
              key={region.id}
              className="absolute pointer-events-none"
              style={{
                left: `${region.position.x}%`,
                top: `${region.position.y}%`,
                transform: "translate(-50%, 20px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeRegion === region.id ? 1 : 0.7 }}
            >
              <span
                className={`font-body text-xs md:text-sm whitespace-nowrap transition-colors duration-300 ${
                  activeRegion === region.id ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {region.name}
              </span>
            </motion.div>
          ))}

          {/* Active Region Info Card */}
          {activeRegion && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-8 w-full max-w-sm"
            >
              {regions
                .filter((r) => r.id === activeRegion)
                .map((region) => (
                  <Link
                    key={region.id}
                    to={region.link}
                    className="block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
                  >
                    <div className="flex items-center gap-4 p-4">
                      <img
                        src={region.image}
                        alt={region.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-display text-lg text-card-foreground">
                          {region.name}
                        </h4>
                        <p className="font-body text-sm text-muted-foreground line-clamp-2">
                          {region.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 font-body text-primary hover:text-accent transition-colors"
          >
            <span>Explore all 12 districts</span>
            <motion.span
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
