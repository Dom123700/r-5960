
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { RecipeCard } from '@/components/RecipeCard';
import { SearchBar } from '@/components/SearchBar';
import { CategoryChip } from '@/components/CategoryChip';
import { searchRecipes, getRecipesByCategory, Recipe, categories } from '@/data/recipes';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChefHat, Search as SearchIcon, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  const initialCategory = queryParams.get('category') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [results, setResults] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate search delay
    const timer = setTimeout(() => {
      let filteredResults: Recipe[] = [];
      
      if (activeCategory) {
        filteredResults = getRecipesByCategory(activeCategory);
        // If there's also a search query, filter the category results
        if (searchQuery) {
          filteredResults = filteredResults.filter(recipe => 
            recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
      } else if (searchQuery) {
        filteredResults = searchRecipes(searchQuery);
      }
      
      setResults(filteredResults);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchQuery, activeCategory]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    // Update URL query parameter without page reload
    const params = new URLSearchParams(location.search);
    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }
    
    const newUrl = `${location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
  };
  
  const handleCategoryClick = (category: string) => {
    const isActive = activeCategory === category;
    setActiveCategory(isActive ? '' : category);
    
    // Update URL query parameter
    const params = new URLSearchParams(location.search);
    if (!isActive) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    
    if (searchQuery) {
      params.set('q', searchQuery);
    }
    
    const newUrl = `${location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
  };

  const resetFilters = () => {
    setActiveCategory('');
    setSearchQuery('');
    window.history.pushState({}, '', location.pathname);
  };
  
  return (
    <Layout>
      <div className="relative overflow-hidden pb-20">
        {/* Decorative blobs */}
        <div className="absolute -top-20 left-1/3 w-96 h-96 rounded-full bg-primary/20 blur-3xl -z-10"></div>
        <div className="absolute bottom-40 -right-20 w-80 h-80 rounded-full bg-accent-foreground/10 blur-3xl -z-10"></div>
        
        <div className="max-w-5xl mx-auto py-10 px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-4 bg-white/80 backdrop-blur-md rounded-2xl mb-6 shadow-md">
              <SearchIcon className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">
              Find Your Next Culinary Adventure
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Search for recipes, ingredients, or browse by category to discover your next favorite dish
            </p>
            
            <SearchBar 
              onSearch={handleSearch}
              initialQuery={searchQuery}
              className="mb-8 max-w-3xl mx-auto"
            />
          </div>
          
          {/* Categories strip with glassmorphism effect */}
          <div className="bg-white/50 backdrop-blur-md rounded-xl p-4 mb-8 shadow-sm border border-accent/20">
            <h2 className="text-lg font-medium mb-3 text-center">Popular Categories</h2>
            <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap justify-center">
              {categories.map((category) => (
                <CategoryChip
                  key={category}
                  category={category}
                  active={activeCategory === category}
                  onClick={() => handleCategoryClick(category)}
                />
              ))}
            </div>
          </div>
          
          <div>
            {isLoading ? (
              <div className="grid recipe-grid animate-pulse">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-border/50">
                    <div className="aspect-video bg-muted"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-5 bg-muted rounded w-3/4"></div>
                      <div className="h-4 bg-muted rounded w-full"></div>
                      <div className="h-4 bg-muted rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : results.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium">
                    {results.length} {results.length === 1 ? 'recipe' : 'recipes'} found
                    {searchQuery && ` for "${searchQuery}"`}
                    {activeCategory && ` in "${activeCategory}"`}
                  </h2>
                  
                  {(activeCategory || searchQuery) && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={resetFilters}
                      className="flex items-center gap-1"
                    >
                      <RotateCcw size={14} />
                      <span>Reset filters</span>
                    </Button>
                  )}
                </div>
                
                <div className="recipe-grid">
                  {results.map((recipe, index) => (
                    <RecipeCard 
                      key={recipe.id} 
                      recipe={recipe} 
                      className="animate-scale-in card-hover" 
                      style={{ animationDelay: `${index * 50}ms` }}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16 space-y-4 bg-white/50 backdrop-blur-sm rounded-xl border border-accent/20">
                <div className="inline-flex h-20 w-20 rounded-full bg-muted/30 items-center justify-center mb-3">
                  <SearchIcon size={30} className="text-muted-foreground" />
                </div>
                <h2 className="text-xl font-medium">No recipes found</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Try adjusting your search terms or browse by category to find the perfect recipe
                </p>
                <Button onClick={resetFilters} className="mt-2">
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
