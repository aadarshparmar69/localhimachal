import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Clock } from "lucide-react";
import { treks } from "@/data/treks";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/animations/ScrollReveal";

const featuredTreks = treks.slice(0, 6);

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Moderate: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400", 
  Hard: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

export const TreksSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-32 bg-muted/30 overflow-hidden relative">
      {/* Animated background */}
      <motion.div 
        style={{ opacity: prefersReducedMotion ? 0.3 : backgroundOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse at 50% 0%, hsl(var(--primary) / 0.08) 0%, transparent 60%)`
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-14 sm:mb-20" blur scale>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4"
          >
            Trails & Adventures
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-responsive-title text-foreground mb-5"
          >
            Walk the ancient paths
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-muted-foreground max-w-2xl mx-auto"
          >
            From gentle day hikes to challenging high-altitude expeditions, 
            these trails reveal the true majesty of the Himalayas.
          </motion.p>
          
          {/* Decorative underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-8"
          />
        </ScrollReveal>

        {/* Horizontal scrollable on mobile, grid on desktop */}
        <StaggerContainer 
          className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible scrollbar-hide snap-x snap-mandatory"
          staggerDelay={0.1}
          delayChildren={0.2}
        >
          {featuredTreks.map((trek, index) => (
            <StaggerItem
              key={trek.id}
              className="flex-shrink-0 w-[82%] sm:w-auto snap-start"
            >
              <motion.div
                whileHover={{ y: prefersReducedMotion ? 0 : -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  to={`/trek/${trek.slug}`}
                  className="group block bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <motion.img
                      src={trek.image}
                      alt={trek.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: prefersReducedMotion ? 1 : 1.1 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      loading="lazy"
                    />
                    {/* Difficulty Badge */}
                    <motion.div 
                      className="absolute top-3 left-3"
                      initial={{ opacity: 0, scale: 0.8, y: -10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    >
                      <span className={cn(
                        "text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm",
                        difficultyColors[trek.difficulty]
                      )}>
                        {trek.difficulty}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <motion.h3
                      className="font-display text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      {trek.name}
                    </motion.h3>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{trek.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Mountain className="w-3.5 h-3.5" />
                        <span>{trek.altitude}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {trek.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Scroll hint on mobile */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-5 sm:hidden"
        >
          <motion.span 
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs text-muted-foreground/60"
          >
            ← Swipe to explore →
          </motion.span>
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-10 sm:mt-14"
        >
          <Link 
            to="/treks" 
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
          >
            <span>View all treks</span>
            <motion.div
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
