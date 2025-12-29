import { motion, useReducedMotion } from "framer-motion";
import { introContent } from "@/data/cultureContent";

export const CultureIntro = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.05) 0%, transparent 40%),
                              radial-gradient(circle at 80% 70%, hsl(var(--accent) / 0.04) 0%, transparent 35%)`
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Decorative opening */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-8 sm:mb-12"
          >
            <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary/40" />
            <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>
          
          {/* Editorial intro paragraphs */}
          <div className="space-y-5 sm:space-y-6">
            {introContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-30px" }}
                className={`font-body text-base sm:text-lg leading-[1.8] ${
                  index === 0 
                    ? "text-foreground first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-display first-letter:font-semibold first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 first-letter:mt-1 first-letter:text-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Decorative separator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-14"
          >
            <span className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};