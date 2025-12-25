import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const districts = [
  {
    id: "chamba",
    name: "Chamba",
    description: "Ancient temples, Chaugan meadow, and pristine Himalayan valleys.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    link: "/district/chamba",
    path: "M12,8 L28,5 L35,8 L38,15 L35,22 L28,25 L22,22 L18,18 L12,15 Z",
    labelPosition: { x: 22, y: 15 },
  },
  {
    id: "kangra",
    name: "Kangra",
    description: "Dharamshala, tea gardens, and the majestic Dhauladhar range.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    link: "/district/kangra",
    path: "M8,18 L18,18 L22,22 L28,25 L28,32 L22,38 L15,38 L10,32 L8,25 Z",
    labelPosition: { x: 18, y: 28 },
  },
  {
    id: "lahaul-spiti",
    name: "Lahaul & Spiti",
    description: "The land of lamas, ancient monasteries, and stark high-altitude beauty.",
    image: "https://images.unsplash.com/photo-1581159959249-fd74c26a5b80?w=600&q=80",
    link: "/district/lahaul-spiti",
    path: "M35,8 L55,3 L75,5 L78,12 L75,22 L68,28 L58,30 L48,28 L42,25 L38,15 Z",
    labelPosition: { x: 55, y: 15 },
  },
  {
    id: "kullu",
    name: "Kullu",
    description: "The valley of gods, temples, and vibrant festivals.",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&q=80",
    link: "/district/kullu",
    path: "M35,22 L42,25 L48,28 L52,35 L48,42 L40,45 L32,42 L28,35 L28,25 Z",
    labelPosition: { x: 40, y: 35 },
  },
  {
    id: "mandi",
    name: "Mandi",
    description: "Temple town with ancient pilgrimage sites and scenic lakes.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    link: "/district/mandi",
    path: "M22,38 L28,35 L32,42 L40,45 L42,52 L38,58 L30,58 L22,55 L18,48 L18,42 Z",
    labelPosition: { x: 30, y: 48 },
  },
  {
    id: "hamirpur",
    name: "Hamirpur",
    description: "Land of learning with the highest literacy in Himachal.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    link: "/district/hamirpur",
    path: "M10,32 L15,38 L18,42 L18,48 L14,52 L8,50 L6,42 L8,35 Z",
    labelPosition: { x: 12, y: 42 },
  },
  {
    id: "una",
    name: "Una",
    description: "Gateway to Himachal with rich historical heritage.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
    link: "/district/una",
    path: "M6,42 L8,50 L14,52 L14,60 L8,62 L3,58 L3,48 Z",
    labelPosition: { x: 8, y: 52 },
  },
  {
    id: "bilaspur",
    name: "Bilaspur",
    description: "Gobind Sagar Lake and ancient Naina Devi temple.",
    image: "https://images.unsplash.com/photo-1544085311-11a028465b03?w=600&q=80",
    link: "/district/bilaspur",
    path: "M14,52 L18,48 L22,55 L22,62 L18,66 L14,65 L14,60 Z",
    labelPosition: { x: 18, y: 58 },
  },
  {
    id: "solan",
    name: "Solan",
    description: "Mushroom city with beautiful monasteries and breweries.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    link: "/district/solan",
    path: "M22,55 L30,58 L35,62 L35,70 L28,75 L20,72 L18,66 L22,62 Z",
    labelPosition: { x: 28, y: 65 },
  },
  {
    id: "shimla",
    name: "Shimla",
    description: "Colonial echoes, pine forests, and gateway to the inner Himalayas.",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&q=80",
    link: "/district/shimla",
    path: "M38,58 L42,52 L48,55 L55,58 L58,65 L55,72 L48,75 L38,72 L35,70 L35,62 Z",
    labelPosition: { x: 48, y: 65 },
  },
  {
    id: "kinnaur",
    name: "Kinnaur",
    description: "Where the Hindustan-Tibet road winds through apple orchards.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    link: "/district/kinnaur",
    path: "M58,30 L68,28 L75,22 L82,25 L88,32 L90,45 L85,55 L78,58 L70,55 L62,52 L55,48 L52,42 L52,35 Z",
    labelPosition: { x: 72, y: 42 },
  },
  {
    id: "sirmaur",
    name: "Sirmaur",
    description: "Renuka Lake, Shivalik hills, and ancient Rajput heritage.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    link: "/district/sirmaur",
    path: "M55,72 L58,65 L62,60 L70,62 L78,65 L80,72 L75,80 L65,82 L55,80 L50,78 L48,75 Z",
    labelPosition: { x: 65, y: 72 },
  },
];

export const StoryMapSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeDistrict, setActiveDistrict] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-body mb-4">
            12 Districts
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            A land of many worlds
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            From tropical foothills to frozen high passes, each region holds a distinct character.
          </p>
        </motion.div>

        {/* Map Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[4/3] md:aspect-[16/10]">
            {/* Stylized SVG Map */}
            <svg
              viewBox="0 0 95 88"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="districtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="activeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.1" />
                </filter>
              </defs>

              {/* Neighboring states labels */}
              <text x="50" y="2" className="fill-muted-foreground/40 text-[3px] font-body" textAnchor="middle">
                Jammu & Kashmir
              </text>
              <text x="92" y="35" className="fill-muted-foreground/40 text-[3px] font-body" textAnchor="end">
                China
              </text>
              <text x="3" y="60" className="fill-muted-foreground/40 text-[3px] font-body" textAnchor="start">
                Punjab
              </text>
              <text x="85" y="82" className="fill-muted-foreground/40 text-[3px] font-body" textAnchor="end">
                Uttarakhand
              </text>

              {/* District paths */}
              {districts.map((district, index) => (
                <motion.g
                  key={district.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActiveDistrict(district.id)}
                  onMouseLeave={() => setActiveDistrict(null)}
                  className="cursor-pointer"
                >
                  <motion.path
                    d={district.path}
                    fill={activeDistrict === district.id ? "url(#activeGradient)" : "url(#districtGradient)"}
                    stroke={activeDistrict === district.id ? "hsl(var(--accent))" : "hsl(var(--border))"}
                    strokeWidth={activeDistrict === district.id ? "0.8" : "0.4"}
                    filter={activeDistrict === district.id ? "url(#glow)" : undefined}
                    className="transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  />
                  
                  {/* District center marker */}
                  <circle
                    cx={district.labelPosition.x}
                    cy={district.labelPosition.y}
                    r={activeDistrict === district.id ? 1.5 : 1}
                    fill={activeDistrict === district.id ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                    className="transition-all duration-300"
                  />
                  
                  {/* Pulse animation for active district */}
                  {activeDistrict === district.id && (
                    <motion.circle
                      cx={district.labelPosition.x}
                      cy={district.labelPosition.y}
                      r="3"
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth="0.3"
                      initial={{ scale: 0.5, opacity: 1 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.g>
              ))}

              {/* Journey trail path */}
              <motion.path
                d="M18,15 Q30,25 40,35 Q50,42 55,50 Q60,55 68,55 Q75,55 80,50"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="0.4"
                strokeDasharray="2 2"
                strokeLinecap="round"
                style={{ pathLength: pathProgress }}
                filter="url(#glow)"
                opacity={0.6}
              />
            </svg>

            {/* District Labels */}
            {districts.map((district) => (
              <motion.div
                key={district.id}
                className="absolute pointer-events-none hidden md:block"
                style={{
                  left: `${(district.labelPosition.x / 95) * 100}%`,
                  top: `${(district.labelPosition.y / 88) * 100}%`,
                  transform: "translate(-50%, 12px)",
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeDistrict === district.id ? 1 : 0.6,
                  scale: activeDistrict === district.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <span
                  className={`font-body text-[10px] md:text-xs whitespace-nowrap transition-colors duration-300 ${
                    activeDistrict === district.id ? "text-accent font-medium" : "text-muted-foreground"
                  }`}
                >
                  {district.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Active District Info Card */}
          <motion.div
            className="mt-8 h-24"
            initial={false}
          >
            {activeDistrict && (
              <motion.div
                key={activeDistrict}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center"
              >
                {districts
                  .filter((d) => d.id === activeDistrict)
                  .map((district) => (
                    <Link
                      key={district.id}
                      to={district.link}
                      className="block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 max-w-md w-full"
                    >
                      <div className="flex items-center gap-4 p-4">
                        <img
                          src={district.image}
                          alt={district.name}
                          className="w-20 h-20 rounded-xl object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display text-lg text-card-foreground mb-1">
                            {district.name}
                          </h4>
                          <p className="font-body text-sm text-muted-foreground line-clamp-2">
                            {district.description}
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
              </motion.div>
            )}
            
            {!activeDistrict && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted-foreground font-body text-sm"
              >
                Hover over a district to explore
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 font-body text-primary hover:text-accent transition-colors group"
          >
            <span>Explore all districts</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="group-hover:text-accent"
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
