import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cultureHero } from "@/data/cultureContent";

export const CultureHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale: imageScale }}
      >
        <img
          src={cultureHero.image}
          alt="Himachali mountain village life"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/90" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity, y: textY }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block px-5 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/80 text-sm font-body tracking-wide mb-8"
          >
            A Living Cultural Archive
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-8 max-w-4xl mx-auto leading-tight"
          >
            {cultureHero.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed"
          >
            {cultureHero.subtitle}
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-primary-foreground/60 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
