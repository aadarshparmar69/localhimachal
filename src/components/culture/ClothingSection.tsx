import { motion, useReducedMotion } from "framer-motion";
import { clothingContent } from "@/data/cultureContent";
import { Shirt } from "lucide-react";

export const ClothingSection = () => {
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
          className="max-w-3xl mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <Shirt className="w-4 h-4 text-primary/60" />
            <span className="font-body text-primary text-xs sm:text-sm uppercase tracking-[0.2em]">
              Textile Heritage
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
            {clothingContent.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-accent italic">
            {clothingContent.subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {clothingContent.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group bg-card rounded-xl p-5 sm:p-6 shadow-soft hover:shadow-elevated transition-shadow duration-500 border border-border/30"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-1 h-full min-h-[50px] bg-gradient-to-b from-primary to-accent/30 rounded-full" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-body text-muted-foreground leading-[1.7] text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};