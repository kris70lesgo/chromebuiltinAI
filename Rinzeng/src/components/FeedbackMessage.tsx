import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface FeedbackMessageProps {
  isCorrect: boolean;
  message: string;
}

export function FeedbackMessage({ isCorrect, message }: FeedbackMessageProps) {
  return (
    <div className={`p-4 rounded-lg mb-4 flex items-start space-x-3 ${
      isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
    }`}>
      {isCorrect ? (
        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
      ) : (
        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
      )}
      <div>
        <p className="font-medium">
          {isCorrect ? 'Great job!' : 'Not quite right'}
        </p>
        <p className="text-sm mt-1">{message}</p>
      </div>
    </div>
  );
}