import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Mountain, Compass } from "lucide-react";

export const PlanHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: prefersReducedMotion ? 0 : backgroundY }}
      >
        <img
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80"
          alt="Himachal Pradesh mountains at sunrise"
          className="w-full h-[120%] object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/40" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 md:pt-0"
        style={{ y: prefersReducedMotion ? 0 : textY, opacity: prefersReducedMotion ? 1 : opacity }}
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Compass className="w-4 h-4 text-primary-foreground" />
              <span className="font-body text-sm text-primary-foreground/90 tracking-wide uppercase">
                Your Journey Starts Here
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6 leading-[1.1]"
          >
            Plan Your Himachal Trip
            <span className="block text-primary-foreground/80 mt-2 text-3xl sm:text-4xl md:text-5xl">
              — The Right Way
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-8 max-w-2xl"
          >
            Himachal is not your average destination. With terrain ranging from 500m to 6,800m, 
            diverse microclimates, remote villages, and seasonal road closures — planning matters. 
            This guide gives you the local insights you need for an authentic, safe, and memorable experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#seasons"
              className="inline-flex items-center gap-2 px-6 py-3 bg-header-bg text-foreground rounded-lg font-body font-medium 
                         transition-all duration-300 hover:bg-header-bg/90 hover:shadow-elevated touch-manipulation"
            >
              <Mountain className="w-4 h-4" />
              Start Planning
            </a>
            <a
              href="#itinerary-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-primary-foreground border border-primary-foreground/30 
                         rounded-lg font-body font-medium transition-all duration-300 hover:bg-primary-foreground/10 touch-manipulation"
            >
              Get Custom Itinerary
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-primary-foreground/60 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/40 to-transparent" />
      </motion.div>
    </section>
  );
};
