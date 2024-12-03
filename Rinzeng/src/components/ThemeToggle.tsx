import React, { useEffect } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../lib/theme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  return (
    <div className="relative inline-block text-left">
      <div className="flex space-x-2">
        <button
          onClick={() => setTheme('light')}
          className={`p-2 rounded-lg transition-colors ${
            theme === 'light' 
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200' 
              : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
          }`}
        >
          <Sun className="w-5 h-5" />
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`p-2 rounded-lg transition-colors ${
            theme === 'dark'
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200'
              : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
          }`}
        >
          <Moon className="w-5 h-5" />
        </button>
        <button
          onClick={() => setTheme('system')}
          className={`p-2 rounded-lg transition-colors ${
            theme === 'system'
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200'
              : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
          }`}
        >
          <Laptop className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}