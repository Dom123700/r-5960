
import React from 'react';
import { Navbar } from './Navbar';
import { useLocation } from 'react-router-dom';

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
      <footer className="py-6 border-t border-border/40">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Personal Recipe Collection © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};
