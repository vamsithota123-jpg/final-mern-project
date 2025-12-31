
<img width="1307" height="578" alt="image" src="https://github.com/user-attachments/assets/fd1b89bc-8ce1-4191-8278-4e605858df05" />


🏸 Badminton Tournament Results Dashboard (MERN Stack)

This project is a **basic end-to-end MERN stack web application** that displays badminton tournament participants and results structure.  
The goal of this assignment is to demonstrate **data handling, backend–frontend integration, MongoDB usage, and responsive UI design**, rather than complex UI or paid tools.

The application runs **completely on localhost** using **free and open-source technologies only**.

---

## 📌 Project Overview

- Backend stores tournament player data in **MongoDB**
- Backend exposes REST APIs using **Express.js**
- Frontend fetches data using **React**
- Players are displayed in a **grid layout**
- Players are logically divided into:
  - Quarterfinals
  - Semifinals
  - Final
- The UI is responsive and works on:
  - Desktop
  - Tablet
  - Mobile

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Local)
- Mongoose
- dotenv
- CORS

### Frontend
- React.js (Vite)
- JavaScript
- CSS (Media Queries for responsiveness)
- Fetch API

---

---

## 📊 Data Handling

- Player data is **manually seeded** into MongoDB using a seed script.
- Each player contains:
  - Name
  - Category
  - Image URL
  - Country
- Tournament rounds (Quarterfinal, Semifinal, Final) are **logically divided on the frontend only** using array slicing.
- This keeps the backend simple and focuses on frontend data rendering.

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Prerequisites

Make sure you have the following installed:
- Node.js (v16 or above)
- MongoDB (local installation)
- Git

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
MONGO_URI=mongodb://127.0.0.1:27017/sports-dashboard1


node src/seed/players.seed.js


## 🗂️ Folder Structure
project-root/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── models/
│   │   │   ├── Player.js
│   │   │   └── Match.js
│   │   ├── controllers/
│   │   │   └── playerController.js
│   │   ├── routes/
│   │   │   └── playerRoutes.js
│   │   ├── seed/
│   │   │   └── players.seed.js
│   │   └── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── PlayerGrid.jsx
│   │   │   ├── PlayerSections.jsx
│   │   │   └── PlayerGrid.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── index.html
│
└── README.md


