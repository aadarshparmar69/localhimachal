import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { closingContent } from "@/data/cultureContent";

export const CultureClosing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale }}
      >
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
          alt="Himalayan mountains at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative container mx-auto px-4 lg:px-8 text-center"
        style={{ opacity }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl lg:text-5xl text-primary-foreground italic leading-snug mb-12"
          >
            "{closingContent.quote}"
          </motion.blockquote>

          {/* Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-px bg-primary-foreground/30 mx-auto mb-12"
          />

          {/* Final Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed"
          >
            {closingContent.finalParagraph}
          </motion.p>
        </div>
      </motion.div>

      {/* Fade out gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
