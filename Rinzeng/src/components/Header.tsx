import React from 'react';
import { BookOpen, Settings, User } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <BookOpen className="w-8 h-8" />
          <h1 className="text-2xl font-bold">LearnBuddy</h1>
        </Link>
        <nav className="flex items-center space-x-4">
          <button className="p-2 hover:bg-indigo-700 rounded-full transition-colors">
            <Settings className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-indigo-700 rounded-full transition-colors">
            <User className="w-6 h-6" />
          </button>
        </nav>
      </div>
    </header>
  );
}