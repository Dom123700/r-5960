
import React from 'react';
import { Navbar } from './Navbar';
import { useLocation } from 'react-router-dom';
import { Heart, Utensils, BookOpen, Instagram, Twitter, Facebook } from 'lucide-react';
import { SearchBar } from './SearchBar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {location.pathname === '/' && (
        <div className="relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-20 left-1/3 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-accent-foreground/10 blur-3xl"></div>
          
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Left side - Content */}
              <div className="flex-1 space-y-8 text-left">
                <div className="inline-block px-6 py-3 bg-secondary/60 backdrop-blur-sm rounded-full text-secondary-foreground shadow-sm animate-slide-in" style={{ animationDelay: '200ms' }}>
                  <span className="flex items-center gap-2">
                    <Utensils className="h-4 w-4" />
                    <span className="font-medium">Discover Delicious Recipes</span>
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-in" style={{ animationDelay: '400ms' }}>
                  Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-foreground">Culinary</span> Adventure Begins Here
                </h1>
                
                <p className="text-lg md:text-xl text-foreground/70 max-w-xl animate-slide-in" style={{ animationDelay: '600ms' }}>
                  Find inspiration for your next meal with our curated collection of recipes from around the world.
                </p>
                
                <div className="pt-6 animate-slide-in" style={{ animationDelay: '800ms' }}>
                  <SearchBar 
                    onSearch={(query) => {
                      if (query) {
                        window.location.href = `/search?q=${encodeURIComponent(query)}`;
                      }
                    }}
                    placeholder="Search for a recipe or ingredient..."
                    className="max-w-md"
                  />
                </div>
                
                <div className="flex items-center gap-4 text-sm text-foreground/60 animate-slide-in" style={{ animationDelay: '1000ms' }}>
                  <span className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent/60 flex items-center justify-center">1</div>
                    <span>Search</span>
                  </span>
                  <span className="w-8 h-[1px] bg-foreground/20"></span>
                  <span className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent/60 flex items-center justify-center">2</div>
                    <span>Cook</span>
                  </span>
                  <span className="w-8 h-[1px] bg-foreground/20"></span>
                  <span className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent/60 flex items-center justify-center">3</div>
                    <span>Enjoy!</span>
                  </span>
                </div>
              </div>
              
              {/* Right side - Images */}
              <div className="flex-1 relative h-[500px] animate-scale-in" style={{ animationDelay: '500ms' }}>
                <div className="absolute top-0 right-0 w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 z-10">
                  <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3" 
                       alt="Delicious meal" 
                       className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-xl transform -rotate-6 z-0">
                  <img src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3" 
                       alt="Cooking ingredients" 
                       className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Wave divider */}
          <div className="relative h-24 mt-12">
            <svg className="absolute bottom-0 left-0 w-full" 
                 xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 1440 320">
              <path 
                fill="hsl(var(--secondary))" 
                fillOpacity="0.3" 
                d="M0,96L48,106.7C96,117,192,139,288,122.7C384,107,480,53,576,53.3C672,53,768,107,864,138.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
        </div>
      )}
      
      <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in relative z-10">
        {children}
      </main>
      
      <footer className="pt-20 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-accent/30 -z-10"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-background" style={{ borderRadius: '0 0 50% 50% / 100px' }}></div>
        
        {/* Decorative blobs */}
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl -z-5"></div>
        <div className="absolute bottom-40 -left-20 w-80 h-80 rounded-full bg-secondary/30 blur-3xl -z-5"></div>
        
        <div className="container mx-auto px-4 mt-12 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-white/80 backdrop-blur-md rounded-2xl mb-6 shadow-md">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Mama's Recipes
            </h2>
            <p className="text-muted-foreground">
              Discover delicious, home-cooked recipes passed down through generations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-md">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen size={24} className="text-primary" />
                <h3 className="text-2xl font-bold font-display">Mama's Recipes</h3>
              </div>
              <p className="text-muted-foreground">
                Your personal space for culinary inspiration and family traditions
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
                <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm text-primary hover:bg-primary hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm text-primary hover:bg-primary hover:text-white transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm text-primary hover:bg-primary hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Mama's Recipes. All rights reserved.</p>
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
