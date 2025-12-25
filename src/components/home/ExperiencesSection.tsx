import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Mountain, MapPin, Palette, Home, Compass } from "lucide-react";

const experiences = [
  {
    id: "hidden-places",
    title: "Hidden Places",
    description: "Unmarked temples, forgotten villages, secret viewpoints known only to locals.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    link: "/hidden-gems",
    icon: MapPin,
  },
  {
    id: "treks",
    title: "Mountain Trails",
    description: "Ancient pathways through forests, passes, and high-altitude meadows.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    link: "/treks",
    icon: Mountain,
  },
  {
    id: "culture",
    title: "Living Culture",
    description: "Festivals, rituals, and traditions that have survived centuries.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    link: "/culture",
    icon: Palette,
  },
  {
    id: "villages",
    title: "Village Life",
    description: "Wooden homes, terraced farms, and communities bound by mountains.",
    image: "https://images.unsplash.com/photo-1585136917704-b2a58f9d8eed?w=800&q=80",
    link: "/explore",
    icon: Home,
  },
  {
    id: "slow-travel",
    title: "Slow Travel",
    description: "Journeys measured in experiences, not destinations.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    link: "/plan",
    icon: Compass,
  },
];

export const ExperiencesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-32 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Ways to experience
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Every journey through Himachal unfolds differently. Choose what calls to you.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-8 px-4 lg:px-8 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: typeof experiences[0];
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = experience.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex-shrink-0 w-[300px] md:w-[360px] snap-start perspective-1000"
    >
      <Link to={experience.link} className="block group">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-card shadow-card">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
          
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="absolute top-6 left-6 w-10 h-10 rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/10"
          >
            <Icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.5} />
          </motion.div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.h3
              className="font-display text-2xl text-primary-foreground mb-2 transition-transform duration-300 group-hover:-translate-y-1"
            >
              {experience.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              className="font-body text-sm text-primary-foreground/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {experience.description}
            </motion.p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
