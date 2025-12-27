import { motion } from "framer-motion";
import { spiritualContent } from "@/data/cultureContent";
import { Mountain } from "lucide-react";

export const SpiritualSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-16"
        >
          <Mountain className="w-10 h-10 sm:w-12 sm:h-12 text-accent/60 mx-auto mb-4 sm:mb-6" />
          <span className="inline-block font-body text-accent text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
            Sacred Landscape
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-semibold mb-3 sm:mb-4">
            {spiritualContent.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-primary-foreground/70 italic mb-4 sm:mb-8">
            {spiritualContent.subtitle}
          </p>
          <p className="font-body text-primary-foreground/60 leading-relaxed text-sm sm:text-base">
            {spiritualContent.description}
          </p>
        </motion.div>

        {/* Spiritual Aspects */}
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-16">
          {spiritualContent.aspects.map((aspect, index) => (
            <motion.div
              key={aspect.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative line - hidden on mobile */}
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-accent/50 to-transparent hidden sm:block" />
              
              <div className="sm:pl-8">
                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  {aspect.title}
                </h3>
                <p className="font-body text-primary-foreground/70 leading-relaxed text-sm sm:text-base md:text-lg">
                  {aspect.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};