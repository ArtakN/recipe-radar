const baseURL = 'http://localhost:3000';

// Recipes - Resquests to spoonacular API

export async function getRecipes(ingredients: string) {
  try {
    const response = await fetch(`${baseURL}/recipes?ingredients=${ingredients}`);
    if (!response.ok) throw new Error('Failed to fetch recipes');
    return await response.json();
  } catch (error) {
    console.error('Fetch error (getRecipes):', error);
    throw error;
  }
}

export async function getRandomRecipes() {
  try {
    const response = await fetch(`${baseURL}/recipes/random`);
    if (!response.ok) throw new Error('Failed to fetch recipes');
    return await response.json();
  } catch (error) {
    console.error('Fetch error (getRandomRecipes):', error);
    throw error;
  }
}

export async function getRecipeDetails(id: number) {
  try {
    const response = await fetch(`${baseURL}/recipe/${id}`);
    if (!response.ok) throw new Error('Failed to fetch recipe details');
    return await response.json();
  } catch (error) {
    console.error('Fetch error (getRecipeDetails):', error);
    throw error;
  }
}

// Favorite Recipes - Requests to local db

export async function postFavoriteRecipe(recipeData: object) {
  try {
    const response = await fetch(`${baseURL}/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipeData),
    });

    if (!response.ok) throw new Error('Failed to save favorite recipe');
    return await response.json();
  } catch (error) {
    console.error('Fetch error (postFavoriteRecipe):', error);
    throw error;
  }
}

export async function getFavorites() {
  try {
    const response = await fetch(`${baseURL}/favorites`);
    if (!response.ok) throw new Error('Failed to fetch favoirtes');
    return await response.json();
  } catch (error) {
    console.error('Fetch error (getFavorites):', error);
    throw error;
  }
}

export async function deleteRecipeFromFavorites(id: number) {
  try {
    const response = await fetch(`${baseURL}/favorites/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Failed to delete favorite recipe');
    return await response.json();
  } catch (error) {
    console.error('Fetch error (deleteRecipeFromFavorites):', error);
    throw error;
  }
}
