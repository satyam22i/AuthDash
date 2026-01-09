# 🚀 TaskMaster - Scalable MERN Stack Application

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge&logo=react)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

A robust Full Stack Web Application built for the **Frontend Developer Intern Task**. This application features secure JWT authentication, a responsive dashboard, and full CRUD capabilities for managing tasks.

## 🔗 Live Demo
**[CLICK HERE TO VIEW DEPLOYED PROJECT](https://auth-dash-sable.vercel.app/)** 

---

## ✨ Key Features
* **🔐 Secure Authentication:** User Registration & Login using **JWT (JSON Web Tokens)** & **Bcrypt** hashing.
* **🛡️ Protected Routes:** Dashboard access is restricted to authenticated users only.
* **📝 CRUD Operations:** Create, Read, Update, and Delete tasks seamlessly.
* **🔍 Search & Filter:** Real-time search functionality to filter tasks instantly.
* **🎨 Responsive UI:** Built with **React + TailwindCSS** for a clean, mobile-friendly interface.
* **⚡ Scalable Architecture:** Modular backend structure (Models, Routes, Controllers) designed for growth.

---

## 🛠️ Tech Stack
* **Frontend:** React.js (Vite), TailwindCSS, Axios, React Router DOM
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JSON Web Token (JWT), Bcrypt.js

---

## 📂 Project Structure

```bash
AuthDashboard/
│
├── backend/                 # Node.js & Express API
│   ├── middleware/
│   │   └── auth.js          # JWT Verification Middleware
│   ├── models/
│   │   ├── User.js          # User Schema
│   │   └── Task.js          # Task Schema
│   ├── routes/
│   │   ├── auth.js          # Login & Register Routes
│   │   └── tasks.js         # CRUD Routes for Tasks
│   ├── .env                 # Environment Variables
│   └── server.js            # Entry Point
│
└── frontend/                # React.js Client
    ├── src/
    │   ├── pages/
    │   │   ├── Login.jsx    # Authentication Forms
    │   │   ├── Register.jsx
    │   │   └── Dashboard.jsx # Main App Interface
    │   ├── utils/
    │   │   └── api.js       # Axios Instance with Interceptors
    │   ├── App.jsx          # Routing Logic
    │   └── main.jsx
    └── package.json

```
Installation & Setup
Follow these steps to run the project locally.

Clone the Repository

```
git clone repo url
cd AuthDashboard
```

Backend Setup

```
cd backend
npm install
```
Create a .env file in the backend folder and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```
Start the both Server (Frontend and Backend)



**Developed by:**  
**Satyam Shrivastava**  
**IIT Patna**

**Role:** Full-Stack Web Developer  
**Tech Stack:** React, Node.js, Express.js, PostgreSQL, Tailwind CSS

📧 **Email:** satyamkum2020@gmail.com   
🌐 **Location:** India
