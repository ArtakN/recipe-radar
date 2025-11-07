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
      )}&number=5&apiKey=${apiKey}`,
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

export default router;
