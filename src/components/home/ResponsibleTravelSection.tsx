import { motion } from "framer-motion";

const principles = [
  { title: "Respect", description: "For the land, the people, and the silence that holds these mountains together." },
  { title: "Silence", description: "Not emptiness, but presence. The mountains speak to those who listen." },
  { title: "Patience", description: "The best views are earned. The best stories unfold slowly." },
];

export const ResponsibleTravelSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-20"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight mb-3 sm:mb-4">
              Travel as a guest
            </h2>
            <p className="font-body text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
              The mountains have their own rhythm. Those who rush, miss everything.
            </p>
          </motion.div>

          <div className="space-y-10 sm:space-y-16">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 md:gap-12"
              >
                <div className="sm:w-1/4">
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl text-accent/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="sm:w-3/4">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-2 sm:mb-3">
                    {principle.title}
                  </h3>
                  <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent origin-center"
          />
        </div>
      </div>
    </section>
  );
};
