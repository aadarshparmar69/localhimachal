import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { hiddenGems } from "@/data/hiddenGems";
import { ScrollReveal, SlideIn, BlurIn } from "@/components/animations/ScrollReveal";
const featuredGems = hiddenGems.slice(0, 4);
export const HiddenGemsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const rawBackgroundX = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const backgroundX = useSpring(rawBackgroundX, {
    stiffness: 80,
    damping: 30
  });
  return <section ref={containerRef} className="py-20 sm:py-28 lg:py-32 bg-background overflow-hidden relative">
      {/* Animated background pattern */}
      <motion.div style={{
      x: prefersReducedMotion ? 0 : backgroundX
    }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.06) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, hsl(var(--accent) / 0.06) 0%, transparent 50%)`
      }} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="max-w-3xl mb-14 sm:mb-20" blur scale>
          <BlurIn className="flex items-center gap-2 mb-5">
            <motion.div animate={{
            rotate: [0, 360]
          }} transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}>
              <Sparkles className="w-5 h-5 text-primary/60" />
            </motion.div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Off the Map
            </p>
          </BlurIn>
          
          <motion.h2 initial={{
          opacity: 0,
          y: 40,
          filter: "blur(15px)"
        }} whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        }} viewport={{
          once: true,
          margin: "-10%"
        }} transition={{
          duration: 0.9,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1]
        }} className="font-display text-responsive-title text-foreground mb-5">
            Places that stay with you
          </motion.h2>
          
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-10%"
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="font-body text-muted-foreground">
            These are the valleys and villages where time moves differently where every footstep feels like a discovery.
          </motion.p>
        </ScrollReveal>

        {/* Alternating cards with enhanced animations */}
        <div className="space-y-6 sm:space-y-8 mb-14 sm:mb-16">
          {featuredGems.map((gem, index) => {
          const isEven = index % 2 === 0;
          return <SlideIn key={gem.id} direction={isEven ? "left" : "right"} delay={index * 0.1}>
                <motion.div whileHover={{
              y: prefersReducedMotion ? 0 : -8,
              scale: 1.01
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}>
                  <Link to={`/hidden-gems/${gem.slug}`} className={`group flex flex-col ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 border border-transparent hover:border-primary/10`}>
                    {/* Image */}
                    <div className="sm:w-2/5 lg:w-1/3 aspect-[16/10] sm:aspect-auto overflow-hidden relative">
                      <motion.img src={gem.image !== "/placeholder.svg" ? gem.image : `https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80`} alt={gem.name} className="w-full h-full object-cover" whileHover={{
                    scale: prefersReducedMotion ? 1 : 1.1
                  }} transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1]
                  }} loading="lazy" />
                      {/* Overlay gradient */}
                      <motion.div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" initial={{
                    opacity: 0
                  }} whileHover={{
                    opacity: 1
                  }} transition={{
                    duration: 0.3
                  }} />
                      
                      {/* Category badge */}
                      <motion.div initial={{
                    opacity: 0,
                    y: -15,
                    scale: 0.9
                  }} whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1
                  }} className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-primary-foreground/90 text-foreground text-xs font-medium capitalize backdrop-blur-sm">
                        {gem.category}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                      <motion.div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3" initial={{
                    opacity: 0,
                    x: isEven ? -20 : 20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1
                  }}>
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{gem.district}</span>
                        <span className="mx-1.5">•</span>
                        <span>{gem.altitude}</span>
                        <span className="mx-1.5">•</span>
                        <span className="text-primary/80">{gem.difficulty}</span>
                      </motion.div>
                      
                      <motion.h3 initial={{
                    opacity: 0,
                    y: 15
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1
                  }} className="font-display text-xl sm:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {gem.name}
                      </motion.h3>
                      
                      <motion.p initial={{
                    opacity: 0,
                    y: 15
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.1
                  }} className="text-sm sm:text-base text-muted-foreground line-clamp-2 mb-5">
                        {gem.shortDescription}
                      </motion.p>
                      
                      <motion.div className="flex items-center gap-2 text-sm font-medium text-primary" whileHover={{
                    x: 8
                  }} transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20
                  }}>
                        <span>Discover more</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              </SlideIn>;
        })}
        </div>

        {/* View All */}
        <motion.div initial={{
        opacity: 0,
        y: 40,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        y: 0,
        scale: 1
      }} viewport={{
        once: true,
        margin: "-10%"
      }} transition={{
        duration: 0.7,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }} className="text-center">
          <Link to="/hidden-gems" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-primary/5 hover:bg-primary/15 border border-primary/20 text-foreground font-medium transition-all duration-300">
            <motion.div animate={{
            rotate: [0, 15, -15, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span>Explore all hidden gems</span>
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