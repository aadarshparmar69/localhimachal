import { motion } from "framer-motion";
import { useRef } from "react";
import { cultureHero } from "@/data/cultureContent";

export const CultureHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      className="relative h-[85vh] md:h-screen min-h-[500px] md:min-h-[700px] overflow-hidden"
    >
      {/* Background Image - reduced parallax on mobile */}
      <div className="absolute inset-0">
        <img
          src={cultureHero.image}
          alt="Himachali mountain village life"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/90" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/80 text-xs md:text-sm font-body tracking-wide mb-6 md:mb-8"
          >
            A Living Cultural Archive
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground mb-6 md:mb-8 max-w-4xl mx-auto leading-tight"
          >
            {cultureHero.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed px-2"
          >
            {cultureHero.subtitle}
          </motion.p>

          {/* Scroll Indicator - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5 md:p-2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 md:h-2 bg-primary-foreground/60 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
