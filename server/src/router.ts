import { Router } from 'express';
import { getRecipes, getRandomRecipes, getRecipeDetails } from './controllers/recipesController';
import { addFavorite, getFavorites, deleteFavorite } from './controllers/favoritesController';
import 'dotenv/config';

const router = Router();

// Recipes
router.get('/recipes', getRecipes);
router.get('/recipes/random', getRandomRecipes);
router.get('/recipes/:id', getRecipeDetails);

// Favorites
router.post('/favorites', addFavorite);
router.get('/favorites', getFavorites);
router.delete('/favorites/:id', deleteFavorite);

export default router;
