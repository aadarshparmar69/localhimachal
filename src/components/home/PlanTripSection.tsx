import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Compass, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Compass,
    title: "Inspire",
    description: "Browse districts, hidden gems, and treks to find what calls to you.",
  },
  {
    icon: Calendar,
    title: "Decide",
    description: "Choose the right season and duration for your perfect Himalayan journey.",
  },
  {
    icon: MapPin,
    title: "Travel",
    description: "Arrive with an open heart, and let the mountains guide your way.",
  },
];

export const PlanTripSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.05) 0%, transparent 40%)`
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Your Journey Begins
          </p>
          <h2 className="font-display text-responsive-title text-foreground mb-4">
            Three steps to the mountains
          </h2>
        </motion.div>

        {/* Steps with connecting lines */}
        <div className="relative max-w-4xl mx-auto mb-12 sm:mb-14">
          {/* Connecting line (desktop only) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden sm:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-border via-primary/30 to-border origin-left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                {/* Icon with background */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5 relative z-10 ring-4 ring-background">
                  <step.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Step Number */}
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Step {index + 1}
                </p>

                {/* Title */}
                <h3 className="font-display text-xl text-foreground mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Link to="/plan-your-trip">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            >
              Start Planning
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
