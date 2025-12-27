import { motion } from "framer-motion";
import { architectureContent } from "@/data/cultureContent";

export const ArchitectureSection = () => {
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
          <span className="inline-block font-body text-primary text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
            Built Heritage
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-semibold text-foreground mb-3 sm:mb-4">
            {architectureContent.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-accent italic mb-4 sm:mb-6">
            {architectureContent.subtitle}
          </p>
          <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
            {architectureContent.description}
          </p>
        </motion.div>

        {/* Architecture Grid - Single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {architectureContent.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-card mb-4 sm:mb-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover sm:transition-transform sm:duration-700 sm:group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay - always visible on mobile, hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Description - always visible on mobile */}
                <div className="absolute inset-0 flex items-end p-4 sm:p-6 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-body text-xs sm:text-sm text-primary-foreground/90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground text-center sm:group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};