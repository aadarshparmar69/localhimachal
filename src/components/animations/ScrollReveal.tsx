import { motion, useScroll, useTransform, useSpring, useInView, useReducedMotion, Variants } from "framer-motion";
import { useRef, ReactNode, useMemo } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  blur?: boolean;
  scale?: boolean;
  rotate?: boolean;
  distance?: number;
}

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
  blur = false,
  scale = false,
  rotate = false,
  distance = 50,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();

  const directions = useMemo(() => ({
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }), [distance]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction],
        filter: blur ? "blur(12px)" : "blur(0px)",
        scale: scale ? 0.9 : 1,
        rotate: rotate ? -3 : 0,
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        rotate: 0,
      } : {}}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Enhanced stagger container with smoother animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.08,
  delayChildren = 0,
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const StaggerItem = ({ children, className = "", direction = "up" }: StaggerItemProps) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 60 },
    right: { x: -60 },
  };

  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          ...directions[direction], 
          filter: "blur(8px)",
          scale: 0.95,
        },
        visible: { 
          opacity: 1, 
          y: 0,
          x: 0, 
          filter: "blur(0px)",
          scale: 1,
          transition: { 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1] 
          } 
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Smooth scroll-linked parallax
interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  offset?: [string, string];
}

export const ParallaxSection = ({
  children,
  className = "",
  speed = 0.3,
  offset = ["start end", "end start"],
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 80 * speed]);
  const smoothY = useSpring(y, { stiffness: 80, damping: 20, mass: 0.5 });

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Enhanced parallax image with scale and opacity
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export const ParallaxImage = ({
  src,
  alt,
  className = "",
  speed = 0.4,
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-40 * speed, 40 * speed]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-10%" }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
        style={{ 
          y: prefersReducedMotion ? 0 : y, 
          scale: prefersReducedMotion ? 1 : scale,
          opacity: prefersReducedMotion ? 1 : opacity,
        }}
      />
    </motion.div>
  );
};

// Word-by-word text reveal
interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export const TextReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  staggerDelay = 0.04,
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const words = children.split(" ");
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "120%", rotateX: -80 }}
            animate={isInView ? { y: 0, rotateX: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: delay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// Character-by-character reveal for headings
interface CharacterRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export const CharacterReveal = ({ 
  children, 
  className = "", 
  delay = 0,
}: CharacterRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const characters = children.split("");
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 50, rotateY: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.025,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

// Smooth counter animation
interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const CountUp = ({ 
  end, 
  duration = 2, 
  suffix = "", 
  prefix = "",
  className = "" 
}: CountUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  
  const count = useSpring(0, {
    stiffness: 40,
    damping: 25,
    mass: 1,
  });

  if (isInView) {
    count.set(end);
  }

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      <motion.span>
        {Math.round(count.get())}
      </motion.span>
      {suffix}
    </motion.span>
  );
};

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export const AnimatedCounter = ({ value, suffix = "", label, delay = 0 }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: delay + 0.1, type: "spring", bounce: 0.4 }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2"
      >
        {prefersReducedMotion ? (
          <span>{value}{suffix}</span>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: delay + 0.2 }}
          >
            {value}{suffix}
          </motion.span>
        )}
      </motion.div>
      <p className="text-sm sm:text-base text-muted-foreground">{label}</p>
    </motion.div>
  );
};

interface QuoteFadeInProps {
  quote: string;
  author?: string;
  className?: string;
}

export const QuoteFadeIn = ({ quote, author, className = "" }: QuoteFadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.blockquote
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={isInView ? { opacity: 0.15, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute -top-8 -left-4 text-8xl font-display text-accent"
      >
        "
      </motion.span>
      <p className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed">
        {quote}
      </p>
      {author && (
        <motion.footer
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 font-body text-sm text-muted-foreground"
        >
          — {author}
        </motion.footer>
      )}
    </motion.blockquote>
  );
};

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}

export const FloatingElement = ({ 
  children, 
  className = "", 
  amplitude = 12,
  duration = 5,
  delay = 0,
}: FloatingElementProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticButton = ({ children, className = "", strength = 0.2 }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0, 0)";
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
};

// New: Fade up on scroll with smooth spring physics
interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeUp = ({ children, className = "", delay = 0 }: FadeUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// New: Scale in animation
interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const ScaleIn = ({ children, className = "", delay = 0 }: ScaleInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// New: Slide in from side
interface SlideInProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  delay?: number;
}

export const SlideIn = ({ 
  children, 
  className = "", 
  direction = "left",
  delay = 0 
}: SlideInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        x: direction === "left" ? -80 : 80,
        filter: "blur(10px)",
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0,
        filter: "blur(0px)",
      } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// New: Reveal with mask effect
interface MaskRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const MaskReveal = ({ children, className = "", delay = 0 }: MaskRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : {}}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// New: Blur in animation
interface BlurInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const BlurIn = ({ children, className = "", delay = 0 }: BlurInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)", scale: 1 } : {}}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
