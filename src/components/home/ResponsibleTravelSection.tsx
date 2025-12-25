import { motion } from "framer-motion";

const principles = [
  {
    title: "Respect",
    description: "For the land, the people, and the silence that holds these mountains together.",
  },
  {
    title: "Silence",
    description: "Not emptiness, but presence. The mountains speak to those who listen.",
  },
  {
    title: "Patience",
    description: "The best views are earned. The best stories unfold slowly.",
  },
];

export const ResponsibleTravelSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
              Travel as a guest
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
              The mountains have their own rhythm. Those who rush, miss everything.
            </p>
          </motion.div>

          {/* Principles */}
          <div className="space-y-16">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12"
              >
                <div className="md:w-1/4">
                  <span className="font-display text-5xl md:text-6xl text-accent/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent origin-center"
          />
        </div>
      </div>
    </section>
  );
};
