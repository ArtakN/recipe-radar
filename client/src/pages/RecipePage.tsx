import Header from '../components/Header';
import { Clock, Flame } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRecipeDetails } from '../../services/recipeService';
import type { Recipe, ExtendedIngredient, InstructionStep } from '../types/recipe';

export default function RecipePage() {
  const [recipeDetails, setRecipeDetails] = useState<Recipe | null>(null);
  const { id } = useParams<{ id: string }>();

  console.log(recipeDetails);

  useEffect(() => {
    async function loadRecipeDetails() {
      try {
        if (!id) return;
        const data = await getRecipeDetails(Number(id));
        setRecipeDetails(data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    }

    loadRecipeDetails();
  }, [id]);

  const calories =
    recipeDetails?.nutrition?.nutrients?.find((n) => n.name === 'Calories')?.amount ?? 'N/A';

  return (
    <div className="min-h-screen bg-white">
      <div className="shadow-sm">
        <div className="container mx-auto px-4 py-4 ">
          <Header logoColor="text-gray-800" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 w-6xl">
        <div className="flex flex-row gap-8 mb-12  justify-between items-start">
          <div className="lg:flex-1">
            <div className="flex items-center text-lg text-emerald-700 gap-6 mb-8">
              {/* Time */}
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6" />
                <p>
                  <span className="text-3xl font-bold mr-1">{recipeDetails?.readyInMinutes}</span>
                  min
                </p>
              </div>
              {/* Calories */}
              <div className="flex items-center gap-2">
                <Flame className="w-6 h-6" />
                <p>
                  <span className="text-3xl font-bold mr-1">{calories}</span> Calories
                </p>
              </div>
            </div>
            {/* Title */}
            <h1 className="text-5xl font-bold mb-6">{recipeDetails?.title}</h1>
            {/* Descripton */}
            <div
              className="text-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: recipeDetails?.summary || '' }}
            />
          </div>

          {/* Main image */}
          <div className="w-[500px] flex justify-end">
            <img
              src={recipeDetails?.image}
              alt="recipe-image"
              className="w-[500px] h-[700px] rounded-2xl object-cover shadow-lg"
              style={{
                width: '500px',
                height: '700px',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

        {/* Ingridinets */}
        {recipeDetails?.extendedIngredients && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Ingredients</h2>
              <p className="text-gray-600">
                {recipeDetails.extendedIngredients.length} ingredients
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm ">
              <div className="grid gap-4">
                {recipeDetails.extendedIngredients.map((ingredient: ExtendedIngredient) => (
                  <div
                    key={ingredient.id}
                    className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`}
                      alt={ingredient.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">
                        {ingredient.nameClean || ingredient.name}
                      </p>
                      <p className="text-sm text-gray-600">{ingredient.original}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {ingredient.amount} {ingredient.unit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Instructon */}
        {recipeDetails?.analyzedInstructions?.[0]?.steps && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Recipe Steps</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm ">
              <div className="space-y-6">
                {recipeDetails.analyzedInstructions[0].steps.map((step: InstructionStep) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg mb-2">{step.step}</p>

                      {step.ingredients && step.ingredients.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-sm text-gray-600">Ingredients: </span>
                          {step.ingredients.map((ingredient, index: number) => (
                            <span key={index} className="text-sm bg-gray-100 px-2 py-1 rounded">
                              {ingredient.localizedName}
                            </span>
                          ))}
                        </div>
                      )}

                      {step.equipment && step.equipment.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="text-sm text-gray-600">Equipment: </span>
                          {step.equipment.map((equip, index: number) => (
                            <span key={index} className="text-sm bg-blue-100 px-2 py-1 rounded">
                              {equip.localizedName}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
