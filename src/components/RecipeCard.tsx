
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Utensils } from 'lucide-react';
import { CategoryChip } from './CategoryChip';
import { Recipe } from '@/data/recipes';
import { cn } from '@/lib/utils';

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, className }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className={cn("block", className)}>
      <div className="h-full group overflow-hidden rounded-xl border border-border/50 bg-card card-hover">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy" 
          />
          {recipe.categories && recipe.categories.length > 0 && (
            <div className="absolute top-2 left-2">
              <CategoryChip category={recipe.categories[0]} />
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-lg mb-2 line-clamp-1">{recipe.name}</h3>
          
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {recipe.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{recipe.cookTime} min</span>
            </div>
            
            <div className="flex items-center">
              <Utensils size={14} className="mr-1" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
