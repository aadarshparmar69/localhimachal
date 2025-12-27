import { motion } from "framer-motion";
import { responsibleTravel } from "@/data/cultureContent";
import { Heart } from "lucide-react";

export const ResponsibleTravelSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-16"
        >
          <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary/50 mx-auto mb-4 sm:mb-6" />
          <span className="inline-block font-body text-primary text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
            Cultural Responsibility
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-semibold text-foreground mb-3 sm:mb-4">
            {responsibleTravel.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-accent italic">
            {responsibleTravel.subtitle}
          </p>
        </motion.div>

        {/* Principles - Stacked on mobile */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-8">
          {responsibleTravel.principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-secondary/30 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10"
            >
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                {principle.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">
                {principle.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};