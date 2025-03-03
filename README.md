# 🚔 AI-Enabled Police Feedback System

## 📌 Overview
The **AI-Enabled Police Feedback System** is a **full-stack web application** designed to collect and analyze citizen feedback. It uses **Google NLP & Translation APIs** to process feedback in multiple languages and provides **real-time sentiment analysis**. The system features a **secure admin dashboard** for police officers to monitor public sentiment and enhance service evaluation.

## 🛠️ Tech Stack
### Frontend:
- **React.js** (for UI)
- **Tailwind CSS** (for styling)
- **Recharts** (for data visualization)

### Backend:
- **Node.js + Express.js** (for API)
- **MongoDB + Mongoose** (for database)
- **Google NLP API** (for sentiment analysis)
- **Google Translation API** (for multilingual support)

## 🎯 Features
### 🚨 Citizen Feedback Portal
- Submit feedback in **any language** (automatically translated to English)
- Real-time **sentiment analysis** (Positive, Neutral, Negative)
- Secure submission with **Aadhar Number validation**

### 🏢 Police Admin Dashboard
- **View and manage feedback** entries
- **Sentiment-based filtering** for better insights
- **Data visualization** using graphs and charts

### 🔒 Authentication & Security
- Admin **login system** (with username & password)
- **Role-based access control** (only authorized police officers)
- **Secure API endpoints** using JWT authentication

## 🚀 Installation & Setup
### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/bhanushakya2004/Police_Feedback_Project.git
   cd Police_Feedback_Project/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables (`.env` file):
   ```env
   MONGO_URI=your_mongodb_connection_string
   GOOGLE_API_KEY=your_google_api_key
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React frontend:
   ```sh
   npm start
   ```

## 📡 API Endpoints
### Citizen Feedback API
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback` - Retrieve feedback data
- `GET /api/feedback/:id` - Get specific feedback

### Admin API
- `POST /api/admin/login` - Admin login
- `GET /api/admin/dashboard` - View feedback insights

## 📌 Future Enhancements
- **AI-based trend analysis** for predictive insights
- **Mobile app version** for citizen convenience
- **Voice-based feedback submission**

---
**Project By:** Bhanu Shakya 🚀

