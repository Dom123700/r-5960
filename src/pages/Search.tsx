
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { RecipeCard } from '@/components/RecipeCard';
import { SearchBar } from '@/components/SearchBar';
import { CategoryChip } from '@/components/CategoryChip';
import { searchRecipes, getRecipesByCategory, Recipe, categories } from '@/data/recipes';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';
import { Filter, ChefHat, SlidersHorizontal, Search as SearchIcon, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  const initialCategory = queryParams.get('category') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [results, setResults] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openFilter, setOpenFilter] = useState(false);
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
  
  const FilterContent = () => (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium">Filter Recipes</h3>
        {(activeCategory || searchQuery) && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={resetFilters} 
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            <RotateCcw size={14} />
            <span>Reset</span>
          </Button>
        )}
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-3">Categories</h4>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className={`justify-start h-9 px-3 ${activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-background'}`}
                onClick={() => handleCategoryClick(category)}
              >
                <span className="truncate">{category}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="flex min-h-screen w-full">
        <Sidebar variant="floating" className="border-r-0">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Filters</SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="pb-4 px-2">
                  <Input 
                    placeholder="Search within results..." 
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="mb-4"
                  />
                  <FilterContent />
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset className="overflow-auto">
          <Layout>
            <div className="max-w-5xl mx-auto py-6 px-4">
              <div className="relative flex items-center mb-8">
                <SidebarTrigger className="mr-2" />
                <div className="w-full">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">Find the Perfect Recipe</h1>
                    <p className="text-muted-foreground mb-6">
                      Search by name, ingredients, or browse by category
                    </p>
                  </div>
                  
                  <SearchBar 
                    onSearch={handleSearch}
                    initialQuery={searchQuery}
                    className="mb-6"
                  />
                </div>
                
                {isMobile && (
                  <Drawer open={openFilter} onOpenChange={setOpenFilter}>
                    <DrawerTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="absolute right-2 top-0 md:hidden"
                      >
                        <SlidersHorizontal size={18} />
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent className="max-h-[80vh]">
                      <FilterContent />
                    </DrawerContent>
                  </Drawer>
                )}
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
                    </div>
                    
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
                  <div className="text-center py-16 space-y-4">
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
          </Layout>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Search;
