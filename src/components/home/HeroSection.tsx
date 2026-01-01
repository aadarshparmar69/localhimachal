import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 100]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, prefersReducedMotion ? 0 : -40]);
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: "smooth"
    });
  };
  return <section ref={containerRef} className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div style={{
      y: backgroundY,
      scale: backgroundScale
    }} className="absolute inset-0 will-change-transform">
        <img alt="Himalayan Valley in Himachal Pradesh" className="w-full h-[120%] object-cover" loading="eager" src="/lovable-uploads/ac12a42b-8efd-4436-986d-41f272634626.jpg" />
        
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay hidden sm:block" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />
        
        {/* Gradient Overlay - blends into next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-foreground/40 to-foreground" />
      </motion.div>

      {/* Content */}
      <motion.div style={{
      opacity: contentOpacity,
      y: contentY
    }} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl -mt-[14vh] sm:-mt-[10vh] md:-mt-[8vh]">
        {/* Small decorative element */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.1,
        duration: 0.5
      }} className="flex justify-center mb-6">
          
        </motion.div>

        {/* Headline */}
        <motion.p initial={{
        opacity: 0,
        y: 16
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2,
        duration: 0.6
      }} className="font-body text-sm sm:text-base tracking-[0.25em] uppercase text-primary-foreground/50 mb-4 sm:mb-5">
          A journey into the heart of
        </motion.p>
        
        <motion.h1 initial={{
        opacity: 0,
        y: 24
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }} className="font-display text-responsive-hero font-medium text-primary-foreground tracking-tight leading-[1.02] mb-5 sm:mb-6">
          Himachal Pradesh
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 16
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.7,
        duration: 0.6
      }} className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/65 max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12 px-4">
          Discover hidden villages, sacred temples, and untouched trails
          <span className="hidden sm:inline"> — </span>
          <span className="sm:hidden"><br /></span>
          through the eyes of those who call these mountains home.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.9,
        duration: 0.6
      }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Link to="/explore">
            <Button variant="default" size="lg" className="w-full sm:w-auto bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-medium px-8 shadow-lg">
              Explore Districts
            </Button>
          </Link>
          <Link to="/hidden-gems">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-8">
              Hidden Gems
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.button initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 0.8
    }} onClick={scrollToContent} className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors cursor-pointer z-20 min-h-[44px] min-w-[44px] justify-center group" aria-label="Scroll to content">
        <span className="text-[10px] tracking-[0.3em] uppercase hidden sm:block">Discover</span>
        <motion.div animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}>
          <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>;
};