
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryChipProps {
  category: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  active?: boolean; // Added this prop
}

const categoryColors: Record<string, string> = {
  breakfast: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
  lunch: 'bg-green-100 text-green-800 hover:bg-green-200',
  dinner: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200',
  dessert: 'bg-pink-100 text-pink-800 hover:bg-pink-200',
  snack: 'bg-orange-100 text-orange-800 hover:bg-orange-200',
  drink: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
  vegan: 'bg-green-100 text-green-800 hover:bg-green-200',
  vegetarian: 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200',
  gluten_free: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
  healthy: 'bg-teal-100 text-teal-800 hover:bg-teal-200',
  quick: 'bg-amber-100 text-amber-800 hover:bg-amber-200',
};

export const CategoryChip: React.FC<CategoryChipProps> = ({ 
  category, 
  className, 
  onClick, 
  style,
  active = false // Default to false if not provided
}) => {
  const formattedCategory = category.toLowerCase().replace(/\s+/g, '_');
  
  const colorClass = categoryColors[formattedCategory] || 'bg-gray-100 text-gray-800 hover:bg-gray-200';
  
  const displayName = category
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return (
    <span 
      className={cn(
        'category-chip cursor-pointer transition-all px-3 py-1 rounded-full text-sm',
        colorClass,
        active ? 'ring-2 ring-primary ring-offset-1' : '',
        className
      )}
      onClick={onClick}
      style={style}
    >
      {displayName}
    </span>
  );
};
