
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { RecipeCard } from '@/components/RecipeCard';
import { CategoryChip } from '@/components/CategoryChip';
import { SearchBar } from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { recipes, categories } from '@/data/recipes';
import { ChefHat, Flame, Clock, Award } from 'lucide-react';

const Index = () => {
  const [featuredCategory, setFeaturedCategory] = useState<string | null>(null);
  
  const filteredRecipes = featuredCategory
    ? recipes.filter(recipe => 
        recipe.categories?.some(category => 
          category.toLowerCase() === featuredCategory.toLowerCase()
        )
      )
    : recipes;
    
  // Get some featured recipes for the top section
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <Layout>
      <section className="space-y-12 py-8">
        {/* Search bar section with rounded background */}
        <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-border/50 mb-12">
          <div className="max-w-xl mx-auto">
            <h2 className="text-xl font-medium text-center mb-6">Find Your Next Culinary Adventure</h2>
            <SearchBar 
              onSearch={(query) => {
                if (query) {
                  window.location.href = `/search?q=${encodeURIComponent(query)}`;
                }
              }}
              placeholder="Search for recipes, ingredients, or categories..."
            />
          </div>
        </div>
        
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
