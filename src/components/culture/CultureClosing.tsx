import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { closingContent } from "@/data/cultureContent";

export const CultureClosing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Reduced effects for mobile performance
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.02]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background - Simplified on mobile */}
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
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-0"
        style={{ opacity }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl text-primary-foreground italic leading-snug mb-8 sm:mb-12"
          >
            "{closingContent.quote}"
          </motion.blockquote>

          {/* Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-16 sm:w-24 h-px bg-primary-foreground/30 mx-auto mb-8 sm:mb-12"
          />

          {/* Final Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/80 leading-relaxed"
          >
            {closingContent.finalParagraph}
          </motion.p>
        </div>
      </motion.div>

      {/* Fade out gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};