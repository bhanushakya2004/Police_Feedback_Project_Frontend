
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { Calendar, Filter, PieChart } from 'lucide-react';

const mockData = [
  { name: 'Jan', positive: 40, neutral: 24, negative: 10 },
  { name: 'Feb', positive: 30, neutral: 20, negative: 15 },
  { name: 'Mar', positive: 45, neutral: 25, negative: 8 },
  { name: 'Apr', positive: 50, neutral: 30, negative: 5 },
];

const AdminDashboard = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto p-6 space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Filters */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">{t('filterByDate')}</h3>
          </div>
          <input
            type="date"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <PieChart className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">{t('filterBySentiment')}</h3>
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
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">{t('filterByLanguage')}</h3>
          </div>
          <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white">
            <option value="all">All</option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </motion.div>
      </div>

      {/* Charts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold mb-6">{t('statistics')}</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="positive" fill="#059669" />
              <Bar dataKey="neutral" fill="#64748b" />
              <Bar dataKey="negative" fill="#dc2626" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Recent Feedback List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold mb-6">{t('recentFeedback')}</h3>
        <div className="space-y-4">
          {/* We'll populate this with real data later */}
          <div className="p-4 border rounded-lg dark:border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Today, 2:30 PM</span>
              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                {t('positive')}
              </span>
            </div>
            <p className="text-gray-800 dark:text-gray-200">Sample feedback text...</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdminDashboard;
