import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Sparkles } from "lucide-react";
import { useRef } from "react";
import { BlurIn } from "@/components/animations/ScrollReveal";

export const CulturePreviewSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawBackgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const backgroundY = useSpring(rawBackgroundY, { stiffness: 80, damping: 30 });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden"
    >
      {/* Top section divider */}
      <div className="h-20 sm:h-24 bg-gradient-to-b from-background to-muted/40" />
      
      {/* Main content */}
      <div className="py-16 sm:py-24 lg:py-28 relative bg-muted/40">
        {/* Background with slow parallax */}
        <motion.div 
          style={{ y: prefersReducedMotion ? "0%" : backgroundY }}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src="https://static.toiimg.com/photo/msid-92006818,width-96,height-65.cms"
            alt="Himachali culture and traditions"
            className="w-full h-[140%] object-cover opacity-15"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-muted/70 via-muted/50 to-muted/80" />
        </motion.div>
        
        {/* Decorative patterns */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 15% 30%, hsl(var(--accent) / 0.1) 0%, transparent 35%),
                                radial-gradient(circle at 85% 70%, hsl(var(--primary) / 0.08) 0%, transparent 35%)`
            }}
          />
          {/* Decorative lines */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent origin-top" 
          />
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent origin-top" 
          />
        </div>

        <motion.div 
          style={{ opacity: prefersReducedMotion ? 1 : contentOpacity }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-4xl mx-auto">
            {/* Section label */}
            <BlurIn className="flex items-center justify-center gap-3 mb-8">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-accent" />
              </motion.div>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
                The Soul of Himachal
              </span>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-accent" />
              </motion.div>
            </BlurIn>

            {/* Quote Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-6 sm:mb-8"
            >
              <span className="font-display text-7xl sm:text-8xl text-accent/40 leading-none">"</span>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-xl sm:text-2xl lg:text-3xl text-foreground leading-relaxed mb-6 sm:mb-8 italic text-center"
            >
              In Himachal, every village has a deity, every festival is a celebration of life, 
              and every stranger is welcomed as a guest from the gods themselves.
            </motion.blockquote>

            {/* Attribution */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-sm text-muted-foreground mb-10 sm:mb-12 text-center"
            >
              — The Spirit of Himachali Hospitality
            </motion.p>

            {/* Decorative divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center gap-4 mb-10"
            >
              <div className="w-20 sm:w-28 h-px bg-gradient-to-r from-transparent to-accent/50" />
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Mountain className="w-5 h-5 text-accent/60" />
              </motion.div>
              <div className="w-20 sm:w-28 h-px bg-gradient-to-l from-transparent to-accent/50" />
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-center"
            >
              <Link 
                to="/culture" 
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-full text-foreground font-medium transition-all group"
              >
                <span>Explore Himachali Culture</span>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
