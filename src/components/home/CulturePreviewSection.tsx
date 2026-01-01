import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Sparkles } from "lucide-react";
import { useRef } from "react";

export const CulturePreviewSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden"
    >
      {/* Top section divider */}
      <div className="h-16 sm:h-20 bg-gradient-to-b from-background to-muted/40" />
      
      {/* Main content */}
      <div className="py-12 sm:py-16 lg:py-20 relative bg-muted/40">
        {/* Background with slow parallax */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src="https://static.toiimg.com/photo/msid-92006818,width-96,height-65.cms"
            alt="Himachali culture and traditions"
            className="w-full h-[130%] object-cover opacity-15"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-muted/70 via-muted/50 to-muted/80" />
        </motion.div>
        
        {/* Decorative patterns */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 15% 30%, hsl(var(--accent) / 0.08) 0%, transparent 35%),
                                radial-gradient(circle at 85% 70%, hsl(var(--primary) / 0.06) 0%, transparent 35%)`
            }}
          />
          {/* Decorative lines */}
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
          <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
                The Soul of Himachal
              </span>
              <Sparkles className="w-4 h-4 text-accent" />
            </motion.div>

            {/* Quote Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-4 sm:mb-6"
            >
              <span className="font-display text-6xl sm:text-7xl text-accent/40 leading-none">"</span>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-xl sm:text-2xl lg:text-3xl text-foreground leading-relaxed mb-4 sm:mb-6 italic text-center"
            >
              In Himachal, every village has a deity, every festival is a celebration of life, 
              and every stranger is welcomed as a guest from the gods themselves.
            </motion.blockquote>

            {/* Attribution */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm text-muted-foreground mb-8 sm:mb-10 text-center"
            >
              — The Spirit of Himachali Hospitality
            </motion.p>

            {/* Decorative divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-accent/50" />
              <Mountain className="w-4 h-4 text-accent/60" />
              <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-accent/50" />
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <Link 
                to="/culture" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-full text-foreground font-medium transition-all group"
              >
                Explore Himachali Culture
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="h-16 sm:h-20 bg-gradient-to-b from-muted/40 to-background" />
    </section>
  );
};
