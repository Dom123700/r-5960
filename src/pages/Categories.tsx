
import React from 'react';
import { Layout } from '@/components/Layout';
import { CategoryChip } from '@/components/CategoryChip';
import { categories } from '@/data/recipes';
import { Link } from 'react-router-dom';
import { BookOpen, Tag } from 'lucide-react';

const Categories = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-10 animate-fade-in">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-accent rounded-2xl mb-4">
            <Tag className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Recipe Categories</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our recipe collection by category to find the perfect dish for any occasion
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category} 
              to={`/search?category=${encodeURIComponent(category)}`}
              className="animate-scale-in" 
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center transition-all hover:shadow-md hover:bg-accent/50 hover:border-primary/20 border border-border/50 flex flex-col items-center justify-center h-full">
                <div className="bg-accent/80 rounded-full p-4 mb-4 group-hover:bg-primary/10 transition-colors">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CategoryChip 
                  category={category} 
                  className="mb-3 mx-auto group-hover:scale-110 transition-transform" 
                  style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                />
                <h2 className="text-xl font-medium mt-2 group-hover:text-primary transition-colors">{category}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
