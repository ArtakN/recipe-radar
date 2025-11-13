import { Request, Response } from 'express';
import 'dotenv/config';
import { validationResult } from 'express-validator';

const apiKey = process.env.SPOON_API_KEY;

export async function getRecipes(req: Request, res: Response) {

  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array()});
  }

  const ingredients = req.query.ingredients as string;

  
  try {
    console.log(ingredients);
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(
        ingredients
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
}

// get random recipes
export async function getRandomRecipes(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array()});
  }
  //TODO remove unnecesary apiKey
  const apiKey = process.env.SPOON_API_KEY;

  try {
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
}

// get single recipe details
export async function getRecipeDetails(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array()});
  }

  //TODO remove unnecesary call to apiKEY
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
}
