import { motion } from "framer-motion";
import { clothingContent } from "@/data/cultureContent";

export const ClothingSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-10 sm:mb-16"
        >
          <span className="inline-block font-body text-primary text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
            Textile Heritage
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-semibold text-foreground mb-3 sm:mb-4">
            {clothingContent.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-accent italic">
            {clothingContent.subtitle}
          </p>
        </motion.div>

        {/* Vertical Cards - Single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {clothingContent.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-card rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-soft sm:hover:shadow-elevated transition-shadow duration-500"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-1 h-full min-h-[60px] sm:min-h-[80px] bg-gradient-to-b from-primary to-accent/30 rounded-full" />
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 sm:group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
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