import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Mountain, MapPin, Home, Sparkles } from "lucide-react";
import { ScrollReveal, AnimatedCounter } from "@/components/animations/ScrollReveal";

const stats = [
  { value: 12, suffix: "", label: "Unique Districts", icon: MapPin },
  { value: 50, suffix: "+", label: "Hidden Gems", icon: Sparkles },
  { value: 30, suffix: "+", label: "Mountain Treks", icon: Mountain },
  { value: 100, suffix: "+", label: "Local Homestays", icon: Home },
];

export const StatsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ opacity: prefersReducedMotion ? 0.1 : opacity }}
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          style={{ opacity: prefersReducedMotion ? 0.1 : opacity }}
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        />
      </div>

      <motion.div 
        style={{ 
          opacity: prefersReducedMotion ? 1 : opacity,
          scale: prefersReducedMotion ? 1 : scale 
        }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">
            By the Numbers
          </p>
          <h2 className="font-display text-responsive-title text-foreground mb-4">
            A complete travel experience
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            From snow-capped peaks to hidden valleys, we've curated the best of Himachal for you
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal
                key={stat.label}
                delay={index * 0.1}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="p-6 sm:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: index * 0.1 + 0.2 }}
                    className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    delay={index * 0.1}
                  />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
