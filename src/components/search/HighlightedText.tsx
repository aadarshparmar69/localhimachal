import { memo, useMemo } from "react";
import { cn } from "@/lib/utils";

interface HighlightedTextProps {
  text: string;
  query: string;
  className?: string;
  highlightClassName?: string;
}

export const HighlightedText = memo(({ 
  text, 
  query, 
  className,
  highlightClassName = "bg-primary/20 text-primary font-medium rounded-sm px-0.5"
}: HighlightedTextProps) => {
  const parts = useMemo(() => {
    if (!query.trim() || query.length < 2) {
      return [{ text, highlighted: false }];
    }

    const normalizedQuery = query.toLowerCase().trim();
    const normalizedText = text.toLowerCase();
    const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length >= 2);
    
    if (queryWords.length === 0) {
      return [{ text, highlighted: false }];
    }

    // Find all matching positions
    const matches: { start: number; end: number }[] = [];
    
    for (const word of queryWords) {
      let startIndex = 0;
      while (startIndex < normalizedText.length) {
        const index = normalizedText.indexOf(word, startIndex);
        if (index === -1) break;
        
        matches.push({ start: index, end: index + word.length });
        startIndex = index + 1;
      }
    }

    if (matches.length === 0) {
      return [{ text, highlighted: false }];
    }

    // Sort and merge overlapping matches
    matches.sort((a, b) => a.start - b.start);
    const mergedMatches: { start: number; end: number }[] = [];
    
    for (const match of matches) {
      const last = mergedMatches[mergedMatches.length - 1];
      if (last && match.start <= last.end) {
        last.end = Math.max(last.end, match.end);
      } else {
        mergedMatches.push({ ...match });
      }
    }

    // Build parts array
    const result: { text: string; highlighted: boolean }[] = [];
    let currentIndex = 0;

    for (const match of mergedMatches) {
      // Add non-highlighted part before this match
      if (match.start > currentIndex) {
        result.push({
          text: text.slice(currentIndex, match.start),
          highlighted: false,
        });
      }

      // Add highlighted part
      result.push({
        text: text.slice(match.start, match.end),
        highlighted: true,
      });

      currentIndex = match.end;
    }

    // Add remaining non-highlighted part
    if (currentIndex < text.length) {
      result.push({
        text: text.slice(currentIndex),
        highlighted: false,
      });
    }

    return result;
  }, [text, query]);

  return (
    <span className={className}>
      {parts.map((part, index) => (
        part.highlighted ? (
          <mark key={index} className={cn("bg-transparent", highlightClassName)}>
            {part.text}
          </mark>
        ) : (
          <span key={index}>{part.text}</span>
        )
      ))}
    </span>
  );
});

HighlightedText.displayName = "HighlightedText";
