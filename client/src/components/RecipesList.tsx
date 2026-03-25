import RecipeCard from './RecipeCard';
import type { Recipe } from '../types/recipe';

interface RecipesListProps {
  fetchedRecipes: Recipe[];
  listTitle: string;
}

export default function RecipesList({ fetchedRecipes, listTitle }: RecipesListProps) {
  if (!listTitle) {
    return null;
  }

  return (
    <div>
      <h2 className="text-5xl font-bold mb-10">{listTitle}</h2>
      {fetchedRecipes.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white px-8 py-14 text-center text-gray-500 shadow-sm">
          No recipes found for this search. Try different ingredients.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
          {fetchedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
