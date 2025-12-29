import { motion, useReducedMotion } from "framer-motion";
import { spiritualContent } from "@/data/cultureContent";
import { Mountain } from "lucide-react";

export const SpiritualSection = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, hsl(var(--accent)) 0%, transparent 50%),
                              radial-gradient(circle at 70% 80%, hsl(var(--primary)) 0%, transparent 40%)`
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-14"
        >
          <Mountain className="w-8 h-8 sm:w-10 sm:h-10 text-accent/50 mx-auto mb-4" />
          <span className="inline-block font-body text-accent text-xs sm:text-sm uppercase tracking-[0.2em] mb-2 sm:mb-3">
            Sacred Landscape
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3">
            {spiritualContent.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-primary-foreground/70 italic mb-4 sm:mb-6">
            {spiritualContent.subtitle}
          </p>
          <p className="font-body text-primary-foreground/60 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
            {spiritualContent.description}
          </p>
        </motion.div>

        {/* Spiritual Aspects */}
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {spiritualContent.aspects.map((aspect, index) => (
            <motion.div
              key={aspect.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative line */}
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-accent/50 to-transparent hidden sm:block" />
              
              <div className="sm:pl-6">
                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                  {aspect.title}
                </h3>
                <p className="font-body text-primary-foreground/70 leading-[1.8] text-sm sm:text-base">
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