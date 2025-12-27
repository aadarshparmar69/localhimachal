import { motion } from "framer-motion";
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
    <section className="py-16 sm:py-24 md:py-32 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-3 sm:mb-4">
            Ways to experience
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed">
            Every journey through Himachal unfolds differently. Choose what calls to you.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container - Touch friendly */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide touch-action-pan-x"
      >
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} index={index} />
        ))}
        {/* End spacer for scroll */}
        <div className="flex-shrink-0 w-4 sm:w-8" aria-hidden="true" />
      </div>
      
      {/* Scroll hint for mobile */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 font-body text-xs sm:text-sm text-muted-foreground sm:hidden"
      >
        ← Swipe to explore
      </motion.p>
    </section>
  );
};

interface ExperienceCardProps {
  experience: typeof experiences[0];
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const Icon = experience.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[360px] snap-start"
    >
      <Link to={experience.link} className="block group">
        <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-card shadow-card active:scale-[0.98] sm:hover:shadow-elevated transition-all duration-300">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover transition-transform duration-500 sm:group-hover:scale-105"
            loading="lazy"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
          
          {/* Icon */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/10">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" strokeWidth={1.5} />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h3 className="font-display text-xl sm:text-2xl text-primary-foreground mb-1 sm:mb-2 transition-transform duration-300 sm:group-hover:-translate-y-1">
              {experience.title}
            </h3>
            <p className="font-body text-xs sm:text-sm text-primary-foreground/70 leading-relaxed line-clamp-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
              {experience.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
