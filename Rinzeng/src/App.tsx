import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LearningCard } from './components/LearningCard';
import { ProgressTracker } from './components/ProgressTracker';
import { EmotionLearning } from './components/EmotionLearning';
import { WordExplorer } from './components/WordExplorer';
import { CreativeWriting } from './components/CreativeWriting';
import { About } from './components/About';
import { Sparkles } from 'lucide-react';
import { BackgroundLines } from './components/BackgroundLines';

export default function App() {
  const [userProgress] = useState({
    level: 2,
    completedLessons: 5,
    totalLessons: 12
  });

  const [currentPage, setCurrentPage] = useState<string>('home');

  const learningModules = [
    {
      title: "Emotion Explorer",
      description: "Learn to recognize and understand different emotions",
      image: "https://images.unsplash.com/photo-1544507888-56d73eb6046e?auto=format&fit=crop&q=80",
      difficulty: "easy" as const
    },
    {
      title: "Word Explorer",
      description: "Learn new words through interactive games",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      difficulty: "medium" as const
    },
    {
      title: "Creative Writing",
      description: "Express yourself through guided writing activities",
      image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80",
      difficulty: "hard" as const
    }
  ];

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'emotion-explorer':
        return <EmotionLearning />;
      case 'word-explorer':
        return <WordExplorer />;
      case 'creative-writing':
        return <CreativeWriting />;
      default:
        return (
          <BackgroundLines>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <Sparkles className="w-6 h-6 text-indigo-400 dark:text-indigo-300" />
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Today's Learning Adventures</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {learningModules.map((module, index) => (
                    <LearningCard
                      key={index}
                      {...module}
                      onClick={() => setCurrentPage(module.title.toLowerCase().replace(' ', '-'))}
                    />
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <ProgressTracker {...userProgress} />
              </div>
            </div>
          </BackgroundLines>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar onNavigate={setCurrentPage} />
      <main className="pt-24">
        {renderContent()}
      </main>
    </div>
  );
}