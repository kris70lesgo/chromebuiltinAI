import React, { useState } from 'react';
import { PenTool, Sparkles, Send } from 'lucide-react';
import { analyzeWriting } from '../utils/api';

const writingPrompts = [
  "Imagine you're exploring a magical garden. What do you see?",
  "Write about your perfect day at the beach",
  "Tell a story about a friendly robot who helps others"
];

export function CreativeWriting() {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [userStory, setUserStory] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitStory = async () => {
    setIsSubmitting(true);
    try {
      const feedbackText = await analyzeWriting(userStory);
      setFeedback(feedbackText);
    } catch (error) {
      console.error('Error analyzing writing:', error);
      setFeedback("Great effort! Keep writing and expressing your ideas!");
    }
    setIsSubmitting(false);
  };

  const handleNextPrompt = () => {
    if (currentPrompt < writingPrompts.length - 1) {
      setCurrentPrompt(currentPrompt + 1);
      setUserStory('');
      setFeedback('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <PenTool className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-800">Creative Writing</h2>
      </div>

      <div className="space-y-6">
        <div className="bg-indigo-50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-medium text-gray-800">Writing Prompt:</h3>
          </div>
          <p className="text-xl text-indigo-700">{writingPrompts[currentPrompt]}</p>
        </div>

        <div className="space-y-4">
          <textarea
            value={userStory}
            onChange={(e) => setUserStory(e.target.value)}
            className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Start writing your story here..."
          />

          <div className="flex space-x-4">
            <button
              onClick={handleSubmitStory}
              disabled={isSubmitting || !userStory.trim()}
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Analyzing your story...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Get Feedback</span>
                </>
              )}
            </button>

            {currentPrompt < writingPrompts.length - 1 && (
              <button
                onClick={handleNextPrompt}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Next Prompt
              </button>
            )}
          </div>
        </div>

        {feedback && (
          <div className="bg-green-50 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-2">Feedback:</h4>
            <p className="text-green-700 whitespace-pre-line">{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
}