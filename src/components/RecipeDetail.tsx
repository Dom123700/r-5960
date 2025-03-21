
import React from 'react';
import { Clock, Users, ChefHat, ArrowLeft, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CategoryChip } from './CategoryChip';
import { Recipe } from '@/data/recipes';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface RecipeDetailProps {
  recipe: Recipe;
  className?: string;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, className }) => {
  return (
    <div className={cn("recipe-detail animate-slide-in", className)}>
      <div className="mb-6">
        <Button asChild variant="ghost" size="sm" className="gap-1 mb-4">
          <Link to="/">
            <ArrowLeft size={16} />
            Back to recipes
          </Link>
        </Button>
        
        <h1 className="text-3xl font-semibold mb-3">{recipe.name}</h1>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.categories?.map((category, index) => (
            <CategoryChip key={index} category={category} />
          ))}
        </div>
        
        <p className="text-muted-foreground">{recipe.description}</p>
      </div>
      
      <div className="rounded-xl overflow-hidden mb-8">
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="w-full h-auto object-cover max-h-[500px]"
          loading="eager" 
          decoding="async"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="flex items-center p-4 rounded-lg border border-border/50 bg-card">
          <Clock size={20} className="text-primary mr-3" />
          <div>
            <p className="text-sm text-muted-foreground">Cook Time</p>
            <p className="font-medium">{recipe.cookTime} minutes</p>
          </div>
        </div>
        
        <div className="flex items-center p-4 rounded-lg border border-border/50 bg-card">
          <Users size={20} className="text-primary mr-3" />
          <div>
            <p className="text-sm text-muted-foreground">Servings</p>
            <p className="font-medium">{recipe.servings} people</p>
          </div>
        </div>
        
        <div className="flex items-center p-4 rounded-lg border border-border/50 bg-card">
          <ChefHat size={20} className="text-primary mr-3" />
          <div>
            <p className="text-sm text-muted-foreground">Difficulty</p>
            <p className="font-medium">{recipe.difficulty}</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-xl font-medium mb-4 flex items-center">
            <Bookmark size={18} className="text-primary mr-2" />
            Ingredients
          </h2>
          <div className="space-y-3">
            {recipe.ingredients?.map((ingredient, index) => (
              <div 
                key={index} 
                className="p-3 rounded-lg border border-border/50 bg-white shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start">
                  <span className="text-primary mr-2 mt-0.5">•</span>
                  <span>{ingredient}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h2 className="text-xl font-medium mb-4">Instructions</h2>
          <ol className="space-y-4">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm mr-3 mt-0.5">
                  {index + 1}
                </span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
