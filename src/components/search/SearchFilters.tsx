import { motion } from "framer-motion";
import { MapPin, Mountain, Home, Sparkles, Grid3X3, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchCategory } from "@/hooks/useSearch";
import { districts } from "@/data/districts";

interface SearchFiltersProps {
  category: SearchCategory;
  onCategoryChange: (category: SearchCategory) => void;
  difficultyFilter: string | null;
  onDifficultyChange: (difficulty: string | null) => void;
  districtFilter: string | null;
  onDistrictChange: (district: string | null) => void;
  onClearFilters: () => void;
  resultCounts: {
    all: number;
    destinations: number;
    treks: number;
    homestays: number;
    hiddenGems: number;
  };
}

const categories = [
  { id: "all" as const, label: "All", icon: Grid3X3 },
  { id: "destinations" as const, label: "Districts", icon: MapPin },
  { id: "treks" as const, label: "Treks", icon: Mountain },
  { id: "homestays" as const, label: "Homestays", icon: Home },
  { id: "hidden-gems" as const, label: "Hidden Gems", icon: Sparkles },
];

const difficulties = ["Easy", "Moderate", "Hard", "Challenging"];

export const SearchFilters = ({
  category,
  onCategoryChange,
  difficultyFilter,
  onDifficultyChange,
  districtFilter,
  onDistrictChange,
  onClearFilters,
  resultCounts,
}: SearchFiltersProps) => {
  const hasActiveFilters = difficultyFilter || districtFilter || category !== "all";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="space-y-4"
    >
      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const count = cat.id === "all" ? resultCounts.all :
            cat.id === "destinations" ? resultCounts.destinations :
            cat.id === "treks" ? resultCounts.treks :
            cat.id === "homestays" ? resultCounts.homestays :
            resultCounts.hiddenGems;
          
          return (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onCategoryChange(cat.id)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-full
                font-medium text-sm transition-all duration-300
                ${category === cat.id 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "bg-secondary/80 text-foreground hover:bg-secondary"
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
              {count > 0 && (
                <Badge 
                  variant={category === cat.id ? "secondary" : "outline"} 
                  className="ml-1 px-2 py-0.5 text-xs"
                >
                  {count}
                </Badge>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Advanced Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filters:</span>
        </div>

        {/* Difficulty Filter */}
        {(category === "all" || category === "treks" || category === "hidden-gems") && (
          <Select
            value={difficultyFilter || ""}
            onValueChange={(value) => onDifficultyChange(value || null)}
          >
            <SelectTrigger className="w-[140px] rounded-full bg-background">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent className="bg-background border shadow-lg">
              <SelectItem value="all-difficulties">All Difficulties</SelectItem>
              {difficulties.map((d) => (
                <SelectItem key={d} value={d.toLowerCase()}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {/* District Filter */}
        <Select
          value={districtFilter || ""}
          onValueChange={(value) => onDistrictChange(value || null)}
        >
          <SelectTrigger className="w-[160px] rounded-full bg-background">
            <SelectValue placeholder="District" />
          </SelectTrigger>
          <SelectContent className="bg-background border shadow-lg max-h-[300px]">
            <SelectItem value="all-districts">All Districts</SelectItem>
            {districts.map((d) => (
              <SelectItem key={d.id} value={d.name.toLowerCase()}>
                {d.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="gap-1 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
            Clear filters
          </Button>
        )}
      </div>
    </motion.div>
  );
};
