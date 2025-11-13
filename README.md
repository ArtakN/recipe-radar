# 🍳 Recipe Radar
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

**Recipe Radar** is a full-stack web app that helps you discover new meals
based on the ingredients you already have — powered by the [Spoonacular API](https://spoonacular.com/food-api).

---

## 🚀 Features

- 🔍 Search recipes by ingredients
- 🧠 View detailed recipe info
- 🎲 Discover popular or random meals
- ❤️ Save your favorite recipes

---

## 🛠 Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS

### Backend

- Node.js / Express
- TypeScript
- SQLite
- Spoonacular API

---

## 🧰 Installation

# Clone repo

git clone https://github.com/<your-username>/recipe-radar.git
cd recipe-radar

# Install dependencies for both client and server

cd client && npm install
cd server && npm install

---

## ▶️ Run the app

# Backend

cd server
npm run dev # runs nodemon src/server.ts

# Frontend (in another terminal)

cd ../client
npm run dev

---

## 🔑 Environment Variables

Create `.env` in `/server`:

SPOON_API_KEY=your_api_key_here

You can get an API key here: https://spoonacular.com/food-api/console#Profile
