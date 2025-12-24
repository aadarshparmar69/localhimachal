import { motion } from "framer-motion";
import { architectureContent } from "@/data/cultureContent";

export const ArchitectureSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block font-body text-primary text-sm uppercase tracking-widest mb-4">
            Built Heritage
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            {architectureContent.title}
          </h2>
          <p className="font-body text-lg text-accent italic mb-6">
            {architectureContent.subtitle}
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            {architectureContent.description}
          </p>
        </motion.div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {architectureContent.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card mb-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover reveal text */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-body text-sm text-primary-foreground/90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Description visible on mobile */}
        <div className="mt-12 md:hidden space-y-8">
          {architectureContent.features.map((feature, index) => (
            <motion.div
              key={`desc-${feature.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="font-display text-lg font-medium text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
