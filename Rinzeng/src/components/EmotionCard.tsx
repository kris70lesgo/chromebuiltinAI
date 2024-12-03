import React from 'react';
import { Heart } from 'lucide-react';

interface EmotionCardProps {
  emotion: string;
  description: string;
  image: string;
  onSelect: () => void;
  isSelected: boolean;
  disabled?: boolean;
}

export function EmotionCard({ 
  emotion, 
  description, 
  image, 
  onSelect, 
  isSelected,
  disabled = false 
}: EmotionCardProps) {
  return (
    <button
      onClick={onSelect}
      disabled={disabled}
      className={`w-full p-4 rounded-lg transition-all duration-300 ${
        isSelected 
          ? 'bg-indigo-100 border-2 border-indigo-500' 
          : 'bg-white hover:bg-gray-50 border-2 border-transparent'
      } ${disabled && !isSelected ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={emotion}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1 text-left">
          <h3 className="text-lg font-semibold text-gray-800">{emotion}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        {isSelected && (
          <Heart className="w-6 h-6 text-indigo-500 fill-current" />
        )}
      </div>
    </button>
  );
}