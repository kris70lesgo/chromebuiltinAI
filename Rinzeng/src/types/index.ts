export interface LearningPrompt {
  id: string;
  content: string;
  type: 'reading' | 'writing' | 'interactive';
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface UserProgress {
  completedLessons: string[];
  currentLevel: number;
  rewards: string[];
}

export interface Theme {
  name: string;
  background: string;
  text: string;
  accent: string;
}