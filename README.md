
# 🍳 Recipe Radar

Recipe Radar is a full-stack web application that helps users discover recipes based on available ingredients using the Spoonacular API.

Developed as a personal portfolio project demonstrating frontend development, backend integration, REST APIs, and database management.

## ✨ Features

- Search recipes by available ingredients.
- View detailed recipe information.
- Discover popular and random recipes.
- Save favorite recipes.
- Integration with an external recipe API.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | User interface |
| TypeScript | Type safety |
| Vite | Development and build tooling |
| Tailwind CSS | Styling |
| Node.js | Backend runtime |
| Express | REST API backend |
| SQLite | Database |
| Spoonacular API | Recipe data |

## 🏗️ Architecture

The application is organized into two main components:

### Frontend
- React and TypeScript.
- User interface and recipe discovery.
- Communication with backend services.

### Backend
- Node.js and Express.
- Integration with the Spoonacular API.
- SQLite database.

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- Git
- Spoonacular API key

### 1. Clone the repository

```bash
git clone https://github.com/ArtakN/recipe-radar.git
cd recipe-radar
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `server` directory:

```env
SPOONACULAR_API_KEY=your_api_key_here
```

Get your API key from the [Spoonacular API Console](https://spoonacular.com/food-api/console#Profile).

Do not commit your API key or `.env` file to the repository.

### 5. Start the backend

From the project root:

```bash
cd server
npm run dev
```

### 6. Start the frontend

Open a separate terminal in the project root:

```bash
cd client
npm run dev
```

Open the local URL displayed in the terminal.

## 📁 Project Structure

```text
recipe-radar/
├── client/    # React and TypeScript frontend
├── server/    # Node.js and Express backend
└── README.md
```

## 👨‍💻 Author

Artak Navoyan — Frontend Developer

- [Portfolio](https://artaknavoyan.xyz)
- [GitHub](https://github.com/ArtakN)
- [LinkedIn](https://www.linkedin.com/in/artaknavoyan/)
- [Email](mailto:navoyan.ab@gmail.com)
