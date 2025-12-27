import { motion } from "framer-motion";
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
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">
            Your Journey Begins
          </p>
          <h2 className="font-display text-responsive-title text-foreground mb-4">
            Three steps to the mountains
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12 mb-12 sm:mb-16 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <step.icon className="w-6 h-6" />
              </div>

              {/* Step Number */}
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Step {index + 1}
              </p>

              {/* Title */}
              <h3 className="font-display text-xl text-foreground mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (hidden on mobile and after last item) */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border -z-10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/plan-your-trip">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
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
