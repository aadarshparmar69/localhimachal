import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <a 
              href="mailto:contact@localhimachal.in"
              className="group flex flex-col items-center p-6 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</span>
              <span className="font-body text-sm text-foreground">contact@localhimachal.in</span>
            </a>

            <a 
              href="tel:+919015931203"
              className="group flex flex-col items-center p-6 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">Phone</span>
              <span className="font-body text-sm text-foreground">+91 9015931203</span>
            </a>

            <div className="flex flex-col items-center p-6 rounded-xl bg-card shadow-soft">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">Location</span>
              <span className="font-body text-sm text-foreground text-center">Dharamshala, Himachal Pradesh</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
