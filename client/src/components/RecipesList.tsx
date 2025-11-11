import RecipeCard from './RecipeCard';
import type { Recipe } from '../types/recipe';

interface RecipesListProps {
  fetchedRecipes: Recipe[];
  listTitle: string;
}

export default function RecipesList({ fetchedRecipes, listTitle }: RecipesListProps) {
  return (
    <div>
      <h2 className="text-5xl font-bold mb-10">{listTitle}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
        {fetchedRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
