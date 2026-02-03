import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring-based parallax
  const rawBackgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const backgroundY = useSpring(rawBackgroundY, { stiffness: 100, damping: 30 });
  
  const rawBackgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const backgroundScale = useSpring(rawBackgroundScale, { stiffness: 100, damping: 30 });
  
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.35], [0, -60]);
  const contentScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.95]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: "smooth"
    });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background with smooth parallax */}
      <motion.div 
        style={{
          y: prefersReducedMotion ? 0 : backgroundY,
          scale: prefersReducedMotion ? 1 : backgroundScale
        }} 
        className="absolute inset-0 will-change-transform"
      >
        <img 
          alt="Himalayan Valley in Himachal Pradesh" 
          className="w-full h-[130%] object-cover" 
          loading="eager" 
          src="/lovable-uploads/ac12a42b-8efd-4436-986d-41f272634626.jpg" 
        />
        
        {/* Grain Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay hidden sm:block" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }} 
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 via-foreground/40 to-foreground" />
      </motion.div>

      {/* Content with smooth transitions */}
      <motion.div 
        style={{
          opacity: prefersReducedMotion ? 1 : contentOpacity,
          y: prefersReducedMotion ? 0 : contentY,
          scale: prefersReducedMotion ? 1 : contentScale,
        }} 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl -mt-[14vh] sm:-mt-[10vh] md:-mt-[8vh]"
      >
        {/* Decorative element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
          className="flex justify-center mb-6"
        />

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} 
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} 
          className="font-body text-sm sm:text-base tracking-[0.25em] uppercase text-primary-foreground/50 mb-4 sm:mb-5"
        >
          A journey into the heart of
        </motion.p>
        
        {/* Main heading with staggered character animation */}
        <motion.h1 
          initial={{ opacity: 0, y: 30, filter: "blur(15px)" }} 
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} 
          className="font-display text-responsive-hero font-medium text-primary-foreground tracking-tight leading-[1.02] mb-5 sm:mb-6"
        >
          Himachal Pradesh
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} 
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
          transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} 
          className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/65 max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12 px-4"
        >
          Discover hidden villages, sacred temples, and untouched trails
          <span className="hidden sm:inline"> — </span>
          <span className="sm:hidden"><br /></span>
          through the eyes of those who call these mountains home.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }} 
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
          transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <Link to="/plan#itinerary-form">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="default" 
                size="lg" 
                className="w-full sm:w-auto bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-medium px-8 shadow-lg"
              >
                Start Planning
              </Button>
            </motion.div>
          </Link>
          <Link to="/hidden-gems">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-8"
              >
                Hidden Gems
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Hint with enhanced animation */}
      <motion.button 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
        onClick={scrollToContent} 
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors cursor-pointer z-20 min-h-[44px] min-w-[44px] justify-center group" 
        aria-label="Scroll to content"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase hidden sm:block">Discover</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
};
