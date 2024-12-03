import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { BookOpen, Settings, LogIn, Github, Twitter } from 'lucide-react';
import { AuthModal } from './AuthModal';
import { ThemeToggle } from './ThemeToggle';

export function Navbar({ className, onNavigate }: { className?: string; onNavigate: (page: string) => void }) {
  const [active, setActive] = useState<string | null>(null);
  const [showAuthModal, setShowAuthModal] = useState<'login' | 'signup' | null>(null);

  const handleNavigation = (path: string) => {
    onNavigate(path);
    setActive(null);
  };

  return (
    <div className={cn("fixed top-4 inset-x-0 max-w-4xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => handleNavigation('home')}
            className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200 hover:opacity-80 transition-opacity"
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-lg font-bold">人性</span>
          </button>
          
          <MenuItem setActive={setActive} active={active} item="Learn">
            <div className="flex flex-col space-y-4 text-sm">
              <button onClick={() => handleNavigation('emotion-explorer')} className="text-left hover:text-blue-600">
                Emotion Explorer
              </button>
              <button onClick={() => handleNavigation('word-explorer')} className="text-left hover:text-blue-600">
                Word Explorer
              </button>
              <button onClick={() => handleNavigation('creative-writing')} className="text-left hover:text-blue-600">
                Creative Writing
              </button>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Activities">
            <div className="flex flex-col space-y-4 text-sm">
              <button onClick={() => handleNavigation('emotion-games')} className="text-left hover:text-blue-600">
                Emotion Games
              </button>
              <button onClick={() => handleNavigation('word-adventures')} className="text-left hover:text-blue-600">
                Word Adventures
              </button>
              <button onClick={() => handleNavigation('story-time')} className="text-left hover:text-blue-600">
                Story Time
              </button>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <button onClick={() => handleNavigation('about')} className="text-left hover:text-blue-600">
                About Us
              </button>
            </div>
          </MenuItem>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button 
            onClick={() => setShowAuthModal('login')}
            className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <LogIn className="w-4 h-4" />
            Login
          </button>
          <button 
            onClick={() => setShowAuthModal('signup')}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Sign Up
          </button>
        </div>
      </Menu>

      {showAuthModal && (
        <AuthModal mode={showAuthModal} onClose={() => setShowAuthModal(null)} />
      )}
    </div>
  );
}