import { motion } from "framer-motion";
import { spiritualContent } from "@/data/cultureContent";
import { Mountain } from "lucide-react";

export const SpiritualSection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <Mountain className="w-12 h-12 text-accent/60 mx-auto mb-6" />
          <span className="inline-block font-body text-accent text-sm uppercase tracking-widest mb-4">
            Sacred Landscape
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">
            {spiritualContent.title}
          </h2>
          <p className="font-body text-lg text-primary-foreground/70 italic mb-8">
            {spiritualContent.subtitle}
          </p>
          <p className="font-body text-primary-foreground/60 leading-relaxed">
            {spiritualContent.description}
          </p>
        </motion.div>

        {/* Spiritual Aspects */}
        <div className="max-w-4xl mx-auto space-y-16">
          {spiritualContent.aspects.map((aspect, index) => (
            <motion.div
              key={aspect.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative line */}
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-accent/50 to-transparent hidden md:block" />
              
              <div className="md:pl-8">
                <h3 className="font-display text-2xl font-semibold mb-4">
                  {aspect.title}
                </h3>
                <p className="font-body text-primary-foreground/70 leading-relaxed text-lg">
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
