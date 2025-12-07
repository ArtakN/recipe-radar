# 🍳 Recipe Radar

**Recipe Radar** is a full-stack web application that helps you discover new meals
based on the ingredients you already have — powered by the
[Spoonacular API](https://spoonacular.com/food-api).

---

## 🚀 Features

* 🔍 Search recipes by ingredients
* 🧠 View detailed recipe information
* 🎲 Explore popular and random meals
* ❤️ Save your favorite recipes

---

## 🛠 Tech Stack

### **Frontend**

* React 19
* TypeScript
* Vite
* Tailwind CSS

### **Backend**

* Node.js / Express
* TypeScript
* SQLite
* Spoonacular API

---

## 🧰 Installation

### **1. Clone the repository**

```bash
git clone https://github.com/<your-username>/recipe-radar.git
cd recipe-radar
```

### **2. Install dependencies (client & server)**

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd ../server
npm install
```

---

## ▶️ Running the App

### **Start the backend**

```bash
cd server
npm run dev   # runs nodemon src/server.ts
```

### **Start the frontend (in a separate terminal)**

```bash
cd client
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `/server` directory:

```
SPOONACULAR_API_KEY=your_api_key_here
```

Get your API key here:
[https://spoonacular.com/food-api/console#Profile](https://spoonacular.com/food-api/console#Profile)

---

