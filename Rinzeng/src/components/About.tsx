import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { BackgroundLines } from './BackgroundLines';

export function About() {
  return (
    <BackgroundLines className="min-h-[calc(100vh-6rem)]">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Us</h1>
          
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              At 人性 (Rénxìng), we believe that every individual deserves the opportunity to learn and grow in an environment tailored to their unique needs. Our application is designed to empower autistic individuals by offering interactive, personalized, and inclusive learning experiences.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Autistic people are not "different"—they are unique, just like everyone else, with incredible talents, perspectives, and potential. Our goal is to break down barriers and create tools that celebrate neurodiversity, ensuring that learning is both accessible and enjoyable for all.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
              By combining cutting-edge technology with compassion, we aim to foster understanding, inclusion, and growth for everyone in our community.
            </p>
          </div>

          <div className="flex flex-col items-center mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 mb-4">
              Created with <span className="animate-pulse">❤️</span> by Agastya
            </p>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/kris70lesgo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/krish725_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
}