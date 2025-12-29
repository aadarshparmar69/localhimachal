import { motion, useReducedMotion } from "framer-motion";
import { festivalsContent } from "@/data/cultureContent";
import { Sparkles } from "lucide-react";

export const FestivalsScroll = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section id="festivals" className="py-12 sm:py-16 lg:py-20 bg-muted/30 overflow-hidden relative">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary/60" />
            <span className="font-body text-primary text-xs sm:text-sm uppercase tracking-[0.2em]">
              Festival Calendar
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3 sm:mb-4 leading-tight">
            {festivalsContent.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-accent italic mb-2 sm:mb-3">
            {festivalsContent.subtitle}
          </p>
          <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
            {festivalsContent.description}
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-4 sm:gap-5 px-4 sm:px-6 lg:px-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        {festivalsContent.festivals.map((festival, index) => (
          <motion.div
            key={festival.name}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.24) }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-72 sm:w-80 snap-start"
          >
            <div className="relative h-80 sm:h-[360px] rounded-xl overflow-hidden shadow-elevated group">
              <img
                src={festival.image}
                alt={festival.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="inline-block px-2.5 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-xs font-body text-primary-foreground/80 mb-2">
                  {festival.timing}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary-foreground mb-2">
                  {festival.name}
                </h3>
                <p className="font-body text-xs sm:text-sm text-primary-foreground/70 leading-relaxed line-clamp-3">
                  {festival.essence}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="flex-shrink-0 w-4 sm:w-8" />
      </div>

      {/* Scroll hint */}
      <p className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 font-body text-xs text-muted-foreground/70">
        <span className="sm:hidden">← Swipe to explore →</span>
        <span className="hidden sm:inline">← Scroll to explore more festivals</span>
      </p>
      
      {/* Section divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};
