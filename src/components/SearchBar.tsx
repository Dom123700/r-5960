
import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { recipes, searchRecipes } from '@/data/recipes';

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
  className?: string;
  placeholder?: string;
  showSuggestions?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  initialQuery = '',
  className,
  placeholder = 'Search recipes...',
  showSuggestions = true
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState<typeof recipes>([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (query.trim() && showSuggestions) {
      // Add a small delay to avoid excessive searches while typing
      const timer = setTimeout(() => {
        const results = searchRecipes(query);
        setSuggestions(results.slice(0, 5)); // Limit to 5 for better UX
      }, 200);
      
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [query, showSuggestions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
    setIsFocused(false);
  };

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    onSearch('');
  };

  return (
    <div className="relative">
      <form 
        onSubmit={handleSubmit} 
        className={cn(
          "relative flex w-full max-w-2xl mx-auto items-center group",
          className
        )}
      >
        <div className="relative w-full">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/70 transition-all duration-300 group-focus-within:text-primary">
            <Search size={18} />
          </div>
          
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-12 pr-10 py-6 h-14 rounded-full border-border/40 bg-background/80 backdrop-blur-sm shadow-sm focus-visible:ring-primary/20 focus-visible:ring-4 focus-visible:border-primary transition-all"
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              // Delay hiding suggestions to allow for clicking on them
              setTimeout(() => setIsFocused(false), 200);
            }}
          />
          
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-16 top-1/2 -translate-y-1/2 h-8 w-8 p-0 text-muted-foreground hover:text-destructive rounded-full"
              onClick={clearSearch}
            >
              <X size={16} />
              <span className="sr-only">Clear</span>
            </Button>
          )}
        </div>
        
        <Button 
          type="submit"
          className="ml-3 rounded-full px-7 py-6 h-14 bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg"
        >
          Search
        </Button>
      </form>
      
      {/* Live search suggestions dropdown */}
      {showSuggestions && isFocused && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background rounded-xl shadow-lg border border-border/50 overflow-hidden">
          <ul className="py-1">
            {suggestions.map((recipe) => (
              <li 
                key={recipe.id}
                className="px-4 py-2 hover:bg-accent/50 cursor-pointer flex items-center gap-3"
                onMouseDown={() => {
                  setQuery(recipe.name);
                  onSearch(recipe.name);
                }}
              >
                <div className="w-8 h-8 rounded-md overflow-hidden flex-shrink-0">
                  <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-sm">{recipe.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {recipe.categories?.slice(0, 2).join(', ')}
                  </p>
                </div>
              </li>
            ))}
            <li className="border-t border-border/30 mt-1">
              <button
                className="w-full text-left px-4 py-2 text-primary text-sm flex items-center gap-2 hover:bg-accent/50"
                onMouseDown={() => onSearch(query)}
              >
                <Search size={14} />
                <span>See all results for "{query}"</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
