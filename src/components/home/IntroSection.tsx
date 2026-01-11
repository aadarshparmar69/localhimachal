import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal, TextReveal, BlurIn, FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

export const IntroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.92, 1]);
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const lines = [
    "This is not a travel guide.",
    "It's a doorway into the soul of a place where ancient temples whisper stories,",
    "where village elders share wisdom over chai,",
    "and where every mountain path leads to something unexpected."
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-20 sm:py-28 lg:py-32 bg-background overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ opacity: prefersReducedMotion ? 0.04 : opacity }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.08) 0%, transparent 50%),
                                radial-gradient(circle at 70% 80%, hsl(var(--accent) / 0.06) 0%, transparent 40%)`
            }}
          />
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={prefersReducedMotion ? {} : {
            y: [0, -25, 0],
            rotate: [0, 8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-primary/5 blur-2xl"
        />
        <motion.div
          animate={prefersReducedMotion ? {} : {
            y: [0, 25, 0],
            rotate: [0, -8, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-[15%] w-36 h-36 rounded-full bg-accent/5 blur-2xl"
        />
        <motion.div
          animate={prefersReducedMotion ? {} : {
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-[5%] w-16 h-16 rounded-full bg-primary/3 blur-xl"
        />
      </div>

      <motion.div 
        style={{ 
          opacity: prefersReducedMotion ? 1 : opacity,
          scale: prefersReducedMotion ? 1 : smoothScale
        }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10"
      >
        {/* Decorative label */}
        <BlurIn className="flex items-center justify-center gap-2 mb-8" delay={0}>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-primary/60" />
          </motion.div>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
            Our Philosophy
          </span>
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-primary/60" />
          </motion.div>
        </BlurIn>

        {/* Editorial Text with line-by-line reveal */}
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0.1} blur scale>
            <h2 className="font-display text-responsive-title text-foreground mb-10 sm:mb-12">
              <TextReveal>Beyond the tourist trail</TextReveal>
            </h2>
          </ScrollReveal>
          
          <StaggerContainer className="space-y-3 sm:space-y-4" staggerDelay={0.12}>
            {lines.map((line, index) => (
              <StaggerItem key={index}>
                <p className="font-body text-responsive-body text-muted-foreground leading-relaxed">
                  {line}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <FadeUp delay={0.6} className="mt-10">
            <p className="font-body text-responsive-body text-foreground/80 leading-relaxed font-medium">
              We believe the best journeys are the ones that change you—slowly, gently, and forever.
            </p>
          </FadeUp>
        </div>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-12"
        />

        {/* Links with smooth hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center items-center"
        >
          <Link 
            to="/culture" 
            className="group flex items-center gap-2 text-foreground font-medium hover:text-primary transition-all duration-300"
          >
            <motion.span
              whileHover={{ x: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Discover the Culture
            </motion.span>
            <motion.div
              whileHover={{ x: 6, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
          <span className="hidden sm:block text-border">•</span>
          <Link 
            to="/plan" 
            className="group flex items-center gap-2 text-foreground font-medium hover:text-primary transition-all duration-300"
          >
            <motion.span
              whileHover={{ x: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Plan Your Journey
            </motion.span>
            <motion.div
              whileHover={{ x: 6, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Section divider */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-muted/40 to-muted/70 pointer-events-none"
      />
    </section>
  );
};
