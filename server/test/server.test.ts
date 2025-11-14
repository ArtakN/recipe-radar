import { test, beforeEach, afterEach, expect, vitest, it, vi } from 'vitest';
import { app } from '../src/server';
import * as http from 'http';

import { ingredientsEmpty,ingredientsTomato, ingredientsTomatoOnion } from './mocks/mockIngredients';

import request from 'supertest';
let server: http.Server;

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

  const responseTomato = await request(server).get(`/recipes?ingredients=${ingredientsTomato}`);
  console.log(responseTomato.body);
  expect(responseTomato.statusCode).toBe(500);
  expect(responseTomato.body.error).toBe('Failed to fetch recipes');
});