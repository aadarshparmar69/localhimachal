import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
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
}

export const StaggerItem = ({ children, className = "" }: StaggerItemProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

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
  speed = 0.5,
}: ParallaxImageProps) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ scale: 1.1 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      />
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.blockquote
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${className}`}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute -top-8 -left-4 text-8xl font-display text-accent"
      >
        "
      </motion.span>
      <p className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed">
        {quote}
      </p>
      {author && (
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 font-body text-sm text-muted-foreground"
        >
          — {author}
        </motion.footer>
      )}
    </motion.blockquote>
  );
};
