
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
        <div className="text-center mb-16 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/40 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          
          <div className="inline-flex items-center justify-center p-4 bg-white/80 backdrop-blur-md rounded-2xl mb-6 shadow-md">
            <Tag className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">
            Recipe Categories
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our recipe collection by category to find the perfect dish for any occasion
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={category} 
              to={`/search?category=${encodeURIComponent(category)}`}
              className="animate-scale-in" 
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center transition-all hover:shadow-lg hover:bg-gradient-to-br hover:from-accent/40 hover:to-secondary/60 border border-border/50 flex flex-col items-center justify-center h-full card-hover">
                <div className="bg-white rounded-full p-5 mb-5 group-hover:bg-white/90 transition-colors shadow-sm">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CategoryChip 
                  category={category} 
                  className="mb-4 mx-auto group-hover:scale-110 transition-transform" 
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
