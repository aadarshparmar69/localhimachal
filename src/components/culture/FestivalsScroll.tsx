import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { festivalsContent } from "@/data/cultureContent";

export const FestivalsScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="inline-block font-body text-primary text-sm uppercase tracking-widest mb-4">
            Festival Calendar
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
            {festivalsContent.title}
          </h2>
          <p className="font-body text-lg text-accent italic mb-4">
            {festivalsContent.subtitle}
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            {festivalsContent.description}
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Cards */}
      <motion.div 
        className="flex gap-6 pl-4 lg:pl-8"
        style={{ x }}
      >
        {festivalsContent.festivals.map((festival, index) => (
          <motion.div
            key={festival.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-80 md:w-96 group"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={festival.image}
                alt={festival.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-xs font-body text-primary-foreground/80 mb-3">
                  {festival.timing}
                </span>
                <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-3">
                  {festival.name}
                </h3>
                <p className="font-body text-sm text-primary-foreground/70 leading-relaxed line-clamp-4">
                  {festival.essence}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* End spacer */}
        <div className="flex-shrink-0 w-8" />
      </motion.div>

      {/* Scroll hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 lg:px-8 mt-8 font-body text-sm text-muted-foreground"
      >
        ← Scroll to explore more festivals
      </motion.p>
    </section>
  );
};
