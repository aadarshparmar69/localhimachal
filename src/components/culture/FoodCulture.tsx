import { motion, useReducedMotion } from "framer-motion";
import { foodContent } from "@/data/cultureContent";
import { UtensilsCrossed } from "lucide-react";

export const FoodCulture = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section id="food" className="py-12 sm:py-16 lg:py-20 bg-secondary/20 relative">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <UtensilsCrossed className="w-4 h-4 text-primary/60" />
            <span className="font-body text-primary text-xs sm:text-sm uppercase tracking-[0.2em]">
              Culinary Heritage
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
            {foodContent.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-accent italic">
            {foodContent.subtitle}
          </p>
        </motion.div>

        {/* Alternating Sections */}
        <div className="space-y-10 sm:space-y-16">
          {foodContent.sections.map((section, index) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-30px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  {section.heading}
                </h3>
                <p className="font-body text-muted-foreground leading-[1.8] text-sm sm:text-base">
                  {section.content}
                </p>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-elevated">
                  <img
                    src={section.image}
                    alt={section.heading}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 to-transparent" />
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-3 -right-3 w-16 sm:w-20 h-16 sm:h-20 bg-accent/10 rounded-full blur-xl -z-10 hidden sm:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Section divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};