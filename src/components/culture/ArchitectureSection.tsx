import { motion, useReducedMotion } from "framer-motion";
import { architectureContent } from "@/data/cultureContent";
import { Building2 } from "lucide-react";

export const ArchitectureSection = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section id="architecture" className="py-12 sm:py-16 lg:py-20 bg-background relative">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Building2 className="w-4 h-4 text-primary/60" />
            <span className="font-body text-primary text-xs sm:text-sm uppercase tracking-[0.2em]">
              Built Heritage
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3 sm:mb-4">
            {architectureContent.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-accent italic mb-3 sm:mb-4">
            {architectureContent.subtitle}
          </p>
          <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
            {architectureContent.description}
          </p>
        </motion.div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {architectureContent.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-card mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Description */}
                <div className="absolute inset-0 flex items-end p-4 sm:p-5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-body text-xs sm:text-sm text-primary-foreground/90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};