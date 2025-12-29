import { motion, useReducedMotion } from "framer-motion";
import { languageContent } from "@/data/cultureContent";
import { Quote, Music } from "lucide-react";

export const LanguageSection = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section id="music" className="py-12 sm:py-16 lg:py-20 bg-muted/30 relative">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Music className="w-4 h-4 text-primary/60" />
              <span className="font-body text-primary text-xs sm:text-sm uppercase tracking-[0.2em]">
                Oral Traditions
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
              {languageContent.title}
            </h2>
            <p className="font-body text-base sm:text-lg text-accent italic">
              {languageContent.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed text-center mb-6 sm:mb-10"
          >
            {languageContent.description}
          </motion.p>

          {/* Content paragraphs */}
          <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-12">
            {languageContent.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                viewport={{ once: true }}
                className="font-body text-muted-foreground leading-[1.8] text-sm sm:text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-card rounded-xl p-6 sm:p-8 shadow-soft text-center border border-border/50"
          >
            <Quote className="w-8 h-8 text-primary/20 mx-auto mb-4" />
            <p className="font-display text-lg sm:text-xl text-foreground italic mb-4 leading-relaxed">
              "{languageContent.quote.text}"
            </p>
            <cite className="font-body text-muted-foreground not-italic text-sm">
              — {languageContent.quote.author}
            </cite>
          </motion.blockquote>
        </div>
      </div>
      
      {/* Section divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};