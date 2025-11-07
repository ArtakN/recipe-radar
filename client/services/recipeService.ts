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
