import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      filter: "blur(8px)",
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] as const
      } 
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8"
          >
            Get in Touch
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
            variants={prefersReducedMotion ? undefined : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.a 
              href="mailto:contact@localhimachal.in"
              className="group flex flex-col items-center p-6 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
              variants={prefersReducedMotion ? undefined : itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</span>
              <span className="font-body text-sm text-foreground">contact@localhimachal.in</span>
            </motion.a>

            <motion.a 
              href="tel:+919015931203"
              className="group flex flex-col items-center p-6 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
              variants={prefersReducedMotion ? undefined : itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">Phone</span>
              <span className="font-body text-sm text-foreground">+91 9015931203</span>
            </motion.a>

            <motion.div 
              className="flex flex-col items-center p-6 rounded-xl bg-card shadow-soft"
              variants={prefersReducedMotion ? undefined : itemVariants}
            >
              <motion.div 
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">Location</span>
              <span className="font-body text-sm text-foreground text-center">Dharamshala, Himachal Pradesh</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
