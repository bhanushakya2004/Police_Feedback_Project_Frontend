
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Globe, Sun, Moon } from 'lucide-react';
import FeedbackForm from '../components/FeedbackForm';

const Index = () => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <nav className="bg-white dark:bg-gray-800 shadow-sm backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
              >
                Police Feedback Portal
              </motion.h1>
            </div>
            
            <div className="flex items-center gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1">
                  <Globe className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  <select
                    value={currentLanguage}
                    onChange={(e) => changeLanguage(e.target.value)}
                    className="bg-transparent text-gray-600 dark:text-gray-300 focus:ring-0 border-0 py-1 pl-1 pr-8"
                  >
                    <option value="en">English</option>
                    <option value="hi">हिंदी</option>
                  </select>
                </div>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              {t('feedbackTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your feedback helps us improve our services and serve the community better.
            </p>
          </div>
          <FeedbackForm />
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
