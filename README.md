---

# 🍳 Recipe Radar

**Recipe Radar** — это современное full-stack веб-приложение, которое помогает находить новые блюда по ингредиентам, которые у вас уже есть.
Использует **Spoonacular API**, быстрый фронтенд на **React**, и лёгкий backend на **Node.js + SQLite**.

---

## 🚀 Features

* 🔍 Поиск рецептов по ингредиентам
* 📖 Детальная страница рецепта
* 🎲 Популярные и случайные блюда
* ❤️ Добавление рецептов в избранное
* ⚡ Быстрый интерактивный UI (React + Tailwind)
* 🔗 API-интеграция с Spoonacular

---

## 🛠 Tech Stack

### **Frontend**

* React 19
* TypeScript
* Vite
* Tailwind CSS

### **Backend**

* Node.js
* Express
* TypeScript
* SQLite
* Spoonacular API

---

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/ArtakN/recipe-radar.git
cd recipe-radar
```

### 2. Install dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd server
npm install
```

---

## ▶️ Running the App

### **Backend**

```bash
cd server
npm run dev   # nodemon src/server.ts
```

### **Frontend** (в отдельном терминале)

```bash
cd client
npm run dev
```

---

## 🔑 Environment Variables

Создайте файл `.env` в `/server`:

```
SPOONACULAR_API_KEY=your_api_key_here
```

Получить ключ можно здесь:
[https://spoonacular.com/food-api/console#Profile](https://spoonacular.com/food-api/console#Profile)

---


