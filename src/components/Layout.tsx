
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
        <div className="hero-section mx-4 sm:mx-8 md:mx-12 mt-8 relative overflow-hidden">
          <div className="hero-content text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block p-4 bg-white/40 backdrop-blur-md rounded-3xl mb-6 shadow-lg animate-float">
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground leading-tight">
                Delicious Recipes At Your Fingertips
              </h1>
              <p className="text-lg text-foreground/80 mb-8 max-w-xl mx-auto">
                Discover, organize, and create amazing meals with your personal recipe collection
              </p>
              
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-accent-foreground/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      )}
      
      <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in relative z-10">
        {children}
      </main>
      
      <footer className="pt-20 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/30 -z-10"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-background" style={{ borderRadius: '0 0 50% 50% / 100px' }}></div>
        
        <div className="container mx-auto px-4 mt-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen size={24} className="text-primary" />
                <h3 className="text-2xl font-bold font-display">Recipe Collection</h3>
              </div>
              <p className="text-muted-foreground">
                Your personal space for culinary inspiration and organization
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Explore</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-foreground/70 hover:text-primary">Home</a></li>
                <li><a href="/categories" className="text-foreground/70 hover:text-primary">Categories</a></li>
                <li><a href="/search" className="text-foreground/70 hover:text-primary">Search Recipes</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm text-primary hover:bg-primary hover:text-white">
                  <Instagram size={18} />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm text-primary hover:bg-primary hover:text-white">
                  <Twitter size={18} />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm text-primary hover:bg-primary hover:text-white">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Recipe Collection. All rights reserved.</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 md:mt-0">
              <span>Made with</span>
              <Heart size={14} className="text-destructive fill-destructive" />
              <span>for home chefs</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
