
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Utensils } from 'lucide-react';
import { CategoryChip } from './CategoryChip';
import { Recipe } from '@/data/recipes';
import { cn } from '@/lib/utils';

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
  style?: React.CSSProperties;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, className, style }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className={cn("block", className)} style={style}>
      <div className="h-full group overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <div className="relative aspect-video overflow-hidden bg-muted/30">
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {recipe.categories && recipe.categories.length > 0 && (
            <div className="absolute top-3 left-3 z-10">
              <CategoryChip category={recipe.categories[0]} />
            </div>
          )}
        </div>
        
        <div className="p-5">
          <h3 className="font-medium text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">{recipe.name}</h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {recipe.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-2 border-t border-border/30">
            <div className="flex items-center space-x-1">
              <Clock size={14} className="text-primary/70" />
              <span>{recipe.cookTime} min</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Utensils size={14} className="text-primary/70" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
