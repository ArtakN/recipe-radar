import { Request, Response } from 'express';
import { Favorite } from '../models/Favorite';
import { validationResult } from 'express-validator';

// post a favorite recipe
export async function addFavorite(req: Request, res: Response) {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array()});
  }

  try {
    const { id, title, image, calories, readyInMinutes } = req.body;

    const existing = await Favorite.findByPk(id);
    if (existing) {
      return res.status(409).json({ message: 'Recipe already in favorites' });
    }

    const favorite = await Favorite.create({
      id,
      title,
      image,
      calories,
      readyInMinutes,
    });

    res.json({ success: true, message: 'Recipe added to favorites', favorite });
  } catch (error) {
    console.error('Error adding favorite:', error);
    res.status(500).json({ error: 'Failed to add favorite' });
  }
}

// get favoirte recipes
export async function getFavorites(req: Request, res: Response) {
  try {
    const favorites = await Favorite.findAll();
    res.json(favorites);
  } catch (error) {
    console.error('Error fetching favorites:', error);
    res.status(500).json({ error: 'Failed to fetch favorites' });
  }
}

// delete a recipe from favorites
export async function deleteFavorite(req: Request, res: Response) {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array()});
  }

  try {
    const { id } = req.params;
    const deleted = await Favorite.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: 'Recipe not found in favorites' });
    }

    res.json({ success: true, message: `Recipe ${id} deleted from favorites` });
  } catch (error) {
    console.error('Error deleting favorite:', error);
    res.status(500).json({ error: 'Failed to delete favorite' });
  }
}
