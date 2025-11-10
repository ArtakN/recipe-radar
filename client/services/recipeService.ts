const baseURL = 'http://localhost:3000';

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
    const response = await fetch(`${baseURL}/recipes/${id}`);
    if (!response.ok) throw new Error('Failed to fetch recipe details');
    return await response.json();
  } catch (error) {
    console.error('Fetch error (getRecipeDetails):', error);
    throw error;
  }
}
