import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  mode: 'login' | 'signup';
  onClose: () => void;
}

export function AuthModal({ mode, onClose }: AuthModalProps) {
  const { login, signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1615627121117-e3278bc8b1db?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          className="w-full max-w-md p-8 rounded-2xl relative backdrop-blur-md bg-white/10 border border-white/20"
          style={{ backdropFilter: 'blur(16px)' }}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            {mode === 'login' ? 'Welcome Back!' : 'Create Account'}
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-white text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === 'signup' && (
              <div className="input-field">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full h-12 bg-transparent border-b-2 border-white/30 text-white outline-none focus:border-white transition-colors px-1"
                />
                <label className={`absolute left-1 transition-all ${name ? 'text-xs -top-4' : 'top-3'} text-white/70`}>
                  Enter your name
                </label>
              </div>
            )}

            <div className="input-field relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 bg-transparent border-b-2 border-white/30 text-white outline-none focus:border-white transition-colors px-1"
              />
              <label className={`absolute left-1 transition-all ${email ? 'text-xs -top-4' : 'top-3'} text-white/70`}>
                Enter your email
              </label>
            </div>

            <div className="input-field relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-12 bg-transparent border-b-2 border-white/30 text-white outline-none focus:border-white transition-colors px-1"
              />
              <label className={`absolute left-1 transition-all ${password ? 'text-xs -top-4' : 'top-3'} text-white/70`}>
                Enter your password
              </label>
            </div>

            {mode === 'login' && (
              <div className="flex items-center justify-between text-sm text-white/70">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-white/30 bg-transparent"
                  />
                  <span>Remember me</span>
                </label>
                <button type="button" className="hover:text-white transition-colors">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-opacity-90 transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                mode === 'login' ? 'Login' : 'Sign Up'
              )}
            </button>

            <p className="text-sm text-center text-white/70">
              {mode === 'login' ? (
                <>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => onClose()}
                    className="text-white hover:underline font-medium"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => onClose()}
                    className="text-white hover:underline font-medium"
                  >
                    Login
                  </button>
                </>
              )}
            </p>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}