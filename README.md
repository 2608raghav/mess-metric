# 🌿 Mess-Metric: AI & Web3 Food Sustainability Portal

**Transforming campus dining with AI waste forecasting, smart procurement, and Web3-powered student rewards.**

🏆 **Hackathon Achievement:** Top 6 Finalist in our specific theme (Top 38 Out of ~137 Teams) in a month-long INNOVIT'26 Hackathon by Blockchain Club VITB!

🌐 **Live Demo:** https://mess-metric.vercel.app  

## 🚀 Overview
Mess-Metric is a comprehensive, enterprise-grade solution designed to bridge the gap between students and mess management. By digitizing the feedback loop, predicting daily footfall with ML, and gamifying sustainability using blockchain technology, we aim to drastically reduce the thousands of kilograms of food wasted on college campuses every year.

## ✨ Key Features

### 👨‍🎓 For Students
* **Web3 Reward Store:** Earn **MEAL Tokens** on the Polygon blockchain for skipping meals you won't eat. Spend them in our integrated store for real-world rewards (Cold Coffee, Extra Dessert) and instantly receive automated QR codes via email.
* **Smart Meal Skipping:** Toggle your attendance for upcoming meals so the kitchen knows exactly how much to cook. Scans are verified via admin approval.
* **AI-Powered Reviews:** Submit daily food reviews. Our Gemini AI automatically tags them by sentiment and assigns a Severity Score (-1 to +1).
* **Gamified Sustainability:** Compete on the live Leaderboard to become the monthly "Green Champion."

### 👨‍🍳 For Admins/Managers
* **AI Waste Forecaster:** Input expected attendance, day of the week, and special events to generate highly accurate ML predictions of expected food waste in kilograms.
* **Smart Procurement Calculator:** Instantly calculate exact raw material requirements (Rice, Dal, Veggies) based on live student footfall data.
* **Live Biometric Approvals:** A real-time dashboard to verify student skips and manually mint MEAL tokens directly to their Web3 wallets.
* **Severity Alerts & Analytics:** Instantly highlight critical negative feedback and visualize weekly attendance trends.

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React.js (Vite), Tailwind CSS, Framer Motion, Recharts |
| **Backend** | Node.js, Express.js, Nodemailer (Automated Emails) |
| **Database** | MongoDB Atlas, Mongoose |
| **AI Engine** | Google Gemini API (NLP), Custom Python ML Model (Waste Prediction) |
| **Web3 / Blockchain** | Polygon Amoy Testnet, Solidity Smart Contracts, Web3.js, MetaMask |
| **Deployment** | Vercel (Frontend) + Render (Backend API) |

## ⚡ Quick Start (Run Locally)

**1. Clone the Repository**
```bash
git clone [https://github.com/VITianYash42/mess-metric.git](https://github.com/VITianYash42/mess-metric.git)
cd mess-metric 

### 2. Backend Setup
```bash
cd server
npm install
```

Create a .env file in the server folder:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_google_gemini_key
```

Run the server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../client
npm install
npm run dev
```

## 🔐 Demo Credentials (For Judges)

Don't want to sign up? Use our one-click **Demo Mode** on the Login page, or use these credentials:

* **Role:** Student / Judge
* **Email:** `judge@vitbhopal.ac.in`
* **Password:** `JudgePass123`

---

## 🤝 Contributors

* **Yash Singhal** - Project Architect, Full-Stack Integration, AI Logic, & Blockchain Development
* **Aditya Mittal** - Frontend Architecture & UI/UX
* **Raghav Gupta** - Backend API, Security, & Database Architecture

---

Made with 💚 by **Cloud Chanakyas** for a greener future.
