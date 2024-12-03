import React from 'react';
import { Trophy, Star, Target } from 'lucide-react';

interface ProgressTrackerProps {
  level: number;
  completedLessons: number;
  totalLessons: number;
}

export function ProgressTracker({ level, completedLessons, totalLessons }: ProgressTrackerProps) {
  const progress = (completedLessons / totalLessons) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Your Progress</h2>
        <div className="flex items-center space-x-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <span className="text-lg font-bold text-gray-700">Level {level}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-medium text-indigo-600">{progress.toFixed(0)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-500" />
          <span className="text-sm text-gray-600">{completedLessons} Completed</span>
        </div>
        <div className="flex items-center space-x-2">
          <Target className="w-5 h-5 text-indigo-500" />
          <span className="text-sm text-gray-600">{totalLessons - completedLessons} Remaining</span>
        </div>
      </div>
    </div>
  );
}