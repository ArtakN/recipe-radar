import type { Recipe } from '../src/types/recipe';

const apiKey = import.meta.env.VITE_SPOON_API_KEY;
const apiBaseUrl = 'https://api.spoonacular.com';

function getUrl(path: string, params: Record<string, string>) {
  if (!apiKey) {
    throw new Error('Missing Spoonacular API key. Set VITE_SPOON_API_KEY in the client environment.');
  }

  const searchParams = new URLSearchParams({ ...params, apiKey });
  return `${apiBaseUrl}${path}?${searchParams.toString()}`;
}

async function request<T>(path: string, params: Record<string, string>) {
  const response = await fetch(getUrl(path, params));

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return (await response.json()) as T;
}

export async function getRecipes(ingredients: string) {
  return request<Recipe[]>('/recipes/findByIngredients', {
    ingredients,
    number: '6',
  });
}

export async function getRandomRecipes() {
  const data = await request<{ results: Recipe[] }>('/recipes/complexSearch', {
    sort: 'popularity',
    number: '8',
    addRecipeInformation: 'true',
  });

  return data.results;
}

export async function getRecipeDetails(id: number) {
  return request<Recipe>(`/recipes/${id}/information`, {
    includeNutrition: 'true',
  });
}
