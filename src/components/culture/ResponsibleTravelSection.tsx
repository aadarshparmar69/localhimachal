import { motion, useReducedMotion } from "framer-motion";
import { responsibleTravel } from "@/data/cultureContent";
import { Heart } from "lucide-react";

export const ResponsibleTravelSection = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background relative">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-12"
        >
          <Heart className="w-8 h-8 text-primary/50 mx-auto mb-4" />
          <span className="inline-block font-body text-primary text-xs sm:text-sm uppercase tracking-[0.2em] mb-2 sm:mb-3">
            Cultural Responsibility
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
            {responsibleTravel.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-accent italic">
            {responsibleTravel.subtitle}
          </p>
        </motion.div>

        {/* Principles */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          {responsibleTravel.principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="bg-secondary/30 rounded-xl p-5 sm:p-6 lg:p-8 border border-border/30"
            >
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {principle.title}
              </h3>
              <p className="font-body text-muted-foreground leading-[1.8] text-sm sm:text-base">
                {principle.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};