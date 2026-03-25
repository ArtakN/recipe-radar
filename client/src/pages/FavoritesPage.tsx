import Header from '../components/Header';
import { useEffect, useState } from 'react';
import type { Recipe } from '../types/recipe';
import RecipeCard from '../components/RecipeCard';
import { getFavorites } from '../../services/favoritesService';

export default function FavoritesPage() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setFavoriteRecipes(getFavorites());
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto px-50 py-4 shadow-sm w-full">
        <Header logoColor="text-gray-800" />
      </div>
      <div className="max-w-5xl mx-auto pt-16 mb-10">
        <h2 className="text-5xl font-bold mb-10">Favorite Recipes</h2>
        {favoriteRecipes.length === 0 ? (
          <p className="text-center">You don&apos;t have any favorite recipes yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
