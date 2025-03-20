
import React from 'react';
import { Navbar } from './Navbar';
import { useLocation } from 'react-router-dom';
import { Heart, Utensils, BookOpen, Instagram, Twitter, Facebook } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {location.pathname === '/' && (
        <div className="hero-section mx-4 sm:mx-8 md:mx-12 mt-8">
          <div className="hero-content text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Delicious Recipes At Your Fingertips</h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
                Discover, organize, and create amazing meals with your personal recipe collection
              </p>
            </div>
          </div>
          <div className="hero-pattern"></div>
        </div>
      )}
      
      <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in">
        {children}
      </main>
      
      <div className="wave-divider"></div>
      
      <footer className="py-12 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen size={22} className="text-primary" />
                <h3 className="text-xl font-bold">Recipe Collection</h3>
              </div>
              <p className="text-muted-foreground">
                Your personal space for culinary inspiration and organization
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Explore</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
                <li><a href="/categories" className="text-muted-foreground hover:text-primary">Categories</a></li>
                <li><a href="/search" className="text-muted-foreground hover:text-primary">Search Recipes</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-full bg-white/80 text-primary hover:bg-primary hover:text-white">
                  <Instagram size={18} />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/80 text-primary hover:bg-primary hover:text-white">
                  <Twitter size={18} />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/80 text-primary hover:bg-primary hover:text-white">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Recipe Collection. All rights reserved.</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 md:mt-0">
              <span>Made with</span>
              <Heart size={14} className="text-primary fill-primary" />
              <span>for home chefs</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
