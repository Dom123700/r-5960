
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { RecipeCard } from '@/components/RecipeCard';
import { SearchBar } from '@/components/SearchBar';
import { CategoryChip } from '@/components/CategoryChip';
import { searchRecipes, getRecipesByCategory, Recipe, categories } from '@/data/recipes';

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  const initialCategory = queryParams.get('category') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [results, setResults] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
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
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-6">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-4">Find the Perfect Recipe</h1>
          <p className="text-muted-foreground mb-6">
            Search by name, ingredients, or browse by category
          </p>
          
          <SearchBar 
            onSearch={handleSearch}
            initialQuery={searchQuery}
            className="mb-6"
          />
          
          <div className="flex flex-wrap justify-center gap-2 my-6 animate-slide-in">
            {categories.slice(0, 12).map((category) => (
              <CategoryChip
                key={category}
                category={category}
                className={activeCategory === category ? 'bg-primary text-primary-foreground' : ''}
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
              <h2 className="text-xl font-medium mb-4">
                {results.length} {results.length === 1 ? 'recipe' : 'recipes'} found
                {searchQuery && ` for "${searchQuery}"`}
                {activeCategory && ` in "${activeCategory}"`}
              </h2>
              
              <div className="recipe-grid">
                {results.map((recipe, index) => (
                  <RecipeCard 
                    key={recipe.id} 
                    recipe={recipe} 
                    className="animate-scale-in" 
                    style={{ animationDelay: `${index * 50}ms` }}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-xl font-medium mb-3">No recipes found</h2>
              <p className="text-muted-foreground">
                Try adjusting your search terms or browse by category
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
