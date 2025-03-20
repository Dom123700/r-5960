
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { RecipeCard } from '@/components/RecipeCard';
import { CategoryChip } from '@/components/CategoryChip';
import { SearchBar } from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { recipes, categories } from '@/data/recipes';

const Index = () => {
  const [featuredCategory, setFeaturedCategory] = useState<string | null>(null);
  
  const filteredRecipes = featuredCategory
    ? recipes.filter(recipe => 
        recipe.categories?.some(category => 
          category.toLowerCase() === featuredCategory.toLowerCase()
        )
      )
    : recipes;

  return (
    <Layout>
      <section className="space-y-6 py-6">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight">Your Personal Recipe Collection</h1>
          <p className="text-muted-foreground text-lg">
            Discover, store, and organize your favorite recipes in one place
          </p>
        </div>
        
        <div className="mb-8 w-full max-w-xl mx-auto">
          <SearchBar 
            onSearch={(query) => {
              if (query) {
                window.location.href = `/search?q=${encodeURIComponent(query)}`;
              }
            }}
            placeholder="Search for recipes, ingredients, or categories..."
          />
        </div>
        
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Featured Categories</h2>
              <Button asChild variant="ghost" size="sm">
                <Link to="/categories">View all categories</Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 py-2 animate-slide-in">
              <CategoryChip 
                category="All" 
                className={!featuredCategory ? 'bg-primary text-primary-foreground' : ''}
                onClick={() => setFeaturedCategory(null)}
              />
              {categories.slice(0, 8).map((category) => (
                <CategoryChip 
                  key={category} 
                  category={category} 
                  className={featuredCategory === category ? 'bg-primary text-primary-foreground' : ''} 
                  onClick={() => setFeaturedCategory(category)}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">
                {featuredCategory ? `${featuredCategory} Recipes` : 'All Recipes'}
              </h2>
            </div>
            
            <div className="recipe-grid pb-8">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} className="animate-scale-in" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
