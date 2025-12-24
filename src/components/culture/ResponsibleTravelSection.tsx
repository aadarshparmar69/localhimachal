import { motion } from "framer-motion";
import { responsibleTravel } from "@/data/cultureContent";
import { Heart } from "lucide-react";

export const ResponsibleTravelSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <Heart className="w-10 h-10 text-primary/50 mx-auto mb-6" />
          <span className="inline-block font-body text-primary text-sm uppercase tracking-widest mb-4">
            Cultural Responsibility
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            {responsibleTravel.title}
          </h2>
          <p className="font-body text-lg text-accent italic">
            {responsibleTravel.subtitle}
          </p>
        </motion.div>

        {/* Principles */}
        <div className="max-w-4xl mx-auto space-y-8">
          {responsibleTravel.principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/30 rounded-2xl p-8 md:p-10"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {principle.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                {principle.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
