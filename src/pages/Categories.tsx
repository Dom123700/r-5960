
import React from 'react';
import { Layout } from '@/components/Layout';
import { CategoryChip } from '@/components/CategoryChip';
import { categories } from '@/data/recipes';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-6 animate-fade-in">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Recipe Categories</h1>
          <p className="text-muted-foreground">
            Browse our recipe collection by category to find the perfect dish
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <Link 
              key={category} 
              to={`/search?category=${encodeURIComponent(category)}`}
              className="animate-scale-in" 
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="border border-border/50 rounded-xl p-6 text-center transition-all hover:border-primary/20 hover:shadow-md hover:bg-accent/50">
                <CategoryChip category={category} className="mb-3 mx-auto" />
                <h2 className="text-lg font-medium">{category}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
