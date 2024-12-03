import React, { useState } from 'react';
import { EmotionCard } from './EmotionCard';
import { Star, ArrowRight, RefreshCcw, CheckCircle2, XCircle } from 'lucide-react';
import { FeedbackMessage } from './FeedbackMessage';

const emotions = [
  {
    emotion: "Happy",
    description: "A warm, joyful feeling when good things happen",
    image: "https://images.unsplash.com/photo-1545315003-c5ad6226c272?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    emotion: "Sad",
    description: "Feeling down when something upsetting happens",
    image: "https://images.unsplash.com/photo-1541199249251-f713e6145474?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    emotion: "Excited",
    description: "Feeling full of energy and enthusiasm",
    image: "https://images.unsplash.com/photo-1545315003-c5ad6226c272?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

const scenarios = [
  {
    text: "Your friend shares their favorite toy with you",
    correctEmotion: "Happy",
    feedback: "That's right! When someone shares with us, it makes us feel happy!"
  },
  {
    text: "You drop your ice cream cone on the ground",
    correctEmotion: "Sad",
    feedback: "Yes! Losing something we like can make us feel sad."
  },
  {
    text: "It's your birthday party tomorrow",
    correctEmotion: "Excited",
    feedback: "Perfect! Special events like birthdays make us feel excited!"
  }
];

export function EmotionLearning() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion);
    const correct = emotion === scenarios[currentScenario].correctEmotion;
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextScenario = () => {
    setShowFeedback(false);
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedEmotion(null);
    } else {
      // Show completion message
      setShowFeedback(true);
      setIsCorrect(true);
    }
  };

  const handleStartOver = () => {
    setCurrentScenario(0);
    setScore(0);
    setSelectedEmotion(null);
    setShowFeedback(false);
  };

  const isLastScenario = currentScenario === scenarios.length - 1;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Understanding Emotions</h2>
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-500" />
          <span className="text-lg font-semibold text-gray-700">Score: {score}</span>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-indigo-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Scenario:</h3>
          <p className="text-xl text-indigo-700">{scenarios[currentScenario].text}</p>
        </div>

        {showFeedback && (
          <FeedbackMessage
            isCorrect={isCorrect}
            message={scenarios[currentScenario].feedback}
          />
        )}

        <p className="text-gray-600 mb-4">How would this make you feel?</p>

        <div className="space-y-4">
          {emotions.map((item) => (
            <EmotionCard
              key={item.emotion}
              {...item}
              isSelected={selectedEmotion === item.emotion}
              onSelect={() => handleEmotionSelect(item.emotion)}
              disabled={showFeedback}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={handleStartOver}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          <RefreshCcw className="w-5 h-5" />
          <span>Start Over</span>
        </button>
        
        {showFeedback && !isLastScenario && (
          <button
            onClick={handleNextScenario}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            <span>Next Scenario</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}