
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation: {
      feedbackTitle: "Share Your Feedback",
      feedbackPlaceholder: "Please share your experience with us...",
      sentiment: "How would you rate your experience?",
      positive: "Positive",
      neutral: "Neutral",
      negative: "Negative",
      submit: "Submit Feedback",
      successMessage: "Thank you for your feedback!",
      selectLanguage: "Select Language",
      dashboard: "Dashboard",
      filterByDate: "Filter by Date",
      filterBySentiment: "Filter by Sentiment",
      filterByLanguage: "Filter by Language",
      statistics: "Statistics",
      recentFeedback: "Recent Feedback",
    }
  },
  hi: {
    translation: {
      feedbackTitle: "अपनी प्रतिक्रिया साझा करें",
      feedbackPlaceholder: "कृपया अपना अनुभव हमारे साथ साझा करें...",
      sentiment: "आप अपने अनुभव का मूल्यांकन कैसे करेंगे?",
      positive: "सकारात्मक",
      neutral: "तटस्थ",
      negative: "नकारात्मक",
      submit: "प्रतिक्रिया दर्ज करें",
      successMessage: "आपकी प्रतिक्रिया के लिए धन्यवाद!",
      selectLanguage: "भाषा चुनें",
      dashboard: "डैशबोर्ड",
      filterByDate: "तिथि के अनुसार फ़िल्टर करें",
      filterBySentiment: "भावना के अनुसार फ़िल्टर करें",
      filterByLanguage: "भाषा के अनुसार फ़िल्टर करें",
      statistics: "आंकड़े",
      recentFeedback: "हाल की प्रतिक्रिया",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
