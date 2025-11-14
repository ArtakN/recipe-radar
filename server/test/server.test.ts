import { test, beforeEach, afterEach,  vitest, it, vi, describe } from 'vitest';
import { app } from '../src/server';
import * as http from 'http';

import { ingredientsEmpty,ingredientsTomato, ingredientsTomatoOnion } from './mocks/mockIngredients';
import { mockTomatoDataRecipes } from './mocks/mockTomatoDataRecipes';
import { emptyRecipe, emptyId, emptyTitle, emptyImage, recipe, notCorrectId} from './mocks/mockRecipes';

import request from 'supertest';
import { idEmpty, idRecipe } from './mocks/mockId';
let server: http.Server;

vi.mock('../src/services/recipesService', () => ({
  getRecipesFromAPI: vi.fn().mockResolvedValue(mockTomatoDataRecipes)
}));

beforeEach(() => {
  server = app.listen();
});

afterEach(() => {
  server.close();
});

test('Server connected', async ({ expect }) => {
  const response = await request(server).get('/');

  expect(response.statusCode).toBe(200);
  expect(response.body).toBe('It is alive! 🧟');
  server.close();
});


describe('API client test', () =>{
  //* We need to create the .env.test and test/setup.ts to load the new environments before launching the tests. vitest.config.ts is also needed.
  test('API Validator', async ({ expect }) => {
    const apiKey = process.env.SPOON_API_KEY;
  
    expect(apiKey).toBeDefined();
    expect(apiKey?.length).toBeGreaterThan(0);
  });
  
  test('Ingredients Validator', async ({expect}) => {
    const responseEmpty = await request(server).get(`/recipes?ingredients=${ingredientsEmpty}`);
    expect(responseEmpty.statusCode).toBe(400);
    expect(responseEmpty.body.errors[0].msg).toBe('Missing ingredients');
  });
  
  test('Id Validator', async ({ expect }) => {
    const responseEmptyId = await request(server).get(`/recipe/${idEmpty}`);
    expect(responseEmptyId.statusCode).toBe(404);
  });
  
  test('Getting recipes by ingredient', async ({expect}) => {
    const responseTomato = await request(server).get(`/recipes?ingredients=${ingredientsTomato}`);
    expect(responseTomato.statusCode).toBe(500);
    expect(responseTomato.body.error).toBe('Failed to fetch recipes');
  });
  
  test('Getting recipes random', async ({expect}) => {
    const responseTomato = await request(server).get(`/recipes/random`);
    expect(responseTomato.statusCode).toBe(500);
    expect(responseTomato.body.error).toBe('Failed to fetch popular recipes');
  });
  
  test('Getting recipes by id', async ({expect}) => {
    const responseRecipe = await request(server).get(`/recipe/${idRecipe}`);
    expect(responseRecipe.statusCode).toBe(500);
    expect(responseRecipe.body.error).toBe('Failed to fetch recipe details');
  });
})

describe('Data Base Favourites client test', () => {
  
  test('Favourites Recipe Validator', async ({expect}) => {
    const responseEmpty = (await request(server).post('/favorites').send(emptyRecipe));
    expect(responseEmpty.statusCode).toBe(400);
    expect(responseEmpty.body.errors[0].msg).toBe('Invalid value');
    expect(responseEmpty.body.errors[1].msg).toBe('Missing or not numeric id');
    expect(responseEmpty.body.errors[2].msg).toBe('Missing or wrong Title');
    expect(responseEmpty.body.errors[3].msg).toBe('Missing or wrong img');
    
    const responseEmptyId = (await request(server).post('/favorites').send(emptyId));
    expect(responseEmptyId.statusCode).toBe(400);
    expect(responseEmptyId.body.errors[0].msg).toBe('Invalid value');
    expect(responseEmptyId.body.errors[1].msg).toBe('Missing or not numeric id');
  
    const responseEmptyTitle = (await request(server).post('/favorites').send(emptyTitle));
    expect(responseEmptyTitle.statusCode).toBe(400);
    expect(responseEmptyTitle.body.errors[0].msg).toBe('Missing or wrong Title');
  
    const responseEmptyImg = (await request(server).post('/favorites').send(emptyImage));
    expect(responseEmptyImg.statusCode).toBe(400);
    expect(responseEmptyImg.body.errors[0].msg).toBe('Missing or wrong img');
  
    const responseIncorrectId = (await request(server).post('/favorites').send(notCorrectId));
    expect(responseIncorrectId.statusCode).toBe(400);
    expect(responseIncorrectId.body.errors[0].msg).toBe('Invalid value');
  });

  test('Favourites Recipe Post', async ({expect}) => {
    await request(server).delete(`/favorites/${recipe.id}`);
    const response = (await request(server).post('/favorites').send(recipe));
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Recipe added to favorites');
  
    const responseDuplicated = (await request(server).post('/favorites').send(recipe));
    expect(responseDuplicated.status).toBe(409);
    expect(responseDuplicated.body.message).toBe('Recipe already in favorites');
  });

  test('Favourites Recipe Get', async ({expect}) => {
    await request(server).post('/favorites').send(recipe);
    const response = (await request(server).get('/favorites'));
    const stringId = ''+response.body[0].id;
    expect(stringId).toBe(recipe.id);
  });

  test('Favourites Recipe Delete', async ({expect}) => {
    await request(server).post('/favorites').send(recipe);
    const response = (await request(server).delete(`/favorites/${recipe.id}`));
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe(`Recipe ${recipe.id} deleted from favorites`)
    
    const responseTwice = (await request(server).delete(`/favorites/${recipe.id}`));
    expect(responseTwice.body.error).toBe('Recipe not found in favorites');
  });
})
