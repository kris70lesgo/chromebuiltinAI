import React, { useState, useEffect } from 'react';
import { Book, RefreshCw, ArrowRight } from 'lucide-react';
import { FeedbackMessage } from './FeedbackMessage';
import { generateWordExample } from '../utils/api';

interface Word {
  word: string;
  definition: string;
  example: string;
}

const words: Word[] = [
  {
    word: "Jubilant",
    definition: "Feeling or expressing great happiness and triumph",
    example: ""
  },
  {
    word: "Serene",
    definition: "Calm, peaceful, and untroubled",
    example: ""
  },
  {
    word: "Resilient",
    definition: "Able to recover quickly from difficulties",
    example: ""
  }
];

export function WordExplorer() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [showDefinition, setShowDefinition] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [currentExample, setCurrentExample] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    loadNewExample();
  }, [currentWordIndex]);

  const loadNewExample = async () => {
    setIsLoading(true);
    try {
      const example = await generateWordExample(currentWord.word);
      setCurrentExample(example);
    } catch (error) {
      console.error('Error generating example:', error);
      setCurrentExample(currentWord.example);
    }
    setIsLoading(false);
  };

  const handleGuessSubmit = () => {
    const isCorrect = userGuess.toLowerCase().includes(currentWord.word.toLowerCase());
    setFeedback({
      isCorrect,
      message: isCorrect 
        ? "Great job! You understood the meaning perfectly!"
        : "Not quite right. Let's learn this word together."
    });
    setShowDefinition(true);
    if (isCorrect) setScore(score + 1);
  };

  const handleNextWord = () => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setUserGuess('');
      setShowDefinition(false);
      setFeedback(null);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Book className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-800">Word Explorer</h2>
        </div>
        <div className="text-lg font-semibold text-gray-700">
          Score: {score}
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-indigo-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Example:</h3>
          {isLoading ? (
            <div className="flex items-center justify-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>
          ) : (
            <p className="text-xl text-indigo-700">{currentExample}</p>
          )}
        </div>

        {!showDefinition ? (
          <div className="space-y-4">
            <div>
              <label htmlFor="guess" className="block text-sm font-medium text-gray-700 mb-2">
                What word do you think fits this example?
              </label>
              <input
                type="text"
                id="guess"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Type your guess here..."
              />
            </div>
            <button
              onClick={handleGuessSubmit}
              disabled={isLoading}
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              Check Answer
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {feedback && <FeedbackMessage {...feedback} />}
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-800 mb-2">Word: {currentWord.word}</h4>
              <p className="text-green-700">{currentWord.definition}</p>
            </div>
            {currentWordIndex < words.length - 1 && (
              <button
                onClick={handleNextWord}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <span>Next Word</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}