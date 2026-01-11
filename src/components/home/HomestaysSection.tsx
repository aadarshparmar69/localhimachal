import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, ExternalLink, Home } from "lucide-react";
import { homestays } from "@/data/homestays";
import { useRef } from "react";
import { StaggerContainer, StaggerItem, ScrollReveal, BlurIn } from "@/components/animations/ScrollReveal";

const featuredHomestays = homestays.slice(0, 4);

export const HomestaysSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-32 bg-background overflow-hidden relative">
      {/* Subtle background effect */}
      <motion.div 
        style={{ y: prefersReducedMotion ? 0 : backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.06) 0%, transparent 50%)`
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-14 sm:mb-20" blur scale>
          <BlurIn className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Home className="w-5 h-5 text-muted-foreground" />
            </motion.div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Stay Local
            </p>
          </BlurIn>
          
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-responsive-title text-foreground mb-5"
          >
            A place at someone's table
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-muted-foreground max-w-2xl mx-auto"
          >
            The best way to know a place is through its people. These homestays offer 
            more than a bed—they offer belonging.
          </motion.p>
        </ScrollReveal>

        {/* Homestays Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-12 sm:mb-14"
          staggerDelay={0.12}
          delayChildren={0.1}
        >
          {featuredHomestays.map((homestay, index) => (
            <StaggerItem key={homestay.id} direction={index % 2 === 0 ? "left" : "right"}>
              <motion.a
                href={homestay.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: prefersReducedMotion ? 0 : -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex flex-col sm:flex-row bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
              >
                {/* Image */}
                <div className="sm:w-2/5 aspect-[16/10] sm:aspect-auto overflow-hidden relative">
                  <motion.img
                    src={homestay.image}
                    alt={homestay.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: prefersReducedMotion ? 1 : 1.1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    loading="lazy"
                  />
                  <motion.div 
                    className="absolute top-2 right-2 p-2 rounded-full bg-background/80 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-foreground" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
                  <motion.div 
                    className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <MapPin className="w-3 h-3" />
                    <span>{homestay.village}, {homestay.district}</span>
                  </motion.div>
                  
                  <motion.h3
                    className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {homestay.name}
                  </motion.h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {homestay.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <motion.span 
                      className="text-xs font-medium text-primary"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      View Stay
                    </motion.span>
                    <span className="text-sm font-medium text-primary">
                      {homestay.priceRange}
                    </span>
                  </div>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center"
        >
          <Link 
            to="/homestays" 
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
          >
            <span>Browse all homestays</span>
            <motion.div
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
