import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Mountain, Home, Sparkles, ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SearchResult } from "@/hooks/useSearch";

interface SearchResultCardProps {
  result: SearchResult;
  index: number;
}

const typeConfig = {
  district: { icon: MapPin, color: "bg-blue-500/10 text-blue-600", label: "District" },
  trek: { icon: Mountain, color: "bg-green-500/10 text-green-600", label: "Trek" },
  homestay: { icon: Home, color: "bg-amber-500/10 text-amber-600", label: "Homestay" },
  "hidden-gem": { icon: Sparkles, color: "bg-purple-500/10 text-purple-600", label: "Hidden Gem" },
};

const difficultyColors: Record<string, string> = {
  easy: "bg-green-100 text-green-700 border-green-200",
  moderate: "bg-yellow-100 text-yellow-700 border-yellow-200",
  hard: "bg-orange-100 text-orange-700 border-orange-200",
  challenging: "bg-red-100 text-red-700 border-red-200",
};

export const SearchResultCard = ({ result, index }: SearchResultCardProps) => {
  const config = typeConfig[result.type];
  const Icon = config.icon;
  const isExternal = result.url.startsWith("http");

  const cardContent = (
    <div className="flex flex-col sm:flex-row">
      {/* Image */}
      <div className="relative w-full sm:w-48 md:w-56 h-48 sm:h-auto overflow-hidden flex-shrink-0">
        <img
          src={result.image}
          alt={result.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge className={`${config.color} border-0 backdrop-blur-sm`}>
            <Icon className="w-3 h-3 mr-1" />
            {config.label}
          </Badge>
        </div>
        {result.difficulty && (
          <div className="absolute bottom-3 left-3">
            <Badge 
              variant="outline" 
              className={`${difficultyColors[result.difficulty.toLowerCase()] || ""} backdrop-blur-sm`}
            >
              {result.difficulty}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {result.title}
            </h3>
            {isExternal ? (
              <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            ) : (
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            )}
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">
            {result.subtitle}
          </p>
          
          <p className="text-sm text-foreground/80 line-clamp-2 mb-4">
            {result.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {result.tags.filter(Boolean).slice(0, 4).map((tag, i) => (
            <Badge 
              key={i} 
              variant="secondary" 
              className="text-xs font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      {isExternal ? (
        <a
          href={result.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          {cardContent}
        </a>
      ) : (
        <Link
          to={result.url}
          className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
};
