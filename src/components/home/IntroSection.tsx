import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const IntroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);

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
      className="relative py-10 sm:py-14 lg:py-16 bg-background overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.04) 0%, transparent 50%),
                              radial-gradient(circle at 70% 80%, hsl(var(--accent) / 0.03) 0%, transparent 40%)`
          }}
        />
      </div>

      <motion.div 
        style={{ opacity: prefersReducedMotion ? 1 : opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10"
      >
        {/* Editorial Text with line-by-line reveal */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-responsive-title text-foreground mb-6 sm:mb-8"
          >
            Beyond the tourist trail
          </motion.h2>
          
          <div className="space-y-1 sm:space-y-2">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="font-body text-responsive-body text-muted-foreground leading-relaxed"
              >
                {line}
              </motion.p>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-responsive-body text-foreground/80 leading-relaxed mt-5 font-medium"
          >
            We believe the best journeys are the ones that change you—slowly, gently, and forever.
          </motion.p>
        </div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center"
        >
          <Link 
            to="/culture" 
            className="group flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
          >
            Discover the Culture
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="hidden sm:block text-border">•</span>
          <Link 
            to="/plan-your-trip" 
            className="group flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
          >
            Plan Your Journey
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
