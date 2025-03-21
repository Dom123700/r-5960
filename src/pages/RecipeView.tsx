
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { RecipeDetail } from '@/components/RecipeDetail';
import { getRecipeById, Recipe } from '@/data/recipes';

const RecipeView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Simulate data loading but make it faster
    setIsLoading(true);
    setTimeout(() => {
      if (id) {
        const foundRecipe = getRecipeById(id);
        setRecipe(foundRecipe);
      }
      setIsLoading(false);
    }, 150); // Reduced from 300ms to 150ms for faster loading
  }, [id]);
  
  // Redirect if recipe not found
  useEffect(() => {
    if (!isLoading && !recipe) {
      navigate('/');
    }
  }, [recipe, isLoading, navigate]);
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-[60vh]">
            <div className="animate-pulse flex flex-col space-y-4 w-full">
              <div className="h-12 bg-muted rounded-md w-3/4 mx-auto"></div>
              <div className="h-80 bg-muted rounded-xl w-full"></div>
              <div className="h-8 bg-muted rounded-md w-1/2"></div>
              <div className="h-8 bg-muted rounded-md w-full"></div>
              <div className="h-32 bg-muted rounded-md w-full"></div>
            </div>
          </div>
        ) : recipe ? (
          <RecipeDetail recipe={recipe} />
        ) : null}
      </div>
    </Layout>
  );
};

export default RecipeView;
