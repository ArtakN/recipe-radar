import { useEffect, useState } from "react";
import { getHistory } from "../../services/recipeService";
import type { Recipe } from "../types/recipe";

export default function AIHistory({ recipe }: { recipe: Recipe | null }) {
  const [history, setHistory] = useState<string | null>(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHistory() {
      try {
        if (!recipe) return;
        const data = await getHistory(recipe.title);
        setHistory(data);
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    }

    loadHistory();
  }, [recipe]);

  return (
    <div className="flex items-center justify-between">
      <p style={{ whiteSpace: "pre-line" }} className="text-lg text-justify">{history}</p>
    </div>
  );
}
