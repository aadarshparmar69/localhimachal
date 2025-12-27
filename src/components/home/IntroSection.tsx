import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const IntroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <section
      ref={containerRef}
      className="relative py-20 sm:py-32 lg:py-40 bg-background overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.03) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, hsl(var(--accent) / 0.03) 0%, transparent 40%)`
          }}
        />
      </div>

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10"
      >
        {/* Editorial Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-display text-responsive-title text-foreground mb-6 sm:mb-8">
            Beyond the tourist trail
          </h2>
          <p className="font-body text-responsive-body text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            This is not a travel guide. It's a doorway into the soul of a place where ancient temples 
            whisper stories, where village elders share wisdom over chai, and where every mountain path 
            leads to something unexpected. We believe the best journeys are the ones that change you—slowly, 
            gently, and forever.
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-12 sm:mb-16"
        />

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
    </section>
  );
};
