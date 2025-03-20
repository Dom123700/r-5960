
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
  className?: string;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  initialQuery = '',
  className,
  placeholder = 'Search recipes...'
}) => {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        "relative flex w-full max-w-xl mx-auto items-center",
        className
      )}
    >
      <div className="relative w-full group">
        <Search 
          size={18} 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-primary transition-colors" 
        />
        
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-10 py-6 rounded-full border-border/50 bg-white/90 backdrop-blur-sm shadow-md focus-visible:ring-primary hover:border-primary/30 transition-all"
        />
        
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 p-0 text-muted-foreground hover:text-destructive rounded-full"
            onClick={clearSearch}
          >
            <X size={16} />
            <span className="sr-only">Clear</span>
          </Button>
        )}
      </div>
      
      <Button 
        type="submit"
        className="ml-3 rounded-full px-7 py-6 bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg"
      >
        Search
      </Button>
    </form>
  );
};
