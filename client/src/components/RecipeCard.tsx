import { Star, Clock, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const navigate = useNavigate();
  function recipeClickHandler() {
    navigate(`/recipe/${recipe.id}`);
  }

  const calories = recipe.nutrition?.nutrients?.find(
    (nutrient) => nutrient.name === 'Calories',
  )?.amount;

  return (
    <div
      className="min-w-[500px] bg-white rounded-2xl shadow-lg hover:shadow-lg transition overflow-hidden group hover:cursor-pointer flex flex-col"
      onClick={recipeClickHandler}>
      <img
        src={recipe.image}
        alt="recipe-image"
        className="w-full h-[200px] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />

      <div className="p-4 pb-5 flex flex-col grow justify-between">
        <h2 className="text-xl font-semibold mb-4">{recipe.title}</h2>

        <div className="mt-auto">
          <div className="flex items-center gap-1 mb-4">
            <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
            <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
            <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
            <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
            <Star className="text-gray-300 w-5 h-5" />
            <p className="text-green-600 text-sm ml-2 font-medium">{recipe.likes} ratings</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-600 gap-6">
              {recipe.readyInMinutes && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>{recipe.readyInMinutes} min</span>
                </div>
              )}
              {calories && (
                <div className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-gray-500" />
                  <span>{calories} Calories</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            {recipe.diets?.slice(0, 3).map((diet) => (
              <span
                key={diet}
                className="bg-gray-50 text-gray-600 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">
                {diet.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
