import { motion } from "framer-motion";
import { foodContent } from "@/data/cultureContent";

export const FoodCulture = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/20">
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
            Culinary Heritage
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            {foodContent.title}
          </h2>
          <p className="font-body text-lg text-accent italic">
            {foodContent.subtitle}
          </p>
        </motion.div>

        {/* Alternating Layout Sections */}
        <div className="space-y-24">
          {foodContent.sections.map((section, index) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  {section.heading}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={foodContent.image}
                    alt={section.heading}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: `${50 + index * 15}% 50%`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl -z-10" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
