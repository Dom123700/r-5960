
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
      <div className="relative w-full">
        <Search 
          size={18} 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
        />
        
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-6 rounded-full border-muted bg-white/80 focus-visible:ring-primary shadow-sm"
        />
        
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 p-0 text-muted-foreground"
            onClick={clearSearch}
          >
            <X size={16} />
            <span className="sr-only">Clear</span>
          </Button>
        )}
      </div>
      
      <Button 
        type="submit"
        className="ml-2 rounded-full px-6 bg-primary hover:bg-primary/90"
      >
        Search
      </Button>
    </form>
  );
};
