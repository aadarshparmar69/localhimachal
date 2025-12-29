import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { closingContent } from "@/data/cultureContent";

export const CultureClosing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], prefersReducedMotion ? [1, 1, 1, 1] : [0, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], prefersReducedMotion ? [1, 1, 1] : [1.03, 1, 1.01]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background - Desktop with scale */}
      <motion.div 
        className="absolute inset-0 hidden sm:block"
        style={{ scale }}
      >
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
          alt="Himalayan mountains at dusk"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </motion.div>
      
      {/* Mobile static background */}
      <div className="absolute inset-0 sm:hidden">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
          alt="Himalayan mountains at dusk"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-0"
        style={{ opacity }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-xl sm:text-2xl lg:text-4xl text-primary-foreground italic leading-snug mb-6 sm:mb-10"
          >
            "{closingContent.quote}"
          </motion.blockquote>

          {/* Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-16 sm:w-20 h-px bg-primary-foreground/30 mx-auto mb-6 sm:mb-10"
          />

          {/* Final Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-body text-base sm:text-lg text-primary-foreground/80 leading-relaxed"
          >
            {closingContent.finalParagraph}
          </motion.p>
        </div>
      </motion.div>

      {/* Fade out gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};