import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal, TextReveal } from "@/components/animations/ScrollReveal";

export const IntroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  // Line-by-line reveal animation
  const lines = [
    "This is not a travel guide.",
    "It's a doorway into the soul of a place where ancient temples whisper stories,",
    "where village elders share wisdom over chai,",
    "and where every mountain path leads to something unexpected."
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-background overflow-hidden"
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
              backgroundImage: `radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.06) 0%, transparent 50%),
                                radial-gradient(circle at 70% 80%, hsl(var(--accent) / 0.05) 0%, transparent 40%)`
            }}
          />
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={prefersReducedMotion ? {} : {
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-20 h-20 rounded-full bg-primary/5 blur-xl"
        />
        <motion.div
          animate={prefersReducedMotion ? {} : {
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-[15%] w-32 h-32 rounded-full bg-accent/5 blur-xl"
        />
      </div>

      <motion.div 
        style={{ 
          opacity: prefersReducedMotion ? 1 : opacity,
          scale: prefersReducedMotion ? 1 : scale
        }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10"
      >
        {/* Decorative label */}
        <ScrollReveal className="flex items-center justify-center gap-2 mb-6" delay={0}>
          <Sparkles className="w-4 h-4 text-primary/60" />
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
            Our Philosophy
          </span>
          <Sparkles className="w-4 h-4 text-primary/60" />
        </ScrollReveal>

        {/* Editorial Text with line-by-line reveal */}
        <div className="text-center mb-10 sm:mb-12">
          <ScrollReveal delay={0.1} blur scale>
            <h2 className="font-display text-responsive-title text-foreground mb-8 sm:mb-10">
              <TextReveal>Beyond the tourist trail</TextReveal>
            </h2>
          </ScrollReveal>
          
          <div className="space-y-2 sm:space-y-3">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: prefersReducedMotion ? 0 : 0.15 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="font-body text-responsive-body text-muted-foreground leading-relaxed"
              >
                {line}
              </motion.p>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8"
          >
            <p className="font-body text-responsive-body text-foreground/80 leading-relaxed font-medium">
              We believe the best journeys are the ones that change you—slowly, gently, and forever.
            </p>
          </motion.div>
        </div>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-10"
        />

        {/* Links with hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center"
        >
          <Link 
            to="/culture" 
            className="group flex items-center gap-2 text-foreground font-medium hover:text-primary transition-all duration-300"
          >
            <motion.span
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Discover the Culture
            </motion.span>
            <motion.div
              whileHover={{ x: 4, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
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
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Plan Your Journey
            </motion.span>
            <motion.div
              whileHover={{ x: 4, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Section divider - decorative element */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-muted/30 to-muted/60 pointer-events-none"
      />
    </section>
  );
};
