
import React from 'react';
import { Navbar } from './Navbar';
import { useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in">
        {children}
      </main>
      <footer className="py-8 border-t border-border/30 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-medium">Personal Recipe Collection</h3>
              <p className="text-sm text-muted-foreground">Store, organize, and discover your favorite recipes</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart size={16} className="text-pink-500 fill-pink-500" />
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
