import { Router, Request, Response } from 'express';
import 'dotenv/config';

const router = Router();

router.get('/recipes', async (req: Request, res: Response) => {
  const ingredients = req.query.ingredients as string;
  const apiKey = process.env.SPOON_API_KEY;

  if (!ingredients) {
    return res.status(400).json({ error: 'Missing ingredients' });
  }

  if (!apiKey) {
    return res.status(500).json({ error: 'Missing API key' });
  }

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(
        ingredients,
      )}&number=6&apiKey=${apiKey}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch recipes: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

router.get('/recipes/random', async (req: Request, res: Response) => {
  const apiKey = process.env.SPOON_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Missing API key' });
  }

  try {
    // Лучше использовать complexSearch с сортировкой по популярности:
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=8&addRecipeInformation=true&apiKey=${apiKey}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch popular recipes: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data.results || data);
  } catch (error) {
    console.error('Error fetching popular recipes:', error);
    res.status(500).json({ error: 'Failed to fetch popular recipes' });
  }
});

router.get('/recipes/:id', async (req: Request, res: Response) => {
  const apiKey = process.env.SPOON_API_KEY;
  const { id } = req.params;

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`,
    );
    if (!response.ok) throw new Error('Failed to fetch recipe details');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    res.status(500).json({ error: 'Failed to fetch recipe details' });
  }
});

export default router;
