
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MessageSquare, Send, User, Phone, MapPin, Building, PenLine } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const FeedbackForm = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    policeStationNumber: '',
    feedbackType: 'general',
    sentiment: 'neutral',
    feedback: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we'll later integrate with the backend
    console.log({ ...formData, language: currentLanguage });
    
    toast({
      title: t('successMessage'),
      description: new Date().toLocaleDateString(),
    });
    
    setFormData({
      name: '',
      phoneNumber: '',
      address: '',
      policeStationNumber: '',
      feedbackType: 'general',
      sentiment: 'neutral',
      feedback: ''
    });
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
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <User className="w-4 h-4 inline-block mr-2" />
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Phone className="w-4 h-4 inline-block mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
        </div>

        {/* Address and Police Station */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <MapPin className="w-4 h-4 inline-block mr-2" />
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Building className="w-4 h-4 inline-block mr-2" />
            Police Station Number
          </label>
          <input
            type="text"
            name="policeStationNumber"
            value={formData.policeStationNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Feedback Type and Sentiment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <PenLine className="w-4 h-4 inline-block mr-2" />
              Feedback About
            </label>
            <select
              name="feedbackType"
              value={formData.feedbackType}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="general">General Service</option>
              <option value="complaint">Complaint Handling</option>
              <option value="emergency">Emergency Response</option>
              <option value="staff">Staff Behavior</option>
              <option value="facilities">Facilities</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('sentiment')}
            </label>
            <select
              name="sentiment"
              value={formData.sentiment}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="positive">{t('positive')}</option>
              <option value="neutral">{t('neutral')}</option>
              <option value="negative">{t('negative')}</option>
            </select>
          </div>
        </div>

        {/* Feedback Text Area */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Feedback
          </label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder={t('feedbackPlaceholder')}
            className="w-full h-32 p-4 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none dark:bg-gray-700 dark:text-white"
            required
          />
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
