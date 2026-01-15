import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";
import { useRef } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PlanHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Smooth spring-based parallax
  const rawBackgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const backgroundY = useSpring(rawBackgroundY, { stiffness: 100, damping: 30 });
  
  const rawBackgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const backgroundScale = useSpring(rawBackgroundScale, { stiffness: 100, damping: 30 });
  
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);

  const scrollToItinerary = () => {
    const itinerarySection = document.getElementById('itinerary-form');
    if (itinerarySection) {
      itinerarySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative h-[100svh] flex items-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div 
        className="absolute inset-0 will-change-transform"
        style={{ 
          y: prefersReducedMotion ? 0 : backgroundY,
          scale: prefersReducedMotion ? 1 : backgroundScale
        }}
      >
        <img
          src="/lovable-uploads/214cbb36-68b8-4dbe-929e-2ceff5625eb9.jpg"
          alt="Snow-covered Himalayan mountains in Himachal Pradesh"
          className="w-full h-[130%] object-cover"
          loading="eager"
        />
        
        {/* Grain Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay hidden sm:block" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }} 
        />
        
        {/* Dark gradient overlay - no white/light fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/40 to-foreground/70" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ 
          y: prefersReducedMotion ? 0 : contentY, 
          opacity: prefersReducedMotion ? 1 : contentOpacity 
        }}
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <MapPin className="w-4 h-4 text-primary-foreground/70" />
              <span className="font-body text-sm text-primary-foreground/80 tracking-wide uppercase">
                Your Journey Starts Here
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-primary-foreground mb-6 leading-[1.1] tracking-tight"
          >
            Plan Your Himachal Trip
            <span className="block text-primary-foreground/80 mt-2">
              — The Right Way
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 max-w-3xl"
          >
            Himachal is not your average destination. With terrain ranging from 500m to 6,800m, 
            diverse microclimates, remote villages, and seasonal road closures — planning matters. 
            This guide gives you the local insights you need for an authentic, safe, and memorable experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button 
                onClick={scrollToItinerary}
                variant="default" 
                size="lg" 
                className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-medium px-8 shadow-lg gap-2"
              >
                <MapPin className="w-4 h-4" />
                Start Planning
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onClick={scrollToItinerary}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors cursor-pointer z-20 min-h-[44px] min-w-[44px] justify-center"
        aria-label="Scroll to itinerary form"
      >
        <span className="font-body text-[10px] text-primary-foreground/50 uppercase tracking-[0.3em]">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
};
