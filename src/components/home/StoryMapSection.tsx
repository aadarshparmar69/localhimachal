import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import hpMap from "@/assets/hp-map.png";

const districts = [
  {
    id: "chamba",
    name: "Chamba",
    description: "Ancient temples, Chaugan meadow, and pristine Himalayan valleys.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    link: "/district/chamba",
    position: { x: 35, y: 15 },
  },
  {
    id: "kangra",
    name: "Kangra",
    description: "Dharamshala, tea gardens, and the majestic Dhauladhar range.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    link: "/district/kangra",
    position: { x: 32, y: 35 },
  },
  {
    id: "lahaul-spiti",
    name: "Lahaul & Spiti",
    description: "The land of lamas, ancient monasteries, and stark high-altitude beauty.",
    image: "https://images.unsplash.com/photo-1581159959249-fd74c26a5b80?w=600&q=80",
    link: "/district/lahaul-spiti",
    position: { x: 58, y: 22 },
  },
  {
    id: "kullu",
    name: "Kullu",
    description: "The valley of gods, temples, and vibrant festivals.",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&q=80",
    link: "/district/kullu",
    position: { x: 50, y: 40 },
  },
  {
    id: "mandi",
    name: "Mandi",
    description: "Temple town with ancient pilgrimage sites and scenic lakes.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    link: "/district/mandi",
    position: { x: 42, y: 52 },
  },
  {
    id: "hamirpur",
    name: "Hamirpur",
    description: "Land of learning with the highest literacy in Himachal.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    link: "/district/hamirpur",
    position: { x: 32, y: 50 },
  },
  {
    id: "una",
    name: "Una",
    description: "Gateway to Himachal with rich historical heritage.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
    link: "/district/una",
    position: { x: 22, y: 55 },
  },
  {
    id: "bilaspur",
    name: "Bilaspur",
    description: "Gobind Sagar Lake and ancient Naina Devi temple.",
    image: "https://images.unsplash.com/photo-1544085311-11a028465b03?w=600&q=80",
    link: "/district/bilaspur",
    position: { x: 30, y: 62 },
  },
  {
    id: "solan",
    name: "Solan",
    description: "Mushroom city with beautiful monasteries and breweries.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    link: "/district/solan",
    position: { x: 38, y: 70 },
  },
  {
    id: "shimla",
    name: "Shimla",
    description: "Colonial echoes, pine forests, and gateway to the inner Himalayas.",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&q=80",
    link: "/district/shimla",
    position: { x: 52, y: 65 },
  },
  {
    id: "kinnaur",
    name: "Kinnaur",
    description: "Where the Hindustan-Tibet road winds through apple orchards.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    link: "/district/kinnaur",
    position: { x: 70, y: 48 },
  },
  {
    id: "sirmaur",
    name: "Sirmaur",
    description: "Renuka Lake, Shivalik hills, and ancient Rajput heritage.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    link: "/district/sirmaur",
    position: { x: 52, y: 82 },
  },
];

export const StoryMapSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeDistrict, setActiveDistrict] = useState<string | null>(null);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
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
            Explore Himachal Pradesh
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Each district holds a distinct character, culture, and hidden treasures waiting to be discovered.
          </p>
        </motion.div>

        {/* Map Container */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* HP Map Image */}
            <img
              src={hpMap}
              alt="Himachal Pradesh Districts Map"
              className="w-full h-auto"
            />

            {/* Interactive Hotspots */}
            {districts.map((district, index) => (
              <motion.div
                key={district.id}
                className="absolute cursor-pointer"
                style={{
                  left: `${district.position.x}%`,
                  top: `${district.position.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveDistrict(district.id)}
                onMouseLeave={() => setActiveDistrict(null)}
              >
                {/* Hotspot Circle */}
                <div
                  className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                    activeDistrict === district.id
                      ? "bg-accent scale-125"
                      : "bg-primary/80 hover:bg-accent"
                  }`}
                />
                
                {/* Pulse Animation */}
                {activeDistrict === district.id && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-accent"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Active District Info Card */}
          <motion.div
            className="mt-8 min-h-[100px]"
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
