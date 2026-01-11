import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { hiddenGems } from "@/data/hiddenGems";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const featuredGems = hiddenGems.slice(0, 4);

export const HiddenGemsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundX = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 100]);

  return (
    <section 
      ref={containerRef}
      className="py-16 sm:py-20 lg:py-24 bg-background overflow-hidden relative"
    >
      {/* Animated background pattern */}
      <motion.div
        style={{ x: backgroundX }}
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.05) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, hsl(var(--accent) / 0.05) 0%, transparent 50%)`
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="max-w-3xl mb-12 sm:mb-16" blur>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary/60" />
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Off the Map
            </p>
          </div>
          <h2 className="font-display text-responsive-title text-foreground mb-4">
            Places that stay with you
          </h2>
          <p className="font-body text-muted-foreground">
            These are the valleys and villages where time moves differently—where every 
            footstep feels like a discovery.
          </p>
        </ScrollReveal>

        {/* Alternating cards with left/right reveal */}
        <div className="space-y-5 sm:space-y-6 mb-12 sm:mb-14">
          {featuredGems.map((gem, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={gem.id}
                initial={{ 
                  opacity: 0, 
                  x: prefersReducedMotion ? 0 : (isEven ? -50 : 50),
                  scale: 0.95
                }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: prefersReducedMotion ? 0 : index * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ y: prefersReducedMotion ? 0 : -6 }}
              >
                <Link
                  to={`/hidden-gems/${gem.slug}`}
                  className={`group flex flex-col ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 border border-transparent hover:border-primary/10`}
                >
                  {/* Image */}
                  <div className="sm:w-2/5 lg:w-1/3 aspect-[16/10] sm:aspect-auto overflow-hidden relative">
                    <motion.img
                      src={gem.image !== "/placeholder.svg" ? gem.image : `https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80`}
                      alt={gem.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: prefersReducedMotion ? 1 : 1.08 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      loading="lazy"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-foreground/90 text-foreground text-xs font-medium capitalize"
                    >
                      {gem.category}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 sm:p-7 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{gem.district}</span>
                      <span className="mx-1.5">•</span>
                      <span>{gem.altitude}</span>
                      <span className="mx-1.5">•</span>
                      <span className="text-primary/80">{gem.difficulty}</span>
                    </div>
                    
                    <h3 className="font-display text-xl sm:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {gem.name}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-muted-foreground line-clamp-2 mb-4">
                      {gem.shortDescription}
                    </p>
                    
                    <motion.div 
                      className="flex items-center gap-2 text-sm font-medium text-primary"
                      initial={{ opacity: 0.7, x: 0 }}
                      whileHover={{ opacity: 1, x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Discover more</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link 
            to="/hidden-gems" 
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 hover:bg-primary/10 border border-primary/20 text-foreground font-medium transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Explore all hidden gems</span>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
