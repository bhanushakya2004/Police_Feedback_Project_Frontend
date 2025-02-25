
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { Calendar, Filter, PieChart, Sun, Moon, Layout } from 'lucide-react';

const mockData = [
  { name: 'Jan', positive: 40, neutral: 24, negative: 10 },
  { name: 'Feb', positive: 30, neutral: 20, negative: 15 },
  { name: 'Mar', positive: 45, neutral: 25, negative: 8 },
  { name: 'Apr', positive: 50, neutral: 30, negative: 5 },
];

const AdminDashboard = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <nav className="bg-white dark:bg-gray-800 shadow-sm backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
              <Layout className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center">
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
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('filterByDate')}</h3>
            </div>
            <input
              type="date"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <PieChart className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('filterBySentiment')}</h3>
            </div>
            <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white">
              <option value="all">All</option>
              <option value="positive">{t('positive')}</option>
              <option value="neutral">{t('neutral')}</option>
              <option value="negative">{t('negative')}</option>
            </select>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('filterByLanguage')}</h3>
            </div>
            <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white">
              <option value="all">All</option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{t('statistics')}</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: theme === 'dark' ? '#1F2937' : '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="positive" fill="#059669" />
                <Bar dataKey="neutral" fill="#64748b" />
                <Bar dataKey="negative" fill="#dc2626" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{t('recentFeedback')}</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Today, 2:30 PM</span>
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400">
                  {t('positive')}
                </span>
              </div>
              <p className="text-gray-800 dark:text-gray-200">Sample feedback text...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
