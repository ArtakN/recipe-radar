import type { Recipe } from '../src/types/recipe';

const storageKey = 'recipe-radar-favorites';

function readFavorites() {
  if (typeof window === 'undefined') {
    return [] as Recipe[];
  }

  const raw = window.localStorage.getItem(storageKey);

  if (!raw) {
    return [] as Recipe[];
  }

  try {
    return JSON.parse(raw) as Recipe[];
  } catch {
    window.localStorage.removeItem(storageKey);
    return [] as Recipe[];
  }
}

function writeFavorites(favorites: Recipe[]) {
  window.localStorage.setItem(storageKey, JSON.stringify(favorites));
}

export function getFavorites() {
  return readFavorites();
}

export function isFavoriteRecipe(recipeId: number) {
  return readFavorites().some((recipe) => recipe.id === recipeId);
}

export function addFavoriteRecipe(recipe: Recipe) {
  const favorites = readFavorites();

  if (favorites.some((item) => item.id === recipe.id)) {
    return favorites;
  }

  const nextFavorites = [...favorites, recipe];
  writeFavorites(nextFavorites);
  return nextFavorites;
}

export function deleteFavoriteRecipe(recipeId: number) {
  const nextFavorites = readFavorites().filter((recipe) => recipe.id !== recipeId);
  writeFavorites(nextFavorites);
  return nextFavorites;
}
