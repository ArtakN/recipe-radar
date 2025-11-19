
# BE
 
Implement validators file

## Install new dependency 

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

Ensures the server has a valid API key configured before performing any API calls


## 🧾 recipesValidators.js

### Purpose:
Contains multiple validators used in recipe-related routes for validating query parameters, route params, and request body fields.

Path: validators/recipesValidators.js

### 🔹 IngredientsValidator

Validates query parameters when searching for recipes by ingredients.

### 🔹 IdValidator

Ensures a valid recipe ID is provided in the route parameters.

### 🔹 RecipeValidator

Validates the structure and types of data in recipe creation or update requests.

## ✅ Summary

All request validations are now centralized under the validators/ directory.

Express middlewares handle input validation before reaching controllers.


## 🔬 Testing 

Implemented testing of the BE,FE and E2E of the app.

### by MIGUEL & ALFREDO
