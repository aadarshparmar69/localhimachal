import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Compass, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

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
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.5, 0.5, 0.2]);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <motion.div 
        style={{ opacity: prefersReducedMotion ? 0.3 : backgroundOpacity }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.06) 0%, transparent 45%),
                              radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.05) 0%, transparent 40%)`
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20" blur scale>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4"
          >
            Your Journey Begins
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-responsive-title text-foreground mb-5"
          >
            Three steps to the mountains
          </motion.h2>
        </ScrollReveal>

        {/* Steps with connecting lines */}
        <div className="relative max-w-4xl mx-auto mb-14 sm:mb-16">
          {/* Connecting line (desktop only) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-border via-primary/30 to-border origin-left"
          />

          <StaggerContainer 
            className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 lg:gap-14"
            staggerDelay={0.15}
            delayChildren={0.2}
          >
            {steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <motion.div
                  whileHover={{ y: prefersReducedMotion ? 0 : -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-center relative"
                >
                  {/* Icon with enhanced animation */}
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 relative z-10 ring-4 ring-background"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ 
                      type: "spring", 
                      delay: 0.3 + index * 0.15, 
                      duration: 0.8,
                      bounce: 0.4 
                    }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <step.icon className="w-7 h-7" strokeWidth={1.5} />
                  </motion.div>

                  {/* Step Number */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3"
                  >
                    Step {index + 1}
                  </motion.p>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="font-display text-xl text-foreground mb-4"
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto"
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <Link to="/plan">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-[#3c431e] text-white hover:bg-[#3c431e]/90 shadow-lg px-8"
              >
                Start Planning
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
