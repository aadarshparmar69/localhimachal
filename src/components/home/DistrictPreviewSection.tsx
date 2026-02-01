import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { districts } from "@/data/districts";
import { ScrollReveal, StaggerContainer, StaggerItem, BlurIn } from "@/components/animations/ScrollReveal";
import { useRef } from "react";
const featuredDistricts = districts.slice(0, 6);
export const DistrictPreviewSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  return <section ref={sectionRef} className="py-20 sm:py-28 lg:py-32 bg-muted/30 overflow-hidden relative">
      {/* Subtle animated background */}
      <motion.div style={{
      y: prefersReducedMotion ? 0 : backgroundY
    }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.05) 0%, transparent 50%)`
      }} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-14 sm:mb-20" blur scale>
          <BlurIn delay={0.1}>
            <motion.div initial={{
            opacity: 0,
            scale: 0,
            rotate: -180
          }} whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0
          }} viewport={{
            once: true,
            margin: "-10%"
          }} transition={{
            type: "spring",
            delay: 0.1,
            duration: 0.8
          }} className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-primary" />
            </motion.div>
          </BlurIn>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-10%"
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }} className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Explore by Region
          </motion.p>
          
          <motion.h2 initial={{
          opacity: 0,
          y: 30,
          filter: "blur(10px)"
        }} whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        }} viewport={{
          once: true,
          margin: "-10%"
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="font-display text-responsive-title text-foreground mb-5">
            Twelve districts, infinite stories
          </motion.h2>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-10%"
        }} transition={{
          duration: 0.7,
          delay: 0.4
        }} className="font-body text-muted-foreground max-w-2xl mx-auto">
            Each region holds its own character from the Buddhist monasteries of Spiti to the colonial charm of Shimla.
          </motion.p>
          
          {/* Animated underline */}
          <motion.div initial={{
          scaleX: 0
        }} whileInView={{
          scaleX: 1
        }} viewport={{
          once: true,
          margin: "-10%"
        }} transition={{
          duration: 1,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }} className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-8" />
        </ScrollReveal>

        {/* Districts Grid with staggered animation */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14 sm:mb-16" staggerDelay={0.1} delayChildren={0.2}>
          {featuredDistricts.map((district, index) => <StaggerItem key={district.id} direction={index % 2 === 0 ? "left" : "right"}>
              <motion.div whileHover={{
            y: prefersReducedMotion ? 0 : -10,
            scale: 1.02
          }} transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}>
                <Link to={`/district/${district.slug}`} className="group block relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-500">
                  <motion.img src={district.image} alt={district.name} className="w-full h-full object-cover" whileHover={{
                scale: prefersReducedMotion ? 1 : 1.1
              }} transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
              }} loading="lazy" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <motion.h3 className="font-display text-xl sm:text-2xl text-primary-foreground mb-1" initial={{
                  y: 0
                }} whileHover={{
                  y: -6
                }} transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }}>
                      {district.name}
                    </motion.h3>
                    <p className="text-sm text-primary-foreground/70 line-clamp-1">
                      {district.tagline}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <motion.div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100" initial={{
                scale: 0.8,
                rotate: -45
              }} whileHover={{
                scale: 1,
                rotate: 0
              }} transition={{
                duration: 0.3
              }}>
                    <div className="w-11 h-11 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
                      <ArrowRight className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </motion.div>

                  {/* Corner accent */}
                  <motion.div initial={{
                opacity: 0,
                scale: 0.8
              }} whileHover={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.3
              }} className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary-foreground/30 rounded-tl-2xl opacity-0 group-hover:opacity-100" />
                </Link>
              </motion.div>
            </StaggerItem>)}
        </StaggerContainer>

        {/* View All Link */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-10%"
      }} transition={{
        duration: 0.7,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }} className="text-center">
          <Link to="/explore" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-primary/5 hover:bg-primary/15 border border-primary/20 text-foreground font-medium transition-all duration-300">
            <span>View all 12 districts</span>
            <motion.div whileHover={{
            x: 6
          }} transition={{
            type: "spring",
            stiffness: 400,
            damping: 20
          }}>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>;
};