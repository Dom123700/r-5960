
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { RecipeCard } from '@/components/RecipeCard';
import { CategoryChip } from '@/components/CategoryChip';
import { SearchBar } from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { recipes, categories, searchRecipes } from '@/data/recipes';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { ChefHat, Flame, Clock, Award, Search, UtensilsCrossed, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Index = () => {
  const [featuredCategory, setFeaturedCategory] = useState<string | null>(null);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof recipes>([]);
  const navigate = useNavigate();
  
  const filteredRecipes = featuredCategory
    ? recipes.filter(recipe => 
        recipe.categories?.some(category => 
          category.toLowerCase() === featuredCategory.toLowerCase()
        )
      )
    : recipes;
    
  // Get some featured recipes for the top section
  const featuredRecipes = recipes.slice(0, 3);

  // Update search results whenever search query changes
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const results = searchRecipes(searchQuery);
    setSearchResults(results.slice(0, 6)); // Limit to 6 results for better UX
  }, [searchQuery]);

  // Handle command menu search
  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsCommandOpen(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <Layout>
      <section className="space-y-12 py-8">
        {/* Search section with enhanced design */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-accent/30 to-background p-8 md:p-12 shadow-lg border border-border/50 mb-12">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,#ffffff10,#ffffff90)] -z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/0 to-accent/20 -z-10" />
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <UtensilsCrossed size={14} className="mr-1" />
                <span>Delicious Inspiration</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Find Your Next <span className="bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">Culinary Adventure</span>
              </h2>
              
              <p className="text-muted-foreground max-w-md">
                Discover recipes from around the world. Whether you're looking for quick meals, healthy options, or gourmet challenges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="group"
                  onClick={() => {
                    setSearchQuery('');
                    setIsCommandOpen(true);
                  }}
                  size="lg"
                >
                  <Search size={18} className="mr-2" />
                  Search Recipes
                </Button>
                
                <Button variant="outline" asChild size="lg">
                  <Link to="/categories" className="group">
                    <span>Browse Categories</span>
                    <ChevronRight size={16} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-2 pt-2">
                {[
                  { icon: <Clock size={16} />, text: "Quick Meals" },
                  { icon: <ChefHat size={16} />, text: "All Skill Levels" },
                  { icon: <Award size={16} />, text: "Top Rated" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden md:block relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
              <img 
                src="/placeholder.svg" 
                alt="Food collage" 
                className="rounded-2xl shadow-lg border border-border/50"
              />
              <div className="absolute -bottom-4 -right-4 bg-background p-3 rounded-xl shadow-lg border border-border/50">
                <div className="flex items-center gap-2">
                  <Flame size={20} className="text-primary" />
                  <span className="font-medium">1000+ Recipes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Command menu for search, wrapped in a Dialog */}
        <Dialog open={isCommandOpen} onOpenChange={setIsCommandOpen}>
          <DialogContent className="p-0 gap-0 border-none max-w-2xl">
            <Command className="rounded-lg">
              <CommandInput 
                placeholder="Search for recipes, ingredients..." 
                value={searchQuery}
                onValueChange={setSearchQuery}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
                autoFocus
              />
              <CommandList>
                <CommandEmpty>
                  {searchQuery.trim() ? 'No results found.' : 'Start typing to see suggestions...'}
                </CommandEmpty>
                
                {/* Live Recipe Suggestions */}
                {searchResults.length > 0 && (
                  <CommandGroup heading="Recipe Suggestions">
                    {searchResults.map(recipe => (
                      <CommandItem 
                        key={recipe.id}
                        onSelect={() => {
                          setIsCommandOpen(false);
                          navigate(`/recipe/${recipe.id}`);
                        }}
                        className="flex items-center gap-3 py-3"
                      >
                        <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                          <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium">{recipe.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {recipe.categories?.slice(0, 2).join(', ')}
                          </span>
                        </div>
                      </CommandItem>
                    ))}
                    
                    {searchResults.length > 0 && (
                      <CommandItem 
                        onSelect={handleSearch}
                        className="border-t border-border/30 mt-2 pt-2 text-primary"
                      >
                        <Search className="mr-2 h-4 w-4" />
                        <span>See all results for "{searchQuery}"</span>
                      </CommandItem>
                    )}
                  </CommandGroup>
                )}
                
                {/* Quick Suggestions - only show when no search query */}
                {searchQuery.trim() === '' && (
                  <CommandGroup heading="Quick Suggestions">
                    {["Pasta", "Chicken", "Vegetarian", "Dessert", "30-minute meals"].map(item => (
                      <CommandItem 
                        key={item}
                        onSelect={() => {
                          setIsCommandOpen(false);
                          navigate(`/search?q=${encodeURIComponent(item)}`);
                        }}
                      >
                        <Search className="mr-2 h-4 w-4" />
                        <span>{item}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
                
                {/* Ingredient Suggestions - when typing */}
                {searchQuery.trim() !== '' && !searchResults.length && (
                  <CommandGroup heading="Try searching for">
                    {["ingredient", "cuisine type", "meal type", "dietary restriction"].map(type => (
                      <CommandItem 
                        key={type}
                        onSelect={() => {
                          setIsCommandOpen(false);
                          navigate(`/search?q=${encodeURIComponent(searchQuery + " " + type)}`);
                        }}
                      >
                        <Search className="mr-2 h-4 w-4" />
                        <span>"{searchQuery}" {type}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
        
        {/* Featured Recipes Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/80">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Featured Recipes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} className="animate-scale-in" />
            ))}
          </div>
        </div>
        
        {/* Recipe Categories */}
        <div className="space-y-6 pt-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/80">
              <ChefHat className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Browse by Category</h2>
          </div>
          
          <div className="flex flex-wrap gap-2 py-2 animate-slide-in">
            <CategoryChip 
              category="All" 
              className={!featuredCategory ? 'bg-primary text-primary-foreground' : ''}
              onClick={() => setFeaturedCategory(null)}
              style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
            />
            {categories.slice(0, 8).map((category) => (
              <CategoryChip 
                key={category} 
                category={category} 
                className={featuredCategory === category ? 'bg-primary text-primary-foreground' : ''} 
                onClick={() => setFeaturedCategory(category)}
                style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
              />
            ))}
          </div>
        </div>
        
        {/* Recipe Collection */}
        <div className="space-y-6 pt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/80">
                <Flame className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">
                {featuredCategory ? `${featuredCategory} Recipes` : 'Recipe Collection'}
              </h2>
            </div>
            
            <Button asChild variant="outline" size="sm" className="gap-1">
              <Link to="/categories">
                <span>View all categories</span>
              </Link>
            </Button>
          </div>
          
          <div className="recipe-grid pb-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} className="animate-scale-in" />
            ))}
          </div>
          
          {filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No recipes found for this category.</p>
              <Button 
                variant="outline" 
                onClick={() => setFeaturedCategory(null)} 
                className="mt-4"
              >
                View all recipes
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
