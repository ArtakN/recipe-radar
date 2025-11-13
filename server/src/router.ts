import { Router } from 'express';
import { getRecipes, getRandomRecipes, getRecipeDetails } from './controllers/recipesController';
import { addFavorite, getFavorites, deleteFavorite } from './controllers/favoritesController';
import 'dotenv/config';
import { ApiKeiValidator } from './validators/apiKeyValidator';
import { IdValidator, IngredientsValidator, RecipeValidator } from './validators/recipesValidator';

const router = Router();
// Recipes
router.get('/recipes',ApiKeiValidator, IngredientsValidator, getRecipes);
router.get('/recipes/random',ApiKeiValidator, getRandomRecipes);
router.get('/recipes/:id',IdValidator, getRecipeDetails);

// Favorites
router.post('/favorites',RecipeValidator, addFavorite);
router.get('/favorites', getFavorites);
router.delete('/favorites/:id',IdValidator, deleteFavorite);

export default router;
