import { motion } from "framer-motion";
import { introContent } from "@/data/cultureContent";

export const CultureIntro = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-16"
          />
          
          {/* Editorial intro paragraphs */}
          <div className="space-y-8">
            {introContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`font-body text-lg md:text-xl leading-relaxed ${
                  index === 0 
                    ? "text-foreground first-letter:text-5xl first-letter:font-display first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary" 
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
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mt-20"
          >
            <span className="w-16 h-px bg-border" />
            <span className="w-2 h-2 rounded-full bg-primary/50" />
            <span className="w-16 h-px bg-border" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
