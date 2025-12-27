import { motion } from "framer-motion";
import { festivalsContent } from "@/data/cultureContent";

export const FestivalsScroll = () => {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="inline-block font-body text-primary text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
            Festival Calendar
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-6 leading-tight">
            {festivalsContent.title}
          </h2>
          <p className="font-body text-base md:text-lg text-accent italic mb-3 md:mb-4">
            {festivalsContent.subtitle}
          </p>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            {festivalsContent.description}
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Cards - with snap on mobile */}
      <div className="flex gap-4 md:gap-6 px-4 sm:px-6 lg:px-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        {festivalsContent.festivals.map((festival, index) => (
          <motion.div
            key={festival.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-72 sm:w-80 md:w-96 snap-start"
          >
            <div className="relative h-80 md:h-96 rounded-xl md:rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={festival.image}
                alt={festival.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <span className="inline-block px-2.5 md:px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-xs font-body text-primary-foreground/80 mb-2 md:mb-3">
                  {festival.timing}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-primary-foreground mb-2 md:mb-3">
                  {festival.name}
                </h3>
                <p className="font-body text-xs md:text-sm text-primary-foreground/70 leading-relaxed line-clamp-3 md:line-clamp-4">
                  {festival.essence}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* End spacer */}
        <div className="flex-shrink-0 w-4 md:w-8" />
      </div>

      {/* Scroll hint */}
      <p className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-8 font-body text-xs md:text-sm text-muted-foreground">
        <span className="md:hidden">← Swipe to explore →</span>
        <span className="hidden md:inline">← Scroll to explore more festivals</span>
      </p>
    </section>
  );
};
