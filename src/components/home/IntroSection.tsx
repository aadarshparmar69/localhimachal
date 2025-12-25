import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const introLines = [
  "This is not a travel guide.",
  "It's a doorway into a land where ancient forests whisper secrets,",
  "where villages cling to cliffsides in quiet defiance of time,",
  "and where hospitality is not a service—it's a way of life.",
];

export const IntroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"],
  });

  return (
    <section
      ref={containerRef}
      className="py-32 md:py-48 bg-background relative overflow-hidden"
    >
      {/* Subtle Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {introLines.map((line, index) => {
            const start = index * 0.15;
            const end = start + 0.3;
            
            return (
              <IntroLine
                key={index}
                line={line}
                index={index}
                scrollYProgress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}

          {/* Decorative Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent origin-center"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center font-body text-muted-foreground text-sm tracking-[0.2em] uppercase"
          >
            Hidden places • Local first • Culture over consumption
          </motion.p>
        </div>
      </div>
    </section>
  );
};

interface IntroLineProps {
  line: string;
  index: number;
  scrollYProgress: any;
  start: number;
  end: number;
}

const IntroLine = ({ line, index, scrollYProgress, start, end }: IntroLineProps) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [30, 0]);

  // Highlight keywords
  const highlightedLine = line
    .replace("ancient forests", '<span class="text-primary font-medium">ancient forests</span>')
    .replace("hospitality", '<span class="text-primary font-medium">hospitality</span>')
    .replace("way of life", '<span class="text-accent font-medium">way of life</span>');

  return (
    <motion.p
      style={{ opacity, y }}
      className={`font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed tracking-tight ${
        index > 0 ? "mt-6 md:mt-8" : ""
      } ${index === 0 ? "font-semibold" : ""}`}
      dangerouslySetInnerHTML={{ __html: highlightedLine }}
    />
  );
};
