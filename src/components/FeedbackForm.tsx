
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const FeedbackForm = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const { toast } = useToast();
  const [feedback, setFeedback] = useState('');
  const [sentiment, setSentiment] = useState('neutral');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we'll later integrate with the backend
    console.log({ feedback, sentiment, language: currentLanguage });
    
    toast({
      title: t('successMessage'),
      description: new Date().toLocaleDateString(),
    });
    
    setFeedback('');
    setSentiment('neutral');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {t('feedbackTitle')}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder={t('feedbackPlaceholder')}
            className="w-full h-32 p-4 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('sentiment')}
          </label>
          <select
            value={sentiment}
            onChange={(e) => setSentiment(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="positive">{t('positive')}</option>
            <option value="neutral">{t('neutral')}</option>
            <option value="negative">{t('negative')}</option>
          </select>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
        >
          <Send className="w-5 h-5" />
          {t('submit')}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default FeedbackForm;
