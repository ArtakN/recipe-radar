import { useState } from 'react';
import { getRecipes } from '../../services/recipeService';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [ingredients, setIngredients] = useState('');

  async function handleSearch() {
    try {
      const data = await getRecipes(ingredients);
      console.log(data);
    } catch (error) {
      console.log('Error fetching recipes:', error);
    }
  }

  return (
    <div className="w-full max-w-xl flex relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        className="w-full bg-white h-12 rounded-full pl-12 pr-36 text-gray-700 placeholder-gray-400 text-lg focus:outline-none shadow-md"
        placeholder="Search recipes..."
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button
        className="bg-emerald-500 px-4 rounded-full text-white absolute right-1 top-1/2 -translate-y-1/2 h-10 w-32 font-semibold shadow-md hover:bg-emerald-600 transition cursor-pointer"
        onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
