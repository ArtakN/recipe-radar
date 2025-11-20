import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Footer from '../src/components/Footer.tsx';
import HomePage from '../src/pages/HomePage.tsx';
import type { Recipe } from '../src/types/recipe';
import * as recipeService from '../services/recipeService';
import RecipePage from '../src/pages/RecipePage.tsx';

//! Mock react-router-dom
const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  useParams: () => ({ id: "645555" }),
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => <a href={to}>{children}</a>,
  MemoryRouter: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

//! Mock the recipeService
vi.mock('../services/recipeService', () => ({
  getRandomRecipes: vi.fn(),
  getRecipes: vi.fn(),
  getRecipeDetails: vi.fn(),
  postFavoriteRecipe: vi.fn(),
  getFavorites: vi.fn(),
  deleteRecipeFromFavorites: vi.fn(),
  getHistory: vi.fn(),
}));

describe('Footer component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Footer />);
    expect(container).toBeTruthy();
  });
});

describe('HomePage component', () => {
  const mockRecipes: Recipe[] = [
    {
      id: 1,
      title: 'Test Recipe 1',
      image: 'https://example.com/image1.jpg',
      readyInMinutes: 30,
    },
    {
      id: 2,
      title: 'Test Recipe 2',
      image: 'https://example.com/image2.jpg',
      readyInMinutes: 45,
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the hero section with search bar', async () => {
    vi.mocked(recipeService.getRandomRecipes).mockResolvedValue([]);

    render(<HomePage />);

    //* Wait for the component to render and check for the hero text
    await waitFor(() => {
      expect(screen.getByText(/Find the Perfect Recipe/i)).toBeInTheDocument();
    });

    expect(screen.getByPlaceholderText(/Search recipes/i)).toBeInTheDocument();
  });

  it('loads and displays popular recipes on mount', async () => {
    vi.mocked(recipeService.getRandomRecipes).mockResolvedValue(mockRecipes);

    render(<HomePage />);

    //* Wait for the async data to load
    await waitFor(() => {
      expect(screen.getByText('Popular Recipes')).toBeInTheDocument();
    });

    //* Check that recipes are displayed
    await waitFor(() => {
      expect(screen.getByText('Test Recipe 1')).toBeInTheDocument();
      expect(screen.getByText('Test Recipe 2')).toBeInTheDocument();
    });
  });

  it('handles error when fetching recipes fails', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.mocked(recipeService.getRandomRecipes).mockRejectedValue(new Error('Failed to fetch'));

    render(<HomePage />);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error rendering popular recipes:',
        expect.any(Error)
      );
    });

    consoleSpy.mockRestore();
  });

  it('displays empty state when no recipes are returned', async () => {
    vi.mocked(recipeService.getRandomRecipes).mockResolvedValue([]);

    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText('Popular Recipes')).toBeInTheDocument();
    });
  });
});


describe('RecipePage component', () => {
  const mockRecipe: Recipe = 
    {
      "id": 645555,
      "image": "https://img.spoonacular.com/recipes/645555-556x370.jpg",
      "imageType": "jpg",
      "title": "Green Tomato Salad",
      "readyInMinutes": 45,
    };
  const mockRecipeHistory =  'This is a test history' 
  
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the recipe title', async () => {
    vi.mocked(recipeService.getRecipeDetails).mockResolvedValue(mockRecipe);
    vi.mocked(recipeService.getHistory).mockResolvedValue(mockRecipeHistory);

    render(<RecipePage/>);

    //* Wait for the component to render and check for title text
    await waitFor(() => {
      expect(screen.getByText(/Green Tomato Salad/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Recipe History/i)).toBeInTheDocument();
  });

  it('It loads the recipe history', async () => {
    vi.mocked(recipeService.getRecipeDetails).mockResolvedValue(mockRecipe);
    vi.mocked(recipeService.getHistory).mockResolvedValue(mockRecipeHistory);

    render(<RecipePage/>);

    //* Wait for the component to render and check for title text
    await waitFor(() => {
      expect(screen.getByText(/Green Tomato Salad/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Recipe History/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a test history/i)).toBeInTheDocument();
  });
});