import { motion } from "framer-motion";
import { foodContent } from "@/data/cultureContent";

export const FoodCulture = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-secondary/20">
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
            Culinary Heritage
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-semibold text-foreground mb-3 sm:mb-4">
            {foodContent.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-accent italic">
            {foodContent.subtitle}
          </p>
        </motion.div>

        {/* Stacked Sections on Mobile */}
        <div className="space-y-12 sm:space-y-24">
          {foodContent.sections.map((section, index) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4 sm:mb-6">
                  {section.heading}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">
                  {section.content}
                </p>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={foodContent.image}
                    alt={section.heading}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: `${50 + index * 15}% 50%`
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
                
                {/* Decorative element - hidden on mobile */}
                <div className="absolute -bottom-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-accent/10 rounded-full blur-xl -z-10 hidden sm:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};