import SearchBar from '../components/SearchBar';
import hero from '../assets/hero.jpg';
import Header from '../components/Header';
import RecipesList from '../components/RecipesList';
import type { Recipe } from '../types/recipe';
import { useEffect, useState } from 'react';
import { getRandomRecipes } from '../../services/recipeService';
import Footer from '../components/Footer';

export default function HomePage() {
  const [fetchedRecipes, setFetchedRecipes] = useState<Recipe[]>([]);
  const [listTitle, setListTitle] = useState('');

  useEffect(() => {
    async function loadPopularRecipes() {
      try {
        const data = await getRandomRecipes();
        setFetchedRecipes(data);
        setListTitle('Popular Recipes');
      } catch (error) {
        console.error('Error rendering popular recipes:', error);
      }
    }

    loadPopularRecipes();
  }, []);

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-[700px] flex flex-col items-center w-full"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
          backgroundBlendMode: 'darken',
        }}>
        <div className=" mx-auto px-50 pt-10 w-full">
          <Header logoColor="text-white" />
        </div>
        {/* Hero section */}
        <div className="w-1/3 my-auto">
          <h2 className="text-4xl font-semibold text-white text-center drop-shadow-lg mb-10">
            Find the Perfect Recipe with What’s Already in Your Fridge
          </h2>
          <SearchBar setFetchedRecipes={setFetchedRecipes} setListTitle={setListTitle} />
        </div>
      </div>
      <div className="max-w-5xl mx-auto pt-16 mb-10">
        <RecipesList fetchedRecipes={fetchedRecipes} listTitle={listTitle} />
      </div>
      <Footer />
    </div>
  );
}
