import { motion } from "framer-motion";
import { clothingContent } from "@/data/cultureContent";

export const ClothingSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block font-body text-primary text-sm uppercase tracking-widest mb-4">
            Textile Heritage
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            {clothingContent.title}
          </h2>
          <p className="font-body text-lg text-accent italic">
            {clothingContent.subtitle}
          </p>
        </motion.div>

        {/* Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clothingContent.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-1 h-full min-h-[80px] bg-gradient-to-b from-primary to-accent/30 rounded-full" />
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
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
