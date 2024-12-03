import React from 'react';
import { Star } from 'lucide-react';

interface LearningCardProps {
  title: string;
  description: string;
  image: string;
  difficulty: 'easy' | 'medium' | 'hard';
  onClick: () => void;
}

export function LearningCard({ title, description, image, difficulty, onClick }: LearningCardProps) {
  const difficultyColors = {
    easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  return (
    <div 
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex items-center text-yellow-500">
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
        </div>
      </div>
    </div>
  );
}