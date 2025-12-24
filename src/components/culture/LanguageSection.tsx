import { motion } from "framer-motion";
import { languageContent } from "@/data/cultureContent";
import { Quote } from "lucide-react";

export const LanguageSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block font-body text-primary text-sm uppercase tracking-widest mb-4">
              Oral Traditions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
              {languageContent.title}
            </h2>
            <p className="font-body text-lg text-accent italic">
              {languageContent.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-body text-lg text-muted-foreground leading-relaxed text-center mb-12"
          >
            {languageContent.description}
          </motion.p>

          {/* Content paragraphs */}
          <div className="space-y-6 mb-16">
            {languageContent.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="font-body text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-card rounded-2xl p-8 md:p-12 shadow-soft text-center"
          >
            <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
            <p className="font-display text-xl md:text-2xl text-foreground italic mb-6 leading-relaxed">
              "{languageContent.quote.text}"
            </p>
            <cite className="font-body text-muted-foreground not-italic">
              — {languageContent.quote.author}
            </cite>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};
