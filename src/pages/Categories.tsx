
import React from 'react';
import { Layout } from '@/components/Layout';
import { CategoryChip } from '@/components/CategoryChip';
import { categories } from '@/data/recipes';
import { Link } from 'react-router-dom';
import { BookOpen, UtensilsCrossed, ChefHat, Coffee, Soup, Cookie } from 'lucide-react';

// Map of category to icon
const categoryIcons: Record<string, React.ReactNode> = {
  breakfast: <Coffee className="h-8 w-8" />,
  lunch: <Soup className="h-8 w-8" />,
  dinner: <UtensilsCrossed className="h-8 w-8" />,
  dessert: <Cookie className="h-8 w-8" />,
  snack: <BookOpen className="h-8 w-8" />,
  drink: <Coffee className="h-8 w-8" />,
  vegan: <BookOpen className="h-8 w-8" />,
  vegetarian: <BookOpen className="h-8 w-8" />,
  gluten_free: <BookOpen className="h-8 w-8" />,
  healthy: <BookOpen className="h-8 w-8" />,
  quick: <ChefHat className="h-8 w-8" />,
};

const Categories = () => {
  return (
    <Layout>
      <div className="relative overflow-hidden pb-20">
        {/* Decorative elements */}
        <div className="absolute -top-20 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl -z-10"></div>
        <div className="absolute bottom-40 -left-20 w-80 h-80 rounded-full bg-secondary/30 blur-3xl -z-10"></div>
        
        <div className="max-w-5xl mx-auto py-10 px-4 animate-fade-in">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-white/80 backdrop-blur-md rounded-2xl mb-6 shadow-md">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Explore Recipe Categories
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover recipes organized by category to find the perfect dish for any occasion
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={category} 
                to={`/search?category=${encodeURIComponent(category)}`}
                className="animate-scale-in" 
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="group relative h-60 rounded-2xl overflow-hidden shadow-md">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-accent/40 group-hover:from-white/80 group-hover:to-primary/30 transition-all duration-500"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
                    <div className="bg-white/90 rounded-full p-5 mb-4 shadow-sm group-hover:scale-110 transition-all duration-300 text-primary">
                      {categoryIcons[category.toLowerCase()] || <BookOpen className="h-8 w-8" />}
                    </div>
                    
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </h2>
                    
                    <CategoryChip 
                      category={category} 
                      className="mt-2 group-hover:scale-105 transition-transform"
                    />
                    
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium text-primary">Explore recipes →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
