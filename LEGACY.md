# 🌐 Frontend – Overview

The frontend implements a modern, modular architecture using **React**, with a strong focus on component reusability and testability.  
It communicates with the backend through a lightweight API layer and includes full testing coverage using **Vitest** and **Playwright**.

---

## 🖥️ Tech Stack

- ⚛️ **React** (Hooks + Functional Components)
- 🧪 **Vitest** – unit & integration tests
- 🧭 **React Testing Library** – component testing
- 🎭 **Playwright** – end-to-end testing
- 🧰 **Vite** – development server + bundler

---

# 🧩 Backend – Validators Overview

This document describes how the **validation layer** is implemented in the backend, including folder structure, installed dependencies, validator files, and their purposes.

---

## 📦 Install Required Dependency

To enable request validation, install **express-validator**:

```bash

npm install express-validator

```

## 🗂️ Folder Structure
```
validators/
│
├── ApiKeyValidator.js
└── recipesValidators.js

```

## 🔐 ApiKeyValidator.js

### Purpose:

Ensures a valid API key exists in the server configuration before executing any API-related operations.

This prevents unauthorized requests and guarantees the environment is properly configured.



## 🧾 recipesValidators.js

### Purpose:

Contains multiple reusable validators for recipe-related API endpoints.
Its responsibilities include validating query parameters, route parameters, and request body fields.

Path: validators/recipesValidators.js

### 🔹 IngredientsValidator

Validates the ingredients query parameter when searching for recipes.
Ensures it exists, is not empty, and is properly formatted.

### 🔹 IdValidator

Ensures a valid recipe ID is provided through route parameters before accessing, editing, or deleting a recipe.

### 🔹 RecipeValidator

Validates the structure and expected types for recipe creation and update requests.
Guarantees the integrity of input data before it reaches controllers.

## ✅ Summary

All validation logic is now centralized in the validators/ folder.

Express middlewares ensure all incoming data is validated before reaching any controller logic.

This improves code cleanliness, reduces duplication, and increases API reliability.


## 🔬 Testing 

Comprehensive testing has been implemented across:

Backend (BE)

Frontend (FE)

End-to-End (E2E)

This guarantees correctness, stability, and confidence across the entire application.

### 🧪 Testing Badges
![Vitest](https://img.shields.io/badge/Tests-Vitest-purple?logo=vitest)
![Playwright](https://img.shields.io/badge/E2E-Playwright-green?logo=playwright)
![RTL](https://img.shields.io/badge/Testing%20Library-React-red?logo=testing-library)

### by MIGUEL & ALFREDO
